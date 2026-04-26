import { useState, useEffect } from "react";
import logoImg from "../../imports/logo_embedded_transparent.svg";

const NAV_LINKS = [
  { label: "Услуги", href: "#services" },
  { label: "Как работаем", href: "#process" },
  { label: "Портфолио", href: "#portfolio" },
  { label: "Контакты", href: "#contact" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("");

  /* ---------- sticky shadow ---------- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------- active section detection ---------- */
  useEffect(() => {
    const ids = [
      "services",
      "process",
      "portfolio",
      "contact",
      "faq",
    ];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id);
        });
      },
      { threshold: 0.3, rootMargin: "-68px 0px 0px 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  /* ---------- close on outside click ---------- */
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e: MouseEvent) => {
      const t = e.target as Element;
      if (!t.closest(".nd-nav") && !t.closest(".nd-burger"))
        setMenuOpen(false);
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [menuOpen]);

  /* ---------- body scroll lock ---------- */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      {/* Overlay */}
      <div
        className={`nd-overlay${menuOpen ? " nd-overlay--visible" : ""}`}
        onClick={close}
      />

      <header
        className={`nd-header${scrolled ? " nd-header--shadow" : ""}`}
      >
        <div className="nd-container nd-header__inner">
          {/* Logo */}
          <a href="#" className="nd-logo" onClick={close}>
            <img src={logoImg} alt="Nedelya.site" className="nd-logo__img" />
            <span className="nd-logo__name">Nedelya<em>.site</em></span>
          </a>

          {/* Nav */}
          <nav
            className={`nd-nav${menuOpen ? " nd-nav--open" : ""}`}
            aria-label="Основная навигация"
          >
            {/* Mobile drawer logo */}
            <div className="nd-nav__mob-logo">
              <img src={logoImg} alt="Nedelya.site" className="nd-nav__mob-logo-img" />
              <span className="nd-nav__mob-logo-text">Nedelya<em>.site</em></span>
            </div>

            {NAV_LINKS.map((lnk) => (
              <a
                key={lnk.href}
                href={lnk.href}
                className={`nd-nav__link${activeId === lnk.href.slice(1) ? " nd-nav__link--active" : ""}`}
                onClick={close}
              >
                {lnk.label}
              </a>
            ))}
            <a
              href="#contact"
              className="nd-btn nd-btn--accent nd-nav__mob-cta"
              onClick={close}
            >
              Оставить заявку
            </a>
          </nav>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="nd-btn nd-btn--accent nd-header__cta"
          >
            Оставить заявку
          </a>

          {/* Burger */}
          <button
            className={`nd-burger${menuOpen ? " nd-burger--open" : ""}`}
            onClick={() => setMenuOpen((m) => !m)}
            aria-label="Открыть меню"
            aria-expanded={menuOpen}
          >
            <span className="nd-burger__line" />
            <span className="nd-burger__line" />
            <span className="nd-burger__line" />
          </button>
        </div>
      </header>
    </>
  );
}