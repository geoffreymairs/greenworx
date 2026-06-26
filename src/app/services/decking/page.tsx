import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Decking Auckland | Timber & Hardwood Decks | Greenworx",
  description:
    "Bespoke timber and hardwood decking across Auckland. Entertainment decks, pool decks and outdoor living areas expertly crafted by Greenworx.",
};

export default function DeckingPage() {
  return (
    <ServicePageLayout
      tag="Our Services"
      title="Decking Auckland"
      subtitle="Bespoke timber and hardwood decks designed and built for Auckland's indoor-outdoor lifestyle."
      heroImg="/header-decking.webp"
      intro="A well-designed deck transforms the way you use your home. At Greenworx, we design and build premium timber decks that integrate seamlessly with your home and garden — creating beautiful, functional outdoor spaces for entertaining, relaxing and everyday living. From modest platform decks to elaborate multi-level entertainment areas, every project receives the same attention to detail."
      includes={[
        "Softwood and hardwood deck construction",
        "Composite and low-maintenance decking options",
        "Entertainment and dining decks",
        "Pool decks and surrounds",
        "Multi-level deck design and build",
        "Pergolas and shade structures",
        "Integrated seating and planters",
        "Deck balustrades and handrails",
        "Deck lighting installation",
        "Deck maintenance and restoration",
      ]}
      benefits={[
        {
          title: "Premium Timbers",
          desc: "We use only quality timbers and products — chosen for durability and appearance in Auckland's coastal climate.",
        },
        {
          title: "Bespoke Design",
          desc: "Every deck is designed specifically for your home, aspect and lifestyle — never off-the-shelf.",
        },
        {
          title: "Council Compliance",
          desc: "We manage the consent process where required, ensuring your deck meets all building code requirements.",
        },
        {
          title: "Integrated Landscaping",
          desc: "We can combine your deck with surrounding landscaping for a fully cohesive outdoor space.",
        },
      ]}
      ctaLabel="Request a Decking Quote"
      ctaHref="/contact"
      galleryImgs={[
        "/service-decking.jpg",
        "/decking-2.jpg",
        "/decking-3.jpg",
        "/decking-4.jpg",
      ]}
    />
  );
}

