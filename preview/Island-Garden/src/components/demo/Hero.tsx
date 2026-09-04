import Image from "next/image";
import { Asterisk, Palmtree } from "lucide-react";
import type { HotelDemoConfig } from "@/demos/types";
import { BookingBar } from "./BookingBar";
import { Reveal } from "./motion";

type HeroProps = {
  demo: HotelDemoConfig;
};

export function Hero({ demo }: HeroProps) {
  const { hero } = demo;

  return (
    <>
      <header id="top" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-pine-ink text-cream">
        <div className="absolute inset-0 -z-10">
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            fill
            priority
            sizes="100vw"
            className="motion-safe:animate-kenburns object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pine-ink/95 via-pine-ink/30 to-pine-ink/45" />
          <div className="absolute inset-0 bg-gradient-to-r from-pine-ink/55 via-transparent to-transparent" />
        </div>

        <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-end px-5 pt-36 pb-36 sm:px-8 lg:px-14">
          <Reveal>
            <p className="mb-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.38em] text-cream/85">
              <span aria-hidden className="h-px w-10 bg-coral" />
              {hero.eyebrow}
            </p>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="font-display text-[clamp(3rem,8.4vw,7.4rem)] leading-[0.98] font-medium tracking-[-0.015em]">
              {hero.lines.map((line, i) => (
                <span key={i} className={`block ${line.italic ? "font-light italic" : ""}`}>
                  {line.text}
                </span>
              ))}
            </h1>
          </Reveal>

          <div className="mt-10 flex flex-wrap items-end justify-between gap-x-12 gap-y-8">
            <Reveal delay={240} className="max-w-xl">
              <p className="text-lg leading-relaxed text-cream/85">{hero.sub}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#book"
                  className="inline-flex items-center rounded-full bg-coral px-7 py-3.5 text-[12px] font-bold uppercase tracking-[0.18em] text-cream transition-colors duration-300 hover:bg-coral-deep"
                >
                  Book direct
                </a>
                <a
                  href="#rooms"
                  className="inline-flex items-center rounded-full border border-cream/40 px-7 py-3.5 text-[12px] font-bold uppercase tracking-[0.18em] text-cream transition-colors duration-300 hover:border-cream hover:bg-cream/10"
                >
                  Explore rooms
                </a>
              </div>
            </Reveal>

            <Reveal delay={360}>
              <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-bold uppercase tracking-[0.22em] text-cream/70">
                {hero.facts.map((fact) => (
                  <li key={fact} className="flex items-center gap-2">
                    <Asterisk size={14} className="text-coral" />
                    {fact}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        {/* Rotating badge */}
        <div aria-hidden className="absolute top-28 right-10 hidden size-32 xl:block 2xl:right-16">
          <div className="motion-safe:animate-spin-slower absolute inset-0">
            <svg viewBox="0 0 100 100" className="size-full fill-cream/80">
              <defs>
                <path id="hero-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
              </defs>
              <text fontSize="8" fontWeight={700} letterSpacing="2.6">
                <textPath href="#hero-circle">POOL · GARDENS · CABLE BEACH · WIFI ·&nbsp;</textPath>
              </text>
            </svg>
          </div>
          <div className="absolute inset-0 grid place-items-center text-coral">
            <Palmtree size={26} />
          </div>
        </div>
      </header>

      {/* Availability bar, overlapping the hero */}
      <div className="relative z-20 mx-auto -mt-24 mb-6 w-full max-w-6xl px-5 sm:px-8">
        <Reveal delay={150}>
          <BookingBar />
        </Reveal>
      </div>
    </>
  );
}
