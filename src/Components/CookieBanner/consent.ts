/* Cookie consent storage + Google Consent Mode sync.
   Default consent state is set in index.html before GTM loads — keep the key in sync. */

const STORAGE_KEY = "nd-cookie-consent";
export const OPEN_SETTINGS_EVENT = "nd-cookie-settings";

export type TConsent = "granted" | "denied";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function getConsent(): TConsent | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

export function setConsent(value: TConsent) {
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch {
    /* storage unavailable — choice applies to this visit only */
  }
  window.gtag?.("consent", "update", { analytics_storage: value });
}

/** Reopens the banner so the visitor can change their choice (e.g. from the footer). */
export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
}
