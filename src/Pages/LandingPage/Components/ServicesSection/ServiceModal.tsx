import { useEffect, type CSSProperties } from "react";
import { BynSign } from "../../../../Components/BynSign/BynSign";
import { ServiceMockup } from "./ServiceMockup";
import { ServiceIcon } from "./ServiceIcon";
import type { IService } from "./services";
import classes from "./ServiceModal.module.css";

interface IServiceModalProps {
  service: IService;
  onClose: () => void;
}

export function ServiceModal({ service, onClose }: IServiceModalProps) {
  /* Esc to close + body scroll lock */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const goToContact = () => {
    onClose();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const total = service.timing.reduce((sum, t) => {
    const n = parseInt(t.value, 10);
    return Number.isNaN(n) ? sum : sum + n;
  }, 0);

  return (
    <div
      className={classes.overlay}
      style={{ ["--svc" as string]: service.accent } as CSSProperties}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={service.name}
    >
      <div className={classes.modal} onClick={(e) => e.stopPropagation()}>
        <button className={classes.close} onClick={onClose} aria-label="Закрыть">
          ✕
        </button>

        <div className={classes.body}>
          <div className={classes.left}>
            <span className={classes.badge}>
              <ServiceIcon type={service.mockup} />
            </span>
            <span className={classes.tag}>Услуга</span>
            <h3 className={classes.name}>{service.name}</h3>
            <p className={classes.desc}>{service.description}</p>
            <div className={classes.mockupHolder}>
              <ServiceMockup type={service.mockup} />
            </div>
          </div>

          <div className={classes.right}>
            <div>
              <div className={classes.blockTitle}>Что входит</div>
              <div className={classes.includes}>
                {service.includes.map((item) => (
                  <div className={classes.includeItem} key={item}>
                    <span className={classes.check}>
                      <svg viewBox="0 0 14 14" fill="none">
                        <path
                          d="M2.5 7l3 3 6-6.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className={classes.blockTitle}>Сроки</div>
              <div className={classes.timing}>
                {service.timing.map((t) => (
                  <div className={classes.timingRow} key={t.label}>
                    <span className={classes.timingLabel}>{t.label}</span>
                    <span className={classes.timingVal}>{t.value}</span>
                  </div>
                ))}
                <div className={classes.total}>
                  <span>Итого</span>
                  <span>{total ? `~${total} дней` : service.timeline}</span>
                </div>
              </div>
            </div>

            <div>
              <div className={classes.blockTitle}>Кому подходит</div>
              <p className={classes.desc} style={{ margin: 0 }}>
                {service.idealFor}
              </p>
            </div>
          </div>
        </div>

        <div className={classes.footer}>
          <div className={classes.priceWrap}>
            <span className={classes.priceLabel}>Стоимость</span>
            <span className={classes.price}>
              {service.price}
              <BynSign />
            </span>
            <span className={classes.priceNote}>Фикс-цена в договоре · 1 цикл правок включён</span>
          </div>
          <button className={classes.cta} onClick={goToContact}>
            Обсудить проект →
          </button>
        </div>
      </div>
    </div>
  );
}
ServiceModal.displayName = "ServiceModal";
