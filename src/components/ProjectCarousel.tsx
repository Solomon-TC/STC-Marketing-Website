"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

type Project = {
  src: string;
  label: string;
  caption: string;
};

const PROJECTS: Project[] = [
  {
    src: "/videos/zd-builders-demo.mp4",
    label: "Z&D Builders",
    caption: "Roofing & Remodeling · Newberg, OR",
  },
];

export default function ProjectCarousel() {
  const [index, setIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const go = useCallback((next: number) => {
    setIndex(next);
  }, []);

  function handleEnded() {
    go((index + 1) % PROJECTS.length);
  }

  const project = PROJECTS[index];

  return (
    <section className="bg-ink px-6 lg:px-10 pb-2">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="relative w-full rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-black/60">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full"
              >
                <video
                  ref={videoRef}
                  src={project.src}
                  autoPlay
                  muted
                  playsInline
                  onEnded={handleEnded}
                  className="w-full h-auto"
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/80 to-transparent px-5 py-4 flex items-end justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-pine-light">
                  {project.label}
                </p>
                <p className="text-[10px] text-mist mt-0.5">{project.caption}</p>
              </div>
              {PROJECTS.length > 1 && (
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    aria-label="Previous project"
                    onClick={() => go((index - 1 + PROJECTS.length) % PROJECTS.length)}
                    className="cursor-pointer flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-paper text-xs hover:border-pine-light hover:text-pine-light transition-colors"
                  >
                    &larr;
                  </button>
                  <button
                    type="button"
                    aria-label="Next project"
                    onClick={() => go((index + 1) % PROJECTS.length)}
                    className="cursor-pointer flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-paper text-xs hover:border-pine-light hover:text-pine-light transition-colors"
                  >
                    &rarr;
                  </button>
                </div>
              )}
            </div>
          </div>

          {PROJECTS.length > 1 && (
            <div className="mt-4 flex justify-center gap-2">
              {PROJECTS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to project ${i + 1}`}
                  onClick={() => go(i)}
                  className={`cursor-pointer h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? "w-6 bg-pine-light" : "w-1.5 bg-white/20"
                  }`}
                />
              ))}
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
