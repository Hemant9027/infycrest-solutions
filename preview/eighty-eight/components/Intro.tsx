"use client";

import Reveal from "./Reveal";
import { Star } from "lucide-react";
import { restaurant } from "@/data/restaurant";

export default function Intro() {
  return (
    <section id="story" className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-shell px-5 sm:px-8 grid lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left: eyebrow */}
        <div className="lg:col-span-5">
          <Reveal>
            <p className="sticky lg:top-28 eyebrow text-[11px] font-semibold text-gold tracking-wide3 flex items-center gap-3">
              <span className="gold-rule w-10 inline-block" aria-hidden="true" />
              The Eighty Eight Experience
            </p>
          </Reveal>
        </div>

        {/* Right: content */}
        <div className="lg:col-span-7">
          <Reveal>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-ivory">
              Chinese flavours.
              <br />
              <span className="text-stonewarm">Shared moments.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="gold-rule my-9 w-24" aria-hidden="true" />
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-lg text-stonewarm leading-relaxed max-w-xl">{restaurant.introParagraph}</p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 border-t border-ivory/10 pt-9">
              <div>
                <p className="font-display text-5xl text-ivory">{restaurant.rating}</p>
                <p className="eyebrow text-[10px] text-stonewarm mt-2 flex items-center gap-1">
                  <Star className="h-3 w-3 text-gold fill-gold" aria-hidden="true" /> Google rating
                </p>
              </div>
              <div>
                <p className="font-display text-5xl text-ivory">{restaurant.reviewCount}+</p>
                <p className="eyebrow text-[10px] text-stonewarm mt-2">Google reviews</p>
              </div>
              <div>
                <p className="font-display text-3xl text-ivory leading-none pt-2">{restaurant.priceRange}</p>
                <p className="eyebrow text-[10px] text-stonewarm mt-2 pt-3">Approx. per person</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
