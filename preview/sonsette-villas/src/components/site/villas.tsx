import Image from "next/image";
import {
  ArrowRight,
  Bath,
  BedDouble,
  BedSingle,
  CookingPot,
  Sofa,
  UtensilsCrossed,
  Waves,
} from "lucide-react";
import { Reveal } from "./motion";
import { Italic, SectionHeading } from "./section-heading";

const VILLAS = [
  {
    name: "The One-Bedroom Villa",
    tag: "Made for two — and made for slowing down",
    image: "/images/villa-bedroom.jpg",
    alt: "One-bedroom villa with queen-size bed in soft coastal light",
    features: [
      { icon: BedDouble, label: "Queen-size bed" },
      { icon: Bath, label: "Full bathroom" },
      { icon: Sofa, label: "Living area" },
      { icon: UtensilsCrossed, label: "Dining area" },
      { icon: CookingPot, label: "Kitchenette" },
      { icon: Waves, label: "≈55 ft from the ocean" },
    ],
  },
  {
    name: "The Two-Bedroom Villa",
    tag: "Room for family or friends to spread out",
    image: "/images/villa-bedroom-two.jpg",
    alt: "Second bedroom of the two-bedroom villa with two single beds",
    features: [
      { icon: BedDouble, label: "Queen bed in bedroom one" },
      { icon: BedSingle, label: "Two single beds in bedroom two" },
      { icon: Bath, label: "Full bathroom" },
      { icon: Sofa, label: "Living area" },
      { icon: UtensilsCrossed, label: "Dining area" },
      { icon: CookingPot, label: "Kitchenette" },
    ],
  },
];

export function Villas() {
  return (
    <section id="villas" className="relative py-24 md:py-36">
      <div className="mx-auto w-full max-w-[90rem] px-5 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            index="02"
            eyebrow="The Villas"
            title={
              <>
                Two villas,
                <br />
                <Italic>one horizon</Italic>
              </>
            }
            description="Simple, comfortable and cared for — both villas share the same easy comforts, wrapped in Caribbean style and steps from the water."
          />
          <Reveal delay={0.2}>
            <a
              href="#booking"
              className="group inline-flex shrink-0 items-center gap-3 text-[11px] font-semibold tracking-[0.24em] uppercase text-lagoon-800"
            >
              Request your dates
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-lagoon-950/15 transition-all duration-300 group-hover:border-lagoon-900 group-hover:bg-lagoon-900 group-hover:text-sand-50">
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 md:mt-20 md:grid-cols-2 md:gap-10">
          {VILLAS.map((villa, i) => (
            <Reveal key={villa.name} delay={i * 0.12}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] bg-white/70 ring-1 ring-lagoon-950/5 transition-shadow duration-500 hover:shadow-2xl hover:shadow-lagoon-950/10">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={villa.image}
                    alt={villa.alt}
                    fill
                    sizes="(min-width: 768px) 45vw, 100vw"
                    className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.05]"
                  />
                  <span className="absolute top-5 left-5 rounded-full bg-lagoon-950/70 px-4 py-2 text-[10px] font-semibold tracking-[0.22em] uppercase text-sand-50 backdrop-blur-sm">
                    {i === 0 ? "One Bedroom" : "Two Bedrooms"}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7 md:p-9">
                  <h3 className="font-display text-3xl font-light tracking-tight text-lagoon-950 md:text-4xl">
                    {villa.name}
                  </h3>
                  <p className="mt-2 font-display text-lg italic text-coral-500">
                    {villa.tag}
                  </p>
                  <ul className="mt-7 grid gap-x-6 gap-y-4 border-t border-lagoon-950/10 pt-7 sm:grid-cols-2">
                    {villa.features.map(({ icon: Icon, label }) => (
                      <li
                        key={label}
                        className="flex items-center gap-3 text-sm text-lagoon-950/75"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lagoon-50 text-lagoon-600">
                          <Icon className="h-4 w-4" strokeWidth={1.75} />
                        </span>
                        {label}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#booking"
                    className="mt-8 inline-flex items-center gap-2 self-start text-[11px] font-semibold tracking-[0.24em] uppercase text-lagoon-800 transition-colors hover:text-coral-600"
                  >
                    Stay at Sonsette Villas
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-10 md:mt-14">
          <figure className="relative overflow-hidden rounded-[2rem]">
            <div className="relative aspect-[16/9] md:aspect-[21/8]">
              <Image
                src="/images/villa-living.jpg"
                alt="Open living area with dining space and kitchenette inside a Sonsette villa"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="absolute inset-x-0 bottom-0 flex flex-col gap-1 bg-gradient-to-t from-lagoon-950/80 to-transparent p-7 md:p-10">
              <span className="text-[10px] font-semibold tracking-[0.28em] uppercase text-sand-100/80">
                Included in every stay
              </span>
              <span className="font-display text-2xl font-light text-sand-50 md:text-3xl">
                A living area, dining space &amp; kitchenette —{" "}
                <em className="italic text-coral-300">yours alone</em>
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
