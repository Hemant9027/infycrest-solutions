import { PalmMark } from "./Brand";

type MarqueeProps = {
  items: string[];
  dark?: boolean;
};

/** Slow drifting ticker with palm separators. Content is duplicated for a seamless loop. */
export function Marquee({ items, dark = false }: MarqueeProps) {
  const loop = [...items, ...items];
  return (
    <div
      className={`overflow-hidden border-y py-4 ${
        dark ? "hairline-light bg-pine/60 text-cream" : "hairline bg-cream/70 text-ink"
      }`}
      aria-label={items.join(" · ")}
    >
      <div className="flex w-max animate-marquee items-center gap-10 pr-10">
        {loop.map((item, i) => (
          <span key={i} aria-hidden={i >= items.length} className="flex items-center gap-10">
            <span className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.3em]">
              {item}
            </span>
            <PalmMark className={`size-5 ${dark ? "text-sun" : "text-coral"}`} />
          </span>
        ))}
      </div>
    </div>
  );
}
