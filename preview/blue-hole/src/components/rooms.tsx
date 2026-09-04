"use client";

import {
  ArrowRight,
  Check,
  CigaretteOff,
  ShowerHead,
  Snowflake,
  Tv,
  Wifi,
} from "lucide-react";
import Image from "next/image";
import { Reveal, SectionHeading } from "@/components/motion-primitives";
import { IMG, ROOMS } from "@/lib/site";

const AMENITY_ICONS = new Map<string, typeof Wifi>([
  ["WiFi", Wifi],
  ["Air conditioning", Snowflake],
  ["TV", Tv],
  ["Bathroom", ShowerHead],
  ["Non-smoking", CigaretteOff],
]);

function pickRoom(roomId: string) {
  window.dispatchEvent(new CustomEvent("mgh:select-room", { detail: roomId }));
  document
    .getElementById("book")
    ?.scrollIntoView({ behavior: "smooth", block: "center" });
}

export function Rooms() {
  return (
    <section
      id="rooms"
      className="relative scroll-mt-24 overflow-hidden bg-lagoon-50 py-24 sm:py-32"
    >
      <div
        className="pointer-events-none absolute -bottom-52 -left-52 size-[38rem] rounded-full bg-lagoon-100/70 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            eyebrow="Rooms & Comfort"
            title={
              <>
                Simple comforts,{" "}
                <span className="italic text-lagoon-600">done properly</span>.
              </>
            }
          />
          <Reveal delay={0.2}>
            <p className="max-w-sm text-[15px] leading-relaxed text-ink/65">
              Choose a one- or two-bedroom guestroom — every room is
              air-conditioned, non-smoking, and kept with the kind of care only
              a family gives its own.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {ROOMS.map((room, i) => (
            <Reveal key={room.id} delay={i * 0.12}>
              <article className="group h-full overflow-hidden rounded-[2rem] bg-white shadow-[0_30px_70px_-35px_rgba(3,38,46,0.35)] ring-1 ring-ink/5 transition-shadow duration-500 hover:shadow-[0_45px_90px_-35px_rgba(3,38,46,0.45)]">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={room.image}
                    alt={room.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 44vw, 92vw"
                    placeholder="blur"
                    className="object-cover transition-transform duration-[1.8s] ease-out group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-abyss-950/35 via-transparent to-transparent" />
                  <span className="absolute top-5 left-5 rounded-full bg-sand-50/90 px-4 py-1.5 text-[11px] font-bold tracking-[0.18em] text-abyss-900 uppercase backdrop-blur">
                    {room.tagline}
                  </span>
                </div>

                <div className="p-7 sm:p-9">
                  <h3 className="font-display text-3xl font-medium text-ink">
                    {room.name}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink/70">
                    {room.description}
                  </p>

                  <ul
                    className="mt-6 flex flex-wrap gap-2"
                    aria-label="Room amenities"
                  >
                    {room.features.map((feature) => {
                      const Icon = AMENITY_ICONS.get(feature) ?? Check;
                      return (
                        <li
                          key={feature}
                          className="inline-flex items-center gap-1.5 rounded-full bg-lagoon-50 px-3.5 py-1.5 text-[12px] font-semibold text-abyss-800 ring-1 ring-lagoon-200/70"
                        >
                          <Icon
                            className="size-3.5 text-lagoon-500"
                            strokeWidth={2.2}
                          />
                          {feature}
                        </li>
                      );
                    })}
                  </ul>

                  <button
                    type="button"
                    onClick={() => pickRoom(room.id)}
                    className="group/btn mt-8 inline-flex items-center gap-2.5 text-sm font-bold tracking-wide text-coral-600 transition-colors hover:text-coral-500"
                  >
                    Check availability for this room
                    <span className="grid size-7 place-items-center rounded-full bg-coral-100 transition-transform duration-300 group-hover/btn:translate-x-1.5">
                      <ArrowRight className="size-3.5" strokeWidth={2.5} />
                    </span>
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Detail strip */}
        <Reveal delay={0.15}>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="group relative aspect-[21/9] overflow-hidden rounded-[1.5rem]">
              <Image
                src={IMG.roomBright}
                alt="Bright, luxurious guest bedroom with elegant furnishings and expansive turquoise ocean views"
                fill
                sizes="(min-width: 640px) 46vw, 92vw"
                placeholder="blur"
                className="object-cover transition-transform duration-[1.8s] ease-out group-hover:scale-105"
              />
              <span className="absolute bottom-4 left-5 rounded-full bg-abyss-950/55 px-3.5 py-1 text-[11px] font-semibold tracking-wider text-sand-50 uppercase backdrop-blur-sm">
                Light-filled rooms
              </span>
            </div>
            <div className="group relative aspect-[21/9] overflow-hidden rounded-[1.5rem]">
              <Image
                src={IMG.roomWood}
                alt="Luxurious beachfront villa exterior nestled among palm trees with turquoise ocean backdrop"
                fill
                sizes="(min-width: 640px) 46vw, 92vw"
                placeholder="blur"
                className="object-cover transition-transform duration-[1.8s] ease-out group-hover:scale-105"
              />
              <span className="absolute bottom-4 left-5 rounded-full bg-abyss-950/55 px-3.5 py-1 text-[11px] font-semibold tracking-wider text-sand-50 uppercase backdrop-blur-sm">
                Warm, natural finishes
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
