declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Fires the Google Ads "Submit lead form" conversion.
 * Called on successful lead form submission (Quote / Contact forms).
 */
export function trackLeadConversion() {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  window.gtag("event", "conversion", {
    send_to: "AW-18271010524/2g2NCLyLv8scENz9pYhE",
    value: 1.0,
    currency: "NZD",
  });
}

export {};
