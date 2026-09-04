import Image from "next/image";
import {
  BellRing,
  Flower2,
  Plane,
  ShieldCheck,
  SquareParking,
  Umbrella,
  Waves,
  Wifi,
  type LucideIcon,
} from "lucide-react";
import type { AmenityIcon, HotelDemoConfig } from "@/demos/types";
import { SectionHeading } from "./heading";
import { Reveal } from "./motion";

const icons: Record<AmenityIcon, LucideIcon> = {
  pool: Waves,
  wifi: Wifi,
  parking: SquareParking,
  shuttle: Plane,
  garden: Flower2,
  desk: BellRing,
  security: ShieldCheck,
  beach: Umbrella,
};

export function Amenities({ demo }: { demo: HotelDemoConfig }) {
  const { amenities } = demo;

  return (
    <section id="amenities" className="py-24 md:py-36">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-14">
        <Reveal>
          <SectionHeading index="03" label="Amenities" title={amenities.title} intro={amenities.intro} />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {amenities.items.map((item, i) => {
            const Icon = icons[item.icon];
            const delay = (i % 4) * 90;

            if (item.feature) {
              return (
                <Reveal key={item.title} delay={delay} className="sm:col-span-2">
                  <div className="group relative min-h-[240px] overflow-hidden rounded-3xl">
                    <Image
                      src={item.feature.src}
                      alt={item.feature.alt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-pine-ink/85 via-pine-ink/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-7">
                      <div>
                        <h3 className="font-display text-2xl font-medium text-cream">{item.title}</h3>
                        <p className="mt-1 text-sm text-cream/80">{item.blurb}</p>
                      </div>
                      <span className="grid size-11 shrink-0 place-items-center rounded-full bg-coral text-cream">
                        <Icon size={19} />
                      </span>
                    </div>
                  </div>
                </Reveal>
              );
            }

            return (
              <Reveal key={item.title} delay={delay}>
                <div className="flex h-full min-h-[190px] flex-col justify-between gap-8 rounded-3xl border border-sandline bg-cream p-7 transition-all duration-300 hover:-translate-y-1 hover:border-pine/40 hover:shadow-[0_24px_50px_-24px_rgba(13,28,22,0.35)]">
                  <span className="grid size-11 place-items-center rounded-full bg-pine/10 text-pine">
                    <Icon size={19} />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-medium">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">{item.blurb}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
