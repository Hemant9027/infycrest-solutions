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
import { ArrowRight, Flame, MessageCircle } from "lucide-react";
import { IMG, menu, wa } from "../data/site";
import { CtaButton, Particles } from "./ui";
import { useFinePointer } from "../hooks/useFx";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Signature() {
  const ref = useRef<HTMLElement | null>(null);
  const fine = useFinePointer();
  const reduce = useReducedMotion();
  const interactive = fine && !reduce;

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 18 });
  const sy = useSpring(my, { stiffness: 50, damping: 18 });
  const use = (m: MotionValue<number>, k: number) => useTransform(m, (v) => v * k);
  const plateX = use(sx, 12), plateY = use(sy, 10);
  const sat1X = use(sx, -28), sat1Y = use(sy, -20);
  const sat2X = use(sx, -40), sat2Y = use(sy, 26);
  const sat3X = use(sx, 26), sat3Y = use(sy, -30);
  const glowX = use(sx, 40), glowY = use(sy, 28);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const plateRotate = useTransform(scrollYProgress, [0, 1], [-7, 7]);
  const sectionScale = useTransform(scrollYProgress, [0, 0.25, 0.9, 1], [0.965, 1, 1, 0.97]);
  const innerY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const picks = menu.filter((m) => m.popular).slice(0, 6);

  return (
    <section
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
      className="relative overflow-hidden bg-maroon-950 py-24 text-ivory-50 md:py-36"
    >
      <div className="arch-bg-faint absolute inset-0" aria-hidden />
      <div
        aria-hidden
        className="absolute -top-32 left-1/4 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(217,116,30,0.22),transparent_65%)] blur-3xl"
      />

      <motion.div style={{ scale: sectionScale }} className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* copy */}
          <motion.div style={{ y: innerY }}>
            <p className="mb-4 flex items-center gap-3 text-[11px] font-bold tracking-[0.32em] text-gold-300 uppercase">
              <span className="inline-block h-px w-8 bg-gold-400/60" /> A Taste of Rishi Sweets
            </p>
            <h2 className="font-display text-4xl leading-[1.05] font-semibold text-balance md:text-5xl lg:text-[3.6rem]">
              Popular <span className="gold-grad-text italic">Favourites</span>,
              <br />
              Plated in Depth.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ivory-200/75 md:text-base">
              The flavours public reviews return to again and again — fresh mithai from the halwai
              counter, masala dosa off the tawa, buttery pav bhaji and cold coffee crowned with
              ice cream.
            </p>
            <div className="mt-9 flex flex-wrap gap-3.5">
              <CtaButton href="#menu" variant="gold">
                View Menu <ArrowRight size={15} />
              </CtaButton>
              <CtaButton
                href={wa("Hi Rishi Sweets, I would like to enquire about your popular dishes.")}
                external
                variant="ghost"
              >
                <MessageCircle size={15} /> Enquire
              </CtaButton>
            </div>

            {/* reviewers' picks */}
            <div className="mt-12">
              <p className="mb-4 text-[10px] font-bold tracking-[0.3em] text-gold-300/80 uppercase">
                Mentioned in public reviews
              </p>
              <div className="no-scrollbar -mx-5 flex snap-x gap-3 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
                {picks.map((p) => (
                  <a
                    key={p.id}
                    href="#menu"
                    className="group flex w-40 shrink-0 snap-start items-center gap-3 rounded-2xl border border-ivory-50/12 bg-ivory-50/[0.06] p-2.5 backdrop-blur-sm transition-colors hover:border-gold-400/40 hover:bg-ivory-50/10 sm:w-auto"
                  >
                    <img
                      src={p.img}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="h-11 w-11 rounded-xl object-cover"
                    />
                    <span className="min-w-0">
                      <span className="block truncate text-[12.5px] font-bold text-ivory-50">{p.name}</span>
                      <span className="flex items-center gap-1 text-[9.5px] font-bold tracking-[0.14em] text-saffron-400 uppercase">
                        <Flame size={9} /> Reviewers' pick
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 2.5D composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1.2, ease: EASE }}
            className="relative mx-auto aspect-square w-full max-w-[30rem]"
            style={{ perspective: 1200 }}
          >
            <motion.div style={{ x: glowX, y: glowY }} className="absolute -inset-8" aria-hidden>
              <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_50%_45%,rgba(232,137,47,0.38),rgba(176,138,69,0.14)_50%,transparent_72%)] blur-2xl" />
            </motion.div>
            <Particles count={14} className="absolute -inset-6" />

            {/* main plate */}
            <motion.div
              style={{ x: plateX, y: plateY, rotate: plateRotate }}
              className="absolute inset-[13%] overflow-visible"
            >
              <div className="relative h-full w-full rounded-full border-[10px] border-ivory-50/95 shadow-[0_50px_100px_-30px_rgba(0,0,0,0.75)]">
                <div className="absolute -inset-[22px] rounded-full border border-gold-400/40" aria-hidden />
                <div className="absolute -inset-[30px] rounded-full border border-gold-400/15" aria-hidden />
                <img
                  src={IMG.sweets}
                  alt="Assorted mithai platter at Rishi Sweets"
                  className="h-full w-full rounded-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </motion.div>

            {/* satellites */}
            <motion.div style={{ x: sat1X, y: sat1Y }} className="absolute top-[2%] left-[2%] w-[30%]">
              <motion.div
                initial={{ opacity: 0, y: 26, rotate: -8 }}
                whileInView={{ opacity: 1, y: 0, rotate: -6 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.4, ease: EASE }}
                className="rounded-2xl border border-gold-400/30 bg-ivory-50 p-2 shadow-[0_24px_50px_-18px_rgba(0,0,0,0.7)]"
              >
                <img src={IMG.gulabJamun} alt="Gulab jamun" className="aspect-square w-full rounded-xl object-cover" loading="lazy" decoding="async" />
                <p className="px-1 pt-1.5 pb-0.5 text-[9px] font-bold tracking-[0.18em] text-maroon-800 uppercase">Gulab Jamun</p>
              </motion.div>
            </motion.div>

            <motion.div style={{ x: sat2X, y: sat2Y }} className="absolute right-[0%] bottom-[6%] w-[34%]">
              <motion.div
                initial={{ opacity: 0, y: 26, rotate: 8 }}
                whileInView={{ opacity: 1, y: 0, rotate: 5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.55, ease: EASE }}
                className="rounded-2xl border border-gold-400/30 bg-ivory-50 p-2 shadow-[0_24px_50px_-18px_rgba(0,0,0,0.7)]"
              >
                <img src={IMG.biryani} alt="Dum biryani" className="aspect-[4/3.4] w-full rounded-xl object-cover" loading="lazy" decoding="async" />
                <p className="px-1 pt-1.5 pb-0.5 text-[9px] font-bold tracking-[0.18em] text-maroon-800 uppercase">Dum Biryani</p>
              </motion.div>
            </motion.div>

            <motion.div style={{ x: sat3X, y: sat3Y }} className="absolute top-[10%] right-[4%] w-[22%]">
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.7, ease: EASE }}
                className="overflow-hidden rounded-full border-4 border-ivory-50 shadow-[0_24px_50px_-18px_rgba(0,0,0,0.7)]"
                title="Bakery & cakes"
              >
                <img src={IMG.cake} alt="Chocolate truffle cake" className="aspect-square w-full object-cover" loading="lazy" decoding="async" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
