import type { ReactNode } from "react";

type SectionHeadingProps = {
  index: string;
  label: string;
  title: ReactNode;
  intro?: string;
  tone?: "light" | "dark";
  className?: string;
};

/** Editorial section header: index marker, small-caps label, hairline rule, display title. */
export function SectionHeading({ index, label, title, intro, tone = "light", className = "" }: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <div className={`mb-12 md:mb-16 ${className}`}>
      <div className="mb-6 flex items-center gap-4">
        <span className="font-display text-lg italic text-coral">({index})</span>
        <span className={`text-[11px] font-semibold uppercase tracking-[0.32em] ${dark ? "text-cream/70" : "text-ink-soft"}`}>
          {label}
        </span>
        <div
          aria-hidden
          className="h-px flex-1"
          style={{
            background: dark
              ? "linear-gradient(90deg, rgba(250,246,234,0.35), transparent)"
              : "linear-gradient(90deg, var(--color-sandline), transparent)",
          }}
        />
      </div>
      <h2
        className={`max-w-3xl font-display text-[clamp(2.1rem,4.6vw,3.9rem)] leading-[1.04] font-medium tracking-[-0.01em] ${
          dark ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {intro ? (
        <p className={`mt-5 max-w-xl text-base leading-relaxed md:text-lg ${dark ? "text-cream/70" : "text-ink-soft"}`}>
          {intro}
        </p>
      ) : null}
    </div>
  );
}
