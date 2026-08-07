"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

type Project = {
  src: string;
  label: string;
  caption: string;
  href?: string;
};

const PROJECTS: Project[] = [
  {
    src: "/videos/vd1-zd-builders.mp4",
    label: "Z&D Builders",
    caption: "Roofing & Remodeling · Newberg, OR",
    href: "https://www.zanddbuilders.com",
  },
  {
    src: "/videos/vbw-demo.mp4",
    label: "Valley Boy's Window & Gutter",
    caption: "Window & Gutter Cleaning · Newberg, OR",
    href: "https://www.valleyboyswindows.com",
  },
  {
    src: "/videos/whg-demo.mp4",
    label: "Well Hung Gutters",
    caption: "Gutter Installation & Maintenance · Corvallis, OR",
  },
];

type CardPos = "left" | "center" | "right";

const FAN: Record<CardPos, { rotate: number; scale: number; opacity: number; zIndex: number }> = {
  left:   { rotate: -20, scale: 0.78, opacity: 0.55, zIndex: 0 },
  center: { rotate:   0, scale: 1,    opacity: 1,    zIndex: 2 },
  right:  { rotate:  20, scale: 0.78, opacity: 0.55, zIndex: 0 },
};

function getPos(i: number, active: number, total: number): CardPos {
  const diff = ((i - active) + total) % total;
  if (diff === 0) return "center";
  if (diff === 1) return "right";
  return "left";
}

export default function ProjectCarousel() {
  const [active, setActive] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const touchStartX = useRef<number | null>(null);
  const n = PROJECTS.length;

  const go = (next: number) => {
    const idx = ((next % n) + n) % n;
    setActive(idx);
    videoRefs.current.forEach((vid, i) => {
      if (!vid) return;
      if (i === idx) {
        vid.preload = "auto";
        vid.currentTime = 0;
        vid.play().catch((err) => console.warn("Video play failed:", err));
      } else {
        vid.pause();
        vid.currentTime = 0;
      }
    });
  };

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
    <section className="bg-ink pt-16 pb-10 px-6 lg:px-10" style={{ overflow: "clip" }}>
      <div className="mx-auto max-w-5xl">

        {/* Section heading */}
        <div className="mb-10 text-center">
          <span className="text-xs uppercase tracking-widest text-pine-light">Recent builds</span>
          <h2 className="font-display mt-2 text-3xl text-paper sm:text-4xl">See the work.</h2>
        </div>

        {/* Fan */}
        <div
          className="relative w-full"
          style={{ height: "clamp(190px, 57vw, 600px)" }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {PROJECTS.map((project, i) => {
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
                  cursor: isCenter ? "default" : "pointer",
                }}
                transition={{ type: "spring", stiffness: 260, damping: 28 }}
                onClick={() => !isCenter && go(i)}
                className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/70"
              >
                {/* Video — object-contain so nothing is cropped */}
                <div className="relative bg-black" style={{ aspectRatio: "16 / 9" }}>
                  <video
                    ref={(el) => { videoRefs.current[i] = el; }}
                    src={project.src}
                    muted
                    playsInline
                    loop
                    autoPlay={i === 0}
                    preload={i === 0 ? "auto" : "none"}
                    className="w-full h-full object-contain block"
                  />

                  {/* Label — clickable link on center card when href present */}
                  {isCenter && project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="group absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/85 to-transparent px-4 py-3 hover:from-ink/95 transition-colors duration-200"
                    >
                      <p className="text-[10px] uppercase tracking-[0.22em] text-pine-light leading-none group-hover:text-pine transition-colors duration-200">
                        {project.label} ↗
                      </p>
                      <p className="text-[10px] text-mist mt-1 leading-none">
                        {project.caption}
                      </p>
                    </a>
                  ) : (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/80 to-transparent px-4 py-3 pointer-events-none">
                      <p className="text-[10px] uppercase tracking-[0.22em] text-pine-light leading-none">
                        {project.label}
                      </p>
                      <p className="text-[10px] text-mist mt-1 leading-none">
                        {project.caption}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-center items-center gap-4">
          <button
            type="button"
            aria-label="Previous project"
            onClick={() => go(active - 1)}
            className="cursor-pointer flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-paper hover:border-pine-light hover:text-pine-light transition-colors duration-200"
          >
            &larr;
          </button>

          <div className="flex items-center gap-2">
            {PROJECTS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => go(i)}
                aria-label={`View project ${i + 1}`}
                className={`cursor-pointer h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? "w-6 bg-pine-light" : "w-1.5 bg-white/20"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="Next project"
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
