import { motion, useScroll, useTransform } from "framer-motion";
import { Anchor, Fish, Music, type LucideIcon } from "lucide-react";
import { useRef } from "react";
import { Eyebrow, Reveal } from "./Reveal";
import { IMG } from "../data/site";

const ICONS: LucideIcon[] = [Fish, Anchor, Music];
const NUMBER_WORDS = ["one", "two", "three"];

function ParallaxImg({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  return (
    <div ref={ref} className="group relative overflow-hidden rounded-[2.2rem] shadow-[0_30px_60px_-30px_rgba(11,58,56,0.5)]">
      <motion.img
        style={{ y }}
        src={src}
        alt={alt}
        loading="lazy"
        className="aspect-[4/3.2] w-full scale-115 object-cover"
      />
      <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/10" />
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-24 overflow-hidden bg-cream px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow>The Bahamian Experience</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.4rem]">
              Nassau is outside.
              <br />
              <span className="italic text-lagoon">Go get salty.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-base leading-relaxed text-ink/70 sm:text-lg">
              Stay small, live large. From your little home base, the best of The
              Bahamas is waiting — and we'll happily point you toward our favourites.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 space-y-16 md:mt-24 md:space-y-24">
          {IMG.experience.map((item, i) => {
            const Icon = ICONS[i];
            const flip = i % 2 === 1;
            return (
              <div
                key={item.title}
                className="grid items-center gap-8 md:grid-cols-2 md:gap-14"
              >
                <Reveal className={flip ? "md:order-2" : ""}>
                  <ParallaxImg src={item.src} alt={item.alt} />
                </Reveal>
                <div className={flip ? "md:order-1" : ""}>
                  <Reveal delay={0.1}>
                    <span className="font-hand text-4xl font-semibold italic text-coral">
                      {NUMBER_WORDS[i]}.
                    </span>
                    <div className="mt-3 flex items-center gap-3">
                      <span className="grid size-12 place-items-center rounded-2xl bg-deep text-cream">
                        <Icon className="size-5.5" strokeWidth={2} />
                      </span>
                      <h3 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-5 max-w-md text-base leading-relaxed text-ink/70">
                      {item.body}
                    </p>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-20 text-center font-hand text-3xl font-semibold text-lagoon sm:text-4xl">
            …and a hundred little moments in between.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
