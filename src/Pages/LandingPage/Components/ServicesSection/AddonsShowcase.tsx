import type { ReactNode } from "react";
import { SlideIn } from "../../../../Components/SlideIn/SlideIn";
import { BynSign } from "../../../../Components/BynSign/BynSign";
import classes from "./AddonsShowcase.module.css";

/* ---------- Glossy 3D objects ----------
   Metallic slate bodies with coral energy accents — richer, extruded,
   sitting on a soft coral glow. One object per add-on. */

function Defs({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={`${id}-steel`} x1="0" y1="0" x2="0.25" y2="1">
        <stop offset="0" stopColor="#f4f7fc" />
        <stop offset="0.5" stopColor="#c2cddd" />
        <stop offset="1" stopColor="#7f8ea6" />
      </linearGradient>
      <linearGradient id={`${id}-coral`} x1="0" y1="0" x2="0.2" y2="1">
        <stop offset="0" stopColor="#ffb489" />
        <stop offset="0.5" stopColor="#ff6a3d" />
        <stop offset="1" stopColor="#e83c1f" />
      </linearGradient>
    </defs>
  );
}

// Хостинг — 3D server rack
function ServerVisual() {
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <Defs id="host" />
      <ellipse cx="60" cy="112" rx="40" ry="6" fill="rgba(0,0,0,0.4)" />
      {[12, 45, 78].map((y) => (
        <g key={y}>
          {/* extruded side */}
          <rect x="23" y={y + 3} width="80" height="27" rx="9" fill="#38465f" />
          {/* front face */}
          <rect x="20" y={y} width="80" height="27" rx="9" fill="url(#host-steel)" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />
          {/* top gloss */}
          <rect x="24" y={y + 2} width="72" height="6.5" rx="5" fill="rgba(255,255,255,0.55)" />
          {/* glowing coral LED */}
          <circle cx="34" cy={y + 14.5} r="7.5" fill="#ff6a3d" opacity="0.32" />
          <circle cx="34" cy={y + 14.5} r="4.1" fill="#ff6a3d" />
          <circle cx="32.8" cy={y + 13.2} r="1.5" fill="#ffe0d1" />
          {/* activity bars */}
          <rect x="46" y={y + 10.5} width="44" height="3.6" rx="1.8" fill="#ff8a5c" />
          <rect x="46" y={y + 16.5} width="30" height="3.6" rx="1.8" fill="rgba(96,110,134,0.75)" />
        </g>
      ))}
    </svg>
  );
}

// Поддержка — 3D shield with coral core
function ShieldVisual() {
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <Defs id="supp" />
      <ellipse cx="60" cy="113" rx="30" ry="6" fill="rgba(0,0,0,0.4)" />
      {/* extruded side */}
      <path d="M63 13 L99 27 V58 C99 85 82 101 63 109 L60 108 C41 100 25 84 25 57 V26 Z" fill="#38465f" />
      {/* front shield */}
      <path
        d="M60 11 L96 25 V57 C96 84 80 100 60 108 C40 100 24 84 24 57 V25 Z"
        fill="url(#supp-steel)"
        stroke="rgba(255,255,255,0.65)"
        strokeWidth="1.5"
      />
      {/* top gloss */}
      <path d="M60 11 L96 25 V40 C72 30 48 30 24 40 V25 Z" fill="rgba(255,255,255,0.4)" />
      {/* coral core */}
      <circle cx="60" cy="57" r="20" fill="url(#supp-coral)" />
      <circle cx="60" cy="57" r="20" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" />
      <ellipse cx="55" cy="49" rx="9" ry="6" fill="rgba(255,255,255,0.32)" />
      {/* check */}
      <path d="M50 58 l7 8 14 -17" stroke="#fff" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Продвижение — 3D growth bars + coral arrow
function ChartVisual() {
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <Defs id="promo" />
      <ellipse cx="60" cy="113" rx="42" ry="6" fill="rgba(0,0,0,0.4)" />
      {/* bar 1 (steel) */}
      <rect x="19" y="77" width="21" height="33" rx="6" fill="#38465f" transform="translate(2,2)" />
      <rect x="19" y="77" width="21" height="33" rx="6" fill="url(#promo-steel)" stroke="rgba(255,255,255,0.55)" strokeWidth="1" />
      <rect x="22.5" y="79" width="6" height="30" rx="3" fill="rgba(255,255,255,0.5)" />
      {/* bar 2 (steel) */}
      <rect x="49" y="60" width="21" height="50" rx="6" fill="#38465f" transform="translate(2,2)" />
      <rect x="49" y="60" width="21" height="50" rx="6" fill="url(#promo-steel)" stroke="rgba(255,255,255,0.55)" strokeWidth="1" />
      <rect x="52.5" y="62" width="6" height="47" rx="3" fill="rgba(255,255,255,0.5)" />
      {/* bar 3 (coral, tallest) */}
      <rect x="79" y="40" width="21" height="70" rx="6" fill="#c23a1c" transform="translate(2,2)" />
      <rect x="79" y="40" width="21" height="70" rx="6" fill="url(#promo-coral)" stroke="rgba(255,255,255,0.55)" strokeWidth="1" />
      <rect x="82.5" y="42" width="6" height="66" rx="3" fill="rgba(255,255,255,0.42)" />
      {/* trend arrow */}
      <path d="M18 66 L46 46 L66 55 L98 25" stroke="#ff6a3d" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 66 L46 46 L66 55 L98 25" stroke="rgba(255,255,255,0.45)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M80 22 L103 19 L100 42 Z" fill="#ff6a3d" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeLinejoin="round" />
    </svg>
  );
}

/* ---------- Data ---------- */

interface IAddon {
  id: string;
  title: string;
  desc: string;
  amount: string;
  suffix: string;
  Visual: () => ReactNode;
}

const ADDONS: IAddon[] = [
  {
    id: "hosting",
    title: "Хостинг и домен",
    desc: "Публикация, SSL, домен и хостинг — держим сайт онлайн 24/7.",
    amount: "49",
    suffix: "/мес",
    Visual: ServerVisual,
  },
  {
    id: "support",
    title: "Поддержка и развитие",
    desc: "Правки, обновления и новые блоки по мере роста бизнеса.",
    amount: "159",
    suffix: "/мес",
    Visual: ShieldVisual,
  },
  {
    id: "promo",
    title: "Продвижение",
    desc: "SEO, подключение рекламы и аналитика — приводим клиентов.",
    amount: "от 390",
    suffix: "",
    Visual: ChartVisual,
  },
];

export function AddonsShowcase() {
  return (
    <div className={classes.wrap}>
      <div className={classes.container}>
        <SlideIn direction="left">
          <div className={classes.headings}>
            <span className={classes.label}>Дополнительно</span>
            <h3 className={classes.title}>Запустили сайт — а дальше?</h3>
            <p className={classes.desc}>
              Три вещи, которые продлевают сайту жизнь и приводят клиентов: где он живёт,
              кто его развивает и как о нём узнают. Подключаются по необходимости.
            </p>
          </div>
        </SlideIn>

        <div className={classes.cardsRow}>
          {ADDONS.map((a, i) => (
            <SlideIn key={a.id} direction="bottom" delay={i * 120}>
              <article className={classes.card}>
                <div className={classes.body}>
                  <h4 className={classes.cardTitle}>{a.title}</h4>
                  <p className={classes.cardDesc}>{a.desc}</p>
                  <div className={classes.price}>
                    {a.amount}
                    <BynSign />
                    {a.suffix && <span className={classes.priceSuffix}>{a.suffix}</span>}
                  </div>
                </div>
                <div className={classes.visual}>
                  <a.Visual />
                </div>
              </article>
            </SlideIn>
          ))}
        </div>
      </div>
    </div>
  );
}
AddonsShowcase.displayName = "AddonsShowcase";
