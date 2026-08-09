import { useEffect, useState, type CSSProperties } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { NICHES } from "./niches";
import { SCENE_CONTAINER } from "./niches/sceneMotion";
import classes from "./NicheGallery.module.css";

const SPRING = { type: "spring", stiffness: 260, damping: 30 } as const;
const cardV = { rest: { y: 0 }, hover: { y: -6 } };

export function NicheGallery() {
  const [openId, setOpenId] = useState<string | null>(null);
  const reduce = useReducedMotion();

  const active = NICHES.find((n) => n.id === openId) ?? null;
  const close = () => setOpenId(null);

  /* Esc to close + scroll lock while a concept is open */
  useEffect(() => {
    if (!openId) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openId]);

  return (
    <>
      <div className={classes.grid}>
        {NICHES.map((niche) => (
          <motion.button
            key={niche.id}
            layoutId={`niche-${niche.id}`}
            className={classes.tile}
            style={{ ["--niche-accent" as string]: niche.accent } as CSSProperties}
            onClick={() => setOpenId(niche.id)}
            variants={cardV}
            initial="rest"
            animate="rest"
            whileHover={reduce ? undefined : "hover"}
            transition={SPRING}
            aria-label={`Открыть концепт: ${niche.name} ${niche.nameAccent}`}
          >
            <span className={classes.ghostIndex} aria-hidden="true">
              {niche.index}
            </span>
            <span className={classes.glow} aria-hidden="true" />

            <motion.span className={classes.scene} variants={SCENE_CONTAINER}>
              <niche.Scene />
            </motion.span>

            <span className={classes.nameLock}>
              <span className={classes.eyebrow}>{niche.eyebrow}</span>
              <span className={classes.name}>
                {niche.name} <i className={classes.nameAccent}>{niche.nameAccent}</i>
              </span>
              <span className={classes.rule} />
              <span className={classes.cta}>
                Смотреть макет <span className={classes.arrow}>→</span>
              </span>
            </span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <div className={classes.overlay}>
            <motion.div
              className={classes.backdrop}
              onClick={close}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              layoutId={`niche-${active.id}`}
              className={classes.modal}
              transition={SPRING}
              role="dialog"
              aria-modal="true"
              aria-label={`Концепт: ${active.name} ${active.nameAccent}`}
            >
              <button className={classes.close} onClick={close} aria-label="Закрыть">
                ✕
              </button>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: reduce ? 0 : 0.14, duration: 0.3 }}
              >
                <active.Concept />
              </motion.div>
              <div className={classes.modalFoot}>
                <span className={classes.footLabel}>
                  {active.name} {active.nameAccent} · <span>{active.format}</span> · демо-концепт
                </span>
                <button className={classes.footClose} onClick={close}>
                  Закрыть
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
NicheGallery.displayName = "NicheGallery";
