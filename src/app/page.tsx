import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import PortfolioCarousel from "@/components/PortfolioCarousel";
import CtaBanner from "@/components/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <PortfolioCarousel />
      <CtaBanner />
    </>
  );
}
