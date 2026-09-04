import { Sailboat, Umbrella, UtensilsCrossed } from "lucide-react";
import Image from "next/image";
import { IMAGES } from "@/lib/site";
import { Eyebrow } from "../Brand";
import { Reveal } from "../Reveal";

const SPOTS = [
  {
    icon: Sailboat,
    image: IMAGES.explorePort,
    alt: "A cruise ship docked at the port in Nassau",
    title: "Bay Street & the cruise port",
    text: "Downtown Nassau's shops, straw crafts and harbour views — the island at its brightest and busiest.",
  },
  {
    icon: UtensilsCrossed,
    image: IMAGES.exploreFishFry,
    alt: "A lively Bahamian beach lined with palms",
    title: "The Fish Fry at Arawak Cay",
    text: "Conch salad, fried snapper and cold drinks where locals actually eat. Ask us what to order.",
  },
  {
    icon: Umbrella,
    image: IMAGES.exploreBeach,
    alt: "Turquoise water and palms on a New Providence beach",
    title: "Beach time on New Providence",
    text: "Turquoise water is the easy part here — we'll point you toward the right stretch for the day.",
  },
];

export function Explore() {
  return (
    <section
      id="explore"
      className="scroll-mt-24 border-y hairline bg-cream/60 py-24 sm:py-32"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow index="04" label="Explore Nassau" />
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display-tight mt-6 font-display text-4xl font-medium leading-[1.08] sm:text-5xl">
              Out the door,{" "}
              <em className="font-light italic text-sea">into the island</em>.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-lg leading-relaxed text-ink/70">
              Morris Motel sits on Davis Street in central Nassau — a handy
              jumping-off point for the island's everyday favourites. When you
              arrive, ask us how to get around. Pointing guests the right way is
              half the job.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {SPOTS.map((spot, i) => (
            <Reveal key={spot.title} delay={140 + i * 100}>
              <article className="group h-full overflow-hidden rounded-[2rem] border hairline bg-sand shadow-[0_20px_50px_-38px_rgba(13,43,38,0.5)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_36px_70px_-40px_rgba(13,43,38,0.55)]">
                <div className="relative h-56 overflow-hidden sm:h-64">
                  <Image
                    src={spot.image}
                    alt={spot.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-ink/25 to-transparent"
                    aria-hidden="true"
                  />
                </div>
                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-3">
                    <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-mint text-sea transition-colors duration-300 group-hover:bg-coral group-hover:text-cream">
                      <spot.icon className="size-5" />
                    </span>
                    <h3 className="font-display text-xl font-semibold leading-tight">
                      {spot.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-ink/65">
                    {spot.text}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={240}>
          <p className="mt-10 text-center font-display text-lg italic text-ink/55">
            Junkanoo, old forts, island boat trips, hidden food spots — just
            ask. We like this part.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
