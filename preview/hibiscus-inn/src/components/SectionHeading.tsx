import type { ReactNode } from "react";
import Hibiscus from "@/components/Hibiscus";
import Reveal from "@/components/Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
}

export default function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  tone = "dark",
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <Reveal
      className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}
    >
      <div
        className={`flex items-center gap-3 ${centered ? "justify-center" : ""}`}
      >
        <Hibiscus
          className={`h-5 w-5 ${
            tone === "dark" ? "text-hibiscus-500" : "text-hibiscus-300"
          }`}
        />
        <p
          className={`text-[0.7rem] font-semibold uppercase tracking-[0.32em] ${
            tone === "dark" ? "text-sea-700" : "text-sand-200"
          }`}
        >
          {eyebrow}
        </p>
      </div>
      <h2
        className={`mt-5 font-display text-4xl leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-[3.4rem] ${
          tone === "dark" ? "text-ink" : "text-sand-50"
        }`}
      >
        {title}
      </h2>
      {lede ? (
        <p
          className={`mt-6 max-w-xl text-base leading-relaxed sm:text-lg ${
            centered ? "mx-auto" : ""
          } ${tone === "dark" ? "text-ink/70" : "text-sand-100/85"}`}
        >
          {lede}
        </p>
      ) : null}
    </Reveal>
  );
}
