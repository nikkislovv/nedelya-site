import { Seo } from "../../Components/Seo/Seo";
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
      <Seo
        title="Сайт под ключ за неделю от 600 BYN — разработка сайтов | Nedelya.site"
        description="Сайты под ключ за 5–7 дней: лендинг, визитка, интернет-магазин, витрина товаров. Фиксированная цена от 600 BYN, договор и 3 цикла правок. Оценка за 24 часа."
        path="/"
      />
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
