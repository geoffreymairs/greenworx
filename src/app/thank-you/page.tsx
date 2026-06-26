import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You | Greenworx",
  description: "Thank you for your enquiry. Devon will be in touch within one business day.",
  robots: { index: false },
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#F8F7F4] flex items-center justify-center px-6 py-24">
      <div className="max-w-lg w-full text-center">
        {/* Icon */}
        <div className="w-20 h-20 rounded-full bg-[#7DC143] flex items-center justify-center mx-auto mb-8 shadow-lg">
          <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Heading */}
        <h1
          className="text-4xl md:text-5xl font-bold text-[#1B4332] mb-4"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Thank You!
        </h1>

        {/* Message */}
        <p className="text-gray-600 text-lg leading-relaxed mb-3">
          We&apos;ve received your enquiry and will be in touch within one business day.
        </p>
        <p className="text-gray-500 text-sm mb-10">
          In the meantime, feel free to browse our recent projects or learn more about our services.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/our-work"
            className="inline-flex items-center justify-center gap-2 bg-[#1B4332] hover:bg-[#163828] text-white font-semibold px-8 py-4 rounded-sm transition-colors text-sm tracking-wide uppercase"
          >
            View Our Work
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-[#1B4332] border border-gray-200 font-semibold px-8 py-4 rounded-sm transition-colors text-sm tracking-wide uppercase"
          >
            Back to Home
          </Link>
        </div>

        {/* Contact fallback */}
        <p className="mt-12 text-sm text-gray-400">
          Need to reach us directly?{" "}
          <a href="tel:0226482252" className="text-[#7DC143] hover:underline font-medium">
            022 648 2252
          </a>
          {" "}or{" "}
          <a href="mailto:devon@greenworx.co.nz" className="text-[#7DC143] hover:underline font-medium">
            devon@greenworx.co.nz
          </a>
        </p>
      </div>
    </main>
  );
}
