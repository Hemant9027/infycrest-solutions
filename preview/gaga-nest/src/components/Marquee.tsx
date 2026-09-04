import { Feather } from "lucide-react";

const ITEMS = [
  "Matthew Town",
  "Great Inagua",
  "The Bahamas",
  "Ranch-style ease",
  "Quiet island living",
  "Family-run warmth",
];

export default function Marquee() {
  const row = (
    <div className="flex shrink-0 items-center">
      {ITEMS.map((item) => (
        <span key={item} className="flex items-center">
          <span className="px-6 font-display text-lg italic tracking-wide text-cream/85 sm:px-10 sm:text-xl">
            {item}
          </span>
          <Feather className="h-4 w-4 shrink-0 text-flamingo" strokeWidth={1.6} />
        </span>
      ))}
    </div>
  );

  return (
    <div className="relative overflow-hidden border-y border-ink/10 bg-pine py-4">
      <div className="flex w-max animate-marquee">
        {row}
        {row}
      </div>
    </div>
  );
}
