import Link from "next/link";
import Reveal from "./Reveal";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-charcoal grain py-20 lg:py-28 border-t border-white/5">
      <div
        aria-hidden
        className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-pine/25 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-tan/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-4xl px-6 lg:px-10 text-center">
        <Reveal>
          <h2 className="font-display text-balance text-4xl text-paper sm:text-5xl">
            Are you ready to take your business to the next level?
          </h2>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-pine-light px-8 py-3.5 text-sm uppercase tracking-wide text-ink transition-transform duration-300 hover:scale-[1.03] hover:bg-pine"
            >
              Get in touch
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
