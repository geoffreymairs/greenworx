import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Greenworx Landscaping | Premium Landscaping Auckland",
  description:
    "Premium landscaping design, construction and garden maintenance for Auckland homes and businesses. Serving Remuera, St Heliers, Glendowie, Kohimarama and surrounding suburbs.",
};

const services = [
  {
    title: "Landscape Design",
    desc: "Tailored concept plans, garden design, planting plans and full resource consent documentation for your property.",
    href: "/services/landscape-design",
    img: "/landscape-design-plan.png",
  },
  {
    title: "Retaining Walls, Fencing & Screens",
    desc: "Timber, concrete block, stone and engineered retaining walls, plus boundary fencing and privacy screens — designed and built to last.",
    href: "/services/retaining-walls",
    img: "/service-retaining-walls.jpg",
  },
  {
    title: "Garden Maintenance",
    desc: "Scheduled maintenance programmes, garden tidy-ups and seasonal clean-ups keeping your garden immaculate.",
    href: "/services/garden-maintenance",
    img: "/service-garden-maintenance.jpg",
  },
  {
    title: "Lawns & Turf",
    desc: "Ready lawn installation, natural grass, artificial turf and lawn renovations for Auckland properties.",
    href: "/services/lawns-turf",
    img: "/service-lawns-turf.webp",
  },
  {
    title: "Decking",
    desc: "Bespoke timber and hardwood decks crafted for entertaining, relaxation and everyday living.",
    href: "/services/decking",
    img: "/service-decking.jpg",
  },
  {
    title: "Paving & Hardscaping",
    desc: "Stone, concrete and paver installations for pathways, courtyards, driveways and entertaining areas.",
    href: "/services/paving-hardscaping",
    img: "/service-paving-hardscaping.jpg",
  },
  {
    title: "Planting & Soft Landscaping",
    desc: "Expert plant sourcing, native planting programmes and garden installations tailored to your soil and aspect.",
    href: "/services/planting-soft-landscaping",
    img: "/service-planting-soft-landscaping.jpg",
  },
  {
    title: "Commercial & Body Corporate",
    desc: "Grounds maintenance programmes for body corporates, apartment complexes and commercial property managers.",
    href: "/services/commercial",
    img: "/service-commercial.jpg",
  },
  {
    title: "Multi-Unit & Commercial Developments",
    desc: "Landscaping design and construction for townhouse developments, apartment complexes and commercial sites, delivered at scale.",
    href: "/services/multi-unit-developments",
    img: "/multi-unit-1.jpg",
  },
];

const features = [
  {
    title: "Experienced Auckland Team",
    desc: "Years of hands-on experience delivering premium results across Auckland's most prestigious properties.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Premium Workmanship",
    desc: "We hold ourselves to the highest standard of quality on every project, no matter the scale.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Fully Managed Projects",
    desc: "We handle everything from concept through to completion, so you can enjoy the transformation.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Reliable Communication",
    desc: "Clear timelines, responsive updates and transparent pricing — from first call to final inspection.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: "Quality Materials",
    desc: "We source only premium materials — chosen for durability, aesthetics and performance in Auckland's climate.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "Ongoing Maintenance",
    desc: "From one-off jobs to scheduled maintenance programmes, we keep your investment looking its best.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
];

const projects = [
  {
    title: "Avondale Multi-Unit Development",
    category: "Fencing, Planting & Artificial Turf",
    location: "Avondale, Auckland",
    img: "/our-work-avondale-1.jpg",
    large: true,
  },
  {
    title: "Bucklands Beach Coastal Garden",
    category: "Decking, Planting & Specimen Trees",
    location: "Bucklands Beach, Auckland",
    img: "/our-work-bucklands-beach-1.jpg",
    large: false,
  },
  {
    title: "Remuera Golf Club Retaining Walls",
    category: "Retaining Walls & Drainage",
    location: "Remuera, Auckland",
    img: "/our-work-remuera-golf-1.jpg",
    large: false,
  },
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
      "As a Property Manager, it is important to find good and reliable contractors that we can trust to look after our portfolio of properties. We have been working with Devon and the team at Greenworx for several years now, and they have never disappointed! Their work is conducted to an extremely high standard whilst keeping the cost reasonable. No job is too small or too big, we have found them to be very responsive and great with communication, quick to attend jobs, always happy to provide quotes and of course, always delivering amazing results at the end! Thank you for all your hard work team, we really appreciate it!",
    name: "Andrea Bouissicot",
    location: "Ray White Best Property Management",
  },
  {
    quote:
      "Devon and his team turned our very boring & plain backyard into a beautiful private retreat that is now full of nature & life with both mature planting and well placed bursts of colour and pathways in between the trees which have also brought us instant privacy from the neighbours. The backyard now has a sense of tranquillity and feels like it has been like that forever.",
    name: "Andrew & Tracey Faire",
    location: "Bucklands Beach, Auckland",
  },
];

const serviceAreas = [
  "Remuera", "St Heliers", "Glendowie", "Kohimarama",
  "Mission Bay", "Orakei", "Meadowbank", "Epsom",
  "Parnell", "Herne Bay", "Pt Chevalier",
  "Ellerslie",
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero.webp"
            alt="Premium Auckland landscaping with harbour views"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F2B1E]/90 via-[#0F2B1E]/70 to-[#1B4332]/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 w-full">
          <div className="max-w-3xl">
            <p className="inline-block text-[#7DC143] font-semibold text-xs tracking-[0.2em] uppercase mb-6">
              Auckland Landscaping Specialists
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Premium Landscaping &amp; Garden Solutions Across Auckland
            </h1>
            <p className="text-white/75 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              Landscape design, construction and garden maintenance for Auckland homes and businesses.
              Setting new standards — landscapes that work.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#7DC143] hover:bg-[#5E9A30] text-white font-semibold px-8 py-4 rounded-sm transition-all duration-300 tracking-wide text-sm uppercase"
              >
                Request a Quote
              </Link>
              <Link
                href="/our-work"
                className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-sm hover:bg-white hover:text-[#1B4332] transition-all duration-300 tracking-wide text-sm uppercase"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* LIME STRIP */}
      <section className="bg-[#7DC143] py-5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-white text-center font-semibold tracking-[0.15em] text-sm uppercase">
            Excellence is in the details. The details are in our nature.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="inline-block text-[#7DC143] font-semibold text-xs tracking-[0.2em] uppercase mb-4">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B4332] leading-tight" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Expert Landscaping Services
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mt-4 max-w-2xl mx-auto">
              From initial concept through to ongoing maintenance, we deliver complete landscaping solutions
              for Auckland&apos;s most discerning homeowners, businesses and developers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group block bg-[#F2F2F0] hover:bg-[#1B4332] transition-all duration-500 overflow-hidden rounded-sm"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-[#1B4332]/20 group-hover:bg-[#1B4332]/60 transition-colors duration-500" />
                </div>
                <div className="p-6">
                  <h3
                    className="text-[#1B4332] group-hover:text-white font-bold text-lg mb-2 transition-colors duration-300"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-white/70 text-sm leading-relaxed transition-colors duration-300">
                    {service.desc}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-[#7DC143] group-hover:text-[#9ED46B] text-sm font-semibold transition-colors">
                    Learn more
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY GREENWORX */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-[#1B4332]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="inline-block text-[#7DC143] font-semibold text-xs tracking-[0.2em] uppercase mb-4">Why Greenworx</p>
              <h2
                className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                The Landscapers Auckland Homeowners Trust
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                We combine horticultural expertise with precision craftsmanship to create outdoor spaces
                that genuinely enhance your property and lifestyle. Our clients in Remuera, St Heliers,
                Glendowie and across Auckland choose us because we deliver what we promise.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-sm hover:bg-white hover:text-[#1B4332] transition-all duration-300 tracking-wide text-sm uppercase"
              >
                Our Story
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((f) => (
                <div key={f.title} className="bg-white/5 hover:bg-white/10 transition-colors rounded-sm p-6">
                  <div className="text-[#7DC143] mb-4">{f.icon}</div>
                  <h3 className="text-white font-semibold text-base mb-2">{f.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-[#F8F7F4]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <p className="inline-block text-[#7DC143] font-semibold text-xs tracking-[0.2em] uppercase mb-4">Our Work</p>
              <h2
                className="text-4xl md:text-5xl font-bold text-[#1B4332] leading-tight"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Featured Projects
              </h2>
            </div>
            <Link
              href="/our-work"
              className="inline-flex items-center gap-2 border-2 border-[#1B4332] text-[#1B4332] font-semibold px-8 py-4 rounded-sm hover:bg-[#1B4332] hover:text-white transition-all duration-300 tracking-wide text-sm uppercase flex-shrink-0"
            >
              View All Work
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <Link
                key={project.title}
                href="/our-work"
                className={`group relative overflow-hidden rounded-sm block ${i === 0 ? "md:row-span-2" : ""}`}
              >
                <div className={`relative overflow-hidden ${i === 0 ? "h-96 md:h-full min-h-[500px]" : "h-60"}`}>
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2B1E]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block text-[#7DC143] text-xs font-semibold tracking-widest uppercase mb-2">
                      {project.category}
                    </span>
                    <h3
                      className="text-white text-xl font-bold"
                      style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-white/60 text-sm mt-1">{project.location}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="inline-block text-[#7DC143] font-semibold text-xs tracking-[0.2em] uppercase mb-4">Where We Work</p>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#1B4332] leading-tight"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Serving Auckland&apos;s Finest Suburbs
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mt-4 max-w-2xl mx-auto">
              Greenworx services premium residential and commercial properties across Auckland.
              Contact us to discuss your project wherever you&apos;re located.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {serviceAreas.map((area) => (
              <Link
                key={area}
                href={`/service-areas/${area.toLowerCase().replace(/ /g, "-")}`}
                className="px-5 py-3 border border-[#1B4332]/20 hover:border-[#7DC143] hover:bg-[#7DC143]/5 text-[#1B4332] hover:text-[#5E9A30] text-sm font-medium rounded-sm transition-all"
              >
                {area}
              </Link>
            ))}
          </div>
          <div className="rounded-sm overflow-hidden h-64 md:h-96 relative bg-[#F2F2F0]">
            <iframe
              src="https://maps.google.com/maps?q=Auckland,+New+Zealand&t=&z=11&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              title="Greenworx Service Areas Auckland"
            />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-[#0F2B1E]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="inline-block text-[#7DC143] font-semibold text-xs tracking-[0.2em] uppercase mb-4">Client Stories</p>
            <h2
              className="text-4xl md:text-5xl font-bold text-white leading-tight"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white/5 rounded-sm p-8">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#7DC143] fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/80 text-base leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-white/40 text-xs">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/remuera-garden.png"
            alt="Beautiful Auckland garden"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#0F2B1E]/85" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <p className="inline-block text-[#7DC143] font-semibold text-xs tracking-[0.2em] uppercase mb-6">Get Started</p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Let&apos;s Create Your Outdoor Space
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            Ready to transform your garden? Contact Devon and the team for an obligation-free quote.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#7DC143] hover:bg-[#5E9A30] text-white font-semibold px-8 py-4 rounded-sm transition-all duration-300 tracking-wide text-sm uppercase"
            >
              Request a Quote
            </Link>
            <a
              href="tel:0226482252"
              className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-sm hover:bg-white hover:text-[#1B4332] transition-all duration-300 tracking-wide text-sm uppercase"
            >
              Call 022 648 2252
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

