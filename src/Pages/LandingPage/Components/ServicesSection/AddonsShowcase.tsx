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

/* ---------- Data ---------- */

interface IAddon {
  id: string;
  title: string;
  desc: string;
  amount: string;
  suffix: string;
  priceText?: string;
  Visual: () => ReactNode;
}

const ADDONS: IAddon[] = [
  {
    id: "hosting",
    title: "Хостинг и домен",
    desc: "Публикация, SSL, домен и хостинг — держим сайт онлайн 24/7. Первые полгода — в подарок.",
    amount: "от 200",
    suffix: "/год",
    Visual: ServerVisual,
  },
  {
    id: "support",
    title: "Поддержка и правки",
    desc: "Правки после сдачи, обновления и новые блоки по мере роста бизнеса.",
    amount: "",
    suffix: "",
    priceText: "Индивидуально",
    Visual: ShieldVisual,
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
              Первые полгода хостинг — в подарок. Дальше хостинг с доменом и поддержку
              подключаем по необходимости, без обязательной подписки.
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
                    {a.priceText ? (
                      a.priceText
                    ) : (
                      <>
                        {a.amount}
                        <BynSign />
                        {a.suffix && <span className={classes.priceSuffix}>{a.suffix}</span>}
                      </>
                    )}
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
