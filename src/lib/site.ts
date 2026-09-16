export const SITE = {
  name: "STC Marketing",
  // Canonical host. The apex domain 308-redirects to www, so every URL we
  // publish (canonicals, sitemap, robots, schema) must use www or Google
  // files the whole site under "Page with redirect" and skips indexing it.
  url: "https://www.stcmarketingco.com",
  email: "stcmarketingco@gmail.com",
  phone: "(503) 808-0452",
  phoneRaw: "+15038080452",
  googleReviewsUrl:
    "https://www.google.com/maps/place/STC+Marketing/@44.0236851,-125.8667041,6z/data=!4m8!3m7!1s0x86ff769f1c774309:0xae64d79979c4a35f!8m2!3d44.1455904!4d-120.5834015!9m1!1b1!16s%2Fg%2F11z9f7s66t?entry=ttu&g_ep=EgoyMDI2MDgxNy4wIKXMDSoASAFQAw%3D%3D",
  rating: { value: "5.0", count: 5 },
  base: { city: "Newberg", state: "Oregon", stateCode: "OR" },
} as const;

/** Service-area business: no public street address, so we publish the areas we serve instead. */
export const geo = {
  "@type": "GeoCircle",
  geoMidpoint: {
    "@type": "GeoCoordinates",
    latitude: 45.3001,
    longitude: -122.9737,
  },
  geoRadius: "80000",
} as const;

export function absoluteUrl(path = "") {
  return `${SITE.url}${path}`;
}

/** Shared organization node, referenced by @id from page-level schema. */
export const ORG_ID = `${SITE.url}/#organization`;

export function organizationSchema(areaServed: object[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": ORG_ID,
    name: SITE.name,
    description:
      "STC Marketing designs, builds, hosts, and manages custom websites for local businesses across Oregon, and runs The Spotlights — a shared oversized direct mail postcard reaching 5,000 households per city.",
    url: SITE.url,
    email: SITE.email,
    telephone: SITE.phoneRaw,
    priceRange: "$$",
    image: absoluteUrl("/og-image.png"),
    logo: absoluteUrl("/images/stc-logo.png"),
    founder: [
      { "@type": "Person", name: "Silas Capell" },
      { "@type": "Person", name: "Solomon Capell" },
    ],
    sameAs: [SITE.googleReviewsUrl],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.rating.value,
      reviewCount: SITE.rating.count,
      bestRating: "5",
    },
    areaServed,
    serviceArea: geo,
    knowsAbout: [
      "Web design",
      "Website development",
      "Local SEO",
      "Direct mail marketing",
      "Small business marketing",
    ],
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
