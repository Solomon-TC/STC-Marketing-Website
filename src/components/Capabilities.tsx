import Image from "next/image";
import Reveal from "./Reveal";
import GlowCard from "./GlowCard";
import { projectImage } from "@/lib/projects";

const ICON = "h-6 w-6 text-pine-light";

const icons = {
  design: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={ICON} aria-hidden>
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  ),
  speed: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={ICON} aria-hidden>
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  search: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={ICON} aria-hidden>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={ICON} aria-hidden>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
};

/** Three real builds, fanned out. They spread apart when the card is hovered. */
const FAN = [
  {
    slug: "valley-boys",
    className:
      "z-10 translate-x-[-82%] translate-y-[-46%] rotate-[-7deg] group-hover/glow:translate-x-[-96%] group-hover/glow:rotate-[-11deg]",
  },
  {
    slug: "david-spatola",
    className:
      "z-10 translate-x-[-18%] translate-y-[-46%] rotate-[7deg] group-hover/glow:translate-x-[-4%] group-hover/glow:rotate-[11deg]",
  },
  {
    slug: "zd-builders",
    className:
      "z-20 translate-x-[-50%] translate-y-[-52%] group-hover/glow:translate-y-[-58%]",
  },
];

const MANAGED = ["Hosting", "Domain management", "Security", "Software updates", "Ongoing support"];

export default function Capabilities({ tone = "charcoal" }: { tone?: "ink" | "charcoal" }) {
  return (
    <section className={`${tone === "ink" ? "bg-ink" : "bg-charcoal"} border-t border-white/5 py-24 lg:py-32`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <span className="text-xs uppercase tracking-widest text-pine-light">What we do</span>
          <h2 className="font-display text-balance mt-4 max-w-3xl text-4xl text-paper sm:text-5xl">
            Design that impresses. Engineering that holds up.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fog">
            Most websites manage one or the other. Every site we build is both
            &mdash; and we stay with it long after launch.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <GlowCard featured>
              <div className="grid h-full items-center gap-10 p-8 sm:p-10 md:grid-cols-[1fr_1.15fr]">
                <div>
                  {icons.design}
                  <h3 className="font-display mt-6 text-3xl text-paper">Designed from scratch</h3>
                  <p className="mt-4 leading-relaxed text-fog">
                    No templates, no page builders, no lookalike layouts. Every
                    site is designed around your brand, so it looks like it
                    could only be yours.
                  </p>
                </div>
                <div className="relative h-52 sm:h-60">
                  {FAN.map((t) => (
                    <div
                      key={t.slug}
                      className={`absolute left-1/2 top-1/2 aspect-[16/10] w-[68%] overflow-hidden rounded-lg border border-white/10 shadow-2xl shadow-black/60 transition-[translate,rotate] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${t.className}`}
                    >
                      <Image
                        src={projectImage(t.slug)}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 60vw, 320px"
                        className="object-cover object-top"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </GlowCard>
          </Reveal>

          <Reveal delay={0.1}>
            <GlowCard>
              <div className="p-8 sm:p-10">
                {icons.speed}
                <h3 className="font-display mt-6 text-2xl text-paper">Built to perform</h3>
                <p className="mt-4 leading-relaxed text-fog">
                  Fast load times, mobile-first layouts, and clean, modern
                  code &mdash; the foundation customers feel and search engines
                  reward.
                </p>
              </div>
            </GlowCard>
          </Reveal>

          <Reveal delay={0.05}>
            <GlowCard>
              <div className="p-8 sm:p-10">
                {icons.search}
                <h3 className="font-display mt-6 text-2xl text-paper">SEO from day one</h3>
                <p className="mt-4 leading-relaxed text-fog">
                  Real meta tags, structured data, and clean heading structure,
                  built in from the start instead of bolted on later.
                </p>
              </div>
            </GlowCard>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-2">
            <GlowCard>
              <div className="grid h-full gap-8 p-8 sm:p-10 md:grid-cols-[1fr_1fr] md:items-center">
                <div>
                  {icons.shield}
                  <h3 className="font-display mt-6 text-2xl text-paper">Managed for you</h3>
                  <p className="mt-4 leading-relaxed text-fog">
                    After launch, we keep running it. Your site stays fast,
                    secure, and current without you touching a thing.
                  </p>
                </div>
                <ul className="flex flex-wrap gap-2.5 md:justify-end">
                  {MANAGED.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-white/10 bg-ink/60 px-4 py-2 text-sm text-fog transition-colors duration-300 group-hover/glow:border-white/15"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </GlowCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
