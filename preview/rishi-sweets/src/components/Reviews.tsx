import { ArrowUpRight, CircleAlert, CircleCheck, Quote } from "lucide-react";
import { reviewExcerpts, reviewSources, reviewThemes, site } from "../data/site";
import { Reveal, SectionHead, Stars, Tilt } from "./ui";
import { useCountUp, useOnceInView } from "../hooks/useFx";
import { cn } from "../utils/cn";

export default function Reviews() {
  const { ref, inView } = useOnceInView<HTMLDivElement>();
  const rating = useCountUp(Math.round(site.rating * 10), inView);

  return (
    <section id="reviews" className="relative scroll-mt-24 bg-ivory-200/50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          index="10"
          eyebrow="Reviews"
          title={
            <>
              What Customers Are <span className="gold-grad-text italic">Saying</span>
            </>
          }
          sub="Genuine themes and excerpts from public reviews on Google and Justdial — the praise and the pointers, both."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-12">
          {/* summary card */}
          <Reveal className="lg:col-span-4">
            <div ref={ref} className="lg:sticky lg:top-32">
              <Tilt max={5}>
                <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-maroon-800 to-maroon-950 p-8 text-ivory-50 md:p-10">
                  <div className="arch-bg-faint absolute inset-0 opacity-60" aria-hidden />
                  <p className="relative text-[10px] font-bold tracking-[0.3em] text-gold-300 uppercase">
                    Overall rating
                  </p>
                  <p className="relative mt-4 flex items-end gap-2 font-display text-7xl leading-none font-bold">
                    {(rating / 10).toFixed(1)}
                    <span className="pb-2 text-2xl font-semibold text-ivory-200/60">/ 5</span>
                  </p>
                  <Stars value={site.rating} size={18} className="relative mt-4" />
                  <p className="relative mt-3 text-[14px] font-semibold text-ivory-100">
                    {site.ratingLabel} ratings
                  </p>
                  <p className="relative mt-1 text-[12px] leading-relaxed text-ivory-200/70">
                    Across public listings on Google and Justdial. {site.priceNoteLong}
                  </p>
                  <div className="relative mt-7 flex flex-wrap gap-2.5">
                    {reviewSources.map((s) => (
                      <a
                        key={s.label}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-ivory-50/25 px-4 py-2 text-[10.5px] font-bold tracking-[0.16em] uppercase transition-colors hover:border-gold-300 hover:text-gold-300"
                      >
                        {s.label} <ArrowUpRight size={12} />
                      </a>
                    ))}
                  </div>
                </div>
              </Tilt>
            </div>
          </Reveal>

          {/* themes + excerpts */}
          <div className="space-y-6 lg:col-span-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <Reveal>
                <div className="h-full rounded-3xl border border-green-800/15 bg-ivory-50 p-6">
                  <h3 className="flex items-center gap-2 text-[12px] font-bold tracking-[0.18em] text-green-800 uppercase">
                    <CircleCheck size={15} /> What guests love
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {reviewThemes.loved.map((t) => (
                      <li key={t} className="flex items-start gap-2.5 text-[13.5px] leading-snug text-ink-700">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-700" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <div className="h-full rounded-3xl border border-saffron-600/20 bg-ivory-50 p-6">
                  <h3 className="flex items-center gap-2 text-[12px] font-bold tracking-[0.18em] text-saffron-600 uppercase">
                    <CircleAlert size={15} /> What some reviews note
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {reviewThemes.improve.map((t) => (
                      <li key={t} className="flex items-start gap-2.5 text-[13.5px] leading-snug text-ink-700">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-500" />
                        {t}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 border-t border-dashed border-ink-900/10 pt-4 text-[11.5px] leading-relaxed text-ink-500">
                    Balanced, honest picture — because trust is the real secret ingredient.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {reviewExcerpts.map((r, i) => (
                <Reveal key={r.name + i} delay={0.05 * (i % 2)} className={i === 0 ? "md:col-span-2" : ""}>
                  <figure
                    className={cn(
                      "group relative h-full rounded-3xl border bg-ivory-50 p-7 transition-all duration-400 hover:-translate-y-1",
                      "border-ink-900/8 hover:border-gold-500/45 hover:shadow-[0_22px_44px_-20px_rgba(51,8,15,0.3)]"
                    )}
                  >
                    <Quote size={26} className="text-gold-500/70" />
                    <blockquote className="mt-4 font-display text-[17px] leading-relaxed text-ink-900 italic">
                      “{r.text}”
                    </blockquote>
                    <figcaption className="mt-5 flex items-center gap-3 border-t border-dashed border-ink-900/10 pt-4">
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-maroon-800 font-display text-sm font-bold text-gold-300">
                        {r.name.charAt(0)}
                      </span>
                      <span>
                        <span className="block text-[13px] font-bold text-ink-900">{r.name}</span>
                        <span className="block text-[10.5px] font-semibold tracking-[0.14em] text-ink-500 uppercase">
                          {r.source} · {r.date}
                        </span>
                      </span>
                      <span
                        className={cn(
                          "ml-auto rounded-full px-3 py-1 text-[9px] font-bold tracking-[0.16em] uppercase",
                          r.tone === "positive" ? "bg-green-800/10 text-green-800" : "bg-saffron-100 text-saffron-600"
                        )}
                      >
                        {r.tone === "positive" ? "Praise" : "Balanced"}
                      </span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>

            <p className="text-[11.5px] leading-relaxed text-ink-500">
              Excerpts are genuine public reviews from Google and Justdial, lightly trimmed for
              length. Read the complete reviews directly on those platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
