import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Project Gallery | Auckland Landscaping Portfolio",
  description:
    "Browse the Greenworx project gallery — landscape design, construction, decking, paving and garden maintenance projects across Auckland.",
};

const categories = ["All", "Landscape Design", "Construction", "Decking", "Paving", "Planting", "Maintenance", "Commercial"];

const gallery = [
  { img: "/remuera-garden.png", category: "Construction", title: "Remuera Garden Build" },
  { img: "/remuera-garden.png", category: "Planting", title: "Kohimarama Native Garden" },
  { img: "/remuera-garden.png", category: "Landscape Design", title: "St Heliers Coastal Design" },
  { img: "/remuera-garden.png", category: "Decking", title: "Glendowie Entertainment Deck" },
  { img: "/remuera-garden.png", category: "Paving", title: "Parnell Courtyard Paving" },
  { img: "/remuera-garden.png", category: "Commercial", title: "Commercial Grounds" },
  { img: "/remuera-garden.png", category: "Paving", title: "Remuera Stone Pathway" },
  { img: "/remuera-garden.png", category: "Maintenance", title: "Epsom Garden Maintenance" },
  { img: "/remuera-garden.png", category: "Planting", title: "Mission Bay Planting" },
  { img: "/remuera-garden.png", category: "Landscape Design", title: "Orakei Garden Design" },
  { img: "/remuera-garden.png", category: "Decking", title: "Meadowbank Pool Deck" },
  { img: "/remuera-garden.png", category: "Construction", title: "Mt Eden Retaining Wall" },
];

export default function GalleryPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#1B4332] pt-36 pb-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="inline-block text-[#7DC143] font-semibold text-xs tracking-[0.2em] uppercase mb-4">Our Portfolio</p>
          <h1
            className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Project Gallery
          </h1>
          <p className="text-white/70 text-lg max-w-xl">
            Browse our portfolio of landscape design, construction and maintenance projects across Auckland.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 px-6 lg:px-12 bg-[#F8F7F4]">
        <div className="max-w-7xl mx-auto">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`px-4 py-2 text-sm font-medium rounded-sm transition-all ${
                  i === 0
                    ? "bg-[#1B4332] text-white"
                    : "bg-white border border-gray-200 text-gray-600 hover:border-[#7DC143] hover:text-[#7DC143]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {gallery.map((item, i) => (
              <div key={i} className="group relative overflow-hidden rounded-sm break-inside-avoid">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={800}
                  height={600}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2B1E]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <div>
                    <span className="text-[#7DC143] text-xs font-semibold tracking-widest uppercase block mb-1">{item.category}</span>
                    <p className="text-white font-semibold">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 lg:px-12 bg-[#1B4332]">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-3xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Like What You See?
          </h2>
          <p className="text-white/70 mb-8">Get in touch to discuss your own landscaping project.</p>
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

