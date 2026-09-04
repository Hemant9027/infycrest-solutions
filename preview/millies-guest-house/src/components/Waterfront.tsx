"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sailboat, Sunrise, Sunset } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { IMAGES } from "@/lib/media";

const MOMENTS = [
  { icon: Sunrise, text: "First light over the Sea of Abaco" },
  { icon: Sailboat, text: "Boats drifting through the day" },
  { icon: Sunset, text: "Evenings that end in gold" },
];

export default function Waterfront() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section
      id="waterfront"
      ref={ref}
      className="relative flex min-h-[95vh] scroll-mt-24 items-center overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute -inset-y-[14%] inset-x-0">
        <Image
          src={IMAGES.waterfront}
          alt="A wooden pier reaching out over glassy turquoise water, seen from above"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-abyss/60 via-abyss/35 to-abyss/70" />

      <div className="relative z-10 mx-auto w-full max-w-[92rem] px-5 py-32 text-center sm:px-8 lg:px-12">
        <Reveal>
          <p className="inline-flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-foam">
            <span className="h-px w-10 bg-foam/50" />
            03 — Waterfront Experience
            <span className="h-px w-10 bg-foam/50" />
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <blockquote className="mx-auto mt-8 max-w-4xl font-serif text-4xl font-light leading-[1.08] tracking-tight text-cream sm:text-5xl lg:text-[4.2rem]">
            “The sea begins{" "}
            <em className="italic text-foam">where the house ends</em>.”
          </blockquote>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg">
            At Millie’s, the waterfront isn’t a view you visit — it’s the
            rhythm of the whole day. Step outside and you’re already there.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-10">
            {MOMENTS.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-3 rounded-full border border-cream/20 bg-cream/10 px-5 py-2.5 text-sm text-cream/90 backdrop-blur-md"
              >
                <Icon className="size-4 text-foam" />
                {text}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
