"use client";

import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string | string[];
  subheading?: string;
  align?: "left" | "center";
  accentIndex?: number; // which title line to accent (gold/red)
  accentColor?: "gold" | "crimson";
};

const accentMap = { gold: "text-gold", crimson: "text-crimson" };

export default function SectionHeading({
  eyebrow,
  title,
  subheading,
  align = "left",
  accentIndex = -1,
  accentColor = "gold",
}: SectionHeadingProps) {
  const lines = Array.isArray(title) ? title : [title];
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl"}>
      <Reveal>
        <p className="eyebrow text-[11px] font-semibold text-gold mb-6 flex items-center gap-3">
          {align === "left" && <span className="gold-rule w-10 inline-block" aria-hidden="true" />}
          {align === "center" && <span className="gold-rule w-10 inline-block mx-auto" aria-hidden="true" />}
          <span>{eyebrow}</span>
          {" "}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-ivory">
          {lines.map((line, i) => (
            <span key={i} className="block">
              {i === accentIndex ? (
                <em className={`not-italic ${accentMap[accentColor]}`}>{line}</em>
              ) : (
                line
              )}
            </span>
          ))}
        </h2>
      </Reveal>
      {subheading && (
        <Reveal delay={0.16}>
          <p className="mt-6 text-lg text-stonewarm max-w-xl leading-relaxed">{subheading}</p>
        </Reveal>
      )}
    </div>
  );
}
