"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { Reveal, SectionHeading } from "@/components/motion-primitives";
import { GALLERY } from "@/lib/site";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setActive((cur) => (cur === null ? cur : (cur + dir + GALLERY.length) % GALLERY.length)),
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

  return (
    <section id="gallery" className="relative scroll-mt-24 bg-lagoon-50 py-24 sm:py-32">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
        <SectionHeading
          align="center"
          eyebrow="Gallery"
          title={
            <>
              The colour you&apos;ll keep
              <br />
              dreaming about: <span className="italic text-lagoon-600">Exuma blue</span>.
            </>
          }
        />

        <Reveal delay={0.15}>
          <div className="mt-14 columns-2 gap-4 [column-fill:balance] md:columns-3 lg:columns-4">
            {GALLERY.map((item, i) => (
              <button
                key={item.label + i}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Open photo: ${item.label}`}
                className={`group relative mb-4 block w-full cursor-zoom-in overflow-hidden rounded-2xl bg-abyss-950/5 ${
                  item.tall ? "aspect-[3/4.2]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 23vw, (min-width: 768px) 31vw, 46vw"
                  placeholder="blur"
                  className="object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-abyss-950/0 transition-colors duration-300 group-hover:bg-abyss-950/25" />
                <span className="absolute right-3 bottom-3 grid size-8 translate-y-1 place-items-center rounded-full bg-sand-50/85 text-ink opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <Expand className="size-3.5" strokeWidth={2.2} />
                </span>
                <span className="absolute bottom-3 left-4 max-w-[70%] translate-y-1 truncate text-left text-[11px] font-semibold tracking-widest text-sand-50 uppercase opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-abyss-950/92 p-4 backdrop-blur-md sm:p-10"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={`Photo viewer: ${GALLERY[active].label}`}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close photo viewer"
              className="absolute top-5 right-5 z-10 grid size-11 place-items-center rounded-full bg-sand-50/10 text-sand-50 ring-1 ring-sand-50/25 transition-colors hover:bg-sand-50/20"
            >
              <X className="size-5" strokeWidth={2} />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              aria-label="Previous photo"
              className="absolute left-4 z-10 grid size-12 place-items-center rounded-full bg-sand-50/10 text-sand-50 ring-1 ring-sand-50/25 transition-colors hover:bg-sand-50/20 sm:left-8"
            >
              <ChevronLeft className="size-6" strokeWidth={2} />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label="Next photo"
              className="absolute right-4 z-10 grid size-12 place-items-center rounded-full bg-sand-50/10 text-sand-50 ring-1 ring-sand-50/25 transition-colors hover:bg-sand-50/20 sm:right-8"
            >
              <ChevronRight className="size-6" strokeWidth={2} />
            </button>

            <motion.figure
              key={active}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={GALLERY[active].image}
                alt={GALLERY[active].alt}
                placeholder="blur"
                className="max-h-[78vh] w-auto rounded-2xl object-contain shadow-2xl"
              />
              <figcaption className="mt-4 text-center">
                <span className="font-display text-lg text-sand-50 italic">{GALLERY[active].label}</span>
                <span className="ml-3 text-xs tracking-widest text-sand-50/50 uppercase">
                  {active + 1} / {GALLERY.length}
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
