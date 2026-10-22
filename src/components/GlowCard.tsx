"use client";

import type { PointerEvent, ReactNode } from "react";

/**
 * Card with a soft light that follows the cursor. Position is written straight
 * to CSS variables, so moving the pointer never triggers a React re-render.
 */
export default function GlowCard({
  children,
  className = "",
  featured = false,
}: {
  children: ReactNode;
  className?: string;
  featured?: boolean;
}) {
  function onPointerMove(e: PointerEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
  }

  return (
    <div
      onPointerMove={onPointerMove}
      className={`group/glow relative h-full overflow-hidden rounded-2xl border bg-charcoal transition-[border-color,transform] duration-500 hover:-translate-y-0.5 hover:border-white/20 ${
        featured ? "border-pine-light/25" : "border-white/10"
      } ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px z-0 opacity-0 transition-opacity duration-500 group-hover/glow:opacity-100"
        style={{
          background:
            "radial-gradient(480px circle at var(--x, 50%) var(--y, 50%), rgba(107, 138, 114, 0.16), transparent 60%)",
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
