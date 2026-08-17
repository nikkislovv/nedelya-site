import type { ReactNode } from "react";
import { BynSign } from "../../../../Components/BynSign/BynSign";
import classes from "./ServiceMockup.module.css";

export type TMockupType =
  | "landing"
  | "card"
  | "shop"
  | "portfolio"
  | "catalog"
  | "services";

function Nav({
  label = "nedelya",
  links = ["Услуги", "Цены", "Контакты"],
  children,
}: {
  label?: string;
  links?: string[];
  children?: ReactNode;
}) {
  return (
    <div className={classes.nav}>
      <span className={classes.navLogo}>{label}</span>
      {children ?? (
        <div className={classes.navLinks}>
          {links.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </div>
      )}
    </div>
  );
}

const Stars = () => (
  <div className={classes.stars}>
    {Array.from({ length: 5 }).map((_, i) => (
      <span className={classes.star} key={i} />
    ))}
  </div>
);

const CartIcon = () => (
  <span className={classes.cart}>
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M3 4h2l2.2 11.2a1.5 1.5 0 0 0 1.5 1.2h8.1a1.5 1.5 0 0 0 1.5-1.2L20 7H6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="20" r="1.4" fill="currentColor" />
      <circle cx="17" cy="20" r="1.4" fill="currentColor" />
    </svg>
    <span className={classes.cartBadge}>2</span>
  </span>
);

function Frame({ children, fill }: { children: ReactNode; fill?: boolean }) {
  return (
    <div className={`${classes.frame} ${fill ? classes.frameFill : ""}`}>
      <div className={classes.bar}>
        <span className={classes.dot} />
        <span className={classes.dot} />
        <span className={classes.dot} />
        <span className={classes.url}>nedelya.site</span>
      </div>
      <div className={classes.screen}>{children}</div>
    </div>
  );
}

const LAYOUTS: Record<TMockupType, ReactNode> = {
  // Лендинг — одна длинная страница под один оффер: первый экран + секции
  // (задача→решение, этапы, отзывы) + форма заявки. Пример: онлайн-курс.
  landing: (
    <>
      <Nav label="Студия" links={["Программы", "Отзывы", "Цена"]} />

      {/* Первый экран: оффер + CTA + доверие */}
      <div className={classes.lHero}>
        <span className={classes.lEyebrow}>Идёт набор</span>
        <div className={classes.lTitle}>
          Сядьте на шпагат
          <br />
          за 8 недель
        </div>
        <div className={classes.lSub}>Студия растяжки для взрослых</div>
        <div className={classes.lHeroFoot}>
          <span className={classes.cta}>Записаться</span>
          <span className={classes.trust}>
            <Stars />
            <span className={classes.mutedTxt}>4,9 · 1 200 клиентов</span>
          </span>
        </div>
      </div>

      {/* Стек секций страницы */}
      <div className={classes.lBands}>
        {/* Этапы работы 1-2-3 */}
        <div className={classes.lBand}>
          <div className={classes.lSteps}>
            {[
              ["1", "Заявка"],
              ["2", "Пробное"],
              ["3", "Абонемент"],
            ].map(([n, t]) => (
              <div className={classes.lStep} key={n}>
                <span className={classes.lStepNum}>{n}</span>
                <span className={classes.lStepTxt}>{t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Форма заявки — ключевая фича */}
        <div className={classes.lForm}>
          <span className={`${classes.lFormLabel} ${classes.lFillOnly}`}>
            Оставьте заявку — перезвоним за 15 минут
          </span>
          <div className={classes.lFormRow}>
            <span className={classes.lInput}>Ваше имя</span>
            <span className={classes.lInput}>Телефон</span>
            <span className={classes.lFormBtn}>→</span>
          </div>
        </div>
      </div>
    </>
  ),

  // Визитка — многостраничный сайт компании: об, услуги, контакты + форма обратной связи
  card: (
    <>
      <Nav label="ИП" links={["О компании", "Услуги", "Контакты"]} />
      <div className={classes.cardHead}>
        <div className={`${classes.cardAvatar} ${classes.softBlock}`} />
        <div className={classes.cardHeadCol}>
          <div className={classes.cardName}>Иван Петров</div>
          <div className={classes.cardRole}>Ремонт и отделка «под ключ»</div>
        </div>
      </div>
      <div className={classes.cardContacts}>
        <span className={classes.cardContact}>
          <span className={`${classes.cIcon} ${classes.cPhone}`} />+375 29 …
        </span>
        <span className={classes.cardContact}>
          <span className={`${classes.cIcon} ${classes.cMail}`} />почта
        </span>
        <span className={classes.cardContact}>
          <span className={`${classes.cIcon} ${classes.cPin}`} />Минск
        </span>
      </div>
      {/* Форма обратной связи (имя, телефон/почта, сообщение) → на почту */}
      <div className={classes.cardForm}>
        <span className={classes.cardFormTitle}>Обратная связь</span>
        <div className={classes.cardFormRow}>
          <span className={classes.cardInput}>Имя</span>
          <span className={classes.cardInput}>Телефон или почта</span>
        </div>
        <span className={`${classes.cardInput} ${classes.cardTextarea}`}>Сообщение…</span>
        <div className={`${classes.cta} ${classes.ctaFull}`}>Отправить</div>
      </div>
    </>
  ),

  // Магазин — поиск + корзина + категории + сетка товаров с бейджами и кнопкой «Купить»
  shop: (
    <>
      <div className={classes.nav}>
        <span className={classes.navLogo}>Магазин</span>
        <span className={classes.searchPill}>Поиск товаров</span>
        <CartIcon />
      </div>
      <div className={classes.shopCats}>
        {["Все", "Одежда", "Обувь", "Дом"].map((c, i) => (
          <span
            className={`${classes.shopCat} ${i === 0 ? classes.shopCatOn : ""}`}
            key={c}
          >
            {c}
          </span>
        ))}
      </div>
      <div className={classes.shopGrid}>
        {[
          { p: "52", old: "65", b: "-20%" },
          { p: "29", old: "", b: "Хит" },
          { p: "115", old: "", b: "" },
          { p: "42", old: "", b: "" },
        ].map((it, i) => (
          <div className={classes.shopCard} key={i}>
            <div className={classes.shopImg}>
              {it.b && (
                <span
                  className={`${classes.shopTag} ${
                    it.b === "Хит" ? classes.shopTagHit : classes.shopTagSale
                  }`}
                >
                  {it.b}
                </span>
              )}
            </div>
            <div className={classes.shopMeta}>
              <div className={classes.line} style={{ width: "78%" }} />
              <div className={classes.shopBottom}>
                <span className={classes.shopPrice}>
                  {it.old && (
                    <span className={classes.shopOld}>
                      {it.old}
                      <BynSign />
                    </span>
                  )}
                  {it.p}
                  <BynSign />
                </span>
                <span className={classes.shopBuy}>Купить</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  ),

  // Портфолио — фотограф: обложка (имя + специализация), галерея работ, блок «о себе» и контакты
  portfolio: (
    <>
      <div className={classes.pfCover}>
        <span className={classes.pfAvatar} />
        <div className={classes.pfCoverCol}>
          <span className={classes.pfName}>Анна Ким</span>
          <span className={classes.pfRole}>фотограф</span>
        </div>
        <span className={classes.pfCoverCta}>Связаться</span>
      </div>
      <div className={classes.pfGrid}>
        <div className={`${classes.pfTile} ${classes.pfTileTall}`} />
        <div className={`${classes.pfTile} ${classes.pfTileWide}`}>
          <span className={classes.pfTileCaption}>Открыть проект →</span>
        </div>
        <div className={classes.pfTile} />
        <div className={classes.pfTile} />
        <div className={`${classes.pfTile} ${classes.pfTileWide}`} />
        <div className={classes.pfTile} />
      </div>
      <div className={classes.pfAbout}>
        <div className={classes.pfAboutCol}>
          <span className={classes.pfAboutLabel}>О себе</span>
          <span className={classes.pfAboutText} />
        </div>
        <div className={classes.pfContacts}>
          <span className={`${classes.pfContactIcon} ${classes.pfMail}`} />
          <span className={`${classes.pfContactIcon} ${classes.pfPhone}`} />
        </div>
      </div>
    </>
  ),

  // Каталог-витрина — фильтр-сайдбар + сетка товаров с бейджами, без корзины
  catalog: (
    <>
      <div className={classes.nav}>
        <span className={classes.navLogo}>Витрина</span>
        <span className={classes.searchPill}>Поиск по каталогу</span>
      </div>
      <div className={classes.catBody}>
        <div className={classes.catAside}>
          <span className={classes.catAsideTitle}>Фильтры</span>
          <div className={classes.catGroup}>
            {[
              { w: "82%", on: true },
              { w: "64%", on: false },
              { w: "73%", on: false },
            ].map((o, i) => (
              <span className={classes.catOpt} key={i}>
                <span className={`${classes.catBox} ${o.on ? classes.catBoxOn : ""}`} />
                <span className={classes.catBar} style={{ width: o.w }} />
              </span>
            ))}
          </div>
          <div className={classes.catPriceRow}>
            <span className={classes.catMini} style={{ width: "42%" }} />
            <div className={classes.catSlider}>
              <span className={classes.catSliderFill} />
            </div>
          </div>
          <span className={classes.catOpt}>
            <span className={classes.catToggle}>
              <span className={classes.catToggleDot} />
            </span>
            <span className={classes.catBar} style={{ width: "58%" }} />
          </span>
        </div>
        <div className={classes.catGrid}>
          {[
            { p: "65", b: "SALE" },
            { p: "29", b: "NEW" },
            { p: "115", b: "" },
            { p: "42", b: "" },
          ].map((it, i) => (
            <div className={classes.catCard} key={i}>
              <div className={classes.catImg}>
                {it.b && (
                  <span
                    className={`${classes.catTag} ${
                      it.b === "SALE" ? classes.catTagSale : classes.catTagNew
                    }`}
                  >
                    {it.b}
                  </span>
                )}
              </div>
              <div className={classes.catMeta}>
                <div className={classes.line} style={{ width: "76%" }} />
                <span className={classes.catCardPrice}>
                  {it.p}
                  <BynSign />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  ),

  // Сайт услуг — прайс + онлайн-запись: выбор времени (слоты) + кнопка «Записаться онлайн»
  services: (
    <>
      <Nav label="Услуги" links={["Услуги", "Цены", "Отзывы"]} />
      <div className={classes.svcList}>
        {[
          { n: "Стрижка", t: "40 мин", p: "35" },
          { n: "Окрашивание", t: "2 часа", p: "90" },
          { n: "Укладка", t: "30 мин", p: "25" },
        ].map((s) => (
          <div className={classes.svcRow} key={s.n}>
            <span className={classes.svcRowIcon} />
            <div className={classes.svcRowCol}>
              <div className={classes.svcName}>{s.n}</div>
              <div className={classes.svcTime}>{s.t}</div>
            </div>
            <span className={classes.svcPrice}>
              {s.p}
              <BynSign />
            </span>
          </div>
        ))}
      </div>
      {/* Онлайн-запись — выбор свободного времени */}
      <div className={classes.svcBook}>
        <div className={classes.svcBookHead}>
          <span className={classes.svcBookTitle}>Онлайн-запись</span>
          <span className={classes.svcBookDay}>Ср, 14 авг</span>
        </div>
        <div className={classes.svcSlots}>
          {["10:00", "12:30", "15:00", "17:30"].map((t, i) => (
            <span
              className={`${classes.svcSlot} ${i === 1 ? classes.svcSlotOn : ""}`}
              key={t}
            >
              {t}
            </span>
          ))}
        </div>
        <div className={`${classes.cta} ${classes.ctaFull}`}>Записаться онлайн</div>
      </div>
    </>
  ),
};

export function ServiceMockup({ type, fill }: { type: TMockupType; fill?: boolean }) {
  return <Frame fill={fill}>{LAYOUTS[type]}</Frame>;
}
ServiceMockup.displayName = "ServiceMockup";
