import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import WebsitePortfolio from "@/components/WebsitePortfolio";
import Integrations from "@/components/Integrations";
import ProcessSteps from "@/components/ProcessSteps";
import FaqSection from "@/components/FaqSection";
import {
  ORG_ID,
  WEBSITE_INCLUDES,
  absoluteUrl,
  breadcrumbSchema,
  faqSchema,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Custom Website Design & Development Services",
  description:
    "Premium custom website design and development — built from scratch, integrated with your business tools, and fully managed after launch. Serving clients nationwide from Oregon.",
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
    q: "What integrations can you add?",
    a: "We connect sites to the tools businesses run on — Jobber for scheduling and client management, OpenTable for restaurant reservations, lead forms that route straight to your inbox, Google reviews, and analytics. If you need something custom, like a client login or an interactive tool, we build that too.",
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
    a: "Every build includes search fundamentals: real meta titles and descriptions, structured data, proper heading structure, fast load times, and mobile-first layouts. That's the technical foundation rankings are built on.",
  },
  {
    q: "Do you work with businesses outside Oregon?",
    a: "Yes. We're based in Oregon and build websites for clients across the country. The whole process runs remotely — calls, design reviews, and launch — so where you are doesn't limit what we can build.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom Website Design and Development",
  serviceType: "Web design and development",
  description:
    "Premium custom website design, development, integrations, hosting, and ongoing management for businesses across the United States.",
  provider: { "@id": ORG_ID },
  areaServed: { "@type": "Country", name: "United States" },
  url: absoluteUrl("/website-design"),
};

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
        eyebrow="Custom websites"
        title={
          <>
            Websites built to
            <span className="text-tan italic"> convert.</span>
          </>
        }
        description="Premium custom websites designed, built, and managed for businesses across the country — beautiful up front, engineered underneath, and looked after long after launch."
      />

      <WebsitePortfolio tone="ink" />

      <section className="bg-charcoal py-24 lg:py-32 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16">
          <Reveal>
            <span className="text-xs uppercase tracking-widest text-pine-light">
              Why it matters
            </span>
            <h2 className="font-display text-balance mt-4 text-4xl text-paper sm:text-5xl">
              Your website should work as hard as you do.
            </h2>
            <p className="mt-6 text-fog leading-relaxed">
              Most business websites are slow, outdated, or built on a
              template that looks like everyone else&apos;s. When someone looks
              you up, that first impression decides whether they reach out or
              keep scrolling.
            </p>
            <p className="mt-4 text-fog leading-relaxed">
              We build sites that look the part, connect to the tools you run
              on, and stay that way. After launch we handle hosting, security,
              and updates, so your site stays fast and current without you
              lifting a finger.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-pine-light/20 bg-ink/60 p-10">
              <h3 className="text-xs uppercase tracking-widest text-pine-light">
                Every build includes
              </h3>
              <ul className="mt-6 space-y-4">
                {WEBSITE_INCLUDES.map((item) => (
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

      <Integrations tone="ink" />
      <ProcessSteps tone="charcoal" />
      <FaqSection faqs={FAQS} eyebrow="Common questions" heading="Straight answers." tone="ink" />
      <CtaBanner />
    </>
  );
}
