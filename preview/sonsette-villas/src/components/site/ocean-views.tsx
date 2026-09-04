"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ease } from "./motion";

export function OceanViews() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={ref}
      id="ocean"
      className="relative flex min-h-[92svh] items-center justify-center overflow-hidden bg-lagoon-950"
    >
      <motion.div style={{ y }} className="absolute -inset-y-[12%] inset-x-0">
        <Image
          src="/images/ocean-view.jpg"
          alt="The Atlantic Ocean seen from the shade of the villa veranda"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-lagoon-950/35" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-sand-50 to-transparent opacity-90" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-lagoon-950/70 to-transparent" />

      <div className="relative z-10 mx-auto max-w-5xl px-5 py-32 text-center md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
          className="mb-8 flex items-center justify-center gap-4 text-[11px] font-semibold tracking-[0.34em] uppercase text-sand-100/90 text-shadow-soft"
        >
          <span className="font-display text-sm italic tracking-normal text-coral-300">03</span>
          <span className="h-px w-10 bg-sand-100/50" aria-hidden="true" />
          Ocean Views
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, delay: 0.1, ease }}
          className="font-display text-5xl leading-[1.02] font-light tracking-tight text-balance text-sand-50 text-shadow-soft md:text-7xl lg:text-8xl"
        >
          The Atlantic,
          <br />
          <em className="italic text-coral-300">fifty-five feet</em>
          <br />
          from your door.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, delay: 0.25, ease }}
          className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-sand-100/85 text-shadow-soft md:text-lg"
        >
          Wake to the sound of the swell. Watch the water change its mind all
          afternoon — turquoise to sapphire to gold — without ever leaving the
          shade of the porch.
        </motion.p>
      </div>
    </section>
  );
}
