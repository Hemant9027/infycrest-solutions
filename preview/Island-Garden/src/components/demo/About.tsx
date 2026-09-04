import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { HotelDemoConfig } from "@/demos/types";
import { SectionHeading } from "./heading";
import { Reveal } from "./motion";

export function About({ demo }: { demo: HotelDemoConfig }) {
  const { about } = demo;

  return (
    <section id="about" className="relative overflow-hidden py-24 md:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-8 -right-10 select-none font-display text-[20vw] leading-none font-semibold italic text-pine/[0.05]"
      >
        Gardens
      </div>

      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-14">
        <Reveal>
          <SectionHeading index="01" label={about.label} title={about.title} />
        </Reveal>

        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="font-display text-[1.65rem] leading-snug font-medium text-pine-deep md:text-[1.95rem]">
                {about.lead}
              </p>
              <p className="mt-6 font-display text-lg italic text-coral">{about.signature}</p>
            </Reveal>

            <Reveal delay={140}>
              <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-sandline">
                {about.stats.map((stat) => (
                  <div key={stat.label} className="bg-cream p-6 md:p-7">
                    <p className="font-display text-4xl font-medium text-ink md:text-5xl">{stat.value}</p>
                    <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.22em] text-ink-soft">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <div className="max-w-2xl space-y-5 leading-relaxed text-ink-soft md:text-[1.06rem]">
                {about.paragraphs.map((para, i) => (
                  <p
                    key={i}
                    className={
                      i === 0
                        ? "first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-[3.6rem] first-letter:leading-[0.85] first-letter:font-semibold first-letter:text-coral"
                        : ""
                    }
                  >
                    {para}
                  </p>
                ))}
              </div>
              <a
                href="#rooms"
                className="group mt-8 inline-flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.18em] text-pine transition-colors hover:text-coral"
              >
                <span className="u-link">See the rooms</span>
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Reveal>

            <div className="relative mt-16 md:mt-20">
              <Reveal delay={120}>
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[2rem] md:w-[86%]">
                  <Image
                    src={about.images[0].src}
                    alt={about.images[0].alt}
                    fill
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={260} className="absolute right-0 -bottom-8 hidden w-52 rotate-3 sm:block md:-bottom-10 md:w-64">
                <div className="relative aspect-[5/7] overflow-hidden rounded-2xl border-4 border-sand shadow-[0_28px_60px_-20px_rgba(13,28,22,0.45)]">
                  <Image
                    src={about.images[1].src}
                    alt={about.images[1].alt}
                    fill
                    sizes="(min-width: 768px) 16rem, 13rem"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
