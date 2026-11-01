"use client";

import { useEffect } from "react";

const PHONE_CONVERSION_SEND_TO = "AW-18271010524/O724CPWMnLAdENz9pYhE";

export default function PhoneClickTracker() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;

      const link = event.target.closest("a");
      const href = link?.getAttribute("href");
      if (!href || !href.trim().toLowerCase().startsWith("tel:")) return;

      window.gtag?.("event", "conversion", {
        send_to: PHONE_CONVERSION_SEND_TO,
      });
    }

    // Capture phase so the event still fires if a component stops propagation.
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
