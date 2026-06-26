import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ServiceGallery from "@/components/ServiceGallery";
import MasonryGallery, { type GalleryItem } from "@/components/MasonryGallery";
import galleryData from "@/data/gallery.json";

export const metadata: Metadata = {
  title: "Our Work | Auckland Landscaping Projects & Gallery | Greenworx",
  description:
    "Explore Greenworx's portfolio of premium Auckland landscaping projects — landscaping, paving, planting, lawns, retaining walls and outdoor transformations across Auckland.",
};

const projects = [
  {
    title: "Avondale Multi-Unit Development",
    location: "Avondale, Auckland",
    services: ["Fencing & Gates", "Planting", "Artificial Turf", "Pathways"],
    overview:
      "A comprehensive landscaping package for a 17-unit residential development in Avondale, Auckland. Greenworx was engaged to deliver the external works across the development, creating attractive, low-maintenance outdoor spaces that complemented the modern architectural design while meeting developer programme requirements. The scope included fencing and gates, planting, artificial turf installation, pedestrian pathways, and final site presentation, contributing to a cohesive and market-ready development.",
    challenge:
      "Delivering consistent, high-quality landscaping across 17 individual dwellings within an active construction environment required careful coordination with the builder and other trades. Tight project timelines, varying site access, and the need to maintain a uniform finish throughout the development meant that efficiency, communication, and attention to detail were critical to the project's success. The landscaping also needed to balance aesthetics with durability, ensuring outdoor areas would remain attractive and functional while requiring minimal ongoing maintenance for future residents.",
    solution:
      "Greenworx worked closely with the construction team to programme and stage the landscaping works alongside the broader development schedule. By coordinating deliveries, labour, and installation sequences, we were able to maintain momentum while adapting to changing site conditions. The completed project features modern timber fencing and gates, structured planting schemes, artificial turf areas, and pedestrian pathways that enhance both usability and street appeal. The result is a cohesive residential development that provides immediate visual impact while delivering practical, low-maintenance outdoor spaces for homeowners.",
    images: [
      "/our-work-avondale-1.jpg",
      "/our-work-avondale-2.jpg",
      "/our-work-avondale-3.jpg",
    ],
  },
  {
    title: "Bucklands Beach Coastal Garden",
    location: "Bucklands Beach, Auckland",
    services: ["Decking", "Planting", "Specimen Trees", "Garden Beds"],
    overview:
      "A high-end residential landscaping project in Bucklands Beach, Auckland, completed following the installation of a new swimming pool. Greenworx was engaged to transform the surrounding outdoor areas into a cohesive landscape that complemented the home's coastal setting while providing privacy, structure, and year-round visual appeal. The scope included decking, extensive planting, specimen trees for immediate screening, garden bed construction, soil improvement, and finishing works to create a polished outdoor environment ready for immediate enjoyment.",
    challenge:
      "Located directly adjacent Bucklands Beach, the site was highly exposed to coastal winds and salt-laden air, creating a challenging environment for plant establishment and long-term performance. The existing sandy soil offered poor water and nutrient retention, requiring careful consideration of both soil conditioning and plant selection. The client also wanted substantial privacy from neighbouring properties without waiting years for a landscape to mature, necessitating the installation of advanced-grade trees and screening plants capable of delivering immediate impact.",
    solution:
      "Greenworx developed a planting strategy specifically tailored to the site's coastal conditions, incorporating hardy species selected for their tolerance to wind, salt exposure, and free-draining sandy soils. Significant soil improvement works were undertaken to enhance moisture retention and support healthy plant establishment. Large-grade screening trees and layered planting were strategically positioned to create immediate privacy around the pool and outdoor living areas while maintaining an open, natural feel. The completed landscape delivers a lush, established appearance from day one, providing shelter, privacy, and a seamless connection between the home, pool, and surrounding coastal environment.",
    images: [
      "/our-work-bucklands-beach-1.jpg",
      "/our-work-bucklands-beach-2.jpg",
      "/our-work-bucklands-beach-3.jpg",
      "/our-work-bucklands-beach-4.jpg",
      "/our-work-bucklands-beach-5.jpg",
    ],
  },
  {
    title: "Remuera Golf Club Retaining Walls",
    location: "Remuera, Auckland",
    services: ["Retaining Walls", "Drainage", "Excavation"],
    overview:
      "Greenworx was engaged by Remuera Golf Club to replace a series of ageing and deteriorating retaining walls throughout the property. The project involved the removal of existing structures and construction of new Keystone retaining walls designed to improve long-term durability, safety, and visual appeal while integrating seamlessly into the surrounding landscape. The works were carried out within an operational golf club environment, requiring careful planning and execution to minimise disruption to members and day-to-day activities.",
    challenge:
      "Many of the existing retaining walls had reached the end of their service life and were showing signs of structural failure. The extent of the works, combined with varying wall heights, restricted access areas, and the need to maintain safe operation of the golf club, presented significant logistical challenges. The project also required careful management of excavation, drainage, and material handling to ensure the new retaining structures would perform reliably over the long term while maintaining the aesthetic standards expected of a premier golf course facility.",
    solution:
      "Greenworx delivered a staged construction programme that allowed works to proceed efficiently while minimising disruption to club operations. Existing retaining walls were carefully removed and replaced with engineered Keystone retaining wall systems designed to provide both structural integrity and an attractive finished appearance. Attention was given to drainage, foundation preparation, and construction detailing to maximise the lifespan and performance of the new walls. The completed project has significantly improved the functionality, safety, and presentation of the affected areas, providing Remuera Golf Club with a robust long-term solution that complements the quality of the surrounding grounds.",
    images: [
      "/our-work-remuera-golf-1.jpg",
      "/our-work-remuera-golf-2.jpg",
      "/our-work-remuera-golf-3.jpg",
      "/our-work-remuera-golf-4.jpg",
    ],
  },
];

export default function OurWorkPage() {
  const galleryItems = galleryData as GalleryItem[];

  return (
    <>
      <PageHero
        tag="Portfolio"
        title="Our Work"
        subtitle="A selection of recent projects — from full garden transformations to outdoor living areas and ongoing maintenance programmes across Auckland."
        image="/header-our-work.webp"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Our Work" }]}
      />

      {/* FEATURED PROJECTS */}
      <section className="py-20 px-6 lg:px-12 bg-[#F8F7F4]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="inline-block text-[#7DC143] font-semibold text-xs tracking-[0.2em] uppercase mb-4">Featured Projects</p>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#1B4332] leading-tight"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              In Depth
            </h2>
          </div>

          <div className="space-y-20">
            {projects.map((project, i) => (
              <div
                key={project.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
              >
                <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                  <ServiceGallery images={project.images} title={project.title} />
                </div>
                <div className={i % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.services.map((s) => (
                      <span key={s} className="px-3 py-1 bg-[#7DC143]/10 text-[#5E9A30] text-xs font-semibold rounded-sm">
                        {s}
                      </span>
                    ))}
                  </div>
                  <h3
                    className="text-3xl font-bold text-[#1B4332] mb-1"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-7">{project.location}</p>

                  <div className="space-y-5 border-l-2 border-[#7DC143]/30 pl-5">
                    <div>
                      <h4 className="text-[#1B4332] font-semibold text-xs uppercase tracking-wider mb-1">Overview</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{project.overview}</p>
                    </div>
                    <div>
                      <h4 className="text-[#1B4332] font-semibold text-xs uppercase tracking-wider mb-1">The Challenge</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{project.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-[#1B4332] font-semibold text-xs uppercase tracking-wider mb-1">Our Solution</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{project.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="bg-[#7DC143] py-5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-white text-center font-semibold tracking-[0.15em] text-sm uppercase">
            More from the Greenworx portfolio
          </p>
        </div>
      </div>

      {/* MASONRY GALLERY */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="inline-block text-[#7DC143] font-semibold text-xs tracking-[0.2em] uppercase mb-4">Gallery</p>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#1B4332] leading-tight mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Our Work
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
              Explore a selection of recent landscaping, paving, planting, lawn, retaining wall and outdoor transformation projects completed across Auckland.
            </p>
          </div>
          <MasonryGallery items={galleryItems} initialCount={16} batchSize={16} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-12 bg-[#1B4332]">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Ready to Start Your Project?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Contact Devon for an obligation-free discussion about your landscaping goals.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#7DC143] hover:bg-[#5E9A30] text-white font-semibold px-10 py-4 rounded-sm transition-colors tracking-wide text-sm uppercase"
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
