import { useState, useEffect } from "react";
import clsx from "clsx";
import { LogoMark } from "../Logo/LogoMark";
import { Button } from "../Button/Button";
import classes from "./Header.module.css";

const NAV_LINKS = [
  { label: "Услуги", href: "#services" },
  { label: "Как работаем", href: "#process" },
  { label: "Портфолио", href: "#portfolio" },
  { label: "Контакты", href: "#contact" },
  { label: "FAQ", href: "#faq" },
];

const SECTION_IDS = ["services", "process", "portfolio", "contact", "faq"];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("");

  /* active section detection (scroll-spy) — pick the last section whose
     top has scrolled above the header line, so the highlight always
     matches what is actually under the header */
  useEffect(() => {
    const onScroll = () => {
      const line = 110; // header height + breathing room
      let current = "";
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActiveId(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setMenuOpen(false);

  const renderLinks = (onClick?: () => void) =>
    NAV_LINKS.map((lnk) => (
      <a
        key={lnk.href}
        href={lnk.href}
        className={clsx(classes.navLink, activeId === lnk.href.slice(1) && classes.navLinkActive)}
        onClick={onClick}
      >
        {lnk.label}
      </a>
    ));

  return (
    <header className={classes.header}>
      <div className={clsx(classes.card, menuOpen && classes.cardOpen)}>
        <div className={classes.row}>
          {/* Logo */}
          <a href="#" className={classes.logo} onClick={close}>
            <LogoMark className={classes.logoImg} />
            <span className={classes.logoName}>
              Nedelya<em>.site</em>
            </span>
          </a>

          {/* Desktop nav + CTA (grouped right) */}
          <div className={classes.navDesktop}>
            <nav className={classes.links} aria-label="Основная навигация">
              {renderLinks()}
            </nav>
            <Button href="#contact">Оставить заявку</Button>
          </div>

          {/* Burger toggle */}
          <button
            className={clsx(classes.burger, menuOpen && classes.burgerOpen)}
            onClick={() => setMenuOpen((m) => !m)}
            aria-label="Меню"
            aria-expanded={menuOpen}
          >
            <span className={classes.burgerBox}>
              <span className={classes.burgerLine} />
              <span className={classes.burgerLine} />
              <span className={classes.burgerLine} />
            </span>
          </button>
        </div>

        {/* Mobile accordion — expands inside the card */}
        <div className={clsx(classes.navMobile, menuOpen && classes.navMobileOpen)}>
          <nav className={classes.linksMobile} aria-label="Мобильное меню">
            {renderLinks(close)}
          </nav>
          <Button href="#contact" onClick={close}>
            Оставить заявку
          </Button>
        </div>
      </div>
    </header>
  );
}
Header.displayName = "Header";
