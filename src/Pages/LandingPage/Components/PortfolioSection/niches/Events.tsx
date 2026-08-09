import { useId } from "react";
import { motion } from "motion/react";
import { SCENE_ITEM } from "./sceneMotion";
import e from "./Events.module.css";

/* ---------- Decorative floral ornament (hero corners) ---------- */
function Floral({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke="#C9A96A" strokeWidth="1.4" fill="none" strokeLinecap="round">
        <path d="M18 118 C40 96 54 74 60 40" />
        <path d="M60 40 C58 30 50 24 40 26" />
        <path d="M50 66 C40 62 32 66 28 76" />
        <path d="M56 52 C66 46 76 48 82 58" />
        <path d="M46 86 C36 84 28 88 24 98" />
      </g>
      <g fill="#D98BA0">
        <circle cx="60" cy="34" r="4" />
        <circle cx="24" cy="76" r="3" />
        <circle cx="84" cy="58" r="3" />
        <circle cx="22" cy="98" r="2.5" />
      </g>
      <g fill="#C9A96A" opacity="0.8">
        <path d="M50 66 q-6 -3 -10 2 q6 3 10 -2Z" />
        <path d="M56 52 q6 -3 10 2 q-6 3 -10 -2Z" />
      </g>
    </svg>
  );
}

/* ---------- Hover vignette objects ---------- */

function ChampagneGlasses({ className }: { className?: string }) {
  const uid = useId();
  const liq = `${uid}-l`;
  const flute = (cx: number, rot: number) => (
    <g transform={`rotate(${rot} ${cx} 82)`}>
      <path d={`M${cx - 9} 14 L${cx + 9} 14 L${cx + 5} 42 Q${cx} 50 ${cx} 50 Q${cx} 50 ${cx - 5} 42 Z`} fill="#E7EEF2" opacity="0.85" />
      <path d={`M${cx - 7} 22 L${cx + 7} 22 L${cx + 4} 40 Q${cx} 47 ${cx} 47 Q${cx} 47 ${cx - 4} 40 Z`} fill={`url(#${liq})`} />
      <rect x={cx - 1} y="50" width="2" height="28" fill="#D7DEE4" />
      <ellipse cx={cx} cy="80" rx="9" ry="3" fill="#D7DEE4" />
    </g>
  );
  return (
    <svg className={className} viewBox="0 0 88 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={liq} x1="44" y1="20" x2="44" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F4DFA0" />
          <stop offset="1" stopColor="#D9B25E" />
        </linearGradient>
      </defs>
      {flute(28, 11)}
      {flute(60, -11)}
      {/* sparkle at clink */}
      <path d="M44 6 L46 12 L52 14 L46 16 L44 22 L42 16 L36 14 L42 12 Z" fill="#F4DFA0" />
    </svg>
  );
}

function Rings({ className }: { className?: string }) {
  const uid = useId();
  const g = `${uid}-g`;
  return (
    <svg className={className} viewBox="0 0 100 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={g} x1="10" y1="10" x2="90" y2="66" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E7CD8B" />
          <stop offset="1" stopColor="#A9884E" />
        </linearGradient>
      </defs>
      <circle cx="36" cy="42" r="22" stroke={`url(#${g})`} strokeWidth="7" fill="none" />
      <circle cx="64" cy="42" r="22" stroke={`url(#${g})`} strokeWidth="7" fill="none" />
      {/* interlink hint */}
      <path d="M36 20 a22 22 0 0 0 -3 43" stroke="#8f6f34" strokeWidth="7" fill="none" opacity="0.35" />
      {/* diamond on right ring */}
      <path d="M64 6 L72 14 L64 24 L56 14 Z" fill="#EAF6FB" />
      <path d="M56 14 L72 14 L64 24 Z" fill="#BCD9E6" />
      <path d="M64 6 L72 14 L64 14 Z" fill="#ffffff" />
    </svg>
  );
}

function Bouquet({ className }: { className?: string }) {
  const uid = useId();
  const wrap = `${uid}-w`;
  const bloom = `${uid}-b`;
  const rose = (cx: number, cy: number, s: number) => (
    <g transform={`translate(${cx} ${cy}) scale(${s})`}>
      <circle r="12" fill={`url(#${bloom})`} />
      <circle r="7" fill="#BE6B84" />
      <path d="M0 -6 A6 6 0 1 1 -4 5" stroke="#E6A9BA" strokeWidth="2" fill="none" />
    </g>
  );
  return (
    <svg className={className} viewBox="0 0 94 116" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={wrap} x1="30" y1="70" x2="64" y2="112" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F3E7DA" />
          <stop offset="1" stopColor="#DAC7B2" />
        </linearGradient>
        <radialGradient id={bloom} cx="0.4" cy="0.35" r="0.7">
          <stop offset="0" stopColor="#F3C2D0" />
          <stop offset="1" stopColor="#D98BA0" />
        </radialGradient>
      </defs>
      {/* stems + leaves */}
      <path d="M47 108 C42 84 40 64 44 44 M47 108 C52 86 56 70 58 52 M47 108 C46 88 46 70 47 50" stroke="#5C8A5A" strokeWidth="2.4" fill="none" />
      <path d="M40 74 C30 70 24 74 22 82 C32 84 40 80 40 74Z" fill="#5C8A5A" />
      <path d="M56 66 C66 62 72 66 74 74 C64 76 56 72 56 66Z" fill="#6FA36B" />
      {/* wrap */}
      <path d="M30 82 L64 82 L57 112 L37 112 Z" fill={`url(#${wrap})`} />
      <path d="M30 82 L64 82 L62 90 L32 90 Z" fill="#ffffff" opacity="0.3" />
      <path d="M47 82 L47 112" stroke="#c3ad93" strokeWidth="1" />
      {/* blooms */}
      {rose(38, 40, 1)}
      {rose(58, 44, 0.9)}
      {rose(48, 28, 0.8)}
    </svg>
  );
}

/** Hover vignette: glasses (hero) + rings + bouquet, staggered in. */
export function EventsScene() {
  return (
    <>
      <motion.span className={e.sceneGlasses} style={{ x: "-50%" }} variants={SCENE_ITEM}>
        <ChampagneGlasses className={e.sceneSvg} />
      </motion.span>
      <motion.span className={e.sceneRings} variants={SCENE_ITEM}>
        <Rings className={e.sceneSvg} />
      </motion.span>
      <motion.span className={e.sceneBouquet} variants={SCENE_ITEM}>
        <Bouquet className={e.sceneSvg} />
      </motion.span>
    </>
  );
}
EventsScene.displayName = "EventsScene";

/** Full expanded landing concept — romantic blush/gold event agency. */
export function EventsConcept() {
  return (
    <div className={e.site}>
      <div className={e.header}>
        <span className={e.brand}>
          <span className={e.mark}>❀</span>Торжество
        </span>
        <nav className={e.nav}>
          <span>Форматы</span>
          <span>Программа</span>
          <span>Отзывы</span>
          <span>Контакты</span>
        </nav>
        <button className={e.topCta}>Обсудить праздник</button>
      </div>
      <div className={e.hairline} />

      <section className={e.hero}>
        <Floral className={`${e.ornament} ${e.ornamentTL}`} />
        <Floral className={`${e.ornament} ${e.ornamentBR}`} />
        <span className={e.eyebrow}>Организация торжеств · Минск</span>
        <h1 className={e.h1}>
          Праздник, который
          <br />
          запомнят <em>навсегда</em>
        </h1>
        <p className={e.lead}>
          Свадьбы, юбилеи и корпоративы под ключ: концепция, площадка, décor, ведущий и программа —
          всё в одних руках.
        </p>
        <div className={e.ctaRow}>
          <button className={`${e.btn} ${e.btnRose}`}>Обсудить праздник</button>
          <button className={`${e.btn} ${e.btnGhost}`}>Смотреть форматы</button>
        </div>
        <div className={e.divider}>❀</div>
      </section>

      <div className={e.formats}>
        <div className={e.fCard}>
          <span className={e.fIc}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#BE6B84" strokeWidth="1.7">
              <circle cx="9" cy="14" r="6" />
              <circle cx="15" cy="14" r="6" />
              <path d="M15 3 l2 2-2 2-2-2z" />
            </svg>
          </span>
          <div className={e.fTitle}>Свадьбы</div>
          <div className={e.fDesc}>От камерной церемонии до торжества на 200 гостей.</div>
          <div className={e.fMeta}>под ключ</div>
        </div>
        <div className={e.fCard}>
          <span className={e.fIc}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#BE6B84" strokeWidth="1.7" strokeLinejoin="round">
              <path d="M4 21v-7h16v7z" />
              <path d="M5 14v-3a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3" />
              <path d="M12 8V4M10 4h4" />
            </svg>
          </span>
          <div className={e.fTitle}>Юбилеи</div>
          <div className={e.fDesc}>Тёплые семейные вечера и большие праздники дат.</div>
          <div className={e.fMeta}>под ключ</div>
        </div>
        <div className={e.fCard}>
          <span className={e.fIc}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#BE6B84" strokeWidth="1.7" strokeLinecap="round">
              <path d="M7 3l2 8a3 3 0 0 0 6 0l2-8z" />
              <path d="M12 13v6M9 21h6" />
            </svg>
          </span>
          <div className={e.fTitle}>Корпоративы</div>
          <div className={e.fDesc}>Тимбилдинги, банкеты и праздники компании.</div>
          <div className={e.fMeta}>под ключ</div>
        </div>
      </div>

      <div className={e.timelineSec}>
        <div className={e.tHead}>
          <h2>Программа вашего дня</h2>
          <p>Продумываем тайминг до минуты — вы просто наслаждаетесь</p>
        </div>
        <div className={e.timeline}>
          <div className={e.tItem}>
            <div className={e.tTime}>14:00</div>
            <div className={e.tDot} />
            <div className={e.tName}>Церемония</div>
            <div className={e.tDesc}>Выездная регистрация в декоре.</div>
          </div>
          <div className={e.tItem}>
            <div className={e.tTime}>16:00</div>
            <div className={e.tDot} />
            <div className={e.tName}>Welcome-фуршет</div>
            <div className={e.tDesc}>Аперитив, фото, живая музыка.</div>
          </div>
          <div className={e.tItem}>
            <div className={e.tTime}>18:00</div>
            <div className={e.tDot} />
            <div className={e.tName}>Банкет</div>
            <div className={e.tDesc}>Ужин, тосты, шоу-программа.</div>
          </div>
          <div className={e.tItem}>
            <div className={e.tTime}>22:00</div>
            <div className={e.tDot} />
            <div className={e.tName}>Вечерняя часть</div>
            <div className={e.tDesc}>Танцы, торт, фейерверк.</div>
          </div>
        </div>
      </div>

      <div className={e.ctaStrip}>
        <h3>Расскажите о вашем празднике</h3>
        <p>Соберём концепцию, программу и смету за 24 часа — бесплатно и без обязательств.</p>
        <button className={e.btnWhite}>Оставить заявку</button>
      </div>
    </div>
  );
}
EventsConcept.displayName = "EventsConcept";
