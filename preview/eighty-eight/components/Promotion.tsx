"use client";

import Reveal from "./Reveal";
import Button from "./Button";
import { promotion, restaurant } from "@/data/restaurant";

export default function Promotion() {
  if (!promotion.isActive) return null;
  return (
    <section className="relative bg-ember py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-shell px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-sm border border-ivory/10">
          <div className="grid lg:grid-cols-2 min-h-[360px]">
            {/* Content */}
            <div className="relative z-10 p-9 sm:p-14 flex flex-col justify-center bg-gradient-to-br from-ember to-ink">
              <div className="ink-grid absolute inset-0 opacity-40" aria-hidden="true" />
              <div className="relative">
                <Reveal>
                  <p className="eyebrow text-[11px] font-semibold text-gold tracking-wide3">{promotion.eyebrow}</p>
                </Reveal>
                <Reveal delay={0.08}>
                  <h2 className="mt-4 font-display text-4xl sm:text-5xl text-ivory leading-[1.05]">
                    {promotion.title}
                  </h2>
                </Reveal>
                <Reveal delay={0.15}>
                  <div className="gold-rule w-16 my-6" aria-hidden="true" />
                </Reveal>
                <Reveal delay={0.18}>
                  <p className="text-lg text-stonewarm leading-relaxed max-w-md">{promotion.description}</p>
                </Reveal>
                <Reveal delay={0.24} className="mt-8">
                  <Button variant="gold" size="lg" onClick={() => document.querySelector("#visit")?.scrollIntoView({ behavior: "smooth" })} arrow>
                    {promotion.cta}
                  </Button>
                </Reveal>
              </div>
            </div>

            {/* Image */}
            <div className="relative min-h-[260px] lg:min-h-0">
              <img
                src={promotion.image}
                alt="A generous Chinese lunch buffet spread"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-ember/40 to-transparent lg:bg-gradient-to-r" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
