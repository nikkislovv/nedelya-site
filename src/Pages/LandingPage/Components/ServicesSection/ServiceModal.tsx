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
              <ServiceMockup type={service.mockup} fill />
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
              <div className={classes.blockTitle}>Кому подходит</div>
              <p className={classes.desc} style={{ margin: 0 }}>
                {service.idealFor}
              </p>
            </div>

            <div className={classes.gift}>
              <span className={classes.giftIcon}>
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M20 12v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 8.5H3V12h18V8.5Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                  />
                  <path d="M12 8.5V20" stroke="currentColor" strokeWidth="1.7" />
                  <path
                    d="M12 8.5S10.7 4.5 8.6 4.5a2 2 0 1 0 0 4H12Zm0 0s1.3-4 3.4-4a2 2 0 1 1 0 4H12Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div className={classes.giftBody}>
                <div className={classes.giftHeading}>
                  Полгода хостинга — <span className={classes.giftAccent}>в подарок</span>
                </div>
                <p className={classes.giftText}>
                  Публикуем сайт и первые 6&nbsp;месяцев держим его онлайн за наш
                  счёт — дальше по желанию.
                </p>
              </div>
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
