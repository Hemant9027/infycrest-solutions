import { Car, Star } from "lucide-react";
import { site } from "../data/site";
import { useCountUp, useOnceInView } from "../hooks/useFx";

function Stat({
  value,
  suffix = "",
  label,
  prefix = "",
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}) {
  const { ref, inView } = useOnceInView<HTMLDivElement>();
  const n = useCountUp(value, inView);
  return (
    <div ref={ref} className="flex flex-col items-center gap-1 px-4 py-6 text-center md:py-8">
      <p className="font-display text-4xl font-bold text-ink-900 tabular-nums md:text-5xl">
        {prefix}
        {n.toLocaleString("en-IN")}
        {suffix}
      </p>
      <p className="text-[10px] font-bold tracking-[0.26em] text-ink-500 uppercase md:text-[11px]">{label}</p>
    </div>
  );
}

export default function TrustBar() {
  const { ref, inView } = useOnceInView<HTMLDivElement>();
  const rating = useCountUp(40, inView);
  return (
    <section id="stats" aria-label="Business highlights" className="relative z-10 px-4 sm:px-6">
      <div className="mx-auto -mt-2 max-w-6xl md:-mt-10">
        <div className="rounded-[1.8rem] border border-gold-500/25 bg-ivory-50/90 shadow-[0_30px_60px_-30px_rgba(51,8,15,0.35)] backdrop-blur">
          <div className="grid grid-cols-2 divide-x divide-y divide-ink-900/8 md:grid-cols-5 md:divide-y-0">
            <Stat value={site.established} label="Established" />
            <div ref={ref} className="flex flex-col items-center gap-1 px-4 py-6 text-center md:py-8">
              <p className="flex items-center gap-2 font-display text-4xl font-bold text-ink-900 tabular-nums md:text-5xl">
                {(rating / 10).toFixed(1)}
                <Star size={22} className="fill-gold-500 text-gold-500" />
              </p>
              <p className="text-[10px] font-bold tracking-[0.26em] text-ink-500 uppercase md:text-[11px]">
                Customer Rating
              </p>
            </div>
            <Stat value={1400} suffix="+" label="Ratings" />
            <Stat value={1000} suffix="+" label="Catering Capacity" />
            <div className="col-span-2 flex flex-col items-center gap-1 px-4 py-6 text-center md:col-span-1 md:py-8">
              <p className="grid h-12 place-items-center">
                <Car size={30} className="text-maroon-700" strokeWidth={1.6} />
              </p>
              <p className="text-[10px] font-bold tracking-[0.26em] text-ink-500 uppercase md:text-[11px]">
                Parking Available
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Marquee ------------------------------ */

export function Marquee({
  items,
  dark = true,
}: {
  items: string[];
  dark?: boolean;
}) {
  const row = [...items, ...items];
  return (
    <div
      aria-hidden
      className={
        (dark ? "border-y border-gold-500/20 bg-maroon-950 text-ivory-100 " : "border-y border-gold-500/30 bg-ivory-200/70 text-maroon-900 ") +
        "relative z-10 overflow-hidden py-4"
      }
    >
      <div className="animate-marquee flex w-max items-center gap-8 pr-8 whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="font-display text-lg italic md:text-xl">{t}</span>
            <Star size={11} className={dark ? "fill-gold-400 text-gold-400" : "fill-maroon-700 text-maroon-700"} />
          </span>
        ))}
      </div>
    </div>
  );
}
