import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, BadgeInfo, ChevronLeft, ChevronRight, X } from "lucide-react";
import { galleryFilters, galleryItems, instaPosts, site, type GalleryCat } from "../data/site";
import { CtaButton, InstagramIcon, Reveal, SectionHead } from "./ui";
import { cn } from "../utils/cn";

/* ----------------------------- Lightbox ----------------------------- */

interface LbItem {
  img: string;
  caption: string;
  tag: string;
}

function Lightbox({
  items,
  index,
  setIndex,
  onClose,
  showInsta,
}: {
  items: LbItem[];
  index: number;
  setIndex: (i: number) => void;
  onClose: () => void;
  showInsta?: boolean;
}) {
  const item = items[index];
  const next = (d: number) => setIndex((index + d + items.length) % items.length);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next(1);
      if (e.key === "ArrowLeft") next(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, items.length, onClose]);

  if (!item) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[97] flex flex-col items-center justify-center p-4 sm:p-10"
      role="dialog"
      aria-modal="true"
      aria-label={`Gallery image: ${item.caption}`}
    >
      <motion.button
        aria-label="Close image viewer"
        className="absolute inset-0 bg-maroon-950/92 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 16 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex max-h-full w-full max-w-4xl flex-col"
      >
        <div className="mb-3 flex items-center justify-between text-ivory-100">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase">
            {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="grid h-11 w-11 place-items-center rounded-full border border-ivory-50/25 transition-colors hover:bg-ivory-50/10"
          >
            <X size={18} />
          </button>
        </div>

        <motion.div
          key={item.img + index}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          onDragEnd={(_, info) => {
            if (info.offset.x < -60) next(1);
            else if (info.offset.x > 60) next(-1);
          }}
          className="relative cursor-grab active:cursor-grabbing"
        >
          <img
            src={item.img}
            alt={item.caption}
            className="max-h-[68svh] w-full rounded-2xl object-contain"
            draggable={false}
          />
          <button
            type="button"
            aria-label="Previous image"
            onClick={() => next(-1)}
            className="absolute top-1/2 -left-2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-ivory-50/90 text-ink-900 shadow-lg transition-transform hover:scale-110 sm:-left-5"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={() => next(1)}
            className="absolute top-1/2 -right-2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-ivory-50/90 text-ink-900 shadow-lg transition-transform hover:scale-110 sm:-right-5"
          >
            <ChevronRight size={18} />
          </button>
        </motion.div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className="rounded-full bg-ivory-50/10 px-3 py-1 text-[9.5px] font-bold tracking-[0.2em] text-gold-300 uppercase">
              {item.tag}
            </span>
            <p className="mt-2 text-[13.5px] text-ivory-100/90">{item.caption}</p>
          </div>
          {showInsta && (
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.16em] text-gold-300 uppercase hover:underline"
            >
              <InstagramIcon size={13} /> View on Instagram
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* --------------------------- Instagram grid -------------------------- */

const INSTA_ASPECTS = ["aspect-[3/3.7]", "aspect-square", "aspect-[3/3.4]", "aspect-[4/5]"];

export function InstagramFeed() {
  const [lb, setLb] = useState<number | null>(null);
  const items: LbItem[] = instaPosts.map((p) => ({ img: p.img, caption: p.caption, tag: p.cat }));

  return (
    <section id="instagram" className="relative scroll-mt-24 bg-ivory-200/50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHead
            align="left"
            index="08"
            eyebrow={`Instagram · ${site.instagramHandle}`}
            title={
              <>
                Latest From <span className="gold-grad-text italic">Rishi Sweets</span>
              </>
            }
            sub="Fresh from the counter, the kitchen and the community — food, sweets, festivals and celebrations."
          />
          <Reveal delay={0.15}>
            <CtaButton href={site.instagramUrl} external variant="primary">
              <InstagramIcon size={15} /> Follow {site.instagramHandle}
            </CtaButton>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <p className="mt-7 flex w-fit items-center gap-2 rounded-full border border-gold-500/35 bg-ivory-50 px-4 py-2 text-[11px] font-semibold text-ink-700">
            <BadgeInfo size={13} className="shrink-0 text-gold-600" />
            Preview grid with placeholder images — live posts from {site.instagramHandle} connect at launch.
          </p>
        </Reveal>

        <Reveal delay={0.12} y={40}>
          <div className="mt-10 columns-2 gap-4 md:columns-3 xl:columns-4 [&>*]:mb-4">
            {instaPosts.map((p, i) => (
              <button
                type="button"
                key={p.id}
                onClick={() => setLb(i)}
                data-cursor
                aria-label={`Open post: ${p.caption}`}
                className="group relative block w-full overflow-hidden rounded-2xl break-inside-avoid focus-visible:outline-gold-500"
              >
                <img
                  src={p.img}
                  alt={p.caption}
                  loading="lazy"
                  decoding="async"
                  className={cn("w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]", INSTA_ASPECTS[i % INSTA_ASPECTS.length])}
                />
                <span
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-maroon-950/85 via-transparent to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100"
                />
                <span className="absolute right-3 top-3 grid h-9 w-9 translate-y-1 place-items-center rounded-full bg-ivory-50/90 text-maroon-800 opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                  <InstagramIcon size={15} />
                </span>
                <span className="absolute inset-x-0 bottom-0 translate-y-2 p-4 text-left opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="text-[9px] font-bold tracking-[0.22em] text-gold-300 uppercase">{p.cat}</span>
                  <span className="mt-1 line-clamp-2 block text-[12px] leading-snug text-ivory-100">{p.caption}</span>
                </span>
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      <AnimatePresence>
        {lb !== null && (
          <Lightbox items={items} index={lb} setIndex={setLb} onClose={() => setLb(null)} showInsta />
        )}
      </AnimatePresence>
    </section>
  );
}

/* ------------------------------ Gallery ------------------------------ */

export function GallerySection() {
  const [filter, setFilter] = useState<"all" | GalleryCat>("all");
  const [lb, setLb] = useState<number | null>(null);

  const filtered = useMemo(
    () => (filter === "all" ? galleryItems : galleryItems.filter((g) => g.cat === filter)),
    [filter]
  );
  const items: LbItem[] = filtered.map((g) => ({ img: g.img, caption: g.caption, tag: g.cat }));

  return (
    <section id="gallery" className="relative scroll-mt-24 overflow-hidden py-24 md:py-32">
      <div className="arch-bg pointer-events-none absolute inset-x-0 top-0 h-72 opacity-70" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          index="09"
          eyebrow="The Gallery"
          title={
            <>
              A Feast for the <span className="gold-grad-text italic">Eyes First</span>
            </>
          }
          sub="Food, sweets, the dining floor and the bakery case — photographed the way they arrive at the table."
        />

        <Reveal delay={0.12}>
          <div className="no-scrollbar mt-11 flex justify-start gap-2 overflow-x-auto pb-1 sm:justify-center">
            {galleryFilters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                aria-pressed={filter === f.id}
                className={cn(
                  "shrink-0 rounded-full border px-5 py-2.5 text-[11px] font-bold tracking-[0.14em] uppercase transition-all",
                  filter === f.id
                    ? "border-maroon-800 bg-maroon-800 text-ivory-50"
                    : "border-ink-900/12 bg-ivory-50 text-ink-700 hover:border-maroon-700 hover:text-maroon-700"
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div layout className="mt-10 columns-2 gap-4 md:columns-3 [&>*]:mb-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((g, i) => (
              <motion.button
                layout
                type="button"
                key={g.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setLb(i)}
                data-cursor
                aria-label={`Open photo: ${g.caption}`}
                className="group relative block w-full overflow-hidden rounded-2xl break-inside-avoid focus-visible:outline-gold-500"
              >
                <img
                  src={g.img}
                  alt={g.caption}
                  loading="lazy"
                  decoding="async"
                  className={cn(
                    "w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]",
                    g.tall ? "aspect-[3/3.9]" : "aspect-[4/3]"
                  )}
                />
                <span
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-maroon-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100"
                />
                <span className="absolute inset-x-0 bottom-0 flex translate-y-2 items-center justify-between gap-2 p-4 text-left opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="text-[12px] font-semibold text-ivory-100">{g.caption}</span>
                  <ArrowUpRight size={15} className="shrink-0 text-gold-300" />
                </span>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        <p className="mt-8 text-center text-[11px] tracking-wide text-ink-500">
          Photography shown is representative — replaced with real Rishi Sweets photographs as they
          are supplied. Follow{" "}
          <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-maroon-700 underline decoration-gold-400 underline-offset-2">
            {site.instagramHandle}
          </a>{" "}
          for the latest.
        </p>
      </div>

      <AnimatePresence>
        {lb !== null && (
          <Lightbox items={items} index={lb} setIndex={setLb} onClose={() => setLb(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
