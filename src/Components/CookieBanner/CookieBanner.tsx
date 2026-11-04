import { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { getConsent, setConsent, OPEN_SETTINGS_EVENT, type TConsent } from "./consent";
import classes from "./CookieBanner.module.css";

export function CookieBanner() {
  const [open, setOpen] = useState(() => getConsent() === null);

  useEffect(() => {
    const show = () => setOpen(true);
    window.addEventListener(OPEN_SETTINGS_EVENT, show);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, show);
  }, []);

  if (!open) return null;

  const choose = (value: TConsent) => {
    setConsent(value);
    setOpen(false);
  };

  return (
    <div className={classes.banner} role="dialog" aria-live="polite" aria-label="Согласие на использование cookie">
      <p className={classes.text}>
        Мы используем файлы cookie и Google Analytics, чтобы понимать, как посетители пользуются
        сайтом. Подробнее — в&nbsp;<a href="/privacy">Политике конфиденциальности</a>.
      </p>
      <div className={classes.actions}>
        <Button variant="outline" size="sm" onClick={() => choose("denied")}>
          Отклонить
        </Button>
        <Button size="sm" onClick={() => choose("granted")}>
          Принять
        </Button>
      </div>
    </div>
  );
}
CookieBanner.displayName = "CookieBanner";
