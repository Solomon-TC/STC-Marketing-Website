import Link from "next/link";
import type { ReactNode } from "react";
import Reveal from "./Reveal";

export default function CtaBanner({
  heading = (
    <>
      Let&apos;s build something
      <span className="text-tan italic"> exceptional.</span>
    </>
  ),
  subtext = "Tell us about your business and where you want to take it. We'll get back to you within one business day with a plan and a straight number.",
  buttonLabel = "Start your project",
}: {
  heading?: ReactNode;
  /** Pass null to omit the supporting line. */
  subtext?: ReactNode | null;
  buttonLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-charcoal grain py-24 lg:py-32 border-t border-white/5">
      <div
        aria-hidden
        className="aurora-a absolute -top-24 right-[5%] h-80 w-80 rounded-full bg-pine/25 blur-3xl"
      />
      <div
        aria-hidden
        className="aurora-b absolute -bottom-24 left-[5%] h-80 w-80 rounded-full bg-tan/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-4xl px-6 lg:px-10 text-center">
        <Reveal>
          <h2 className="font-display text-balance text-4xl text-paper sm:text-6xl">
            {heading}
          </h2>
          {subtext && (
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-fog">{subtext}</p>
          )}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-pine-light px-8 py-4 text-sm uppercase tracking-wide text-ink transition-[background-color,box-shadow] duration-300 hover:bg-[#7c9b83] hover:shadow-[0_0_48px_-10px_rgba(107,138,114,0.75)]"
            >
              <span
                aria-hidden
                className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
              />
              <span className="relative">{buttonLabel}</span>
              <span aria-hidden className="relative transition-transform duration-300 group-hover:translate-x-0.5">
                &rarr;
              </span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
