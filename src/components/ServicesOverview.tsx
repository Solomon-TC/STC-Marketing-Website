import Link from "next/link";
import Reveal from "./Reveal";

const SERVICES = [
  {
    href: "/website-design",
    title: "Websites",
    eyebrow: "What we do most",
    featured: true,
    description:
      "High-end, custom websites built to convert. We handle the design, build, hosting, and everything after launch so you never have to think about it.",
    points: ["Custom design, no templates", "Hosting, updates, and security included", "Ongoing support and peace of mind"],
  },
  {
    href: "/the-spotlights",
    title: "The Spotlights",
    eyebrow: "Also available",
    featured: false,
    description:
      "One big 9x12\" postcard shared by local businesses in Newberg, Oregon. One business per industry, so there's zero competition on the card.",
    points: ["Shared postcard, exclusive industry slot", "Complimentary ad design included", "Newberg, Oregon only"],
  },
];

export default function ServicesOverview() {
  return (
    <section id="services" className="bg-ink py-24 lg:py-32 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <span className="text-xs uppercase tracking-widest text-pine-light">What we do</span>
          <h2 className="font-display text-balance mt-4 text-4xl text-paper sm:text-5xl max-w-2xl">
            Built to grow your brand without taking your time.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.35fr_1fr] items-start">
          {SERVICES.map((service, i) => (
            <Reveal key={service.href} delay={i * 0.12}>
              <Link
                href={service.href}
                className={`group relative block h-full rounded-2xl border bg-charcoal p-10 transition-colors duration-300 hover:border-pine-light/40 ${
                  service.featured ? "border-pine-light/25" : "border-white/10"
                }`}
              >
                <span className="text-xs uppercase tracking-widest text-pine-light">
                  {service.eyebrow}
                </span>
                <h3
                  className={`font-display mt-3 text-paper group-hover:text-pine-light transition-colors duration-300 ${
                    service.featured ? "text-4xl" : "text-2xl"
                  }`}
                >
                  {service.title}
                </h3>
                <p className="mt-4 text-fog leading-relaxed">{service.description}</p>
                <ul className="mt-6 space-y-2">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-mist">
                      <span className="h-1 w-1 rounded-full bg-pine-light" />
                      {point}
                    </li>
                  ))}
                </ul>
                <span className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-wide text-pine-light">
                  Learn more
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
