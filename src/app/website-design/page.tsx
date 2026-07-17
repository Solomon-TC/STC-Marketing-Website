import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import ProjectCarousel from "@/components/ProjectCarousel";

export const metadata: Metadata = {
  title: "Websites | STC Marketing",
  description:
    "Custom, high-end websites for local businesses — designed, built, hosted, and managed by STC Marketing so you can focus on running your business.",
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
    title: "Manage and support",
    description:
      "We handle hosting, updates, security, and ongoing support after launch so you never have to think about it.",
  },
];

const INCLUDES = [
  "Custom design — no templates",
  "Mobile-first, responsive layouts",
  "Fast load times",
  "On-page SEO and real meta tags",
  "Hosting and domain management",
  "Security and software updates",
  "Ongoing support and peace of mind",
];

export default function WebsiteDesignPage() {
  return (
    <>
      <PageHero
        title={
          <>
            Websites built to
            <span className="text-tan italic"> convert attention.</span>
          </>
        }
        description="A high-end, modern website that looks great and keeps working long after launch. We design, build, host, and manage everything so you can focus on your business."
      />

      <ProjectCarousel />

      <section className="bg-ink py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16">
          <Reveal>
            <span className="text-xs uppercase tracking-widest text-pine-light">
              Why it matters
            </span>
            <h2 className="font-display text-balance mt-4 text-3xl text-paper sm:text-4xl">
              Your website should work as hard as you do.
            </h2>
            <p className="mt-5 text-fog leading-relaxed">
              Most small business websites are slow, outdated, or built on
              a template that looks like everyone else. When someone looks
              you up, that first impression decides whether they call or
              keep scrolling.
            </p>
            <p className="mt-4 text-fog leading-relaxed">
              We build sites that look the part and stay that way. After
              launch we handle hosting, security, and updates so your site
              stays fast, secure, and current without you having to lift
              a finger.
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
