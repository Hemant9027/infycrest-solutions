import { Bird } from "lucide-react";
import type { ReactNode } from "react";

/* ——— Section kicker: "01 — About Gaga's Nest" ——— */
export function Kicker({
  index,
  label,
  tone = "ink",
  className = "",
}: {
  index: string;
  label: string;
  tone?: "ink" | "cream";
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] ${
        tone === "cream" ? "text-cream/70" : "text-ink/60"
      } ${className}`}
    >
      <span className={tone === "cream" ? "text-flamingo" : "text-coral"}>
        {index}
      </span>
      <span
        className={`h-px w-10 ${tone === "cream" ? "bg-cream/30" : "bg-ink/25"}`}
      />
      <span>{label}</span>
    </div>
  );
}

/* ——— Rotating circular stamp ——— */
export function Stamp({ className = "" }: { className?: string }) {
  const id = "stamp-circle";
  return (
    <div
      className={`grid place-items-center rounded-full bg-coral text-cream shadow-[0_20px_40px_-16px_rgb(173_76_52/0.6)] ${className}`}
    >
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full animate-spin-slower"
        aria-hidden
      >
        <defs>
          <path id={id} d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
        </defs>
        <text
          className="fill-cream uppercase"
          style={{ fontSize: "9.2px", letterSpacing: "2.4px", fontWeight: 700 }}
        >
          <textPath href={`#${id}`}>
            Gaga’s Nest · Matthew Town · Great Inagua ·
          </textPath>
        </text>
      </svg>
      <Bird className="h-7 w-7" strokeWidth={1.6} />
    </div>
  );
}

/* ——— Section header block ——— */
export function SectionHeading({
  index,
  label,
  title,
  tone = "ink",
  className = "",
}: {
  index: string;
  label: string;
  title: ReactNode;
  tone?: "ink" | "cream";
  className?: string;
}) {
  return (
    <div className={className}>
      <Kicker index={index} label={label} tone={tone} />
      <h2
        className={`mt-6 font-display text-4xl leading-[1.04] tracking-[-0.015em] text-balance sm:text-5xl lg:text-6xl ${
          tone === "cream" ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
