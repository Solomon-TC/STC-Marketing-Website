import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  weight: "variable",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "STC Marketing | Direct Mail & Web Design in Oregon",
  description:
    "STC Marketing puts your business in thousands of Oregon mailboxes with The Spotlights, our oversized 9x12\" postcard mailer, and builds high-end websites that convert.",
  metadataBase: new URL("https://stcmarketingco.com"),
  openGraph: {
    title: "STC Marketing | Direct Mail & Web Design in Oregon",
    description:
      "Local advertising that actually gets seen. Oversized postcard mailers and modern websites for Oregon businesses.",
    siteName: "STC Marketing",
    locale: "en_US",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "STC Marketing",
  description:
    "STC Marketing helps local businesses grow with The Spotlights — a shared 9×12″ direct mail postcard reaching 5,000 households per city — and custom high-end website design.",
  url: "https://stcmarketingco.com",
  email: "stcmarketingco@gmail.com",
  telephone: "+15038080452",
  areaServed: "Oregon, USA",
  founder: [
    { "@type": "Person", name: "Silas Capell" },
    { "@type": "Person", name: "Solomon Capell" },
  ],
  sameAs: ["https://github.com/Solomon-TC/STC-Marketing-Website"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Marketing Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "The Spotlights",
          description:
            "Shared 9×12″ direct mail postcard featuring multiple local businesses, mailed to 5,000 households per city. One business per industry.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Website Design",
          description:
            "Custom, high-end website design for local businesses — fast, mobile-first, and built to convert.",
        },
      },
    ],
  },
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
      </head>
      <body className="min-h-full flex flex-col bg-ink text-paper">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
