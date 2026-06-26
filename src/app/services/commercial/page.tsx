import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Commercial & Body Corporate Landscaping Auckland | Greenworx",
  description:
    "Professional commercial and body corporate grounds maintenance across Auckland. Reliable scheduled programmes for property managers, apartment complexes and commercial developments. Greenworx Landscaping.",
};

export default function CommercialPage() {
  return (
    <ServicePageLayout
      tag="Our Services"
      title="Commercial & Body Corporate Maintenance"
      subtitle="Reliable, professional grounds maintenance and landscaping for Auckland's commercial properties, body corporates and managed developments."
      heroImg="/header-LRP_0936.webp"
      intro="First impressions matter. For commercial properties and apartment complexes, well-maintained grounds signal professionalism, care and pride. Greenworx delivers consistent, high-quality commercial landscaping and grounds maintenance for body corporates, property managers, office developments and residential complexes across Auckland. We build long-term partnerships on a foundation of reliability, clear communication and genuine quality of work — so you never have to chase us."
      includes={[
        "Scheduled grounds maintenance programmes",
        "Body corporate garden maintenance",
        "Apartment complex and strata grounds management",
        "Common area maintenance and care",
        "Property manager partnerships",
        "Office and commercial development landscaping",
        "Lawn maintenance and mowing",
        "Hedge and shrub maintenance",
        "Seasonal colour and planting",
        "Irrigation management",
        "Litter and debris removal",
        "Commercial landscape construction",
      ]}
      benefits={[
        {
          title: "Reliable Scheduling",
          desc: "We turn up when we say we will. Consistent, punctual service that keeps your property looking its best year-round.",
        },
        {
          title: "Dedicated Account Management",
          desc: "A single point of contact for all your commercial landscaping needs — responsive, organised and easy to deal with.",
        },
        {
          title: "Tailored Maintenance Programmes",
          desc: "We build programmes around your property's specific needs, budget and aesthetic requirements. No one-size-fits-all.",
        },
        {
          title: "Fully Insured",
          desc: "Complete public liability insurance and professional indemnity — appropriate for all commercial and body corporate environments.",
        },
      ]}
      ctaLabel="Request a Commercial Quote"
      ctaHref="/contact"
      galleryImgs={[
        "/service-commercial.jpg",
        "/commercial-2.jpg",
        "/commercial-3.jpg",
        "/commercial-4.jpg",
      ]}
      serviceName="Commercial & Body Corporate Maintenance"
    />
  );
}
