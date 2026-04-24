import logoImg from "../../imports/Logo.png";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="nd-footer" id="footer">
      <div className="nd-container">
        <div className="nd-footer__inner">

          {/* Brand */}
          <div className="nd-footer__brand">
            <a href="#" className="nd-footer__logo">
              <img src={logoImg} alt="Nedelya.site" className="nd-footer__logo-img" />
              <span className="nd-footer__logo-name">Nedelya<em>.site</em></span>
            </a>
            <p className="nd-footer__tagline">
              Быстрый запуск простого сайта за 4–10 дней по фиксированной цене.
              Без долгого ТЗ и ненужных сложностей.
            </p>
          </div>

          {/* Contacts */}
          <div>
            <div className="nd-footer__col-title">Контакты</div>
            <div className="nd-footer__links">
              <a href="mailto:hello@nedelya.site" className="nd-footer__link">
                <span className="nd-footer__link-icon">✉️</span>
                hello@nedelya.site
              </a>
              <a
                href="https://t.me/nedelya_site"
                target="_blank"
                rel="noopener noreferrer"
                className="nd-footer__link"
              >
                <span className="nd-footer__link-icon">✈️</span>
                Telegram
              </a>
              <a
                href="viber://chat?number=%2B375000000000"
                className="nd-footer__link"
              >
                <span className="nd-footer__link-icon">📱</span>
                Viber
              </a>
              <a
                href="https://wa.me/375000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="nd-footer__link"
              >
                <span className="nd-footer__link-icon">💬</span>
                WhatsApp
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="nd-footer__col-title">Навигация</div>
            <div className="nd-footer__links">
              <a href="#services" className="nd-footer__link">Услуги</a>
              <a href="#process"  className="nd-footer__link">Как работаем</a>
              <a href="#portfolio" className="nd-footer__link">Портфолио</a>
              <a href="#faq"      className="nd-footer__link">FAQ</a>
              <a href="#contact"  className="nd-footer__link">Контакты</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="nd-footer__bottom">
          <span className="nd-footer__copy">
            © Nedelya.site, {year}. Все права защищены.
          </span>
          <a href="/privacy" className="nd-footer__policy">
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  );
}