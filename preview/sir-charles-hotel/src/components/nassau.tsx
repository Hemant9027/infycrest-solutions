import Image from "next/image";
import { Building2, Sailboat, Shell, ShoppingBag } from "lucide-react";
import Reveal from "./reveal";
import { Eyebrow } from "./ui";
import { IMG } from "@/lib/images";

const ICONS = [ShoppingBag, Building2, Shell, Sailboat];

export default function Nassau() {
  return (
    <section id="nassau" className="scroll-mt-24 bg-cream py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow index="04" label="Discover Nassau" />
            </Reveal>
            <Reveal delay={90}>
              <h2 className="mt-7 font-display text-[2.6rem] font-light leading-[1.04] sm:text-6xl">
                One island, a hundred
                <span className="block italic text-sea">shades of blue.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={180} className="max-w-md">
            <p className="text-base leading-relaxed text-ink/70">
              Nassau wears its history in pastel and limestone — a harbour-side capital of Junkanoo
              drums, hand-carved staircases, straw craft and water so clear it hardly looks real. Our
              team will happily point you toward their own favourite corners of the island.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          {IMG.nassau.map((spot, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={spot.title} delay={i * 110}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink/5 bg-ivory shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-soft">
                  <div className="relative aspect-[9/7] overflow-hidden">
                    <Image
                      src={spot.src}
                      alt={spot.alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="img-zoom object-cover"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="grid size-10 place-items-center rounded-full bg-sea/10 text-sea">
                      <Icon className="size-[17px]" />
                    </span>
                    <h3 className="mt-4 font-display text-[1.35rem] font-light leading-snug">{spot.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-ink/60">{spot.copy}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
