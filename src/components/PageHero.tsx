import Reveal from "./Reveal";

export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink grain pt-36 pb-20 lg:pt-44 lg:pb-24 border-b border-white/5">
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2 h-72 w-[40rem] rounded-full bg-pine/15 blur-3xl"
      />
      <div className="relative mx-auto max-w-4xl px-6 lg:px-10 text-center">
        <Reveal>
          <span className="text-xs uppercase tracking-widest text-pine-light">{eyebrow}</span>
          <h1 className="font-display text-balance mt-4 text-4xl text-paper sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg text-fog leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
