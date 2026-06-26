import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact Us | Request a Landscaping Quote",
  description:
    "Get in touch with Greenworx for a free, no-obligation landscaping quote. Call 022 648 2252 or email devon@greenworx.co.nz",
};

const contactDetails = [
  {
    label: "Phone",
    value: "022 648 2252",
    href: "tel:0226482252",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "devon@greenworx.co.nz",
    href: "mailto:devon@greenworx.co.nz",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Service Area",
    value: "Auckland Wide",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "Response Time",
    value: "We typically respond within one business day.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const trustPoints = [
  "2400+ Projects Completed",
  "Residential & Commercial Landscaping",
  "Multi-Unit Developments",
  "Auckland Wide Service",
  "Fully Insured & Experienced Team",
];

const testimonials = [
  {
    quote:
      "Devon at Greenworx is a fantastic operator. Quality execution on time, great communication, competitive pricing and a high level of customer care. Highly recommended for small and large projects.",
    name: "Scott",
    location: "Construction Manager, Titus Group",
  },
  {
    quote:
      "As a Property Manager, it is important to find good and reliable contractors that we can trust to look after our portfolio of properties. We have been working with Devon and the team at Greenworx for several years now, and they have never disappointed!",
    name: "Andrea Bouissicot",
    location: "Ray White Best Property Management",
  },
  {
    quote:
      "Devon and his team turned our very boring & plain backyard into a beautiful private retreat that is now full of nature & life with both mature planting and well placed bursts of colour and pathways in between the trees which have also brought us instant privacy from the neighbours.",
    name: "Andrew & Tracey Faire",
    location: "Bucklands Beach, Auckland",
  },
];

const steps = [
  {
    number: "01",
    title: "Enquire",
    desc: "Submit your details online.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Site Visit",
    desc: "We visit your property and discuss your goals.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Quote",
    desc: "We prepare a detailed proposal.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6M9 8h6M5 4h14a1 1 0 011 1v15l-3-2-3 2-3-2-3 2-3-2-3 2V5a1 1 0 011-1z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Construction",
    desc: "Our team completes the work.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5l-2 2m0 0L5 11l8 8 4-4m-4-4l4-4m-4 4L7 9m9.5-3.5L19 8m0 0l-2.5 2.5M19 8l2-2" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Enjoy",
    desc: "Enjoy your finished landscape.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
];

const faqs = [
  {
    q: "How quickly will I receive a quote?",
    a: "After you submit your enquiry, we'll be in touch within one business day to arrange a site visit. Once we've seen your property and discussed your goals, we'll prepare a detailed, no-obligation quote.",
  },
  {
    q: "Do you service all of Auckland?",
    a: "Yes — we work across the greater Auckland region, with a focus on premium residential and commercial properties in the eastern and central suburbs.",
  },
  {
    q: "Can you provide landscape design?",
    a: "Absolutely. From concept plans and planting schemes to full resource consent documentation, our landscape design service can be combined with construction for a seamless design-and-build process.",
  },
  {
    q: "Do you handle retaining walls and fencing?",
    a: "Yes — retaining walls, fencing and privacy screens are one of our core services, built to last in Auckland's conditions and with engineering and consent support where required.",
  },
  {
    q: "Do you work with developers and commercial clients?",
    a: "Yes — we deliver landscaping for multi-unit residential developments, townhouses, apartments and commercial sites, as well as ongoing maintenance for body corporates and property managers.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        tag="Get in Touch"
        title="Request a Quote"
        subtitle="Tell us about your project and we'll be in touch within one business day to arrange a site visit or discuss your landscaping requirements."
        image="/header-contact.webp"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      >
        <a
          href="#enquiry-form"
          className="inline-flex items-center gap-2 bg-[#7DC143] hover:bg-[#5E9A30] text-white font-semibold px-10 py-4 rounded-sm transition-colors tracking-wide text-sm uppercase mt-8"
        >
          Get My Free Quote
        </a>
      </PageHero>

      {/* CONTACT */}
      <section id="enquiry-form" className="py-12 md:py-20 px-6 lg:px-12 bg-[#F8F7F4]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left column */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <h2
                className="text-2xl font-bold text-[#1B4332] mb-6"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Get in Touch
              </h2>
              <div className="space-y-6 mb-8">
                {contactDetails.map((d) => (
                  <div key={d.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-sm bg-[#1B4332] text-[#7DC143] flex items-center justify-center flex-shrink-0">
                      {d.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-1">{d.label}</p>
                      {d.href ? (
                        <a
                          href={d.href}
                          className="text-[#1B4332] hover:text-[#7DC143] font-medium text-sm transition-colors"
                        >
                          {d.value}
                        </a>
                      ) : (
                        <p className="text-[#1B4332] font-medium text-sm">{d.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust panel */}
              <div className="bg-[#1B4332] rounded-sm p-6">
                <p className="text-white font-semibold text-sm mb-4">Why Choose Greenworx</p>
                <ul className="space-y-3">
                  {trustPoints.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-white/80 text-sm">
                      <span className="w-5 h-5 rounded-full bg-[#7DC143] flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right column — form */}
            <div className="lg:col-span-2 order-1 lg:order-2 bg-white rounded-sm p-8 md:p-10 shadow-sm">
              <h2
                className="text-2xl font-bold text-[#1B4332] mb-2"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Tell Us About Your Project
              </h2>
              <p className="text-gray-500 text-sm mb-8">
                No obligation quote. Tell us about your project and we&apos;ll be in touch shortly.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="inline-block text-[#7DC143] font-semibold text-xs tracking-[0.2em] uppercase mb-4">Testimonials</p>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#1B4332] leading-tight max-w-3xl mx-auto"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Trusted By Homeowners, Property Managers & Developers Across Auckland
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-[#F8F7F4] rounded-sm p-8 flex flex-col">
                <svg className="w-8 h-8 text-[#7DC143] mb-4" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z" />
                </svg>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">{t.quote}</p>
                <div>
                  <p className="text-[#1B4332] font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section className="py-20 px-6 lg:px-12 bg-[#F8F7F4]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="inline-block text-[#7DC143] font-semibold text-xs tracking-[0.2em] uppercase mb-4">Our Process</p>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#1B4332] leading-tight"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              What Happens Next?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {steps.map((s) => (
              <div key={s.number} className="text-center">
                <div className="w-14 h-14 rounded-full bg-[#1B4332] text-[#7DC143] flex items-center justify-center mx-auto mb-4">
                  {s.icon}
                </div>
                <p className="text-[#7DC143] font-bold text-xs tracking-widest mb-2">{s.number}</p>
                <h3
                  className="text-[#1B4332] font-bold text-lg mb-2"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="inline-block text-[#7DC143] font-semibold text-xs tracking-[0.2em] uppercase mb-4">FAQs</p>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#1B4332] leading-tight"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group bg-[#F8F7F4] rounded-sm p-6">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-semibold text-[#1B4332]">
                  {f.q}
                  <svg
                    className="w-5 h-5 text-[#7DC143] flex-shrink-0 transition-transform group-open:rotate-45"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </summary>
                <p className="text-gray-600 text-sm leading-relaxed mt-4">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-12 bg-[#1B4332]">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Ready to Get Started?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Submit your details and we&apos;ll be in touch within one business day.
          </p>
          <a
            href="#enquiry-form"
            className="inline-flex items-center gap-2 bg-[#7DC143] hover:bg-[#5E9A30] text-white font-semibold px-10 py-4 rounded-sm transition-colors tracking-wide text-sm uppercase"
          >
            Get My Free Quote
          </a>
        </div>
      </section>
    </>
  );
}
