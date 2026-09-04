import Image from "next/image";
import { ArrowUpRight, CircleCheck, Info } from "lucide-react";
import type { HotelDemoConfig } from "@/demos/types";
import { SectionHeading } from "./heading";
import { Reveal } from "./motion";
import { PrebookButton } from "./prebook-button";

export function Rooms({ demo }: { demo: HotelDemoConfig }) {
  const { rooms } = demo;

  return (
    <section id="rooms" className="border-y border-sandline bg-cream py-24 md:py-36">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-14">
        <Reveal>
          <SectionHeading index="02" label="Rooms" title={rooms.title} intro={rooms.intro} />
        </Reveal>

        <div className="space-y-20 md:space-y-28">
          {rooms.items.map((room, i) => {
            const flip = i % 2 === 1;
            return (
              <article key={room.name} className="grid items-center gap-8 md:grid-cols-12 md:gap-12">
                <Reveal className={`md:col-span-7 ${flip ? "md:order-2" : ""}`}>
                  <div className="group relative aspect-[4/3] overflow-hidden rounded-[2rem]">
                    <Image
                      src={room.image.src}
                      alt={room.image.alt}
                      fill
                      sizes="(min-width: 768px) 58vw, 100vw"
                      className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-pine-ink/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <span className="absolute top-5 left-5 rounded-full bg-cream/90 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-ink backdrop-blur">
                      {room.tag}
                    </span>
                  </div>
                </Reveal>

                <Reveal delay={140} className={`md:col-span-5 ${flip ? "md:order-1" : ""}`}>
                  <p className="font-display text-xl italic text-coral">({String(i + 1).padStart(2, "0")})</p>
                  <h3 className="mt-3 font-display text-4xl font-medium md:text-[2.8rem] md:leading-[1.05]">
                    {room.name}
                  </h3>
                  <p className="mt-4 max-w-md leading-relaxed text-ink-soft">{room.blurb}</p>
                  <ul className="mt-6 space-y-2.5">
                    {room.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 text-sm font-semibold text-ink">
                        <CircleCheck size={16} className="shrink-0 text-pine" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <PrebookButton
                    roomType={room.name}
                    className="group mt-8 inline-flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.18em] text-pine transition-colors hover:text-coral"
                  >
                    <span className="u-link">Request this room</span>
                    <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </PrebookButton>
                </Reveal>
              </article>
            );
          })}
        </div>

        <Reveal delay={100}>
          <div className="mt-20 flex items-start gap-4 border-t border-sandline pt-8 md:mt-24">
            <Info size={18} className="mt-0.5 shrink-0 text-coral" />
            <p className="max-w-3xl text-sm leading-relaxed text-ink-soft">{rooms.note}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
