"use client";

import { useEffect, useRef } from "react";
import { ArrowDown, MapPin } from "lucide-react";

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const fadeRef = useRef<HTMLDivElement>(null);

  // Silky rAF parallax on the backdrop + gentle content fade.
  useEffect(() => {
    let raf = 0;
    const update = () => {
      const sc = window.scrollY;
      if (bgRef.current) {
        const shift = Math.min(sc * 0.32, 320);
        const scale = 1.08 + Math.min(sc / 4200, 0.09);
        bgRef.current.style.transform = `translate3d(0, ${shift}px, 0) scale(${scale})`;
      }
      if (fadeRef.current) {
        fadeRef.current.style.opacity = String(
          Math.max(0, 1 - Math.max(0, sc - 40) / 620),
        );
      }
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="top" className="relative h-[100svh] min-h-[620px] overflow-hidden bg-deep">
      {/* Backdrop */}
      <div
        ref={bgRef}
        className="absolute inset-[-8%] will-change-transform"
        style={{
          backgroundImage: "url(/images/hero.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          transform: "scale(1.08)",
        }}
      />
      {/* Cinematic grade */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep/70 via-deep/15 to-deep/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-deep/45 via-transparent to-transparent" />

      {/* Content */}
      <div
        ref={fadeRef}
        className="relative z-10 mx-auto flex h-full max-w-[90rem] flex-col justify-end px-5 pb-24 sm:px-8 sm:pb-28 lg:px-12"
      >
        <p
          className="animate-rise mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] font-semibold uppercase tracking-[0.38em] text-seafoam sm:text-[11px]"
          style={{ animationDelay: "150ms" }}
        >
          <MapPin className="size-3.5 text-brass" strokeWidth={2} />
          Nathan&rsquo;s Lodge — A Fishing &amp; Island Lodge — The Bahamas
        </p>

        <h1 className="font-display font-light leading-[0.94] tracking-[-0.02em] text-shell">
          <span
            className="animate-rise block text-[clamp(3rem,9.5vw,8.75rem)]"
            style={{ animationDelay: "280ms" }}
          >
            Escape to
          </span>
          <span
            className="animate-rise block text-[clamp(3rem,9.5vw,8.75rem)] italic text-seafoam"
            style={{ animationDelay: "420ms" }}
          >
            South Andros
          </span>
        </h1>

        <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p
            className="animate-rise max-w-md text-base leading-relaxed text-shell/85 sm:text-lg"
            style={{ animationDelay: "560ms" }}
          >
            Slow island days, beautiful beaches and unforgettable Andros
            experiences.
          </p>

          <div
            className="animate-rise flex flex-wrap items-center gap-4"
            style={{ animationDelay: "700ms" }}
          >
            <a
              href="#contact"
              className="group rounded-full bg-shell px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.24em] text-deep transition-colors duration-300 hover:bg-brass"
            >
              Plan Your Stay
            </a>
            <a
              href="#contact"
              className="rounded-full border border-shell/40 px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.24em] text-shell backdrop-blur-sm transition-all duration-300 hover:border-shell hover:bg-shell/10"
            >
              Contact the Lodge
            </a>
          </div>
        </div>
      </div>

      {/* Bottom strip: coordinates + scroll cue */}
      <div className="absolute inset-x-0 bottom-0 z-10 border-t border-shell/15">
        <div className="mx-auto flex max-w-[90rem] items-center justify-between px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-shell/60 sm:px-8 lg:px-12">
          <span className="hidden sm:block">24.00° N — 77.75° W</span>
          <span className="sm:hidden">South Andros, Bahamas</span>
          <a
            href="#about"
            className="flex items-center gap-2 text-shell/80 transition-colors hover:text-shell"
          >
            <span>Scroll for island time</span>
            <ArrowDown className="size-3.5 animate-drift" strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </section>
  );
}
