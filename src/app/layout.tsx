import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import MotionProvider from "@/components/MotionProvider";
import { Analytics } from "@vercel/analytics/next";
import { SITE, organizationSchema } from "@/lib/site";

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
    default: "Custom Web Design & Development Agency | STC Marketing",
    template: "%s | STC Marketing",
  },
  description:
    "Exceptional custom websites for ambitious businesses across the country — designed from scratch, integrated with your tools, and managed after launch. Based in Oregon.",
  metadataBase: new URL(SITE.url),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Exceptional websites for ambitious businesses | STC Marketing",
    description:
      "Premium custom web design and development for ambitious businesses nationwide — integrated with your tools and managed after launch.",
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
    url: SITE.url,
  },
  twitter: {
    card: "summary_large_image",
    title: "Exceptional websites for ambitious businesses | STC Marketing",
    description:
      "Premium custom web design and development for ambitious businesses nationwide — integrated with your tools and managed after launch.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

/**
 * National at the organization level. The Oregon city pages still carry their
 * own city-level Service schema, so they keep their search signal on their own.
 */
const areaServed = [{ "@type": "Country", name: "United States" }];

const jsonLd = {
  ...organizationSchema(areaServed),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Website Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Website Design and Development",
          description:
            "Premium custom websites built from scratch — fast, mobile-first, integrated with your business tools, and managed after launch with hosting, security updates, and ongoing support.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "The Spotlights",
          description:
            "Shared 9×12″ direct mail postcard featuring multiple businesses, mailed to 5,000 households in Newberg, Oregon. One business per industry.",
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
        {/* Site chrome lives in (site)/layout so ad landing pages can run without it. */}
        <MotionProvider>{children}</MotionProvider>
        <Analytics />
      </body>
    </html>
  );
}
