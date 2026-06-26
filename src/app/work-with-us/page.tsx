import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ApplicationForm from "@/components/ApplicationForm";

export const metadata: Metadata = {
  title: "Landscaping Jobs Auckland | Work With Greenworx | Landscaping Careers",
  description:
    "Join one of Auckland's leading landscaping teams. Landscaper jobs, garden maintenance roles, team leaders and subcontractors. Landscaping careers and apprenticeships in Auckland.",
};

const reasons = [
  {
    title: "Diverse, Interesting Projects",
    desc: "From intricate garden designs to major landscape construction — no two projects are the same. You'll work across some of Auckland's finest homes and commercial properties.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    title: "High Standards, Proud Work",
    desc: "We don't cut corners. Every project is completed to the highest standard, which means you'll leave each site proud of what you've built or maintained.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Supportive Team Environment",
    desc: "We look after our people. You'll work alongside experienced, skilled colleagues who share knowledge, support each other and take genuine pride in what they do.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Grow Your Skills",
    desc: "Whether you're starting out or highly experienced, there are real opportunities to develop your skills, take on more responsibility and build a long-term career.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Auckland's Premium Properties",
    desc: "We work across Remuera, St Heliers, Glendowie, Epsom and beyond — high-end projects in great locations that showcase your skills at their best.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Long-Term Career Opportunity",
    desc: "We're building a team for the long haul. Reliable work, consistent projects and genuine career progression for people who show commitment and quality.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const values = [
  {
    label: "Attention to Detail",
    desc: "The difference between good and exceptional is in the details. We notice, and so do our clients.",
  },
  {
    label: "Professional Standards",
    desc: "We arrive on time, communicate clearly and deliver what we promise. No exceptions.",
  },
  {
    label: "Quality Over Quantity",
    desc: "We take on the right projects and do them exceptionally well. We are not a volume-based operator.",
  },
  {
    label: "Respect for Clients & Properties",
    desc: "We treat every property as if it were our own — with care, respect and a genuine desire to exceed expectations.",
  },
  {
    label: "Pride in Workmanship",
    desc: "Every team member takes personal pride in the work they produce. That culture of ownership is what sets us apart.",
  },
];

export default function WorkWithUsPage() {
  return (
    <>
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/header-_RP_0187.webp" alt="Greenworx landscaping team at work" fill sizes="100vw" className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F2B1E]/90 via-[#0F2B1E]/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 w-full">
          <nav className="flex items-center gap-2 text-white/40 text-xs mb-4">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/60">Work With Us</span>
          </nav>
          <p className="inline-block text-[#7DC143] font-semibold text-xs tracking-[0.2em] uppercase mb-4">Careers</p>
          <h1
            className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6 max-w-3xl"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Work With Greenworx
          </h1>
          <p className="text-white/70 text-lg max-w-xl mb-10">
            Join one of Auckland&apos;s leading landscaping teams and help create exceptional outdoor spaces across the city&apos;s eastern and central suburbs.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#apply"
              className="inline-flex items-center gap-2 bg-[#7DC143] hover:bg-[#5E9A30] text-white font-semibold px-8 py-4 rounded-sm transition-colors tracking-wide text-sm uppercase"
            >
              Apply Now
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-sm transition-colors tracking-wide text-sm uppercase"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* WHY WORK WITH US */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="inline-block text-[#7DC143] font-semibold text-xs tracking-[0.2em] uppercase mb-4">Why Greenworx</p>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#1B4332] leading-tight"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Why Work With Us
            </h2>
            <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto">
              We&apos;re building a team of skilled, passionate people who take pride in their work and want to grow their career in landscaping.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r) => (
              <div key={r.title} className="bg-[#F8F7F4] rounded-sm p-7">
                <div className="w-12 h-12 rounded-sm bg-[#1B4332] text-[#7DC143] flex items-center justify-center mb-5">
                  {r.icon}
                </div>
                <h3
                  className="text-lg font-bold text-[#1B4332] mb-3"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {r.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE'RE LOOKING FOR + THE GREENWORX DIFFERENCE */}
      <section className="py-20 px-6 lg:px-12 bg-[#1B4332]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="relative rounded-sm overflow-hidden" style={{ height: "600px" }}>
              <Image
                src="/greenworx-team.jpg"
                alt="The Greenworx team"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="py-4">
              <p className="inline-block text-[#7DC143] font-semibold text-xs tracking-[0.2em] uppercase mb-4">Join The Team</p>
              <h2
                className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Who We&apos;re Looking For
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                We&apos;re looking for hard working people who take pride in what they do. Whether you&apos;re an
                experienced landscaper or someone who&apos;s keen to learn the trade — if you show up, work hard
                and care about the quality of your work, we want to hear from you.
              </p>
              <p className="text-white/70 leading-relaxed mb-10">
                Experience across landscaping, construction, planting, paving, maintenance or garden work is
                valuable — but attitude and work ethic matter just as much. We&apos;re building a team of people
                who are genuinely proud of what they create.
              </p>

              <a
                href="#apply"
                className="inline-flex items-center gap-2 bg-[#7DC143] hover:bg-[#5E9A30] text-white font-semibold px-8 py-4 rounded-sm transition-colors tracking-wide text-sm uppercase"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CURRENT OPPORTUNITIES */}
      <section className="py-16 px-6 lg:px-12 bg-[#F8F7F4]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="inline-block text-[#7DC143] font-semibold text-xs tracking-[0.2em] uppercase mb-4">Opportunities</p>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#1B4332] leading-tight"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Current Opportunities
            </h2>
          </div>
          <div className="max-w-3xl mx-auto bg-white rounded-sm p-10 text-center shadow-sm">
            <div className="w-14 h-14 rounded-sm bg-[#7DC143]/10 flex items-center justify-center mx-auto mb-5">
              <svg className="w-7 h-7 text-[#7DC143]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3
              className="text-xl font-bold text-[#1B4332] mb-3"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Always Open to Great People
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-xl mx-auto">
              We are always interested in hearing from motivated people who are passionate about landscaping,
              gardening and outdoor construction. If you have the skills, the work ethic and the desire to be
              part of a premium team — send us your application.
            </p>
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section id="apply" className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <p className="inline-block text-[#7DC143] font-semibold text-xs tracking-[0.2em] uppercase mb-4">Get Started</p>
              <h2
                className="text-3xl font-bold text-[#1B4332] mb-4 leading-tight"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Apply to Join Greenworx
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Fill in the form and tell us about yourself. We review every application and will be in touch if there&apos;s a good fit.
              </p>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[#1B4332] text-[#7DC143] flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-1">Phone</p>
                    <a href="tel:0226482252" className="text-[#1B4332] hover:text-[#7DC143] font-medium text-sm transition-colors">022 648 2252</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[#1B4332] text-[#7DC143] flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-1">Email</p>
                    <a href="mailto:devon@greenworx.co.nz" className="text-[#1B4332] hover:text-[#7DC143] font-medium text-sm transition-colors">devon@greenworx.co.nz</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 bg-[#F8F7F4] rounded-sm p-8 md:p-10">
              <h3
                className="text-2xl font-bold text-[#1B4332] mb-2"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Your Application
              </h3>
              <p className="text-gray-500 text-sm mb-8">Tell us about yourself and what you&apos;re looking for.</p>
              <ApplicationForm />
            </div>
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
            Ready to Join the Team?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            If you&apos;re passionate about landscaping and take pride in your work, we&apos;d love to hear from you.
          </p>
          <a
            href="#apply"
            className="inline-flex items-center gap-2 bg-[#7DC143] hover:bg-[#5E9A30] text-white font-semibold px-10 py-4 rounded-sm transition-colors tracking-wide text-sm uppercase"
          >
            Apply Today
          </a>
        </div>
      </section>
    </>
  );
}
