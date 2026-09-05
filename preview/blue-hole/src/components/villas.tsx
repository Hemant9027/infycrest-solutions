import Image from "next/image";
import {
  ArrowUpRight,
  BedDouble,
  CookingPot,
  Flame,
  Armchair,
  Refrigerator,
  ShowerHead,
  UtensilsCrossed,
  Wifi,
} from "lucide-react";
import Reveal from "@/components/reveal";

const AMENITIES = [
  { icon: BedDouble, title: "Up to 2 adults", desc: "or a small family of 4" },
  {
    icon: CookingPot,
    title: "Full kitchen",
    desc: "fully functioning & ready to cook",
  },
  {
    icon: Refrigerator,
    title: "Full-size fridge",
    desc: "room for a week’s catch",
  },
  { icon: Flame, title: "Stove", desc: "for island suppers at home" },
  {
    icon: UtensilsCrossed,
    title: "Utensils & dinnerware",
    desc: "everything provided",
  },
  { icon: Armchair, title: "Dining area", desc: "slow meals, sea breeze" },
  { icon: ShowerHead, title: "Bathroom", desc: "with shower" },
  { icon: Wifi, title: "WiFi", desc: "when you feel like checking in" },
];

export default function Villas() {
  return (
    <section
      id="villas"
      className="relative overflow-hidden bg-abyss py-24 text-shell md:py-36"
    >
      {/* ambient glows */}
      <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-lagoon/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-24 h-96 w-96 rounded-full bg-coral/10 blur-[120px]" />

      <div className="relative mx-auto max-w-[90rem] px-5 sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <p className="kicker relative pl-[3.25rem] text-aqua before:absolute before:left-0 before:top-1/2 before:h-px before:w-10 before:bg-current before:opacity-40">
                02 · Our Villas
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 max-w-2xl font-display text-[clamp(2.4rem,4.6vw,4.25rem)] font-medium leading-[1.04]">
                No two villas{" "}
                <em className="font-light italic text-aqua">alike</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <p className="max-w-md text-[1.02rem] leading-relaxed text-shell/70">
              Each villa takes its own shape and personality — simple,
              comfortable and completely yours. Step off your porch, through the
              palms, and onto the sand.
            </p>
          </Reveal>
        </div>

        {/* Images */}
        <div className="mt-16 grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <figure className="group relative aspect-[4/3] overflow-hidden rounded-[2rem] lg:aspect-auto lg:h-full">
              <Image
                src="/images/villa-2.jpg"
                alt="Uniquely designed luxury beachfront villa architecturally nestled among coconut palms with turquoise ocean view"
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover transition-transform duration-[1.8s] ease-out group-hover:scale-105"
              />
              <figcaption className="absolute bottom-5 left-5 rounded-full bg-abyss/60 px-5 py-2.5 text-[0.78rem] font-medium tracking-wide text-shell backdrop-blur-md">
                Individually shaped, tucked into the palms
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={140} className="lg:col-span-5">
            <figure className="group relative aspect-[4/3] overflow-hidden rounded-[2rem] lg:aspect-auto lg:h-full">
              <Image
                src="/images/villa-5.jpg"
                alt="Luxurious beachfront villa interior with floor-to-ceiling windows, premium furnishings, and stunning turquoise ocean views"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover transition-transform duration-[1.8s] ease-out group-hover:scale-105"
              />
              <figcaption className="absolute bottom-5 left-5 rounded-full bg-abyss/60 px-5 py-2.5 text-[0.78rem] font-medium tracking-wide text-shell backdrop-blur-md">
                Kitchen, dining and everything provided
              </figcaption>
            </figure>
          </Reveal>
        </div>

        {/* Amenities */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {AMENITIES.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={(i % 4) * 80}>
              <div className="group flex h-full items-start gap-4 rounded-2xl border border-shell/10 bg-shell/[0.045] p-5 transition-all duration-300 hover:border-aqua/40 hover:bg-shell/[0.08]">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-aqua/10 text-aqua transition-colors duration-300 group-hover:bg-aqua group-hover:text-abyss">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-[0.95rem] font-semibold text-shell">
                    {title}
                  </h3>
                  <p className="mt-1 text-[0.85rem] leading-snug text-shell/55">
                    {desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-shell/10 pt-10 sm:flex-row sm:items-center">
            <p className="max-w-lg text-sm leading-relaxed text-shell/60">
              Villas are offered on a one-party basis — when you stay with us,
              the beach, the palms and the quiet are yours.
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-sand px-7 py-3.5 text-sm font-semibold text-abyss transition-colors duration-300 hover:bg-aqua"
            >
              Check availability
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
