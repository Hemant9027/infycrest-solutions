"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "./Reveal";
import { galleryItems } from "@/data/gallery";
import SectionHeading from "./SectionHeading";

export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const [dir, setDir] = useState(0);
  const touchX = useRef<number | null>(null);

  const count = galleryItems.length;

  const next = useCallback(() => {
    setDir(1);
    setIndex((i) => (i === null ? i : (i + 1) % count));
  }, [count]);
  const prev = useCallback(() => {
    setDir(-1);
    setIndex((i) => (i === null ? i : (i - 1 + count) % count));
  }, [count]);

  // Keyboard + body scroll lock
  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, next, prev]);

  const onTouchStart = (e: React.TouchEvent) => (touchX.current = e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(delta) > 50) (delta < 0 ? next : prev)();
    touchX.current = null;
  };

  return (
    <section id="gallery" className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-shell px-5 sm:px-8">
        <SectionHeading
          eyebrow="The gallery"
          title="A feast for the eyes"
          subheading="From golden dishes to the warm glow of the dining room — a glimpse of the evening in store."
          align="center"
          accentIndex={-1}
        />

        <div className="mt-14 columns-2 lg:columns-3 gap-4 [&>*]:mb-4">
          {galleryItems.map((item, i) => (
            <Reveal key={item.src + i} delay={0.03 * (i % 3)}>
              <button
                onClick={() => {
                  setDir(0);
                  setIndex(i);
                }}
                className="group relative block w-full break-inside-avoid overflow-hidden rounded-sm border border-ivory/5 text-left"
                aria-label={`View image: ${item.label}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className={`media-object w-full ${item.tall ? "aspect-[3/4]" : item.wide ? "aspect-[4/3]" : "aspect-[4/3]"}`}
                />
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-colors duration-500 flex items-end p-5 opacity-0 group-hover:opacity-100">
                  <span className="eyebrow text-[10px] text-gold">View</span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {index !== null && (
          <motion.div
            className="fixed inset-0 z-[80] bg-black/95 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <button
              onClick={() => setIndex(null)}
              aria-label="Close"
              className="absolute top-5 right-5 text-ivory/70 hover:text-ivory p-2"
            >
              <X className="h-7 w-7" />
            </button>
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-3 sm:left-6 text-ivory/70 hover:text-ivory p-2"
            >
              <ChevronLeft className="h-9 w-9" />
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-3 sm:right-6 text-ivory/70 hover:text-ivory p-2"
            >
              <ChevronRight className="h-9 w-9" />
            </button>

            <motion.figure
              key={index}
              initial={{ opacity: 0, x: dir * 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-5xl w-full"
            >
              <img
                src={galleryItems[index].src}
                alt={galleryItems[index].alt}
                className="w-full max-h-[78vh] object-contain rounded-sm"
              />
              <figcaption className="mt-4 text-center eyebrow text-[11px] text-stonewarm">
                {galleryItems[index].label} · {index + 1} / {count}
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
