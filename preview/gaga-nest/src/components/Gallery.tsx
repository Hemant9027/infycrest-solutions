"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Expand, X } from "lucide-react";
import { SectionHeading } from "./ui";
import { EASE, Reveal } from "./Reveal";

const PHOTOS = [
  { src: "/img/hero.jpg", caption: "The Nest at golden hour", tall: false },
  { src: "/img/room.jpg", caption: "One of the elegant rooms", tall: true },
  { src: "/img/flamingos.jpg", caption: "Flamingos on the flats", tall: false },
  { src: "/img/porch.jpg", caption: "The porch, at rest", tall: true },
  { src: "/img/suite-kitchen.jpg", caption: "The suite’s complete kitchen", tall: false },
  { src: "/img/saltpans.jpg", caption: "Inagua’s rose-pink salt pans", tall: false },
  { src: "/img/suite-living.jpg", caption: "The suite’s living room", tall: true },
  { src: "/img/donkey.jpg", caption: "A local, unbothered", tall: true },
  { src: "/img/garden.jpg", caption: "The garden path", tall: false },
  { src: "/img/coast.jpg", caption: "The wild southern shore", tall: true },
];

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setActive((a) =>
        a === null ? a : (a + dir + PHOTOS.length) % PHOTOS.length,
      ),
    [],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, close, step]);

  return (
    <section id="gallery" className="py-24 sm:py-32 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              index="05"
              label="Gallery"
              title={
                <>
                  Postcards from the{" "}
                  <em className="text-coral">nest</em>
                </>
              }
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:max-w-sm">
            <p className="text-[15px] leading-relaxed text-ink/65">
              A few frames from the guesthouse and the island beyond — tap any
              photograph to see it properly.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 columns-2 gap-4 [column-fill:balance] sm:gap-5 lg:columns-3">
          {PHOTOS.map((p, i) => (
            <Reveal key={p.src} delay={(i % 3) * 0.07} className="mb-4 break-inside-avoid sm:mb-5">
              <button
                onClick={() => setActive(i)}
                className={`group relative block w-full overflow-hidden rounded-2xl border border-ink/10 text-left ${
                  p.tall ? "aspect-[3/4]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={p.src}
                  alt={p.caption}
                  fill
                  sizes="(min-width: 1024px) 31vw, 46vw"
                  className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute bottom-3 left-4 right-4 flex items-center justify-between gap-2 text-[12px] font-semibold tracking-wide text-cream opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 translate-y-2">
                  {p.caption}
                  <Expand className="h-4 w-4 shrink-0" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[95] flex items-center justify-center bg-ink-deep/95 p-4 sm:p-10"
            onClick={close}
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-cream/10 text-cream backdrop-blur-sm transition-colors hover:bg-coral"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-cream/10 text-cream backdrop-blur-sm transition-colors hover:bg-coral sm:left-8"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-cream/10 text-cream backdrop-blur-sm transition-colors hover:bg-coral sm:right-8"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
            <motion.figure
              key={active}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="relative max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={PHOTOS[active].src}
                alt={PHOTOS[active].caption}
                className="max-h-[78vh] w-auto max-w-full rounded-2xl object-contain"
              />
              <figcaption className="mt-4 text-center font-display text-lg italic text-cream/85">
                {PHOTOS[active].caption}
                <span className="ml-3 text-sm not-italic text-cream/40">
                  {active + 1} / {PHOTOS.length}
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
