import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section className="bg-ink py-24 lg:py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <span className="text-xs uppercase tracking-widest text-pine-light">Local results</span>
          <h2 className="font-display text-balance mt-4 text-4xl text-paper sm:text-5xl max-w-2xl">
            Oregon businesses, real results.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <Reveal key={i} delay={i * 0.1}>
              <figure className="h-full rounded-2xl border border-white/10 bg-charcoal p-8 flex flex-col items-center justify-center min-h-[180px]">
                <span className="text-xs uppercase tracking-widest text-mist">Testimonial coming soon</span>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
