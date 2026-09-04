import { motion, useScroll, useTransform } from "framer-motion";
import { HeartHandshake, Palmtree, Compass } from "lucide-react";
import { useRef } from "react";
import { Eyebrow, Reveal } from "./Reveal";
import { IMG } from "../data/site";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yMain = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const ySecond = useTransform(scrollYProgress, [0, 1], [80, -60]);

  return (
    <section id="about" ref={ref} className="relative scroll-mt-24 overflow-hidden bg-cream">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-24 sm:px-8 md:py-32 lg:grid-cols-2 lg:gap-20">
        {/* Collage */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <motion.div style={{ y: yMain }} className="relative z-10">
            <Reveal>
              <div className="overflow-hidden rounded-[2.5rem] rounded-tr-[5rem] shadow-[0_35px_70px_-30px_rgba(11,58,56,0.45)] ring-1 ring-ink/5">
                <img
                  src={IMG.aboutMain.src}
                  alt={IMG.aboutMain.alt}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </Reveal>
          </motion.div>

          <motion.div
            style={{ y: ySecond }}
            className="absolute -bottom-10 -right-3 z-20 w-[46%] sm:-right-8"
          >
            <Reveal delay={0.15}>
              <div className="overflow-hidden rounded-[2rem] border-[6px] border-cream shadow-[0_25px_50px_-20px_rgba(11,58,56,0.5)]">
                <img
                  src={IMG.aboutSecond.src}
                  alt={IMG.aboutSecond.alt}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </Reveal>
          </motion.div>

          {/* Handwritten annotation */}
          <Reveal delay={0.3} className="absolute -top-7 right-2 z-30 rotate-[-6deg]">
            <span className="flex items-center gap-1.5 font-hand text-2xl font-semibold text-coral sm:text-3xl">
              <svg width="30" height="26" viewBox="0 0 34 30" fill="none" aria-hidden>
                <path
                  d="M31 2C22 4 10 10 4 26M4 26l-2.5-7M4 26l6.5-3"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              your kind of place
            </span>
          </Reveal>

          <span className="absolute -left-6 top-1/2 z-0 hidden -translate-y-1/2 select-none font-display text-[10rem] italic leading-none text-lagoon/10 lg:block">
            lil
          </span>
        </div>

        {/* Copy */}
        <div>
          <Reveal>
            <Eyebrow>About Lil Paradise Getaway</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-display text-4xl font-medium leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
              Small on size,
              <br />
              <span className="italic text-lagoon">big on warmth.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 text-base leading-relaxed text-ink/75 sm:text-lg">
              Tucked away in Nassau, Lil Paradise Getaway is a cozy, independent place to
              stay — made for travelers who'd rather skip the mega-resort crowds and
              experience The Bahamas a little more personally.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/75 sm:text-lg">
              Here, hospitality isn't a desk you queue at. It's a real welcome, honest
              local tips, and a quiet little slice of the island to call your own while
              you explore.
            </p>
          </Reveal>

          <div className="mt-9 grid gap-4 sm:grid-cols-3">
            {[
              {
                icon: Palmtree,
                title: "Independent",
                body: "Small-scale and proudly one-of-a-kind — not a chain, not a crowd.",
              },
              {
                icon: HeartHandshake,
                title: "Personal",
                body: "You're hosted by people, not procedures. Every stay gets real care.",
              },
              {
                icon: Compass,
                title: "Local",
                body: "Insider tips on the beaches, bites and corners of Nassau worth your time.",
              },
            ].map((f, i) => (
              <Reveal key={f.title} delay={0.2 + i * 0.08} className="h-full">
                <div className="group h-full rounded-3xl border border-deep/10 bg-white/70 p-5 transition-all duration-500 hover:-translate-y-1.5 hover:border-aqua/40 hover:shadow-[0_20px_40px_-20px_rgba(18,137,127,0.4)]">
                  <span className="grid size-11 place-items-center rounded-2xl bg-foam text-deep transition-colors group-hover:bg-aqua group-hover:text-white">
                    <f.icon className="size-5" strokeWidth={2} />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold">{f.title}</h3>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink/65">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
