import Image from "next/image";
import Reveal from "./Reveal";

type Project = {
  slug: string;
  name: string;
  category: string;
  location: string;
  description: string;
  url: string;
  /** What we show as the link label. Vercel preview URLs get a friendlier label. */
  display: string;
};

const PROJECTS: Project[] = [
  {
    slug: "zd-builders",
    name: "Z&D Builders",
    category: "Roofing & Remodeling",
    location: "Newberg, OR",
    description:
      "Licensed, insured, and locally owned — full roof replacements through the siding, gutters, and paint that finish the job.",
    url: "https://zanddbuilders.com",
    display: "zanddbuilders.com",
  },
  {
    slug: "valley-boys",
    name: "Valley Boys Window & Gutter",
    category: "Exterior Cleaning",
    location: "Newberg, OR",
    description:
      "Window cleaning, roof care, gutter maintenance, and pressure washing across the Willamette and Rogue Valley.",
    url: "https://valleyboyswindows.com",
    display: "valleyboyswindows.com",
  },
  {
    slug: "pdx-construction",
    name: "PDX Construction Solutions",
    category: "Remodeling & Construction",
    location: "Portland, OR",
    description:
      "Remodeling, drywall, painting, siding, and hardscape for homes and businesses around Portland.",
    url: "https://pdxconstructionsolutions.com",
    display: "pdxconstructionsolutions.com",
  },
  {
    slug: "allstarr-solutions",
    name: "All Starr Solutions",
    category: "Hauling & Junk Removal",
    location: "Newberg, OR",
    description:
      "Heavy hauling and junk removal — the jobs other haulers turn down, with the phone answered 24 hours a day.",
    url: "https://allstarrsolutions.net",
    display: "allstarrsolutions.net",
  },
  {
    slug: "whole-heart-home",
    name: "Wholeheart Home",
    category: "House Cleaning",
    location: "Newberg, OR",
    description:
      "Detail-first house cleaning — standard, deep, and move-in/move-out cleans for Newberg and the surrounding area.",
    url: "https://wholehearthomellc.com",
    display: "wholehearthomellc.com",
  },
  {
    slug: "well-hung-gutters",
    name: "Well Hung Gutters",
    category: "Gutter Installation & Cleaning",
    location: "Philomath, OR",
    description:
      "Seamless gutter installation, gutter cleaning, roof cleaning, and solar panel cleaning for Willamette Valley homes.",
    url: "https://well-hung-gutters.vercel.app/",
    display: "View live site",
  },
  {
    slug: "pacific-crematory",
    name: "Pacific Crematory",
    category: "Cremation Equipment",
    location: "Oregon",
    description:
      "Oregon-built cold-hearth cremation equipment sold to funeral homes, crematories, and veterinary providers nationwide.",
    url: "https://pacificcrematory.com",
    display: "pacificcrematory.com",
  },
];

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
            Every one of these was designed from scratch for a real Oregon
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
                    src={`/images/portfolio/${project.slug}.webp`}
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
