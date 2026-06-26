import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Landscaping Service Areas Auckland | Greenworx",
  description:
    "Greenworx provides premium landscaping services across Auckland's eastern and central suburbs — Remuera, St Heliers, Glendowie, Kohimarama, Epsom and more.",
};

const areas = [
  {
    name: "Remuera",
    slug: "remuera",
    desc: "Premium landscape design, construction and maintenance for Remuera's prestigious properties.",
    img: "/gallery/lrp_0650.jpg",
  },
  {
    name: "St Heliers",
    slug: "st-heliers",
    desc: "Coastal garden specialists serving St Heliers' stunning waterfront and hillside properties.",
    img: "/gallery/lrp_0040.jpg",
  },
  {
    name: "Glendowie",
    slug: "glendowie",
    desc: "Expert landscaping for Glendowie's family properties and premium homes.",
    img: "/gallery/lrp_0488.jpg",
  },
  {
    name: "Kohimarama",
    slug: "kohimarama",
    desc: "Bringing premium landscaping to Kohimarama's sought-after beachside suburb.",
    img: "/gallery/lrp_0378.jpg",
  },
  {
    name: "Mission Bay",
    slug: "mission-bay",
    desc: "Landscape design and maintenance for Mission Bay's vibrant beachside community.",
    img: "/gallery/lrp_0902.jpg",
  },
  {
    name: "Orakei",
    slug: "orakei",
    desc: "Serving Orakei's premium residential properties with expert landscaping services.",
    img: "/gallery/lrp_0501.jpg",
  },
  {
    name: "Meadowbank",
    slug: "meadowbank",
    desc: "Greenworx provides quality landscaping for Meadowbank's family homes and properties.",
    img: "/gallery/rp_0358.jpg",
  },
  {
    name: "Epsom",
    slug: "epsom",
    desc: "Premium landscape design and construction for Epsom's prestigious character homes.",
    img: "/gallery/lrp_0927.jpg",
  },
  {
    name: "Parnell",
    slug: "parnell",
    desc: "Expert landscaping for Parnell's prestigious character homes and contemporary residences.",
    img: "/gallery/lrp_0532.jpg",
  },
  {
    name: "Herne Bay",
    slug: "herne-bay",
    desc: "Premium landscaping for Herne Bay's sought-after waterfront and character properties.",
    img: "/gallery/lrp_0735.jpg",
  },
  {
    name: "Pt Chevalier",
    slug: "pt-chevalier",
    desc: "Quality landscaping for Pt Chevalier's relaxed coastal community and family homes.",
    img: "/gallery/lrp_0812.jpg",
  },
  {
    name: "Ellerslie",
    slug: "ellerslie",
    desc: "Professional landscaping services for Ellerslie's family homes and established properties.",
    img: "/gallery/lrp_0858.jpg",
  },
];

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        tag="Where We Work"
        title="Auckland Service Areas"
        subtitle="Greenworx services premium residential and commercial properties across Auckland, with a focus on the eastern and central suburbs."
        image="/header-LRP_0691.webp"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Service Areas" }]}
      />

      <section className="py-20 px-6 lg:px-12 bg-[#F8F7F4]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {areas.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="group block bg-white rounded-sm overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={area.img}
                    alt={`Landscaping ${area.name}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-[#1B4332]/30 group-hover:bg-[#1B4332]/50 transition-colors" />
                  <div className="absolute bottom-3 left-4">
                    <h2
                      className="text-white font-bold text-xl"
                      style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                    >
                      {area.name}
                    </h2>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{area.desc}</p>
                  <span className="text-[#7DC143] text-sm font-semibold flex items-center gap-1">
                    View services
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

