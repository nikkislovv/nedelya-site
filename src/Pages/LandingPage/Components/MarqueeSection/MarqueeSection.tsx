import { Fragment } from "react";
import classes from "./MarqueeSection.module.css";

const ITEMS = [
  "Лендинги",
  "Сайты-визитки",
  "Интернет-магазины",
  "Портфолио",
  "Блоги",
  "Сайты услуг",
  "Каталоги",
  "Сайты мероприятий",
];

/** Seamless running strip of the site types we build (reference: partners marquee). */
export function MarqueeSection() {
  // Rendered twice for a seamless -50% loop.
  const sequence = [...ITEMS, ...ITEMS];

  return (
    <section className={classes.marquee} aria-label="Типы сайтов, которые мы делаем">
      <div className={classes.track}>
        {sequence.map((item, i) => (
          <Fragment key={i}>
            <span className={classes.sep} aria-hidden="true">
              ✦
            </span>
            <span className={classes.item}>{item}</span>
          </Fragment>
        ))}
        <span className={classes.sep} aria-hidden="true">
          ✦
        </span>
      </div>
    </section>
  );
}
MarqueeSection.displayName = "MarqueeSection";
