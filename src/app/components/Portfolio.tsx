import { useState, useEffect } from 'react';

const ITEMS = [
  {
    id: 1,
    title: 'Шаблон лендинга',
    type: 'Лендинг',
    img: 'https://images.unsplash.com/photo-1648134859175-78b41b4db186?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900',
  },
  {
    id: 2,
    title: 'Шаблон портфолио',
    type: 'Портфолио',
    img: 'https://images.unsplash.com/photo-1634084462412-b54873c0a56d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900',
  },
  {
    id: 3,
    title: 'Шаблон интернет-магазина',
    type: 'Интернет-магазин',
    img: 'https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900',
  },
  {
    id: 4,
    title: 'Шаблон сайта услуг',
    type: 'Сайт услуг',
    img: 'https://images.unsplash.com/photo-1657812159055-7bae416f386d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900',
  },
  {
    id: 5,
    title: 'Шаблон сайта мероприятия',
    type: 'Сайт мероприятия',
    img: 'https://images.unsplash.com/photo-1642132652798-ae887edb9e9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900',
  },
  {
    id: 6,
    title: 'Шаблон блога',
    type: 'Блог / контент-сайт',
    img: 'https://images.unsplash.com/photo-1530435460869-d13625c69bbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900',
  },
];

export function Portfolio() {
  const [lb, setLb] = useState<{ open: boolean; idx: number }>({ open: false, idx: 0 });

  const open = (idx: number) => setLb({ open: true, idx });
  const close = () => setLb(s => ({ ...s, open: false }));
  const prev  = () => setLb(s => ({ ...s, idx: (s.idx - 1 + ITEMS.length) % ITEMS.length }));
  const next  = () => setLb(s => ({ ...s, idx: (s.idx + 1) % ITEMS.length }));

  /* keyboard navigation */
  useEffect(() => {
    if (!lb.open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape')     close();
      if (e.key === 'ArrowLeft')  prev();
      if (e.key === 'ArrowRight') next();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [lb.open, lb.idx]);

  /* body scroll lock */
  useEffect(() => {
    document.body.style.overflow = lb.open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lb.open]);

  const current = ITEMS[lb.idx];

  return (
    <section className="nd-portfolio" id="portfolio">
      <div className="nd-container">
        <div className="nd-section-head nd-anim">
          <div className="nd-label">Примеры работ</div>
          <h2>Наши стартовые шаблоны</h2>
          <p>С них начинается каждый проект — красивые заготовки под реальные задачи</p>
        </div>

        <div className="nd-portfolio-grid">
          {ITEMS.map((item, i) => (
            <div
              key={item.id}
              className={`nd-pf-card nd-anim nd-anim--d${Math.min(i + 1, 5)}`}
              onClick={() => open(i)}
              role="button"
              tabIndex={0}
              aria-label={`Открыть ${item.title}`}
              onKeyDown={e => e.key === 'Enter' && open(i)}
            >
              <div className="nd-pf-card__img-wrap">
                <img
                  src={item.img}
                  alt={item.title}
                  className="nd-pf-card__img"
                  loading="lazy"
                />
                <div className="nd-pf-card__overlay">
                  <button className="nd-pf-card__overlay-btn">🔍 Посмотреть</button>
                </div>
                <span className="nd-pf-card__badge">Демо-шаблон</span>
              </div>
              <div className="nd-pf-card__body">
                <div className="nd-pf-card__info">
                  <div className="nd-pf-card__title">{item.title}</div>
                  <div className="nd-pf-card__type">{item.type}</div>
                </div>
                <span className="nd-pf-card__link">Посмотреть демо</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ---- Lightbox ---- */}
      {lb.open && (
        <div className="nd-lightbox" role="dialog" aria-modal="true" aria-label="Просмотр шаблона">
          <div className="nd-lb-overlay" onClick={close} />
          <div className="nd-lb-content">
            <button className="nd-lb-close" onClick={close} aria-label="Закрыть">✕</button>
            <button className="nd-lb-nav nd-lb-nav--prev" onClick={prev} aria-label="Предыдущий">‹</button>
            <button className="nd-lb-nav nd-lb-nav--next" onClick={next} aria-label="Следующий">›</button>

            <div className="nd-lb-img-wrap">
              <img
                src={current.img}
                alt={current.title}
                className="nd-lb-img"
              />
            </div>
            <div className="nd-lb-footer">
              <div>
                <div className="nd-lb-title">{current.title}</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginTop: 3 }}>
                  {current.type}
                </div>
              </div>
              <div className="nd-lb-counter">
                {lb.idx + 1} / {ITEMS.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}