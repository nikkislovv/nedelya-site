import { useEffect } from "react";

/** Канонический адрес сайта — единственное место, где он задаётся в JS. */
export const SITE_URL = "https://nedelya-site.net.by";

interface ISeoProps {
  /** <title> страницы — до ~65 символов */
  title: string;
  /** meta description — до ~160 символов */
  description: string;
  /** путь страницы для canonical и og:url, например "/" или "/privacy" */
  path: string;
  /** закрыть страницу от индексации */
  noindex?: boolean;
}

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Синхронизирует <head> с текущим роутом: title, description, canonical,
 * Open Graph и Twitter-карточку (текстовое превью, без картинки). Базовые
 * значения для главной стоят статически в index.html — этот компонент нужен
 * при переходах внутри SPA.
 */
export function Seo({ title, description, path, noindex = false }: ISeoProps) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;

    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta(
      "name",
      "robots",
      noindex ? "noindex, follow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    );
    upsertCanonical(url);

    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:locale", "ru_RU");
    upsertMeta("property", "og:site_name", "Nedelya.site");

    upsertMeta("name", "twitter:card", "summary");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
  }, [title, description, path, noindex]);

  return null;
}
Seo.displayName = "Seo";
