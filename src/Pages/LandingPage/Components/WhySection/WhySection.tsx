import type { ReactNode } from "react";
import { SectionHead } from "../../../../Components/SectionHead/SectionHead";
import { SlideIn } from "../../../../Components/SlideIn/SlideIn";
import classes from "./WhySection.module.css";

type TGuarantee = { icon: ReactNode; title: string; desc: string };

const S = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" } as const;

const GUARANTEES: TGuarantee[] = [
  {
    title: "Фикс-цена в договоре",
    desc: "Стоимость известна заранее. Никаких доплат «по ходу» — что согласовали, то и платите.",
    icon: (
      <svg viewBox="0 0 24 24" {...S}>
        <path d="M6 3h9l4 4v14H6z" />
        <path d="M14 3v4h4M9 13h6M9 17h6M9 9h3" />
      </svg>
    ),
  },
  {
    title: "Запуск за неделю",
    desc: "Большинство сайтов готовы примерно за неделю. Срок фиксируем в договоре и держим.",
    icon: (
      <svg viewBox="0 0 24 24" {...S}>
        <circle cx="12" cy="13" r="8" />
        <path d="M12 9v4l2.5 2.5M9 2h6" />
      </svg>
    ),
  },
  {
    title: "3 цикла правок включены",
    desc: "Доводим до результата, а не бросаем на первой версии. Три круга правок уже в цене.",
    icon: (
      <svg viewBox="0 0 24 24" {...S}>
        <path d="M20 11a8 8 0 1 0-2.3 5.7" />
        <path d="M20 5v6h-6" />
      </svg>
    ),
  },
  {
    title: "Полгода хостинга в подарок",
    desc: "Публикуем сайт и первые полгода держим онлайн за наш счёт. Дальше — по желанию.",
    icon: (
      <svg viewBox="0 0 24 24" {...S}>
        <path d="M20 12v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8" />
        <path d="M2 7h20v5H2z" />
        <path d="M12 21V7" />
        <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
        <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
      </svg>
    ),
  },
  {
    title: "Поддержка после запуска",
    desc: "Правки, обновления и новые блоки по мере роста — по договорённости. Не пропадём после сдачи.",
    icon: (
      <svg viewBox="0 0 24 24" {...S}>
        <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Без раздутого ТЗ",
    desc: "Короткий бриф вместо месяцев согласований. Стартуем с проверенных заготовок под вашу задачу.",
    icon: (
      <svg viewBox="0 0 24 24" {...S}>
        <path d="M13 3L5 13h6l-1 8 8-10h-6z" />
      </svg>
    ),
  },
];

export function WhySection() {
  return (
    <section className={classes.why} id="why">
      <div className={classes.inner}>
        <SlideIn direction="bottom">
          <SectionHead
            label="Почему мы"
            title="Почему с нами спокойно"
            subtitle="Все условия фиксируем в договоре заранее — вы точно знаете, что, когда и за сколько получите."
          />
        </SlideIn>

        <div className={classes.grid}>
          {GUARANTEES.map((g, i) => (
            <SlideIn key={g.title} direction="bottom" delay={(i % 3) * 90}>
              <article className={classes.card}>
                <span className={classes.icon}>{g.icon}</span>
                <h3 className={classes.cardTitle}>{g.title}</h3>
                <p className={classes.cardDesc}>{g.desc}</p>
              </article>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
}
WhySection.displayName = "WhySection";
