import Image from "next/image";
import {
  Anchor,
  Quote,
  Store,
  Sun,
  Umbrella,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import { NASSAU_SPOTS } from "@/data/site";

const ICONS: Record<string, LucideIcon> = {
  umbrella: Umbrella,
  store: Store,
  utensils: UtensilsCrossed,
  sun: Sun,
  anchor: Anchor,
};

export default function DiscoverNassau() {
  return (
    <section
      id="nassau"
      className="relative overflow-hidden bg-sea-dusk py-20 text-sand sm:py-28"
    >
      {/* Ambient glows */}
      <div
        aria-hidden
        className="absolute top-0 left-1/4 h-96 w-96 -translate-y-1/2 rounded-full bg-sea/30 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute right-0 bottom-0 h-80 w-80 translate-x-1/3 translate-y-1/3 rounded-full bg-coral/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHead
          tone="dark"
          eyebrow="Discover Nassau"
          title={
            <>
              Your days, <span className="text-sun italic">island-style</span>
            </>
          }
          sub="Nassau and New Providence are easy to explore — here are a few local favorites to start with."
        />

        {/* Card rail: snap-scroll on mobile, grid on desktop */}
        <div className="-mx-5 mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-5">
          {NASSAU_SPOTS.map((spot, i) => {
            const Icon = ICONS[spot.icon] ?? Sun;
            return (
              <Reveal
                key={spot.title}
                delay={i * 80}
                className="w-[78%] shrink-0 snap-center sm:w-auto sm:shrink"
              >
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur-sm transition-all duration-400 hover:-translate-y-1.5 hover:bg-white/10">
                  <div className="relative overflow-hidden">
                    <Image
                      src={spot.image}
                      alt={spot.alt}
                      width={900}
                      height={640}
                      sizes="(max-width: 640px) 78vw, (max-width: 1024px) 45vw, 18vw"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-108"
                    />
                    <span className="absolute bottom-3 left-3 grid h-9 w-9 place-items-center rounded-full bg-sea-dusk/70 text-sun backdrop-blur-sm">
                      <Icon className="h-4.5 w-4.5" aria-hidden />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-lg leading-snug font-medium">
                      {spot.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-sand/70">
                      {spot.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200}>
          <p className="mx-auto mt-10 flex max-w-2xl items-start justify-center gap-3 text-center">
            <Quote className="mt-1 h-5 w-5 shrink-0 rotate-180 text-sun" aria-hidden />
            <span className="font-display text-lg text-sand/85 italic sm:text-xl">
              Ask us what&rsquo;s on when you visit — we&rsquo;re always happy
              to share our favorite local spots.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
