"use client";

import Link from "next/link";
import { Fragment, type PointerEvent } from "react";
import { motion, type Variants } from "framer-motion";
import Stars from "./Stars";
import { SITE } from "@/lib/site";

const EASE = [0.22, 1, 0.36, 1] as const;

const HEADLINE: { text: string; accent?: boolean }[] = [
  { text: "Beautiful" },
  { text: "websites" },
  { text: "that" },
  { text: "actually", accent: true },
  { text: "work.", accent: true },
];

const headline: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const word: Variants = {
  hidden: { opacity: 0, y: "0.35em", filter: "blur(12px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: EASE },
  },
};

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16, filter: "blur(6px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.9, delay, ease: EASE },
});

export default function Hero() {
  function onPointerMove(e: PointerEvent<HTMLElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  }

  return (
    <section
      onPointerMove={onPointerMove}
      className="relative isolate overflow-hidden bg-ink grain"
    >
      {/* Ambient light */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="aurora-a absolute -top-[20%] left-[8%] h-[42rem] w-[42rem] rounded-full bg-pine/25 blur-3xl" />
        <div className="aurora-b absolute top-[5%] right-[2%] h-[36rem] w-[36rem] rounded-full bg-tan/10 blur-3xl" />
        <svg className="mask-radial absolute inset-0 h-full w-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="64" height="64" patternUnits="userSpaceOnUse">
              <path d="M 64 0 L 0 0 0 64" fill="none" stroke="#a3a3aa" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* Light that follows the cursor */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(640px circle at var(--mx, 50%) var(--my, 30%), rgba(201, 160, 106, 0.07), transparent 60%)",
        }}
      />

      <div className="mx-auto flex min-h-svh max-w-5xl flex-col items-center justify-center px-6 pt-32 pb-28 text-center lg:px-10">
        <motion.a
          {...fadeUp(0)}
          href={SITE.googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.03] py-1.5 pl-3.5 pr-4 backdrop-blur-sm transition-colors duration-300 hover:border-pine-light/50"
        >
          <Stars className="h-3.5 w-3.5" />
          <span className="text-xs text-fog transition-colors duration-300 group-hover:text-paper">
            {SITE.rating.value} on Google
          </span>
        </motion.a>

        <motion.h1
          variants={headline}
          initial="hidden"
          animate="show"
          className="font-display text-balance mt-8 text-5xl leading-[1.02] tracking-tight text-paper sm:text-6xl md:text-7xl lg:text-[5.5rem]"
        >
          {HEADLINE.map((w, i) => (
            <Fragment key={w.text}>
              <motion.span
                variants={word}
                className={`inline-block ${w.accent ? "text-tan italic" : ""}`}
              >
                {w.text}
              </motion.span>
              {i < HEADLINE.length - 1 && " "}
            </Fragment>
          ))}
        </motion.h1>

        <motion.p
          {...fadeUp(0.75)}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-fog sm:text-xl"
        >
          Custom design and development for businesses across the country.
          No templates, no shortcuts — fast, polished sites connected to the
          tools you run on, and looked after long after launch.
        </motion.p>

        <motion.div
          {...fadeUp(0.9)}
          className="mt-11 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-pine-light px-8 py-4 text-sm uppercase tracking-wide text-ink transition-[background-color,box-shadow] duration-300 hover:bg-[#7c9b83] hover:shadow-[0_0_48px_-10px_rgba(107,138,114,0.75)]"
          >
            <span
              aria-hidden
              className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
            />
            <span className="relative">Start your project</span>
            <span aria-hidden className="relative transition-transform duration-300 group-hover:translate-x-0.5">
              &rarr;
            </span>
          </Link>
          <a
            href="#work"
            className="inline-flex items-center rounded-full border border-white/15 px-8 py-4 text-sm uppercase tracking-wide text-paper transition-colors duration-300 hover:border-pine-light hover:text-pine-light"
          >
            See our work
          </a>
        </motion.div>

        <motion.p
          {...fadeUp(1.05)}
          className="mt-10 text-xs uppercase tracking-widest text-mist"
        >
          Based in Oregon &middot; Building for clients nationwide
        </motion.p>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        aria-hidden
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-mist sm:flex"
      >
        <span>Scroll</span>
        <span className="relative h-10 w-px overflow-hidden bg-white/10">
          <motion.span
            className="absolute inset-x-0 top-0 h-1/2 bg-pine-light"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </section>
  );
}
