import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";

export const metadata: Metadata = {
  title: "About | STC Marketing",
  description:
    "STC Marketing is an Oregon-based advertising company helping local businesses grow with direct mail and modern websites.",
};

const VALUES = [
  {
    title: "Local-first",
    description:
      "We're an Oregon company built for Oregon businesses — we understand the neighborhoods we mail into.",
  },
  {
    title: "No templates",
    description:
      "Every Spotlight and every website is designed from scratch around your business, not pulled from a stock library.",
  },
  {
    title: "Results you can see",
    description:
      "From scan codes to call tracking, we make sure you can measure what your marketing is actually doing.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={
          <>
            Built in Oregon, for
            <span className="text-tan italic"> Oregon businesses.</span>
          </>
        }
        description="STC Marketing combines old-school direct mail with modern web design to help local businesses get found and get chosen."
      />

      <section className="bg-ink py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 grid lg:grid-cols-[1.1fr_1fr] gap-14 items-center">
          <Reveal>
            <span className="text-xs uppercase tracking-widest text-pine-light">Our story</span>
            <h2 className="font-display text-balance mt-4 text-3xl text-paper sm:text-4xl">
              Marketing that respects the customer&apos;s mailbox &mdash; and your budget.
            </h2>
            <div className="mt-6 space-y-5 text-fog leading-relaxed">
              <p>
                STC Marketing started with a simple observation: most local
                advertising is either ignored online or thrown away in the
                mailbox. We set out to build something that couldn&apos;t be
                ignored &mdash; The Spotlights, an oversized postcard sized
                and designed to earn a second look.
              </p>
              <p>
                As more of our clients asked us to help with their websites
                too, we expanded into web design &mdash; applying the same
                standard of craft to the page someone lands on after they
                scan that postcard. Today we help Oregon businesses show up
                consistently, in the mailbox and online.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <PhotoPlaceholder
              label="Team photo coming soon"
              className="aspect-[4/5] w-full rounded-2xl border border-white/10"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-charcoal py-24 lg:py-32 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <span className="text-xs uppercase tracking-widest text-pine-light">What we believe</span>
            <h2 className="font-display text-balance mt-4 text-3xl text-paper sm:text-4xl max-w-2xl">
              The principles behind every project.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-white/10 bg-ink p-8 h-full">
                  <h3 className="text-paper text-lg">{v.title}</h3>
                  <p className="mt-3 text-sm text-mist leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
