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
  metadataBase: new URL("https://stcmarketing.com"),
  openGraph: {
    title: "STC Marketing | Direct Mail & Web Design in Oregon",
    description:
      "Local advertising that actually gets seen. Oversized postcard mailers and modern websites for Oregon businesses.",
    siteName: "STC Marketing",
    locale: "en_US",
    type: "website",
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
      <body className="min-h-full flex flex-col bg-ink text-paper">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
