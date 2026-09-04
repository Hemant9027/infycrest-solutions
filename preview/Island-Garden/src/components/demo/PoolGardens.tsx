import Image from "next/image";
import type { HotelDemoConfig } from "@/demos/types";
import { SectionHeading } from "./heading";
import { Reveal } from "./motion";

export function PoolGardens({ demo }: { demo: HotelDemoConfig }) {
  const { pool } = demo;

  return (
    <section id="pool-gardens" className="relative overflow-hidden bg-pine-deep py-24 text-cream md:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-10 -left-8 select-none font-display text-[18vw] leading-none font-semibold italic text-cream/[0.04]"
      >
        Slow days
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-14">
        <Reveal>
          <SectionHeading index="04" label="Pool & tropical gardens" title={pool.title} tone="dark" className="md:mb-20" />
        </Reveal>

        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="font-display text-[1.65rem] leading-snug font-medium text-cream md:text-[1.95rem]">
                {pool.lead}
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-8 max-w-lg space-y-5 leading-relaxed text-cream/70 md:text-[1.02rem]">
                {pool.paragraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </Reveal>

            <div className="mt-12 space-y-0 border-t border-cream/15">
              {pool.points.map((point, i) => (
                <Reveal key={point.title} delay={i * 100}>
                  <div className="flex items-baseline gap-5 border-b border-cream/15 py-5">
                    <span className="font-display text-sm italic text-coral">0{i + 1}</span>
                    <div>
                      <h3 className="font-display text-xl font-medium">{point.title}</h3>
                      <p className="mt-1 text-sm text-cream/60">{point.blurb}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <div className="group relative aspect-[3/2] overflow-hidden rounded-[2rem]">
                <Image
                  src={pool.main.src}
                  alt={pool.main.alt}
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                />
              </div>
            </Reveal>
            <div className="mt-4 grid grid-cols-2 gap-4">
              {[pool.sideA, pool.sideB].map((side, i) => (
                <Reveal key={side.src} delay={200 + i * 120}>
                  <div className="group relative aspect-[16/10] overflow-hidden rounded-3xl">
                    <Image
                      src={side.src}
                      alt={side.alt}
                      fill
                      sizes="(min-width: 1024px) 28vw, 50vw"
                      className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
