"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Fade + rise into view, once. */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Eyebrow — the little overlined section label. */
export function Eyebrow({
  children,
  tone = "dark",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.28em] ${
        tone === "dark" ? "text-lagoon-600" : "text-lagoon-300"
      }`}
    >
      <span
        className={`h-px w-8 ${tone === "dark" ? "bg-lagoon-500" : "bg-lagoon-300"}`}
        aria-hidden
      />
      {children}
    </span>
  );
}

/** Section heading block. */
export function SectionHeading({
  eyebrow,
  title,
  tone = "dark",
  align = "left",
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={`${align === "center" ? "flex flex-col items-center text-center" : ""} ${className}`}>
      <Reveal>
        <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={`font-display mt-4 text-4xl leading-[1.06] font-medium text-balance sm:text-5xl lg:text-[3.4rem] ${
            tone === "dark" ? "text-ink" : "text-sand-50"
          }`}
        >
          {title}
        </h2>
      </Reveal>
    </div>
  );
}
