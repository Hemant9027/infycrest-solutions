import {
  Compass,
  Fish,
  Info,
  MapPin,
  Music,
  ShoppingBasket,
  Umbrella,
} from "lucide-react";
import Reveal from "./Reveal";

const SPOTS = [
  {
    icon: Umbrella,
    tag: "Sun & swim",
    tint: "bg-lagoon-soft text-lagoon-deep",
    title: "The beaches",
    text: "Powder-soft sand and water that barely looks real — the reason 'just one more day' exists.",
    img: "/images/villa-19.jpg",
    alt: "Aerial view of a tropical beach with vivid turquoise water",
  },
  {
    icon: Fish,
    tag: "Eat like a local",
    tint: "bg-coral-soft text-coral-deep",
    title: "Arawak Cay · the Fish Fry",
    text: "Conch salad made fresh in front of you, music drifting between the stalls. Come hungry, leave happy.",
    img: "/images/villa-20.jpg",
    alt: "Orange conch shells on bright Bahamian sand",
  },
  {
    icon: ShoppingBasket,
    tag: "Wander & browse",
    tint: "bg-sun-soft text-ink",
    title: "Downtown & Bay Street",
    text: "Pastel storefronts, cheerful chaos and the famous Straw Market — bring your bargaining smile.",
    img: "/images/villa-21.jpg",
    alt: "A vibrant street of colourful island storefronts",
  },
  {
    icon: Music,
    tag: "Island rhythm",
    tint: "bg-lagoon-soft text-lagoon-deep",
    title: "Junkanoo",
    text: "The Bahamas' heartbeat — drums, cowbells and dazzling costumes flooding the streets on festival nights.",
    img: "/images/villa-22.jpg",
    alt: "A colourful street parade with dancers in carnival costume",
  },
];

export default function Guide() {
  return (
    <section
      id="guide"
      className="relative z-10 -mt-8 scroll-mt-24 rounded-t-[2.5rem] bg-sand pt-20 pb-24 md:rounded-t-[3.5rem] md:pt-28 md:pb-32"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Reveal>
              <p className="flex items-center gap-2 text-xs font-bold tracking-[0.22em] text-coral-deep uppercase">
                <Compass className="size-4" />
                Nassau Guide
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] font-semibold tracking-tight text-ink md:text-5xl">
                Our island <em className="text-lagoon-deep">favourites.</em>
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-6 text-lg leading-relaxed text-ink/70">
                Nassau is a bright tangle of history, colour and very easy beach
                days. Here&rsquo;s where we&rsquo;d start — and when you arrive,
                just ask. Local tips are our favourite amenity.
              </p>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-cream px-5 py-3 text-sm font-bold text-ink/70">
              <MapPin className="size-4 text-coral" />
              New Providence, Bahamas
            </span>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SPOTS.map((spot, i) => (
            <Reveal key={spot.title} delay={110 * i}>
              <article className="group h-full overflow-hidden rounded-[1.75rem] border border-ink/5 bg-cream transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(14,58,52,0.4)]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={spot.img}
                    alt={spot.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <span
                    className={`absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-bold tracking-[0.14em] uppercase ${spot.tint}`}
                  >
                    <spot.icon className="size-3.5" />
                    {spot.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl leading-snug font-semibold text-ink">
                    {spot.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">
                    {spot.text}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={160}>
          <p className="mt-9 flex items-start gap-2.5 text-sm leading-relaxed text-ink/55">
            <Info className="mt-0.5 size-4 shrink-0 text-lagoon-deep" />
            All beloved Nassau classics. Getting around New Providence is easy —
            taxis and the local &ldquo;jitney&rdquo; buses criss-cross the
            island all day.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
