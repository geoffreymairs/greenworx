import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Landscaping Services Auckland | Greenworx",
  description:
    "Complete landscaping services for Auckland homes and businesses. Landscape design, construction, garden maintenance, lawns, decking, paving, retaining walls and more by Greenworx.",
};

const services = [
  {
    title: "Landscape Design",
    desc: "Tailored garden design, concept plans, planting plans and resource consent documentation. Every design created specifically for your property.",
    href: "/services/landscape-design",
    img: "/landscape-design-plan.png",
    cta: "Book a Design Consultation",
  },
  {
    title: "Retaining Walls, Fencing & Screens",
    desc: "Timber, concrete block, stone and engineered retaining walls, plus boundary fencing, privacy screens and decorative screens — including drainage, council consent support and full construction.",
    href: "/services/retaining-walls",
    img: "/service-retaining-walls.jpg",
    cta: "Request a Quote",
  },
  {
    title: "Garden Maintenance",
    desc: "Professional scheduled maintenance programmes, one-off garden tidy-ups and seasonal clean-ups. Pruning, hedging, weed control, fertilisation and ongoing care.",
    href: "/services/garden-maintenance",
    img: "/service-garden-maintenance.jpg",
    cta: "Schedule Maintenance",
  },
  {
    title: "Lawns & Turf",
    desc: "Ready lawn installation, natural grass establishment, premium artificial turf and lawn renovations across Auckland. Full site preparation included.",
    href: "/services/lawns-turf",
    img: "/service-lawns-turf.webp",
    cta: "Get a Lawn Quote",
  },
  {
    title: "Decking",
    desc: "Bespoke timber and hardwood decks for entertaining, pool surrounds and outdoor living. Built to last Auckland's climate.",
    href: "/services/decking",
    img: "/service-decking.jpg",
    cta: "Request a Decking Quote",
  },
  {
    title: "Paving & Hardscaping",
    desc: "Premium stone, concrete and paver installations for pathways, courtyards, driveways and entertaining areas. Exposed aggregate and decorative concrete specialists.",
    href: "/services/paving-hardscaping",
    img: "/service-paving-hardscaping.jpg",
    cta: "Request a Paving Quote",
  },
  {
    title: "Planting & Soft Landscaping",
    desc: "Expert plant sourcing and installation — native and exotic planting schemes, feature gardens and garden rejuvenation suited to Auckland's climate.",
    href: "/services/planting-soft-landscaping",
    img: "/service-planting-soft-landscaping.jpg",
    cta: "Request a Planting Quote",
  },
  {
    title: "Commercial & Body Corporate Maintenance",
    desc: "Grounds maintenance programmes for body corporates, apartment complexes, property managers and commercial developments across Auckland.",
    href: "/services/commercial",
    img: "/service-commercial.jpg",
    cta: "Request a Commercial Quote",
  },
  {
    title: "Multi-Unit Residential & Commercial Developments",
    desc: "Landscape design and construction for townhouse developments, apartment complexes and commercial sites — delivered at scale without compromising on quality.",
    href: "/services/multi-unit-developments",
    img: "/multi-unit-1.jpg",
    cta: "Discuss Your Development",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        tag="What We Offer"
        title="Landscaping Services Auckland"
        subtitle="Complete landscaping solutions for Auckland's most discerning homeowners and commercial clients. From initial design and excavation through to construction, planting, lawns and ongoing maintenance."
        image="/header-LRP_0936.webp"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          {services.map((service, i) => (
            <div
              key={service.href}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center pb-16 border-b border-gray-100 last:border-0 last:pb-0 ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
            >
              <div className={`relative h-72 lg:h-96 rounded-sm overflow-hidden ${i % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <Image src={service.img} alt={service.title} fill className="object-cover" />
              </div>
              <div className={i % 2 === 1 ? "lg:col-start-1" : ""}>
                <h2
                  className="text-3xl md:text-4xl font-bold text-[#1B4332] mb-4"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {service.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">{service.desc}</p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 bg-[#7DC143] hover:bg-[#5E9A30] text-white font-semibold px-8 py-4 rounded-sm transition-colors tracking-wide text-sm uppercase"
                >
                  {service.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
