import { MapPin, TreePine, Waves } from "lucide-react";
import ParallaxImage from "@/components/parallax-image";
import Reveal from "@/components/reveal";

const POINTS = [
  {
    icon: MapPin,
    title: "Directly across the street",
    desc: "Blue holes sit just steps from your villa — no tour bus, no ticket line.",
  },
  {
    icon: Waves,
    title: "Swim & explore",
    desc: "Andros holds one of the highest concentrations of blue holes on the planet, from hidden inland pools to vast ocean caverns.",
  },
  {
    icon: TreePine,
    title: "Wild Andros",
    desc: "Pine forest, coppice and empty roads — the largest, least-developed island in The Bahamas.",
  },
];

export default function BlueHoles() {
  return (
    <section id="blue-holes" className="relative overflow-hidden bg-foam py-24 md:py-36">
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <Reveal className="relative">
            <ParallaxImage
              src="/images/blue-hole.jpg"
              alt="Aerial view of a circular deep blue hole ringed by turquoise shallows"
              className="aspect-[4/5] rounded-[2rem] shadow-[0_50px_90px_-40px_rgba(6,38,46,0.45)] md:aspect-square"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-abyss px-6 py-4 text-shell shadow-xl sm:right-8">
              <p className="font-display text-3xl font-light italic text-aqua">Blue holes</p>
              <p className="mt-1 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-shell/60">
                across the street
              </p>
            </div>
          </Reveal>

          {/* Copy */}
          <div>
            <Reveal>
              <p className="kicker relative pl-[3.25rem] text-lagoon before:absolute before:left-0 before:top-1/2 before:h-px before:w-10 before:bg-current before:opacity-40">
                04 · Blue Holes & Nature
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-display text-[clamp(2.4rem,4.6vw,4.25rem)] font-medium leading-[1.04]">
                An ancient wonder,{" "}
                <em className="font-light italic text-lagoon">steps away</em>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 max-w-xl text-[1.02rem] leading-relaxed text-abyss/70">
                Blue holes are flooded sinkholes and underwater cave systems —
                windows into the island itself, shifting from pale jade at the
                rim to impossible sapphire at the center. On South Andros they
                are simply part of the neighbourhood: one lies directly across
                the Queen’s Highway from the villas, with more scattered
                through the forest and creeks beyond.
              </p>
            </Reveal>

            <div className="mt-10 space-y-4">
              {POINTS.map(({ icon: Icon, title, desc }, i) => (
                <Reveal key={title} delay={200 + i * 90}>
                  <div className="flex items-start gap-5 rounded-2xl border border-abyss/10 bg-white/70 p-5 transition-colors duration-300 hover:border-lagoon/40 hover:bg-white">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-lagoon/10 text-lagoon">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-abyss">{title}</h3>
                      <p className="mt-1 text-[0.92rem] leading-relaxed text-abyss/60">{desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
