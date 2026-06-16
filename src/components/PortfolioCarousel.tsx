"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Reveal from "./Reveal";
import PhotoPlaceholder from "./PhotoPlaceholder";

type Slide = {
  type: "image" | "photo";
  label: string;
  caption?: string;
  src?: string;
};

const SLIDES: Slide[] = [
  {
    type: "image",
    label: "The Newberg Spotlight — Front",
    caption: "April 2026 · Newberg, OR · 5,000 households",
    src: "/images/spotlight-front.png",
  },
  {
    type: "image",
    label: "The Newberg Spotlight — Back",
    caption: "April 2026 · Newberg, OR · featuring local businesses",
    src: "/images/spotlight-back.png",
  },
  {
    type: "photo",
    label: "More work coming soon",
  },
];

export default function PortfolioCarousel() {
  const [index, setIndex] = useState(0);

  function go(delta: number) {
    setIndex((i) => (i + delta + SLIDES.length) % SLIDES.length);
  }

  const slide = SLIDES[index];

  return (
    <section className="bg-charcoal py-24 lg:py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <Reveal>
            <span className="text-xs uppercase tracking-widest text-pine-light">
              Recent work
            </span>
            <h2 className="font-display text-balance mt-4 text-4xl text-paper sm:text-5xl max-w-2xl">
              Refined, considered, on-brand.
            </h2>
          </Reveal>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => go(-1)}
              className="cursor-pointer flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-paper transition-colors hover:border-pine-light hover:text-pine-light"
            >
              &larr;
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => go(1)}
              className="cursor-pointer flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-paper transition-colors hover:border-pine-light hover:text-pine-light"
            >
              &rarr;
            </button>
          </div>
        </div>

        <div className="mt-12 relative aspect-[16/10] sm:aspect-[16/8] w-full overflow-hidden rounded-2xl border border-white/10">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              {slide.type === "photo" ? (
                <PhotoPlaceholder label={slide.label} className="h-full w-full" />
              ) : (
                <div className="relative h-full w-full">
                  <Image
                    src={slide.src!}
                    alt={slide.label}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 80vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/80 to-transparent px-6 py-4">
                    <p className="text-xs uppercase tracking-widest text-pine-light">{slide.label}</p>
                    {slide.caption && (
                      <p className="text-[11px] text-mist mt-0.5">{slide.caption}</p>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {SLIDES.map((s, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`cursor-pointer h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-pine-light" : "w-1.5 bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
