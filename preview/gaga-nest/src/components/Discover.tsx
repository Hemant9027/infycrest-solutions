"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Compass } from "lucide-react";
import { SectionHeading } from "./ui";
import { Reveal } from "./Reveal";

const SPOTS = [
  {
    image: "/img/flamingos.jpg",
    num: "I",
    title: "Home of the flamingo",
    text: "Inagua National Park shelters one of the world’s great colonies of West Indian flamingos — a pink tide across the wetlands you won’t forget.",
    ratio: "aspect-[4/5]",
  },
  {
    image: "/img/saltpans.jpg",
    num: "II",
    title: "The salt of the island",
    text: "Fields of rose-pink salt pans sweep across the island’s heart — Inagua has worked its salt, quietly, for generations.",
    ratio: "aspect-[4/5]",
    offset: "lg:mt-16",
  },
  {
    image: "/img/donkey.jpg",
    num: "III",
    title: "Donkeys in no hurry",
    text: "Wild donkeys still roam the back roads and scrub of Inagua — sometimes strolling straight through town like they own it. They do.",
    ratio: "aspect-[4/5]",
  },
  {
    image: "/img/coast.jpg",
    num: "IV",
    title: "The wild edge",
    text: "Rocky shores, empty beaches, and a lighthouse keeping watch over the straits. The sea is always within walking distance.",
    ratio: "aspect-[4/5]",
    offset: "lg:mt-16",
  },
];

export default function Discover() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <section
      ref={ref}
      id="discover"
      className="relative overflow-hidden bg-ink py-24 text-cream sm:py-32 lg:py-40"
    >
      <motion.div
        aria-hidden
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-x-0 -bottom-6 select-none font-display text-[18vw] font-semibold italic leading-none text-cream/[0.04]"
      >
        inagua
      </motion.div>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              index="04"
              label="Discover Inagua"
              tone="cream"
              title={
                <>
                  Wild, salt-bright &amp;{" "}
                  <em className="text-flamingo">beautifully quiet</em>
                </>
              }
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:max-w-md">
            <p className="text-[15px] leading-relaxed text-cream/65">
              Inagua is the southernmost island of The Bahamas — famous among
              birdwatchers, blissfully unknown to crowds. This is the quiet
              island, and it rewards slow travellers.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {SPOTS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.09} className={s.offset ?? ""}>
              <article className="group">
                <div
                  className={`relative ${s.ratio} overflow-hidden rounded-[1.6rem]`}
                >
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(min-width: 1024px) 23vw, (min-width: 640px) 46vw, 100vw"
                    className="object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.07]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/70 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-40" />
                  <span className="absolute left-4 top-4 font-display text-sm italic tracking-widest text-cream/85">
                    No. {s.num}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-2xl tracking-tight text-cream">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-cream/60">
                  {s.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-16 flex flex-col items-start gap-4 rounded-3xl border border-cream/15 bg-cream/[0.04] px-7 py-6 sm:flex-row sm:items-center">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-flamingo/15 text-flamingo">
              <Compass className="h-5 w-5" strokeWidth={1.7} />
            </span>
            <p className="text-[15px] leading-relaxed text-cream/75">
              <span className="font-display text-lg italic text-flamingo">
                Where to begin? Just ask.
              </span>{" "}
              Kevin knows every quiet corner of Great Inagua — from the flamingo
              flats to the loneliest stretch of sand — and loves to point the
              way.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
