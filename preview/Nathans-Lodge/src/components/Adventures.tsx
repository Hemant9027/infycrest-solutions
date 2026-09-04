"use client";

import { useEffect, useRef } from "react";
import { Fish, Anchor, Waves, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const ADVENTURES = [
  {
    icon: Fish,
    img: "/images/wade-fishing.jpg",
    title: "Flats & Bonefish",
    text: "Wade or pole the shallows with local guides who read tide, light and wind like a living map. First cast or five-thousandth — the flats reward patience.",
    tag: "The main reason people find us",
  },
  {
    icon: Anchor,
    img: "/images/sea-fisherman.jpg",
    title: "Reef & Deep Water",
    text: "Snapper and grouper over the reef edge, bigger stories out along the drop into the Tongue of the Ocean.",
    tag: "Half day or long day",
  },
  {
    icon: Waves,
    img: "/images/kayak.jpg",
    title: "Creeks & Blue Holes",
    text: "Paddle quiet mangrove creeks, plunge into freshwater blue holes, snorkel water so clear boats seem to float on air.",
    tag: "Slow exploration",
  },
];

export default function Adventures() {
  const bannerRef = useRef<HTMLDivElement>(null);
  const bannerWrapRef = useRef<HTMLDivElement>(null);

  // Gentle parallax inside the cinematic banner.
  useEffect(() => {
    let raf = 0;
    const update = () => {
      const wrap = bannerWrapRef.current;
      const bg = bannerRef.current;
      if (!wrap || !bg) return;
      const rect = wrap.getBoundingClientRect();
      const vh = window.innerHeight;
      if (rect.bottom < 0 || rect.top > vh) return;
      const progress = (vh - rect.top) / (vh + rect.height);
      bg.style.transform = `translate3d(0, ${(progress - 0.5) * 90}px, 0) scale(1.12)`;
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      id="adventures"
      className="scroll-mt-24 bg-deep py-24 text-shell sm:py-32"
    >
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <SectionHeading
            dark
            index="04"
            eyebrow="Fishing & Adventure"
            title={
              <>
                Flats, reefs &amp;{" "}
                <em className="font-light text-seafoam">blue water</em>
              </>
            }
          />
          <Reveal delay={140}>
            <p className="max-w-md text-[15px] leading-relaxed text-shell/70 lg:ml-auto">
              South Andros rests at the southern end of the island anglers call
              the Bonefishing Capital of the World — but between the tides
              there are reefs, creeks and blue holes waiting too. Guided days
              are arranged through the lodge; tell us what you&rsquo;re
              dreaming of.
            </p>
          </Reveal>
        </div>

        {/* Adventure cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {ADVENTURES.map((a, i) => (
            <Reveal key={a.title} delay={i * 120} y={44}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[4px] border border-seafoam/12 bg-pine/25 transition-colors duration-500 hover:border-seafoam/30">
                <div className="relative h-56 overflow-hidden sm:h-60">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={a.img}
                    alt={a.title}
                    className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-deep/70 px-3.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.24em] text-seafoam backdrop-blur-sm">
                    {a.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <a.icon className="size-5 text-brass" strokeWidth={1.25} />
                  <h3 className="mt-4 font-display text-2xl font-light text-shell">
                    {a.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-shell/65">
                    {a.text}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Cinematic banner with parallax */}
        <Reveal className="mt-16" y={50}>
          <div
            ref={bannerWrapRef}
            className="frame-hairline-light relative h-[52vh] min-h-[340px] overflow-hidden rounded-[4px] sm:h-[64vh]"
          >
            <div
              ref={bannerRef}
              className="absolute inset-[-10%] will-change-transform"
              style={{
                backgroundImage: "url(/images/flats-skiff.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                transform: "scale(1.12)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep/80 via-deep/10 to-deep/30" />
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-6 p-6 sm:flex-row sm:items-end sm:justify-between sm:p-10">
              <p className="max-w-xl font-display text-2xl font-light italic leading-snug text-shell sm:text-3xl">
                &ldquo;The water out here has a dozen colors. Give it a week
                and you&rsquo;ll know all of them.&rdquo;
              </p>
              <a
                href="#contact"
                className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-shell px-6 py-3 text-[11px] font-bold uppercase tracking-[0.24em] text-deep transition-colors duration-300 hover:bg-brass"
              >
                Plan Your Stay
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
