import { useState } from "react";
import clsx from "clsx";
import { SectionHead } from "../../../../Components/SectionHead/SectionHead";
import { SlideIn } from "../../../../Components/SlideIn/SlideIn";
import { Button } from "../../../../Components/Button/Button";
import classes from "./FaqSection.module.css";

const FAQ_ITEMS = [
  { q: "Как вы делаете так быстро?", a: "Библиотека готовых шаблонов дизайна и проектных заготовок под типовые сайты плюс отлаженный процесс без долгого согласования ТЗ. Мы не начинаем с нуля — мы адаптируем проверенные решения под ваш проект." },
  { q: "Что если мне не понравится дизайн?", a: "1 цикл правок включён в стоимость каждого пакета. Дополнительные итерации — 159 Br за цикл. Наш опыт показывает, что первая версия дизайна устраивает в 90% случаев." },
  { q: "Какие материалы нужно подготовить?", a: "Нам понадобятся: текст для сайта, логотип (если есть) и фотографии. Если материалов нет — поможем с текстом и подберём стоковые изображения за дополнительную стоимость." },
  { q: "Вы делаете хостинг и поддержку?", a: "Да, опционально. Хостинг и деплой — 49 Br/мес. Поддержка и правки — 159 Br/мес. Можно взять только нужные услуги или отказаться от них." },
  { q: "Можно ли потом доработать сайт?", a: "Да — разовые доработки или ежемесячная поддержка. Также передаём доступы к CMS или исходному коду, чтобы вы могли работать с сайтом самостоятельно." },
  { q: "Какие технологии используете?", a: "Зависит от проекта: HTML/CSS/JS, React, Next.js, WordPress, Webflow и другие. Выбираем стек исходя из задачи, бюджета и требований к поддержке." },
  { q: "А если мне нужно что-то сложнее?", a: "Оценим индивидуально за 24 часа — просто оставьте заявку и опишите задачу. Если проект выходит за рамки стандартных форматов, подготовим отдельное коммерческое предложение." },
];

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number>(0);

  const toggle = (i: number) => setOpenIdx((prev) => (prev === i ? -1 : i));

  return (
    <section className={classes.faq} id="faq">
      <div className={classes.inner}>
        <SlideIn direction="bottom">
          <SectionHead label="FAQ" title="Частые вопросы" />
        </SlideIn>

        <div className={classes.list}>
          {FAQ_ITEMS.map((item, i) => (
            <SlideIn key={item.q} direction="bottom" delay={Math.min(i, 4) * 60}>
              <div className={clsx(classes.item, openIdx === i && classes.itemOpen)}>
                <button className={classes.itemBtn} onClick={() => toggle(i)} aria-expanded={openIdx === i}>
                  <span>{item.q}</span>
                  <span className={classes.itemIcon} aria-hidden="true">
                    ▾
                  </span>
                </button>
                <div className={classes.body} aria-hidden={openIdx !== i}>
                  <div className={classes.bodyInner}>
                    <p className={classes.answer}>{item.a}</p>
                  </div>
                </div>
              </div>
            </SlideIn>
          ))}
        </div>

        {/* CTA */}
        <SlideIn direction="bottom">
          <div className={classes.cta}>
            <p className={classes.ctaTitle}>Не нашли ответ на свой вопрос?</p>
            <p className={classes.ctaText}>Напишите нам — ответим быстро и без лишних слов</p>
            <Button href="#contact">Задать вопрос →</Button>
          </div>
        </SlideIn>
      </div>
    </section>
  );
}
FaqSection.displayName = "FaqSection";
