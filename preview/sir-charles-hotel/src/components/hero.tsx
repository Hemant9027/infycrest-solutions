"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import ReserveButton from "./reserve-button";
import { IMG } from "@/lib/images";

export default function Hero() {
  const imgWrapRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = imgWrapRef.current;
    const content = contentRef.current;
    if (!wrap || !content) return;

    let ticking = false;
    const update = () => {
      ticking = false;
      const y = window.scrollY;
      const vh = window.innerHeight;
      if (y > vh * 1.25) return;
      wrap.style.transform = `translate3d(0, ${y * 0.28}px, 0)`;
      content.style.transform = `translate3d(0, ${y * 0.12}px, 0)`;
      content.style.opacity = String(Math.max(0, 1 - y / (vh * 0.85)));
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="top" className="grain relative flex min-h-svh flex-col overflow-hidden bg-ink" aria-label="Sir Charles Hotel — hero">
      <div ref={imgWrapRef} className="absolute inset-x-0 -top-[12%] h-[124%] will-change-transform">
        <Image
          src={IMG.hero.src}
          alt={IMG.hero.alt}
          fill
          priority
          sizes="100vw"
          className="animate-kenburns object-cover"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/20 to-ink/75" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/45 via-transparent to-transparent" />

      {/* coordinates — left edge */}
      <p className="absolute left-8 top-1/2 z-10 hidden origin-left -rotate-90 text-[10px] font-medium uppercase tracking-[0.5em] text-ivory/50 lg:block">
        25.04° N — 77.34° W
      </p>

      <div
        ref={contentRef}
        className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-end px-6 pb-24 pt-44 sm:px-10 sm:pb-20"
      >
        <p
          style={{ animationDelay: "150ms" }}
          className="anim-rise flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.4em] text-ivory/85"
        >
          <svg viewBox="0 0 10 10" aria-hidden className="size-2 text-goldlight">
            <rect x="1.9" y="1.9" width="6.2" height="6.2" transform="rotate(45 5 5)" fill="currentColor" />
          </svg>
          Sir Charles Hotel · Nassau, The Bahamas
        </p>

        <h1 className="mt-6 font-display font-light leading-[0.98] tracking-[-0.01em] text-ivory">
          <span style={{ animationDelay: "280ms" }} className="anim-rise block text-[clamp(2.9rem,8.2vw,7.8rem)]">
            Stay in Nassau.
          </span>
          <span style={{ animationDelay: "430ms" }} className="anim-rise block text-[clamp(2.9rem,8.2vw,7.8rem)] italic text-aqua">
            Experience The Bahamas.
          </span>
        </h1>

        <p style={{ animationDelay: "580ms" }} className="anim-rise mt-7 max-w-xl text-base leading-relaxed text-ivory/80 sm:text-lg">
          An independent boutique hotel where classic Bahamian hospitality meets modern ease — island
          light, sea air, and days that belong entirely to you.
        </p>

        <div style={{ animationDelay: "720ms" }} className="anim-rise mt-10 flex flex-wrap items-center gap-4">
          <ReserveButton variant="gold" size="lg" />
          <a
            href="#about"
            className="group inline-flex items-center gap-2.5 rounded-full border border-ivory/40 px-8 py-5 text-[13px] font-semibold uppercase tracking-[0.22em] text-ivory transition-all duration-500 hover:border-ivory hover:bg-ivory/10"
          >
            Explore the hotel
            <svg viewBox="0 0 16 16" aria-hidden className="size-3.5 transition-transform duration-500 group-hover:translate-y-0.5">
              <path d="M8 2v11M3.5 8.5 8 13l4.5-4.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-0 right-8 z-10 hidden flex-col items-center gap-3 pb-0 sm:flex">
        <span className="text-[10px] font-semibold uppercase tracking-[0.42em] text-ivory/60">Scroll</span>
        <span className="relative h-20 w-px overflow-hidden bg-ivory/15">
          <span className="animate-cue absolute inset-x-0 h-full bg-goldlight" />
        </span>
      </div>
    </section>
  );
}
