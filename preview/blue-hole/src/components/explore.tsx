"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Reveal, SectionHeading } from "@/components/motion-primitives";
import { EXPLORE } from "@/lib/site";

export function Explore() {
  return (
    <section id="explore" className="relative scroll-mt-24 overflow-hidden bg-sand-50 py-24 sm:py-32">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            eyebrow="Explore Exuma"
            title={
              <>
                Three hundred & sixty-five cays.
                <br />
                <span className="italic text-lagoon-600">Start anywhere.</span>
              </>
            }
          />
          <Reveal delay={0.2}>
            <p className="max-w-sm text-[15px] leading-relaxed text-ink/65">
              The locals say there&apos;s a cay for every day of the year. Whether you have one
              afternoon or a whole week, these are the pieces of Exuma our guests never stop
              talking about.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {EXPLORE.map((place, i) => (
            <Reveal key={place.index} delay={(i % 3) * 0.1}>
              <article className="group relative h-full overflow-hidden rounded-[1.75rem] bg-abyss-950">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={place.image}
                    alt={place.alt}
                    fill
                    sizes="(min-width: 1024px) 29vw, (min-width: 640px) 46vw, 92vw"
                    placeholder="blur"
                    className="object-cover transition-transform duration-[1.8s] ease-out group-hover:scale-[1.07]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-abyss-950/85 via-abyss-950/15 to-transparent" />
                </div>

                <span className="font-display absolute top-5 left-5 text-5xl font-light text-sand-50/35 italic">
                  {place.index}
                </span>
                <span className="absolute top-6 right-5 grid size-9 translate-y-1 place-items-center rounded-full bg-sand-50/15 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight className="size-4 text-sand-50" strokeWidth={2} />
                </span>

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-[10px] font-bold tracking-[0.28em] text-lagoon-300 uppercase">
                    {place.area}
                  </p>
                  <h3 className="font-display mt-1.5 text-2xl font-medium text-sand-50">
                    {place.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-sand-50/70">
                    {place.copy}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-12 max-w-2xl text-center text-sm leading-relaxed text-ink/60">
            Not sure where to begin? Tell the family what you love — fishing, snorkelling,
            empty beaches — and we&apos;ll happily point you toward trusted local captains and
            taxi drivers.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
