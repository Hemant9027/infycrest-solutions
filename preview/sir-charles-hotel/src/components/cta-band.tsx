import Image from "next/image";
import { Mail } from "lucide-react";
import Reveal from "./reveal";
import ReserveButton from "./reserve-button";
import { Diamond } from "./ui";
import { HOTEL_EMAIL, IMG } from "@/lib/images";

export default function CtaBand() {
  return (
    <section className="grain relative overflow-hidden py-28 sm:py-40" aria-label="Reserve your stay">
      <div className="absolute inset-0">
        <Image src={IMG.cta.src} alt={IMG.cta.alt} fill sizes="100vw" className="object-cover" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-ink/60" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/50 via-transparent to-ink/60" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col items-center px-6 text-center sm:px-10">
        <Reveal>
          <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.4em] text-ivory/80">
            <Diamond className="size-2 text-goldlight" />
            Booking enquiry
            <Diamond className="size-2 text-goldlight" />
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-7 max-w-4xl font-display text-[3rem] font-light leading-[1.02] text-ivory sm:text-7xl">
            The blue is waiting.
            <span className="block italic text-aqua">Reserve your stay.</span>
          </h2>
        </Reveal>
        <Reveal delay={190}>
          <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-ivory/75 sm:text-lg">
            Tell us your dates and we&apos;ll confirm availability personally — answered by the hotel,
            not a booking machine.
          </p>
        </Reveal>
        <Reveal delay={280}>
          <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row">
            <ReserveButton variant="gold" size="lg" />
            <a
              href={`mailto:${HOTEL_EMAIL}`}
              className="group inline-flex items-center gap-2.5 text-sm font-medium text-ivory/85 transition hover:text-ivory"
            >
              <span className="grid size-10 place-items-center rounded-full border border-ivory/40 transition group-hover:border-ivory">
                <Mail className="size-4" />
              </span>
              <span className="link-line">{HOTEL_EMAIL}</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
