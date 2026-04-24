const STEPS = [
  {
    num: '01',
    title: 'Заявка и бриф',
    desc: 'Вы оставляете заявку → мы связываемся в течение 24ч → за 15-минутный созвон определяем тип, объём и сроки.',
    active: true,
  },
  {
    num: '02',
    title: 'Дизайн за 1–3 дня',
    desc: 'Отправляем первую версию дизайна на основе готовых шаблонов. 1 цикл правок включён.',
    active: false,
  },
  {
    num: '03',
    title: 'Разработка и запуск',
    desc: 'Собираем сайт, наполняем контентом, деплоим. Передаём доступы и инструкцию.',
    active: false,
  },
];

export function Process() {
  return (
    <section className="nd-process" id="process">
      <div className="nd-container">
        <div className="nd-section-head nd-anim">
          <div className="nd-label">Процесс</div>
          <h2>3 шага до готового сайта</h2>
        </div>

        <div className="nd-timeline">
          {STEPS.map((step, i) => (
            <div
              key={step.num}
              className={`nd-step${step.active ? ' nd-step--active' : ''} nd-anim nd-anim--d${i + 1}`}
            >
              <div className="nd-step__circle">
                <span className="nd-step__num">{step.num}</span>
              </div>
              <div className="nd-step__content">
                <div className="nd-step__title">{step.title}</div>
                <p className="nd-step__desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
