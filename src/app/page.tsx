import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import PortfolioCarousel from "@/components/PortfolioCarousel";
import Testimonials from "@/components/Testimonials";
import FaqSection from "@/components/FaqSection";
import CtaBanner from "@/components/CtaBanner";
import { faqSchema } from "@/lib/site";

const FAQS = [
  {
    q: "What does STC Marketing do?",
    a: "We design, build, host, and manage custom websites for local businesses across Oregon. We also run The Spotlights, a shared 9x12\" direct mail postcard mailed to 5,000 households in Newberg, with one business per industry on each card.",
  },
  {
    q: "Where is STC Marketing based?",
    a: "We're based in Newberg, Oregon, and serve businesses throughout the state — including McMinnville, Dundee, Carlton, Lafayette, Yamhill, Sherwood, Tigard, Tualatin, Wilsonville, Lake Oswego, Beaverton, Hillsboro, and Corvallis.",
  },
  {
    q: "How much does a website cost?",
    a: "It depends on how many pages you need and what the site has to do. Send us a message describing your business and we'll give you a straight number — no packages you have to decode, no pressure.",
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

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }}
      />
      <Hero />
      <ServicesOverview />
      <PortfolioCarousel />
      <Testimonials />
      <FaqSection faqs={FAQS} eyebrow="Common questions" heading="Straight answers." />
      <CtaBanner />
    </>
  );
}
