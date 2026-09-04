/* eslint-disable @next/next/no-img-element */
"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Plus, X } from "lucide-react";
import type { GalleryItem } from "@/demos/types";
import { SectionHeading } from "./heading";
import { Reveal } from "./motion";

type GalleryProps = {
  title: string;
  intro: string;
  items: GalleryItem[];
};

export function Gallery({ title, intro, items }: GalleryProps) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: 1 | -1) => setActive((cur) => (cur === null ? cur : (cur + dir + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (active === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, step]);

  return (
    <section id="gallery" className="border-t border-sandline py-24 md:py-36">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-14">
        <Reveal>
          <SectionHeading index="06" label="Gallery" title={title} intro={intro} />
        </Reveal>

        <div className="columns-2 gap-4 md:columns-3">
          {items.map((item, i) => (
            <Reveal key={item.caption + i} delay={(i % 3) * 90} className="mb-4 break-inside-avoid">
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Open photo: ${item.caption}`}
                className="group relative block w-full cursor-pointer overflow-hidden rounded-2xl text-left"
              >
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pine-ink/70 via-transparent to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
                <span className="absolute right-4 top-4 grid size-9 place-items-center rounded-full bg-cream/90 text-ink opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <Plus size={16} />
                </span>
                <span className="absolute bottom-4 left-4 translate-y-2 text-[11px] font-bold uppercase tracking-[0.2em] text-cream opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                  {item.caption}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active !== null && items[active] ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Photo: ${items[active].caption}`}
          className="fixed inset-0 z-[100] flex flex-col bg-pine-ink/[0.97] backdrop-blur-sm"
          onClick={close}
        >
          <div className="flex items-center justify-between px-5 py-5 text-cream sm:px-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-cream/70">
              {String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")} — {items[active].caption}
            </p>
            <button
              type="button"
              onClick={close}
              aria-label="Close gallery"
              className="grid size-11 place-items-center rounded-full border border-cream/25 transition-colors hover:bg-cream/10"
            >
              <X size={18} />
            </button>
          </div>

          <div className="relative flex flex-1 items-center justify-center px-5 pb-8 sm:px-20" onClick={(e) => e.stopPropagation()}>
            <img
              src={items[active].src}
              alt={items[active].alt}
              className="max-h-[74vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
            />
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-cream/25 text-cream transition-colors hover:bg-cream/10 sm:left-6"
            >
              <ChevronLeft size={19} />
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-cream/25 text-cream transition-colors hover:bg-cream/10 sm:right-6"
            >
              <ChevronRight size={19} />
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
