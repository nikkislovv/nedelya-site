import { useId } from "react";
import { motion } from "motion/react";
import { SCENE_ITEM } from "./sceneMotion";
import ed from "./Education.module.css";

/* ---------- Hover vignette objects ---------- */

function Mortarboard({ className }: { className?: string }) {
  const uid = useId();
  const cap = `${uid}-c`;
  return (
    <svg className={className} viewBox="0 0 112 92" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={cap} x1="20" y1="18" x2="90" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8B7BF0" />
          <stop offset="1" stopColor="#4A38B8" />
        </linearGradient>
      </defs>
      {/* head band */}
      <path d="M34 48 L78 48 L78 66 q0 10 -22 10 q-22 0 -22 -10 Z" fill="#5A46C4" />
      {/* mortarboard top */}
      <path d="M56 24 L104 40 L56 56 L8 40 Z" fill={`url(#${cap})`} />
      <path d="M56 40 L104 40 L56 48 L8 40 Z" fill="#000000" opacity="0.12" />
      {/* button + tassel */}
      <circle cx="56" cy="40" r="4" fill="#B7E84F" />
      <path d="M56 40 L92 46 L92 72" stroke="#B7E84F" strokeWidth="2.4" fill="none" />
      <path d="M92 72 l-4 12 h8 z" fill="#B7E84F" />
    </svg>
  );
}

function Book({ className }: { className?: string }) {
  const uid = useId();
  const cover = `${uid}-cv`;
  return (
    <svg className={className} viewBox="0 0 96 84" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={cover} x1="10" y1="14" x2="86" y2="70" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8B7BF0" />
          <stop offset="1" stopColor="#4A38B8" />
        </linearGradient>
      </defs>
      {/* pages */}
      <path d="M48 20 C36 12 20 12 10 16 L10 68 C20 64 36 64 48 72 C60 64 76 64 86 68 L86 16 C76 12 60 12 48 20 Z" fill="#fff" stroke="#d8d3f0" strokeWidth="1.5" />
      <path d="M48 20 L48 72" stroke="#c9c3ec" strokeWidth="1.5" />
      {/* text lines */}
      <path d="M18 30 h20 M18 38 h18 M18 46 h20 M58 30 h20 M60 38 h18 M58 46 h20" stroke="#C7C0EA" strokeWidth="2" strokeLinecap="round" />
      {/* bookmark */}
      <path d="M66 12 L74 12 L74 30 L70 26 L66 30 Z" fill={`url(#${cover})`} />
    </svg>
  );
}

function Pencil({ className }: { className?: string }) {
  const uid = useId();
  const body = `${uid}-b`;
  return (
    <svg className={className} viewBox="0 0 32 108" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={body} x1="6" y1="20" x2="26" y2="90" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B7E84F" />
          <stop offset="1" stopColor="#8CBB33" />
        </linearGradient>
      </defs>
      {/* tip */}
      <path d="M16 4 L26 24 L6 24 Z" fill="#E8C98A" />
      <path d="M16 4 L20 12 L12 12 Z" fill="#3B3A47" />
      {/* body */}
      <rect x="6" y="24" width="20" height="66" fill={`url(#${body})`} />
      <rect x="9" y="24" width="3" height="66" fill="#ffffff" opacity="0.3" />
      {/* ferrule */}
      <rect x="6" y="90" width="20" height="8" fill="#9AA0AE" />
      {/* eraser */}
      <rect x="6" y="98" width="20" height="8" rx="3" fill="#EE8DA6" />
    </svg>
  );
}

/** Hover vignette: mortarboard (hero) + book + pencil, staggered in. */
export function EducationScene() {
  return (
    <>
      <motion.span className={ed.sceneCap} style={{ x: "-50%" }} variants={SCENE_ITEM}>
        <Mortarboard className={ed.sceneSvg} />
      </motion.span>
      <motion.span className={ed.sceneBook} variants={SCENE_ITEM}>
        <Book className={ed.sceneSvg} />
      </motion.span>
      <motion.span className={ed.scenePencil} variants={SCENE_ITEM}>
        <Pencil className={ed.sceneSvg} />
      </motion.span>
    </>
  );
}
EducationScene.displayName = "EducationScene";

/** Full expanded landing concept — bright EdTech course catalog. */
export function EducationConcept() {
  return (
    <div className={ed.site}>
      <div className={ed.header}>
        <span className={ed.brand}>
          <span className={ed.mark}>🎓</span>Логос
        </span>
        <nav className={ed.nav}>
          <span>Курсы</span>
          <span>Преподаватели</span>
          <span>Отзывы</span>
          <span>Контакты</span>
        </nav>
        <button className={ed.topCta}>Записаться</button>
      </div>
      <div className={ed.hairline} />

      <section className={ed.hero}>
        <div>
          <span className={ed.eyebrow}>Онлайн-школа · Минск</span>
          {/* макет-концепт: не заголовок страницы, чтобы не плодить h1 для поиска */}
          <p className={ed.h1}>
            Освойте профессию <span>с нуля</span>
          </p>
          <p className={ed.lead}>
            Живые занятия, практика на реальных проектах и наставник рядом. Учитесь в своём темпе — из
            любого города.
          </p>
          <div className={ed.ctaRow}>
            <button className={`${ed.btn} ${ed.btnViolet}`}>Выбрать курс</button>
            <button className={`${ed.btn} ${ed.btnGhost}`}>Пробный урок</button>
          </div>
          <div className={ed.stats}>
            <div className={ed.stat}>
              <b>12</b>
              <span>курсов</span>
            </div>
            <div className={ed.stat}>
              <b>90%</b>
              <span>доходят до конца</span>
            </div>
            <div className={ed.stat}>
              <b>4.9</b>
              <span>рейтинг</span>
            </div>
          </div>
        </div>

        <div className={ed.courseCard}>
          <span className={ed.ccTag}>Продолжить</span>
          <div className={ed.ccTitle}>UX/UI-дизайн с нуля до PRO</div>
          <div className={ed.ccProgLabel}>
            <span>Модуль 6 из 10</span>
            <span>62%</span>
          </div>
          <div className={ed.ccBar}>
            <i />
          </div>
          <div className={ed.ccFoot}>
            <div className={ed.ccTeacher}>
              <span className={ed.ccAva}>Е</span>
              <span>
                <b>Елена Ким</b>
                <span>ведущий дизайнер</span>
              </span>
            </div>
            <button className={ed.ccBtn}>К уроку →</button>
          </div>
        </div>
      </section>

      <div className={ed.catalog}>
        <div className={ed.catHead}>
          <h2>Каталог курсов</h2>
          <p>Старт потоков каждый месяц · рассрочка 0%</p>
        </div>
        <div className={ed.grid}>
          <div className={ed.cCard}>
            <span className={ed.cTag}>Дизайн</span>
            <div className={ed.cTitle}>UX/UI-дизайн</div>
            <div className={ed.cMeta}>
              <span>
                Уровень: <b>с нуля</b>
              </span>
              <span>
                <b>8</b> недель
              </span>
              <span>
                <b>24</b> урока
              </span>
            </div>
            <div className={ed.cFoot}>
              <span className={ed.cTeacher}>
                <span className={ed.cAva}>Е</span>Елена Ким
              </span>
              <span className={ed.cPrice}>
                от 290 <span>Br</span>
              </span>
            </div>
          </div>

          <div className={ed.cCard}>
            <span className={ed.cTag}>Разработка</span>
            <div className={ed.cTitle}>Frontend-разработчик</div>
            <div className={ed.cMeta}>
              <span>
                Уровень: <b>базовый</b>
              </span>
              <span>
                <b>12</b> недель
              </span>
              <span>
                <b>40</b> уроков
              </span>
            </div>
            <div className={ed.cFoot}>
              <span className={ed.cTeacher}>
                <span className={ed.cAva}>А</span>Антон Лис
              </span>
              <span className={ed.cPrice}>
                от 390 <span>Br</span>
              </span>
            </div>
          </div>

          <div className={ed.cCard}>
            <span className={ed.cTag}>Маркетинг</span>
            <div className={ed.cTitle}>Таргетолог</div>
            <div className={ed.cMeta}>
              <span>
                Уровень: <b>с нуля</b>
              </span>
              <span>
                <b>6</b> недель
              </span>
              <span>
                <b>18</b> уроков
              </span>
            </div>
            <div className={ed.cFoot}>
              <span className={ed.cTeacher}>
                <span className={ed.cAva}>М</span>Мария Гурко
              </span>
              <span className={ed.cPrice}>
                от 240 <span>Br</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
EducationConcept.displayName = "EducationConcept";
