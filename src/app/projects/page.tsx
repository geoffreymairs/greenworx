import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects | Auckland Landscaping Portfolio | Greenworx",
  description:
    "Detailed project case studies from Greenworx — Auckland's premium landscaping company. See our landscape design, construction and maintenance projects.",
};

const projects = [
  {
    title: "Remuera Garden Transformation",
    location: "Remuera, Auckland",
    services: ["Landscape Design", "Construction", "Planting"],
    overview:
      "A complete redesign and rebuild of a 1,200m² Remuera property, transforming an overgrown and underperforming garden into a cohesive, premium outdoor space.",
    challenge:
      "The existing garden had poor drainage, ageing retaining structures and no cohesive design language — requiring a full redesign from the ground up.",
    solution:
      "Greenworx delivered a comprehensive redesign including new retaining walls, improved drainage, an expansive entertaining area and a carefully considered planting scheme of natives and exotics.",
    img: "/remuera-garden.png",
  },
  {
    title: "St Heliers Coastal Garden",
    location: "St Heliers, Auckland",
    services: ["Landscape Design", "Paving", "Planting"],
    overview:
      "A contemporary coastal garden designed to make the most of the property's stunning harbour views while creating sheltered, usable outdoor spaces.",
    challenge:
      "Salt-laden coastal winds and challenging soil conditions required careful species selection and structural solutions to create a garden that could truly thrive.",
    solution:
      "Greenworx designed and installed a wind-resilient planting scheme of coastal-tolerant natives, combined with premium stone paving and a timber entertaining deck oriented to maximise sea views.",
    img: "/remuera-garden.png",
  },
  {
    title: "Glendowie Outdoor Living",
    location: "Glendowie, Auckland",
    services: ["Decking", "Paving", "Fencing"],
    overview:
      "Creation of a premium outdoor living area for a family home, centred around a large hardwood deck, natural stone courtyard and integrated privacy screening.",
    challenge:
      "The clients needed a practical, beautiful outdoor space that would work for family life and adult entertaining — while maintaining privacy from neighbouring properties.",
    solution:
      "Greenworx designed and built a multi-level hardwood deck with integrated seating, a natural stone-paved courtyard, and a custom timber screen providing privacy without sacrificing light.",
    img: "/remuera-garden.png",
  },
];

export default function ProjectsPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#1B4332] pt-36 pb-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="inline-block text-[#7DC143] font-semibold text-xs tracking-[0.2em] uppercase mb-4">Case Studies</p>
          <h1
            className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Our Projects
          </h1>
          <p className="text-white/70 text-lg max-w-xl">
            Detailed case studies from our portfolio of premium Auckland landscaping projects.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-20 px-6 lg:px-12 bg-[#F8F7F4]">
        <div className="max-w-7xl mx-auto space-y-16">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
            >
              <div className={`relative h-80 lg:h-[480px] rounded-sm overflow-hidden ${i % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className={i % 2 === 1 ? "lg:col-start-1" : ""}>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.services.map((s) => (
                    <span key={s} className="px-3 py-1 bg-[#7DC143]/10 text-[#5E9A30] text-xs font-semibold rounded-sm">
                      {s}
                    </span>
                  ))}
                </div>
                <h2
                  className="text-3xl font-bold text-[#1B4332] mb-1"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {project.title}
                </h2>
                <p className="text-gray-400 text-sm mb-6">{project.location}</p>

                <div className="space-y-5">
                  <div>
                    <h3 className="text-[#1B4332] font-semibold text-sm uppercase tracking-wider mb-2">Overview</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{project.overview}</p>
                  </div>
                  <div>
                    <h3 className="text-[#1B4332] font-semibold text-sm uppercase tracking-wider mb-2">The Challenge</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{project.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-[#1B4332] font-semibold text-sm uppercase tracking-wider mb-2">Our Solution</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{project.solution}</p>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 mt-8 border-2 border-[#1B4332] text-[#1B4332] font-semibold px-6 py-3 rounded-sm hover:bg-[#1B4332] hover:text-white transition-all text-sm uppercase tracking-wide"
                >
                  Start Your Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 lg:px-12 bg-[#1B4332]">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-3xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Ready to Start Your Project?
          </h2>
          <p className="text-white/70 mb-8">
            Contact Devon for an obligation-free discussion about your landscaping goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#7DC143] hover:bg-[#5E9A30] text-white font-semibold px-10 py-4 rounded-sm transition-colors tracking-wide text-sm uppercase"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}

