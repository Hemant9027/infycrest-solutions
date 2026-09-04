import {
  ArrowRight,
  Bike,
  CalendarDays,
  Car,
  PartyPopper,
  ShoppingBag,
  Sparkles,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import { whyUs } from "../data/site";
import { Reveal, SectionHead, Tilt } from "./ui";

const ICONS: Record<string, LucideIcon> = {
  calendar: CalendarDays,
  sparkles: Sparkles,
  utensils: UtensilsCrossed,
  bag: ShoppingBag,
  bike: Bike,
  party: PartyPopper,
  car: Car,
};

export default function WhyUs() {
  return (
    <section id="why" className="relative scroll-mt-24 bg-ivory-200/50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          index="06"
          eyebrow="Why Rishi Sweets"
          title={
            <>
              A Neighbourhood Name, <span className="gold-grad-text italic">Built Daily</span>
            </>
          }
          sub="No tall claims — just what the listings and reviews actually say: variety, freshness and nine-plus years at Prakash Chowk."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((w, i) => {
            const Icon = ICONS[w.icon] ?? Sparkles;
            return (
              <Reveal key={w.title} delay={0.04 * (i % 3)} className={i === whyUs.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""}>
                <Tilt max={7} className="h-full">
                  <article className="group relative h-full overflow-hidden rounded-3xl border border-ink-900/8 bg-ivory-50 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-500/45 hover:shadow-[0_24px_48px_-20px_rgba(51,8,15,0.35)]">
                    <span
                      aria-hidden
                      className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-maroon-700 via-saffron-500 to-gold-400 transition-transform duration-500 group-hover:scale-x-100"
                    />
                    <span className="grid h-13 w-13 place-items-center rounded-2xl bg-maroon-800/[0.07] text-maroon-700 transition-all duration-500 group-hover:bg-maroon-800 group-hover:text-gold-300">
                      <Icon size={22} strokeWidth={1.8} />
                    </span>
                    <h3 className="mt-5 font-display text-xl font-semibold text-ink-900">{w.title}</h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-ink-500">{w.desc}</p>
                  </article>
                </Tilt>
              </Reveal>
            );
          })}

          {/* CTA card completing the grid */}
          <Reveal delay={0.12}>
            <Tilt max={7} className="h-full">
              <a
                href="#contact"
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-maroon-800 to-maroon-950 p-7 text-ivory-50"
              >
                <div className="arch-bg-faint absolute inset-0 opacity-70" aria-hidden />
                <p className="relative font-display text-2xl leading-snug font-semibold">
                  Hungry already?
                  <br />
                  <span className="gold-grad-text italic">Come say hello.</span>
                </p>
                <span className="relative mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-ivory-50/25 px-5 py-2.5 text-[11px] font-bold tracking-[0.18em] uppercase transition-all group-hover:border-gold-300 group-hover:text-gold-300">
                  Plan a visit <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </a>
            </Tilt>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
