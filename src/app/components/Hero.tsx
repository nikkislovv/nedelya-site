export function Hero() {
  return (
    <section className="nd-hero" id="hero">
      <div className="nd-container nd-hero__inner">

        {/* ---- Content ---- */}
        <div className="nd-hero__content">
          <div className="nd-hero__tag">✦ Быстрый запуск сайта</div>

          <h1 className="nd-hero__title">
            Запустим ваш сайт<br />
            за 5 дней —&nbsp;<em>от&nbsp;$199</em>
          </h1>

          <p className="nd-hero__sub">
            Запускаем быстро за счёт готовых шаблонов дизайна, проектных
            заготовок под типовые сайты и процесса без долгого ТЗ.&nbsp;
            Подходит для малого бизнеса, фрилансеров и небольших проектов.
          </p>

          <div className="nd-hero__actions">
            <a href="#contact" className="nd-btn nd-btn--accent nd-btn--lg">
              Обсудить проект →
            </a>
            <p className="nd-hero__note">
              Ответим в течение 24 часов и покажем подходящий формат запуска
            </p>
          </div>
        </div>

        {/* ---- Stylized device mockups ---- */}
        <div className="nd-hero__visual" aria-hidden="true">

          {/* Laptop mockup — behind, larger */}
          <div className="nd-mockup-laptop">
            <div className="nd-mockup-laptop__base">
              <div className="nd-mockup-laptop__screen">
                {/* Wireframe content */}
                <div className="nd-mockup-laptop__header" />
                <div className="nd-mockup-laptop__content">
                  <div className="nd-wireframe-line nd-wireframe-line--full" />
                  <div className="nd-wireframe-line nd-wireframe-line--80" />
                  <div className="nd-wireframe-line nd-wireframe-line--60" />
                  <div className="nd-wireframe-block" />
                  <div className="nd-wireframe-btn" />
                </div>
              </div>
              <div className="nd-mockup-laptop__keyboard" />
            </div>
          </div>

          {/* Phone mockup — in front, smaller */}
          <div className="nd-mockup-phone">
            <div className="nd-mockup-phone__body">
              <div className="nd-mockup-phone__screen">
                {/* Wireframe content */}
                <div className="nd-mockup-phone__header" />
                <div className="nd-mockup-phone__content">
                  <div className="nd-wireframe-line nd-wireframe-line--full" />
                  <div className="nd-wireframe-line nd-wireframe-line--70" />
                  <div className="nd-wireframe-block nd-wireframe-block--small" />
                  <div className="nd-wireframe-btn nd-wireframe-btn--small" />
                </div>
              </div>
            </div>
          </div>

          {/* Status badge — glassmorphism */}
          <div className="nd-status-badge">
            <div className="nd-status-badge__dot" />
            <div className="nd-status-badge__text">
              <div className="nd-status-badge__label">Статус проекта</div>
              <div className="nd-status-badge__value">Запущен за 4 дня ✓</div>
            </div>
          </div>
        </div>

      </div>

      {/*
      ========================================
      ROLLBACK: Previous versions
      ========================================

      VERSION 1 (stock photos):
      Remove "import { ImageWithFallback }" at top
      Replace .nd-hero__visual content with:

      <div className="nd-hero__visual" aria-hidden="true">
        <div className="nd-device nd-device--laptop">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1730794545099-14902983739d?w=800&q=80"
            alt="Laptop with website"
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 20px 60px rgba(0,0,0,0.45)' }}
          />
        </div>
        <div className="nd-device nd-device--phone">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1691207737881-0dd5d3aa732a?w=600&q=80"
            alt="Hand holding phone"
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 20px 60px rgba(0,0,0,0.45)' }}
          />
        </div>
        <div className="nd-status-badge">...</div>
      </div>

      VERSION 0 (abstract mockups):
      <div className="nd-hero__visual" aria-hidden="true">
        <div className="nd-mockup nd-mockup--a">
          <div className="nd-mockup__bar">
            <div className="nd-mockup__dot" style={{ background: '#FF5F57' }} />
            <div className="nd-mockup__dot" style={{ background: '#FEBC2E' }} />
            <div className="nd-mockup__dot" style={{ background: '#28C840' }} />
          </div>
          <div className="nd-mockup__body">
            <div className="nd-mockup__img">🖥️</div>
            <div className="nd-mockup__line" />
            <div className="nd-mockup__line nd-mockup__line--s" />
            <div className="nd-mockup__line nd-mockup__line--xs" />
          </div>
        </div>
        <div className="nd-mockup nd-mockup--b">...</div>
        <div className="nd-mockup nd-mockup--c">...</div>
      </div>
      */}

      {/* ---- Stats bar ---- */}
      <div className="nd-container">
        <div className="nd-stats">
          <div className="nd-stat">
            <span className="nd-stat__icon">⚡</span>
            <span className="nd-stat__val">4–10 дней</span>
            <span className="nd-stat__lbl">от идеи до запуска</span>
          </div>
          <div className="nd-stat">
            <span className="nd-stat__icon">🎨</span>
            <span className="nd-stat__val">1–3 дня</span>
            <span className="nd-stat__lbl">первая версия дизайна</span>
          </div>
          <div className="nd-stat">
            <span className="nd-stat__icon">📦</span>
            <span className="nd-stat__val">12 типов</span>
            <span className="nd-stat__lbl">сайтов в библиотеке</span>
          </div>
        </div>
      </div>
    </section>
  );
}
