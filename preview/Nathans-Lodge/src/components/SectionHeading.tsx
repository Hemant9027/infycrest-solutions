import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: ReactNode;
  dark?: boolean;
  align?: "left" | "center";
  className?: string;
};

/**
 * Editorial section header: hairline rule, numbered kicker
 * and a large Fraunces display title.
 */
export default function SectionHeading({
  index,
  eyebrow,
  title,
  dark = false,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const line = dark ? "bg-seafoam/20" : "bg-ink/15";
  const kicker = dark ? "text-brass" : "text-drift";
  return (
    <Reveal className={className}>
      <div
        className={`flex items-center gap-4 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className={`h-px w-10 ${line}`} aria-hidden />
        <p
          className={`text-[11px] font-semibold uppercase tracking-[0.35em] ${kicker}`}
        >
          {index} — {eyebrow}
        </p>
      </div>
      <h2
        className={`mt-6 font-display text-[clamp(2.1rem,5vw,4rem)] font-light leading-[1.04] tracking-[-0.015em] ${
          dark ? "text-shell" : "text-ink"
        } ${align === "center" ? "text-center" : ""} text-balance`}
      >
        {title}
      </h2>
    </Reveal>
  );
}
