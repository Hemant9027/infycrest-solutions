import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  tone = "dark",
  align = "left",
  className,
}: SectionHeadingProps) {
  const isLight = tone === "light";

  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <Reveal>
        <p className={cn("eyebrow", align === "center" && "justify-center", isLight ? "text-tide-300" : "text-lagoon-600")}>
          <span className="opacity-60">{index}</span>
          <span>{eyebrow}</span>
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "mt-5 font-display text-4xl leading-[1.05] font-light tracking-tight text-balance sm:text-5xl lg:text-6xl",
            isLight ? "text-sand-50" : "text-pine-950",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.16}>
          <p
            className={cn(
              "mt-6 max-w-2xl text-base leading-relaxed sm:text-lg",
              align === "center" && "mx-auto",
              isLight ? "text-sand-50/70" : "text-pine-900/70",
            )}
          >
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
