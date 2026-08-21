import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import FaqSection from "@/components/FaqSection";
import ProjectCarousel from "@/components/ProjectCarousel";
import { CITIES, SHARED_FAQS, getCity } from "@/lib/cities";
import { SITE, ORG_ID, absoluteUrl, breadcrumbSchema, faqSchema } from "@/lib/site";

type Props = { params: Promise<{ city: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) return {};

  const title = `Web Design in ${city.name}, OR | Custom Websites`;
  const path = `/website-design/${city.slug}`;

  return {
    title,
    description: city.blurb,
    alternates: { canonical: path },
    openGraph: {
      title,
      description: city.blurb,
      url: absoluteUrl(path),
      siteName: SITE.name,
      locale: "en_US",
      type: "website",
    },
    twitter: { card: "summary_large_image", title, description: city.blurb },
  };
}

const INCLUDES = [
  "Custom design — no templates",
  "Mobile-first, responsive layouts",
  "Fast load times",
  "On-page SEO and real meta tags",
  "Hosting and domain management",
  "Security and software updates",
  "Ongoing support after launch",
];

export default async function CityPage({ params }: Props) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  const path = `/website-design/${city.slug}`;
  const faqs = [...city.faqs, ...SHARED_FAQS(city.name)];
  const nearby = CITIES.filter((c) => c.slug !== city.slug).slice(0, 8);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Web Design in ${city.name}, Oregon`,
    serviceType: "Web design and website management",
    description: city.blurb,
    provider: { "@id": ORG_ID },
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: { "@type": "State", name: "Oregon" },
    },
    url: absoluteUrl(path),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Website services for ${city.name} businesses`,
      itemListElement: INCLUDES.map((item) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: item },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Websites", path: "/website-design" },
              { name: city.name, path },
            ])
          ),
        }}
      />

      <PageHero
        eyebrow={`${city.name}, Oregon`}
        title={
          <>
            Web design in
            <span className="text-tan italic"> {city.name}.</span>
          </>
        }
        description={city.blurb}
      />

      {/* Breadcrumb trail */}
      <nav aria-label="Breadcrumb" className="bg-ink border-b border-white/5">
        <ol className="mx-auto max-w-7xl px-6 lg:px-10 py-4 flex flex-wrap items-center gap-2 text-xs text-mist">
          <li>
            <Link href="/" className="hover:text-pine-light transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li>
            <Link href="/website-design" className="hover:text-pine-light transition-colors">
              Websites
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li className="text-fog" aria-current="page">
            {city.name}
          </li>
        </ol>
      </nav>

      {/* Local context */}
      <section className="bg-ink py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16">
          <Reveal>
            <span className="text-xs uppercase tracking-widest text-pine-light">
              {city.county}
            </span>
            <h2 className="font-display text-balance mt-4 text-3xl text-paper sm:text-4xl">
              {city.angle.heading}
            </h2>
            <div className="mt-5 space-y-4">
              {city.intro.map((para) => (
                <p key={para} className="text-fog leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
            <p className="mt-4 text-fog leading-relaxed">{city.angle.body}</p>

            {city.proof && (
              <p className="mt-6 rounded-xl border border-pine-light/20 bg-charcoal p-5 text-sm text-paper leading-relaxed">
                {city.proof}
              </p>
            )}
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
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-pine-light px-7 py-3.5 text-sm uppercase tracking-wide text-ink transition-transform duration-300 hover:scale-[1.03] hover:bg-pine"
              >
                Get a Quote
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <ProjectCarousel />

      <FaqSection
        faqs={faqs}
        eyebrow={`${city.name} questions`}
        heading={`Web design in ${city.name}, answered.`}
      />

      {/* Internal links to sibling city pages */}
      <section className="bg-ink py-20 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <h2 className="font-display text-2xl text-paper">
              We also build websites nearby.
            </h2>
            <p className="mt-3 text-sm text-mist">
              Serving {city.name} and communities across Oregon.
            </p>
            <ul className="mt-8 flex flex-wrap gap-3">
              {nearby.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/website-design/${c.slug}`}
                    className="inline-flex rounded-full border border-white/10 px-4 py-2 text-sm text-fog transition-colors duration-300 hover:border-pine-light/40 hover:text-paper"
                  >
                    Web design in {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
