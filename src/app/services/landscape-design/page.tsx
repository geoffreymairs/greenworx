import type { Metadata } from "next";
import Image from "next/image";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Landscape Design & Garden Design Auckland | Greenworx",
  description:
    "Expert landscape and garden design services across Auckland. Concept plans, planting plans, outdoor living design, resource consent documentation and garden redesigns by Greenworx.",
};

export default function LandscapeDesignPage() {
  return (
    <>
      <ServicePageLayout
        tag="Our Services"
        title="Landscape Design Auckland"
        subtitle="Thoughtful, site-specific design that transforms your outdoor space into something truly exceptional."
        heroImg="/header-LRP_0498.webp"
        intro="Great landscaping starts with great design. At Greenworx, we take the time to understand your property, your lifestyle and your vision before a single plant goes in the ground. From garden design consultations and concept sketches through to detailed planting plans and full resource consent packages, we deliver considered designs that work beautifully for years to come — and that we can bring to life through our construction services."
        includes={[
          "Garden design consultations",
          "Concept plans and design briefs",
          "Detailed planting plans",
          "Outdoor living and entertaining design",
          "Full site surveys and measurements",
          "Resource consent documentation",
          "New build landscaping design",
          "Garden redesigns and refreshes",
          "Collaboration with architects and builders",
          "3D visualisations on request",
          "Staged design for phased builds",
          "Native and exotic planting schemes",
        ]}
        benefits={[
          {
            title: "Site-Specific Solutions",
            desc: "Every design is created from scratch for your specific site, aspect, soil conditions and council requirements.",
          },
          {
            title: "Horticultural Expertise",
            desc: "We know which plants thrive in Auckland's climate and how to create gardens that look stunning year-round.",
          },
          {
            title: "Resource Consent Ready",
            desc: "We produce council-compliant documentation, taking the stress out of the consent process.",
          },
          {
            title: "Design & Build",
            desc: "We can design and then build your landscape, ensuring seamless execution from concept to completion.",
          },
        ]}
        ctaLabel="Book a Design Consultation"
        ctaHref="/contact"
        galleryImgs={["/landscape-design-plan.png"]}
        galleryFit="contain"
      />

      {/* DESIGN & BUILD PROCESS */}
      <section className="py-20 px-6 lg:px-12 bg-[#F8F7F4]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="inline-block text-[#7DC143] font-semibold text-xs tracking-[0.2em] uppercase mb-4">Our Process</p>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#1B4332] leading-tight"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              How It Works
            </h2>
            <p className="text-gray-500 mt-4 text-lg">From initial enquiry through to enjoying your finished landscape.</p>
          </div>
          <div className="relative w-full rounded-sm overflow-hidden">
            <Image
              src="/how-it-works.png"
              alt="How it works — our design and build process from enquiry to enjoying your new landscape"
              width={1536}
              height={1024}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
}
