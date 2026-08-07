"use client";

import Link from "next/link";
import Image from "next/image";
import { useMotionValue, useSpring, useTransform, motion } from "framer-motion";
import type { PointerEvent } from "react";

export default function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const tiltX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 20 });
  const tiltY = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 20 });

  function onPointerMove(e: PointerEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }
  function onPointerLeave() { mx.set(0); my.set(0); }

  return (
    <section className="relative overflow-hidden bg-ink grain pt-32 pb-24 lg:pt-44 lg:pb-32">
      {/* ambient glow */}
      <div aria-hidden className="absolute -top-40 -left-32 h-[36rem] w-[36rem] rounded-full bg-pine/20 blur-3xl" />
      <div aria-hidden className="absolute -bottom-32 -right-20 h-[28rem] w-[28rem] rounded-full bg-pine-light/10 blur-3xl" />

      {/* faint grid */}
      <svg aria-hidden className="absolute inset-0 h-full w-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="56" height="56" patternUnits="userSpaceOnUse">
            <path d="M 56 0 L 0 0 0 56" fill="none" stroke="#a3a3aa" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Copy — constrained to left portion of container */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="lg:max-w-[42%]">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-balance text-5xl leading-[1.05] text-paper sm:text-6xl lg:text-7xl"
          >
            Marketing that
            <span className="text-tan italic"> works, </span>
            without the guesswork.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-lg text-fog leading-relaxed"
          >
            STC Marketing builds and manages custom websites for Oregon
            businesses. We also run The Spotlights — an oversized direct mail
            postcard that reaches 5,000 local households when you want to go
            offline.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-pine-light px-7 py-3.5 text-sm uppercase tracking-wide text-ink transition-transform duration-300 hover:scale-[1.03] hover:bg-pine"
            >
              Get a Quote
            </Link>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-3.5 text-sm uppercase tracking-wide text-paper transition-colors duration-300 hover:border-pine-light hover:text-pine-light"
            >
              Our Services
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-14 flex flex-wrap gap-10"
          >
            {[
              ["Custom websites", "Zero templates, ever"],
              ["5,000 households", "Per mailing drop"],
              ["Oregon built", "For Oregon businesses"],
            ].map(([stat, label]) => (
              <div key={label}>
                <div className="font-display text-2xl text-paper">{stat}</div>
                <div className="text-xs uppercase tracking-widest text-mist mt-1">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Hero image — absolutely positioned to right side of section, desktop only */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="hidden lg:flex absolute inset-y-0 right-0 lg:w-[46%] xl:w-[52%] items-center"
      >
        <div
          style={{ perspective: 1200 }}
          onPointerMove={onPointerMove}
          onPointerLeave={onPointerLeave}
          className="w-full px-8"
        >
          <motion.div style={{ rotateX: tiltX, rotateY: tiltY }}>
            <Image
              src="/images/hero-image.png"
              alt="Valley Boy's Window & Gutter website — designed by STC Marketing"
              width={4000}
              height={2250}
              className="w-full h-auto"
              sizes="(max-width: 1279px) 46vw, 52vw"
              priority
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
