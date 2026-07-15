import { useState, useEffect } from "react";
import clsx from "clsx";
import { SectionHead } from "../../../../Components/SectionHead/SectionHead";
import { SlideIn } from "../../../../Components/SlideIn/SlideIn";
import classes from "./PortfolioSection.module.css";

const ITEMS = [
  { id: 1, title: "Шаблон лендинга", type: "Лендинг", img: "https://images.unsplash.com/photo-1648134859175-78b41b4db186?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900" },
  { id: 2, title: "Шаблон портфолио", type: "Портфолио", img: "https://images.unsplash.com/photo-1634084462412-b54873c0a56d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900" },
  { id: 3, title: "Шаблон интернет-магазина", type: "Интернет-магазин", img: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900" },
  { id: 4, title: "Шаблон сайта услуг", type: "Сайт услуг", img: "https://images.unsplash.com/photo-1657812159055-7bae416f386d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900" },
  { id: 5, title: "Шаблон сайта мероприятия", type: "Сайт мероприятия", img: "https://images.unsplash.com/photo-1642132652798-ae887edb9e9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900" },
  { id: 6, title: "Шаблон блога", type: "Блог / контент-сайт", img: "https://images.unsplash.com/photo-1530435460869-d13625c69bbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900" },
];

export function PortfolioSection() {
  const [lb, setLb] = useState<{ open: boolean; idx: number }>({ open: false, idx: 0 });

  const open = (idx: number) => setLb({ open: true, idx });
  const close = () => setLb((s) => ({ ...s, open: false }));
  const prev = () => setLb((s) => ({ ...s, idx: (s.idx - 1 + ITEMS.length) % ITEMS.length }));
  const next = () => setLb((s) => ({ ...s, idx: (s.idx + 1) % ITEMS.length }));

  /* keyboard navigation */
  useEffect(() => {
    if (!lb.open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [lb.open, lb.idx]);

  /* body scroll lock */
  useEffect(() => {
    document.body.style.overflow = lb.open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lb.open]);

  const current = ITEMS[lb.idx];

  return (
    <section className={classes.portfolio} id="portfolio">
      <div className={classes.inner}>
        <SlideIn direction="bottom">
          <SectionHead
            label="Примеры работ"
            title="Наши стартовые шаблоны"
            subtitle="С них начинается каждый проект — красивые заготовки под реальные задачи"
          />
        </SlideIn>

        <div className={classes.grid}>
          {ITEMS.map((item, i) => (
            <SlideIn key={item.id} direction="bottom" delay={(i % 3) * 90}>
              <div
                className={classes.card}
                onClick={() => open(i)}
                role="button"
                tabIndex={0}
                aria-label={`Открыть ${item.title}`}
                onKeyDown={(e) => e.key === "Enter" && open(i)}
              >
                <div className={classes.imgWrap}>
                  <img src={item.img} alt={item.title} className={classes.img} loading="lazy" />
                  <div className={classes.overlay}>
                    <button className={classes.overlayBtn}>🔍 Посмотреть</button>
                  </div>
                  <span className={classes.badge}>Демо-шаблон</span>
                </div>
                <div className={classes.body}>
                  <div>
                    <div className={classes.title}>{item.title}</div>
                    <div className={classes.type}>{item.type}</div>
                  </div>
                  <span className={classes.link}>Посмотреть демо</span>
                </div>
              </div>
            </SlideIn>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lb.open && (
        <div className={classes.lightbox} role="dialog" aria-modal="true" aria-label="Просмотр шаблона">
          <div className={classes.lbOverlay} onClick={close} />
          <div className={classes.lbContent}>
            <button className={classes.lbClose} onClick={close} aria-label="Закрыть">
              ✕
            </button>
            <button className={clsx(classes.lbNav, classes.lbNavPrev)} onClick={prev} aria-label="Предыдущий">
              ‹
            </button>
            <button className={clsx(classes.lbNav, classes.lbNavNext)} onClick={next} aria-label="Следующий">
              ›
            </button>

            <div className={classes.lbImgWrap}>
              <img src={current.img} alt={current.title} className={classes.lbImg} />
            </div>
            <div className={classes.lbFooter}>
              <div>
                <div className={classes.lbTitle}>{current.title}</div>
                <div className={classes.lbType}>{current.type}</div>
              </div>
              <div className={classes.lbCounter}>
                {lb.idx + 1} / {ITEMS.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
PortfolioSection.displayName = "PortfolioSection";
