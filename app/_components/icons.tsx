/*
  One drawn icon set, one stroke weight. Granada means pomegranate and the
  fruit is the city's emblem, so the pomegranate is the programme's mark —
  beside the wordmark, at the close, and in the footer. It is drawn in saffron
  because on a clay ground a red fruit is invisible; the ground is the fruit.
*/

type IconProps = { className?: string };

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

/*
  The crown is what makes a pomegranate legible at 20px, so it leads. An
  earlier version placed three seeds inside the body; two sat symmetrically
  above a third and the whole mark read as a face.
*/
export function Pomegranate({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...stroke}>
      <path d="M9.9 2.9 12 6.3l2.1-3.4" />
      <path d="M12 6.3V2.6" />
      <path d="M12 6.3c4.2 0 7 3.3 7 7.4 0 4.3-3.1 7.7-7 7.7s-7-3.4-7-7.7c0-4.1 2.8-7.4 7-7.4Z" />
      <path d="M8.4 12.7c1.6 1 5.6 1 7.2 0" />
    </svg>
  );
}

export function Check({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...stroke}>
      <path d="M4.5 12.6 9.4 17.5 19.5 6.9" />
    </svg>
  );
}

export function Minus({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...stroke}>
      <path d="M5.5 12h13" />
    </svg>
  );
}

export function ArrowRight({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...stroke}>
      <path d="M4.5 12h15" />
      <path d="M13.2 5.8 19.5 12l-6.3 6.2" />
    </svg>
  );
}

export function Mail({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...stroke}>
      <rect x="2.8" y="5" width="18.4" height="14" rx="2.2" />
      <path d="m3.6 7.2 7.3 5.2c.7.5 1.5.5 2.2 0l7.3-5.2" />
    </svg>
  );
}

export function Instagram({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...stroke}>
      <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.1" cy="6.9" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Play({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...stroke}>
      <path d="M8.5 5.8v12.4c0 .8.9 1.3 1.6.9l10-6.2a1 1 0 0 0 0-1.8l-10-6.2c-.7-.4-1.6.1-1.6.9Z" />
    </svg>
  );
}

export function Chevron({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...stroke}>
      <path d="m8.5 5.5 6.4 6.5-6.4 6.5" />
    </svg>
  );
}
