import type { ReactNode } from "react";

export function Eyebrow({
  index,
  label,
  tone = "dark",
}: {
  index: string;
  label: string;
  tone?: "dark" | "light";
}) {
  return (
    <p
      className={`flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.38em] ${
        tone === "dark" ? "text-sea" : "text-goldlight"
      }`}
    >
      <span className={tone === "dark" ? "text-gold" : "text-aqua"}>
        <svg viewBox="0 0 10 10" aria-hidden className="size-2">
          <rect x="1.9" y="1.9" width="6.2" height="6.2" transform="rotate(45 5 5)" fill="currentColor" />
        </svg>
      </span>
      <span className={tone === "dark" ? "text-ink/45" : "text-ivory/45"}>{index}</span>
      <span className={`h-px w-10 ${tone === "dark" ? "bg-ink/20" : "bg-ivory/25"}`} />
      {label}
    </p>
  );
}

export function Diamond({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 10 10" aria-hidden className={className}>
      <rect x="1.9" y="1.9" width="6.2" height="6.2" transform="rotate(45 5 5)" fill="currentColor" />
    </svg>
  );
}

export type SectionChild = ReactNode;
