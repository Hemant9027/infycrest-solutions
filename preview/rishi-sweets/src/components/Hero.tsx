import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ChevronDown, MapPin, Star } from "lucide-react";
import { IMG, site } from "../data/site";
import { CtaButton, Particles } from "./ui";
import { useFinePointer, useOpenStatus } from "../hooks/useFx";

const EASE = [0.22, 1, 0.36, 1] as const;

function Float({
  x,
  y,
  className,
  children,
}: {
  x: MotionValue<number>;
  y: MotionValue<number>;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div className={className} style={{ x, y }}>
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const fine = useFinePointer();
  const reduce = useReducedMotion();
  const interactive = fine && !reduce;
  const isOpen = useOpenStatus();

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 55, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 55, damping: 18, mass: 0.6 });

  // per-layer parallax factors (px)
  const f = (m: MotionValue<number>, k: number) => useTransform(m, (v) => v * k);
  const glowX = f(sx, 46), glowY = f(sy, 34);
  const mainX = f(sx, 16), mainY = f(sy, 12);
  const cardAX = f(sx, -30), cardAY = f(sy, -22);
  const cardBX = f(sx, -42), cardBY = f(sy, 30);
  const badgeX = f(sx, -20), badgeY = f(sy, -14);
  const partX = f(sx, 60), partY = f(sy, 44);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const compY = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const compScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const compOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.15]);
  const txtY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const txtOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      onPointerMove={(e) => {
        if (!interactive) return;
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        mx.set(((e.clientX - r.left) / r.width - 0.5) * 2);
        my.set(((e.clientY - r.top) / r.height - 0.5) * 2);
      }}
      onPointerLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      className="arch-bg relative flex min-h-[100svh] items-center overflow-hidden bg-ivory-100 pt-28 pb-16 lg:pt-24 lg:pb-0"
    >
      {/* ambient light */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(217,116,30,0.16),transparent_65%)] blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-20%] left-[-8%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(138,30,51,0.10),transparent_65%)] blur-2xl"
      />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-6">
        {/* --------------------------- copy --------------------------- */}
        <motion.div style={{ y: txtY, opacity: txtOpacity }} className="lg:col-span-6 lg:pr-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-ivory-50/80 px-4 py-2 backdrop-blur"
          >
            <MapPin size={13} className="text-maroon-700" />
            <span className="text-[10.5px] font-bold tracking-[0.28em] text-ink-700 uppercase">
              Serving Muzaffarnagar since 2017
            </span>
          </motion.div>

          <h1 className="mt-7 font-display text-[2.85rem] leading-[1.02] font-semibold text-balance text-ink-900 sm:text-6xl lg:text-[4.2rem] xl:text-[4.9rem]">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 44 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.28, ease: EASE }}
            >
              Good Food.
            </motion.span>
            <motion.span
              className="gold-grad-text block italic"
              initial={{ opacity: 0, y: 44 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.42, ease: EASE }}
            >
              Traditional Flavours.
            </motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 44 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.56, ease: EASE }}
            >
              Something for Everyone.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: EASE }}
            className="mt-6 max-w-lg text-[15px] leading-relaxed text-ink-500 md:text-lg"
          >
            From Indian meals and biryani to sweets, bakery favourites and treats for every
            occasion — Rishi Sweets brings together a wide variety of flavours under one roof,
            right by Prakash Chowk.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.82, ease: EASE }}
            className="mt-9 flex flex-wrap items-center gap-3.5"
          >
            <CtaButton href="#menu" variant="primary">
              Explore Menu <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </CtaButton>
            <CtaButton href={site.googleMapsUrl} external variant="outline">
              <MapPin size={15} /> Get Directions
            </CtaButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.95, ease: EASE }}
            className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3"
          >
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-maroon-800 text-ivory-50">
                <Star size={15} className="fill-gold-300 text-gold-300" />
              </span>
              <div className="leading-tight">
                <p className="font-display text-xl font-bold text-ink-900">{site.rating.toFixed(1)}</p>
                <p className="text-[10px] font-bold tracking-[0.18em] text-ink-500 uppercase">Rating</p>
              </div>
            </div>
            <span className="hidden h-9 w-px bg-ink-900/10 sm:block" />
            <div className="leading-tight">
              <p className="font-display text-xl font-bold text-ink-900">{site.ratingLabel}</p>
              <p className="text-[10px] font-bold tracking-[0.18em] text-ink-500 uppercase">Customer Ratings</p>
            </div>
            <span className="hidden h-9 w-px bg-ink-900/10 sm:block" />
            <div className="leading-tight">
              <p className="font-display text-xl font-bold text-ink-900">{site.established}</p>
              <p className="text-[10px] font-bold tracking-[0.18em] text-ink-500 uppercase">Established</p>
            </div>
            <span className="hidden h-9 w-px bg-ink-900/10 sm:block" />
            <div className="leading-tight">
              <p className="inline-flex items-center gap-1.5 text-[12px] font-bold text-green-800">
                <span className={`h-2 w-2 rounded-full ${isOpen ? "bg-green-600" : "bg-maroon-600"}`} />
                {isOpen ? "Open now" : "Currently closed"}
              </p>
              <p className="text-[10px] font-bold tracking-[0.18em] text-ink-500 uppercase">
                {site.hours.open} – {site.hours.close}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ----------------------- 3D composition ---------------------- */}
        <motion.div
          style={{ y: compY, scale: compScale, opacity: compOpacity }}
          className="relative mx-auto w-full max-w-[32rem] lg:col-span-6 lg:max-w-none"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.35, ease: EASE }}
            className="relative"
            style={{ perspective: 1200 }}
          >
            {/* saffron glow */}
            <Float x={glowX} y={glowY} className="absolute -inset-10 -z-10">
              <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_60%_40%,rgba(232,137,47,0.32),rgba(176,138,69,0.12)_45%,transparent_70%)] blur-2xl" />
            </Float>

            {/* particle field (deepest layer) */}
            <Float x={partX} y={partY} className="absolute -inset-12 -z-10">
              <Particles count={16} />
            </Float>

            {/* main plate */}
            <Float x={mainX} y={mainY} className="relative z-10">
              <div className="relative ml-auto w-[86%] rotate-[2.5deg] rounded-[2.2rem] border border-gold-400/40 bg-ivory-50 p-2.5 depth-shadow md:w-[78%]">
                <div className="img-vignette relative overflow-hidden rounded-[1.8rem]">
                  <img
                    src={IMG.heroSpread}
                    alt="A festive spread at Rishi Sweets — biryani, curries, breads and sweets"
                    className="aspect-[4/4.4] w-full object-cover sm:aspect-[4/3.6] lg:aspect-[4/4.2]"
                    loading="eager"
                    decoding="async"
                  />
                </div>
                <div className="absolute inset-x-0 -bottom-5 mx-auto w-max rounded-full border border-gold-500/30 bg-ivory-50/95 px-5 py-2.5 text-center shadow-lg backdrop-blur">
                  <p className="font-display text-sm font-semibold text-ink-900 italic">
                    “One address. Every craving.”
                  </p>
                </div>
              </div>
            </Float>

            {/* floating sweets card */}
            <Float x={cardAX} y={cardAY} className="absolute top-6 -left-1 z-20 sm:left-0">
              <motion.div
                initial={{ opacity: 0, y: 30, rotate: -10 }}
                animate={{ opacity: 1, y: 0, rotate: -6 }}
                transition={{ duration: 1, delay: 0.85, ease: EASE }}
                className="w-32 rounded-2xl border border-gold-400/35 bg-ivory-50/95 p-2 shadow-[0_18px_40px_-14px_rgba(51,8,15,0.45)] backdrop-blur sm:w-40"
              >
                <img
                  src={IMG.sweets}
                  alt="Assorted mithai"
                  className="aspect-[4/3] w-full rounded-xl object-cover"
                  loading="eager"
                  decoding="async"
                />
                <p className="px-1 pt-2 pb-1 text-[10px] font-bold tracking-[0.18em] text-maroon-800 uppercase">
                  Fresh Mithai Daily
                </p>
              </motion.div>
            </Float>

            {/* floating biryani card */}
            <Float x={cardBX} y={cardBY} className="absolute -bottom-4 right-0 z-20 sm:-right-2">
              <motion.div
                initial={{ opacity: 0, y: 30, rotate: 9 }}
                animate={{ opacity: 1, y: 0, rotate: 5 }}
                transition={{ duration: 1, delay: 1, ease: EASE }}
                className="w-36 rounded-2xl border border-gold-400/35 bg-ivory-50/95 p-2 shadow-[0_18px_40px_-14px_rgba(51,8,15,0.45)] backdrop-blur sm:w-44"
              >
                <img
                  src={IMG.biryani}
                  alt="Dum biryani in a copper handi"
                  className="aspect-[4/3] w-full rounded-xl object-cover"
                  loading="eager"
                  decoding="async"
                />
                <p className="px-1 pt-2 pb-1 text-[10px] font-bold tracking-[0.18em] text-maroon-800 uppercase">
                  Dum Biryani
                </p>
              </motion.div>
            </Float>

            {/* rating badge */}
            <Float x={badgeX} y={badgeY} className="absolute top-10 right-2 z-30 sm:right-0">
              <motion.div
                initial={{ opacity: 0, y: -18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 1.15, ease: EASE }}
                className="flex items-center gap-2 rounded-full border border-gold-500/35 bg-ink-900/92 px-4 py-2.5 text-ivory-50 shadow-xl backdrop-blur"
              >
                <Star size={14} className="fill-gold-400 text-gold-400" />
                <span className="text-[13px] font-bold">{site.rating.toFixed(1)}</span>
                <span className="text-[10px] font-semibold tracking-wider text-ivory-200/70 uppercase">
                  {site.ratingLabel} ratings
                </span>
              </motion.div>
            </Float>

            {/* rotating seal */}
            <div className="absolute -bottom-8 left-2 z-30 hidden sm:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 1.25, ease: EASE }}
                className="relative grid h-24 w-24 place-items-center rounded-full bg-maroon-800 text-gold-200 shadow-[0_18px_40px_-14px_rgba(51,8,15,0.55)]"
              >
                <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-[spin_16s_linear_infinite]">
                  <defs>
                    <path id="sealCircle" d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" />
                  </defs>
                  <text className="fill-gold-300" style={{ fontSize: 10.5, letterSpacing: 2.6, fontWeight: 700 }}>
                    <textPath href="#sealCircle">SINCE 2017 • RISHI SWEETS •</textPath>
                  </text>
                </svg>
                <span className="font-display text-xl font-bold text-gold-300">रि</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.a
        href="#stats"
        aria-label="Scroll to explore"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-ink-500 transition-colors hover:text-maroon-700 lg:flex"
      >
        <span className="text-[9px] font-bold tracking-[0.4em] uppercase">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
