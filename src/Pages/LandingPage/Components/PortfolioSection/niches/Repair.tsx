import { useId } from "react";
import { motion } from "motion/react";
import { SCENE_ITEM } from "./sceneMotion";
import r from "./Repair.module.css";

/* ---------- Hover vignette objects ---------- */

function Wrench({ className }: { className?: string }) {
  const uid = useId();
  const g = `${uid}-g`;
  return (
    <svg className={className} viewBox="0 0 44 112" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={g} x1="8" y1="6" x2="36" y2="106" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D6DEE7" />
          <stop offset="1" stopColor="#8A96A4" />
        </linearGradient>
      </defs>
      {/* shaft */}
      <rect x="17" y="26" width="10" height="60" fill={`url(#${g})`} />
      {/* open jaw */}
      <path d="M11 6 L20 6 L20 20 L24 20 L24 6 L33 6 L33 30 L11 30 Z" fill={`url(#${g})`} />
      <rect x="20" y="6" width="4" height="12" fill="#0e2440" opacity="0.25" />
      {/* box ring */}
      <circle cx="22" cy="94" r="15" fill={`url(#${g})`} />
      <circle cx="22" cy="94" r="7" fill="#243447" />
      {/* highlight */}
      <rect x="18" y="28" width="3" height="56" fill="#ffffff" opacity="0.4" />
    </svg>
  );
}

function Faucet({ className }: { className?: string }) {
  const uid = useId();
  const chrome = `${uid}-c`;
  return (
    <svg className={className} viewBox="0 0 96 104" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={chrome} x1="20" y1="10" x2="80" y2="96" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E4EAF0" />
          <stop offset="0.5" stopColor="#AEB9C6" />
          <stop offset="1" stopColor="#7C8794" />
        </linearGradient>
      </defs>
      {/* deck plate */}
      <ellipse cx="40" cy="96" rx="30" ry="7" fill={`url(#${chrome})`} />
      {/* body */}
      <rect x="32" y="40" width="16" height="54" rx="6" fill={`url(#${chrome})`} />
      {/* gooseneck spout */}
      <path d="M40 44 V26 q0 -16 18 -16 h8 q14 0 14 14 v20 h-9 v-18 q0 -7 -7 -7 h-6 q-9 0 -9 9 v16 z" fill={`url(#${chrome})`} />
      {/* handle lever */}
      <rect x="46" y="34" width="26" height="7" rx="3.5" fill={`url(#${chrome})`} transform="rotate(-14 46 34)" />
      {/* highlight */}
      <rect x="35" y="44" width="3.5" height="48" rx="1.75" fill="#ffffff" opacity="0.5" />
    </svg>
  );
}

function Drill({ className }: { className?: string }) {
  const uid = useId();
  const body = `${uid}-b`;
  const steel = `${uid}-s`;
  return (
    <svg className={className} viewBox="0 0 116 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={body} x1="30" y1="14" x2="90" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF9440" />
          <stop offset="1" stopColor="#E85D04" />
        </linearGradient>
        <linearGradient id={steel} x1="0" y1="30" x2="30" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D6DEE7" />
          <stop offset="1" stopColor="#8A96A4" />
        </linearGradient>
      </defs>
      {/* drill bit */}
      <rect x="2" y="36" width="20" height="4" rx="2" fill="#5a6b80" />
      {/* chuck */}
      <path d="M22 30 L38 26 L38 50 L22 46 Z" fill={`url(#${steel})`} />
      {/* body */}
      <rect x="36" y="20" width="62" height="38" rx="14" fill={`url(#${body})`} />
      <rect x="40" y="24" width="52" height="7" rx="3.5" fill="#ffffff" opacity="0.22" />
      {/* motor cap */}
      <circle cx="98" cy="39" r="10" fill={`url(#${body})`} />
      <circle cx="98" cy="39" r="5" fill="#b5470a" />
      {/* handle */}
      <path d="M52 56 L74 56 L68 92 q-1 4 -5 4 h-6 q-4 0 -5 -4 Z" fill={`url(#${body})`} />
      {/* trigger */}
      <path d="M48 58 L52 58 L52 68 L46 66 Z" fill="#5a6b80" />
      {/* battery */}
      <rect x="50" y="88" width="24" height="8" rx="3" fill="#243447" />
    </svg>
  );
}

/** Hover vignette: wrench + drill (hero) + faucet, staggered in. */
export function RepairScene() {
  return (
    <>
      <motion.span className={r.sceneDrill} style={{ x: "-50%" }} variants={SCENE_ITEM}>
        <Drill className={r.sceneSvg} />
      </motion.span>
      <motion.span className={r.sceneWrench} variants={SCENE_ITEM}>
        <Wrench className={r.sceneSvg} />
      </motion.span>
      <motion.span className={r.sceneFaucet} variants={SCENE_ITEM}>
        <Faucet className={r.sceneSvg} />
      </motion.span>
    </>
  );
}
RepairScene.displayName = "RepairScene";

/** Full expanded landing concept — navy/orange utility service. */
export function RepairConcept() {
  return (
    <div className={r.site}>
      <div className={r.heroWrap}>
        <div className={r.header}>
          <span className={r.brand}>
            <span className={r.m}>🔧</span>Мастер24
          </span>
          <nav className={r.nav}>
            <span>Услуги</span>
            <span>Цены</span>
            <span>Как работаем</span>
            <span>Контакты</span>
          </nav>
          <div className={r.headRight}>
            <span className={r.phone}>+375 29 000-00-00</span>
            <button className={`${r.btn} ${r.btnOrg}`}>Вызвать мастера</button>
          </div>
        </div>

        <div className={r.hero}>
          <div>
            <span className={r.eyebrow}>Сантехника · электрика · ремонт</span>
            <h1 className={r.h1}>
              Мастер приедет
              <br />
              <span>сегодня</span>
            </h1>
            <p className={r.lead}>
              Устраняем протечки, меняем проводку, кладём плитку. Честная оценка на месте, фикс-цена в
              договоре, гарантия на все работы.
            </p>
            <div className={r.badges}>
              <div className={r.badge}>
                <span className={r.ck}>✓</span>Выезд 24/7
              </div>
              <div className={r.badge}>
                <span className={r.ck}>✓</span>Гарантия 2 года
              </div>
              <div className={r.badge}>
                <span className={r.ck}>✓</span>Фикс-цена
              </div>
              <div className={r.badge}>
                <span className={r.ck}>✓</span>Без предоплаты
              </div>
            </div>
          </div>

          <div className={r.cb}>
            <h3>Быстрый вызов</h3>
            <p>Оставьте номер — перезвоним за 5 минут</p>
            <input className={r.field} placeholder="+375 (__) ___-__-__" readOnly />
            <div className={`${r.field} ${r.fieldSel}`}>
              Тип работ: Сантехника <span>▾</span>
            </div>
            <button className={`${r.btn} ${r.btnOrg}`}>Вызвать мастера</button>
            <div className={r.note}>Без предоплаты · оценка бесплатно</div>
          </div>
        </div>
      </div>

      <div className={r.services}>
        <div className={r.secHead}>
          <h2>Услуги и цены</h2>
          <p>Честный прайс · оценка бесплатно</p>
        </div>
        <div className={r.cards}>
          <div className={r.card}>
            <span className={r.ic}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FF7A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 7a4 4 0 0 1-5 5L4 17l3 3 5-5a4 4 0 0 0 5-5l-2 2-2-2 2-2a4 4 0 0 0-1-1z" />
              </svg>
            </span>
            <h4>Сантехника</h4>
            <div className={r.d}>Смесители, трубы, унитазы, устранение протечек.</div>
            <div className={r.price}>
              от 30 <span>Br</span>
            </div>
          </div>
          <div className={r.card}>
            <span className={r.ic}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FF7A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2 L4 14 h7 l-1 8 9-12 h-7 z" />
              </svg>
            </span>
            <h4>Электрика</h4>
            <div className={r.d}>Розетки, проводка, щитки, свет под ключ.</div>
            <div className={r.price}>
              от 25 <span>Br</span>
            </div>
          </div>
          <div className={r.card}>
            <span className={r.ic}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FF7A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="8" height="8" rx="1" />
                <rect x="13" y="3" width="8" height="8" rx="1" />
                <rect x="3" y="13" width="8" height="8" rx="1" />
                <rect x="13" y="13" width="8" height="8" rx="1" />
              </svg>
            </span>
            <h4>Плитка</h4>
            <div className={r.d}>Ванная, кухня, санузел — ровно и надолго.</div>
            <div className={r.price}>
              от 40 <span>Br/м²</span>
            </div>
          </div>
          <div className={r.card}>
            <span className={r.ic}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FF7A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 3 l7 7-4 4-7-7z" />
                <path d="M10 7 L3 14 v5 h5 l7-7" />
              </svg>
            </span>
            <h4>Мелкий ремонт</h4>
            <div className={r.d}>Полки, карнизы, двери, сборка мебели.</div>
            <div className={r.price}>
              от 20 <span>Br</span>
            </div>
          </div>
        </div>
      </div>

      <div className={r.stepsSec}>
        <div className={r.steps}>
          <div className={`${r.step} ${r.stepOn}`}>
            <div className={r.n}>1</div>
            <h4>Заявка</h4>
            <p>Звонок или форма — уточняем задачу.</p>
          </div>
          <div className={r.step}>
            <div className={r.n}>2</div>
            <h4>Выезд бесплатно</h4>
            <p>Мастер приезжает в удобное время.</p>
          </div>
          <div className={r.step}>
            <div className={r.n}>3</div>
            <h4>Оценка и смета</h4>
            <p>Фикс-цена до начала работ, без сюрпризов.</p>
          </div>
          <div className={r.step}>
            <div className={r.n}>4</div>
            <h4>Работа и гарантия</h4>
            <p>Делаем чисто, даём гарантию 2 года.</p>
          </div>
        </div>
      </div>

      <div className={r.sticky}>
        <div className={r.stickyL}>
          <b>Нужен мастер сегодня?</b>
          <span>Выезд по Минску за 60 минут</span>
        </div>
        <div className={r.stickyR}>
          <span className={r.ph}>+375 29 000-00-00</span>
          <button className={`${r.btn} ${r.btnOrg}`}>Вызвать мастера</button>
        </div>
      </div>
    </div>
  );
}
RepairConcept.displayName = "RepairConcept";
