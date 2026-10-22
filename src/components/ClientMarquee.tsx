import { WEBSITE_PROJECTS } from "@/lib/projects";

/**
 * Infinite strip of client names. The list is rendered twice and shifted by
 * exactly half its width, so the loop is seamless. Spacing is padding on each
 * item rather than flex gap, which keeps the two halves identical in width.
 */
export default function ClientMarquee() {
  const names = WEBSITE_PROJECTS.filter((p) => !p.hideOnHome).map((p) => p.name);

  return (
    <section aria-label="Clients" className="border-y border-white/5 bg-ink py-12">
      <p className="text-center text-xs uppercase tracking-widest text-mist">
        Websites we&apos;ve built for
      </p>
      <div className="marquee mask-fade-x mt-7 overflow-hidden">
        <ul className="animate-marquee flex w-max">
          {[...names, ...names].map((name, i) => (
            <li
              key={`${name}-${i}`}
              aria-hidden={i >= names.length}
              className="whitespace-nowrap pr-16 font-display text-2xl text-fog/70 sm:text-3xl"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
