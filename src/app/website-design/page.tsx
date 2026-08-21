import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import ProjectCarousel from "@/components/ProjectCarousel";
import FaqSection from "@/components/FaqSection";
import { CITIES_BY_REGION } from "@/lib/cities";
import { ORG_ID, absoluteUrl, breadcrumbSchema, faqSchema } from "@/lib/site";

export const metadata: Metadata = {
  title: "Web Design in Oregon | Custom Websites Built to Convert",
  description:
    "Custom web design for Oregon businesses — designed, built, hosted, and managed by STC Marketing. Serving Newberg, McMinnville, the Portland metro, and beyond.",
  alternates: { canonical: "/website-design" },
};

const FAQS = [
  {
    q: "How much does a custom website cost?",
    a: "It depends on how many pages you need and what the site has to do. Send us a message describing your business and we'll give you a straight number — no packages you have to decode, no pressure.",
  },
  {
    q: "Do you use templates or page builders?",
    a: "No. Every site is designed from scratch around your brand. Templates are the fastest way to look like every other business in your category, which is the opposite of what a website is supposed to do for you.",
  },
  {
    q: "Do you handle hosting, or do I need to arrange that myself?",
    a: "We handle it. Hosting, domain management, security, and software updates are all included, so there's nothing technical left on your plate after launch.",
  },
  {
    q: "What happens after the site launches?",
    a: "We keep managing it. That means hosting, updates, security patches, and ongoing support. A website isn't a one-time purchase that you leave alone for five years — that's exactly how sites end up slow and outdated.",
  },
  {
    q: "Will my website show up on Google?",
    a: "Every build includes on-page SEO fundamentals: real meta titles and descriptions, proper heading structure, fast load times, mobile-first layouts, and clear signals about the cities you serve. That's the foundation local ranking is built on.",
  },
  {
    q: "What areas of Oregon do you serve?",
    a: "We're based in Newberg and work with businesses throughout Oregon, including McMinnville, Dundee, Carlton, Lafayette, Yamhill, Sherwood, Tigard, Tualatin, Wilsonville, Lake Oswego, Beaverton, Hillsboro, and Corvallis.",
  },
  {
    q: "Do I need to be local to work with you?",
    a: "No. We work with businesses across Oregon and handle everything remotely, though we're always glad to meet in person when you're nearby.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Web Design and Website Management",
  serviceType: "Web design",
  description:
    "Custom website design, development, hosting, and ongoing management for local businesses throughout Oregon.",
  provider: { "@id": ORG_ID },
  areaServed: { "@type": "State", name: "Oregon" },
  url: absoluteUrl("/website-design"),
};

const PROCESS = [
  {
    n: "01",
    title: "Discovery",
    description:
      "We learn your business, your customers, and what a win looks like before we design a single pixel.",
  },
  {
    n: "02",
    title: "Design",
    description:
      "A custom visual direction built around your brand — never a recycled template.",
  },
  {
    n: "03",
    title: "Build",
    description:
      "A fast, responsive site built with modern tools, tested across devices before it ever goes live.",
  },
  {
    n: "04",
    title: "Manage and support",
    description:
      "We handle hosting, updates, security, and ongoing support after launch so you never have to think about it.",
  },
];

const INCLUDES = [
  "Custom design — no templates",
  "Mobile-first, responsive layouts",
  "Fast load times",
  "On-page SEO and real meta tags",
  "Hosting and domain management",
  "Security and software updates",
  "Ongoing support and peace of mind",
];

export default function WebsiteDesignPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Websites", path: "/website-design" },
            ])
          ),
        }}
      />

      <PageHero
        title={
          <>
            Websites built to
            <span className="text-tan italic"> convert.</span>
          </>
        }
        description="A high-end, modern website that looks great and keeps working long after launch. We design, build, host, and manage everything so you can focus on your business."
      />

      <ProjectCarousel />

      <section className="bg-ink py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16">
          <Reveal>
            <span className="text-xs uppercase tracking-widest text-pine-light">
              Why it matters
            </span>
            <h2 className="font-display text-balance mt-4 text-3xl text-paper sm:text-4xl">
              Your website should work as hard as you do.
            </h2>
            <p className="mt-5 text-fog leading-relaxed">
              Most small business websites are slow, outdated, or built on
              a template that looks like everyone else. When someone looks
              you up, that first impression decides whether they call or
              keep scrolling.
            </p>
            <p className="mt-4 text-fog leading-relaxed">
              We build sites that look the part and stay that way. After
              launch we handle hosting, security, and updates so your site
              stays fast, secure, and current without you having to lift
              a finger.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-white/10 bg-charcoal p-10">
              <h3 className="text-xs uppercase tracking-widest text-pine-light">
                Every build includes
              </h3>
              <ul className="mt-6 space-y-4">
                {INCLUDES.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-paper">
                    <span className="h-1.5 w-1.5 rounded-full bg-pine-light" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-charcoal py-24 lg:py-32 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <span className="text-xs uppercase tracking-widest text-pine-light">Process</span>
            <h2 className="font-display text-balance mt-4 text-3xl text-paper sm:text-4xl max-w-2xl">
              How we build your site.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.1}>
                <span className="font-display text-5xl text-white/10">{step.n}</span>
                <h3 className="mt-4 text-lg text-paper">{step.title}</h3>
                <p className="mt-2 text-sm text-mist leading-relaxed">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Service areas — internal linking hub for city pages */}
      <section className="bg-ink py-24 lg:py-32 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <span className="text-xs uppercase tracking-widest text-pine-light">
              Service areas
            </span>
            <h2 className="font-display text-balance mt-4 text-3xl text-paper sm:text-4xl max-w-2xl">
              Where we build websites.
            </h2>
            <p className="mt-5 max-w-2xl text-fog leading-relaxed">
              We&apos;re based in Newberg and work with businesses across Oregon.
              These are the areas we know best — pick your city to see how we
              approach work there.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(CITIES_BY_REGION).map(([region, cities], i) => (
              <Reveal key={region} delay={i * 0.1}>
                <h3 className="text-xs uppercase tracking-widest text-mist">
                  {region}
                </h3>
                <ul className="mt-5 space-y-3">
                  {cities.map((city) => (
                    <li key={city.slug}>
                      <Link
                        href={`/website-design/${city.slug}`}
                        className="group inline-flex items-center gap-2 text-paper transition-colors duration-300 hover:text-pine-light"
                      >
                        Web design in {city.name}
                        <span className="text-pine-light transition-transform duration-300 group-hover:translate-x-1">
                          &rarr;
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FaqSection faqs={FAQS} eyebrow="Common questions" heading="Straight answers." />

      <CtaBanner />
    </>
  );
}
