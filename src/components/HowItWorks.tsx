import Reveal from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "We pick a city",
    description:
      "Each Spotlights card is built around a single city or area. We identify the right neighborhoods and select the 5,000 households that will receive the drop.",
  },
  {
    n: "02",
    title: "Businesses claim their slot",
    description:
      "Local businesses buy ad space sized to their goals. Only one business per industry is allowed — so your plumber slot belongs to you alone.",
  },
  {
    n: "03",
    title: "We design & print the card",
    description:
      "Our team designs each business's ad and lays out the full 9×12″ postcard. Premium print quality that stands out in any mailbox.",
  },
  {
    n: "04",
    title: "5,000 households get it",
    description:
      "The finished card goes out monthly or bi-monthly — keeping every business on it consistently in front of local homeowners.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-charcoal py-24 lg:py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <span className="text-xs uppercase tracking-widest text-pine-light">Process</span>
          <h2 className="font-display text-balance mt-4 text-4xl text-paper sm:text-5xl max-w-2xl">
            From mailbox to customer, in four steps.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.1}>
              <div className="relative pl-2">
                <span className="font-display text-5xl text-white/10">{step.n}</span>
                <h3 className="mt-4 text-lg text-paper">{step.title}</h3>
                <p className="mt-2 text-sm text-mist leading-relaxed">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
