"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, MapPin, Waves, Wifi, Wind } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { IMG } from "@/lib/site";

const EASE = [0.22, 1, 0.36, 1] as const;

function HeadlineLine({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden pb-1">
      <motion.span
        className="block"
        initial={{ y: "112%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.1, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "18%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "32%"]);

  return (
    <section ref={ref} id="top" className="relative h-[100svh] min-h-[660px] overflow-hidden bg-abyss-950">
      {/* Backdrop */}
      <motion.div style={{ y: imageY }} className="absolute inset-0">
        <div className={reduce ? "absolute inset-0" : "animate-kenburns absolute inset-0"}>
          <Image
            src={IMG.heroHarbour}
            alt="Aerial view of turquoise sandbars and cays near Elizabeth Harbour, Exuma"
            fill
            priority
            sizes="100vw"
            placeholder="blur"
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* Atmosphere overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-abyss-950/55 via-abyss-950/10 to-abyss-950/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-abyss-950/45 via-transparent to-transparent" />
      <div className="grain absolute inset-0" />

      {/* Content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 mx-auto flex h-full max-w-[88rem] flex-col justify-end px-5 pb-28 sm:px-8 sm:pb-32"
      >
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
          className="mb-6 flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.3em] text-lagoon-200 sm:text-xs"
        >
          <MapPin className="size-4 text-lagoon-300" strokeWidth={2} />
          Queen&apos;s Highway · George Town · Great Exuma · The Bahamas
        </motion.p>

        <h1 className="font-display max-w-5xl text-[13.5vw] leading-[0.98] font-medium text-sand-50 sm:text-[9vw] lg:text-[6.6rem]">
          <HeadlineLine delay={0.3}>Wake Up to the</HeadlineLine>
          <HeadlineLine delay={0.42}>
            Beauty of <span className="italic text-lagoon-300">Elizabeth&nbsp;Harbour</span>
          </HeadlineLine>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.72, ease: EASE }}
          className="mt-7 max-w-xl text-[15px] leading-relaxed text-sand-50/85 sm:text-base"
        >
          A family-run guest house set above one of the great anchorages of the Bahamas —
          eight quiet, air-conditioned rooms and the unhurried rhythm of Exuma, hosted by
          Phillipa Marshall.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.88, ease: EASE }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-full bg-coral-500 px-7 py-4 text-sm font-bold tracking-wide text-sand-50 shadow-[0_18px_50px_-12px_rgba(226,116,77,0.9)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-coral-600"
          >
            Contact Marshall&apos;s Guest House
            <span className="grid size-6 place-items-center rounded-full bg-sand-50/20 transition-transform duration-300 group-hover:translate-x-1">
              <ArrowDown className="size-3.5 -rotate-90" strokeWidth={2.4} />
            </span>
          </a>
          <a
            href="#rooms"
            className="inline-flex items-center rounded-full px-7 py-4 text-sm font-bold tracking-wide text-sand-50 ring-1 ring-sand-50/40 backdrop-blur-sm transition-all duration-300 hover:bg-sand-50/10 hover:ring-sand-50/70"
          >
            Explore the Rooms
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom facts bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.15 }}
        className="absolute inset-x-0 bottom-0 z-10 border-t border-sand-50/15"
      >
        <div className="mx-auto flex max-w-[88rem] items-center justify-between gap-6 px-5 py-5 sm:px-8">
          <div className="flex flex-wrap items-center gap-x-7 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-sand-50/75">
            <span className="inline-flex items-center gap-2">
              <Waves className="size-4 text-lagoon-300" strokeWidth={2} /> Overlooking the harbour
            </span>
            <span className="hidden items-center gap-2 sm:inline-flex">
              <Wind className="size-4 text-lagoon-300" strokeWidth={2} /> 8 air-conditioned rooms
            </span>
            <span className="hidden items-center gap-2 md:inline-flex">
              <Wifi className="size-4 text-lagoon-300" strokeWidth={2} /> WiFi · Non-smoking
            </span>
          </div>
          <a
            href="#about"
            aria-label="Scroll to learn about Marshall's"
            className="animate-floaty hidden size-11 place-items-center rounded-full ring-1 ring-sand-50/35 transition-colors hover:bg-sand-50/10 sm:grid"
          >
            <ArrowDown className="size-4 text-sand-50" strokeWidth={2} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
