"use client";

import { motion, useReducedMotion } from "framer-motion";
import Button from "./Button";
import { restaurant } from "@/data/restaurant";
import { useReservation } from "./ReservationProvider";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero() {
  const { openReservation } = useReservation();
  const reduce = useReducedMotion();
  const scrollToMenu = () => document.querySelector("#menu")?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });

  return (
    <section className="relative h-[100svh] min-h-[620px] flex items-end sm:items-center overflow-hidden grain">
      {/* Background */}
      <motion.div
        className="absolute inset-0"
        initial={reduce ? {} : { scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src="/images/hero.jpg"
          alt="The atmospheric dining room at Eighty Eight Chinese Restaurant, Moka"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(17,16,15,0.55)_100%)]" />
      <div className="absolute inset-0 bg-vermilion/10 mix-blend-overlay" />

      {/* Content */}
      <motion.div
        variants={reduce ? {} : container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-full max-w-shell px-5 sm:px-8 pb-24 sm:pb-0"
      >
        <motion.p variants={item} className="eyebrow text-[11px] sm:text-[12px] font-semibold text-gold tracking-wide3">
          EIGHTY EIGHT · CHINESE RESTAURANT
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-6 font-display text-[clamp(2.9rem,11vw,7.5rem)] leading-[0.95] tracking-tight text-ivory"
        >
          A journey
          <br />
          <span className="text-stonewarm">through</span>
          <br />
          <em className="not-italic text-gold">flavour</em>
        </motion.h1>

        <motion.p variants={item} className="mt-7 max-w-xl text-base sm:text-lg text-stonewarm leading-relaxed">
          Discover generous Chinese flavours, vibrant dishes and an atmosphere made for
          sharing.
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-col sm:flex-row gap-3.5">
          <Button variant="primary" size="lg" onClick={openReservation} arrow>
            Reserve a table
          </Button>
          <Button variant="outline" size="lg" onClick={scrollToMenu}>
            Explore the menu
          </Button>
        </motion.div>

        <motion.p variants={item} className="mt-8 eyebrow text-[11px] text-stonewarm">
          Moka · Mauritius
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
        aria-hidden="true"
      >
        <span className="eyebrow text-[10px] text-stonewarm/80">Scroll to discover</span>
        <span className="relative block h-12 w-px bg-ivory/15 overflow-hidden">
          <motion.span
            className="absolute inset-0 bg-gold"
            animate={reduce ? {} : { y: ["-100%", "100%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </section>
  );
}
