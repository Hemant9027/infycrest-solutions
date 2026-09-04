import { Shell, Sun, TreePalm, Waves } from "lucide-react";

const ITEMS = [
  { icon: Sun, label: "A Little Piece of Heaven" },
  { icon: Waves, label: "55 Feet from the Atlantic" },
  { icon: TreePalm, label: "One- & Two-Bedroom Villas" },
  { icon: Shell, label: "Peaceful by Nature" },
];

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <div
      aria-hidden={hidden}
      className="flex w-max shrink-0 items-center"
    >
      {ITEMS.map(({ icon: Icon, label }) => (
        <span
          key={label}
          className="flex items-center gap-4 px-8 text-[11px] font-semibold tracking-[0.34em] whitespace-nowrap uppercase text-sand-100/80"
        >
          <Icon className="h-4 w-4 text-coral-400" strokeWidth={1.5} />
          {label}
        </span>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <div className="group relative overflow-hidden border-y border-sand-50/10 bg-lagoon-950 py-5">
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        <Row />
        <Row hidden />
        <Row hidden />
        <Row hidden />
      </div>
    </div>
  );
}
