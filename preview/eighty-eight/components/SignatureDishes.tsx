"use client";

import Reveal from "./Reveal";
import { signatureDishes } from "@/data/menu";
import Button from "./Button";

export default function SignatureDishes() {
  return (
    <section id="dishes" className="relative bg-ember py-24 sm:py-32">
      <div className="mx-auto max-w-shell px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <Reveal>
              <p className="eyebrow text-[11px] font-semibold text-gold tracking-wide3 flex items-center gap-3">
                <span className="gold-rule w-10 inline-block" aria-hidden="true" />
                Popular favourites
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ivory">
                What&apos;s on
                <br />
                <span className="text-gold">the table</span>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-5 text-lg text-stonewarm">Favourites worth coming back for.</p>
            </Reveal>
          </div>
        </div>

        {/* Asymmetric editorial grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 auto-rows-[300px] sm:auto-rows-[340px]">
          {signatureDishes.map((dish, i) => {
            const span =
              i === 0 ? "sm:col-span-2 lg:col-span-2" : "";
            const rowSpan = i === 0 ? "sm:row-span-2" : "";
            return (
              <Reveal key={dish.name} delay={0.05 * (i % 3)} className={`${span} ${rowSpan}`} as="div">
                <article className="group relative h-full w-full overflow-hidden bg-ink rounded-sm border border-ivory/5">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    loading="lazy"
                    className="media-object absolute inset-0 w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/25 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                  <div className="absolute inset-x-0 top-0 h-px bg-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  <span className="absolute bottom-4 right-4 h-8 w-0.5 bg-gold origin-bottom" aria-hidden="true" />

                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 transition-transform duration-500 group-hover:-translate-y-1">
                    <p className="eyebrow text-[10px] text-gold mb-2">{dish.category}</p>
                    <h3 className="font-display text-2xl sm:text-3xl text-ivory leading-tight">{dish.name}</h3>
                    <p className="mt-2 text-sm text-stonewarm max-w-[24ch]">{dish.description}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10 text-center">
          <Button variant="outline" href="#menu" arrow>
            View the full menu
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
