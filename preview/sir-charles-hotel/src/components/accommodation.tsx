import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Reveal from "./reveal";
import ReserveButton from "./reserve-button";
import { Eyebrow } from "./ui";
import { IMG, HOTEL_EMAIL } from "@/lib/images";

export default function Accommodation() {
  return (
    <section id="accommodation" className="grain relative scroll-mt-24 bg-palm py-24 text-ivory sm:py-32">
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 sm:px-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow index="02" label="Accommodation" tone="light" />
            </Reveal>
            <Reveal delay={90}>
              <h2 className="mt-7 font-display text-[2.6rem] font-light leading-[1.04] sm:text-6xl">
                Rooms made for
                <span className="block italic text-aqua">slow island days.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={180} className="max-w-md">
            <p className="text-base leading-relaxed text-ivory/70">
              Every stay is individually styled — pale timber, white linen, louvered light. Tell us how
              you like to travel and we&apos;ll personally match you with the stay that suits you best.
            </p>
            <div className="mt-7">
              <ReserveButton variant="gold" />
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 sm:mt-20 md:grid-cols-3">
          {IMG.rooms.map((room, i) => (
            <Reveal key={room.title} delay={i * 130}>
              <article className="group overflow-hidden rounded-t-[200px] rounded-b-3xl border border-ivory/10 bg-ink/25 transition-colors duration-700 hover:border-gold/40">
                <div className="relative aspect-[3/3.4] overflow-hidden">
                  <Image
                    src={room.src}
                    alt={room.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="img-zoom object-cover"
                  />
                  <span className="absolute left-5 top-6 font-display text-sm italic text-ivory/85">
                    0{i + 1}
                  </span>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
                </div>
                <div className="p-7">
                  <h3 className="font-display text-2xl font-light italic">{room.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ivory/65">{room.copy}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <p className="mt-14 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-ivory/10 pt-8 text-sm text-ivory/60">
            <ArrowRight className="size-4 text-gold" />
            Flexible dates, a bigger party, a special occasion? Write to
            <a href={`mailto:${HOTEL_EMAIL}`} className="link-line font-medium text-goldlight">
              {HOTEL_EMAIL}
            </a>
            — every arrangement is made personally.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
