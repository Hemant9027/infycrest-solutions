"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading, Stamp } from "./ui";
import { Reveal } from "./Reveal";

const STATS = [
  { value: "5", label: "ranch-style units, all on one level" },
  { value: "3", label: "elegant rooms, simply kept" },
  { value: "2", label: "rooms joining as a suite" },
  { value: "1", label: "host who knows your name" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yMain = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const ySmall = useTransform(scrollYProgress, [0, 1], [90, -60]);

  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
      {/* faint background word */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 top-16 select-none font-display text-[22vw] font-semibold italic leading-none text-ink/[0.035]"
      >
        nest
      </div>

      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
          {/* Text column */}
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                index="01"
                label="About Gaga’s Nest"
                title={
                  <>
                    A little nest on the{" "}
                    <em className="text-coral">quiet side</em> of town
                  </>
                }
              />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-8 space-y-5 text-[15px] leading-[1.85] text-ink/75 sm:text-base">
                <p>
                  Tucked onto East Street South, on the calm northern edge of
                  Matthew Town, Gaga’s Nest is a five-unit, ranch-style
                  guesthouse looked after personally by{" "}
                  <strong className="font-semibold text-ink">
                    Mr. Kevin Hanchell
                  </strong>
                  . Nothing here is fancy for show — just three elegant rooms,
                  honest comforts, and a host who treats every guest like kin.
                </p>
                <p>
                  Days move at island pace. Coffee on the porch while the town
                  wakes up slow. A breeze through the louvres. And beyond the
                  gate, the whole wild, salt-bright beauty of Inagua waiting
                  for you.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-wrap gap-2.5">
                <span className="chip text-ink/70">Family-run</span>
                <span className="chip text-ink/70">Ranch-style</span>
                <span className="chip text-ink/70">WiFi throughout</span>
                <span className="chip text-ink/70">Northern Matthew Town</span>
              </div>
            </Reveal>
          </div>

          {/* Image collage */}
          <div ref={ref} className="relative lg:col-span-7">
            <motion.div
              style={{ y: yMain }}
              className="img-frame relative ml-auto aspect-[4/3] w-full sm:w-[86%]"
            >
              <Image
                src="/img/porch.jpg"
                alt="A rocking chair on the shaded porch of Gaga’s Nest"
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
            </motion.div>
            <motion.div
              style={{ y: ySmall }}
              className="img-frame absolute -bottom-10 left-0 hidden aspect-[4/5] w-[38%] border-4 border-bone sm:block"
            >
              <Image
                src="/img/garden.jpg"
                alt="A shaded garden path beside the guesthouse"
                fill
                sizes="30vw"
                className="object-cover"
              />
            </motion.div>
            <Stamp className="absolute -top-8 right-6 h-24 w-24 sm:right-16 sm:h-28 sm:w-28" />
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 sm:mt-28 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="bg-bone">
              <div className="flex h-full flex-col gap-2 px-6 py-8 sm:px-8">
                <span className="font-display text-5xl font-medium text-coral sm:text-6xl">
                  {s.value}
                </span>
                <span className="text-[12px] font-semibold uppercase leading-relaxed tracking-[0.14em] text-ink/55">
                  {s.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
