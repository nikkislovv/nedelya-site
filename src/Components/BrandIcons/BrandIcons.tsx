/** Monochrome brand/contact glyphs (inherit currentColor). */

type IconProps = { className?: string };

export function TelegramIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M21.94 3.3a1.2 1.2 0 0 0-1.24-.19L3.28 9.86c-.95.37-.9 1.74.07 2.03l4.3 1.34 1.6 5.02c.2.63 1 .82 1.46.34l2.38-2.45 4.2 3.08c.5.37 1.22.11 1.37-.5l3.28-13.4a1.2 1.2 0 0 0-.37-1.02z"
        fill="currentColor"
      />
      <path d="M8.02 13.23 16.6 7.7l-6.94 6.46-.02 3.06z" fill="#000" opacity="0.16" />
    </svg>
  );
}

export function WhatsappIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M12 2.4C6.7 2.4 2.4 6.5 2.4 11.6c0 1.8.54 3.48 1.48 4.9L2.5 21.6l5.3-1.36a10 10 0 0 0 4.2.92c5.3 0 9.6-4.1 9.6-9.2S17.3 2.4 12 2.4z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M9.1 7.6c.28-.55 1-.55 1.28 0l.64 1.28c.18.36 0 .74-.3 1.02l-.34.32a4.4 4.4 0 0 0 2.12 2.12l.32-.34c.28-.3.66-.48 1.02-.3l1.28.64c.55.28.55 1 0 1.28-.88.55-2.06.65-3.32 0a7.2 7.2 0 0 1-3.04-3.04c-.65-1.26-.55-2.44 0-2.98z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ViberIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M7.3 3.5c-.68-.4-1.55-.22-2.02.42L4.1 5.3c-.48.64-.58 1.48-.26 2.2a16.5 16.5 0 0 0 8.62 8.62c.72.32 1.56.22 2.2-.26l1.38-1.02c.64-.47.82-1.34.42-2.02l-.88-1.5c-.33-.57-1-.83-1.63-.66l-1.53.41c-.4.1-.83-.01-1.12-.3l-1.7-1.7a1.2 1.2 0 0 1-.3-1.12l.41-1.53c.17-.63-.09-1.3-.66-1.63l-1.5-.88z"
        fill="currentColor"
      />
      <path d="M14 4.3c2.2.4 3.9 2.1 4.3 4.3M13.4 6.9c1.1.25 1.95 1.1 2.2 2.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function EmailIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="2.6" y="4.8" width="18.8" height="14.4" rx="2.6" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M3.6 6.6 12 12.7l8.4-6.1" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
