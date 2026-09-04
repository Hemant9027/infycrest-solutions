import { TreePalm } from "lucide-react";

const phrases = ["The Garden of Andros", "Staniard Creek", "North Andros", "The Bahamas", "Bar & Lounge", "Queen's Highway"];

function Track() {
  return (
    <div className="flex shrink-0 items-center">
      {phrases.map((phrase) => (
        <span key={phrase} className="flex items-center">
          <span className="font-display text-lg font-light tracking-[0.18em] whitespace-nowrap text-sand-50 uppercase italic sm:text-xl">
            {phrase}
          </span>
          <TreePalm className="mx-8 size-4 shrink-0 text-copper-300 sm:mx-12" strokeWidth={1.5} />
        </span>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-pine-950/40 bg-lagoon-600 py-4" aria-hidden="true">
      <div className="marquee-track hover:[animation-play-state:paused]">
        <Track />
        <Track />
      </div>
    </div>
  );
}
