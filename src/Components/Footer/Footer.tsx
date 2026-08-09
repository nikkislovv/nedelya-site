import type { ComponentType } from "react";
import { LogoMark } from "../Logo/LogoMark";
import { TelegramIcon, WhatsappIcon, ViberIcon, EmailIcon } from "../BrandIcons/BrandIcons";
import classes from "./Footer.module.css";

type TLink = {
  Icon: ComponentType<{ className?: string }>;
  href: string;
  label: string;
  external: boolean;
};

const SOCIALS: TLink[] = [
  { Icon: TelegramIcon, href: "https://t.me/nedelya_site", label: "Telegram", external: true },
  { Icon: WhatsappIcon, href: "https://wa.me/375000000000", label: "WhatsApp", external: true },
  { Icon: ViberIcon, href: "viber://chat?number=%2B375000000000", label: "Viber", external: false },
  { Icon: EmailIcon, href: "mailto:hello@nedelya.site", label: "Email", external: false },
];

const CONTACTS: TLink[] = [
  { Icon: EmailIcon, href: "mailto:hello@nedelya.site", label: "hello@nedelya.site", external: false },
  { Icon: TelegramIcon, href: "https://t.me/nedelya_site", label: "Telegram", external: true },
  { Icon: ViberIcon, href: "viber://chat?number=%2B375000000000", label: "Viber", external: false },
  { Icon: WhatsappIcon, href: "https://wa.me/375000000000", label: "WhatsApp", external: true },
];

const NAV = [
  { href: "#services", label: "Услуги" },
  { href: "#process", label: "Как работаем" },
  { href: "#portfolio", label: "Портфолио" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Контакты" },
];

const ext = (external: boolean) =>
  external ? { target: "_blank" as const, rel: "noopener noreferrer" } : {};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={classes.footer} id="footer">
      <div className={classes.inner}>
        <div className={classes.grid}>
          {/* Brand */}
          <div className={classes.brand}>
            <a href="#" className={classes.logo}>
              <LogoMark className={classes.logoImg} />
              <span className={classes.logoName}>
                Nedelya<em>.site</em>
              </span>
            </a>
            <p className={classes.tagline}>
              Быстрый запуск простого сайта за 4–7 дней по фиксированной цене. Без долгого ТЗ и
              ненужных сложностей.
            </p>

            <div className={classes.socials}>
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} className={classes.soc} aria-label={s.label} {...ext(s.external)}>
                  <s.Icon className={classes.socSvg} />
                </a>
              ))}
            </div>
          </div>

          {/* Contacts */}
          <div>
            <div className={classes.colTitle}>Контакты</div>
            <div className={classes.links}>
              {CONTACTS.map((c) => (
                <a key={c.label} href={c.href} className={classes.link} {...ext(c.external)}>
                  <span className={classes.linkIcon}>
                    <c.Icon className={classes.linkIconSvg} />
                  </span>
                  {c.label}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className={classes.colTitle}>Навигация</div>
            <div className={classes.links}>
              {NAV.map((n) => (
                <a key={n.href} href={n.href} className={classes.link}>
                  {n.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={classes.bottom}>
          <span className={classes.copy}>© Nedelya.site, {year}. Все права защищены.</span>
          <a href="/privacy" className={classes.policy}>
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  );
}
Footer.displayName = "Footer";
