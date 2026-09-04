import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, MapPin } from "lucide-react";
import { experienceSlides, site } from "../data/site";
import { SectionHead } from "./ui";

function SlideCard({
  s,
  i,
  total,
}: {
  s: (typeof experienceSlides)[number];
  i: number;
  total: number;
}) {
  return (
    <article
      className="group relative h-[62svh] w-[76vw] shrink-0 snap-center overflow-hidden rounded-[2rem] sm:w-[24rem] md:h-[66vh] lg:w-[30rem]"
      data-cursor
    >
      <img
        src={s.img}
        alt={s.title}
        loading={i < 2 ? "eager" : "lazy"}
        decoding="async"
        className="absolute inset-0 h-full w-full scale-[1.06] object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.12]"
      />
      <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-maroon-950/92 via-maroon-950/20 to-maroon-950/10" />
      <span className="absolute top-5 left-5 rounded-full bg-ivory-50/90 px-3.5 py-1.5 text-[9.5px] font-bold tracking-[0.22em] text-maroon-800 uppercase backdrop-blur">
        {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </span>
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
        <h3 className="font-display text-3xl font-semibold text-ivory-50">{s.title}</h3>
        <p className="mt-2 max-w-xs text-[13px] leading-relaxed text-ivory-200/85">{s.desc}</p>
      </div>
    </article>
  );
}

export default function Experience() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [dist, setDist] = useState(0);
  const [current, setCurrent] = useState(0);
  const total = experienceSlides.length;

  useEffect(() => {
    const measure = () => {
      const el = trackRef.current;
      if (el) setDist(Math.max(0, el.scrollWidth - window.innerWidth + 48));
    };
    measure();
    window.addEventListener("resize", measure);
    const t = setTimeout(measure, 600);
    return () => {
      window.removeEventListener("resize", measure);
      clearTimeout(t);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 26, mass: 0.4 });
  const x = useTransform(smooth, [0, 1], [0, -dist]);
  const imgDrift = useTransform(smooth, [0, 1], [0, -110]);
  const barScale = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setCurrent(Math.min(total, Math.max(1, Math.round(v * (total - 1)) + 1)));
  });

  /* Reduced-motion / simple fallback: native swipe strip */
  if (reduce) {
    return (
      <section id="experience" className="scroll-mt-24 bg-ivory-200/50 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHead
            align="left"
            index="05"
            eyebrow="The Experience"
            title={
              <>
                More Than Just a <span className="gold-grad-text italic">Quick Meal</span>
              </>
            }
          />
        </div>
        <div className="no-scrollbar mt-12 flex snap-x gap-5 overflow-x-auto px-5 sm:px-8">
          {experienceSlides.map((s, i) => (
            <SlideCard key={s.title} s={s} i={i} total={total} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative scroll-mt-24 bg-maroon-950"
      style={{ height: dist ? `${dist + window.innerHeight}px` : "260vh" }}
    >
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden">
        <div className="arch-bg-faint absolute inset-0" aria-hidden />
        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="flex items-end justify-between gap-6">
            <SectionHead
              align="left"
              dark
              index="05"
              eyebrow="The Experience"
              title={
                <>
                  More Than Just a <span className="gold-grad-text italic">Quick Meal</span>
                </>
              }
            />
            <p className="hidden pb-1 text-right text-[11px] font-bold tracking-[0.3em] text-ivory-200/60 uppercase md:block">
              {String(current).padStart(2, "0")} — {String(total).padStart(2, "0")}
            </p>
          </div>
        </div>

        <motion.div ref={trackRef} style={{ x }} className="relative mt-10 flex w-max items-stretch gap-6 pl-5 sm:pl-8 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))]">
          {experienceSlides.map((s, i) => (
            <div key={s.title} className={i % 2 === 1 ? "pt-8" : ""}>
              <SlideCard s={s} i={i} total={total} />
            </div>
          ))}
          {/* drifting gold wash for depth */}
          <motion.span
            aria-hidden
            style={{ x: imgDrift }}
            className="pointer-events-none absolute -top-16 right-0 -z-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(232,137,47,0.25),transparent_65%)] blur-3xl"
          />
          {/* end CTA card */}
          <div className="flex h-[62svh] w-[76vw] shrink-0 flex-col items-start justify-center rounded-[2rem] border border-gold-400/30 bg-ivory-50/[0.05] p-8 backdrop-blur-sm sm:w-[24rem] md:h-[66vh] lg:w-[30rem]">
            <p className="text-[10px] font-bold tracking-[0.3em] text-gold-300 uppercase">Visit us</p>
            <h3 className="mt-3 font-display text-3xl font-semibold text-ivory-50">
              The table is <span className="italic">set.</span>
            </h3>
            <p className="mt-3 text-[13.5px] leading-relaxed text-ivory-200/75">
              Open daily {site.hours.open} – {site.hours.close}, near Prakash Chowk. Walk in, call
              ahead, or message on WhatsApp.
            </p>
            <a
              href={site.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold-400 px-6 py-3 text-[11px] font-bold tracking-[0.16em] text-maroon-950 uppercase transition-all hover:brightness-105"
            >
              <MapPin size={14} /> Get Directions <ArrowRight size={13} />
            </a>
          </div>
        </motion.div>

        {/* progress */}
        <div className="relative mx-auto mt-10 w-full max-w-7xl px-5 sm:px-8">
          <div className="h-[3px] w-full overflow-hidden rounded-full bg-ivory-50/12">
            <motion.div style={{ scaleX: barScale }} className="h-full origin-left bg-gradient-to-r from-saffron-400 to-gold-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
