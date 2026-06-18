import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "The Newberg Spotlight | STC Marketing",
  description:
    "The Newberg Spotlight is a shared 9×12\" direct mail postcard featuring local Newberg businesses, mailed to 5,000 households in the Newberg, OR area. Powered by STC Marketing.",
  openGraph: {
    title: "The Newberg Spotlight | STC Marketing",
    description:
      "Local Newberg businesses featured on one oversized postcard — delivered to 5,000 Newberg households. One business per industry.",
    url: "https://stcmarketingco.com/the-spotlights/newberg",
    images: [
      {
        url: "https://stcmarketingco.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Newberg Spotlight postcard",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "The Newberg Spotlight",
  description:
    "A shared 9×12″ direct mail postcard featuring local Newberg, Oregon businesses, mailed to 5,000 households in the Newberg area on a monthly or bi-monthly schedule.",
  brand: {
    "@type": "Brand",
    name: "STC Marketing",
  },
  areaServed: {
    "@type": "City",
    name: "Newberg",
    containedInPlace: {
      "@type": "State",
      name: "Oregon",
    },
  },
  url: "https://stcmarketingco.com/the-spotlights/newberg",
};

export default function NewbergSpotlightPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow="Newberg, Oregon"
        title={
          <>
            The Newberg
            <span className="text-tan italic"> Spotlight.</span>
          </>
        }
        description="One oversized postcard. Local Newberg businesses. 5,000 households. The Newberg Spotlight connects the community to the best local businesses in town — delivered right to their mailbox."
      />

      {/* Real card photos */}
      <section className="bg-ink py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <span className="text-xs uppercase tracking-widest text-pine-light">
              April 2026 edition
            </span>
            <h2 className="font-display text-balance mt-4 text-3xl text-paper sm:text-4xl max-w-2xl">
              See the Newberg Spotlight in action.
            </h2>
          </Reveal>

          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            <Reveal>
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60">
                <Image
                  src="/images/spotlight-front.png"
                  alt="The Newberg Spotlight — front side, April 2026"
                  width={900}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <p className="mt-3 text-xs uppercase tracking-widest text-mist text-center">Front</p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60">
                <Image
                  src="/images/spotlight-back.png"
                  alt="The Newberg Spotlight — back side, April 2026"
                  width={900}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <p className="mt-3 text-xs uppercase tracking-widest text-mist text-center">Back</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why Newberg */}
      <section className="bg-charcoal py-24 lg:py-32 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <span className="text-xs uppercase tracking-widest text-pine-light">Why it works in Newberg</span>
            <h2 className="font-display text-balance mt-4 text-3xl text-paper sm:text-4xl">
              Newberg is a tight-knit community. The Spotlight fits right in.
            </h2>
            <p className="mt-5 text-fog leading-relaxed">
              Newberg residents support local. The Newberg Spotlight puts your
              business in front of 5,000 local households — homeowners who
              actually open their mail and care about who they hire.
            </p>
            <p className="mt-4 text-fog leading-relaxed">
              Every card features multiple local Newberg businesses, each with
              their own exclusive industry slot. No competing ads. Just your
              business, represented well, reaching the whole community.
            </p>
            <div className="mt-10 flex flex-wrap gap-10">
              {[
                ["5,000", "Newberg households"],
                ["9×12″", "Oversized format"],
                ["1 business", "Per industry"],
              ].map(([stat, label]) => (
                <div key={label}>
                  <div className="font-display text-3xl text-paper">{stat}</div>
                  <div className="text-xs uppercase tracking-widest text-mist mt-1">{label}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-4">
              {[
                { title: "Exclusive industry slot", body: "Only one dentist, one roofer, one landscaper — your category is yours alone on every Newberg Spotlight card." },
                { title: "Starts at $200", body: "Ad slots start at just $200 — that's $0.04 per household. Shared cost means premium reach at a fraction of a solo campaign." },
                { title: "Monthly or bi-monthly", body: "Regular drops keep your business top of mind with Newberg homeowners all year long." },
              ].map((item, i) => (
                <div key={i} className="rounded-xl border border-white/10 bg-ink p-6">
                  <h3 className="text-paper font-medium">{item.title}</h3>
                  <p className="mt-2 text-sm text-mist leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-24 lg:py-32 border-t border-white/5">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 text-center">
          <Reveal>
            <span className="text-xs uppercase tracking-widest text-pine-light">Get on the next card</span>
            <h2 className="font-display text-balance mt-4 text-3xl text-paper sm:text-4xl">
              Claim your industry slot on the Newberg Spotlight.
            </h2>
            <p className="mt-5 text-fog max-w-xl mx-auto leading-relaxed">
              Industry slots are exclusive — once your category is taken,
              it&apos;s taken. Reach out now to reserve your spot on the next
              Newberg Spotlight drop.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-pine-light px-8 py-3.5 text-sm uppercase tracking-wide text-ink transition-transform duration-300 hover:scale-[1.03] hover:bg-pine"
              >
                Claim My Slot
              </Link>
              <Link
                href="/the-spotlights"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-3.5 text-sm uppercase tracking-wide text-paper transition-colors duration-300 hover:border-pine-light hover:text-pine-light"
              >
                How It Works
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
