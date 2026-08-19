import { useId } from "react";
import { motion } from "motion/react";
import { Armchair } from "./Armchair";
import { SCENE_ITEM } from "./sceneMotion";
import f from "./Furniture.module.css";

/* ---------- Small companion objects for the hover vignette ---------- */

function Wardrobe({ className }: { className?: string }) {
  const uid = useId();
  const body = `${uid}-body`;
  const door = `${uid}-door`;
  return (
    <svg className={className} viewBox="0 0 92 208" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={body} x1="10" y1="10" x2="82" y2="200" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8A6A45" />
          <stop offset="1" stopColor="#54402C" />
        </linearGradient>
        <linearGradient id={door} x1="14" y1="20" x2="46" y2="190" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7A5A40" />
          <stop offset="1" stopColor="#4C3826" />
        </linearGradient>
      </defs>
      {/* cornice */}
      <rect x="4" y="4" width="84" height="12" rx="3" fill={`url(#${body})`} />
      {/* body */}
      <rect x="8" y="16" width="76" height="180" rx="4" fill={`url(#${body})`} />
      {/* doors */}
      <rect x="14" y="22" width="31" height="168" rx="3" fill={`url(#${door})`} stroke="#3d2c1c" strokeWidth="1" />
      <rect x="47" y="22" width="31" height="168" rx="3" fill={`url(#${door})`} stroke="#3d2c1c" strokeWidth="1" />
      {/* door highlight */}
      <rect x="17" y="26" width="6" height="160" rx="3" fill="#ffffff" opacity="0.08" />
      {/* handles */}
      <rect x="40" y="92" width="3.5" height="26" rx="1.75" fill="#E7CD8B" />
      <rect x="48.5" y="92" width="3.5" height="26" rx="1.75" fill="#E7CD8B" />
      {/* feet */}
      <rect x="14" y="196" width="10" height="9" rx="2" fill="#3d2c1c" />
      <rect x="68" y="196" width="10" height="9" rx="2" fill="#3d2c1c" />
      <ellipse cx="46" cy="205" rx="40" ry="4" fill="#2a1c10" opacity="0.22" />
    </svg>
  );
}

function StoneSink({ className }: { className?: string }) {
  const uid = useId();
  const stone = `${uid}-stone`;
  const cab = `${uid}-cab`;
  const basin = `${uid}-basin`;
  return (
    <svg className={className} viewBox="0 0 150 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={stone} x1="10" y1="30" x2="140" y2="70" gradientUnits="userSpaceOnUse">
          <stop stopColor="#EFEAE1" />
          <stop offset="1" stopColor="#CDC5B6" />
        </linearGradient>
        <linearGradient id={cab} x1="20" y1="66" x2="130" y2="112" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7A5A40" />
          <stop offset="1" stopColor="#4C3826" />
        </linearGradient>
        <radialGradient id={basin} cx="0.5" cy="0.4" r="0.6">
          <stop offset="0" stopColor="#B7AE9E" />
          <stop offset="1" stopColor="#9A8F7C" />
        </radialGradient>
      </defs>
      {/* cabinet base */}
      <rect x="18" y="64" width="114" height="50" rx="4" fill={`url(#${cab})`} />
      <path d="M75 64 V114" stroke="#3d2c1c" strokeWidth="1.4" />
      <rect x="66" y="82" width="4" height="16" rx="2" fill="#E7CD8B" />
      <rect x="80" y="82" width="4" height="16" rx="2" fill="#E7CD8B" />
      {/* stone slab (top surface, slight perspective) */}
      <path d="M8 40 L142 40 L150 60 L0 60 Z" fill={`url(#${stone})`} />
      <path d="M8 40 L142 40 L150 60 L0 60 Z" fill="#ffffff" opacity="0.08" />
      {/* vein */}
      <path d="M26 44 q30 6 60 1 t54 3" stroke="#b9b0a0" strokeWidth="1" fill="none" opacity="0.7" />
      {/* front edge */}
      <rect x="0" y="60" width="150" height="7" fill="#C2BAAB" />
      {/* basin */}
      <ellipse cx="75" cy="50" rx="34" ry="9" fill={`url(#${basin})`} />
      <ellipse cx="75" cy="49" rx="30" ry="7" fill="#8A8071" />
      <circle cx="75" cy="50" r="2.4" fill="#5f584c" />
      {/* faucet */}
      <path d="M52 44 v-16 q0 -8 8 -8 h6 q7 0 7 7 v5" stroke="#C9A96A" strokeWidth="3.4" fill="none" strokeLinecap="round" />
      <rect x="49" y="42" width="7" height="5" rx="2" fill="#A9884E" />
    </svg>
  );
}

/** Hover vignette: wardrobe + chair (hero) + stone countertop with sink. */
export function FurnitureScene() {
  return (
    <>
      <motion.span className={f.sceneChair} style={{ x: "-50%" }} variants={SCENE_ITEM}>
        <Armchair className={f.sceneSvg} />
      </motion.span>
      <motion.span className={f.sceneWardrobe} variants={SCENE_ITEM}>
        <Wardrobe className={f.sceneSvg} />
      </motion.span>
      <motion.span className={f.sceneCountertop} variants={SCENE_ITEM}>
        <StoneSink className={f.sceneSvg} />
      </motion.span>
    </>
  );
}
FurnitureScene.displayName = "FurnitureScene";

/** Full expanded landing concept. */
export function FurnitureConcept() {
  return (
    <div className={`${f.scope} ${f.site}`}>
      <div className={f.header}>
        <span className={f.brand}>
          <span className={f.mono}>Д</span>Дубовик
        </span>
        <nav className={f.nav}>
          <span>Каталог</span>
          <span>Мастерская</span>
          <span>Процесс</span>
          <span>Контакты</span>
        </nav>
        <div className={f.call}>
          <span className={f.phone}>Минск · вся РБ</span>
          <span className={`${f.btn} ${f.btnPrimary}`}>Рассчитать проект</span>
        </div>
      </div>
      <div className={f.hairline} />

      <section className={f.hero}>
        <div>
          <span className={f.eyebrow}>Мебель на заказ</span>
          {/* макет-концепт: не заголовок страницы, чтобы не плодить h1 для поиска */}
          <p className={f.h1}>
            Мебель, которую
            <br />
            <em>передают</em> по наследству
          </p>
          <p className={f.lead}>
            Проектируем и изготавливаем корпусную мебель из массива под ваш интерьер — от эскиза до
            монтажа за 3–4 недели.
          </p>
          <div className={f.ctaRow}>
            <span className={`${f.btn} ${f.btnPrimary} ${f.btnLg}`}>Обсудить проект →</span>
            <span className={`${f.btn} ${f.btnGhost} ${f.btnLg}`}>Смотреть работы</span>
          </div>
          <div className={f.materials}>
            <div className={f.mat}>
              <span className={f.n}>Дуб</span>
              <span className={f.l}>массив, брашировка</span>
            </div>
            <div className={f.mat}>
              <span className={f.n}>Ясень</span>
              <span className={f.l}>светлые тона</span>
            </div>
            <div className={f.mat}>
              <span className={f.n}>Орех</span>
              <span className={f.l}>премиум-линейка</span>
            </div>
          </div>
        </div>

        <div className={f.stage}>
          <div className={f.stageFloor} />
          <div className={f.swatchCard}>
            <span className={f.swatch} />
            <span>
              <b>Массив ореха</b>
              <span>ручная работа</span>
            </span>
          </div>
          <div className={f.badgeRound}>
            от эскиза до монтажа
            <br />
            <b>3–4 недели</b>
          </div>
          <Armchair className={f.chair} />
        </div>
      </section>

      <div className={f.strip}>
        <div className={f.cat}>
          <span className={f.arw}>→</span>
          <span className={f.ic}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B5643C" strokeWidth="1.8">
              <rect x="3" y="4" width="18" height="7" rx="1" />
              <rect x="3" y="13" width="18" height="7" rx="1" />
              <path d="M8 7.5h1M8 16.5h1" />
            </svg>
          </span>
          <h3>Кухни</h3>
          <p>Индивидуальная геометрия, фасады из массива и шпона.</p>
        </div>
        <div className={f.cat}>
          <span className={f.arw}>→</span>
          <span className={f.ic}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B5643C" strokeWidth="1.8">
              <rect x="4" y="3" width="16" height="18" rx="1.5" />
              <path d="M12 3v18M9 12h.5M15 12h-.5" />
            </svg>
          </span>
          <h3>Гардеробные</h3>
          <p>Системы хранения под ваши вещи и площадь до сантиметра.</p>
        </div>
        <div className={f.cat}>
          <span className={f.arw}>→</span>
          <span className={f.ic}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B5643C" strokeWidth="1.8">
              <path d="M3 9h18M5 9l1.5 11M19 9l-1.5 11M4 9l2-4h12l2 4" />
            </svg>
          </span>
          <h3>Столы и стулья</h3>
          <p>Обеденные группы из цельного дерева на десятилетия.</p>
        </div>
      </div>
    </div>
  );
}
FurnitureConcept.displayName = "FurnitureConcept";
