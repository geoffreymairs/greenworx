import Link from "next/link";
import Image from "next/image";

const services = [
  { name: "Landscape Design", href: "/services/landscape-design" },
  { name: "Retaining Walls, Fencing & Screens", href: "/services/retaining-walls" },
  { name: "Garden Maintenance", href: "/services/garden-maintenance" },
  { name: "Lawns & Turf", href: "/services/lawns-turf" },
  { name: "Decking", href: "/services/decking" },
  { name: "Paving & Hardscaping", href: "/services/paving-hardscaping" },
  { name: "Planting & Soft Landscaping", href: "/services/planting-soft-landscaping" },
  { name: "Commercial & Body Corporate", href: "/services/commercial" },
  { name: "Multi-Unit & Commercial Developments", href: "/services/multi-unit-developments" },
];

const areas = [
  "Remuera", "St Heliers", "Glendowie", "Kohimarama",
  "Mission Bay", "Orakei", "Meadowbank", "Epsom",
];

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/logo.png"
              alt="Greenworx Landscaping"
              width={160}
              height={60}
              className="h-12 w-auto brightness-0 invert mb-6"
            />
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Premium landscaping design, construction and maintenance for Auckland&apos;s finest homes and businesses.
            </p>
            <p className="text-lime text-xs font-semibold tracking-widest uppercase">Excellence is in the details.</p>
  <div className="mt-6 flex items-center gap-3">
  <a
  href="https://www.facebook.com/greenworxauckland"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Greenworx on Facebook (opens in a new tab)"
  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 hover:text-lime hover:border-lime transition-colors"
  >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.026 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.971H15.83c-1.491 0-1.956.93-1.956 1.886v2.264h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
  </svg>
  </a>
  <a
  href="https://www.instagram.com/greenworx_nz"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Greenworx on Instagram (opens in a new tab)"
  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 hover:text-lime hover:border-lime transition-colors"
  >
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
  <circle cx="12" cy="12" r="4" />
  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
  </a>
  </div>
  </div>
  
  {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-5">Services</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-white/60 hover:text-lime text-sm transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-5">Service Areas</h4>
            <ul className="space-y-2">
              {areas.map((area) => (
                <li key={area}>
                  <Link
                    href={`/service-areas/${area.toLowerCase().replace(" ", "-")}`}
                    className="text-white/60 hover:text-lime text-sm transition-colors"
                  >
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-lime mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+64212799679" className="text-white/60 hover:text-lime text-sm transition-colors">
                  021 279 9679
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-lime mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:hello@greenworx.co.nz" className="text-white/60 hover:text-lime text-sm transition-colors">
                  hello@greenworx.co.nz
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-lime mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-white/60 text-sm">
                  Unit 2, 49 Mt Wellington Highway,<br />Auckland
                </span>
              </li>
            </ul>
            <Link
              href="/contact"
              className="inline-block mt-6 bg-lime hover:bg-lime-dark text-white text-sm font-semibold px-6 py-3 rounded-sm transition-colors tracking-wide uppercase"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            &copy; 2026 Greenworx Landscaping. All rights reserved. Website managed by{" "}
            <a href="https://catchie.nz/" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors underline underline-offset-2">Catchie</a>.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-white/40 hover:text-white/60 text-xs transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-trade" className="text-white/40 hover:text-white/60 text-xs transition-colors">Terms of Trade</Link>
            <Link href="/sitemap.xml" className="text-white/40 hover:text-white/60 text-xs transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
