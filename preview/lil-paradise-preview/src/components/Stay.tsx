import { ArrowUpRight, BedDouble, CalendarCheck, Shrub } from "lucide-react";
import { Eyebrow, Reveal } from "./Reveal";
import { BUSINESS, IMG } from "../data/site";

export default function Stay() {
  return (
    <section id="stay" className="relative scroll-mt-24 bg-cream pb-28 pt-4 md:pb-36">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-deep text-cream sm:mx-4 lg:mx-6 grain">
        {/* Decorative dots */}
        <div className="dotwave pointer-events-none absolute right-8 top-10 hidden h-24 w-44 text-aqua/60 lg:block" />

        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <Reveal>
                <Eyebrow tone="cream">Stay · Accommodation</Eyebrow>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mt-6 font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.4rem]">
                  Stay somewhere that
                  <br />
                  <span className="italic text-sun">feels like yours.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg">
                  A getaway should feel easy from the moment you arrive. This is the
                  rhythm of a stay at Lil Paradise — unhurried, thoughtful, and warmly
                  personal.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <span className="hidden rotate-45 font-hand text-3xl text-aqua md:block">
                kick your shoes off
              </span>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {IMG.stay.map((card, i) => (
              <Reveal key={card.title} delay={0.1 + i * 0.1} className="h-full">
                <article
                  className={`group flex h-full flex-col overflow-hidden rounded-[2rem] bg-cream text-ink shadow-[0_25px_60px_-25px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-2 ${
                    i === 1 ? "md:translate-y-8" : ""
                  }`}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={card.src}
                      alt={card.alt}
                      loading="lazy"
                      className="aspect-[4/3.4] w-full object-cover transition-transform duration-700 group-hover:scale-108"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-deep backdrop-blur">
                      0{i + 1}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <h3 className="font-display text-2xl font-semibold tracking-tight">
                      {card.title}
                    </h3>
                    <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink/70">
                      {card.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Honest-details banner */}
          <Reveal delay={0.2}>
            <div className="mt-20 flex flex-col items-center justify-between gap-7 rounded-[2rem] bg-lagoon p-8 sm:p-10 md:mt-24 md:flex-row">
              <div className="flex items-start gap-5">
                <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-white/12 text-sun">
                  <CalendarCheck className="size-6" strokeWidth={2.2} />
                </span>
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-[1.7rem]">
                    Dates, rates &amp; availability
                  </h3>
                  <p className="mt-1.5 max-w-md text-sm leading-relaxed text-cream/75">
                    Every trip is different — so just ask. Send us your dates and what
                    you're dreaming of, and we'll personally help you sort the details.
                  </p>
                </div>
              </div>
              <a
                href={BUSINESS.mailto}
                className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-sun px-7 py-4 text-sm font-extrabold tracking-wide text-ink shadow-[0_16px_36px_-14px_rgba(255,194,75,0.9)] transition-all hover:-translate-y-0.5"
              >
                Plan Your Stay
                <ArrowUpRight className="size-4.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-cream/55">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em]">
                <BedDouble className="size-4" /> Cozy stays
              </span>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em]">
                <Shrub className="size-4" /> Tropical surrounds
              </span>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em]">
                <ArrowUpRight className="size-4" /> Direct booking, personal answers
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
