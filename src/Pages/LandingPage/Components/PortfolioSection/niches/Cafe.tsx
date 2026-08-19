import { useId } from "react";
import { motion } from "motion/react";
import { SCENE_ITEM } from "./sceneMotion";
import c from "./Cafe.module.css";

/* ---------- Food objects (hover vignette + featured cards) ---------- */

function CoffeeCup({ className }: { className?: string }) {
  const uid = useId();
  const cup = `${uid}-cup`;
  const cof = `${uid}-cof`;
  return (
    <svg className={className} viewBox="0 0 108 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={cup} x1="20" y1="30" x2="80" y2="88" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#E7DCCB" />
        </linearGradient>
        <radialGradient id={cof} cx="0.5" cy="0.4" r="0.6">
          <stop offset="0" stopColor="#8A5A32" />
          <stop offset="1" stopColor="#5A3A1E" />
        </radialGradient>
      </defs>
      {/* steam */}
      <path d="M40 12 q6 -6 0 -12 M54 12 q6 -6 0 -12 M68 12 q6 -6 0 -12" stroke="#C9B79B" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.7" />
      {/* saucer */}
      <ellipse cx="52" cy="88" rx="46" ry="7" fill="#DCC9AC" />
      {/* cup */}
      <path d="M18 30 L86 30 L80 74 q-2 10 -14 10 L32 84 q-12 0 -14 -10 Z" fill={`url(#${cup})`} />
      <ellipse cx="52" cy="32" rx="34" ry="9" fill={`url(#${cof})`} />
      <ellipse cx="52" cy="31" rx="34" ry="8" fill="none" stroke="#EFE6D6" strokeWidth="3" />
      {/* handle */}
      <path d="M86 40 q18 2 16 18 q-2 14 -18 12" stroke={`url(#${cup})`} strokeWidth="7" fill="none" />
      {/* latte art */}
      <path d="M52 31 q-8 0 -8 5 q0 4 8 4 q8 0 8 -4 q0 -5 -8 -5Z" fill="#C69B6D" opacity="0.5" />
    </svg>
  );
}

function Croissant({ className }: { className?: string }) {
  const uid = useId();
  const g = `${uid}-g`;
  return (
    <svg className={className} viewBox="0 0 110 76" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={g} x1="20" y1="14" x2="90" y2="66" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E8A94E" />
          <stop offset="1" stopColor="#B9762A" />
        </linearGradient>
      </defs>
      <path d="M14 54 C22 30 44 18 55 18 C66 18 88 30 96 54 C86 46 74 44 66 48 C60 40 50 40 44 48 C36 44 24 46 14 54 Z" fill={`url(#${g})`} />
      <path d="M55 18 C50 26 48 40 50 50 M64 22 C62 32 62 42 66 48 M46 22 C44 32 42 40 44 48" stroke="#8f5a1e" strokeWidth="2" fill="none" opacity="0.5" />
      <ellipse cx="55" cy="70" rx="42" ry="5" fill="#5a3a18" opacity="0.16" />
    </svg>
  );
}

function Cupcake({ className }: { className?: string }) {
  const uid = useId();
  const cream = `${uid}-cr`;
  const base = `${uid}-ba`;
  return (
    <svg className={className} viewBox="0 0 84 108" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={cream} x1="20" y1="8" x2="64" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F3B9CC" />
          <stop offset="1" stopColor="#D9628A" />
        </linearGradient>
        <linearGradient id={base} x1="18" y1="56" x2="66" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E0A85A" />
          <stop offset="1" stopColor="#B27532" />
        </linearGradient>
      </defs>
      {/* cream swirl */}
      <path d="M18 58 C12 44 22 34 32 36 C30 24 46 20 52 30 C64 24 72 38 64 48 C74 50 72 62 60 60 C60 62 22 62 18 58 Z" fill={`url(#${cream})`} />
      <circle cx="42" cy="20" r="5" fill="#CE5077" />
      {/* wrapper */}
      <path d="M20 60 L64 60 L58 100 q-1 4 -5 4 L31 104 q-4 0 -5 -4 Z" fill={`url(#${base})`} />
      <path d="M28 60 L30 104 M42 60 L42 104 M56 60 L54 104" stroke="#8f5a24" strokeWidth="1.5" opacity="0.4" />
    </svg>
  );
}

/** Hover vignette: coffee cup (hero) + croissant + cupcake, staggered in. */
export function CafeScene() {
  return (
    <>
      <motion.span className={c.sceneCup} style={{ x: "-50%" }} variants={SCENE_ITEM}>
        <CoffeeCup className={c.sceneSvg} />
      </motion.span>
      <motion.span className={c.sceneCroissant} variants={SCENE_ITEM}>
        <Croissant className={c.sceneSvg} />
      </motion.span>
      <motion.span className={c.sceneCupcake} variants={SCENE_ITEM}>
        <Cupcake className={c.sceneSvg} />
      </motion.span>
    </>
  );
}
CafeScene.displayName = "CafeScene";

/** Full expanded landing concept — warm cafe/bakery menu showcase. */
export function CafeConcept() {
  return (
    <div className={c.site}>
      <div className={c.header}>
        <span className={c.brand}>
          <span className={c.mark}>☕</span>Крем
        </span>
        <nav className={c.nav}>
          <span>Меню</span>
          <span>Десерты</span>
          <span>Доставка</span>
          <span>Контакты</span>
        </nav>
        <button className={c.topCta}>Забронировать столик</button>
      </div>
      <div className={c.hairline} />

      <section className={c.hero}>
        <div>
          <span className={c.eyebrow}>Кофейня · кондитерская</span>
          {/* макет-концепт: не заголовок страницы, чтобы не плодить h1 для поиска */}
          <p className={c.h1}>
            Кофе и десерты
            <br />
            <span>ручной работы</span>
          </p>
          <p className={c.lead}>
            Своя обжарка, свежая выпечка каждое утро и авторские торты на заказ. Уютно у нас — вкусно
            у вас дома.
          </p>
          <div className={c.ctaRow}>
            <button className={`${c.btn} ${c.btnCaramel}`}>Смотреть меню</button>
            <button className={`${c.btn} ${c.btnGhost}`}>Заказать доставку</button>
          </div>
          <div className={c.trust}>Своя обжарка · доставка по Минску за 60 минут</div>
        </div>

        <div className={c.plate}>
          <span className={`${c.tag} ${c.tagTop}`}>
            4.9 ★<span>200+ отзывов</span>
          </span>
          <span className={`${c.tag} ${c.tagBottom}`}>
            Свежая выпечка<span>каждое утро</span>
          </span>
          <CoffeeCup className={c.plateCup} />
        </div>
      </section>

      <div className={c.menu}>
        <div className={c.menuHead}>
          <h2>Меню</h2>
          <div className={c.chips}>
            <span className={`${c.chip} ${c.chipOn}`}>Кофе</span>
            <span className={c.chip}>Десерты</span>
            <span className={c.chip}>Завтраки</span>
          </div>
        </div>

        <div className={c.featured}>
          <div className={c.fCard}>
            <div className={c.fImg}>
              <CoffeeCup />
            </div>
            <div className={c.fBody}>
              <div className={c.fName}>
                Капучино<span>на своём зерне</span>
              </div>
              <div className={c.fPrice}>6 Br</div>
            </div>
          </div>
          <div className={c.fCard}>
            <div className={c.fImg}>
              <Croissant />
            </div>
            <div className={c.fBody}>
              <div className={c.fName}>
                Круассан<span>с миндалём</span>
              </div>
              <div className={c.fPrice}>5 Br</div>
            </div>
          </div>
          <div className={c.fCard}>
            <div className={c.fImg}>
              <Cupcake />
            </div>
            <div className={c.fBody}>
              <div className={c.fName}>
                Капкейк<span>ягодный</span>
              </div>
              <div className={c.fPrice}>7 Br</div>
            </div>
          </div>
        </div>

        <div className={c.list}>
          <div className={c.li}>
            <span className={c.n}>Раф ванильный</span>
            <span className={c.dots} />
            <span className={c.p}>
              7 <span>Br</span>
            </span>
          </div>
          <div className={c.li}>
            <span className={c.n}>Чизкейк Нью-Йорк</span>
            <span className={c.dots} />
            <span className={c.p}>
              9 <span>Br</span>
            </span>
          </div>
          <div className={c.li}>
            <span className={c.n}>Латте на кокосовом</span>
            <span className={c.dots} />
            <span className={c.p}>
              7 <span>Br</span>
            </span>
          </div>
          <div className={c.li}>
            <span className={c.n}>Тирамису</span>
            <span className={c.dots} />
            <span className={c.p}>
              10 <span>Br</span>
            </span>
          </div>
          <div className={c.li}>
            <span className={c.n}>Эспрессо тоник</span>
            <span className={c.dots} />
            <span className={c.p}>
              6 <span>Br</span>
            </span>
          </div>
          <div className={c.li}>
            <span className={c.n}>Эклер шоколадный</span>
            <span className={c.dots} />
            <span className={c.p}>
              6 <span>Br</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
CafeConcept.displayName = "CafeConcept";
