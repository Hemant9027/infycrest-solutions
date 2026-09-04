import { Asterisk } from "lucide-react";

const WORDS = [
  "Bonefishing Flats",
  "Quiet Atlantic Beaches",
  "Island Suppers",
  "Blue Water & Creeks",
  "Sunrise Tides",
  "Barefoot Evenings",
];

export default function Marquee() {
  const row = [...WORDS, ...WORDS];
  return (
    <div className="relative overflow-hidden border-y border-ink/10 bg-shell py-5">
      <div className="flex w-max animate-marquee items-center gap-8 pr-8 hover:[animation-play-state:paused]">
        {row.map((word, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="whitespace-nowrap font-display text-lg font-light italic tracking-wide text-pine sm:text-xl">
              {word}
            </span>
            <Asterisk
              className="size-4 shrink-0 text-brass"
              strokeWidth={1.5}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
