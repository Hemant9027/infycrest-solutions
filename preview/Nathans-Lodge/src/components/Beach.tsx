"use client";

import { useEffect, useRef } from "react";
import Reveal from "@/components/Reveal";

export default function Beach() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const wrap = wrapRef.current;
      const bg = bgRef.current;
      if (!wrap || !bg) return;
      const rect = wrap.getBoundingClientRect();
      const vh = window.innerHeight;
      if (rect.bottom < 0 || rect.top > vh) return;
      const progress = (vh - rect.top) / (vh + rect.height);
      bg.style.transform = `translate3d(0, ${(progress - 0.5) * 110}px, 0) scale(1.14)`;
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="beach" className="scroll-mt-24 bg-shell">
      <div
        ref={wrapRef}
        className="relative h-[72vh] min-h-[480px] overflow-hidden"
      >
        <div
          ref={bgRef}
          className="absolute inset-[-12%] will-change-transform"
          style={{
            backgroundImage: "url(/images/pier.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center 60%",
            transform: "scale(1.14)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep/45 via-transparent to-deep/55" />

        <div className="relative z-10 mx-auto flex h-full max-w-[90rem] flex-col justify-center px-5 sm:px-8 lg:px-12">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.38em] text-seafoam">
              05 — The Beach
            </p>
            <h2 className="mt-5 max-w-3xl font-display text-[clamp(2.4rem,6vw,5.25rem)] font-light leading-[1.02] tracking-[-0.015em] text-shell text-balance">
              Miles of shore,{" "}
              <em className="text-seafoam">mostly your own</em>
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-shell/85 sm:text-lg">
              Beautiful beaches, morning light and water so clear it looks
              painted. Walk it, swim it, or do nothing at all on it — the
              beach handles the rest.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#gallery"
                className="rounded-full border border-shell/45 px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.24em] text-shell backdrop-blur-sm transition-all duration-300 hover:border-shell hover:bg-shell/10"
              >
                See the Gallery
              </a>
            </div>
          </Reveal>
        </div>

        <span className="absolute bottom-5 right-5 z-10 text-[10px] uppercase tracking-[0.3em] text-shell/50 sm:right-10">
          The west side, an hour before lunch
        </span>
      </div>
    </section>
  );
}
