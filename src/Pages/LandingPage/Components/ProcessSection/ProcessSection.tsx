import clsx from "clsx";
import { SectionHead } from "../../../../Components/SectionHead/SectionHead";
import { SlideIn } from "../../../../Components/SlideIn/SlideIn";
import classes from "./ProcessSection.module.css";

const STEPS = [
  {
    num: "01",
    title: "Заявка и бриф",
    desc: "Вы оставляете заявку → связываемся в течение 24 часов → за 15-минутный созвон определяем тип, объём и сроки.",
    tone: "glass",
  },
  {
    num: "02",
    title: "Дизайн за 1–3 дня",
    desc: "Отправляем первую версию дизайна на основе готовых шаблонов. 1 цикл правок уже включён.",
    tone: "accent",
  },
  {
    num: "03",
    title: "Разработка и запуск",
    desc: "Собираем сайт, наполняем контентом, деплоим. Передаём доступы и короткую инструкцию.",
    tone: "deep",
  },
] as const;

export function ProcessSection() {
  return (
    <section className={classes.process} id="process">
      <div className={classes.inner}>
        <SlideIn direction="bottom">
          <SectionHead label="Процесс" title="3 шага до готового сайта" />
        </SlideIn>

        <div className={classes.list}>
          {STEPS.map((step, i) => (
            <SlideIn
              key={step.num}
              direction="bottom"
              delay={i * 110}
              className={clsx(classes.card, classes[step.tone])}
            >
              <span className={classes.cardNum} aria-hidden="true">
                {step.num}
              </span>
              <div className={classes.copy}>
                <h3 className={classes.cardTitle}>{step.title}</h3>
                <p className={classes.cardDesc}>{step.desc}</p>
              </div>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
}
ProcessSection.displayName = "ProcessSection";
