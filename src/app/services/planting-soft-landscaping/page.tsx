import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Planting & Soft Landscaping Auckland | Native Planting & Garden Installation | Greenworx",
  description:
    "Expert planting and soft landscaping services across Auckland. Native planting, garden installations, feature planting, garden rejuvenation and replanting by Greenworx.",
};

export default function PlantingSoftLandscapingPage() {
  return (
    <ServicePageLayout
      tag="Our Services"
      title="Planting & Soft Landscaping Auckland"
      subtitle="Expertly sourced and installed planting programmes that bring life, colour and texture to your outdoor space."
      heroImg="/header-LRP_0647.webp"
      intro="Plants are the soul of any great garden. Greenworx brings horticultural expertise to every planting project — understanding how plants behave in Auckland's climate, which species suit your soil and aspect, and how to combine plants for year-round interest. Whether you need a full garden installation, a native planting scheme, a feature garden or a replanting of an existing space, we deliver beautiful, thriving results."
      includes={[
        "Full garden planting installations",
        "Native and exotic planting schemes",
        "Feature tree and specimen planting",
        "Hedge and screen planting",
        "Feature garden creation",
        "Garden rejuvenation and replanting",
        "Garden installation from design",
        "Seasonal colour changes",
        "Container and pot planting",
        "Wetland and water-wise planting",
        "Soil preparation and amendment",
        "Mulching and ongoing care plans",
      ]}
      benefits={[
        {
          title: "Horticultural Knowledge",
          desc: "We select plants that thrive in Auckland's specific conditions — not just plants that look good in a nursery.",
        },
        {
          title: "Quality Plant Sourcing",
          desc: "We source plants from trusted Auckland growers — healthy, well-established stock that establishes quickly.",
        },
        {
          title: "Design-Led Planting",
          desc: "Every planting scheme is designed for year-round appeal — considering texture, form, colour and seasonal change.",
        },
        {
          title: "Ongoing Care",
          desc: "We can provide aftercare and maintenance programmes to keep your new planting looking its best.",
        },
      ]}
      ctaLabel="Request a Planting Quote"
      ctaHref="/contact"
      galleryImgs={[
        "/service-planting-soft-landscaping.jpg",
        "/planting-soft-landscaping-2.jpg",
        "/planting-soft-landscaping-3.jpg",
        "/planting-soft-landscaping-4.jpg",
        "/planting-soft-landscaping-5.jpg",
        "/planting-soft-landscaping-6.jpg",
      ]}
    />
  );
}
