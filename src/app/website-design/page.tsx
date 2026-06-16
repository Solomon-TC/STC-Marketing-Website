import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";

export const metadata: Metadata = {
  title: "Website Design | STC Marketing",
  description:
    "Custom, high-end website design for Oregon businesses — fast, mobile-first, and built to turn visitors into customers.",
};

const PROCESS = [
  {
    n: "01",
    title: "Discovery",
    description:
      "We learn your business, your customers, and what a win looks like before we design a single pixel.",
  },
  {
    n: "02",
    title: "Design",
    description:
      "A custom visual direction built around your brand — never a recycled template.",
  },
  {
    n: "03",
    title: "Build",
    description:
      "A fast, responsive site built with modern tools, tested across devices before it ever goes live.",
  },
  {
    n: "04",
    title: "Launch & grow",
    description:
      "We launch, connect it to your Spotlights mailer, and help you keep improving from there.",
  },
];

const INCLUDES = [
  "Custom design — no templates",
  "Mobile-first, responsive layouts",
  "Sub-2 second load times",
  "On-page SEO & real meta tags",
  "Accessible, semantic markup",
  "Ongoing support after launch",
];

export default function WebsiteDesignPage() {
  return (
    <>
      <PageHero
        eyebrow="Secondary Service"
        title={
          <>
            Websites built to
            <span className="text-tan italic"> convert attention.</span>
          </>
        }
        description="A high-end, modern website turns the attention your Spotlights mailer creates into booked calls and walk-in customers."
      />

      <section className="bg-ink px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <PhotoPlaceholder
              label="Project showcase coming soon"
              className="aspect-[16/9] w-full rounded-2xl border border-white/10"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-ink py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16">
          <Reveal>
            <span className="text-xs uppercase tracking-widest text-pine-light">
              Why it matters
            </span>
            <h2 className="font-display text-balance mt-4 text-3xl text-paper sm:text-4xl">
              Your mailer earns the click. Your site has to earn the sale.
            </h2>
            <p className="mt-5 text-fog leading-relaxed">
              A Spotlight gets someone curious enough to scan a code or
              search your name. What happens next decides whether that
              curiosity turns into a customer — and a generic, slow, or
              outdated website loses that moment instantly.
            </p>
            <p className="mt-4 text-fog leading-relaxed">
              We design and build sites with the same care as the mailer
              itself: a clear point of view, real typography, and layouts
              that feel considered on every device.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-white/10 bg-charcoal p-10">
              <h3 className="text-xs uppercase tracking-widest text-pine-light">
                Every build includes
              </h3>
              <ul className="mt-6 space-y-4">
                {INCLUDES.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-paper">
                    <span className="h-1.5 w-1.5 rounded-full bg-pine-light" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-charcoal py-24 lg:py-32 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <span className="text-xs uppercase tracking-widest text-pine-light">Process</span>
            <h2 className="font-display text-balance mt-4 text-3xl text-paper sm:text-4xl max-w-2xl">
              How we build your site.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.1}>
                <span className="font-display text-5xl text-white/10">{step.n}</span>
                <h3 className="mt-4 text-lg text-paper">{step.title}</h3>
                <p className="mt-2 text-sm text-mist leading-relaxed">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
