import { SectionHead } from "../../../../Components/SectionHead/SectionHead";
import { SlideIn } from "../../../../Components/SlideIn/SlideIn";
import { NicheGallery } from "./NicheGallery";
import classes from "./PortfolioSection.module.css";

export function PortfolioSection() {
  return (
    <section className={classes.portfolio} id="portfolio">
      <div className={classes.inner}>
        <SlideIn direction="bottom">
          <SectionHead
            label="Концепты дизайна"
            title="Дизайн под вашу нишу"
            subtitle="Наведите на нишу и откройте концепт — так мы обыгрываем дизайн под конкретный бизнес. Это примеры подхода, а не реальные клиенты."
          />
        </SlideIn>

        <NicheGallery />
      </div>
    </section>
  );
}
PortfolioSection.displayName = "PortfolioSection";
