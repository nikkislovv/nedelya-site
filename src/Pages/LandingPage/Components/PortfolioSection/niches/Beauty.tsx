import { useId } from "react";
import { motion } from "motion/react";
import { SCENE_ITEM } from "./sceneMotion";
import b from "./Beauty.module.css";

/* ---------- Hover vignette objects (gold / rose on the dark tile) ---------- */

function Scissors({ className }: { className?: string }) {
  const uid = useId();
  const g = `${uid}-g`;
  return (
    <svg className={className} viewBox="0 0 64 88" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={g} x1="10" y1="6" x2="54" y2="70" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E7CD8B" />
          <stop offset="1" stopColor="#A9884E" />
        </linearGradient>
      </defs>
      {/* blades */}
      <path d="M32 52 L20 8 C19 5 23 3 25 6 L36 46 Z" fill={`url(#${g})`} />
      <path d="M32 52 L44 8 C45 5 41 3 39 6 L28 46 Z" fill={`url(#${g})`} opacity="0.9" />
      {/* handle rings */}
      <circle cx="21" cy="70" r="11" stroke={`url(#${g})`} strokeWidth="5" fill="none" />
      <circle cx="43" cy="70" r="11" stroke={`url(#${g})`} strokeWidth="5" fill="none" />
      {/* pivot */}
      <circle cx="32" cy="52" r="4" fill="#E7CD8B" />
      <circle cx="32" cy="52" r="1.6" fill="#5a4620" />
    </svg>
  );
}

function HandMirror({ className }: { className?: string }) {
  const uid = useId();
  const frame = `${uid}-f`;
  const glass = `${uid}-gl`;
  return (
    <svg className={className} viewBox="0 0 70 116" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={frame} x1="8" y1="6" x2="62" y2="70" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E7CD8B" />
          <stop offset="1" stopColor="#A9884E" />
        </linearGradient>
        <radialGradient id={glass} cx="0.38" cy="0.34" r="0.7">
          <stop offset="0" stopColor="#F1F6F8" />
          <stop offset="0.6" stopColor="#BFD3DA" />
          <stop offset="1" stopColor="#8FB0BB" />
        </radialGradient>
      </defs>
      <rect x="30" y="60" width="10" height="52" rx="5" fill={`url(#${frame})`} />
      <circle cx="35" cy="35" r="31" fill={`url(#${frame})`} />
      <circle cx="35" cy="35" r="24" fill={`url(#${glass})`} />
      <ellipse cx="27" cy="27" rx="8" ry="5" fill="#ffffff" opacity="0.7" transform="rotate(-30 27 27)" />
    </svg>
  );
}

function Lipstick({ className }: { className?: string }) {
  const uid = useId();
  const tube = `${uid}-t`;
  const bullet = `${uid}-b`;
  return (
    <svg className={className} viewBox="0 0 44 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={tube} x1="8" y1="50" x2="36" y2="98" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E7CD8B" />
          <stop offset="1" stopColor="#A9884E" />
        </linearGradient>
        <linearGradient id={bullet} x1="12" y1="6" x2="32" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E68DA4" />
          <stop offset="1" stopColor="#C05873" />
        </linearGradient>
      </defs>
      {/* bullet (angled) */}
      <path d="M12 44 L12 20 L32 8 L32 44 Z" fill={`url(#${bullet})`} />
      <path d="M12 20 L32 8 L32 14 L12 26 Z" fill="#ffffff" opacity="0.28" />
      {/* collar */}
      <rect x="9" y="44" width="26" height="9" rx="2" fill="#8f7233" />
      {/* tube */}
      <rect x="7" y="53" width="30" height="43" rx="4" fill={`url(#${tube})`} />
      <rect x="10" y="55" width="4" height="39" rx="2" fill="#ffffff" opacity="0.25" />
    </svg>
  );
}

/** Hover vignette: mirror + scissors (hero) + lipstick, staggered in. */
export function BeautyScene() {
  return (
    <>
      <motion.span className={b.sceneScissors} style={{ x: "-50%" }} variants={SCENE_ITEM}>
        <Scissors className={b.sceneSvg} />
      </motion.span>
      <motion.span className={b.sceneMirror} variants={SCENE_ITEM}>
        <HandMirror className={b.sceneSvg} />
      </motion.span>
      <motion.span className={b.sceneLipstick} variants={SCENE_ITEM}>
        <Lipstick className={b.sceneSvg} />
      </motion.span>
    </>
  );
}
BeautyScene.displayName = "BeautyScene";

/** Full expanded landing concept — dark glam salon with booking widget. */
export function BeautyConcept() {
  return (
    <div className={b.site}>
      <div className={b.header}>
        <span className={b.brand}>
          <span className={b.dot} />
          Люмьер
        </span>
        <nav className={b.nav}>
          <span>Услуги</span>
          <span>Мастера</span>
          <span>Портфолио</span>
          <span>Контакты</span>
        </nav>
        <button className={b.topCta}>Записаться</button>
      </div>
      <div className={b.hairline} />

      <section className={b.hero}>
        <div>
          <span className={b.eyebrow}>Салон красоты · Минск</span>
          <h1 className={b.h1}>
            Ваша красота —<br />
            наше <em className={b.goldText}>искусство</em>
          </h1>
          <p className={b.lead}>
            Стрижки, окрашивание, уход и маникюр у мастеров, влюблённых в детали. Запишитесь онлайн за
            минуту.
          </p>
          <div className={b.ctaRow}>
            <button className={`${b.btn} ${b.btnGold}`}>Записаться онлайн</button>
            <button className={`${b.btn} ${b.btnGhost}`}>Прайс и услуги</button>
          </div>
          <div className={b.trust}>
            <span>
              <b>7</b> мастеров
            </span>
            <span>
              <b>Центр</b> Минска
            </span>
            <span>
              <b>Онлайн</b>-запись 24/7
            </span>
          </div>
        </div>

        <div className={b.stage}>
          <div className={b.ring} />
          <div className={b.ring2} />
          <div className={b.glowspot} />
          <div className={b.widget}>
            <div className={b.wtop}>
              <b>Онлайн-запись</b>
              <span>Апрель</span>
            </div>
            <div className={b.week}>
              <div className={b.day}>
                <span>пн</span>
                <b>15</b>
              </div>
              <div className={b.day}>
                <span>вт</span>
                <b>16</b>
              </div>
              <div className={b.day}>
                <span>ср</span>
                <b>17</b>
              </div>
              <div className={`${b.day} ${b.daySel}`}>
                <span>чт</span>
                <b>18</b>
              </div>
              <div className={b.day}>
                <span>пт</span>
                <b>19</b>
              </div>
              <div className={b.day}>
                <span>сб</span>
                <b>20</b>
              </div>
              <div className={b.day}>
                <span>вс</span>
                <b>21</b>
              </div>
            </div>
            <div className={b.slabel}>Свободное время · Чт, 18 апреля</div>
            <div className={b.slots}>
              <span className={b.slot}>10:00</span>
              <span className={`${b.slot} ${b.slotOff}`}>11:30</span>
              <span className={`${b.slot} ${b.slotSel}`}>13:00</span>
              <span className={b.slot}>15:30</span>
              <span className={b.slot}>17:00</span>
            </div>
            <button className={b.wbtn}>Записаться на 13:00</button>
          </div>
        </div>
      </section>

      <div className={b.prices}>
        <div className={b.pHead}>
          <span className={b.t}>Услуги и цены</span>
          <span className={b.m}>полный прайс — 40+ позиций</span>
        </div>
        <div className={b.prow}>
          <div>
            <div className={b.pn}>Женская стрижка</div>
            <div className={b.pd}>мытьё · укладка в подарок</div>
          </div>
          <div className={b.dots} />
          <div className={b.pp}>
            от 45 <span>Br</span>
          </div>
        </div>
        <div className={b.prow}>
          <div>
            <div className={b.pn}>Окрашивание</div>
            <div className={b.pd}>airtouch · балаяж · тон в тон</div>
          </div>
          <div className={b.dots} />
          <div className={b.pp}>
            от 90 <span>Br</span>
          </div>
        </div>
        <div className={b.prow}>
          <div>
            <div className={b.pn}>Маникюр + покрытие</div>
            <div className={b.pd}>гель-лак, уход за кутикулой</div>
          </div>
          <div className={b.dots} />
          <div className={b.pp}>
            35 <span>Br</span>
          </div>
        </div>
        <div className={b.prow}>
          <div>
            <div className={b.pn}>Уход за лицом</div>
            <div className={b.pd}>чистка · пилинг · массаж</div>
          </div>
          <div className={b.dots} />
          <div className={b.pp}>
            от 60 <span>Br</span>
          </div>
        </div>
      </div>

      <div className={b.masters}>
        <div className={b.master}>
          <span className={b.ava}>А</span>
          <div>
            <b>Анна</b>
            <span>стилист-парикмахер</span>
          </div>
        </div>
        <div className={b.master}>
          <span className={b.ava}>М</span>
          <div>
            <b>Мария</b>
            <span>колорист</span>
          </div>
        </div>
        <div className={b.master}>
          <span className={b.ava}>О</span>
          <div>
            <b>Ольга</b>
            <span>мастер маникюра</span>
          </div>
        </div>
      </div>
    </div>
  );
}
BeautyConcept.displayName = "BeautyConcept";
