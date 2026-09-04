import Hibiscus from "@/components/Hibiscus";

const WORDS = [
  "Island days",
  "Salty air",
  "Warm sand",
  "Slow mornings",
  "Soft evenings",
  "Come as you are",
];

export default function Marquee() {
  return (
    <section
      aria-hidden="true"
      className="relative z-10 -my-5 rotate-[-1.3deg] scale-[1.02] overflow-hidden bg-sea-900 py-5 shadow-lg shadow-sea-950/25 md:py-7"
    >
      <div className="flex w-max animate-marquee">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {WORDS.map((w) => (
              <span key={`${copy}-${w}`} className="flex items-center">
                <span className="whitespace-nowrap px-6 font-display text-2xl italic tracking-tight text-sand-100 md:px-10 md:text-4xl">
                  {w}
                </span>
                <Hibiscus className="h-5 w-5 shrink-0 text-hibiscus-400 md:h-7 md:w-7" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
