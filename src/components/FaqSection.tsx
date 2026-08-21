import Reveal from "./Reveal";

export default function FaqSection({
  faqs,
  eyebrow = "Questions",
  heading = "Straight answers.",
}: {
  faqs: { q: string; a: string }[];
  eyebrow?: string;
  heading?: string;
}) {
  return (
    <section className="bg-charcoal py-24 lg:py-32 border-t border-white/5">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <Reveal>
          <span className="text-xs uppercase tracking-widest text-pine-light">{eyebrow}</span>
          <h2 className="font-display text-balance mt-4 text-3xl text-paper sm:text-4xl">
            {heading}
          </h2>
        </Reveal>

        <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={Math.min(i * 0.05, 0.3)}>
              <details className="group py-5">
                <summary className="flex cursor-pointer items-center justify-between gap-6 text-paper marker:content-['']">
                  <h3 className="text-base leading-snug">{faq.q}</h3>
                  <span
                    aria-hidden
                    className="shrink-0 text-pine-light transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 pr-10 text-fog leading-relaxed">{faq.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
