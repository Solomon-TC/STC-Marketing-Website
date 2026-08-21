import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SITE, organizationSchema } from "@/lib/site";
import { CITIES } from "@/lib/cities";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
  weight: "variable",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Web Design in Newberg, OR | Custom Websites | STC Marketing",
    template: "%s | STC Marketing",
  },
  description:
    "STC Marketing designs, builds, hosts, and manages custom websites for local businesses across Oregon — plus The Spotlights, our oversized 9x12\" direct mail postcard in Newberg.",
  metadataBase: new URL(SITE.url),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Web Design in Newberg, OR | Custom Websites | STC Marketing",
    description:
      "Custom websites for Oregon businesses — designed, built, hosted, and managed. Serving Newberg, McMinnville, the Portland metro, and beyond.",
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
    url: SITE.url,
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design in Newberg, OR | Custom Websites | STC Marketing",
    description:
      "Custom websites for Oregon businesses — designed, built, hosted, and managed by a local Oregon team.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

/** Every city we serve, as structured entities rather than a vague "Oregon, USA" string. */
const areaServed = [
  { "@type": "State", name: "Oregon" },
  ...CITIES.map((c) => ({
    "@type": "City",
    name: c.name,
    containedInPlace: { "@type": "State", name: "Oregon" },
  })),
];

const jsonLd = {
  ...organizationSchema(areaServed),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Marketing Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Website Design and Management",
          description:
            "Custom website design for local businesses — fast, mobile-first, and built to convert. Includes hosting, domain management, security updates, and ongoing support.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "The Spotlights",
          description:
            "Shared 9×12″ direct mail postcard featuring multiple local businesses, mailed to 5,000 households per city. One business per industry.",
        },
      },
    ],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  url: SITE.url,
  name: SITE.name,
  publisher: { "@id": `${SITE.url}/#organization` },
  inLanguage: "en-US",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-ink text-paper">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
