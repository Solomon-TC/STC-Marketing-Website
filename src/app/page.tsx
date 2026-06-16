import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import HowItWorks from "@/components/HowItWorks";
import PortfolioCarousel from "@/components/PortfolioCarousel";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <HowItWorks />
      <PortfolioCarousel />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
