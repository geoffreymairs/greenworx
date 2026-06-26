import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About Greenworx | Auckland Landscaping Company",
  description:
    "Learn about Greenworx Landscaping — Auckland's premium landscaping company founded by Devon Mills. Discover our story, values and commitment to quality.",
};

const values = [
  {
    title: "Quality Without Compromise",
    desc: "Every project — no matter the budget — receives our full attention and commitment to quality. We won't cut corners and we won't rush the work.",
  },
  {
    title: "Honest Communication",
    desc: "We believe in straight talk. Clear quotes, realistic timelines and prompt responses to your questions throughout the project.",
  },
  {
    title: "Lasting Results",
    desc: "We design and build for longevity. The plants we source, the structures we build and the systems we install are chosen to perform over the long term.",
  },
  {
    title: "Local Knowledge",
    desc: "Auckland's climate, soil types and council requirements are second nature to us. That local expertise saves our clients time and money.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        tag="Our Story"
        title="Auckland's Premium Landscaping Specialists"
        subtitle="Greenworx was founded on a simple belief: Auckland homeowners deserve a landscaping company that takes their outdoor space as seriously as they do."
        image="/header-_RP_0066.webp"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* STORY */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="relative h-96 rounded-sm overflow-hidden">
                <Image
                  src="/devon-mills.jpg"
                  alt="Devon Mills — founder of Greenworx Landscaping Auckland"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-96 rounded-sm overflow-hidden">
                <Image
                  src="/about-devon-2.jpg"
                  alt="Devon Mills and the Greenworx team at work in Auckland"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <p className="inline-block text-[#7DC143] font-semibold text-xs tracking-[0.2em] uppercase mb-4">About Devon</p>
              <h2
                className="text-4xl font-bold text-[#1B4332] mb-6 leading-tight"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Led by Devon Mills
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Greenworx was founded by Devon Mills with a simple goal: to create a landscaping company that
                  people could rely on. A company that communicates well, shows up when it says it will, and
                  takes pride in delivering quality work that lasts.
                </p>
                <p>
                  Having spent years working across Auckland&apos;s landscaping industry, Devon has developed an
                  exceptional eye for design and an unwavering commitment to quality. He personally oversees
                  every project — from initial consultation through to final handover — ensuring that nothing
                  leaves the Greenworx standard.
                </p>
                <p>
                  Devon lives in Glendowie with his family and their dog, Daisy. When he&apos;s not building
                  landscapes for clients, he&apos;s usually working on his own garden, chasing the perfect lawn,
                  playing golf, or spending time with his family.
                </p>
              </div>
              <div className="mt-8 flex gap-8">
                <div>
                  <p className="text-4xl font-bold text-[#1B4332]" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>2400+</p>
                  <p className="text-gray-500 text-sm">Projects Completed</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-[#1B4332]" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>5&#9733;</p>
                  <p className="text-gray-500 text-sm">Client Reviews</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-[#1B4332]" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>10+</p>
                  <p className="text-gray-500 text-sm">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 px-6 lg:px-12 bg-[#F8F7F4]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="inline-block text-[#7DC143] font-semibold text-xs tracking-[0.2em] uppercase mb-4">How We Work</p>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#1B4332] leading-tight"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <div key={v.title} className="bg-white p-8 rounded-sm">
                <div className="w-8 h-8 rounded-sm bg-[#7DC143] text-white flex items-center justify-center text-sm font-bold mb-4">
                  {i + 1}
                </div>
                <h3
                  className="text-xl font-bold text-[#1B4332] mb-3"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {v.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-12 bg-[#1B4332]">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Ready to Work Together?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Get in touch with Devon to discuss your project and receive an obligation-free quote.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#7DC143] hover:bg-[#5E9A30] text-white font-semibold px-10 py-4 rounded-sm transition-colors tracking-wide text-sm uppercase"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}

