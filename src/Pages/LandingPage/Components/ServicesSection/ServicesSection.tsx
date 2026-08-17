import { useState, type CSSProperties } from "react";
import { SectionHead } from "../../../../Components/SectionHead/SectionHead";
import { SlideIn } from "../../../../Components/SlideIn/SlideIn";
import { BynSign } from "../../../../Components/BynSign/BynSign";
import { ServiceMockup } from "./ServiceMockup";
import { ServiceIcon } from "./ServiceIcon";
import { ServiceModal } from "./ServiceModal";
import { AddonsShowcase } from "./AddonsShowcase";
import { SERVICES, type IService } from "./services";
import classes from "./ServicesSection.module.css";

export function ServicesSection() {
  const [active, setActive] = useState<IService | null>(null);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={classes.services} id="services">
      <div className={`${classes.glow} ${classes.orangeGlow}`} aria-hidden="true" />
      <div className={`${classes.glow} ${classes.blueGlow}`} aria-hidden="true" />

      <div className={classes.inner}>
        <SlideIn direction="bottom">
          <SectionHead
            label="Услуги и цены"
            title="Что мы делаем"
            subtitle="Выберите формат под свою задачу — в карточке цена, сроки и что входит"
          />
        </SlideIn>

        <div className={classes.showcase}>
          {SERVICES.map((svc, i) => (
            <SlideIn key={svc.id} direction="bottom" delay={(i % 3) * 90}>
              <div
                className={classes.card}
                style={{ ["--svc" as string]: svc.accent } as CSSProperties}
                onClick={() => setActive(svc)}
                role="button"
                tabIndex={0}
                aria-label={`Подробнее: ${svc.name}`}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setActive(svc)}
              >
                <span className={classes.icon}>
                  <ServiceIcon type={svc.mockup} />
                </span>
                <div className={classes.mockupWrap}>
                  <ServiceMockup type={svc.mockup} />
                </div>
                <div className={classes.name}>{svc.name}</div>
                <div className={classes.tagline}>{svc.tagline}</div>
                <div className={classes.foot}>
                  <span className={classes.footLeft}>
                    <span className={classes.price}>
                      {svc.price}
                      <BynSign />
                    </span>
                    <span className={classes.timeline}>
                      <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <circle cx="8" cy="8" r="6.4" stroke="currentColor" strokeWidth="1.5" />
                        <path
                          d="M8 4.6V8l2.3 1.4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {svc.timeline}
                    </span>
                  </span>
                  <span className={classes.more}>Подробнее →</span>
                </div>
              </div>
            </SlideIn>
          ))}
        </div>

        {/* Add-ons showcase (host / support / promote) */}
        <AddonsShowcase />

        {/* Custom / non-standard CTA */}
        <SlideIn direction="bottom">
          <div className={classes.custom}>
            <div className={classes.customText}>
              <div className={classes.customTitle}>Нужен другой формат?</div>
              <div className={classes.customDesc}>
                Только дизайн-макет, разработка по вашему макету, MVP или нестандартная
                задача — оценим индивидуально за 24 часа.
              </div>
            </div>
            <span className={classes.ctaWrap}>
              <span className={classes.ring} aria-hidden="true" />
              <span className={classes.ring} aria-hidden="true" />
              <button className={classes.customBtn} onClick={scrollToContact}>
                Обсудить проект <span className={classes.arrow}>→</span>
              </button>
            </span>
          </div>
        </SlideIn>
      </div>

      {active && <ServiceModal service={active} onClose={() => setActive(null)} />}
    </section>
  );
}
ServicesSection.displayName = "ServicesSection";
