import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Lawn Installation Auckland | Artificial Turf & Natural Grass | Greenworx",
  description:
    "Expert lawn installation across Auckland. Ready lawn, natural grass, artificial turf and lawn renovations by Greenworx. Get a free quote today.",
};

export default function LawnsTurfPage() {
  return (
    <ServicePageLayout
      tag="Our Services"
      title="Lawns & Turf Auckland"
      subtitle="Beautiful, low-maintenance lawns for Auckland homes — from ready lawn installation to premium artificial turf."
      heroImg="/header-lawns-turf.webp"
      intro="A great lawn transforms a garden. Whether you're after a lush natural lawn, the convenience of artificial turf, or a complete lawn renovation, Greenworx delivers expert results across Auckland. We handle everything from site preparation and soil conditioning through to installation and establishment — so your lawn looks great from day one and for years to come."
      includes={[
        "Ready lawn (turf) supply and installation",
        "Natural grass lawn establishment from seed",
        "Artificial turf supply and installation",
        "Lawn renovations and repairs",
        "Soil preparation and conditioning",
        "Kikuyu, ryegrass and fescue lawn options",
        "Weed, pest and disease treatment",
        "Lawn edging and definition",
        "Sports turf and lifestyle surfaces",
        "Lawn establishment and care programmes",
      ]}
      benefits={[
        {
          title: "Full Installation Service",
          desc: "We handle everything — ground preparation, grading, soil, installation and establishment watering. One team, start to finish.",
        },
        {
          title: "Right Lawn for Your Site",
          desc: "We assess your aspect, soil, drainage and usage to recommend the best lawn type for your specific property and lifestyle.",
        },
        {
          title: "Artificial Turf Specialists",
          desc: "Premium artificial turf options that look and feel realistic — perfect for Auckland's variable conditions and busy families.",
        },
        {
          title: "Long-Term Results",
          desc: "Proper sub-base preparation and premium materials mean your lawn looks immaculate and performs well for years.",
        },
      ]}
      ctaLabel="Get a Lawn Quote"
      ctaHref="/contact"
      galleryImgs={["/service-lawns-turf.webp"]}
      serviceName="Lawns & Turf"
    />
  );
}
