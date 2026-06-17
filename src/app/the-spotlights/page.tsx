import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "The Spotlights | STC Marketing",
  description:
    "The Spotlights is a shared 9×12\" postcard featuring multiple local businesses, mailed to 5,000 households per city. One business per industry — your slot, exclusively yours.",
};

const FEATURES = [
  {
    title: "Shared postcard, shared cost",
    description:
      "Multiple local businesses share one oversized card — so each business gets premium direct mail exposure at a fraction of what a solo campaign would cost. Ad slots start at just $200, which works out to only $0.04 per household.",
  },
  {
    title: "One business per industry",
    description:
      "We only allow one business per industry on every card. If you're the plumber, you're the only plumber. No competing for attention with a rival across the fold.",
  },
  {
    title: "5,000 households per drop",
    description:
      "Every Spotlights card reaches 5,000 local households in the target city — real homeowners in your service area, not random impressions.",
  },
  {
    title: "Monthly or bi-monthly cadence",
    description:
      "Consistency builds familiarity. We run drops on a regular schedule so your business stays in front of the same neighborhoods over time.",
  },
  {
    title: "Ad slots sized to your goals",
    description:
      "Choose the slot size that fits your budget and your message — from a compact presence to a headline-grabbing feature spot on the card.",
  },
  {
    title: "Oversized 9×12″ format",
    description:
      "Nearly double the size of a standard postcard. It's the first thing people pull out of the mailbox, and the last thing they toss without reading.",
  },
];

const SPECS = [
  ["Card size", "9″ × 12″ (oversized)"],
  ["Households reached", "5,000 per city per drop"],
  ["Businesses per card", "Multiple — curated local businesses"],
  ["Industry exclusivity", "One business per industry, per card"],
  ["Drop frequency", "Monthly or bi-monthly"],
  ["Ad slot options", "Multiple sizes available — ask for a media kit"],
];

const HOW = [
  {
    n: "01",
    title: "We pick a city",
    body: "Each Spotlights card is built around one city or area. We identify the right 5,000 households and plan the drop schedule.",
  },
  {
    n: "02",
    title: "Businesses claim their slot",
    body: "Local businesses buy an ad slot — sized to their goals. Once your industry is taken, it's taken. First come, first featured.",
  },
  {
    n: "03",
    title: "We design the whole card",
    body: "Our team designs every ad and lays out the full postcard. One cohesive piece that looks premium from corner to corner.",
  },
  {
    n: "04",
    title: "5,000 households get it",
    body: "The card goes out on schedule — monthly or bi-monthly — keeping every business on it top of mind with local homeowners.",
  },
];

export default function SpotlightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Core Service"
        title={
          <>
            Your business. 5,000 households.
            <span className="text-tan italic"> Zero competition.</span>
          </>
        }
        description="The Spotlights is a shared 9×12″ postcard featuring multiple local businesses — each with their own exclusive industry slot — mailed to 5,000 households per city on a monthly or bi-monthly schedule."
      />

      {/* How it works */}
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
                  src="/images/spotlight-front.png"
                  alt="The Newberg Spotlight — front"
                  width={900}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <div className="relative w-full rounded-2xl border border-white/10 overflow-hidden shadow-xl shadow-black/40">
                <Image
                  src="/images/spotlight-back.png"
                  alt="The Newberg Spotlight — back"
                  width={900}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-center text-xs uppercase tracking-widest text-mist">
                The Newberg Spotlight · April 2026
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
              Everything in one drop.
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
              Claim Your Industry Slot
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
