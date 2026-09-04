"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { galleryImages } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const aspectBySpan = {
  tall: "aspect-[3/3.9]",
  wide: "aspect-[4/2.9]",
  regular: "aspect-square",
} as const;

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: 1 | -1) => setActive((cur) => (cur === null ? cur : (cur + dir + galleryImages.length) % galleryImages.length)),
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
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, step]);

  return (
    <section id="gallery" className="relative overflow-hidden py-24 sm:py-32">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            index="06"
            eyebrow="Gallery"
            title={
              <>
                Postcards from <em className="text-lagoon-600">the Garden</em>
              </>
            }
            description="Creeks at sunrise, golden flats, green garden paths — a few frames from life around Staniard Creek, North Andros."
          />
          <Reveal delay={0.2} className="hidden lg:block">
            <p className="max-w-[15rem] text-right text-[0.72rem] leading-relaxed tracking-[0.18em] text-pine-900/45 uppercase">
              Click any frame to view it full screen
            </p>
          </Reveal>
        </div>

        <div className="mt-14 [column-fill:_balance] columns-1 gap-5 sm:columns-2 lg:columns-3">
          {galleryImages.map((image, i) => (
            <Reveal key={image.src} delay={(i % 3) * 0.08} className="mb-5 break-inside-avoid">
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group relative block w-full cursor-pointer overflow-hidden rounded-[1.6rem] text-left shadow-card outline-none focus-visible:ring-4 focus-visible:ring-lagoon-500/40"
                aria-label={`Open image: ${image.caption}`}
              >
                <div className={cn("relative w-full overflow-hidden", aspectBySpan[image.span])}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-pine-950/75 via-pine-950/0 to-pine-950/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 flex translate-y-3 items-center justify-between p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="font-display text-lg font-light italic text-sand-50">{image.caption}</span>
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-sand-50/15 text-sand-50 backdrop-blur-sm">
                    <Expand className="size-4" strokeWidth={1.8} />
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[90] flex flex-col bg-pine-950/[0.97] p-4 backdrop-blur-md sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label="Image gallery"
            onClick={close}
          >
            <div className="flex items-center justify-between text-sand-50">
              <span className="text-[0.7rem] font-medium tracking-[0.3em] uppercase">
                {String(active + 1).padStart(2, "0")} / {String(galleryImages.length).padStart(2, "0")}
              </span>
              <button
                type="button"
                onClick={close}
                aria-label="Close gallery"
                className="grid size-11 place-items-center rounded-full border border-sand-50/20 transition-colors hover:bg-sand-50/10"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="relative flex min-h-0 flex-1 items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <motion.div
                key={galleryImages[active].src}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-full max-h-full w-full"
              >
                <Image
                  src={galleryImages[active].src}
                  alt={galleryImages[active].alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </motion.div>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                aria-label="Previous image"
                className="absolute left-1 grid size-11 place-items-center rounded-full border border-sand-50/20 text-sand-50 transition-colors hover:bg-sand-50/10 sm:left-3 sm:size-12"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                aria-label="Next image"
                className="absolute right-1 grid size-11 place-items-center rounded-full border border-sand-50/20 text-sand-50 transition-colors hover:bg-sand-50/10 sm:right-3 sm:size-12"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>

            <p className="pt-4 text-center font-display text-lg font-light italic text-sand-50/85 sm:text-xl">
              {galleryImages[active].caption}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
