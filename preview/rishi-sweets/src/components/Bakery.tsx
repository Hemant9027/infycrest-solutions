import { ArrowUpRight, MessageCircleQuestion } from "lucide-react";
import { bakeryItems, wa } from "../data/site";
import { CtaButton, Reveal, SectionHead, Tilt } from "./ui";

export default function Bakery() {
  return (
    <section id="bakery" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-12">
          {/* sticky intro */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionHead
                align="left"
                index="04"
                eyebrow="Bakery & Cakes"
                title={
                  <>
                    Cakes, Bakes &amp; <span className="gold-grad-text italic">Celebrations</span>
                  </>
                }
                sub="Beside the mithai counter sits a working bakery — cakes, pastries, puffs and everyday bakes that reviewers call out on their own."
              />
              <Reveal delay={0.2}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <CtaButton
                    href={wa("Hi Rishi Sweets, I would like to ask about today's cakes and bakery items.")}
                    external
                    variant="primary"
                  >
                    <MessageCircleQuestion size={15} /> Ask About Availability
                  </CtaButton>
                </div>
                <p className="mt-4 max-w-xs text-[12px] leading-relaxed text-ink-500">
                  For occasion cakes and bulk bakery orders, please check availability with the
                  counter in advance.
                </p>
              </Reveal>
            </div>
          </div>

          {/* editorial cards */}
          <div className="space-y-6 lg:col-span-8">
            {bakeryItems.map((b, i) => (
              <Reveal key={b.label} delay={0.05 * i}>
                <Tilt max={5}>
                  <article
                    className="group card-sheen relative overflow-hidden rounded-[1.8rem] soft-shadow"
                    data-cursor
                  >
                    <div className="relative h-52 overflow-hidden sm:h-60">
                      <img
                        src={b.img}
                        alt={b.label}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-[1.3s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]"
                      />
                      <span aria-hidden className="absolute inset-0 bg-gradient-to-r from-ink-900/78 via-ink-900/30 to-transparent" />
                      <div className="absolute inset-0 flex items-center">
                        <div className="max-w-md p-7 md:p-9">
                          <p className="text-[9.5px] font-bold tracking-[0.3em] text-gold-300 uppercase">
                            {String(i + 1).padStart(2, "0")} — Bakery
                          </p>
                          <h3 className="mt-1.5 font-display text-2xl font-semibold text-ivory-50 md:text-3xl">
                            {b.label}
                          </h3>
                          <p className="mt-2 text-[13px] leading-relaxed text-ivory-200/80">{b.desc}</p>
                        </div>
                        <span className="absolute right-6 bottom-6 grid h-12 w-12 place-items-center rounded-full border border-ivory-50/30 bg-ivory-50/10 text-ivory-50 backdrop-blur transition-all duration-300 group-hover:rotate-45 group-hover:border-gold-300 group-hover:text-gold-300">
                          <ArrowUpRight size={18} />
                        </span>
                      </div>
                    </div>
                  </article>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
