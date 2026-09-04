"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, MapPin, Phone } from "lucide-react";
import { scrollToId } from "@/lib/scroll";
import { EASE } from "./Reveal";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "26%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "58%"]);
  const fade = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-svh flex-col overflow-hidden bg-ink"
    >
      {/* Background image */}
      <motion.div style={{ y: imgY }} className="absolute inset-0">
        <Image
          src="/img/hero.jpg"
          alt="Gaga’s Nest — a ranch-style guesthouse in Matthew Town, Inagua, at golden hour"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="animate-kenburns object-cover"
        />
      </motion.div>
      {/* Scrims */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/95 via-ink/30 to-ink/45" />
      <div className="absolute inset-0 bg-[radial-gradient(90%_70%_at_30%_85%,transparent_0%,rgb(15_36_31/0.35)_100%)]" />

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity: fade }}
        className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-end px-5 pb-12 pt-40 sm:px-8 sm:pb-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55, ease: EASE }}
          className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-cream/80"
        >
          <MapPin className="h-3.5 w-3.5 text-flamingo" />
          <span>East Street South · Matthew Town · Inagua · The Bahamas</span>
        </motion.div>

        <h1 className="mt-6 font-display font-medium leading-[0.98] tracking-[-0.02em] text-cream">
          <motion.span
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.7, ease: EASE }}
            className="block text-[clamp(3rem,9vw,7.5rem)]"
          >
            Feel at Home
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.85, ease: EASE }}
            className="block text-[clamp(3rem,9vw,7.5rem)] italic text-flamingo"
          >
            in Inagua
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.05, ease: EASE }}
          className="mt-7 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg"
        >
          Gaga’s Nest is a family-run, ranch-style guesthouse on the quiet
          northern side of town — five simple units, warm welcomes, and the
          wild calm of Great Inagua all around.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: EASE }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <button
            onClick={() => scrollToId("contact")}
            className="group inline-flex items-center gap-2.5 rounded-full bg-coral px-7 py-4 text-[13px] font-bold uppercase tracking-[0.14em] text-cream shadow-[0_18px_40px_-12px_rgb(173_76_52/0.8)] transition-all duration-300 hover:-translate-y-1 hover:bg-coral-deep"
          >
            Plan Your Stay
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
          <a
            href="tel:+12423391666"
            className="inline-flex items-center gap-2.5 rounded-full border border-cream/35 px-7 py-4 text-[13px] font-bold uppercase tracking-[0.14em] text-cream backdrop-blur-sm transition-all duration-300 hover:border-cream hover:bg-cream/10"
          >
            <Phone className="h-4 w-4" />
            Contact Gaga’s Nest
          </a>
        </motion.div>

        {/* Bottom strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.5 }}
          className="mt-14 flex items-end justify-between gap-6 border-t border-cream/15 pt-6"
        >
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-cream/60">
            <span>Ranch-style guesthouse</span>
            <span className="hidden sm:inline text-flamingo">✦</span>
            <span>Five units · three elegant rooms</span>
            <span className="hidden md:inline text-flamingo">✦</span>
            <span className="hidden md:inline">Family-run, island lifestyle</span>
          </div>
          <button
            onClick={() => scrollToId("about")}
            aria-label="Scroll to about"
            className="hidden shrink-0 items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-cream/60 transition-colors hover:text-cream sm:flex"
          >
            Scroll
            <span className="grid h-10 w-10 place-items-center rounded-full border border-cream/25">
              <ArrowDown className="h-4 w-4 animate-float" />
            </span>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
