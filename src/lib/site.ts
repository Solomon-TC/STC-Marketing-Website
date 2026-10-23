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
  /**
   * Cal.com event path for the Introductory Call, e.g. "stc-marketing/intro-call".
   * Empty means the landing page skips booking and promises a follow-up instead.
   */
  calLink: "stc-marketing-pbbra1/30min" as string,
  /**
   * Meta Pixel ID for ad conversion tracking. Empty means the Pixel never loads.
   * Turning it on adds tracking cookies, so the privacy policy must be updated with it.
   */
  metaPixelId: "1138896375241413" as string,
  base: { city: "Newberg", state: "Oregon", stateCode: "OR" },
} as const;

/** What every website build includes. Shared by the websites page and city pages. */
export const WEBSITE_INCLUDES = [
  "Custom design — no templates",
  "Mobile-first, responsive layouts",
  "Fast load times",
  "Integrations with your business tools",
  "On-page SEO and structured data",
  "Hosting and domain management",
  "Security and software updates",
  "Ongoing support after launch",
];

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
      "STC Marketing designs, builds, and manages premium custom websites for businesses across the United States — integrated with the tools they run on, fast, and maintained after launch. Based in Oregon.",
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
    knowsAbout: [
      "Web design",
      "Custom website development",
      "Website integrations",
      "Search engine optimization",
      "Managed website hosting",
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
