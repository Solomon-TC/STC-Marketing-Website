"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { PointerEvent } from "react";

export default function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), {
    stiffness: 150,
    damping: 20,
  });

  function handlePointerMove(e: PointerEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handlePointerLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <section className="relative overflow-hidden bg-ink grain pt-32 pb-24 lg:pt-44 lg:pb-32">
      {/* ambient glow */}
      <div
        aria-hidden
        className="absolute -top-40 -left-32 h-[36rem] w-[36rem] rounded-full bg-pine/20 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -right-20 h-[28rem] w-[28rem] rounded-full bg-pine-light/10 blur-3xl"
      />

      {/* faint route grid */}
      <svg
        aria-hidden
        className="absolute inset-0 h-full w-full opacity-[0.06]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="56" height="56" patternUnits="userSpaceOnUse">
            <path d="M 56 0 L 0 0 0 56" fill="none" stroke="#a3a3aa" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
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
            className="mt-6 max-w-lg text-lg text-fog leading-relaxed"
          >
            STC Marketing creates direct mail campaigns and high-end websites
            built to get your business noticed, remembered, and chosen. Not
            just seen.
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
              ["Direct Mail", "That gets opened"],
              ["Websites", "Built to convert"],
              ["Real Results", "For local businesses"],
            ].map(([stat, label]) => (
              <div key={label}>
                <div className="font-display text-2xl text-paper">{stat}</div>
                <div className="text-xs uppercase tracking-widest text-mist mt-1">
                  {label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* postcard mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
          style={{ perspective: 1200 }}
          className="relative mx-auto w-full max-w-md"
        >
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative"
          >
            {/* back card */}
            <div className="absolute -right-6 -top-6 h-full w-full rounded-2xl border border-white/10 bg-graphite" />
            {/* main postcard — real Spotlight photo */}
            <div className="relative aspect-[4/3] w-full rounded-2xl border border-white/10 shadow-2xl shadow-black/60 overflow-hidden">
              <Image
                src="/images/spotlight-front.png"
                alt="The Newberg Spotlight postcard — front"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {/* subtle label overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/70 to-transparent px-5 py-4">
                <span className="text-[10px] uppercase tracking-[0.25em] text-pine-light">
                  The Newberg Spotlight · April 2026
                </span>
              </div>
            </div>

            {/* floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="absolute -bottom-6 -left-6 rounded-xl border border-white/10 bg-ink/90 backdrop-blur px-5 py-4 shadow-xl"
            >
              <div className="text-2xl font-display text-paper">5,000</div>
              <div className="text-[10px] uppercase tracking-widest text-mist">
                Households per drop
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
