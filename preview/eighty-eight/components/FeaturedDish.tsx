"use client";

import Reveal from "./Reveal";
import Button from "./Button";

export default function FeaturedDish() {
  return (
    <section className="relative bg-ink py-0">
      <div className="mx-auto max-w-shell px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center py-24 sm:py-32">
          {/* Image */}
          <Reveal className="relative aspect-[4/5] lg:aspect-[5/6] overflow-hidden rounded-sm order-2 lg:order-1">
            <img
              src="/images/crispy-chicken.jpg"
              alt="Golden crispy chicken served at Eighty Eight"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-ink/40 to-transparent" />
            <span className="absolute top-6 left-6 circle-motif h-16 w-16" aria-hidden="true" />
          </Reveal>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <p className="eyebrow text-[11px] font-semibold text-gold tracking-wide3 flex items-center gap-3">
                <span className="gold-rule w-10 inline-block" aria-hidden="true" />
                Signature favourite
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-ivory">
                Crispy
                <br />
                <span className="text-crimson">Chicken</span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="gold-rule w-20 my-8" aria-hidden="true" />
            </Reveal>
            <Reveal delay={0.18}>
              <p className="text-lg text-stonewarm leading-relaxed max-w-md">
                A golden, generous favourite designed for the table — crisp on the
                outside, tender within, and made to share.
              </p>
            </Reveal>
            <Reveal delay={0.24} className="flex items-center gap-8 mt-10">
              <Button variant="gold" href="#menu" arrow>
                View menu
              </Button>
              <span className="hidden sm:inline-flex h-16 w-px bg-gold/30" aria-hidden="true" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
