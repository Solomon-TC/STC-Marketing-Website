import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "The Spotlights | STC Marketing",
  description:
    "The Spotlights is a shared 9x12\" postcard featuring multiple local businesses, mailed to 5,000 households per city. One business per industry — your slot, exclusively yours.",
};

const FEATURES = [
  {
    title: "Shared postcard, shared cost",
    description:
      "Multiple local businesses share one oversized card so each business gets premium direct mail exposure at a fraction of what a solo campaign would cost.",
  },
  {
    title: "One business per industry",
    description:
      "We only allow one business per industry on every card. If you're the plumber, you're the only plumber. No competing for attention with a rival across the fold.",
  },
  {
    title: "5,000 households per mailer",
    description:
      "Every Spotlights card reaches 5,000 local households in the target city — real homeowners in your service area, not random impressions.",
  },
  {
    title: "Monthly or bi-monthly releases",
    description:
      "Consistency builds familiarity. We release on a regular schedule so your business stays in front of the same neighborhoods over time.",
  },
  {
    title: "Complimentary ad design",
    description:
      "We design your ad for you at no extra cost. Every slot on the card is professionally designed to look cohesive, polished, and on-brand.",
  },
  {
    title: "Top-quality businesses only",
    description:
      "We are selective about who we feature. The Spotlights is reserved for businesses with near-5-star reputations — because every name on the card reflects on all the others.",
  },
  {
    title: "Oversized 9x12\" format",
    description:
      "Nearly double the size of a standard postcard. It's the first thing people pull out of the mailbox, and the last thing they toss without reading.",
  },
];

const SPECS = [
  ["Card size", "9\" x 12\" (oversized)"],
  ["Households reached", "5,000 per city per mailer"],
  ["Businesses per card", "Multiple — curated local businesses"],
  ["Industry exclusivity", "One business per industry, per card"],
  ["Release frequency", "Monthly or bi-monthly"],
  ["Ad slot options", "Multiple sizes available — reach out to learn more"],
  ["Ad design", "Complimentary — included with every slot"],
];

const HOW = [
  {
    n: "01",
    title: "We pick a city",
    body: "Each Spotlight is built around one city or area. We identify the right 5,000 households and plan the release schedule.",
  },
  {
    n: "02",
    title: "We fill the slots with top quality local businesses",
    body: "Local businesses reach out to see if their industry is available. We only accept near-5-star businesses. Once your category is taken, it's taken.",
  },
  {
    n: "03",
    title: "We design every ad — at no extra cost",
    body: "Our team designs each business's ad and lays out the full postcard. Complimentary design is included with every slot. One cohesive, premium piece from corner to corner.",
  },
  {
    n: "04",
    title: "5,000 households receive it",
    body: "The Spotlight goes out on schedule — monthly or bi-monthly — keeping every business top of mind with local homeowners.",
  },
];

export default function SpotlightsPage() {
  return (
    <>
      <PageHero
        title={
          <>
            Your business. 5,000 households.
            <span className="text-tan italic"> Zero competition.</span>
          </>
        }
        description={"The Spotlights is a shared 9x12 postcard featuring multiple local businesses, each with their own exclusive industry slot, mailed to 5,000 households per city on a monthly or bi-monthly schedule."}
      />

      {/* Newberg callout */}
      <section className="bg-charcoal py-14 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <Reveal>
            <span className="text-xs uppercase tracking-widest text-pine-light">Now serving</span>
            <p className="font-display mt-2 text-2xl text-paper">
              The Newberg Spotlight is live — see the July 2026 card.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/the-spotlights/newberg"
              className="shrink-0 inline-flex items-center justify-center rounded-full border border-pine-light/60 px-6 py-3 text-sm uppercase tracking-wide text-pine-light hover:bg-pine-light hover:text-ink transition-colors duration-300"
            >
              View the Newberg Spotlight →
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <span className="text-xs uppercase tracking-widest text-pine-light">How it works</span>
            <h2 className="font-display text-balance mt-4 text-4xl text-paper sm:text-5xl max-w-2xl">
              A smarter way to share the cost of direct mail.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {HOW.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.1}>
                <div className="relative pl-2">
                  <span className="font-display text-5xl text-white/10">{step.n}</span>
                  <h3 className="mt-4 text-lg text-paper">{step.title}</h3>
                  <p className="mt-2 text-sm text-mist leading-relaxed">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features + mockup */}
      <section className="bg-charcoal py-24 lg:py-32 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-start">
          <Reveal>
            <div className="space-y-4">
              <div className="relative w-full rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-black/60">
                <Image
                  src="/images/spotlight-july-front.png"
                  alt="The Newberg Spotlight - July 2026 front"
                  width={900}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <div className="relative w-full rounded-2xl border border-white/10 overflow-hidden shadow-xl shadow-black/40">
                <Image
                  src="/images/spotlight-july-back.png"
                  alt="The Newberg Spotlight - July 2026 back"
                  width={900}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-center text-xs uppercase tracking-widest text-mist">
                The Newberg Spotlight · July 2026
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="text-xs uppercase tracking-widest text-pine-light">What you get</span>
            <h2 className="font-display text-balance mt-4 text-3xl text-paper sm:text-4xl">
              Premium reach. Exclusive positioning. Shared cost.
            </h2>
            <div className="mt-10 grid gap-6">
              {FEATURES.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-pine-light" />
                  <div>
                    <h3 className="text-paper">{f.title}</h3>
                    <p className="mt-1 text-sm text-mist leading-relaxed">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Specs */}
      <section className="bg-ink py-24 lg:py-32 border-t border-white/5">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <Reveal>
            <span className="text-xs uppercase tracking-widest text-pine-light">The details</span>
            <h2 className="font-display text-balance mt-4 text-3xl text-paper sm:text-4xl">
              Everything in one Spotlight.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <dl className="mt-12 divide-y divide-white/10 border-t border-white/10">
              {SPECS.map(([label, value]) => (
                <div key={label} className="grid grid-cols-1 sm:grid-cols-3 gap-2 py-5">
                  <dt className="text-sm uppercase tracking-wide text-mist">{label}</dt>
                  <dd className="sm:col-span-2 text-paper">{value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={0.15} className="mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-pine-light px-8 py-3.5 text-sm uppercase tracking-wide text-ink transition-transform duration-300 hover:scale-[1.03] hover:bg-pine"
            >
              Request an Inquiry
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
