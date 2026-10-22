"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "Discovery",
    body: "We learn your business, your customers, and what a win looks like before we design a single pixel.",
  },
  {
    n: "02",
    title: "Design",
    body: "A custom visual direction built around your brand — never a recycled template.",
  },
  {
    n: "03",
    title: "Build",
    body: "Fast, responsive, and wired into your tools. Tested across devices before it ever goes live.",
  },
  {
    n: "04",
    title: "Launch & manage",
    body: "We handle hosting, updates, security, and support after launch, so your site stays fast and current.",
  },
];

export default function ProcessSteps({ tone = "charcoal" }: { tone?: "ink" | "charcoal" }) {
  return (
    <section className={`${tone === "ink" ? "bg-ink" : "bg-charcoal"} border-t border-white/5 py-24 lg:py-32`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <span className="text-xs uppercase tracking-widest text-pine-light">Process</span>
          <h2 className="font-display text-balance mt-4 max-w-2xl text-4xl text-paper sm:text-5xl">
            From first call to launch day, and beyond.
          </h2>
        </Reveal>

        <div className="relative mt-20">
          {/* Line that draws across the steps on desktop */}
          <div aria-hidden className="absolute left-0 right-0 top-[1.15rem] hidden h-px bg-white/10 lg:block">
            <motion.div
              className="h-full origin-left bg-linear-to-r from-pine-light via-tan/70 to-pine-light/0"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          <ol className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {STEPS.map((step, i) => (
              <li key={step.n} className="relative">
                <Reveal delay={0.15 + i * 0.12}>
                  <span
                    className={`relative z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-pine-light/40 font-display text-sm text-paper ${
                      tone === "ink" ? "bg-ink" : "bg-charcoal"
                    }`}
                  >
                    {step.n}
                  </span>
                  <h3 className="mt-6 text-xl text-paper">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-fog">{step.body}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
