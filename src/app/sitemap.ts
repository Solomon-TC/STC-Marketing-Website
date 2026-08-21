import type { MetadataRoute } from "next";
import { CITIES } from "@/lib/cities";
import { SITE } from "@/lib/site";

const BASE = SITE.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/website-design`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },

    // Service × city landing pages
    ...CITIES.map((city) => ({
      url: `${BASE}/website-design/${city.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: city.slug === "newberg" ? 0.9 : 0.8,
    })),

    { url: `${BASE}/the-spotlights`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/the-spotlights/newberg`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE}/terms-of-service`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
}
