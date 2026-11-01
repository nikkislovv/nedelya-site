import { useEffect, useRef, useState, type CSSProperties, type FocusEvent } from "react";
import clsx from "clsx";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "motion/react";
import { SectionHead } from "../../../../Components/SectionHead/SectionHead";
import { SlideIn } from "../../../../Components/SlideIn/SlideIn";
import { Button } from "../../../../Components/Button/Button";
import { CASES } from "./cases";
import classes from "./PortfolioSection.module.css";

/** Autoplay step, ms. Progress bar on the active tile drives the switch via animationend. */
const AUTOPLAY_MS = 8000;
const FEATURE_ID = "portfolio-feature";

const pad = (n: number) => String(n).padStart(2, "0");

const copy: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.12 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.25, ease: [0.4, 0, 1, 1] } },
};
const line: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export function PortfolioSection() {
  const reduceMotion = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  /** Autoplay stops for good once the visitor picks a case themselves. */
  const [userPicked, setUserPicked] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Mobile: the rail is a scroll strip — keep the active tile in view without moving the page.
  useEffect(() => {
    const rail = railRef.current;
    const tile = rail?.children[active] as HTMLElement | undefined;
    if (!rail || !tile || rail.scrollWidth <= rail.clientWidth) return;
    rail.scrollTo({ left: tile.offsetLeft - 20, behavior: "smooth" });
  }, [active]);

  const autoplay = !reduceMotion && !userPicked;
  const paused = !inView || hovered || focused;
  const current = CASES[active];

  const pick = (i: number) => {
    setUserPicked(true);
    setActive(i);
  };

  const onBlur = (e: FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setFocused(false);
  };

  return (
    <section className={classes.portfolio} id="portfolio">
      <div className={classes.inner}>
        <SlideIn direction="bottom">
          <SectionHead
            label="Портфолио"
            title="Наши работы"
            subtitle="Сайты, которые мы запустили для бизнеса в Беларуси — от промышленного B2B до личного бренда."
          />
        </SlideIn>

        <SlideIn direction="bottom" delay={100}>
          <div
            ref={rootRef}
            className={clsx(classes.showcase, reduceMotion && classes.still)}
            style={{ "--case-accent": current.accent, "--autoplay": `${AUTOPLAY_MS}ms` } as CSSProperties}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onFocus={() => setFocused(true)}
            onBlur={onBlur}
          >
            {/* ---- Billboard ---- */}
            <div className={classes.stage}>
              <div className={classes.backdrop} aria-hidden="true">
                {CASES.map((c, i) => (
                  <img
                    key={c.id}
                    className={clsx(classes.backdropImg, i === active && classes.backdropActive)}
                    src={c.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                ))}
              </div>
              <div className={classes.glow} aria-hidden="true" />

              <div className={classes.frame} aria-hidden="true">
                <div className={classes.frameBar}>
                  <span className={classes.frameDots}>
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className={classes.frameUrl}>{current.domain}</span>
                </div>
                <div className={classes.frameShot}>
                  {CASES.map((c, i) => (
                    <img
                      key={c.id}
                      className={clsx(classes.frameImg, i === active && classes.frameImgActive)}
                      src={c.image}
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                  ))}
                </div>
              </div>

              <div
                id={FEATURE_ID}
                className={classes.feature}
                role="region"
                aria-roledescription="слайд"
                aria-label={`${current.name}, проект ${active + 1} из ${CASES.length}`}
                aria-live={autoplay ? "off" : "polite"}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={current.id}
                    className={classes.copy}
                    variants={copy}
                    initial={reduceMotion ? false : "hidden"}
                    animate="show"
                    exit={reduceMotion ? undefined : "exit"}
                  >
                    <motion.p className={classes.eyebrow} variants={line}>
                      <span className={classes.dot} aria-hidden="true" />
                      {current.industry}
                    </motion.p>
                    <motion.h3 className={classes.name} variants={line}>
                      {current.name}
                    </motion.h3>
                    <motion.p className={classes.meta} variants={line}>
                      <span>{current.format}</span>
                      <span className={classes.sep} aria-hidden="true" />
                      <span>{current.domain}</span>
                    </motion.p>
                    <motion.div className={classes.actions} variants={line}>
                      <Button
                        href={`https://${current.domain}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="lg"
                      >
                        Открыть сайт <span aria-hidden="true">↗</span>
                      </Button>
                      <span className={classes.counter} aria-hidden="true">
                        <b>{pad(active + 1)}</b> / {pad(CASES.length)}
                      </span>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* ---- Case picker ---- */}
            <div ref={railRef} className={classes.rail} role="group" aria-label="Выбор проекта">
              {CASES.map((c, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={c.id}
                    type="button"
                    className={clsx(classes.tile, isActive && classes.tileActive)}
                    style={{ "--tile-accent": c.accent } as CSSProperties}
                    aria-pressed={isActive}
                    aria-controls={FEATURE_ID}
                    onClick={() => pick(i)}
                  >
                    <span className={classes.thumb}>
                      <img src={c.image} alt="" loading="lazy" decoding="async" />
                    </span>
                    <span className={classes.tileInfo}>
                      <span className={classes.tileIndex}>{pad(i + 1)}</span>
                      <span className={classes.tileName}>{c.name}</span>
                      <span className={classes.tileIndustry}>{c.industry}</span>
                    </span>
                    {isActive && autoplay && (
                      <span className={classes.progress} aria-hidden="true">
                        <span
                          key={c.id}
                          className={classes.progressBar}
                          style={{ animationPlayState: paused ? "paused" : "running" }}
                          onAnimationEnd={() => setActive((a) => (a + 1) % CASES.length)}
                        />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </SlideIn>
      </div>
    </section>
  );
}
PortfolioSection.displayName = "PortfolioSection";
