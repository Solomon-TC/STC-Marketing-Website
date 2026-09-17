import Image from "next/image";
import Reveal from "./Reveal";
import { WEBSITE_PROJECTS as PROJECTS, projectImage } from "@/lib/projects";

export default function WebsitePortfolio({
  eyebrow = "Recent builds",
  heading = "See the work.",
}: {
  eyebrow?: string;
  heading?: string;
}) {
  return (
    <section className="bg-ink py-24 lg:py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <span className="text-xs uppercase tracking-widest text-pine-light">{eyebrow}</span>
          <h2 className="font-display text-balance mt-4 text-3xl text-paper sm:text-4xl max-w-2xl">
            {heading}
          </h2>
          <p className="mt-5 max-w-2xl text-fog leading-relaxed">
            Every one of these was designed from scratch for a real local
            business. Click through and see them live.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.slug} delay={Math.min(i * 0.08, 0.32)}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-charcoal transition-colors duration-300 hover:border-pine-light/40"
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10">
                  <Image
                    src={projectImage(project.slug)}
                    alt={`${project.name} website homepage — designed by STC Marketing`}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
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

                  <p className="mt-4 flex-1 text-sm text-fog leading-relaxed">
                    {project.description}
                  </p>

                  <span className="mt-5 text-xs tracking-wide text-pine-light">
                    {project.display}
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
