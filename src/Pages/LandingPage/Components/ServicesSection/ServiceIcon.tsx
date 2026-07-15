import type { TMockupType } from "./ServiceMockup";

const DARK = "rgba(0,0,0,0.24)";
const DARK_SOFT = "rgba(0,0,0,0.16)";

/** White glyphs on the coloured 3D badge — one recognizable symbol per service. */
const GLYPHS: Record<TMockupType, JSX.Element> = {
  // Лендинг — one page focused on a big call-to-action
  landing: (
    <>
      <rect x="4.5" y="3.4" width="15" height="17.2" rx="2.6" fill="#fff" />
      <rect x="7.1" y="6.4" width="9.8" height="2.1" rx="1.05" fill={DARK} />
      <rect x="7.1" y="9.7" width="6.4" height="1.5" rx="0.75" fill={DARK_SOFT} />
      <rect x="7.1" y="13.1" width="9.8" height="4.1" rx="2.05" fill={DARK} />
    </>
  ),
  // Визитка — business card
  card: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="2.6" fill="#fff" />
      <circle cx="8" cy="11" r="2.1" fill={DARK} />
      <rect x="12" y="9.2" width="6" height="1.7" rx="0.85" fill={DARK} />
      <rect x="12" y="12" width="4.6" height="1.5" rx="0.75" fill={DARK_SOFT} />
      <rect x="5.6" y="14.6" width="12.8" height="1.5" rx="0.75" fill={DARK_SOFT} />
    </>
  ),
  // Интернет-магазин — shopping bag
  shop: (
    <>
      <path
        d="M6.4 8.4h11.2l-0.8 9.9a1.4 1.4 0 0 1-1.4 1.3H8.6a1.4 1.4 0 0 1-1.4-1.3L6.4 8.4Z"
        fill="#fff"
      />
      <path d="M9 8.6V6.6a3 3 0 0 1 6 0v2" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <circle cx="12" cy="12.6" r="1.3" fill={DARK} />
    </>
  ),
  // Портфолио — image / gallery frame
  portfolio: (
    <>
      <rect x="3.4" y="5" width="17.2" height="14" rx="2.6" fill="#fff" />
      <circle cx="8.4" cy="9.6" r="1.7" fill={DARK} />
      <path d="M4.6 17.4l4-4.7 3 3 3.2-3.8 4.4 5.5H4.6Z" fill={DARK} />
    </>
  ),
  // Блог — article / content
  blog: (
    <>
      <rect x="4.6" y="3.4" width="14.8" height="17.2" rx="2.6" fill="#fff" />
      <rect x="7.1" y="7" width="9.8" height="1.9" rx="0.95" fill={DARK} />
      <rect x="7.1" y="10.6" width="9.8" height="1.5" rx="0.75" fill={DARK_SOFT} />
      <rect x="7.1" y="13.2" width="9.8" height="1.5" rx="0.75" fill={DARK_SOFT} />
      <rect x="7.1" y="15.8" width="6" height="1.5" rx="0.75" fill={DARK_SOFT} />
    </>
  ),
  // Сайт услуг — calendar / booking with check
  services: (
    <>
      <rect x="4" y="5" width="16" height="15" rx="2.6" fill="#fff" />
      <rect x="4" y="5" width="16" height="4.2" rx="2.6" fill={DARK} />
      <rect x="7.6" y="3" width="1.9" height="4.2" rx="0.95" fill="#fff" />
      <rect x="14.5" y="3" width="1.9" height="4.2" rx="0.95" fill="#fff" />
      <path
        d="M8.8 14.2l2.1 2.1 4.3-4.7"
        stroke={DARK}
        strokeWidth="1.9"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
};

export function ServiceIcon({ type, className }: { type: TMockupType; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {GLYPHS[type]}
    </svg>
  );
}
ServiceIcon.displayName = "ServiceIcon";
