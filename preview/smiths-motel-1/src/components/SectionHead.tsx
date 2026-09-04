import Reveal from "@/components/Reveal";

export default function SectionHead({
  eyebrow,
  title,
  sub,
  align = "center",
  tone = "light",
}: {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
}) {
  const alignCls =
    align === "center" ? "items-center text-center" : "items-start text-left";
  const titleCls =
    tone === "dark" ? "text-sand" : "text-ink";
  const subCls = tone === "dark" ? "text-sand/70" : "text-ink-3";
  const lineCls = tone === "dark" ? "bg-sun" : "bg-coral";

  return (
    <Reveal className={`flex flex-col gap-4 ${alignCls}`}>
      <span
        className={`inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.28em] ${
          tone === "dark" ? "text-sun" : "text-sea"
        }`}
      >
        <span className={`h-[2px] w-8 ${lineCls}`} aria-hidden />
        {eyebrow}
        <span className={`h-[2px] w-8 ${lineCls}`} aria-hidden />
      </span>
      <h2
        className={`max-w-3xl font-display text-4xl leading-[1.05] font-medium tracking-tight text-balance sm:text-5xl ${titleCls}`}
      >
        {title}
      </h2>
      {sub ? (
        <p
          className={`max-w-xl text-base leading-relaxed sm:text-lg ${subCls}`}
        >
          {sub}
        </p>
      ) : null}
    </Reveal>
  );
}
