import { memo, useId } from "react";

type TLogoMarkProps = {
  className?: string;
};

/**
 * Nedelya brand mark — a minimal, streamlined coral rocket silhouette (no
 * backdrop), echoing the hero rocket ("fast launch"). Inline SVG so it stays
 * crisp at any size. Gradient ids are scoped per instance so multiple marks
 * on one page don't collide.
 */
export const LogoMark = memo<TLogoMarkProps>(({ className }) => {
  const uid = useId();
  const body = `${uid}-body`;
  const flame = `${uid}-flame`;

  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      role="img"
      aria-label="Nedelya.site"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={body} x1="24" y1="3" x2="24" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFA968" />
          <stop offset="1" stopColor="#EF4A20" />
        </linearGradient>
        <linearGradient id={flame} x1="24" y1="42" x2="24" y2="49" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFB23D" />
          <stop offset="1" stopColor="#F0491F" />
        </linearGradient>
      </defs>

      {/* fins */}
      <path d="M17 33 C11 35 8 40 8.5 43.5 C12 42 16 40 17 37 Z" fill={`url(#${body})`} opacity="0.85" />
      <path d="M31 33 C37 35 40 40 39.5 43.5 C36 42 32 40 31 37 Z" fill={`url(#${body})`} opacity="0.85" />

      {/* body */}
      <path
        d="M24 3 C31 10 34 19 34 27 L34 33 C34 37 31.5 40 28 41.5 L20 41.5 C16.5 40 14 37 14 33 L14 27 C14 19 17 10 24 3 Z"
        fill={`url(#${body})`}
      />

      {/* flame */}
      <path d="M20.5 42 C21.5 46 24 48.5 24 48.5 C24 48.5 26.5 46 27.5 42 Z" fill={`url(#${flame})`} />

      {/* window */}
      <circle cx="24" cy="23" r="4.4" fill="#ffffff" />
      <circle cx="24" cy="23" r="4.4" fill="#233044" opacity="0.14" />
      <ellipse cx="22.4" cy="21.6" rx="1.5" ry="1" fill="#ffffff" opacity="0.9" />
    </svg>
  );
});
LogoMark.displayName = "LogoMark";
