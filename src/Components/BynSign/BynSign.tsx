import classes from "./BynSign.module.css";

/**
 * Belarusian ruble sign (BYN) rendered from an icon via CSS mask,
 * so it inherits the surrounding text color (currentColor).
 * Scales with font-size — drop it right after a price number.
 */
export function BynSign({ className }: { className?: string }) {
  return <i className={`${classes.byn} ${className ?? ""}`} role="img" aria-label="белорусских рублей" />;
}
BynSign.displayName = "BynSign";
