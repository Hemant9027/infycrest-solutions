import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, MapPin, Palmtree, Sparkles, Sun } from "lucide-react";
import { useRef } from "react";
import { IMG } from "../data/site";

const words = ["Your", "Little", "Paradise", "in", "The", "Bahamas"];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative min-h-svh overflow-hidden">
      {/* Backdrop */}
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0">
        <img
          src={IMG.hero.src}
          alt={IMG.hero.alt}
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
      </motion.div>
      <div className="absolute inset-0 bg-ink/30" />

      {/* Content */}
      <motion.div
        style={{ opacity: fade }}
        className="relative z-10 mx-auto flex min-h-svh max-w-6xl flex-col justify-end px-5 pb-28 pt-40 sm:px-8 md:justify-center md:pb-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-7 flex flex-wrap items-center gap-2.5"
        >
          {[
            { icon: MapPin, text: "Nassau, The Bahamas" },
            { icon: Sun, text: "Small & Independent" },
            { icon: Sparkles, text: "A personal alternative to the big resorts" },
          ].map((chip) => (
            <span
              key={chip.text}
              className="inline-flex items-center gap-1.5 rounded-full bg-white/12 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md ring-1 ring-white/25 sm:text-xs"
            >
              <chip.icon className="size-3.5" />
              {chip.text}
            </span>
          ))}
        </motion.div>

        <h1 className="max-w-4xl font-display text-[13.5vw] font-medium leading-[0.98] tracking-[-0.02em] text-white sm:text-7xl md:text-8xl">
          {words.map((w, i) => (
            <span key={i} className="inline-block overflow-hidden pb-1 align-bottom">
              <motion.span
                className={`inline-block ${w === "Paradise" ? "italic text-sun" : ""}`}
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.25 + i * 0.07, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                {w}
                {i < words.length - 1 ? "\u00A0" : ""}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-xl text-base font-medium leading-relaxed text-white/90 sm:text-lg"
        >
          {`A cozy tropical hideaway where you're a guest, not a room number. `}
          <span className="font-hand text-xl text-sun sm:text-2xl">
            — welcome home to the islands.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-9 flex flex-wrap items-center gap-3.5"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-coral px-7 py-4 text-sm font-extrabold tracking-wide text-white shadow-[0_18px_40px_-12px_rgba(232,80,60,0.8)] transition-all hover:-translate-y-0.5 hover:bg-coraldeep"
          >
            Plan Your Stay
            <ArrowUpRight className="size-4.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-full bg-white/12 px-7 py-4 text-sm font-extrabold tracking-wide text-white ring-1 ring-white/30 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white/20"
          >
            Discover the Getaway
            <ArrowDown className="size-4.5" />
          </a>
        </motion.div>

        {/* Rotating badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-24 right-5 hidden md:block lg:right-10"
        >
          <div className="relative grid size-32 place-items-center lg:size-40">
            <svg viewBox="0 0 100 100" className="absolute inset-0 animate-spin-slower">
              <defs>
                <path id="circ" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
              </defs>
              <text className="fill-white text-[8.2px] font-bold uppercase tracking-[0.24em]">
                <textPath href="#circ">
                  Lil Paradise Getaway · Nassau · Bahamas ·
                </textPath>
              </text>
            </svg>
            <span className="grid size-14 place-items-center rounded-full bg-sun text-ink lg:size-16">
              <Palmtree className="size-6 lg:size-7" strokeWidth={2.2} />
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom curve into next band */}
      <div className="absolute -bottom-px left-0 right-0 z-10 text-cream">
        <svg viewBox="0 0 1440 72" preserveAspectRatio="none" className="block h-12 w-full sm:h-16">
          <path
            d="M0 72 C 240 8 480 8 720 36 C 960 64 1200 64 1440 20 L1440 72 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
