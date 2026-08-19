import { Button } from "../../../../Components/Button/Button";
import { SlideIn } from "../../../../Components/SlideIn/SlideIn";
import { BynSign } from "../../../../Components/BynSign/BynSign";
import classes from "./HeroSection.module.css";

/** Large 3D glossy browser showing our own mini-landing + rocket accent glued on top. */
function SiteVisual() {
  return (
    <div className={classes.visual} aria-hidden="true">
      <div className={classes.scene}>
        <div className={classes.glow} />

        <div className={classes.browserFloat}>
          {/* Floating accent (the "crown" analog — a launching rocket) */}
          <div className={classes.accent}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.4c2.6 2.6 3.6 5.6 3.6 8.6V14H8.4v-3c0-3 1-6 3.6-8.6Z" fill="currentColor" />
              <path d="M8.4 12.8 6 16.2l2.4-.6Z" fill="currentColor" />
              <path d="M15.6 12.8 18 16.2l-2.4-.6Z" fill="currentColor" />
              <path d="M10.4 14h3.2L12 17.9Z" fill="currentColor" opacity="0.9" />
              <circle cx="12" cy="9" r="1.7" fill="#1C5C82" />
            </svg>
          </div>

          {/* 3D browser window showing a mini-landing */}
          <div className={classes.browser}>
            <div className={classes.browserBar}>
              <span className={classes.dot} />
              <span className={classes.dot} />
              <span className={classes.dot} />
              <span className={classes.url}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5" y="11" width="14" height="9" rx="2" fill="currentColor" />
                  <path d="M8 11V8a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="2" />
                </svg>
                nedelya.site
              </span>
            </div>
            <div className={classes.screen}>
              {/* mini nav */}
              <div className={classes.siteNav}>
                <span className={classes.navLogo} />
                <div className={classes.navLinks}>
                  <i />
                  <i />
                  <i />
                </div>
                <span className={classes.navBtn} />
              </div>

              {/* mini hero */}
              <div className={classes.heroRow}>
                <div className={classes.heroCol}>
                  <span className={classes.heroTag} />
                  <div className={classes.heroH1} />
                  <div className={classes.heroH2} />
                  <div className={classes.heroLine} />
                  <div className={`${classes.heroLine} ${classes.heroLineShort}`} />
                  <div className={classes.heroBtn} />
                </div>
                <div className={classes.heroArt} />
              </div>

              {/* mini sections */}
              <div className={classes.cardRow}>
                <div className={classes.card} />
                <div className={classes.card} />
                <div className={classes.card} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className={classes.hero} id="hero">
      <div className={classes.wrapper}>
        {/* Big top wordmark */}
        <SlideIn direction="top" duration={1200}>
          <div className={classes.wordmark} aria-hidden="true">
            nedelya
          </div>
        </SlideIn>

        <div className={classes.grid}>
          {/* Headings — единственный h1 страницы, содержит обе строки:
              «Запустим ваш сайт за 5 дней — от 600 BYN» */}
          <div className={classes.headings}>
            <SlideIn direction="left" duration={900}>
              <h1 className={classes.heading}>
                <span className={classes.title}>Запустим ваш сайт</span>
                <span className={classes.subtitle}>
                  за 5 дней — <em>от&nbsp;600<BynSign /></em>
                </span>
              </h1>
            </SlideIn>
          </div>

          {/* Description + CTA */}
          <div className={classes.descriptionWrapper}>
            <SlideIn direction="left" delay={150} duration={900}>
              <p className={classes.description}>
                Запускаем быстро за счёт готовых шаблонов дизайна, проектных заготовок под
                типовые сайты и процесса без долгого ТЗ. Подходит для малого бизнеса,
                фрилансеров и небольших проектов.
              </p>
            </SlideIn>
            <SlideIn direction="left" delay={300} duration={900}>
              <div className={classes.actions}>
                <Button href="#contact" size="lg">
                  Обсудить проект →
                </Button>
              </div>
            </SlideIn>
          </div>

          {/* Visual */}
          <SlideIn direction="right" delay={200} duration={1100} className={classes.visualSlide}>
            <SiteVisual />
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
HeroSection.displayName = "HeroSection";
