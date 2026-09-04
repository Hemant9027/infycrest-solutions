import { ArrowRight, Boxes, MessageCircle } from "lucide-react";
import { IMG, STOCK, sweetCategories, wa, type MenuCatId } from "../data/site";
import { CtaButton, Particles, Reveal, SectionHead, Tilt } from "./ui";

export default function Sweets({
  onExplore,
}: {
  onExplore: (cat: MenuCatId) => void;
}) {
  return (
    <section id="sweets" className="relative scroll-mt-24 overflow-hidden bg-ivory-100 py-24 md:py-32">
      {/* warm saffron wash */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(232,137,47,0.10),transparent_70%)]"
      />
      <Particles count={10} className="opacity-60" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          index="03"
          eyebrow="The Mithai Counter"
          title={
            <>
              Something Sweet for <span className="gold-grad-text italic">Every Occasion</span>
            </>
          }
          sub="Rishi began — and remains — a sweets house at heart. Fresh mithai is made daily, from halwai classics to dry-fruit specials and gift boxes."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-12">
          {/* feature card */}
          <Reveal className="lg:col-span-5">
            <Tilt max={6} className="h-full">
              <div className="group relative h-full min-h-[26rem] overflow-hidden rounded-[2rem] depth-shadow" data-cursor>
                <img
                  src={IMG.jalebi}
                  alt="Hot jalebi served with chilled rabri"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
                />
                <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-maroon-950/92 via-maroon-950/25 to-transparent" />
                <div className="relative flex h-full flex-col justify-end p-7 md:p-9">
                  <p className="text-[10px] font-bold tracking-[0.3em] text-gold-300 uppercase">The signature counter</p>
                  <h3 className="mt-2 font-display text-3xl font-semibold text-ivory-50 md:text-4xl">
                    Fresh Mithai, <span className="italic">Every Single Day</span>
                  </h3>
                  <p className="mt-3 max-w-sm text-[13.5px] leading-relaxed text-ivory-200/80">
                    Reviewers consistently praise the sweets as fresh and pure — from syrup-hot
                    jalebi to silver-topped kaju katli.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <CtaButton onClick={() => onExplore("sweets")} variant="gold">
                      Explore Sweets <ArrowRight size={14} />
                    </CtaButton>
                    <CtaButton href="#catering" variant="ghost">
                      <Boxes size={14} /> Bulk Order Enquiry
                    </CtaButton>
                  </div>
                </div>
              </div>
            </Tilt>
          </Reveal>

          {/* category tiles */}
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {sweetCategories.map((s, i) => (
              <Reveal key={s.label} delay={0.05 * (i % 2)}>
                <Tilt max={7}>
                  <button
                    type="button"
                    onClick={() => onExplore("sweets")}
                    className="group flex w-full items-center gap-4 rounded-3xl border border-gold-500/25 bg-ivory-50 p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/60 hover:bg-ivory-50 hover:shadow-[0_20px_40px_-18px_rgba(148,113,47,0.45)]"
                  >
                    <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl sm:h-24 sm:w-24">
                      <img
                        src={s.img}
                        alt={s.label}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-display text-lg font-semibold text-ink-900 sm:text-xl">
                        {s.label}
                      </span>
                      <span className="mt-1 line-clamp-2 block text-[12.5px] leading-snug text-ink-500">
                        {s.desc}
                      </span>
                    </span>
                    <ArrowRight
                      size={16}
                      className="ml-auto shrink-0 text-gold-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-maroon-700"
                    />
                  </button>
                </Tilt>
              </Reveal>
            ))}
            {/* gift box CTA tile */}
            <Reveal delay={0.1}>
              <a
                href={wa("Hi Rishi Sweets, I would like to enquire about a bulk sweets / gift box order.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 rounded-3xl bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 p-5 text-maroon-950 shadow-[0_20px_40px_-16px_rgba(148,113,47,0.6)] transition-all duration-300 hover:-translate-y-1 hover:brightness-105 sm:col-span-2"
              >
                <span className="flex items-center gap-4">
                  <span className="relative hidden h-16 w-16 overflow-hidden rounded-2xl border-2 border-maroon-950/15 sm:block">
                    <img src={STOCK.ladduBox} alt="Mithai gift box" className="h-full w-full object-cover" loading="lazy" decoding="async" />
                  </span>
                  <span>
                    <span className="block font-display text-xl font-bold">Gifting a celebration?</span>
                    <span className="text-[13px] font-semibold opacity-80">
                      Ask about assorted mithai boxes and bulk sweets for your event.
                    </span>
                  </span>
                </span>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-maroon-950 text-gold-300 transition-transform duration-300 group-hover:scale-110">
                  <MessageCircle size={18} />
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
