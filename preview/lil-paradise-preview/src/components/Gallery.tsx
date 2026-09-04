import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { Camera } from "lucide-react";
import { useRef } from "react";
import { Eyebrow, Reveal } from "./Reveal";
import { IMG } from "../data/site";

function Column({
  items,
  y,
  offset = false,
}: {
  items: typeof IMG.gallery;
  y: MotionValue<number>;
  offset?: boolean;
}) {
  return (
    <motion.div style={{ y }} className={`flex flex-col gap-5 ${offset ? "md:pt-16" : ""}`}>
      {items.map((img, i) => (
        <figure
          key={img.alt}
          className={`group relative overflow-hidden shadow-[0_24px_50px_-28px_rgba(11,58,56,0.5)] ${
            i % 2 === 0 ? "rounded-[2rem]" : "rounded-[2rem] rounded-tr-[4.5rem]"
          }`}
        >
          <img
            src={img.src}
            alt={img.alt}
            loading="lazy"
            className="w-full object-cover transition-transform duration-700 group-hover:scale-106"
          />
          <figcaption className="absolute bottom-4 left-4 translate-y-2 rounded-full bg-cream/90 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-deep opacity-0 backdrop-blur transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            {img.caption}
          </figcaption>
        </figure>
      ))}
    </motion.div>
  );
}

export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [50, -70]);
  const y2 = useTransform(scrollYProgress, [0, 1], [90, -110]);
  const y3 = useTransform(scrollYProgress, [0, 1], [20, -40]);

  const g = IMG.gallery;
  return (
    <section
      id="gallery"
      ref={ref}
      className="relative scroll-mt-24 overflow-hidden bg-sand/60 px-5 py-24 sm:px-8 md:py-32"
    >
      <div className="dotwave pointer-events-none absolute left-10 top-12 h-24 w-44 text-coral/50" />
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <Eyebrow>Gallery</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 max-w-xl font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.4rem]">
                Postcards from
                <span className="italic text-coral"> the islands</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <p className="flex max-w-sm items-start gap-3 text-sm leading-relaxed text-ink/65">
              <Camera className="mt-0.5 size-5 shrink-0 text-lagoon" />
              Everyday scenes from in and around Nassau — the light, the water and the
              easy pace you'll settle into.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-3">
          <Column items={[g[0], g[3]]} y={y1} />
          <Column items={[g[1], g[4]]} y={y2} offset />
          <div className="hidden md:block">
            <Column items={[g[2], g[5]]} y={y3} />
          </div>
          {/* Mobile-only overflow images */}
          <div className="col-span-2 grid grid-cols-2 gap-5 md:hidden">
            {[g[2], g[5]].map((img) => (
              <figure key={img.alt} className="group relative overflow-hidden rounded-[2rem]">
                <img src={img.src} alt={img.alt} loading="lazy" className="w-full object-cover" />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
