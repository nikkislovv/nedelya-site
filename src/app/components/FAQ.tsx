import { useState } from 'react';

const FAQ_ITEMS = [
  {
    q: 'Как вы делаете так быстро?',
    a: 'Библиотека готовых шаблонов дизайна и проектных заготовок под типовые сайты плюс отлаженный процесс без долгого согласования ТЗ. Мы не начинаем с нуля — мы адаптируем проверенные решения под ваш проект.',
  },
  {
    q: 'Что если мне не понравится дизайн?',
    a: '1 цикл правок включён в стоимость каждого пакета. Дополнительные итерации — $49 за цикл. Наш опыт показывает, что первая версия дизайна устраивает в 90% случаев.',
  },
  {
    q: 'Какие материалы нужно подготовить?',
    a: 'Нам понадобятся: текст для сайта, логотип (если есть) и фотографии. Если материалов нет — поможем с текстом и подберём стоковые изображения за дополнительную стоимость.',
  },
  {
    q: 'Вы делаете хостинг и поддержку?',
    a: 'Да, опционально. Хостинг и деплой — $15/мес. Поддержка и правки — $49/мес. Можно взять только нужные услуги или отказаться от них.',
  },
  {
    q: 'Можно ли потом доработать сайт?',
    a: 'Да — разовые доработки или ежемесячная поддержка. Также передаём доступы к CMS или исходному коду, чтобы вы могли работать с сайтом самостоятельно.',
  },
  {
    q: 'Какие технологии используете?',
    a: 'Зависит от проекта: HTML/CSS/JS, React, Next.js, WordPress, Webflow и другие. Выбираем стек исходя из задачи, бюджета и требований к поддержке.',
  },
  {
    q: 'А если мне нужно что-то сложнее?',
    a: 'Оценим индивидуально за 24 часа — просто оставьте заявку и опишите задачу. Если проект выходит за рамки стандартных форматов, подготовим отдельное коммерческое предложение.',
  },
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number>(0);

  const toggle = (i: number) => setOpenIdx(prev => (prev === i ? -1 : i));

  return (
    <section className="nd-faq-section" id="faq">
      <div className="nd-container">
        <div className="nd-section-head nd-anim">
          <div className="nd-label">FAQ</div>
          <h2>Частые вопросы</h2>
        </div>

        <div className="nd-faq-list nd-anim">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={i}
              className={`nd-faq-item${openIdx === i ? ' nd-faq-item--open' : ''}`}
            >
              <button
                className="nd-faq-item__btn"
                onClick={() => toggle(i)}
                aria-expanded={openIdx === i}
              >
                <span>{item.q}</span>
                <span className="nd-faq-item__icon" aria-hidden="true">▾</span>
              </button>
              <div className="nd-faq-item__body" aria-hidden={openIdx !== i}>
                <div className="nd-faq-item__body-inner">
                  <p className="nd-faq-item__answer">{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA под FAQ */}
        <div
          className="nd-anim"
          style={{
            textAlign: 'center',
            marginTop: 56,
            padding: '40px 32px',
            background: 'var(--bg-alt)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border)',
          }}
        >
          <p style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>
            Не нашли ответ на свой вопрос?
          </p>
          <p style={{ color: 'var(--text-sec)', marginBottom: 24, fontSize: 15 }}>
            Напишите нам — ответим быстро и без лишних слов
          </p>
          <a href="#contact" className="nd-btn nd-btn--accent">
            Задать вопрос →
          </a>
        </div>
      </div>
    </section>
  );
}