import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { BadgeCheck, Flame, Leaf, MessageCircle, Search, X } from "lucide-react";
import {
  MENU_IS_SAMPLE,
  menu,
  menuCategories,
  site,
  wa,
  type MenuCatId,
  type MenuItem,
} from "../data/site";
import { Reveal, SectionHead, Tilt, VegMark } from "./ui";
import { cn } from "../utils/cn";

type CatFilter = MenuCatId | "all";

function MenuCard({ item, onOpen }: { item: MenuItem; onOpen: (m: MenuItem) => void }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 26, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <Tilt max={6} className="h-full">
        <article
          className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-ink-900/8 bg-ivory-50 shadow-[0_10px_30px_-18px_rgba(51,8,15,0.35)] transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-500/40 hover:shadow-[0_26px_50px_-20px_rgba(51,8,15,0.4)]"
          onClick={() => onOpen(item)}
          data-cursor
        >
          <div className="relative overflow-hidden">
            <img
              src={item.img}
              alt={item.name}
              loading="lazy"
              decoding="async"
              className="aspect-[15/10] w-full object-cover transition-transform duration-[1.1s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]"
            />
            {item.popular && (
              <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-saffron-500/95 px-3 py-1.5 text-[9px] font-bold tracking-[0.18em] text-ivory-50 uppercase shadow">
                <Flame size={11} /> Reviewers' pick
              </span>
            )}
            <span className="absolute right-3 bottom-3 rounded-full bg-ink-900/80 px-3 py-1 text-[9px] font-bold tracking-[0.16em] text-ivory-100 uppercase backdrop-blur">
              Quick view
            </span>
          </div>
          <div className="flex flex-1 flex-col p-5">
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-display text-lg leading-snug font-semibold text-ink-900">{item.name}</h3>
              {item.veg !== null && <VegMark veg={item.veg} />}
            </div>
            <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-ink-500">{item.desc}</p>
            <div className="mt-4 flex items-center justify-between gap-3 border-t border-dashed border-ink-900/10 pt-4">
              <span className="text-[10px] font-bold tracking-[0.14em] text-ink-500 uppercase">
                {item.price ? `₹${item.price}` : "Price on enquiry"}
              </span>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.18em] text-maroon-700 uppercase">
                <MessageCircle size={12} /> Enquire
              </span>
            </div>
          </div>
        </article>
      </Tilt>
    </motion.div>
  );
}

function QuickView({ item, onClose }: { item: MenuItem; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const catLabel = menuCategories.find((c) => c.id === item.cat)?.label ?? "";

  return (
    <motion.div
      className="fixed inset-0 z-[96] flex items-end justify-center p-0 sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={item.name}
    >
      <motion.button
        aria-label="Close"
        className="absolute inset-0 bg-maroon-950/72 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 60, scale: 0.96 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-h-[92svh] w-full max-w-2xl overflow-y-auto rounded-t-[2rem] bg-ivory-50 shadow-2xl sm:rounded-[2rem]"
      >
        <div className="relative">
          <img src={item.img} alt={item.name} className="aspect-[16/9] w-full object-cover" decoding="async" />
          <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink-900/60 to-transparent" />
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close quick view"
            className="absolute top-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-ivory-50/90 text-ink-900 backdrop-blur transition-transform hover:scale-110"
          >
            <X size={17} />
          </button>
          <div className="absolute bottom-4 left-5 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-maroon-800 px-3.5 py-1.5 text-[10px] font-bold tracking-[0.2em] text-ivory-50 uppercase">
              {catLabel}
            </span>
            {item.popular && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-saffron-500 px-3.5 py-1.5 text-[10px] font-bold tracking-[0.2em] text-ivory-50 uppercase">
                <Flame size={11} /> Reviewers' pick
              </span>
            )}
          </div>
        </div>
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display text-2xl font-semibold text-ink-900 sm:text-3xl">{item.name}</h3>
            {item.veg !== null && <VegMark veg={item.veg} />}
          </div>
          <p className="mt-3 text-[14.5px] leading-relaxed text-ink-500">{item.desc}</p>
          <div className="mt-5 rounded-2xl border border-gold-500/30 bg-ivory-200/60 p-4 text-[12px] leading-relaxed text-ink-700">
            Menu preview — ask the counter or message us for today's availability and pricing.
            Public listings describe pricing as budget-friendly ({site.priceNote} per person).
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={wa(`Hi Rishi Sweets, I would like to enquire about: ${item.name}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-maroon-800 px-6 py-3 text-[11.5px] font-bold tracking-[0.14em] text-ivory-50 uppercase transition-colors hover:bg-maroon-700"
            >
              <MessageCircle size={14} /> Enquire on WhatsApp
            </a>
            <a
              href="#menu"
              onClick={onClose}
              className="inline-flex items-center gap-2 rounded-full border border-ink-900/15 px-6 py-3 text-[11.5px] font-bold tracking-[0.14em] text-ink-900 uppercase transition-colors hover:border-maroon-800 hover:text-maroon-800"
            >
              Back to menu
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function MenuSection({
  cat,
  onCat,
}: {
  cat: CatFilter;
  onCat: (c: CatFilter) => void;
}) {
  const [query, setQuery] = useState("");
  const [vegOnly, setVegOnly] = useState(false);
  const [popularOnly, setPopularOnly] = useState(false);
  const [active, setActive] = useState<MenuItem | null>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return menu.filter((m) => {
      if (cat !== "all" && m.cat !== cat) return false;
      if (vegOnly && m.veg !== true) return false;
      if (popularOnly && !m.popular) return false;
      if (q && !(m.name + " " + m.desc).toLowerCase().includes(q)) return false;
      return true;
    });
  }, [cat, vegOnly, popularOnly, query]);

  return (
    <section id="menu" className="relative scroll-mt-24 bg-ivory-200/50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          index="02"
          eyebrow="The Menu"
          title={
            <>
              One Roof, <span className="gold-grad-text italic">Every Flavour</span>
            </>
          }
          sub="Browse by craving — thalis and biryani, dosas and pav bhaji, fresh mithai, cakes and cold coffee."
        />

        {MENU_IS_SAMPLE && (
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 flex w-fit max-w-xl items-center justify-center gap-2 rounded-full border border-gold-500/35 bg-ivory-50 px-5 py-2.5 text-center text-[11px] font-semibold tracking-wide text-ink-700">
              <BadgeCheck size={14} className="shrink-0 text-gold-600" />
              Sample menu preview — confirm today's items &amp; prices at the counter or on WhatsApp.
            </p>
          </Reveal>
        )}

        {/* controls */}
        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-col items-stretch gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:px-0">
              {menuCategories.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => onCat(c.id)}
                  aria-pressed={cat === c.id}
                  className={cn(
                    "shrink-0 rounded-full border px-4.5 py-2.5 text-[11px] font-bold tracking-[0.12em] uppercase transition-all duration-300",
                    cat === c.id
                      ? "border-maroon-800 bg-maroon-800 text-ivory-50 shadow-[0_10px_22px_-10px_rgba(92,18,32,0.6)]"
                      : "border-ink-900/12 bg-ivory-50 text-ink-700 hover:border-maroon-700 hover:text-maroon-700"
                  )}
                >
                  {c.label}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <label className="relative flex-1 lg:w-56 lg:flex-none">
                <Search size={15} className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-ink-500" />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search dishes…"
                  aria-label="Search the menu"
                  className="w-full rounded-full border border-ink-900/12 bg-ivory-50 py-2.5 pr-4 pl-10 text-[13px] font-medium text-ink-900 placeholder:text-ink-500/70 focus:border-maroon-700 focus:outline-none"
                />
              </label>
              <button
                type="button"
                onClick={() => setVegOnly((v) => !v)}
                aria-pressed={vegOnly}
                title="Vegetarian only"
                className={cn(
                  "grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-all",
                  vegOnly
                    ? "border-green-700 bg-green-700 text-ivory-50"
                    : "border-ink-900/12 bg-ivory-50 text-green-800"
                )}
              >
                <Leaf size={15} />
              </button>
              <button
                type="button"
                onClick={() => setPopularOnly((v) => !v)}
                aria-pressed={popularOnly}
                title="Reviewers' picks"
                className={cn(
                  "grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-all",
                  popularOnly
                    ? "border-saffron-500 bg-saffron-500 text-ivory-50"
                    : "border-ink-900/12 bg-ivory-50 text-saffron-600"
                )}
              >
                <Flame size={15} />
              </button>
            </div>
          </div>
        </Reveal>

        <p className="mt-6 text-[11px] font-bold tracking-[0.22em] text-ink-500 uppercase" aria-live="polite">
          {results.length} {results.length === 1 ? "item" : "items"}
          {cat !== "all" && ` · ${menuCategories.find((c) => c.id === cat)?.label}`}
        </p>

        {/* grid */}
        <motion.div layout className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {results.map((item) => (
              <MenuCard key={item.id} item={item} onOpen={setActive} />
            ))}
          </AnimatePresence>
        </motion.div>

        {results.length === 0 && (
          <div className="mt-10 rounded-3xl border border-dashed border-ink-900/15 bg-ivory-50 px-6 py-16 text-center">
            <p className="font-display text-2xl text-ink-900 italic">Nothing matched that craving.</p>
            <p className="mt-2 text-[13px] text-ink-500">
              Try a different search — or ask us directly on WhatsApp.
            </p>
          </div>
        )}
      </div>

      <AnimatePresence>{active && <QuickView item={active} onClose={() => setActive(null)} />}</AnimatePresence>
    </section>
  );
}
