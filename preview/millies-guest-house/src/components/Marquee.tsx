import { Anchor, Sailboat, Shell, Sun, Waves } from "lucide-react";
import type { ComponentType } from "react";

const ITEMS: { icon: ComponentType<{ className?: string }>; text: string }[] = [
  { icon: Waves, text: "On the water’s edge" },
  { icon: Shell, text: "The Abacos · The Bahamas" },
  { icon: Sun, text: "Spacious & modern" },
  { icon: Sailboat, text: "Peaceful & personal" },
  { icon: Anchor, text: "Millie’s Guest House" },
];

function Row({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div aria-hidden={ariaHidden} className="flex shrink-0 items-center">
      {ITEMS.map(({ icon: Icon, text }) => (
        <span key={text} className="flex items-center">
          <span className="flex items-center gap-3 whitespace-nowrap px-8 font-serif text-lg italic tracking-wide sm:text-xl">
            <Icon className="size-4 not-italic text-lagoon" />
            {text}
          </span>
          <span className="size-1.5 rounded-full bg-lagoon/60" />
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="overflow-hidden border-y border-cream/10 bg-sea py-5 text-foam">
      <div className="flex w-max animate-marquee">
        <Row />
        <Row ariaHidden />
      </div>
    </div>
  );
}
