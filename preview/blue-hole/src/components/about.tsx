"use client";

import { BedDouble, Footprints, MapPin, Waves } from "lucide-react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { Eyebrow, Reveal } from "@/components/motion-primitives";
import { IMG } from "@/lib/site";

const FACTS = [
  {
    icon: BedDouble,
    title: "Eight guestrooms",
    copy: "One- and two-bedrooms — small enough to feel personal.",
  },
  {
    icon: Waves,
    title: "Overlooking Elizabeth Harbour",
    copy: "Mornings begin with boats drifting across turquoise water.",
  },
  {
    icon: MapPin,
    title: "Queen's Highway, George Town",
    copy: "In the heart of the Family Islands' friendly capital.",
  },
  {
    icon: Footprints,
    title: "Restaurant & café, on foot",
    copy: "Island cooking and coffee are an easy stroll away.",
  },
];

function FramedImage({
  src,
  alt,
  className,
  sizes,
}: {
  src: StaticImageData | string;
  alt: string;
  className: string;
  sizes: string;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[1.75rem] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        placeholder="blur"
        className="object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-[1.05]"
      />
    </div>
  );
}

export function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden bg-sand-50 py-24 sm:py-32"
    >
      <div
        className="pointer-events-none absolute -top-40 -right-40 size-[34rem] rounded-full bg-lagoon-100/60 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          {/* Imagery collage */}
          <div className="relative">
            <Reveal>
              <FramedImage
                src={IMG.housePalms}
                alt="Luxury beachfront villa elegantly nestled among swaying coconut palms with turquoise ocean in background"
                className="aspect-[4/3] w-full shadow-[0_40px_80px_-40px_rgba(3,38,46,0.45)]"
                sizes="(min-width: 1024px) 46vw, 92vw"
              />
            </Reveal>
            <Reveal
              delay={0.15}
              className="absolute -right-4 -bottom-10 hidden w-2/5 sm:block"
            >
              <div className="rounded-[1.75rem] bg-sand-50 p-2.5 shadow-[0_40px_80px_-35px_rgba(3,38,46,0.55)]">
                <FramedImage
                  src={IMG.houseTropical}
                  alt="Serene tropical path through lush coconut palm grove leading to pristine white sand beach and turquoise sea"
                  className="aspect-[3/4] w-full"
                  sizes="(min-width: 1024px) 18vw, 36vw"
                />
              </div>
            </Reveal>
            <Reveal delay={0.25} className="absolute -top-6 -left-3 sm:-left-6">
              <div className="flex items-center gap-3 rounded-2xl bg-abyss-900 px-5 py-4 text-sand-50 shadow-xl">
                <span className="grid size-10 place-items-center rounded-full bg-coral-500/90">
                  <Waves className="size-5" strokeWidth={1.8} />
                </span>
                <span className="text-[13px] leading-tight font-semibold">
                  Family-run,
                  <br />
                  <span className="font-normal text-sand-50/75">
                    hosted by Phillipa Marshall
                  </span>
                </span>
              </div>
            </Reveal>
          </div>

          {/* Copy */}
          <div className="lg:pl-4">
            <Reveal>
              <Eyebrow>About Marshall&apos;s</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display mt-4 text-4xl leading-[1.05] font-medium text-balance text-ink sm:text-5xl lg:text-[3.4rem]">
                Island hospitality,
                <br />
                the <span className="italic text-lagoon-600">
                  old-school
                </span>{" "}
                way.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 text-base leading-relaxed text-ink/75">
                Marshall&apos;s Guest House sits on Queen&apos;s Highway in
                George Town, looking out across the turquoise sweep of Elizabeth
                Harbour. It&apos;s a simple idea, looked after properly: eight
                guestrooms, kept cool and spotless, wrapped in warm Caribbean
                architecture — and a welcome that remembers your name by the
                second morning.
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink/75">
                Days here run on island time. Coffee on the terrace, a boat out
                to the cays, dinner within walking distance. When you&apos;re
                ready for bed, the trade winds do the talking.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
              {FACTS.map((fact, i) => (
                <Reveal key={fact.title} delay={0.1 + i * 0.07}>
                  <div className="flex gap-4">
                    <span className="mt-0.5 grid size-11 shrink-0 place-items-center rounded-2xl bg-lagoon-100 text-lagoon-600">
                      <fact.icon className="size-5" strokeWidth={1.7} />
                    </span>
                    <div>
                      <h3 className="text-[15px] font-bold text-ink">
                        {fact.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink/65">
                        {fact.copy}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <p className="font-display mt-10 text-xl italic text-abyss-800">
                — Phillipa Marshall,{" "}
                <span className="text-ink/55 not-italic">your host</span>
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
