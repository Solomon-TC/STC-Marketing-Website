import Hero from "@/components/Hero";
import ClientMarquee from "@/components/ClientMarquee";
import Capabilities from "@/components/Capabilities";
import WebsitePortfolio from "@/components/WebsitePortfolio";
import Integrations from "@/components/Integrations";
import ProcessSteps from "@/components/ProcessSteps";
import Testimonials from "@/components/Testimonials";
import FaqSection from "@/components/FaqSection";
import CtaBanner from "@/components/CtaBanner";
import { faqSchema } from "@/lib/site";

const FAQS = [
  {
    q: "What does STC Marketing do?",
    a: "We design, build, and manage premium custom websites for businesses across the country. Every site is built from scratch, connected to the tools you run on, and looked after long after launch.",
  },
  {
    q: "Where are you based, and who do you work with?",
    a: "We're based in Oregon and build websites for clients all over the country. The whole process runs remotely — calls, design reviews, and launch — so where you are doesn't limit what we can build.",
  },
  {
    q: "How much does a custom website cost?",
    a: "It depends on how many pages you need and what the site has to do. Send us a message describing your business and we'll give you a straight number — no packages you have to decode, no pressure.",
  },
  {
    q: "What integrations can you add?",
    a: "We connect sites to the tools businesses run on — Jobber for scheduling and client management, OpenTable for restaurant reservations, lead forms that route straight to your inbox, Google reviews, and analytics. If you need something custom, like a client login or an interactive tool, we build that too.",
  },
  {
    q: "Do you use templates?",
    a: "No. Every site is designed from scratch around your brand. Templates are the fastest way to look like every other business in your category, which is the opposite of what a website is supposed to do for you.",
  },
  {
    q: "Do you keep managing the site after it launches?",
    a: "Yes. Hosting, domain management, security, and software updates are all included, along with ongoing support. You never have to think about the technical side.",
  },
  {
    q: "How do I get started?",
    a: "Send us a message through the contact form with a bit about your business and what you're after. We read every message and respond within one business day.",
  },
];

/** A spread across industries and regions, led by the strongest visuals. */
const FEATURED_WORK = ["zd-builders", "david-spatola", "pdx-construction", "valley-boys"];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }}
      />
      <Hero />
      <ClientMarquee />
      <Capabilities tone="charcoal" />
      <WebsitePortfolio
        tone="ink"
        eyebrow="Selected work"
        heading="Recent builds."
        featured={FEATURED_WORK}
        showAllLink
      />
      <Integrations tone="charcoal" />
      <ProcessSteps tone="ink" />
      <Testimonials tone="charcoal" />
      <FaqSection faqs={FAQS} eyebrow="Common questions" heading="Straight answers." tone="ink" />
      <CtaBanner />
    </>
  );
}
