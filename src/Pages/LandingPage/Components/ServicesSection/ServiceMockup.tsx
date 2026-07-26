import type { ReactNode } from "react";
import { BynSign } from "../../../../Components/BynSign/BynSign";
import classes from "./ServiceMockup.module.css";

export type TMockupType =
  | "landing"
  | "card"
  | "shop"
  | "portfolio"
  | "blog"
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

function Frame({ children }: { children: ReactNode }) {
  return (
    <div className={classes.frame}>
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
  // Лендинг — одна страница под один оффер (пример: онлайн-курс)
  landing: (
    <>
      <Nav label="Академия" links={["Программа", "Цена", "Отзывы"]} />
      <div className={classes.lHero}>
        <div className={classes.lCol}>
          <div className={classes.lTitle}>
            Профессия
            <br />
            «Дизайнер»
          </div>
          <div className={classes.lSub}>Онлайн-курс с нуля за 4 месяца</div>
          <div className={`${classes.cta} ${classes.ctaInline}`}>Записаться на курс</div>
          <div className={classes.trust}>
            <Stars />
            <span className={classes.mutedTxt}>4,9 · 2 300 учеников</span>
          </div>
        </div>
        <div className={`${classes.lArt} ${classes.softBlock}`} />
      </div>
      <div className={classes.lFeatures}>
        <span>Диплом</span>
        <span>Практика</span>
        <span>Рассрочка</span>
      </div>
    </>
  ),

  // Визитка — имя, род деятельности, контакты, кнопка связи
  card: (
    <>
      <Nav label="ИП" links={["Обо мне", "Услуги", "Контакты"]} />
      <div className={classes.cardHead}>
        <div className={`${classes.cardAvatar} ${classes.softBlock}`} />
        <div className={classes.cardHeadCol}>
          <div className={classes.cardName}>Иван Петров</div>
          <div className={classes.cardRole}>Мастер-отделочник</div>
        </div>
      </div>
      <div className={classes.cardContacts}>
        <div>
          <span className={`${classes.cIcon} ${classes.cPhone}`} />Номер телефона
        </div>
        <div>
          <span className={`${classes.cIcon} ${classes.cMail}`} />Email
        </div>
        <div>
          <span className={`${classes.cIcon} ${classes.cPin}`} />Адрес и карта
        </div>
      </div>
      <div className={`${classes.cta} ${classes.ctaFull}`}>Связаться</div>
    </>
  ),

  // Магазин — поиск + корзина + сетка товаров с ценами и кнопкой «Купить»
  shop: (
    <>
      <div className={classes.nav}>
        <span className={classes.navLogo}>Магазин</span>
        <span className={classes.searchPill}>Поиск товаров</span>
        <CartIcon />
      </div>
      <div className={classes.shopGrid}>
        {["65", "29", "115", "42"].map((p, i) => (
          <div className={classes.shopCard} key={i}>
            <div className={classes.shopImg} />
            <div className={classes.shopMeta}>
              <div className={classes.line} style={{ width: "78%" }} />
              <div className={classes.shopBottom}>
                <span className={classes.shopPrice}>
                  {p}
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

  // Портфолио — фотограф: фильтры-жанры + галерея снимков
  portfolio: (
    <>
      <div className={classes.nav}>
        <span className={classes.navLogo}>Анна Ким</span>
        <span className={classes.mutedTxt}>фотограф</span>
      </div>
      <div className={classes.filters}>
        <span className={`${classes.filter} ${classes.filterActive}`}>Все</span>
        <span className={classes.filter}>Портрет</span>
        <span className={classes.filter}>Свадьба</span>
        <span className={classes.filter}>Природа</span>
      </div>
      <div className={classes.pfGrid}>
        <div className={`${classes.pfTile} ${classes.pfTileTall}`} />
        <div className={`${classes.pfTile} ${classes.pfTileWide}`} />
        <div className={classes.pfTile} />
        <div className={classes.pfTile} />
        <div className={`${classes.pfTile} ${classes.pfTileWide}`} />
        <div className={classes.pfTile} />
      </div>
    </>
  ),

  // Блог — кулинарный: поиск + статья с датой и временем чтения + лента
  blog: (
    <>
      <div className={classes.nav}>
        <span className={classes.navLogo}>Рецепты</span>
        <span className={classes.searchPill}>Поиск рецептов</span>
      </div>
      <div className={classes.blogFeatured}>
        <div className={classes.blogFeatThumb} />
        <div className={classes.blogCol}>
          <span className={classes.blogTag}>РЕЦЕПТ</span>
          <div className={classes.blogTitle}>Паста карбонара за 15 минут</div>
          <div className={classes.blogMeta}>
            <span className={classes.mutedTxt}>12 июля</span>
            <span className={classes.blogRead}>5 мин</span>
          </div>
        </div>
      </div>
      <div className={classes.blogList}>
        {["Домашний хлеб без замеса", "5 идей для завтрака"].map((t) => (
          <div className={classes.blogRow} key={t}>
            <div className={classes.blogThumb} />
            <div className={classes.blogCol}>
              <div className={classes.blogRowTitle}>{t}</div>
              <span className={classes.mutedTxt}>3 мин чтения</span>
            </div>
          </div>
        ))}
      </div>
    </>
  ),

  // Сайт услуг — прайс с длительностью и ценой + кнопка «Записаться»
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
        <div className={`${classes.cta} ${classes.ctaFull}`}>Записаться онлайн</div>
      </div>
    </>
  ),
};

export function ServiceMockup({ type }: { type: TMockupType }) {
  return <Frame>{LAYOUTS[type]}</Frame>;
}
ServiceMockup.displayName = "ServiceMockup";
