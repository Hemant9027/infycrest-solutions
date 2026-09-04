"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ease } from "./motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0, y: 46 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease },
  },
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "42%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex h-svh min-h-[640px] flex-col overflow-hidden bg-lagoon-950"
    >
      <motion.div style={{ y: imageY }} className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="A quiet beach on Crooked Island, Bahamas, with a villa among the palms"
          fill
          priority
          sizes="100vw"
          className="animate-kenburns object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-lagoon-950/55 via-lagoon-950/10 to-lagoon-950/80" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ y: contentY, opacity: fade }}
        className="relative z-10 mx-auto flex h-full w-full max-w-[90rem] flex-col justify-end px-5 pb-16 md:px-10 md:pb-20"
      >
        <motion.p
          variants={item}
          className="mb-6 flex items-center gap-4 text-[11px] font-semibold tracking-[0.34em] uppercase text-sand-100/90 text-shadow-soft md:text-xs"
        >
          <span className="h-px w-12 bg-coral-400" aria-hidden="true" />
          Sonsette Villas — Major&apos;s Cay, Crooked Island, The Bahamas
        </motion.p>

        <h1 className="max-w-6xl font-display font-light leading-[0.98] tracking-tight text-sand-50 text-shadow-soft">
          <motion.span variants={item} className="block text-[13.5vw] sm:text-[11vw] lg:text-[8.2vw]">
            A Little Piece of
          </motion.span>
          <motion.span
            variants={item}
            className="block text-[13.5vw] italic text-coral-300 sm:text-[11vw] lg:text-[8.2vw]"
          >
            Heaven
          </motion.span>
          <motion.span
            variants={item}
            className="block text-[9vw] sm:text-[7vw] lg:text-[5.2vw]"
          >
            on Crooked Island
          </motion.span>
        </h1>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center"
        >
          <a
            href="#booking"
            className="inline-flex items-center justify-center rounded-full bg-sand-50 px-8 py-4 text-[11px] font-semibold tracking-[0.24em] uppercase text-lagoon-950 transition-colors duration-300 hover:bg-coral-400"
          >
            Stay at Sonsette Villas
          </a>
          <a
            href="#villas"
            className="inline-flex items-center justify-center rounded-full border border-sand-50/40 px-8 py-4 text-[11px] font-semibold tracking-[0.24em] uppercase text-sand-50 transition-colors duration-300 hover:border-sand-50 hover:bg-sand-50/10"
          >
            Explore the Villas
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        style={{ opacity: fade }}
        className="absolute right-6 bottom-8 z-10 hidden flex-col items-center gap-3 md:right-10 md:flex"
      >
        <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-sand-100/70 [writing-mode:vertical-rl]">
          Scroll
        </span>
        <span className="relative h-16 w-px overflow-hidden bg-sand-50/20">
          <span className="animate-scroll-line absolute inset-0 bg-coral-400" />
        </span>
      </motion.div>
    </section>
  );
}
