import { useId } from "react";

/** Mid-century armchair illustration used in the furniture niche (tile + concept). */
export function Armchair({ className }: { className?: string }) {
  const uid = useId();
  const uph = `${uid}-uph`;
  const uph2 = `${uid}-uph2`;
  const wood = `${uid}-wood`;

  return (
    <svg className={className} viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={uph} x1="80" y1="40" x2="240" y2="180" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C77A4E" />
          <stop offset="1" stopColor="#A9542E" />
        </linearGradient>
        <linearGradient id={uph2} x1="80" y1="120" x2="240" y2="200" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B96C42" />
          <stop offset="1" stopColor="#914a28" />
        </linearGradient>
        <linearGradient id={wood} x1="90" y1="150" x2="90" y2="230" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7A5A44" />
          <stop offset="1" stopColor="#513a2b" />
        </linearGradient>
      </defs>
      {/* legs */}
      <rect x="86" y="150" width="10" height="78" rx="5" fill={`url(#${wood})`} transform="rotate(11 91 189)" />
      <rect x="224" y="150" width="10" height="78" rx="5" fill={`url(#${wood})`} transform="rotate(-11 229 189)" />
      {/* backrest */}
      <path
        d="M96 60 C96 34 128 22 160 22 C192 22 224 34 224 60 L224 120 C224 108 200 102 160 102 C120 102 96 108 96 120 Z"
        fill={`url(#${uph})`}
      />
      <path d="M96 60 C96 40 122 28 160 28 L160 42 C130 42 110 50 110 66 Z" fill="#ffffff" opacity=".14" />
      {/* seat */}
      <path
        d="M84 116 C84 104 116 98 160 98 C204 98 236 104 236 116 L232 150 C232 140 200 134 160 134 C120 134 88 140 88 150 Z"
        fill={`url(#${uph2})`}
      />
      <path d="M100 118 C126 110 194 110 220 118" stroke="#7a3f22" strokeOpacity=".35" strokeWidth="2" fill="none" />
      {/* armrests */}
      <ellipse cx="93" cy="118" rx="10" ry="14" fill={`url(#${uph})`} />
      <ellipse cx="227" cy="118" rx="10" ry="14" fill={`url(#${uph})`} />
      {/* floor shadow */}
      <ellipse cx="160" cy="232" rx="96" ry="9" fill="#5a3d26" opacity=".18" />
    </svg>
  );
}
Armchair.displayName = "Armchair";
