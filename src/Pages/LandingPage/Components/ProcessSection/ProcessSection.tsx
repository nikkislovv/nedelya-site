import clsx from "clsx";
import { SectionHead } from "../../../../Components/SectionHead/SectionHead";
import { SlideIn } from "../../../../Components/SlideIn/SlideIn";
import classes from "./ProcessSection.module.css";

const STEPS = [
  {
    num: "01",
    title: "Заявка и состав работ",
    desc: "Вы оставляете заявку, мы связываемся. Присылаем список «что входит» — чтобы вы подтвердили объём до оплаты — и короткий бриф с вопросами.",
    tone: "glass",
  },
  {
    num: "02",
    title: "Бриф и материалы",
    desc: "Заполняете бриф и передаёте материалы: тексты, фото, логотип, домен. Есть своё техзадание или пример сайта, который нравится — тоже присылаете. Пока ждём материалы, сроки сдвигаются на столько же.",
    tone: "deep",
  },
  {
    num: "03",
    title: "Согласование стиля и объёма",
    desc: "Готового дизайна нет — показываем 2–3 примера оформления и палитру, вы выбираете и утверждаете стиль. Есть техзадание — согласуем состав и стоимость. Всё фиксируем письменно.",
    tone: "glass",
  },
  {
    num: "04",
    title: "Приступаем к работе",
    desc: "Стиль выбран, материалы собраны, объём согласован — начинаем собирать ваш сайт.",
    tone: "accent",
  },
] as const;

export function ProcessSection() {
  return (
    <section className={classes.process} id="process">
      <div className={classes.inner}>
        <SlideIn direction="bottom">
          <SectionHead label="Процесс" title="Как мы начинаем работу" />
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
