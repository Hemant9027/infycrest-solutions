const WORDS = [
  "Secluded",
  "Private Beach",
  "Blue Holes",
  "Bonefishing Flats",
  "Turquoise Water",
  "Barrier Reef",
  "Kayaking",
  "Barefoot Luxury",
];

function Sparkle() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-coral md:h-6 md:w-6" aria-hidden="true">
      <path d="M12 1l2.2 8.8L23 12l-8.8 2.2L12 23l-2.2-8.8L1 12l8.8-2.2L12 1z" fill="currentColor" />
    </svg>
  );
}

function Row({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <ul
      aria-hidden={ariaHidden || undefined}
      className="flex shrink-0 items-center gap-8 pr-8 md:gap-12 md:pr-12"
    >
      {WORDS.map((word, i) => (
        <li key={word} className="flex items-center gap-8 md:gap-12">
          <span
            className={`whitespace-nowrap font-display text-3xl font-light italic md:text-5xl ${
              i % 2 === 0 ? "text-sand" : "text-aqua/60"
            }`}
          >
            {word}
          </span>
          <Sparkle />
        </li>
      ))}
    </ul>
  );
}

export default function Marquee() {
  return (
    <div className="overflow-hidden border-y border-shell/10 bg-deep py-6 md:py-8">
      <div className="flex w-max animate-marquee">
        <Row />
        <Row ariaHidden />
      </div>
    </div>
  );
}
