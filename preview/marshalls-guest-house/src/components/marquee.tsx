const ITEMS = [
  "Elizabeth Harbour",
  "George Town",
  "Great Exuma",
  "The Exuma Cays",
  "Stocking Island",
  "Family Island Hospitality",
];

export function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="relative overflow-hidden border-y border-ink/8 bg-sand-100 py-4 select-none">
      <div className="animate-marquee flex w-max items-center gap-8 pr-8">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center gap-8" aria-hidden={half === 1}>
            {row.map((item, i) => (
              <span key={`${half}-${i}`} className="flex items-center gap-8">
                <span className="font-display text-lg font-medium italic whitespace-nowrap text-abyss-800/80">
                  {item}
                </span>
                <span className="size-1.5 rounded-full bg-coral-500/70" aria-hidden />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
