import { Header } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";
import { HeroSection } from "./Components/HeroSection/HeroSection";
import { MarqueeSection } from "./Components/MarqueeSection/MarqueeSection";
import { ServicesSection } from "./Components/ServicesSection/ServicesSection";
import { ProcessSection } from "./Components/ProcessSection/ProcessSection";
import { WhySection } from "./Components/WhySection/WhySection";
import { PortfolioSection } from "./Components/PortfolioSection/PortfolioSection";
import { ContactSection } from "./Components/ContactSection/ContactSection";
import { FaqSection } from "./Components/FaqSection/FaqSection";

export default function LandingPage() {
  return (
    <>
      <div className="nd-grain" aria-hidden="true" />
      <Header />
      <main>
        <HeroSection />
        <MarqueeSection />
        <ServicesSection />
        <ProcessSection />
        <WhySection />
        <PortfolioSection />
        <ContactSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
