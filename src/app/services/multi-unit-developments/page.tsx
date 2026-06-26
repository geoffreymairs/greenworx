import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Multi-Unit Residential & Commercial Landscaping Auckland | Greenworx",
  description:
    "Landscaping design and construction for multi-unit residential developments, townhouses, apartments and commercial sites across Auckland. Greenworx delivers consistent, high-quality results at scale.",
};

export default function MultiUnitDevelopmentsPage() {
  return (
    <ServicePageLayout
      tag="Our Services"
      title="Multi-Unit Residential & Commercial Developments"
      subtitle="Landscaping design and construction for townhouse developments, apartment complexes and commercial sites — delivered at scale without compromising on quality."
      heroImg="/header-multi-unit.webp"
      intro="Multi-unit developments present unique landscaping challenges — shared spaces, multiple boundaries, consistent finishes across units and tight construction timelines. Greenworx works alongside developers, builders and project managers to deliver landscaping that meets council and resource consent requirements, looks great from day one, and is built to handle the wear of shared use. From communal courtyards and shared driveways to private courtyards for individual units, we manage every aspect of the landscape package — design, construction, planting and retaining — as a coordinated package that's delivered on time and to specification."
      includes={[
        "Landscape design for resource consent and council approval",
        "Shared and communal outdoor space design",
        "Private courtyard and balcony landscaping for individual units",
        "Retaining walls and boundary treatments between units",
        "Fencing, screens and privacy solutions",
        "Paving, driveways and hardstand areas",
        "Planting schemes for low-maintenance shared grounds",
        "Lawn and turf installation across common areas",
        "Stormwater and drainage integration",
        "Staged delivery to match construction programmes",
        "Defects period support and plant establishment",
        "Ongoing grounds maintenance handover",
      ]}
      benefits={[
        {
          title: "Consent-Ready Design",
          desc: "Our landscape plans are prepared to meet council and resource consent requirements, reducing delays to your project.",
        },
        {
          title: "Built for Developers",
          desc: "We understand construction programmes and work to the timelines and budgets that multi-unit projects demand.",
        },
        {
          title: "Consistent Quality at Scale",
          desc: "From a handful of units to large-scale developments, every space receives the same high standard of design and workmanship.",
        },
        {
          title: "Seamless Handover",
          desc: "We can transition straight into ongoing grounds maintenance once your development is complete, giving body corporates and owners peace of mind.",
        },
      ]}
      ctaLabel="Discuss Your Development"
      ctaHref="/contact"
      galleryImgs={[
        "/multi-unit-1.jpg",
        "/multi-unit-2.jpg",
        "/multi-unit-3.jpg",
        "/multi-unit-4.jpg",
        "/multi-unit-5.jpg",
      ]}
      serviceName="Multi-Unit Residential & Commercial Developments"
    />
  );
}
