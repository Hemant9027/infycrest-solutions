import Image from "next/image";
import { ArrowUpRight, MapPin, Plane, UtensilsCrossed, Waves } from "lucide-react";
import { Reveal } from "./motion";
import { Italic, SectionHeading } from "./section-heading";

const FACTS = [
  {
    icon: MapPin,
    title: "Major's Cay, Crooked Island",
    text: "A quiet shore on one of The Bahamas' most unhurried Out Islands.",
  },
  {
    icon: Plane,
    title: "≈ 5 minutes from Crooked Island Airport",
    text: "Land, breathe out, and you're practically on the sand already.",
  },
  {
    icon: Waves,
    title: "≈ 55 feet from the Atlantic Ocean",
    text: "Close enough that the tide sets the rhythm of the day.",
  },
  {
    icon: UtensilsCrossed,
    title: "≈ 8 miles to the nearest restaurant",
    text: "The kind of seclusion travellers usually only dream about.",
  },
];

export function LocationSection() {
  return (
    <section id="location" className="relative bg-lagoon-100/50 py-24 md:py-36">
      <div className="mx-auto grid w-full max-w-[90rem] items-center gap-14 px-5 md:px-10 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
        <Reveal className="order-2 lg:order-1">
          <figure className="group relative overflow-hidden rounded-[2rem]">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/island-aerial.jpg"
                alt="Aerial view of Crooked Island's coastline, sandbanks and turquoise water"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-[1.8s] ease-out group-hover:scale-[1.06]"
              />
            </div>
            <figcaption className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-lagoon-950/70 px-4 py-2 text-[10px] font-semibold tracking-[0.24em] uppercase text-sand-50 backdrop-blur-sm">
              <MapPin className="h-3.5 w-3.5 text-coral-400" />
              Crooked Island, from above
            </figcaption>
          </figure>
        </Reveal>

        <div className="order-1 lg:order-2">
          <SectionHeading
            index="05"
            eyebrow="Location"
            title={
              <>
                Major&apos;s Cay,
                <br />
                <Italic>Crooked Island</Italic>
              </>
            }
            description="Remote in the best possible way — easy to reach, hard to leave."
          />

          <div className="mt-10 divide-y divide-lagoon-950/10 border-y border-lagoon-950/10">
            {FACTS.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={0.1 + i * 0.07}>
                <div className="flex gap-5 py-5">
                  <Icon
                    className="mt-1 h-5 w-5 shrink-0 text-lagoon-600"
                    strokeWidth={1.5}
                  />
                  <div>
                    <h3 className="font-display text-lg text-lagoon-950 md:text-xl">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-lagoon-950/60">
                      {text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.35}>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Major%27s+Cay%2C+Crooked+Island%2C+Bahamas"
              target="_blank"
              rel="noreferrer"
              className="group mt-8 inline-flex items-center gap-3 rounded-full border border-lagoon-950/15 px-6 py-3.5 text-[11px] font-semibold tracking-[0.24em] uppercase text-lagoon-900 transition-all duration-300 hover:border-lagoon-900 hover:bg-lagoon-900 hover:text-sand-50"
            >
              Find us on the map
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
