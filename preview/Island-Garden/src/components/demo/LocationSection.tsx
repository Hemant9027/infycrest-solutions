import Image from "next/image";
import { MapPin, ArrowUpRight } from "lucide-react";
import type { HotelDemoConfig } from "@/demos/types";
import { SectionHeading } from "./heading";
import { Reveal } from "./motion";

export function LocationSection({ demo }: { demo: HotelDemoConfig }) {
  const { location, address } = demo;
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(address.mapQuery)}&z=14&output=embed`;

  return (
    <section id="location" className="py-24 md:py-36">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-14">
        <Reveal>
          <SectionHeading index="05" label="Cable Beach & location" title={location.title} />
        </Reveal>

        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="font-display text-[1.65rem] leading-snug font-medium text-pine-deep md:text-[1.95rem]">
                {location.lead}
              </p>
              <div className="mt-8 max-w-lg space-y-5 leading-relaxed text-ink-soft md:text-[1.02rem]">
                {location.paragraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </Reveal>

            <div className="mt-10 space-y-3">
              {location.highlights.map((highlight, i) => (
                <Reveal key={highlight.title} delay={i * 90}>
                  <div className="group flex items-start justify-between gap-6 rounded-2xl border border-sandline bg-cream p-5 transition-colors duration-300 hover:border-pine/40">
                    <div>
                      <h3 className="font-display text-lg font-medium">{highlight.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink-soft">{highlight.blurb}</p>
                    </div>
                    <ArrowUpRight
                      size={17}
                      className="mt-1 shrink-0 text-pine transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={120}>
              <div className="group relative aspect-[16/10] overflow-hidden rounded-[2rem]">
                <Image
                  src={location.image.src}
                  alt={location.image.alt}
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                />
                <span className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-pine-ink/70 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-cream backdrop-blur">
                  <MapPin size={13} className="text-coral" />
                  Cable Beach — nearby
                </span>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <div className="relative mt-4 overflow-hidden rounded-[2rem] border border-sandline">
                <iframe
                  title={`Map to ${demo.name}, ${address.mapQuery}`}
                  src={mapSrc}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-80 w-full grayscale-[35%] transition-[filter] duration-500 hover:grayscale-0 md:h-96"
                />
                <div className="pointer-events-none absolute top-5 left-5 flex items-center gap-3 rounded-2xl bg-cream/95 px-5 py-3.5 shadow-lg backdrop-blur">
                  <span className="grid size-9 place-items-center rounded-full bg-coral text-cream">
                    <MapPin size={16} />
                  </span>
                  <span className="text-sm leading-tight">
                    <span className="block font-display text-base font-semibold">{demo.shortName}</span>
                    <span className="block text-ink-soft">
                      {address.street}, {address.city}
                    </span>
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
