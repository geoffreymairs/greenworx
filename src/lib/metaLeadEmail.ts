// Builds the notification email for a Meta Instant Form lead.

export type LeadField = { name: string; values: string[] };

export type Lead = {
  id: string;
  created_time?: string;
  field_data?: LeadField[];
  ad_name?: string;
  campaign_name?: string;
  form_id?: string;
  platform?: string;
  is_organic?: boolean;
};

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// "what_suburb_is_the_property_in?" → "What suburb is the property in?"
function prettyLabel(key: string): string {
  const spaced = key.replace(/_/g, " ").trim();
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}

function answer(fields: LeadField[], ...names: string[]): string {
  for (const n of names) {
    const f = fields.find((x) => x.name === n);
    if (f && f.values.length) return f.values.join(", ");
  }
  return "";
}

function formatNzTime(iso?: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleString("en-NZ", {
    timeZone: "Pacific/Auckland",
    dateStyle: "medium",
    timeStyle: "short",
  });
}

// ─── Email ────────────────────────────────────────────────────────────────────

const CONTACT_KEYS = new Set([
  "full_name", "first_name", "last_name", "email", "phone_number", "phone",
]);

function row(label: string, valueHtml: string): string {
  return `<tr>
            <td style="padding:11px 0;border-bottom:1px solid #e5e5e3;width:38%;padding-right:16px;font-family:Arial,sans-serif;font-size:10px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#999;vertical-align:top">${label}</td>
            <td style="padding:11px 0;border-bottom:1px solid #e5e5e3;font-family:Arial,sans-serif;font-size:15px;color:#1B4332">${valueHtml}</td>
          </tr>`;
}

export function leadEmailHtml(lead: Lead): { html: string; name: string; email: string; phone: string } {
  const fields = lead.field_data ?? [];
  const first = answer(fields, "first_name");
  const last = answer(fields, "last_name");
  const name = answer(fields, "full_name") || [first, last].filter(Boolean).join(" ") || "New lead";
  const email = answer(fields, "email");
  const phone = answer(fields, "phone_number", "phone");

  const e = escapeHtml;
  const contactRows = [
    row("Name", `<strong>${e(name)}</strong>`),
    phone ? row("Phone", `<a href="tel:${e(phone)}" style="color:#1B4332;font-weight:600;text-decoration:none">${e(phone)}</a>`) : "",
    email ? row("Email", `<a href="mailto:${e(email)}" style="color:#7DC143;text-decoration:none">${e(email)}</a>`) : "",
  ].join("");

  const answerRows = fields
    .filter((f) => !CONTACT_KEYS.has(f.name))
    .map((f) => row(e(prettyLabel(f.name)), e(f.values.join(", "))))
    .join("");

  const meta = [
    lead.created_time && `Submitted ${formatNzTime(lead.created_time)}`,
    lead.platform && `via ${lead.platform === "ig" ? "Instagram" : lead.platform === "fb" ? "Facebook" : lead.platform}`,
    lead.ad_name && `Ad: ${lead.ad_name}`,
    lead.campaign_name && `Campaign: ${lead.campaign_name}`,
  ].filter(Boolean).map((s) => e(String(s))).join(" · ");

  const replyButton = email
    ? `<a href="mailto:${e(email)}" style="display:inline-block;background:#7DC143;color:white;font-family:Arial,sans-serif;font-size:12px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;padding:13px 28px;border-radius:3px;text-decoration:none;margin-right:8px">Reply to ${e(name.split(" ")[0])}</a>`
    : "";
  const callButton = phone
    ? `<a href="tel:${e(phone)}" style="display:inline-block;background:#1B4332;color:white;font-family:Arial,sans-serif;font-size:12px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;padding:13px 28px;border-radius:3px;text-decoration:none">Call now</a>`
    : "";

  const html = `
<!DOCTYPE html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f0f0ee;font-family:Georgia,serif">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f0ee;padding:40px 0">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%">
      <tr><td style="background:#1B4332;border-radius:6px 6px 0 0;padding:28px 36px">
        <p style="margin:0 0 2px;font-family:Arial,sans-serif;font-size:11px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#7DC143">Greenworx Landscaping</p>
        <h1 style="margin:0;font-family:Georgia,serif;font-size:22px;font-weight:700;color:white">New Facebook / Instagram Lead</h1>
        <p style="margin:6px 0 0;font-family:Arial,sans-serif;font-size:12px;color:rgba(255,255,255,0.55)">${meta || "Submitted via Meta Instant Form"}</p>
      </td></tr>
      <tr><td style="background:#F8F7F4;padding:32px 36px">
        <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse">
          ${contactRows}
          ${answerRows}
        </table>
        <div style="margin-top:28px;padding-top:24px;border-top:2px solid #7DC143">
          ${replyButton}${callButton}
        </div>
        <p style="margin:20px 0 0;font-family:Arial,sans-serif;font-size:11px;color:#999">Phone number verified by SMS on Meta. Lead ID ${e(lead.id)}.</p>
      </td></tr>
      <tr><td style="background:#111f17;border-radius:0 0 6px 6px;padding:18px 36px">
        <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;color:rgba(255,255,255,0.35);text-align:center">Greenworx Landscaping · Unit 2, 49 Mt Wellington Highway, Auckland</p>
      </td></tr>
    </table>
  </td></tr>
</table>
</body></html>`;

  return { html, name, email, phone };
}

