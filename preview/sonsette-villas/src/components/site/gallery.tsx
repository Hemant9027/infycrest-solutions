"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { ease } from "./motion";
import { Italic, SectionHeading } from "./section-heading";

const IMAGES = [
  { src: "/images/hero.jpg", caption: "The shoreline at golden hour" },
  { src: "/images/villa-exterior.jpg", caption: "Caribbean-style, among the palms" },
  { src: "/images/villa-bedroom.jpg", caption: "The one-bedroom villa" },
  { src: "/images/ocean-view.jpg", caption: "Fifty-five feet to the Atlantic" },
  { src: "/images/villa-bedroom-two.jpg", caption: "Two singles, softly kept" },
  { src: "/images/island-life.jpg", caption: "Beach days, entirely yours" },
  { src: "/images/villa-living.jpg", caption: "Living, dining & kitchenette" },
  { src: "/images/island-aerial.jpg", caption: "Crooked Island from above" },
  { src: "/images/gallery-sunset.jpg", caption: "Sundown on the sand" },
  { src: "/images/gallery-palms.jpg", caption: "Under the palm canopy" },
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setActive((current) =>
        current === null
          ? null
          : (current + dir + IMAGES.length) % IMAGES.length,
      ),
    [],
  );

  useEffect(() => {
    if (active === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, step]);

  return (
    <section id="gallery" className="relative py-24 md:py-36">
      <div className="mx-auto w-full max-w-[90rem] px-5 md:px-10">
        <SectionHeading
          index="06"
          eyebrow="Gallery"
          title={
            <>
              Postcards from
              <br />
              <Italic>Sonsette</Italic>
            </>
          }
          description="A little light, a lot of water, and nowhere particular to be."
        />

        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 md:mt-20">
          {IMAGES.map((image, i) => (
            <motion.button
              key={image.src + i}
              type="button"
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.08, ease }}
              className="group relative mb-5 block w-full cursor-zoom-in overflow-hidden rounded-[1.4rem] break-inside-avoid focus:outline-none focus-visible:ring-2 focus-visible:ring-lagoon-600"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.src}
                alt={image.caption}
                loading="lazy"
                className="w-full transition-transform duration-[1.4s] ease-out group-hover:scale-[1.05]"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-lagoon-950/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute right-4 bottom-4 left-4 flex items-center justify-between gap-3 text-left opacity-0 transition-all duration-500 group-hover:opacity-100">
                <span className="font-display text-lg italic text-sand-50">
                  {image.caption}
                </span>
                <Expand className="h-4 w-4 shrink-0 text-sand-50/80" />
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[120] flex items-center justify-center bg-lagoon-950/95 p-4 backdrop-blur-md md:p-10"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute top-5 right-5 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-sand-50/20 text-sand-50 transition-colors hover:bg-sand-50 hover:text-lagoon-950"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              aria-label="Previous image"
              className="absolute left-3 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-sand-50/20 text-sand-50 transition-colors hover:bg-sand-50 hover:text-lagoon-950 md:left-8"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label="Next image"
              className="absolute right-3 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-sand-50/20 text-sand-50 transition-colors hover:bg-sand-50 hover:text-lagoon-950 md:right-8"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <motion.figure
              key={active}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, ease }}
              className="flex max-h-full flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMAGES[active].src}
                alt={IMAGES[active].caption}
                className="max-h-[78svh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
              />
              <figcaption className="mt-5 flex items-center gap-4 text-sand-100/80">
                <span className="text-[11px] font-semibold tracking-[0.3em] uppercase">
                  {String(active + 1).padStart(2, "0")} / {String(IMAGES.length).padStart(2, "0")}
                </span>
                <span className="h-px w-8 bg-sand-50/30" aria-hidden="true" />
                <span className="font-display text-lg italic text-sand-50">
                  {IMAGES[active].caption}
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
