import { Palmtree } from "lucide-react";

const WORDS = [
  "Island Time",
  "Turquoise Water",
  "Cozy & Personal",
  "Nassau",
  "Barefoot Luxury",
  "Warm Welcomes",
  "The Bahamas",
  "Slow Mornings",
];

export default function Marquee({ dark = false }: { dark?: boolean }) {
  const row = (
    <div className="flex shrink-0 items-center">
      {WORDS.map((w) => (
        <span key={w} className="flex items-center">
          <span
            className={`px-6 font-display text-2xl font-medium italic tracking-tight sm:text-3xl ${
              dark ? "text-cream" : "text-deep"
            }`}
          >
            {w}
          </span>
          <Palmtree className={`size-5 ${dark ? "text-aqua" : "text-coral"}`} strokeWidth={2.4} />
        </span>
      ))}
    </div>
  );

  return (
    <div
      aria-hidden
      className={`relative z-10 overflow-hidden border-y py-5 ${
        dark ? "border-white/10 bg-deep" : "border-aqua/20 bg-foam/70"
      }`}
    >
      <div className="flex w-max animate-marquee">
        {row}
        {row}
      </div>
    </div>
  );
}
