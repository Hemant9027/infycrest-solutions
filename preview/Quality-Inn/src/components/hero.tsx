"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Compass, Martini, Phone, TreePalm, Waves } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { site } from "@/lib/site";

const EASE = [0.22, 1, 0.36, 1] as const;

const facts = [
  { icon: Martini, label: "Bar & Lounge on site" },
  { icon: Waves, label: "Beaches in easy reach" },
  { icon: Compass, label: "Gateway to outdoor Andros" },
  { icon: TreePalm, label: "The Garden of Andros" },
];

function HeroLine({ children, delay, className }: { children: React.ReactNode; delay: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <motion.span
        className={`block ${className ?? ""}`}
        initial={{ y: reduce ? 0 : "112%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.1, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "38%"]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative flex min-h-svh flex-col overflow-hidden bg-pine-950 text-sand-50">
      {/* Backdrop */}
      <motion.div style={reduce ? undefined : { y: imageY }} className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: reduce ? 1 : 1.14 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="/images/hero.jpg"
            alt="A tidal creek winding through lush mangroves and palms to a golden shoreline in Andros, The Bahamas"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-pine-950/65 via-pine-950/15 to-pine-950/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-pine-950/50 via-transparent to-transparent" />

      {/* Vertical coordinates flourish */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.6 }}
        className="absolute top-1/2 right-6 hidden -translate-y-1/2 rotate-90 items-center gap-3 text-[0.62rem] font-medium tracking-[0.4em] text-sand-50/55 uppercase xl:flex"
      >
        <span className="h-px w-10 bg-sand-50/40" />
        {site.coordinates} — North Andros
        <span className="h-px w-10 bg-sand-50/40" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={reduce ? undefined : { y: contentY, opacity: fade }}
        className="container-site relative z-10 flex flex-1 flex-col justify-end pt-36 pb-10"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease: EASE }}
          className="mb-6 flex items-center gap-3 text-[0.7rem] font-semibold tracking-[0.34em] text-sand-50/85 uppercase"
        >
          <span className="grid size-8 place-items-center rounded-full border border-sand-50/25 bg-sand-50/10 backdrop-blur-sm">
            <TreePalm className="size-3.5" strokeWidth={1.6} />
          </span>
          {site.name} — A relaxed island hotel
        </motion.p>

        <h1 className="font-display font-light tracking-tight text-balance">
          <HeroLine delay={0.7} className="text-2xl italic text-copper-300 sm:text-4xl">
            Discover
          </HeroLine>
          <HeroLine delay={0.82} className="text-[clamp(3.2rem,11vw,9.5rem)] leading-[0.92] uppercase">
            The Garden
          </HeroLine>
          <HeroLine delay={0.94} className="text-[clamp(2.6rem,9vw,7.75rem)] leading-[1.02] italic">
            of Andros
          </HeroLine>
        </h1>

        <div className="mt-9 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.15, ease: EASE }}
            className="max-w-md text-base leading-relaxed text-sand-50/80 sm:text-lg"
          >
            On the Queen&rsquo;s Highway in Staniard Creek, North Andros — a slow, easy base between
            turquoise water, pine forest and the friendliest bar on the road.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.3, ease: EASE }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#stay"
              className="group inline-flex items-center gap-2.5 rounded-full bg-copper-400 px-7 py-4 text-[0.8rem] font-semibold tracking-[0.14em] text-pine-950 uppercase shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-copper-300"
            >
              Plan Your Stay
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href={site.contact.phoneHref}
              className="group inline-flex items-center gap-2.5 rounded-full border border-sand-50/35 px-7 py-4 text-[0.8rem] font-semibold tracking-[0.14em] text-sand-50 uppercase backdrop-blur-sm transition-all duration-300 hover:border-sand-50 hover:bg-sand-50/10"
            >
              <Phone className="size-4" />
              Contact the Hotel
            </a>
          </motion.div>
        </div>

        {/* Fact ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: EASE }}
          className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-sand-50/18 pt-6"
        >
          {facts.map((fact) => (
            <span key={fact.label} className="flex items-center gap-2.5 text-[0.72rem] font-medium tracking-[0.18em] text-sand-50/75 uppercase">
              <fact.icon className="size-4 text-tide-300" strokeWidth={1.6} />
              {fact.label}
            </span>
          ))}
          <span className="ml-auto hidden items-center gap-3 text-[0.62rem] tracking-[0.3em] text-sand-50/55 uppercase sm:flex">
            Scroll
            <span className="relative block h-8 w-px overflow-hidden bg-sand-50/20">
              <motion.span
                className="absolute inset-x-0 h-full bg-copper-300"
                animate={reduce ? undefined : { y: ["-110%", "110%"] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              />
            </span>
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
