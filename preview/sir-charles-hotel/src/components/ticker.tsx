const ITEMS = [
  "Stay in Nassau",
  "Experience The Bahamas",
  "Classic Bahamian Hospitality",
  "Modern Boutique Ease",
  "Independent & Proud of It",
  "Sea Air & Island Light",
];

function Row({ hidden }: { hidden?: boolean }) {
  return (
    <div aria-hidden={hidden} className="flex shrink-0 items-center">
      {ITEMS.map((item, i) => (
        <span key={`${item}-${i}`} className="flex items-center">
          <span className="whitespace-nowrap px-8 font-display text-xl font-light italic text-ivory/90 sm:text-2xl">
            {item}
          </span>
          <svg viewBox="0 0 10 10" aria-hidden className="size-2 shrink-0 text-gold">
            <rect x="1.9" y="1.9" width="6.2" height="6.2" transform="rotate(45 5 5)" fill="currentColor" />
          </svg>
        </span>
      ))}
    </div>
  );
}

export default function Ticker() {
  return (
    <div className="marquee-paused relative overflow-hidden border-y border-ivory/10 bg-palm py-5">
      <div className="animate-marquee flex w-max">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}
