import { LogoMark } from "../Logo/LogoMark";
import classes from "./Footer.module.css";

const SOCIALS = [
  { icon: "✈️", href: "https://t.me/nedelya_site", label: "Telegram", external: true },
  { icon: "💬", href: "https://wa.me/375000000000", label: "WhatsApp", external: true },
  { icon: "📱", href: "viber://chat?number=%2B375000000000", label: "Viber", external: false },
  { icon: "✉️", href: "mailto:hello@nedelya.site", label: "Email", external: false },
];

const CONTACTS = [
  { icon: "✉️", href: "mailto:hello@nedelya.site", label: "hello@nedelya.site", external: false },
  { icon: "✈️", href: "https://t.me/nedelya_site", label: "Telegram", external: true },
  { icon: "📱", href: "viber://chat?number=%2B375000000000", label: "Viber", external: false },
  { icon: "💬", href: "https://wa.me/375000000000", label: "WhatsApp", external: true },
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
              Быстрый запуск простого сайта за 4–10 дней по фиксированной цене. Без долгого ТЗ и
              ненужных сложностей.
            </p>

            <div className={classes.socials}>
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} className={classes.soc} aria-label={s.label} {...ext(s.external)}>
                  {s.icon}
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
                  <span className={classes.linkIcon}>{c.icon}</span>
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
