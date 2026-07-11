export function Hero() {
  return (
    <section className="nd-hero" id="hero">
      <div className="nd-container nd-hero__inner">

        {/* Big centered wordmark — hero centerpiece (like the reference) */}
        <div className="nd-hero__wordmark" aria-hidden="true">nedelya</div>

        <div className="nd-hero__stage">

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

        {/* ---- Animated rocket visual ---- */}
        <div className="nd-hero__visual" aria-hidden="true">
          <div className="nd-rocket-scene">
            {/* Ambient glow */}
            <div className="nd-rocket-glow" />

            {/* Orbiting rings with satellites */}
            <div className="nd-rocket-orbit nd-rocket-orbit--1" />
            <div className="nd-rocket-orbit nd-rocket-orbit--2" />

            {/* Rocket */}
            <div className="nd-rocket">
              <svg className="nd-rocket__svg" viewBox="0 0 240 440" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="rk-body" x1="0" y1="0" x2="1" y2="0.4">
                    <stop offset="0" stopColor="#FFFFFF" />
                    <stop offset="0.55" stopColor="#EAEFF6" />
                    <stop offset="1" stopColor="#BCC6D6" />
                  </linearGradient>
                  <linearGradient id="rk-cone" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#FFAE6E" />
                    <stop offset="1" stopColor="#F23E26" />
                  </linearGradient>
                  <radialGradient id="rk-win" cx="0.38" cy="0.32" r="0.9">
                    <stop offset="0" stopColor="#DFF6FF" />
                    <stop offset="0.45" stopColor="#49B4D4" />
                    <stop offset="1" stopColor="#1C5C82" />
                  </radialGradient>
                  <linearGradient id="rk-flame" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#FFE8A6" />
                    <stop offset="0.45" stopColor="#FFB23E" />
                    <stop offset="1" stopColor="#F2542B" />
                  </linearGradient>
                </defs>

                {/* Flame */}
                <g className="nd-rocket__flame">
                  <path d="M120 286 C 88 332, 96 388, 120 416 C 144 388, 152 332, 120 286 Z" fill="url(#rk-flame)" />
                  <path d="M120 298 C 103 328, 107 364, 120 386 C 133 364, 137 328, 120 298 Z" fill="#FFC24D" />
                  <path d="M120 310 C 111 332, 114 358, 120 374 C 126 358, 129 332, 120 310 Z" fill="#FFF3C8" />
                </g>

                {/* Fins */}
                <path d="M78 238 C 46 260, 44 300, 62 318 L88 282 C 83 267, 80 252, 78 238 Z" fill="url(#rk-cone)" />
                <path d="M162 238 C 194 260, 196 300, 178 318 L152 282 C 157 267, 160 252, 162 238 Z" fill="url(#rk-cone)" />

                {/* Nozzle */}
                <path d="M99 260 L141 260 L133 290 L107 290 Z" fill="#5E6A80" />
                <rect x="103" y="255" width="34" height="9" rx="4" fill="#7E8AA0" />

                {/* Body */}
                <path d="M76 128 C 64 180, 64 226, 78 264 C 104 282, 136 282, 162 264 C 176 226, 176 180, 164 128 C 138 116, 102 116, 76 128 Z" fill="url(#rk-body)" />

                {/* Nose cone */}
                <path d="M120 28 C 146 60, 160 98, 164 132 C 138 120, 102 120, 76 132 C 80 98, 94 60, 120 28 Z" fill="url(#rk-cone)" />
                <path d="M120 28 C 132 46, 141 70, 147 96 C 138 92, 128 90, 120 90 Z" fill="#FFFFFF" opacity="0.18" />

                {/* Coral band */}
                <path d="M78 240 C 104 254, 136 254, 162 240 L160 260 C 136 270, 104 270, 80 260 Z" fill="url(#rk-cone)" opacity="0.92" />

                {/* Window */}
                <circle cx="120" cy="174" r="30" fill="url(#rk-win)" />
                <circle cx="120" cy="174" r="30" fill="none" stroke="#AEBCCE" strokeWidth="6" />
                <circle cx="120" cy="174" r="30" fill="none" stroke="#FFFFFF" strokeWidth="2" opacity="0.4" />
                <circle cx="109" cy="163" r="8" fill="#FFFFFF" opacity="0.7" />

                {/* Rivets */}
                <circle cx="120" cy="232" r="2.4" fill="#AAB4C4" />
                <circle cx="104" cy="234" r="2.4" fill="#AAB4C4" />
                <circle cx="136" cy="234" r="2.4" fill="#AAB4C4" />

                {/* Glossy highlight */}
                <path d="M92 138 C 83 184, 83 224, 92 258" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" opacity="0.5" fill="none" />
              </svg>
            </div>

            {/* Launched site mockup — "rocket = fast site launch" */}
            <div className="nd-launch-card">
              <div className="nd-launch-card__bar">
                <span className="nd-launch-dot" />
                <span className="nd-launch-dot" />
                <span className="nd-launch-dot" />
                <span className="nd-launch-card__url" />
              </div>
              <div className="nd-launch-card__body">
                <div className="nd-launch-card__col">
                  <div className="nd-launch-card__title">Запустим<br />ваш сайт</div>
                  <div className="nd-launch-line nd-launch-line--s" />
                  <div className="nd-launch-btn">Обсудить →</div>
                </div>
                <div className="nd-launch-card__img" />
              </div>
            </div>

            {/* Rising sparks */}
            <span className="nd-spark nd-spark--1" />
            <span className="nd-spark nd-spark--2" />
            <span className="nd-spark nd-spark--3" />
            <span className="nd-spark nd-spark--4" />
            <span className="nd-spark nd-spark--5" />
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
        {/* /stage */}

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
