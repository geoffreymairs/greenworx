import { createHash } from "crypto";

/**
 * Layered, dependency-free anti-spam gate for all Greenworx contact forms.
 *
 * This module runs ENTIRELY server-side and is designed to sit IN FRONT of the
 * existing Fergus CRM / Resend email calls. It never touches those integrations —
 * it only decides whether a submission is allowed to proceed to them.
 *
 *   Form  →  runSpamChecks()  →  PASS  →  existing Fergus / email logic
 *                             →  FAIL  →  request rejected, nothing sent
 */

// ── Tunable thresholds ────────────────────────────────────────────────────────

/** Field length caps used for validation + sanitisation. */
const MAX_LEN = {
  name: 120,
  phone: 40,
  email: 254,
  address: 300,
  details: 5_000,
  experience: 5_000,
} as const;

// ── Helpers ─────────────────────────────────────────────────────────────────

/** Extract the best-effort client IP from a request. */
export function getClientIp(req: Request): string | null {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return req.headers.get("x-real-ip");
}

/** Privacy-conscious, non-reversible identifier for logging (never stores raw IP). */
function hashIp(ip: string | null): string {
  if (!ip) return "unknown";
  return createHash("sha256").update(ip).digest("hex").slice(0, 12);
}

/** Strip control characters and clamp length. Keeps the same field, just cleaned. */
export function sanitizeField(value: string, max: number): string {
  return value
    // eslint-disable-next-line no-control-regex
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .trim()
    .slice(0, max);
}

// Only VERY obvious spam signatures. Deliberately narrow to avoid ever
// blocking a genuine enquiry — these words never appear in a real plumbing/
// trades job request.
const SPAM_PATTERNS: RegExp[] = [
  /\b(viagra|cialis|casino|porn|xxx|escort|payday loan|bitcoin doubler|crypto ?giveaway)\b/i,
  /\b(seo services?|backlinks?|guest post|buy followers?|cheap meds)\b/i,
];

// ── Public API ─────────────────────────────────────────────────────────────

export interface SpamCheckInput {
  ip: string | null;
  formName: string;
  /** Value of the hidden honeypot field. Any non-empty value = bot. */
  honeypot?: string | null;
  /** Milliseconds between form render and submission. */
  elapsedMs?: number | null;
  /** Submitted text fields to validate + scan (already extracted from the request). */
  fields: Record<string, string | undefined>;
  /** Which fields are required (server-side enforcement). */
  required: string[];
}

export interface SpamCheckResult {
  ok: boolean;
  /** Internal reason — logged, NEVER returned to the client. */
  reason?: string;
}

/** Generic, non-revealing message shown to any rejected submission. */
export const SPAM_REJECTION_MESSAGE =
  "We couldn't process your request. Please try again.";

/**
 * Run all anti-spam layers. Returns { ok: true } only for submissions that
 * should be forwarded to the existing Fergus / email integration.
 */
export function runSpamChecks(input: SpamCheckInput): SpamCheckResult {
  const { honeypot, fields, required } = input;

  // Layer 1 — Honeypot: a hidden field real users never see. Any value = bot.
  // This is the only "spam" heuristic with zero false-positive risk.
  if (honeypot && honeypot.trim().length > 0) {
    return { ok: false, reason: "honeypot_filled" };
  }

  // Layer 2 — Required fields must be present (a lead with no contact details
  // can't be actioned anyway). No format/length rules — genuine enquiries in
  // any phone/email style are accepted.
  for (const key of required) {
    if (!fields[key] || fields[key]!.trim().length === 0) {
      return { ok: false, reason: `missing_${key}` };
    }
  }

  // Layer 3 — Block only blatant, unmistakable spam keywords.
  const haystack = Object.values(fields).filter(Boolean).join(" \n ");
  if (SPAM_PATTERNS.some((re) => re.test(haystack))) {
    return { ok: false, reason: "spam_content" };
  }

  return { ok: true };
}

/** Log a blocked submission with a hashed IP — no personal data retained. */
export function logBlockedSubmission(
  formName: string,
  reason: string,
  ip: string | null,
): void {
  console.warn(
    `[anti-spam] BLOCKED form=${formName} reason=${reason} ip=${hashIp(ip)} at=${new Date().toISOString()}`,
  );
}

export { MAX_LEN };
