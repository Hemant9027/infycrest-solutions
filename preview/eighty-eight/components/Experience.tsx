"use client";

import Reveal from "./Reveal";
import { restaurant } from "@/data/restaurant";

const panels = [
  {
    num: "01",
    category: "All-you-can-eat",
    title: "All you can eat",
    description:
      "Generous, abundant dining where the table is made for refills and long conversations.",
    image: "/images/experience-buffet.jpg",
  },
  {
    num: "02",
    category: "Cocktails",
    title: "Great cocktails",
    description:
      "A well-made drink alongside your meal — the perfect companion to a shared dinner.",
    image: "/images/experience-cocktails.jpg",
  },
  {
    num: "03",
    category: "Live music",
    title: "Live music",
    description:
      "An atmosphere that lingers. Let the evening carry on long after the last course.",
    image: "/images/experience-live-music.jpg",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative bg-ember py-24 sm:py-32">
      <div className="mx-auto max-w-shell px-5 sm:px-8">
        <div className="max-w-3xl">
          <Reveal>
            <p className="eyebrow text-[11px] font-semibold text-gold tracking-wide3 flex items-center gap-3">
              <span className="gold-rule w-10 inline-block" aria-hidden="true" />
              The dining experience
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ivory">
              More than a meal.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-5 text-lg text-stonewarm">A place to gather, celebrate and stay awhile.</p>
          </Reveal>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-4 sm:gap-6">
          {panels.map((p, i) => (
            <Reveal key={p.title} delay={0.08 * i} className="h-[460px] sm:h-[500px]">
              <article className="group relative h-full overflow-hidden rounded-sm bg-ink border border-ivory/5">
                <img
                  src={p.image}
                  alt={p.description}
                  loading="lazy"
                  className="media-object absolute inset-0 w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10 transition-opacity duration-500 group-hover:opacity-80" />
                <span className="absolute top-6 right-7 font-display text-6xl text-ivory/15 group-hover:text-gold/30 transition-colors duration-500">
                  {p.num}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <p className="eyebrow text-[10px] text-gold mb-3">{p.category}</p>
                  <h3 className="font-display text-3xl text-ivory">{p.title}</h3>
                  <div className="gold-rule w-14 my-4" aria-hidden="true" />
                  <p className="text-sm text-stonewarm leading-relaxed">{p.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <p className="text-sm text-stonewarm/80 flex flex-wrap items-center gap-x-3 gap-y-1">
            {restaurant.characteristics.map((c) => (
              <span key={c} className="flex items-center gap-3 uppercase tracking-wide2 text-[11px] text-stonewarm">
                <span className="circle-motif h-1.5 w-1.5 inline-block bg-gold" aria-hidden="true" />
                {c}
              </span>
            ))}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
