import type { ReactNode } from "react";
import { Reveal } from "./motion";

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  dark = false,
  className = "",
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <Reveal>
        <p
          className={`flex items-center gap-4 text-[11px] font-semibold tracking-[0.32em] uppercase ${
            dark ? "text-lagoon-300" : "text-lagoon-500"
          }`}
        >
          <span className="font-display text-sm italic tracking-normal">
            {index}
          </span>
          <span className="h-px w-10 bg-current opacity-40" aria-hidden="true" />
          <span>{eyebrow}</span>
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={`mt-6 max-w-3xl font-display text-4xl leading-[1.05] font-light tracking-tight text-balance md:text-6xl ${
            dark ? "text-sand-50" : "text-lagoon-950"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.16}>
          <p
            className={`mt-6 max-w-xl text-base leading-relaxed md:text-lg ${
              dark ? "text-sand-100/75" : "text-lagoon-950/70"
            }`}
          >
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

export function Italic({ children }: { children: ReactNode }) {
  return (
    <em className="font-display font-normal italic text-coral-500">{children}</em>
  );
}
