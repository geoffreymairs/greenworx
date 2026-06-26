import Link from "next/link";
import QuoteForm from "./QuoteForm";
import PageHero from "./PageHero";
import ServiceGallery from "./ServiceGallery";

interface ServicePageProps {
  tag: string;
  title: string;
  subtitle: string;
  heroImg: string;
  intro: string;
  includes: string[];
  benefits: { title: string; desc: string }[];
  ctaLabel: string;
  ctaHref: string;
  galleryImgs?: string[];
  galleryFit?: "cover" | "contain";
  serviceName?: string;
}

export default function ServicePageLayout({
  tag,
  title,
  subtitle,
  heroImg,
  intro,
  includes,
  benefits,
  ctaLabel,
  galleryImgs,
  galleryFit,
  serviceName,
}: ServicePageProps) {
  return (
    <>
      <PageHero
        tag={tag}
        title={title}
        subtitle={subtitle}
        image={heroImg}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: serviceName ?? title },
        ]}
      />

      {/* CONTENT */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main content */}
            <div className="lg:col-span-2">
              <p className="text-gray-600 text-lg leading-relaxed mb-10">{intro}</p>

              {/* What's included */}
              <h2
                className="text-2xl font-bold text-[#1B4332] mb-6"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                What&apos;s Included
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-12">
                {includes.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700 text-sm">
                    <span className="w-5 h-5 rounded-full bg-[#7DC143] flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Benefits */}
              <h2
                className="text-2xl font-bold text-[#1B4332] mb-6"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Why Choose Greenworx
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {benefits.map((b) => (
                  <div key={b.title} className="bg-[#F8F7F4] p-6 rounded-sm">
                    <h3 className="text-[#1B4332] font-semibold mb-2 text-sm">{b.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
                  </div>
                ))}
              </div>

              {/* Gallery */}
              {galleryImgs && galleryImgs.length > 0 && (
                <div className="mt-12">
                  <h2
                    className="text-2xl font-bold text-[#1B4332] mb-6"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    Our Work
                  </h2>
                  <ServiceGallery images={galleryImgs} title={title} fit={galleryFit} />
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28">
                <div className="bg-[#1B4332] rounded-sm p-8 mb-6">
                  <h3
                    className="text-white font-bold text-xl mb-2"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    {ctaLabel}
                  </h3>
                  <p className="text-white/60 text-sm mb-6">
                    Contact Devon and the team for an obligation-free quote.
                  </p>
                  <QuoteForm dark />
                </div>
                <div className="bg-[#F8F7F4] rounded-sm p-6">
                  <p className="text-[#1B4332] font-semibold text-sm mb-4">Or call us directly</p>
                  <a
                    href="tel:0226482252"
                    className="flex items-center gap-3 text-[#1B4332] hover:text-[#7DC143] font-bold text-xl transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    022 648 2252
                  </a>
                  <p className="text-gray-500 text-xs mt-2">Mon–Sat, 7am–6pm</p>
                </div>
                <div className="mt-6">
                  <p className="text-[#1B4332] font-semibold text-xs tracking-widest uppercase mb-3">Other Services</p>
                  {[
                    ["Landscape Design", "/services/landscape-design"],
                    ["Retaining Walls, Fencing & Screens", "/services/retaining-walls"],
                    ["Garden Maintenance", "/services/garden-maintenance"],
                    ["Lawns & Turf", "/services/lawns-turf"],
                    ["Decking", "/services/decking"],
                    ["Paving & Hardscaping", "/services/paving-hardscaping"],
                    ["Planting & Soft Landscaping", "/services/planting-soft-landscaping"],
                    ["Commercial & Body Corporate", "/services/commercial"],
                    ["Multi-Unit & Commercial Developments", "/services/multi-unit-developments"],
                  ].map(([name, href]) => (
                    <Link
                      key={href}
                      href={href}
                      className="flex items-center justify-between py-3 border-b border-gray-100 text-gray-600 hover:text-[#7DC143] text-sm transition-colors"
                    >
                      {name}
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
