import { useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { discovery, type MenuCatId } from "../data/site";
import { Reveal, SectionHead, Tilt } from "./ui";

export default function Discovery({
  onSelect,
}: {
  onSelect: (cat: MenuCatId) => void;
}) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const scrollBy = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.85, 560), behavior: "smooth" });
  };

  return (
    <section id="cravings" className="relative scroll-mt-24 overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            align="left"
            index="01"
            eyebrow="Food Discovery"
            title={
              <>
                What Are You <span className="gold-grad-text italic">Craving</span> Today?
              </>
            }
            sub="Ten counters of flavour — from slow dum biryani and tandoor breads to fresh mithai, cakes and cold coffee."
          />
          <Reveal delay={0.2} className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Scroll categories left"
              className="grid h-12 w-12 place-items-center rounded-full border border-ink-900/15 text-ink-900 transition-all hover:border-maroon-800 hover:bg-maroon-800 hover:text-ivory-50"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Scroll categories right"
              className="grid h-12 w-12 place-items-center rounded-full border border-ink-900/15 text-ink-900 transition-all hover:border-maroon-800 hover:bg-maroon-800 hover:text-ivory-50"
            >
              <ChevronRight size={18} />
            </button>
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.1} y={48}>
        <div
          ref={trackRef}
          className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-6 sm:px-8 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]"
          role="list"
          aria-label="Food categories"
        >
          {discovery.map((c, i) => (
            <div key={c.id} role="listitem" className="w-[240px] shrink-0 snap-start sm:w-[268px]">
              <Tilt max={8}>
                <button
                  type="button"
                  onClick={() => onSelect(c.id)}
                  data-cursor
                  className="group card-sheen relative block w-full overflow-hidden rounded-[1.6rem] text-left focus-visible:outline-gold-500"
                  style={{ transformStyle: "preserve-3d" }}
                  aria-label={`View ${c.label} in the menu`}
                >
                  <div className="img-vignette relative h-[340px] overflow-hidden sm:h-[360px]">
                    <img
                      src={c.img}
                      alt={c.label}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-[1.1s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.09]"
                    />
                    <span
                      aria-hidden
                      className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-maroon-950/90 via-maroon-950/40 to-transparent"
                    />
                    <span className="absolute top-4 left-4 rounded-full bg-ivory-50/90 px-3 py-1 text-[9px] font-bold tracking-[0.22em] text-maroon-800 uppercase backdrop-blur">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="absolute inset-x-0 bottom-0 p-5" style={{ transform: "translateZ(30px)" }}>
                      <h3 className="font-display text-2xl font-semibold text-ivory-50">{c.label}</h3>
                      <p className="mt-1.5 text-[12.5px] leading-snug text-ivory-200/85">{c.desc}</p>
                      <p className="mt-3 inline-flex items-center gap-2 text-[10.5px] font-bold tracking-[0.22em] text-gold-300 uppercase">
                        View dishes
                        <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1.5" />
                      </p>
                    </div>
                  </div>
                </button>
              </Tilt>
            </div>
          ))}
          {/* end card */}
          <div className="flex w-[240px] shrink-0 snap-start items-center justify-center sm:w-[268px]">
            <button
              type="button"
              onClick={() => onSelect("biryani")}
              className="group flex h-[340px] w-full flex-col items-center justify-center gap-4 rounded-[1.6rem] border-2 border-dashed border-gold-500/50 bg-ivory-50/60 text-maroon-800 transition-colors hover:border-maroon-700 sm:h-[360px]"
            >
              <span className="grid h-14 w-14 place-items-center rounded-full bg-maroon-800 text-ivory-50 transition-transform duration-300 group-hover:scale-110">
                <ArrowRight size={20} />
              </span>
              <span className="text-[11px] font-bold tracking-[0.24em] uppercase">See full menu</span>
            </button>
          </div>
        </div>
      </Reveal>
      <p className="mt-2 px-5 text-center text-[10.5px] font-bold tracking-[0.3em] text-ink-500/70 uppercase md:hidden">
        Swipe to explore
      </p>
    </section>
  );
}
