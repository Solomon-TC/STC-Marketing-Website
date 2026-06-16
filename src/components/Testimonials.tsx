import Reveal from "./Reveal";

const TESTIMONIALS = [
  {
    quote:
      "We got more calls in the first two weeks after our Spotlight mailer than the entire previous quarter. People literally walked in holding the postcard.",
    name: "J. Harmon",
    role: "Owner, local electrical contractor",
  },
  {
    quote:
      "STC redesigned our site and rebuilt our mailer at the same time. The two finally feel like the same business — clean, modern, and trustworthy.",
    name: "S. Vance",
    role: "Local real estate agent",
  },
  {
    quote:
      "Direct mail felt old-school until we saw the size of this postcard. It doesn't get lost in a stack of junk mail — it gets a spot on the fridge.",
    name: "M. Delgado",
    role: "Owner, home services company",
  },
];

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
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <figure className="h-full rounded-2xl border border-white/10 bg-charcoal p-8 flex flex-col justify-between">
                <blockquote className="text-paper leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 text-sm text-mist">
                  <span className="text-pine-light">{t.name}</span> &middot; {t.role}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
