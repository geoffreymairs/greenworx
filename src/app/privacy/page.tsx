import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy | Greenworx Landscaping",
  description:
    "Greenworx Landscaping privacy policy — how we collect, use and protect your personal information.",
};

const LAST_UPDATED = "6 June 2026";
const COMPANY = "Greenworx Landscaping";
const EMAIL = "devon@greenworx.co.nz";
const PHONE = "022 648 2252";
const ADDRESS = "Unit 2, 49 Mt Wellington Highway, Auckland";
const WEBSITE = "https://greenworx.co.nz";

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        tag="Legal"
        title="Privacy Policy"
        subtitle={`Last updated: ${LAST_UPDATED}`}
        image="/header-LRP_0498.webp"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
      />

      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none">

            {/* Intro */}
            <p className="text-gray-600 leading-relaxed mb-10">
              {COMPANY} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use, disclose and safeguard your
              information when you visit our website at{" "}
              <a href={WEBSITE} className="text-[#7DC143] hover:text-[#5E9A30]">{WEBSITE}</a> or
              contact us directly. Please read this policy carefully. If you disagree with its terms,
              please discontinue use of the site.
            </p>

            <PolicySection title="1. Who We Are">
              <p>
                {COMPANY} is a professional landscaping company based in Auckland, New Zealand.
                We are the data controller for any personal information collected through this website.
              </p>
              <address className="not-italic mt-3 text-gray-600 text-sm">
                <strong>{COMPANY}</strong><br />
                {ADDRESS}<br />
                Phone: <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="text-[#7DC143] hover:text-[#5E9A30]">{PHONE}</a><br />
                Email: <a href={`mailto:${EMAIL}`} className="text-[#7DC143] hover:text-[#5E9A30]">{EMAIL}</a>
              </address>
            </PolicySection>

            <PolicySection title="2. Information We Collect">
              <p>We may collect the following categories of personal information:</p>
              <SubHeading>Information you provide directly</SubHeading>
              <ul>
                <li><strong>Contact and enquiry data</strong> — your name, phone number, email address, property address and details of your landscaping project when you complete our contact or quote request form.</li>
                <li><strong>Job application data</strong> — your name, phone number, email address, work experience and any CV or supporting documents you submit via our Work With Us page.</li>
                <li><strong>Correspondence</strong> — any information you include when contacting us by phone, email or through the website.</li>
              </ul>
              <SubHeading>Information collected automatically</SubHeading>
              <ul>
                <li><strong>Usage data</strong> — pages visited, time spent on pages, links clicked, referring URLs and general browsing behaviour, collected via cookies and analytics tools (see Section 5).</li>
                <li><strong>Device and technical data</strong> — IP address, browser type, device type and operating system.</li>
              </ul>
            </PolicySection>

            <PolicySection title="3. How We Use Your Information">
              <p>We use the personal information we collect to:</p>
              <ul>
                <li>Respond to your enquiries and provide quotes for landscaping services.</li>
                <li>Communicate with you about your project, scheduling and ongoing work.</li>
                <li>Process and assess job applications.</li>
                <li>Improve the performance, content and user experience of our website.</li>
                <li>Analyse how visitors use our site to better understand our audience (via analytics — see Section 5).</li>
                <li>Comply with any applicable legal obligations.</li>
              </ul>
              <p>
                We will not use your personal information for any purpose that is incompatible with the
                purpose for which it was originally collected without your consent.
              </p>
            </PolicySection>

            <PolicySection title="4. Legal Basis for Processing">
              <p>We process your personal information on the following grounds:</p>
              <ul>
                <li><strong>Legitimate interests</strong> — to respond to enquiries, provide quotes and deliver our services.</li>
                <li><strong>Contractual necessity</strong> — to perform the landscaping services you have engaged us to provide.</li>
                <li><strong>Consent</strong> — where you have given explicit consent, such as subscribing to marketing communications.</li>
                <li><strong>Legal obligation</strong> — where we are required to process data to comply with applicable law.</li>
              </ul>
            </PolicySection>

            <PolicySection title="5. Cookies and Analytics">
              <SubHeading>What are cookies?</SubHeading>
              <p>
                Cookies are small text files placed on your device when you visit a website. They help
                the site remember your preferences and understand how you interact with it.
              </p>
              <SubHeading>Cookies we use</SubHeading>
              <ul>
                <li>
                  <strong>Strictly necessary cookies</strong> — required for the site to function. These
                  cannot be disabled.
                </li>
                <li>
                  <strong>Analytics cookies</strong> — we currently use, or may in the future use,
                  Google Analytics to collect anonymous data about how visitors use our website. This
                  includes pages viewed, session duration and general traffic patterns. Google Analytics
                  may set cookies such as <code>_ga</code>, <code>_gid</code> and <code>_gat</code>.
                  Data collected is aggregated and anonymised where possible.
                </li>
                <li>
                  <strong>Marketing cookies</strong> — we may in the future use remarketing or
                  advertising tools (such as Google Ads conversion tracking or Meta Pixel). If
                  implemented, these will be disclosed here and managed through a cookie consent
                  mechanism.
                </li>
              </ul>
              <SubHeading>Google Analytics</SubHeading>
              <p>
                If Google Analytics is active on this site, information generated by cookies about your
                use of the website (including your IP address) is transmitted to and stored by Google on
                servers which may be outside New Zealand. Google uses this information to evaluate your
                use of the website and compile reports on website activity. You can opt out of Google
                Analytics tracking by installing the{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7DC143] hover:text-[#5E9A30]"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
                .
              </p>
              <SubHeading>Managing cookies</SubHeading>
              <p>
                You can control cookies through your browser settings. Disabling certain cookies may
                affect the functionality of this website. For more information, visit{" "}
                <a
                  href="https://www.allaboutcookies.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7DC143] hover:text-[#5E9A30]"
                >
                  allaboutcookies.org
                </a>
                .
              </p>
            </PolicySection>

            <PolicySection title="6. Sharing Your Information">
              <p>We do not sell, trade or rent your personal information to third parties. We may share your information with:</p>
              <ul>
                <li><strong>Service providers</strong> — trusted third-party suppliers who assist us in operating our website or conducting our business (e.g. website hosting, form submission services, email platforms), subject to confidentiality obligations.</li>
                <li><strong>Analytics providers</strong> — such as Google Analytics, as described in Section 5.</li>
                <li><strong>Legal and regulatory authorities</strong> — where required by law, court order or government authority.</li>
                <li><strong>Business transfers</strong> — in the event of a sale, merger or acquisition of our business, your information may be transferred as part of that transaction.</li>
              </ul>
            </PolicySection>

            <PolicySection title="7. Data Retention">
              <p>
                We retain your personal information only for as long as necessary to fulfil the purposes
                for which it was collected, or as required by law. Enquiry and contact data is typically
                retained for up to three years. Job application data that does not result in employment
                is retained for up to twelve months, after which it is securely deleted.
              </p>
            </PolicySection>

            <PolicySection title="8. Data Security">
              <p>
                We take reasonable technical and organisational measures to protect your personal
                information against unauthorised access, loss, disclosure or destruction. Our website is
                served over HTTPS, and access to personal data we hold is restricted to authorised
                personnel only.
              </p>
              <p>
                No method of transmission over the internet is completely secure. While we strive to
                protect your information, we cannot guarantee absolute security.
              </p>
            </PolicySection>

            <PolicySection title="9. Third-Party Links">
              <p>
                Our website may contain links to third-party websites. We are not responsible for the
                privacy practices of those sites and encourage you to read their privacy policies before
                providing any personal information.
              </p>
            </PolicySection>

            <PolicySection title="10. Your Rights">
              <p>
                Under the New Zealand Privacy Act 2020, you have the right to:
              </p>
              <ul>
                <li>Request access to the personal information we hold about you.</li>
                <li>Request correction of inaccurate or incomplete information.</li>
                <li>Request deletion of your personal information (subject to our legal obligations).</li>
                <li>Withdraw consent where processing is based on consent.</li>
                <li>Lodge a complaint with the Office of the Privacy Commissioner at{" "}
                  <a href="https://www.privacy.org.nz" target="_blank" rel="noopener noreferrer" className="text-[#7DC143] hover:text-[#5E9A30]">privacy.org.nz</a>.
                </li>
              </ul>
              <p>
                To exercise any of these rights, please contact us using the details in Section 1.
              </p>
            </PolicySection>

            <PolicySection title="11. Children's Privacy">
              <p>
                Our website is not directed at children under the age of 16. We do not knowingly collect
                personal information from children. If you believe a child has provided us with personal
                information, please contact us and we will delete it promptly.
              </p>
            </PolicySection>

            <PolicySection title="12. Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices
                or legal requirements. The updated policy will be posted on this page with a revised
                &ldquo;Last updated&rdquo; date. We encourage you to review this page periodically.
              </p>
            </PolicySection>

            <PolicySection title="13. Contact Us">
              <p>
                If you have any questions, concerns or requests regarding this Privacy Policy or how we
                handle your personal information, please contact us:
              </p>
              <address className="not-italic mt-3 text-gray-600 text-sm">
                <strong>{COMPANY}</strong><br />
                {ADDRESS}<br />
                Phone: <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="text-[#7DC143] hover:text-[#5E9A30]">{PHONE}</a><br />
                Email: <a href={`mailto:${EMAIL}`} className="text-[#7DC143] hover:text-[#5E9A30]">{EMAIL}</a>
              </address>
            </PolicySection>

          </div>

          {/* Back link */}
          <div className="mt-14 pt-8 border-t border-gray-100">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#1B4332] hover:text-[#7DC143] font-semibold text-sm transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2
        className="text-xl font-bold text-[#1B4332] mb-4"
        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
      >
        {title}
      </h2>
      <div className="text-gray-600 leading-relaxed space-y-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_a]:text-[#7DC143] [&_a:hover]:text-[#5E9A30] [&_strong]:text-[#1B4332] [&_code]:bg-gray-100 [&_code]:px-1 [&_code]:rounded [&_code]:text-sm [&_code]:font-mono">
        {children}
      </div>
    </div>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-sm font-semibold text-[#1B4332] uppercase tracking-wider mt-5 mb-2">
      {children}
    </h3>
  );
}
