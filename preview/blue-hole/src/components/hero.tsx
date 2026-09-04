"use client";

import { motion } from "framer-motion";
import { ArrowDown, Droplets, Plane, Waves } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0, y: 42 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: EASE } },
};

const FACTS = [
  { icon: Plane, label: "5 min from Congo Town Airport" },
  { icon: Waves, label: "Secluded private beach" },
  { icon: Droplets, label: "Blue holes across the street" },
];

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh flex-col overflow-hidden bg-abyss text-shell">
      {/* Backdrop video */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero.jpg"
          aria-hidden="true"
        >
          <source
            src="https://videos.pexels.com/video-files/37083114/15709742_3840_2160_60fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-abyss via-abyss/25 to-abyss/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-abyss/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex w-full max-w-[90rem] flex-1 flex-col justify-end px-5 pb-10 pt-36 sm:px-8"
      >
        <motion.p
          variants={item}
          className="kicker mb-6 flex items-center gap-4 text-aqua"
        >
          <span className="h-px w-10 bg-aqua/50" />
          Congo Town · South Andros · The Bahamas
          <span className="hidden h-px w-10 bg-aqua/50 sm:block" />
        </motion.p>

        <h1 className="font-display text-[clamp(3rem,8.6vw,7.75rem)] font-medium leading-[0.95] tracking-[-0.01em]">
          <motion.span variants={item} className="block">
            Your private
          </motion.span>
          <motion.span
            variants={item}
            className="block font-light italic text-aqua"
          >
            island escape
          </motion.span>
          <motion.span variants={item} className="block">
            in South Andros
          </motion.span>
        </h1>

        <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <motion.p
            variants={item}
            className="max-w-md text-base leading-relaxed text-shell/80 sm:text-lg"
          >
            Secluded villas, turquoise water and the natural beauty of Andros.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-3">
            <a
              href="#villas"
              className="inline-flex items-center gap-2 rounded-full bg-sand px-7 py-3.5 text-sm font-semibold text-abyss transition-colors duration-300 hover:bg-aqua"
            >
              Explore the villas
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-shell/35 px-7 py-3.5 text-sm font-semibold text-shell transition-all duration-300 hover:border-shell hover:bg-shell/10"
            >
              Plan your stay
            </a>
          </motion.div>
        </div>

        {/* Fact bar */}
        <motion.div
          variants={item}
          className="mt-12 grid grid-cols-1 gap-x-8 gap-y-3 border-t border-shell/15 pt-6 sm:grid-cols-3"
        >
          {FACTS.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 text-sm text-shell/75">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-shell/10">
                <Icon className="h-4 w-4 text-aqua" />
              </span>
              {label}
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#welcome"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-40 right-8 z-10 hidden flex-col items-center gap-3 lg:flex"
        aria-label="Scroll to welcome section"
      >
        <span className="text-[0.6rem] font-semibold uppercase tracking-[0.35em] text-shell/60 [writing-mode:vertical-rl]">
          scroll
        </span>
        <span className="relative h-16 w-px overflow-hidden bg-shell/20">
          <span className="absolute inset-x-0 h-1/2 animate-drop bg-aqua" />
        </span>
        <ArrowDown className="h-3.5 w-3.5 text-shell/60" />
      </motion.a>
    </section>
  );
}
