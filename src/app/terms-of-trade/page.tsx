import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Terms of Trade | Greenworx Landscaping",
  description:
    "Terms and Conditions of Trade for Greenworx Limited. Applies to all quotations, maintenance services, landscaping construction works, and related services.",
};

const sections = [
  {
    heading: "1. Quotes & Acceptance",
    items: [
      "1.1 All quotes are valid for 30 days unless stated otherwise.",
      "1.2 Quotes are based on site conditions and information visible at the time of pricing. Any unseen or changed conditions may result in a Variation.",
      "1.3 Acceptance may be verbal, written, by email, or by allowing work to commence.",
    ],
  },
  {
    heading: "2. Scope of Work",
    items: [
      "2.1 Work is strictly limited to what is listed in the quotation or agreed maintenance schedule.",
      "2.2 Any additional work requested by the Client, or required due to site conditions, is a variation.",
      "2.3 The Contractor is not responsible for items not specifically included.",
    ],
  },
  {
    heading: "3. Variations",
    preamble: "3.1 Variations may arise from:",
    bullets: [
      "Hidden ground conditions (rock, concrete, poor soil, buried debris, services)",
      "Client-requested changes",
      "Council or regulatory requirements",
      "Access restrictions",
      "Incomplete or inaccurate tender documentation",
    ],
    items: [
      "3.2 Variations will be priced and approved by the Client before the work proceeds where reasonably practicable. Where it is not reasonably practicable to obtain prior approval, or where doing so would cause unreasonable delay or disruption to the works, the Variation will be undertaken and charged at the Contractor's standard charge-up rates plus materials.",
      "3.3 Where practical, the Client will be informed before the Variation proceeds.",
    ],
  },
  {
    heading: "4. Pricing & Payment",
    preamble4: true,
    items: [
      "4.1 Prices exclude GST unless stated otherwise.",
      "4.2 A deposit or progress payments may be required for larger projects.",
      "4.3 Payment terms are 7 days from invoice date.",
    ],
    bullets4: [
      "Interest at 2.5% per month",
      "Debt collection, legal, and recovery costs",
    ],
    items4: ["4.5 The Contractor reserves the right to suspend work for non-payment."],
  },
  {
    heading: "5. Maintenance Services",
    items: [
      "5.1 Scheduled maintenance visits are subject to weather conditions, site access, and the Contractor's rostering and scheduling availability.",
      "5.2 If access is not available at the scheduled time, the visit may still be chargeable.",
      "5.3 Additional work outside the agreed maintenance scope will be charged as a Variation.",
    ],
  },
  {
    heading: "6. Site Access & Client Responsibilities",
    preamble6: true,
    items: [
      "6.1 The Client must provide safe and clear access to the site.",
    ],
    bullets6: [
      "Identifying and marking underground services",
      "Providing access to water and power where required",
      "Removing vehicles, pets, obstacles, and hazards",
    ],
    items6: ["6.3 Delays caused by lack of access will be charged as downtime."],
  },
  {
    heading: "7. Underground Services & Conditions",
    items: [
      "7.1 The Contractor is not liable for damage to unmarked or unknown underground services.",
      "7.2 Additional work required due to underground obstructions will be treated as a Variation.",
    ],
  },
  {
    heading: "8. Weather & Delays",
    items: [
      "8.1 Landscaping and maintenance work is weather dependent.",
      "8.2 The Contractor may delay works to prevent damage to the site or achieve proper installation.",
      "8.3 Weather delays do not constitute breach of contract.",
    ],
  },
  {
    heading: "9. Plants, Turf & Natural Materials",
    items9: true,
  },
  {
    heading: "10. Damage & Reinstatement",
    preamble10: true,
    items: [
      "10.2 Reinstatement of lawns, driveways, or surrounding surfaces outside the work area is not included unless stated.",
    ],
  },
  {
    heading: "11. Ownership of Materials",
    items: [
      "11.1 All materials supplied remain the property of the Contractor until paid in full.",
      "11.2 The Contractor may recover unpaid materials from site where payment is overdue.",
    ],
  },
  {
    heading: "12. Health & Safety",
    items: [
      "12.1 The work site is a workplace under the Health and Safety at Work Act 2015.",
      "12.2 The Client must keep children, pets, and visitors clear of the work area at all times.",
    ],
  },
  {
    heading: "13. Cancellations",
    preamble13: true,
  },
  {
    heading: "14. Defects & Liability",
    items: [
      "14.1 Any issues must be raised within 7 days of completion.",
      "14.2 Liability is limited to the value of the work supplied.",
      "14.3 The Contractor is not liable for indirect, consequential, or financial loss.",
    ],
  },
  {
    heading: "15. Photography",
    items: [
      "15.1 The Contractor may photograph works for portfolio and marketing purposes unless the Client objects in writing prior to commencement.",
    ],
  },
  {
    heading: "16. Disputes",
    items: [
      "16.1 Disputes must be raised in writing within 7 days.",
      "16.2 Both parties agree to attempt resolution before legal proceedings.",
    ],
  },
  {
    heading: "17. Acceptance",
    prose: "Acceptance of a quote, maintenance schedule, invoice, or instruction to proceed confirms acceptance of these Terms and Conditions.",
  },
  {
    heading: "18. Construction Contracts Act",
    items: [
      "18.1 This contract is subject to the Construction Contracts Act 2002. Disputes shall be settled in accordance with the provisions of that Act.",
    ],
  },
];

export default function TermsOfTradePage() {
  return (
    <>
      <PageHero
        tag="Legal"
        title="Terms of Trade"
        subtitle="Terms and Conditions of Trade for Greenworx Limited — applies to all quotations, maintenance services, landscaping construction works, and related services."
        image="/header-_RP_0066.webp"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms of Trade" }]}
      />

      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Preamble */}
          <div className="mb-12 pb-12 border-b border-gray-100">
            <p className="text-[#1B4332] font-semibold text-lg mb-1">Greenworx Limited</p>
            <p className="text-gray-500 text-sm mb-6">NZBN: 9429051439873</p>
            <p className="text-gray-600 leading-relaxed mb-4">
              These Terms and Conditions apply to all quotations, maintenance services, landscaping construction works, and related services undertaken by Greenworx Limited (&ldquo;the Contractor&rdquo;) for the Client.
            </p>
            <p className="text-gray-600 leading-relaxed">
              By accepting a quote, instructing work to proceed, or allowing work to commence, the Client agrees to these Terms and Conditions.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-10">

            {/* 1. Quotes & Acceptance */}
            <div className="border-b border-gray-100 pb-10">
              <h2 className="text-lg font-bold text-[#1B4332] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>1. Quotes &amp; Acceptance</h2>
              <div className="space-y-2 text-gray-600 text-sm leading-relaxed">
                <p>1.1 All quotes are valid for 30 days unless stated otherwise.</p>
                <p>1.2 Quotes are based on site conditions and information visible at the time of pricing. Any unseen or changed conditions may result in a Variation.</p>
                <p>1.3 Acceptance may be verbal, written, by email, or by allowing work to commence.</p>
              </div>
            </div>

            {/* 2. Scope of Work */}
            <div className="border-b border-gray-100 pb-10">
              <h2 className="text-lg font-bold text-[#1B4332] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>2. Scope of Work</h2>
              <div className="space-y-2 text-gray-600 text-sm leading-relaxed">
                <p>2.1 Work is strictly limited to what is listed in the quotation or agreed maintenance schedule.</p>
                <p>2.2 Any additional work requested by the Client, or required due to site conditions, is a variation.</p>
                <p>2.3 The Contractor is not responsible for items not specifically included.</p>
              </div>
            </div>

            {/* 3. Variations */}
            <div className="border-b border-gray-100 pb-10">
              <h2 className="text-lg font-bold text-[#1B4332] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>3. Variations</h2>
              <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
                <p>3.1 Variations may arise from:</p>
                <ul className="ml-6 space-y-1.5 list-disc">
                  <li>Hidden ground conditions (rock, concrete, poor soil, buried debris, services)</li>
                  <li>Client-requested changes</li>
                  <li>Council or regulatory requirements</li>
                  <li>Access restrictions</li>
                  <li>Incomplete or inaccurate tender documentation</li>
                </ul>
                <p>3.2 Variations will be priced and approved by the Client before the work proceeds where reasonably practicable. Where it is not reasonably practicable to obtain prior approval, or where doing so would cause unreasonable delay or disruption to the works, the Variation will be undertaken and charged at the Contractor&apos;s standard charge-up rates plus materials.</p>
                <p>3.3 Where practical, the Client will be informed before the Variation proceeds.</p>
              </div>
            </div>

            {/* 4. Pricing & Payment */}
            <div className="border-b border-gray-100 pb-10">
              <h2 className="text-lg font-bold text-[#1B4332] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>4. Pricing &amp; Payment</h2>
              <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
                <p>4.1 Prices exclude GST unless stated otherwise.</p>
                <p>4.2 A deposit or progress payments may be required for larger projects.</p>
                <p>4.3 Payment terms are <strong className="text-[#1B4332]">7 days from invoice date</strong>.</p>
                <p>4.4 Late payments may incur:</p>
                <ul className="ml-6 space-y-1.5 list-disc">
                  <li>Interest at 2.5% per month</li>
                  <li>Debt collection, legal, and recovery costs</li>
                </ul>
                <p>4.5 The Contractor reserves the right to suspend work for non-payment.</p>
              </div>
            </div>

            {/* 5. Maintenance Services */}
            <div className="border-b border-gray-100 pb-10">
              <h2 className="text-lg font-bold text-[#1B4332] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>5. Maintenance Services</h2>
              <div className="space-y-2 text-gray-600 text-sm leading-relaxed">
                <p>5.1 Scheduled maintenance visits are subject to weather conditions, site access, and the Contractor&apos;s rostering and scheduling availability.</p>
                <p>5.2 If access is not available at the scheduled time, the visit may still be chargeable.</p>
                <p>5.3 Additional work outside the agreed maintenance scope will be charged as a Variation.</p>
              </div>
            </div>

            {/* 6. Site Access */}
            <div className="border-b border-gray-100 pb-10">
              <h2 className="text-lg font-bold text-[#1B4332] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>6. Site Access &amp; Client Responsibilities</h2>
              <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
                <p>6.1 The Client must provide safe and clear access to the site.</p>
                <p>6.2 The Client is responsible for:</p>
                <ul className="ml-6 space-y-1.5 list-disc">
                  <li>Identifying and marking underground services</li>
                  <li>Providing access to water and power where required</li>
                  <li>Removing vehicles, pets, obstacles, and hazards</li>
                </ul>
                <p>6.3 Delays caused by lack of access will be charged as downtime.</p>
              </div>
            </div>

            {/* 7. Underground Services */}
            <div className="border-b border-gray-100 pb-10">
              <h2 className="text-lg font-bold text-[#1B4332] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>7. Underground Services &amp; Conditions</h2>
              <div className="space-y-2 text-gray-600 text-sm leading-relaxed">
                <p>7.1 The Contractor is not liable for damage to unmarked or unknown underground services.</p>
                <p>7.2 Additional work required due to underground obstructions will be treated as a Variation.</p>
              </div>
            </div>

            {/* 8. Weather & Delays */}
            <div className="border-b border-gray-100 pb-10">
              <h2 className="text-lg font-bold text-[#1B4332] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>8. Weather &amp; Delays</h2>
              <div className="space-y-2 text-gray-600 text-sm leading-relaxed">
                <p>8.1 Landscaping and maintenance work is weather dependent.</p>
                <p>8.2 The Contractor may delay works to prevent damage to the site or achieve proper installation.</p>
                <p>8.3 Weather delays do not constitute breach of contract.</p>
              </div>
            </div>

            {/* 9. Plants, Turf & Natural Materials */}
            <div className="border-b border-gray-100 pb-10">
              <h2 className="text-lg font-bold text-[#1B4332] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>9. Plants, Turf &amp; Natural Materials</h2>
              <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
                <p>9.1 Plant and turf health cannot be guaranteed due to factors outside the Contractor&apos;s control, including weather, watering, soil condition, pests, and maintenance.</p>
                <p>9.2 A 30-day plant warranty applies only where:</p>
                <ul className="ml-6 space-y-1.5 list-disc">
                  <li>The Contractor has supplied and installed the plants, and</li>
                  <li>The Client must follow all care and watering instructions provided. The Contractor will water-in plants at the time of planting only. Ongoing establishment watering is the responsibility of the Client unless expressly agreed in writing and will otherwise be treated as a Variation and charged accordingly.</li>
                </ul>
                <p>9.3 Timber, stone, mulch, and plants are natural products and will vary in colour and appearance. This is not a defect.</p>
              </div>
            </div>

            {/* 10. Damage & Reinstatement */}
            <div className="border-b border-gray-100 pb-10">
              <h2 className="text-lg font-bold text-[#1B4332] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>10. Damage &amp; Reinstatement</h2>
              <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
                <p>10.1 The Contractor takes reasonable care but is not liable for:</p>
                <ul className="ml-6 space-y-1.5 list-disc">
                  <li>Existing fragile or aged surfaces</li>
                  <li>Minor ground disturbance from machinery</li>
                  <li>Damage caused by hidden services or unknown ground conditions</li>
                </ul>
                <p>10.2 Reinstatement of lawns, driveways, or surrounding surfaces outside the work area is not included unless stated.</p>
              </div>
            </div>

            {/* 11. Ownership of Materials */}
            <div className="border-b border-gray-100 pb-10">
              <h2 className="text-lg font-bold text-[#1B4332] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>11. Ownership of Materials</h2>
              <div className="space-y-2 text-gray-600 text-sm leading-relaxed">
                <p>11.1 All materials supplied remain the property of the Contractor until paid in full.</p>
                <p>11.2 The Contractor may recover unpaid materials from site where payment is overdue.</p>
              </div>
            </div>

            {/* 12. Health & Safety */}
            <div className="border-b border-gray-100 pb-10">
              <h2 className="text-lg font-bold text-[#1B4332] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>12. Health &amp; Safety</h2>
              <div className="space-y-2 text-gray-600 text-sm leading-relaxed">
                <p>12.1 The work site is a workplace under the Health and Safety at Work Act 2015.</p>
                <p>12.2 The Client must keep children, pets, and visitors clear of the work area at all times.</p>
              </div>
            </div>

            {/* 13. Cancellations */}
            <div className="border-b border-gray-100 pb-10">
              <h2 className="text-lg font-bold text-[#1B4332] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>13. Cancellations</h2>
              <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
                <p>13.1 If the Client cancels after acceptance:</p>
                <ul className="ml-6 space-y-1.5 list-disc">
                  <li>Costs incurred to date will be invoiced</li>
                  <li>Ordered materials must be paid for</li>
                  <li>A cancellation fee may apply</li>
                </ul>
              </div>
            </div>

            {/* 14. Defects & Liability */}
            <div className="border-b border-gray-100 pb-10">
              <h2 className="text-lg font-bold text-[#1B4332] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>14. Defects &amp; Liability</h2>
              <div className="space-y-2 text-gray-600 text-sm leading-relaxed">
                <p>14.1 Any issues must be raised within 7 days of completion.</p>
                <p>14.2 Liability is limited to the value of the work supplied.</p>
                <p>14.3 The Contractor is not liable for indirect, consequential, or financial loss.</p>
              </div>
            </div>

            {/* 15. Photography */}
            <div className="border-b border-gray-100 pb-10">
              <h2 className="text-lg font-bold text-[#1B4332] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>15. Photography</h2>
              <div className="text-gray-600 text-sm leading-relaxed">
                <p>15.1 The Contractor may photograph works for portfolio and marketing purposes unless the Client objects in writing prior to commencement.</p>
              </div>
            </div>

            {/* 16. Disputes */}
            <div className="border-b border-gray-100 pb-10">
              <h2 className="text-lg font-bold text-[#1B4332] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>16. Disputes</h2>
              <div className="space-y-2 text-gray-600 text-sm leading-relaxed">
                <p>16.1 Disputes must be raised in writing within 7 days.</p>
                <p>16.2 Both parties agree to attempt resolution before legal proceedings.</p>
              </div>
            </div>

            {/* 17. Acceptance */}
            <div className="border-b border-gray-100 pb-10">
              <h2 className="text-lg font-bold text-[#1B4332] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>17. Acceptance</h2>
              <div className="text-gray-600 text-sm leading-relaxed">
                <p>Acceptance of a quote, maintenance schedule, invoice, or instruction to proceed confirms acceptance of these Terms and Conditions.</p>
              </div>
            </div>

            {/* 18. Construction Contracts Act */}
            <div>
              <h2 className="text-lg font-bold text-[#1B4332] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>18. Construction Contracts Act</h2>
              <div className="text-gray-600 text-sm leading-relaxed">
                <p>18.1 This contract is subject to the Construction Contracts Act 2002. Disputes shall be settled in accordance with the provisions of that Act.</p>
              </div>
            </div>
          </div>

          {/* PDF Download */}
          <div className="mt-16 pt-10 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-[#1B4332] font-semibold mb-1">Download Terms of Trade</p>
              <p className="text-gray-500 text-sm">A PDF copy of these Terms and Conditions of Trade.</p>
            </div>
            <a
              href="/greenworx-terms-of-trade.pdf"
              download="Greenworx-Terms-of-Trade.pdf"
              className="inline-flex items-center gap-3 bg-[#1B4332] hover:bg-[#0F2B1E] text-white font-semibold px-8 py-4 rounded-sm transition-colors tracking-wide text-sm uppercase flex-shrink-0"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
              Download PDF
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
