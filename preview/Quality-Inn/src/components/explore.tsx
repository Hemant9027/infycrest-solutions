import { ArrowUpRight, Fish, Shell, Waves } from "lucide-react";
import Image from "next/image";
import { Reveal, RevealScale } from "@/components/reveal";

const wonders = [
  {
    icon: Waves,
    index: "01",
    title: "The Andros Barrier Reef",
    text: "Running along the island’s east coast, it’s widely known as the world’s third-largest barrier reef — a living wall of coral, sponges and sea life.",
    tag: "Snorkel & dive",
  },
  {
    icon: Shell,
    index: "02",
    title: "Blue holes, everywhere",
    text: "Andros holds more blue holes than anywhere else on Earth — mysterious, deep-blue circles hidden in pine forest and tucked beneath the shallows.",
    tag: "Natural wonders",
  },
  {
    icon: Fish,
    index: "03",
    title: "The Bonefish Capital",
    text: "Anglers travel from across the world to stalk bonefish on Andros’ endless flats — some of the most storied fly-fishing water anywhere.",
    tag: "World-famous flats",
  },
];

export function Explore() {
  return (
    <section id="explore" className="relative overflow-hidden py-24 sm:py-32">
      <span aria-hidden="true" className="text-hollow-dark pointer-events-none absolute top-8 right-0 font-display text-[20vw] leading-none font-light uppercase select-none">
        Wild
      </span>

      <div className="container-site relative">
        <div className="max-w-4xl">
          <Reveal>
            <p className="eyebrow text-lagoon-600">
              <span className="opacity-60">04</span>
              <span>Explore Andros</span>
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-4xl leading-[1.04] font-light tracking-tight text-balance text-pine-950 sm:text-5xl lg:text-6xl">
              The largest island in The Bahamas — and its
              <em className="text-lagoon-600"> wildest soul</em>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-pine-900/70 sm:text-lg">
              Andros is a green sprawl of pine forest, mangrove creeks and hidden water — bigger than every other
              Bahamian island combined, yet blissfully untamed. From Staniard Creek, you’re right in the middle of it
              all. Locals even say the forests are watched over by the <em>chickcharney</em> — Andros’ mischievous
              elf-bird of legend.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <RevealScale className="lg:row-span-2">
            <figure className="group relative h-full min-h-[26rem] overflow-hidden rounded-[2rem] shadow-soft lg:min-h-full">
              <Image
                src="/images/andros.jpg"
                alt="An aerial view of a deep blue hole ringed by green pine forest in Andros"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pine-950/75 via-pine-950/10 to-transparent" />
              <figcaption className="absolute right-6 bottom-6 left-6 text-sand-50 sm:right-8 sm:bottom-8 sm:left-8">
                <p className="text-[0.62rem] font-semibold tracking-[0.32em] text-tide-300 uppercase">Seen from above</p>
                <p className="mt-2 max-w-md font-display text-2xl leading-tight font-light italic sm:text-3xl">
                  A blue hole, perfectly round, hiding in the pines.
                </p>
              </figcaption>
            </figure>
          </RevealScale>

          <div className="grid gap-6">
            {wonders.map((wonder, i) => (
              <Reveal key={wonder.title} delay={0.1 + i * 0.09}>
                <article className="group relative overflow-hidden rounded-[1.75rem] border border-pine-950/8 bg-white/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-lagoon-500/25 hover:shadow-card sm:p-8">
                  <span aria-hidden="true" className="absolute top-5 right-6 font-display text-5xl leading-none font-light text-pine-950/8 transition-colors duration-300 group-hover:text-lagoon-500/20">
                    {wonder.index}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-mist-100 px-3.5 py-1.5 text-[0.62rem] font-semibold tracking-[0.22em] text-pine-800 uppercase">
                    <wonder.icon className="size-3.5" strokeWidth={1.8} />
                    {wonder.tag}
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-normal text-pine-950 sm:text-[1.7rem]">{wonder.title}</h3>
                  <p className="mt-2.5 max-w-lg text-[0.95rem] leading-relaxed text-pine-900/65">{wonder.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-[1.75rem] bg-pine-950 px-7 py-6 text-sand-50 sm:flex-row sm:items-center sm:px-9">
            <p className="max-w-2xl text-[0.95rem] leading-relaxed text-sand-50/75">
              All of it is within easy reach of the hotel — tell us what you’d love to see and we’ll point you
              the right way when you arrive.
            </p>
            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-copper-400 px-6 py-3 text-[0.72rem] font-semibold tracking-[0.16em] text-pine-950 uppercase transition-all duration-300 hover:-translate-y-0.5 hover:bg-copper-300"
            >
              Ask the Hotel
              <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
