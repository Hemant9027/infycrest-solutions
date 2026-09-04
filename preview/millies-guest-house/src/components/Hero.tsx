"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Compass } from "lucide-react";
import { HERO_VIDEO, IMAGES } from "@/lib/media";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const mediaY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-22%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-svh flex-col overflow-hidden bg-abyss"
    >
      <motion.div style={{ y: mediaY }} className="absolute inset-0 scale-[1.04]">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={IMAGES.heroPoster}
          className="h-full w-full object-cover"
          aria-hidden="true"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-abyss/80 via-abyss/15 to-abyss/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-abyss/55 via-transparent to-transparent" />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: fade }}
        className="relative z-10 mx-auto flex w-full max-w-[92rem] flex-1 flex-col justify-end px-5 pb-24 pt-40 sm:px-8 lg:px-12 lg:pb-28"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8 flex items-center gap-3 text-cream/75"
        >
          <Compass className="size-4 text-lagoon" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.32em]">
            Millie’s Guest House — The Abacos, The Bahamas
          </span>
        </motion.div>

        <h1 className="font-serif font-light leading-[0.98] tracking-[-0.02em] text-cream">
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: "112%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.15, delay: 0.35, ease: EASE }}
              className="block text-[clamp(2.9rem,8.2vw,7.6rem)]"
            >
              Your Waterfront
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: "112%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.15, delay: 0.48, ease: EASE }}
              className="block text-[clamp(2.9rem,8.2vw,7.6rem)]"
            >
              Stay in <em className="font-normal italic text-foam">The Abacos</em>
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.75, ease: EASE }}
          className="mt-7 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg"
        >
          A spacious, modern guest house set at the water’s edge — where the sea
          is the first thing you see each morning and the last each night.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: EASE }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-full bg-cream px-7 py-3.5 text-sm font-semibold text-sea transition-colors duration-500 hover:bg-foam"
          >
            Plan Your Stay
            <ArrowDown className="size-4 transition-transform duration-500 group-hover:translate-y-0.5" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-3 rounded-full border border-cream/40 px-7 py-3.5 text-sm font-semibold text-cream transition-colors duration-500 hover:border-cream hover:bg-cream/10"
          >
            Discover the house
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="mt-16 flex items-end justify-between text-cream/60"
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.28em]">
            26.54° N — 77.06° W · The Sea of Abaco
          </p>
          <div className="hidden flex-col items-center gap-3 md:flex">
            <span className="text-[10px] font-medium uppercase tracking-[0.32em]">
              Scroll
            </span>
            <span className="relative h-14 w-px overflow-hidden bg-cream/25">
              <motion.span
                animate={{ y: ["-100%", "100%"] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-0 top-0 h-1/2 w-px bg-lagoon"
              />
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
