import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Retaining Walls, Fencing & Screens Auckland | Greenworx",
  description:
    "Expert retaining wall, fencing and privacy screen design and construction across Auckland. Timber, concrete block, stone and engineered retaining walls, boundary fencing and decorative screens, built to last.",
};

export default function RetainingWallsPage() {
  return (
    <ServicePageLayout
      tag="Our Services"
      title="Retaining Walls, Fencing & Screens Auckland"
      subtitle="Strong, durable retaining walls and beautifully crafted fencing and privacy screens — designed and built to manage your site and define your outdoor space."
      heroImg="/header-retaining-walls.webp"
      intro="Retaining walls, fencing and privacy screens are among the most important structural elements of any property — managing soil movement, creating usable level areas, providing privacy and security, and giving your landscape a defined, finished look. Greenworx designs and builds retaining walls across Auckland using timber, concrete block, stone and engineered solutions suited to your site, soil conditions and budget, alongside premium fencing and screens that combine quality materials with skilled craftsmanship. From small garden terraces and timber fences to large structural retaining walls requiring engineering and council consent, our team delivers results that are built to last and look great doing it."
      includes={[
        "Timber, concrete block and stone retaining walls",
        "Engineered retaining wall design and council consent",
        "Site assessment and soil evaluation",
        "Subsoil and wall drainage systems",
        "Tiered and terraced wall systems with integrated steps",
        "Repairs and replacement of failing walls",
        "Boundary and timber fencing",
        "Privacy screens and feature screens",
        "Decorative and laser-cut screens",
        "Pool fencing and safety barriers",
        "Gates and access solutions",
        "Feature walls and cladding",
      ]}
      benefits={[
        {
          title: "Engineering & Consent Support",
          desc: "We work with engineers and council to ensure larger retaining walls are designed, consented and built to code.",
        },
        {
          title: "Built for Auckland Conditions",
          desc: "Our drainage-first approach accounts for Auckland's clay soils, high rainfall and coastal environment, protecting your investment for the long term.",
        },
        {
          title: "Quality Materials & Finishes",
          desc: "Timber, concrete block, stone, aluminium or laser-cut screens — we help you choose the right materials for your site and aesthetic.",
        },
        {
          title: "Experienced Team",
          desc: "Our team has built retaining walls, fences and screens across Auckland's most demanding sloped and coastal sites.",
        },
      ]}
      ctaLabel="Request a Quote"
      ctaHref="/contact"
      galleryImgs={[
        "/service-retaining-walls.jpg",
        "/retaining-walls-2.jpg",
        "/retaining-walls-3.jpg",
        "/retaining-walls-4.jpg",
        "/retaining-walls-5.jpg",
        "/retaining-walls-6.jpg",
        "/retaining-walls-7.jpg",
        "/retaining-walls-8.jpg",
      ]}
    />
  );
}
