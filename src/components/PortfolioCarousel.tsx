"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

const SLIDES = [
  {
    src: "/images/spotlight-july-front.png",
    label: "The Newberg Spotlight - July Front",
    caption: "July 2026 · Newberg, OR · 5,000 households",
    href: "/the-spotlights",
  },
  {
    src: "/images/spotlight-july-back.png",
    label: "The Newberg Spotlight - July Back",
    caption: "July 2026 · Newberg, OR · featuring local businesses",
    href: "/the-spotlights",
  },
  {
    src: "/images/spotlight-front.png",
    label: "The Newberg Spotlight - April Front",
    caption: "April 2026 · Newberg, OR · 5,000 households",
    href: "/the-spotlights",
  },
  {
    src: "/images/spotlight-back.png",
    label: "The Newberg Spotlight - April Back",
    caption: "April 2026 · Newberg, OR · featuring local businesses",
    href: "/the-spotlights",
  },
  {
    src: "/images/corvo-spotlight.png",
    label: "The Corvo Spotlight - Card 1",
    caption: "Corvo, OR · Efficient Roofing · Country Financial",
    href: "/the-spotlights",
  },
  {
    src: "/images/website-zd-builders.png",
    label: "Z&D Builders",
    caption: "Roofing & Remodeling · Newberg, OR",
    href: "/website-design",
  },
  {
    src: "/images/website-valley-boys.png",
    label: "Valley Boy's Window & Gutter",
    caption: "Window & Gutter Cleaning · Newberg, OR",
    href: "/website-design",
  },
  {
    src: "/images/website-well-hung-gutters.png",
    label: "Well Hung Gutters",
    caption: "Gutter Installation & Maintenance · Corvallis, OR",
    href: "/website-design",
  },
];

type CardPos = "left" | "center" | "right" | "hidden";

const FAN: Record<CardPos, { rotate: number; scale: number; opacity: number; zIndex: number }> = {
  left:   { rotate: -20, scale: 0.78, opacity: 0.55, zIndex: 0 },
  center: { rotate:   0, scale: 1,    opacity: 1,    zIndex: 2 },
  right:  { rotate:  20, scale: 0.78, opacity: 0.55, zIndex: 0 },
  hidden: { rotate:   0, scale: 0.78, opacity: 0,    zIndex: -1 },
};

function getPos(i: number, active: number, total: number): CardPos {
  const diff = ((i - active) + total) % total;
  if (diff === 0) return "center";
  if (diff === 1) return "right";
  if (diff === total - 1) return "left";
  return "hidden";
}

export default function PortfolioCarousel() {
  const [active, setActive] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const n = SLIDES.length;

  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % n), 4000);
    return () => clearInterval(t);
  }, [n]);

  const go = (next: number) => setActive(((next % n) + n) % n);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 48) go(dx < 0 ? active + 1 : active - 1);
    touchStartX.current = null;
  };

  return (
    <section className="bg-charcoal py-24 lg:py-32 border-t border-white/5" style={{ overflow: "clip" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <span className="text-xs uppercase tracking-widest text-pine-light">Recent work</span>
          <h2 className="font-display text-balance mt-4 text-4xl text-paper sm:text-5xl max-w-2xl">
            Refined, considered, on-brand.
          </h2>
        </Reveal>

        {/* Fan */}
        <div
          className="mt-16 relative w-full"
          style={{ height: "clamp(190px, 57vw, 600px)" }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {SLIDES.map((slide, i) => {
            const pos = getPos(i, active, n);
            const cfg = FAN[pos];
            const isCenter = pos === "center";

            return (
              <motion.div
                key={i}
                animate={{ rotate: cfg.rotate, scale: cfg.scale, opacity: cfg.opacity }}
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: "50%",
                  x: "-50%",
                  width: "clamp(300px, 88vw, 960px)",
                  transformOrigin: "bottom center",
                  zIndex: cfg.zIndex,
                  cursor: !isCenter ? "pointer" : slide.href ? "pointer" : "default",
                }}
                transition={{ type: "spring", stiffness: 260, damping: 28 }}
                onClick={() => !isCenter && go(i)}
                className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/70"
              >
                <div className="relative bg-ink" style={{ aspectRatio: "16 / 9" }}>
                  {/* Invisible link overlay on center card */}
                  {isCenter && slide.href && (
                    <Link
                      href={slide.href}
                      className="absolute inset-0 z-10"
                      aria-label={`View ${slide.label}`}
                    />
                  )}

                  <Image
                    src={slide.src}
                    alt={slide.label}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 70vw"
                  />

                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/80 to-transparent px-4 py-3 pointer-events-none">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-pine-light leading-none">
                      {slide.label}{isCenter && slide.href ? " →" : ""}
                    </p>
                    <p className="text-[10px] text-mist mt-1 leading-none">
                      {slide.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-center items-center gap-4">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => go(active - 1)}
            className="cursor-pointer flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-paper hover:border-pine-light hover:text-pine-light transition-colors duration-200"
          >
            &larr;
          </button>

          <div className="flex items-center gap-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`View slide ${i + 1}`}
                onClick={() => go(i)}
                className={`cursor-pointer h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? "w-6 bg-pine-light" : "w-1.5 bg-white/20"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="Next slide"
            onClick={() => go(active + 1)}
            className="cursor-pointer flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-paper hover:border-pine-light hover:text-pine-light transition-colors duration-200"
          >
            &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
