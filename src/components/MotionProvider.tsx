"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/** Honors the OS "reduce motion" setting for every Framer Motion animation on the site. */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
