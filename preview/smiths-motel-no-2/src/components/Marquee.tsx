import { Sparkle } from "lucide-react";

const ITEMS = [
  "Smith's Motel No. 2",
  "Nassau · Bahamas",
  "Independent & proud",
  "Simple · Friendly · Modern",
  "Affordable island stays",
  "Easy island days",
];

function Row() {
  return (
    <div className="flex shrink-0 items-center gap-10 pr-10">
      {ITEMS.map((item) => (
        <span key={item} className="flex items-center gap-10">
          <span className="font-display text-xl font-semibold whitespace-nowrap">
            {item}
          </span>
          <Sparkle className="size-4 fill-current" />
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <section
      aria-hidden="true"
      className="relative z-20 -my-7 scale-[1.02] rotate-[-1.25deg]"
    >
      <div className="border-y-4 border-ink bg-coral py-4 text-cream shadow-[0_18px_45px_-20px_rgba(14,58,52,0.5)]">
        <div className="mask-fade-x flex overflow-hidden">
          <div className="flex w-max animate-marquee">
            <Row />
            <Row />
          </div>
        </div>
      </div>
    </section>
  );
}
