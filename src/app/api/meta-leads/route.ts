import { createHmac, timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { leadEmailHtml, type Lead } from "@/lib/metaLeadEmail";

// Meta (Facebook/Instagram) Lead Ads webhook.
//
// Meta calls GET once to verify the endpoint, then POSTs a "leadgen" event every
// time someone submits an Instant Form. The event only carries the lead ID, so
// we fetch the answers from the Graph API and email them to the inbox.
//
// Required env vars (Vercel → Project → Settings → Environment Variables):
//   META_VERIFY_TOKEN       any random string; the same value goes into the Meta app's webhook settings
//   META_APP_SECRET         Meta app → App settings → Basic → App secret (used to verify Meta signed the request)
//   META_PAGE_ACCESS_TOKEN  long-lived Page or system user token with leads_retrieval for the Greenworx Page
//   RESEND_API_KEY          already set for the website forms
// Optional:
//   META_GRAPH_VERSION      defaults to v27.0

const INBOX = "hello@greenworx.co.nz";
const FROM = "Greenworx Landscaping <noreply@greenworx.co.nz>";
const GRAPH_VERSION = process.env.META_GRAPH_VERSION || "v27.0";

export const runtime = "nodejs";

// ─── Types ────────────────────────────────────────────────────────────────────

type LeadgenChange = {
  field: string;
  value: {
    leadgen_id?: string;
    form_id?: string;
    page_id?: string;
    ad_id?: string;
    adgroup_id?: string;
    created_time?: number;
  };
};

type WebhookBody = {
  object?: string;
  entry?: { id?: string; time?: number; changes?: LeadgenChange[] }[];
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

// Meta signs every POST with HMAC-SHA256 of the raw body using the app secret.
function hasValidSignature(rawBody: string, header: string | null, secret: string): boolean {
  if (!header || !header.startsWith("sha256=")) return false;
  const expected = createHmac("sha256", secret).update(rawBody, "utf8").digest("hex");
  const received = header.slice("sha256=".length);
  const a = Buffer.from(expected, "hex");
  const b = Buffer.from(received, "hex");
  return a.length === b.length && timingSafeEqual(a, b);
}

async function fetchLead(leadId: string, token: string): Promise<Lead> {
  const fields = "created_time,field_data,ad_name,campaign_name,form_id,platform,is_organic";
  const url =
    `https://graph.facebook.com/${GRAPH_VERSION}/${encodeURIComponent(leadId)}` +
    `?fields=${fields}&access_token=${encodeURIComponent(token)}`;
  const res = await fetch(url, { cache: "no-store" });
  const json = await res.json();
  if (!res.ok) {
    throw new Error(`Graph API ${res.status}: ${JSON.stringify(json?.error ?? json)}`);
  }
  return json as Lead;
}

// ─── GET: Meta endpoint verification ──────────────────────────────────────────

export async function GET(req: Request) {
  const url = new URL(req.url);
  const mode = url.searchParams.get("hub.mode");
  const token = (url.searchParams.get("hub.verify_token") ?? "").trim();
  const challenge = url.searchParams.get("hub.challenge");
  // Trim so a stray space or newline pasted into Vercel doesn't break the match.
  const expected = (process.env.META_VERIFY_TOKEN ?? "").trim();

  if (mode === "subscribe" && expected && token === expected && challenge) {
    console.log("[MetaLeads] Webhook verified");
    return new Response(challenge, { status: 200, headers: { "Content-Type": "text/plain" } });
  }
  // Log why it failed without revealing either token.
  console.warn(
    `[MetaLeads] Verify failed: mode=${mode} hasChallenge=${!!challenge} ` +
    `envSet=${!!expected} envLen=${expected.length} receivedLen=${token.length} match=${token === expected}`,
  );
  return new Response("Forbidden", { status: 403 });
}

// ─── POST: new lead events ────────────────────────────────────────────────────

export async function POST(req: Request) {
  const appSecret = process.env.META_APP_SECRET?.trim();
  const pageToken = process.env.META_PAGE_ACCESS_TOKEN?.trim();
  const resendKey = process.env.RESEND_API_KEY;

  if (!appSecret || !pageToken || !resendKey) {
    console.error("[MetaLeads] Missing env: META_APP_SECRET, META_PAGE_ACCESS_TOKEN or RESEND_API_KEY");
    return NextResponse.json({ error: "Not configured" }, { status: 500 });
  }

  const rawBody = await req.text();
  if (!hasValidSignature(rawBody, req.headers.get("x-hub-signature-256"), appSecret)) {
    console.warn("[MetaLeads] Rejected request with invalid signature");
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  let body: WebhookBody;
  try {
    body = JSON.parse(rawBody) as WebhookBody;
  } catch {
    return NextResponse.json({ error: "Bad JSON" }, { status: 400 });
  }

  if (body.object !== "page") {
    return NextResponse.json({ ok: true, ignored: true });
  }

  const leadIds = (body.entry ?? [])
    .flatMap((e) => e.changes ?? [])
    .filter((c) => c.field === "leadgen" && c.value?.leadgen_id)
    .map((c) => String(c.value.leadgen_id));

  const resend = new Resend(resendKey);
  let failed = 0;

  for (const leadId of leadIds) {
    try {
      const lead = await fetchLead(leadId, pageToken);
      const { html, name, email } = leadEmailHtml(lead);
      const { error } = await resend.emails.send({
        from: FROM,
        to: INBOX,
        ...(email ? { replyTo: email } : {}),
        subject: `New Facebook Lead: ${name}`,
        html,
      });
      if (error) throw new Error(`Resend: ${JSON.stringify(error)}`);
      console.log(`[MetaLeads] Emailed lead ${leadId}`);
    } catch (err) {
      failed++;
      console.error(`[MetaLeads] Lead ${leadId} failed:`, String(err));
    }
  }

  // A non-200 makes Meta retry the delivery later, so a temporary Graph or
  // Resend outage doesn't lose the lead.
  if (failed > 0) {
    return NextResponse.json({ ok: false, failed }, { status: 500 });
  }
  return NextResponse.json({ ok: true, processed: leadIds.length });
}
