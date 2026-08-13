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

/** Minimum time a human is expected to take filling out a form. */
const MIN_SUBMIT_MS = 2_500;
/** Submissions older than this are treated as stale/replayed. */
const MAX_SUBMIT_MS = 1000 * 60 * 60 * 2; // 2 hours

/** Field length caps used for validation + sanitisation. */
const MAX_LEN = {
  name: 120,
  phone: 40,
  email: 254,
  address: 300,
  details: 5_000,
  experience: 5_000,
} as const;

/** Rate-limit windows keyed per form. */
const RATE_LIMITS: Record<string, { windowMs: number; max: number }> = {
  default: { windowMs: 10 * 60 * 1000, max: 5 }, // 5 submissions / 10 min / IP
};

// ── In-memory rate-limit store ─────────────────────────────────────────────────
// Module-level state persists across warm serverless invocations on the same
// instance. This adds no external dependency (no Redis/KV) and is sufficient to
// throttle abusive bursts. For multi-region hard guarantees, swap the Map for a
// shared store — the public API below would not change.

const rateStore = new Map<string, number[]>();

function checkRateLimit(key: string, formName: string): boolean {
  const cfg = RATE_LIMITS[formName] ?? RATE_LIMITS.default;
  const now = Date.now();
  const windowStart = now - cfg.windowMs;

  const timestamps = (rateStore.get(key) ?? []).filter((t) => t > windowStart);
  timestamps.push(now);
  rateStore.set(key, timestamps);

  // Opportunistic cleanup so the Map doesn't grow unbounded.
  if (rateStore.size > 5_000) {
    for (const [k, ts] of rateStore) {
      const kept = ts.filter((t) => t > windowStart);
      if (kept.length === 0) rateStore.delete(k);
      else rateStore.set(k, kept);
    }
  }

  return timestamps.length <= cfg.max;
}

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

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SPAM_PATTERNS: RegExp[] = [
  /\b(viagra|cialis|casino|porn|xxx|escort|payday loan|bitcoin doubler|crypto ?giveaway)\b/i,
  /\b(seo services?|backlinks?|guest post|rank(ing)? on google|buy followers?|cheap meds)\b/i,
  /\[url[=\]]/i, // BBCode links
  /<a\s+href/i, // raw anchor tags
  /\b(?:https?:\/\/|www\.)\S+/i, // any URL (handled with a count threshold below)
];

/** Count how many URLs appear in a blob of text. */
function countUrls(text: string): number {
  return (text.match(/\b(?:https?:\/\/|www\.)\S+/gi) ?? []).length;
}

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
  const { ip, formName, honeypot, elapsedMs, fields, required } = input;

  // Layer 1 — Honeypot: hidden field must stay empty for real users.
  if (honeypot && honeypot.trim().length > 0) {
    return { ok: false, reason: "honeypot_filled" };
  }

  // Layer 2 — Submission timing: bots submit near-instantly.
  if (typeof elapsedMs === "number" && !Number.isNaN(elapsedMs)) {
    if (elapsedMs < MIN_SUBMIT_MS) {
      return { ok: false, reason: "submitted_too_fast" };
    }
    if (elapsedMs > MAX_SUBMIT_MS) {
      return { ok: false, reason: "submission_stale" };
    }
  }

  // Layer 3 — Rate limiting per IP + form.
  const rateKey = `${formName}:${ip ?? "unknown"}`;
  if (!checkRateLimit(rateKey, formName)) {
    return { ok: false, reason: "rate_limited" };
  }

  // Layer 4 — Required-field + format validation (server-side).
  for (const key of required) {
    if (!fields[key] || fields[key]!.trim().length === 0) {
      return { ok: false, reason: `missing_${key}` };
    }
  }
  if (fields.email && !EMAIL_RE.test(fields.email.trim())) {
    return { ok: false, reason: "invalid_email" };
  }
  if (fields.phone) {
    const digits = fields.phone.replace(/[^0-9]/g, "");
    if (digits.length < 6 || digits.length > 20) {
      return { ok: false, reason: "invalid_phone" };
    }
  }

  // Layer 5 — Spam-content detection across all free-text fields.
  const haystack = Object.values(fields).filter(Boolean).join(" \n ");
  const urlHeavy = countUrls(fields.details ?? fields.experience ?? "") > 2;
  const nameHasUrl = countUrls(fields.name ?? "") > 0;
  const matchesSpam = SPAM_PATTERNS.some((re) => {
    // The bare-URL pattern only counts when URLs are excessive.
    if (re.source.includes("https?")) return urlHeavy;
    return re.test(haystack);
  });
  if (matchesSpam || nameHasUrl) {
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
