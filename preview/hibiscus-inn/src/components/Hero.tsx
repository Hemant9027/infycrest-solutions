"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Compass, HeartHandshake, Mail, Palmtree } from "lucide-react";
import Hibiscus from "@/components/Hibiscus";
import { IMG } from "@/lib/images";
import { CONTACT_MAILTO } from "@/lib/site";

const EASE = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.55 } },
};

const rise = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: EASE } },
};

const lineUp = {
  hidden: { y: "112%" },
  show: { y: "0%", transition: { duration: 1.15, ease: EASE } },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-46%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-sea-950"
    >
      {/* Parallax + slow ken-burns backdrop */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <img
          src={IMG.hero.src}
          alt={IMG.hero.alt}
          fetchPriority="high"
          className="h-full w-full animate-kenburns object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-sea-950/90 via-sea-950/20 to-sea-950/35" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-b from-transparent to-sand-50" />

      {/* Rotating souvenir badge */}
      <div className="absolute bottom-24 right-10 z-10 hidden h-28 w-28 lg:block">
        <svg
          viewBox="0 0 100 100"
          className="h-full w-full animate-spin-slow text-sand-100/75"
          aria-hidden="true"
        >
          <defs>
            <path
              id="heroBadgeCircle"
              d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"
            />
          </defs>
          <text fontSize="8" letterSpacing="2.2" fill="currentColor">
            <textPath href="#heroBadgeCircle" textLength="236">
              HIBISCUS INN · NASSAU · BAHAMAS · ISLAND TIME
            </textPath>
          </text>
        </svg>
        <Hibiscus className="absolute inset-0 m-auto h-8 w-8 text-hibiscus-300" />
      </div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-32 pt-44 md:px-10 md:pb-40"
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          <motion.p
            variants={rise}
            className="flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-sand-100/85 sm:text-xs"
          >
            <span className="h-px w-10 bg-hibiscus-300 sm:w-14" />
            A guest house in Nassau · New Providence · Bahamas
          </motion.p>

          <h1 className="mt-7 font-display text-[clamp(3.1rem,9.5vw,7.6rem)] leading-[0.97] tracking-tight text-sand-50">
            <span className="block overflow-hidden pb-1">
              <motion.span variants={lineUp} className="block">
                Your <em className="italic text-hibiscus-300">Bahamian</em> stay
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-2">
              <motion.span variants={lineUp} className="block">
                starts here<span className="text-hibiscus-400">.</span>
              </motion.span>
            </span>
          </h1>

          <motion.p
            variants={rise}
            className="mt-7 max-w-xl text-base leading-relaxed text-sand-100/85 sm:text-lg"
          >
            A small, easygoing guest house on New Providence — simple
            comforts, warm welcomes and the real Nassau just outside the door.
          </motion.p>

          <motion.div variants={rise} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 rounded-full bg-hibiscus-500 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-sea-950/30 transition-all duration-300 hover:bg-hibiscus-600 hover:shadow-2xl"
            >
              Check Availability
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href={CONTACT_MAILTO}
              className="inline-flex items-center gap-2.5 rounded-full border border-sand-50/40 px-8 py-4 text-sm font-semibold text-sand-50 backdrop-blur-sm transition-all duration-300 hover:border-sand-50 hover:bg-sand-50/10"
            >
              <Mail className="h-4 w-4" />
              Contact Us
            </a>
          </motion.div>

          <motion.div
            variants={rise}
            className="mt-16 hidden max-w-2xl grid-cols-3 gap-8 border-t border-sand-50/15 pt-8 md:grid"
          >
            {[
              {
                icon: Palmtree,
                title: "Island pace",
                copy: "Slow days, unhurried everything.",
              },
              {
                icon: HeartHandshake,
                title: "Personal welcomes",
                copy: "Greeted like a neighbour, not a number.",
              },
              {
                icon: Compass,
                title: "Local tips",
                copy: "We'll tell you where we'd go.",
              },
            ].map((f) => (
              <div key={f.title} className="flex items-start gap-3">
                <f.icon className="mt-0.5 h-5 w-5 shrink-0 text-hibiscus-300" />
                <div>
                  <p className="text-sm font-semibold text-sand-50">{f.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-sand-100/65">
                    {f.copy}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">
        <span className="text-[0.6rem] font-semibold uppercase tracking-[0.34em] text-sand-100/60">
          Scroll
        </span>
        <span className="relative h-10 w-px overflow-hidden bg-sand-50/20">
          <span className="absolute top-0 left-0 h-3 w-px animate-scroll-cue bg-hibiscus-300" />
        </span>
      </div>
    </section>
  );
}
