import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Garden Maintenance Auckland | Garden Tidy Ups & Ongoing Care | Greenworx",
  description:
    "Professional garden maintenance services in Auckland. Scheduled programmes, garden tidy-ups, pruning, hedge trimming, weed control and seasonal care by Greenworx. Clear, upfront pricing with no hidden costs.",
};

export default function GardenMaintenancePage() {
  return (
    <ServicePageLayout
      tag="Our Services"
      title="Garden Maintenance Auckland"
      subtitle="Reliable, professional garden maintenance that keeps your outdoor space looking immaculate — every season, every visit."
      heroImg="/header-LRP_0691.webp"
      intro="Your garden is an investment — and like any investment, it needs consistent care to perform at its best. Greenworx provides professional garden maintenance services for Auckland homeowners and commercial clients who demand a high standard and reliable service. Whether you need regular scheduled visits, a one-off garden tidy-up, or a spring or autumn clean-up, we tailor our service to your garden's needs and your budget."
      includes={[
        "Pruning and trimming of shrubs and trees",
        "Hedge cutting and shaping",
        "Weed control and removal",
        "One-off garden tidy-ups",
        "Spring and autumn seasonal clean-ups",
        "Fertilisation and soil health programmes",
        "Pest and disease management",
        "Leaf litter and debris removal",
        "Irrigation system checks and adjustments",
        "Seasonal planting and colour changes",
        "Ongoing maintenance contracts",
      ]}
      benefits={[
        {
          title: "Scheduled Programmes",
          desc: "We offer weekly, fortnightly or monthly maintenance programmes tailored to your garden and budget.",
        },
        {
          title: "Consistent Crew",
          desc: "The same experienced team visits your property each time — they know your garden and care for it accordingly.",
        },
        {
          title: "Transparent Pricing",
          desc: "Clear, upfront pricing. Garden maintenance with no hidden costs.",
        },
        {
          title: "Fully Insured",
          desc: "Complete peace of mind — all Greenworx maintenance teams are fully insured and professionally trained.",
        },
      ]}
      ctaLabel="Schedule Maintenance"
      ctaHref="/contact"
      galleryImgs={[
        "/service-garden-maintenance.jpg",
        "/garden-maintenance-2.jpg",
        "/garden-maintenance-3.jpg",
        "/garden-maintenance-4.jpg",
      ]}
    />
  );
}
