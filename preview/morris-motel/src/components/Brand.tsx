/** Hand-drawn palm mark used across the site (matches the favicon). */
export function PalmMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M24 44c-1-9-1.4-16 .4-23" />
      <path d="M24.4 21.5c-5-5.6-13-6.2-18.2-1.6 4.5.4 8.7 1.1 12.4 3-5.7-.5-10.4 2-13 5.7 3.7-1.1 7.6-1.5 11.2-.9" />
      <path d="M24 21.2c5-5.6 13-6.4 18.4-2.4-4.5.6-8.8 1.5-12.4 3.3 5.7-.6 10.4 1.6 13 5.2-3.7-1-7.6-1.3-11.3-.6" />
      <path d="M18 44h13" />
    </svg>
  );
}

/** Rotating circular wordmark badge. */
export function OrbitBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      <svg viewBox="0 0 120 120" className="h-full w-full animate-spin-slower">
        <defs>
          <path
            id="orbit-circle"
            d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0"
          />
        </defs>
        <text className="fill-current text-[9px] font-semibold uppercase tracking-[0.32em]">
          <textPath href="#orbit-circle">
            Morris Motel · Nassau · New Providence · Bahamas ·
          </textPath>
        </text>
      </svg>
      <PalmMark className="absolute left-1/2 top-1/2 size-8 -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
}

/** Section eyebrow: index + rule + label. */
export function Eyebrow({
  index,
  label,
  light = false,
}: {
  index: string;
  label: string;
  light?: boolean;
}) {
  return (
    <div className="flex items-center gap-4">
      <span
        className={`font-display text-sm italic ${light ? "text-sun" : "text-coral"}`}
      >
        {index}
      </span>
      <span
        className={`h-px w-10 ${light ? "bg-cream/30" : "bg-ink/20"}`}
        aria-hidden="true"
      />
      <span
        className={`text-xs font-semibold uppercase tracking-[0.28em] ${
          light ? "text-cream/80" : "text-sea"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
