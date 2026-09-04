"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { Camera, ChevronLeft, ChevronRight, X } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import { GALLERY } from "@/data/site";

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setActive((cur) =>
        cur === null ? cur : (cur + dir + GALLERY.length) % GALLERY.length,
      ),
    [],
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

  const current = active === null ? null : GALLERY[active];

  return (
    <section id="gallery" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHead
          eyebrow="Gallery"
          title={
            <>
              Island moments,{" "}
              <span className="text-sea italic">Nassau &amp; New Providence</span>
            </>
          }
          sub="Scenes from around our island home — tap any photo to look closer."
        />

        <div className="mt-14 columns-2 gap-4 lg:columns-3 [column-fill:balance]">
          {GALLERY.map((item, i) => (
            <Reveal
              key={item.image}
              delay={(i % 3) * 90}
              className="mb-4 break-inside-avoid"
            >
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Open photo: ${item.alt}`}
                className="group relative block w-full cursor-pointer overflow-hidden rounded-3xl shadow-card transition-all duration-400 hover:-translate-y-1 hover:shadow-lift focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sea"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={1400}
                  height={1000}
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <span className="absolute inset-0 flex items-end bg-gradient-to-t from-sea-dusk/80 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="flex items-center gap-2 text-left text-sm font-bold text-white">
                    <Camera className="h-4 w-4 text-sun" aria-hidden />
                    {item.caption}
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <p className="mt-8 text-center font-display text-base text-ink-3 italic sm:text-lg">
            The view changes daily — the warm welcome doesn&rsquo;t.
          </p>
        </Reveal>
      </div>

      {/* Lightbox */}
      {current && active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          className="fixed inset-0 z-[80] flex flex-col items-center justify-center bg-sea-dusk/95 p-4 backdrop-blur-md"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close viewer"
            className="absolute top-5 right-5 grid h-12 w-12 cursor-pointer place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-coral"
          >
            <X className="h-6 w-6" aria-hidden />
          </button>

          <figure
            className="flex w-full max-w-4xl flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[72vh] w-full overflow-hidden rounded-3xl shadow-soft">
              <Image
                src={current.image}
                alt={current.alt}
                width={1600}
                height={1100}
                sizes="100vw"
                className="h-full max-h-[72vh] w-full object-cover"
                priority
              />
            </div>
            <figcaption className="text-center font-display text-lg text-sand italic">
              {current.caption}
              <span className="ml-3 text-xs font-sans font-bold tracking-widest text-sand/60 uppercase not-italic">
                {active + 1} / {GALLERY.length}
              </span>
            </figcaption>
          </figure>

          <div className="mt-2 flex gap-3">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              aria-label="Previous photo"
              className="grid h-12 w-12 cursor-pointer place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-sea"
            >
              <ChevronLeft className="h-6 w-6" aria-hidden />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label="Next photo"
              className="grid h-12 w-12 cursor-pointer place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-sea"
            >
              <ChevronRight className="h-6 w-6" aria-hidden />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
