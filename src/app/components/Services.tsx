interface Service {
  id: number;
  icon: string;
  title: string;
  sub: string;
  timing: { label: string; value: string }[];
  total: string;
  price: string;
}

const SERVICES: Service[] = [
  {
    id: 1, icon: '🪪',
    title: 'Сайт-визитка', sub: '1–5 страниц',
    timing: [{ label: 'Дизайн', value: '2 дня' }, { label: 'Разработка', value: '3 дня' }, { label: 'Деплой', value: '1 день' }],
    total: '~5 дней', price: 'от $299',
  },
  {
    id: 2, icon: '🚀',
    title: 'Лендинг', sub: 'одностраничник',
    timing: [{ label: 'Дизайн', value: '2 дня' }, { label: 'Разработка', value: '2 дня' }, { label: 'Деплой', value: '1 день' }],
    total: '~5 дней', price: 'от $249',
  },
  {
    id: 3, icon: '🎨',
    title: 'Портфолио', sub: 'для фрилансера или студии',
    timing: [{ label: 'Дизайн', value: '2 дня' }, { label: 'Разработка', value: '3 дня' }, { label: 'Деплой', value: '1 день' }],
    total: '~5 дней', price: 'от $299',
  },
  {
    id: 4, icon: '📅',
    title: 'Сайт мероприятия', sub: 'конференция, вебинар, event',
    timing: [{ label: 'Дизайн', value: '1 день' }, { label: 'Разработка', value: '2 дня' }, { label: 'Деплой', value: '1 день' }],
    total: '~4 дня', price: 'от $199',
  },
  {
    id: 5, icon: '✍️',
    title: 'Блог / контент-сайт', sub: 'статьи, медиа, журнал',
    timing: [{ label: 'Дизайн', value: '2 дня' }, { label: 'Разработка', value: '4 дня' }, { label: 'Деплой', value: '1 день' }],
    total: '~7 дней', price: 'от $349',
  },
  {
    id: 6, icon: '🏪',
    title: 'Сайт услуг', sub: 'клиника, салон, ремонт',
    timing: [{ label: 'Дизайн', value: '2 дня' }, { label: 'Разработка', value: '5 дней' }, { label: 'Деплой', value: '1 день' }],
    total: '~8 дней', price: 'от $449',
  },
  {
    id: 7, icon: '🛍️',
    title: 'Каталог / витрина', sub: 'без функции оплаты',
    timing: [{ label: 'Дизайн', value: '3 дня' }, { label: 'Разработка', value: '5 дней' }, { label: 'Деплой', value: '1 день' }],
    total: '~9 дней', price: 'от $549',
  },
  {
    id: 8, icon: '🛒',
    title: 'Интернет-магазин', sub: 'до 100 товаров',
    timing: [{ label: 'Дизайн', value: '3 дня' }, { label: 'Разработка', value: '6 дней' }, { label: 'Деплой', value: '1 день' }],
    total: '~10 дней', price: 'от $699',
  },
  {
    id: 9, icon: '🖌️',
    title: 'Только дизайн', sub: 'макет без разработки',
    timing: [{ label: 'Дизайн', value: '3–5 дней' }, { label: 'Разработка', value: '—' }, { label: 'Деплой', value: '—' }],
    total: '3–5 дней', price: 'от $199',
  },
  {
    id: 10, icon: '💻',
    title: 'Разработка по дизайну', sub: 'по вашему готовому макету',
    timing: [{ label: 'Дизайн', value: '—' }, { label: 'Разработка', value: '3–7 дней' }, { label: 'Деплой', value: '1 день' }],
    total: '3–7 дней', price: 'от $299',
  },
];

export function Services() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="nd-services" id="services">
      <div className="nd-container">
        <div className="nd-section-head nd-anim">
          <div className="nd-label">Услуги и цены</div>
          <h2>Что мы делаем</h2>
          <p>Выберите тип проекта — мы оценим сроки и стоимость за 24 часа</p>
        </div>

        <div className="nd-services-grid">
          {SERVICES.map((svc, i) => (
            <div
              key={svc.id}
              className={`nd-svc-card nd-anim nd-anim--d${Math.min((i % 3) + 1, 5)}`}
            >
              <div className="nd-svc-card__icon">{svc.icon}</div>
              <div className="nd-svc-card__title">{svc.title}</div>
              <div className="nd-svc-card__sub">{svc.sub}</div>

              <div className="nd-svc-card__timing">
                {svc.timing.map(t => (
                  <div key={t.label} className="nd-svc-card__row">
                    <span className="nd-svc-card__row-label">{t.label}</span>
                    <span className="nd-svc-card__row-val">{t.value}</span>
                  </div>
                ))}
                <div className="nd-svc-card__total">Итого: {svc.total}</div>
              </div>

              <div className="nd-svc-card__price">{svc.price}</div>

              <button className="nd-svc-card__btn" onClick={scrollToContact}>
                Заказать
              </button>
            </div>
          ))}
        </div>

        {/* Optional addons footnote */}
        <div className="nd-addons-note nd-anim">
          <div className="nd-addons-note__label">
            <span className="nd-addons-note__asterisk">*</span>
            Опциональные дополнения — подключаются по необходимос��и:
          </div>
          <div className="nd-addons">
            <div className="nd-addon">
              <span>🌐</span>
              <span className="nd-addon__lbl">Хостинг и деплой</span>
              <span className="nd-addon__price">$15/мес</span>
            </div>
            <div className="nd-addon">
              <span>🔧</span>
              <span className="nd-addon__lbl">Поддержка и правки</span>
              <span className="nd-addon__price">$49/мес</span>
            </div>
            <div className="nd-addon">
              <span>🔄</span>
              <span className="nd-addon__lbl">Доп. цикл правок</span>
              <span className="nd-addon__price">$49</span>
            </div>
          </div>
        </div>

        {/* Custom / non-standard CTA */}
        <div className="nd-svc-custom nd-anim">
          <div className="nd-svc-custom__text">
            <div className="nd-svc-custom__title">Нужно что-то нестандартное?</div>
            <div className="nd-svc-custom__desc">
              MVP, микро-SaaS или особая задача — оценим индивидуально за 24 часа
            </div>
          </div>
          <button className="nd-btn nd-btn--accent" onClick={scrollToContact}>
            Обсудить проект →
          </button>
        </div>
      </div>
    </section>
  );
}