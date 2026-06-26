import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import PageHero from "@/components/PageHero";
import { notFound } from "next/navigation";

const suburbData: Record<string, {
  name: string;
  desc: string;
  content: string;
  img: string;
}> = {
  remuera: {
    name: "Remuera",
    desc: "Premium landscaping design, construction and maintenance for Remuera's prestigious properties.",
    content:
      "Remuera is home to some of Auckland's most prestigious properties — large character homes and modern architecturally-designed residences, many with substantial gardens that deserve the very best care. Greenworx has extensive experience working in Remuera, understanding the suburb's character, council requirements and the high standard that Remuera homeowners expect. Whether you're looking to redesign an established garden, build a new outdoor living area or maintain an existing landscape to an immaculate standard, our team delivers results that match the calibre of Remuera's finest homes.",
    img: "/gallery/lrp_0650.jpg",
  },
  "st-heliers": {
    name: "St Heliers",
    desc: "Coastal garden specialists serving St Heliers' waterfront and hillside properties.",
    content:
      "St Heliers is a stunning seaside suburb where the garden is often as important as the home itself — a place to enjoy Auckland's enviable outdoor lifestyle with views across the Waitemata. Greenworx understands the unique challenges of coastal gardening: salt-tolerant plant selection, wind protection strategies and materials that hold up to the coastal environment. Our team works extensively across St Heliers, from beachfront properties to the hillside streets with their sweeping harbour views, delivering landscape design and maintenance that makes the most of what this exceptional suburb has to offer.",
    img: "/gallery/lrp_0040.jpg",
  },
  glendowie: {
    name: "Glendowie",
    desc: "Expert landscaping for Glendowie's premium family homes and properties.",
    content:
      "Glendowie is a sought-after family suburb on Auckland's eastern bays, known for its quiet streets, excellent schools and proximity to the coast. Greenworx works with many Glendowie homeowners to create gardens that balance family functionality with genuine visual appeal — practical spaces for children and pets alongside beautiful planting and entertaining areas that make this already-desirable suburb even more enjoyable to call home.",
    img: "/gallery/lrp_0488.jpg",
  },
  kohimarama: {
    name: "Kohimarama",
    desc: "Bringing premium landscaping to Kohimarama's sought-after beachside suburb.",
    content:
      "Kohimarama's combination of beach lifestyle and premium property values creates the ideal setting for exceptional garden design. Greenworx has worked on numerous properties across Kohimarama, creating gardens that complement the suburb's relaxed coastal character while meeting the high expectations of its discerning residents. From low-maintenance courtyard gardens to expansive landscape transformations, we deliver results that enhance both lifestyle and property value.",
    img: "/gallery/lrp_0378.jpg",
  },
  "mission-bay": {
    name: "Mission Bay",
    desc: "Landscape design and maintenance for Mission Bay's vibrant beachside community.",
    content:
      "Mission Bay is one of Auckland's most vibrant and desirable beachside suburbs. With its beautiful beach, popular esplanade and strong community character, Mission Bay homeowners enjoy an enviable lifestyle that a great garden only enhances. Greenworx provides the full range of landscaping services to Mission Bay properties — from contemporary low-maintenance gardens to full landscape transformations designed for the beach-loving lifestyle.",
    img: "/gallery/lrp_0902.jpg",
  },
  orakei: {
    name: "Orakei",
    desc: "Serving Orakei's premium residential properties with expert landscaping.",
    content:
      "Orakei's premium properties command views across the Waitemata Harbour and the city skyline — landscapes that deserve to be every bit as impressive as the vistas they overlook. Greenworx serves Orakei homeowners who expect the same level of quality in their garden as they demand from every other aspect of their home. We deliver landscape design, construction and maintenance that meets that standard, every time.",
    img: "/gallery/lrp_0501.jpg",
  },
  meadowbank: {
    name: "Meadowbank",
    desc: "Quality landscaping for Meadowbank's family homes and properties.",
    content:
      "Meadowbank is a well-established Auckland suburb with a strong community feel and a mix of character homes and newer developments. Greenworx provides professional landscaping services across Meadowbank — from garden maintenance for busy families to full landscape redesigns for homeowners looking to make the most of their outdoor space. Our team brings the same high standard of workmanship to every Meadowbank project.",
    img: "/gallery/rp_0358.jpg",
  },
  epsom: {
    name: "Epsom",
    desc: "Premium landscape design and construction for Epsom's prestigious character homes.",
    content:
      "Epsom is home to some of Auckland's finest character homes — grand villas, bungalows and mid-century properties set on generous sites with established gardens. These properties demand a landscaper who understands their character and the responsibility of working with mature trees and established plantings. Greenworx brings the expertise and sensitivity to work sympathetically with Epsom's heritage properties while delivering the contemporary outdoor living spaces today's homeowners expect.",
    img: "/gallery/lrp_0927.jpg",
  },
  parnell: {
    name: "Parnell",
    desc: "Expert landscaping for Parnell's prestigious character homes and contemporary residences.",
    content:
      "Parnell is one of Auckland's most desirable inner-city suburbs — a unique blend of historic character homes, boutique shopping and beautiful parks, all within minutes of the CBD. Greenworx works with Parnell homeowners to create gardens that honour the suburb's rich heritage while delivering the modern outdoor living spaces that today's residents expect. Whether it's a carefully considered courtyard garden for a Victorian villa or a contemporary terrace for a new build, our team delivers exceptional results in this iconic suburb.",
    img: "/gallery/lrp_0532.jpg",
  },
  "herne-bay": {
    name: "Herne Bay",
    desc: "Premium landscaping for Herne Bay's sought-after waterfront and character properties.",
    content:
      "Herne Bay is consistently ranked among Auckland's most desirable suburbs — a tree-lined coastal enclave of grand character homes and premium properties with some of the best harbour views in the city. Greenworx serves the discerning homeowners of Herne Bay who expect nothing less than exceptional in every aspect of their property. From established garden redesigns to full landscape constructions, we deliver results that are worthy of Herne Bay's prestigious address.",
    img: "/gallery/lrp_0735.jpg",
  },
  "pt-chevalier": {
    name: "Pt Chevalier",
    desc: "Quality landscaping for Pt Chevalier's relaxed coastal community and family homes.",
    content:
      "Pt Chevalier is a beloved inner-west Auckland suburb with a relaxed, community-focused character and wonderful access to the Waitemata Harbour. Its mix of bungalows, character homes and newer builds creates a diverse range of landscaping opportunities. Greenworx brings professional landscaping services to Pt Chevalier homeowners — from low-maintenance garden makeovers to full outdoor living transformations that take full advantage of this charming suburb's coastal lifestyle.",
    img: "/gallery/lrp_0812.jpg",
  },
  ellerslie: {
    name: "Ellerslie",
    desc: "Professional landscaping services for Ellerslie's family homes and established properties.",
    content:
      "Ellerslie is a well-connected Auckland suburb with a strong community identity and a mix of character bungalows, modern townhouses and family homes. Its central location and easy motorway access make it a popular choice for families and professionals alike. Greenworx provides expert landscaping services across Ellerslie — from tidy, low-maintenance gardens for busy households to ambitious outdoor living projects that transform a property and enhance its value.",
    img: "/gallery/lrp_0858.jpg",
  },
};

export async function generateStaticParams() {
  return Object.keys(suburbData).map((suburb) => ({ suburb }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ suburb: string }>;
}): Promise<Metadata> {
  const { suburb } = await params;
  const data = suburbData[suburb];
  if (!data) return {};
  return {
    title: `Landscaping ${data.name} | Greenworx Auckland`,
    description: data.desc,
  };
}

export default async function SuburbPage({
  params,
}: {
  params: Promise<{ suburb: string }>;
}) {
  const { suburb } = await params;
  const data = suburbData[suburb];
  if (!data) notFound();

  return (
    <>
      <PageHero
        tag="Service Area"
        title={`Landscaping ${data.name}`}
        subtitle={data.desc}
        image={data.img}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Service Areas", href: "/service-areas" },
          { label: data.name },
        ]}
      />

      {/* CONTENT */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <p className="inline-block text-[#7DC143] font-semibold text-xs tracking-[0.2em] uppercase mb-4">Why Greenworx in {data.name}</p>
              <h2
                className="text-3xl font-bold text-[#1B4332] mb-6"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Expert Landscaping in {data.name}
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-10">{data.content}</p>

              <h3
                className="text-2xl font-bold text-[#1B4332] mb-5"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Services Available in {data.name}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  ["Landscape Design", "/services/landscape-design"],
                  ["Retaining Walls, Fencing & Screens", "/services/retaining-walls"],
                  ["Garden Maintenance", "/services/garden-maintenance"],
                  ["Decking", "/services/decking"],
                  ["Paving & Hardscaping", "/services/paving-hardscaping"],
                  ["Planting & Soft Landscaping", "/services/planting-soft-landscaping"],
                  ["Commercial Landscaping", "/services/commercial"],
                  ["Multi-Unit & Commercial Developments", "/services/multi-unit-developments"],
                ].map(([name, href]) => (
                  <Link
                    key={href}
                    href={href}
                    className="flex items-center gap-3 p-4 bg-[#F8F7F4] hover:bg-[#7DC143]/10 rounded-sm text-[#1B4332] hover:text-[#5E9A30] text-sm font-medium transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#7DC143] flex-shrink-0" />
                    {name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className="sticky top-28 bg-[#1B4332] rounded-sm p-8">
                <h3
                  className="text-white font-bold text-xl mb-2"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  Get a Free Quote for {data.name}
                </h3>
                <p className="text-white/60 text-sm mb-6">
                  Tell us about your {data.name} property and we&apos;ll get back to you promptly.
                </p>
                <QuoteForm dark />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other areas */}
      <section className="py-12 px-6 lg:px-12 bg-[#F8F7F4]">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-semibold text-[#1B4332]/50 tracking-widest uppercase mb-4">Also Serving</p>
          <div className="flex flex-wrap gap-3">
            {Object.entries(suburbData)
              .filter(([s]) => s !== suburb)
              .map(([s, d]) => (
                <Link
                  key={s}
                  href={`/service-areas/${s}`}
                  className="px-4 py-2 bg-white border border-gray-200 hover:border-[#7DC143] hover:text-[#7DC143] text-gray-600 text-sm rounded-sm transition-colors"
                >
                  {d.name}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
