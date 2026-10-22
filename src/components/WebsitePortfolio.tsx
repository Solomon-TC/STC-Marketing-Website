import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import GlowCard from "./GlowCard";
import { WEBSITE_PROJECTS, projectImage, type Project } from "@/lib/projects";

export default function WebsitePortfolio({
  eyebrow = "Recent builds",
  heading = "See the work.",
  intro = "Every one of these was designed and built from scratch. Click through and see them live.",
  featured,
  showAllLink = false,
  tone = "ink",
}: {
  eyebrow?: string;
  heading?: string;
  intro?: string;
  /** Show only these projects, in this order. Defaults to every project. */
  featured?: string[];
  /** Adds a link to the full portfolio on the websites page. */
  showAllLink?: boolean;
  tone?: "ink" | "charcoal";
}) {
  const projects = featured
    ? featured
        .map((slug) => WEBSITE_PROJECTS.find((p) => p.slug === slug))
        .filter((p): p is Project => p !== undefined)
    : WEBSITE_PROJECTS;

  return (
    <section
      id="work"
      className={`${tone === "ink" ? "bg-ink" : "bg-charcoal"} scroll-mt-20 border-t border-white/5 py-24 lg:py-32`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <span className="text-xs uppercase tracking-widest text-pine-light">{eyebrow}</span>
            <h2 className="font-display text-balance mt-4 max-w-2xl text-4xl text-paper sm:text-5xl">
              {heading}
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-fog">{intro}</p>
          </Reveal>
          {showAllLink && (
            <Reveal delay={0.1}>
              <Link
                href="/website-design#work"
                className="group inline-flex items-center gap-2 text-sm uppercase tracking-wide text-pine-light transition-colors duration-300 hover:text-paper"
              >
                All our work
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </Reveal>
          )}
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={Math.min(i * 0.08, 0.32)}>
              <GlowCard>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col"
                >
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10">
                    <Image
                      src={projectImage(project.slug)}
                      alt={`${project.name} website homepage — designed by STC Marketing`}
                      fill
                      className="object-cover object-top transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 620px"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-7">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-display text-xl text-paper transition-colors duration-300 group-hover:text-pine-light">
                        {project.name}
                      </h3>
                      <span
                        aria-hidden
                        className="shrink-0 text-pine-light transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      >
                        &#8599;
                      </span>
                    </div>

                    <p className="mt-1.5 text-xs uppercase tracking-widest text-mist">
                      {project.category} &middot; {project.location}
                    </p>

                    <p className="mt-4 flex-1 text-sm leading-relaxed text-fog">
                      {project.description}
                    </p>

                    <span className="mt-5 text-xs tracking-wide text-pine-light">
                      {project.display}
                    </span>
                  </div>
                </a>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
