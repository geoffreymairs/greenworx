import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Paving & Concrete Auckland | Hardscaping, Courtyards & Driveways | Greenworx",
  description:
    "Premium paving and concrete services in Auckland. Stone paving, concrete paths and patios, driveways, courtyards and outdoor entertaining areas by Greenworx.",
};

export default function PavingHardscapingPage() {
  return (
    <ServicePageLayout
      tag="Our Services"
      title="Paving & Hardscaping Auckland"
      subtitle="Premium paving and hardscaping solutions that form the foundation of a stunning outdoor space."
      heroImg="/header-LRP_0638.webp"
      intro="The hardscape elements of your garden — pathways, courtyards, driveways and entertaining areas — are the backbone of your outdoor space. Get them right and everything else falls into place. Greenworx installs premium paving, concrete and hardscaping across Auckland, combining high-quality materials with precise workmanship to create surfaces that are as beautiful as they are durable."
      includes={[
        "Natural stone paving (schist, bluestone, sandstone)",
        "Concrete paths and patio areas",
        "Exposed aggregate concrete",
        "Decorative and stamped concrete finishes",
        "Porcelain and tile paving",
        "Brick and cobble paving",
        "Garden pathways and stepping stones",
        "Driveways and parking areas",
        "Courtyards and entertaining areas",
        "Pool surrounds and patio areas",
        "Retaining walls and edging",
        "Drainage and sub-base preparation",
      ]}
      benefits={[
        {
          title: "Precision Installation",
          desc: "Proper base preparation and precise laying ensures your paving stays level and stable for years.",
        },
        {
          title: "Premium Materials",
          desc: "We source quality paving materials from trusted New Zealand and international suppliers.",
        },
        {
          title: "Design Integration",
          desc: "Your paving is designed to integrate with the wider garden — matching your home's style and palette.",
        },
        {
          title: "Drainage Expertise",
          desc: "Proper drainage is built into every project, protecting your investment and your property.",
        },
      ]}
      ctaLabel="Request a Paving Quote"
      ctaHref="/contact"
      galleryImgs={[
        "/service-paving-hardscaping.jpg",
        "/paving-hardscaping-2.jpg",
        "/paving-hardscaping-3.jpg",
        "/paving-hardscaping-4.jpg",
        "/paving-hardscaping-5.jpg",
        "/paving-hardscaping-6.jpg",
      ]}
    />
  );
}
