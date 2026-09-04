import { ArrowRight, CalendarCheck, Mail, MapPin, MessagesSquare, Sun } from "lucide-react";
import Image from "next/image";
import { EMAIL, IMAGES } from "@/lib/site";
import { Eyebrow } from "../Brand";
import { Reveal } from "../Reveal";

const STEPS = [
  {
    icon: CalendarCheck,
    step: "01",
    title: "Send your dates",
    text: "One minute with the form below — or a plain email, whatever's easier.",
  },
  {
    icon: MessagesSquare,
    step: "02",
    title: "We confirm what's open",
    text: "Room options, current rates and answers, straight from our inbox.",
  },
  {
    icon: Sun,
    step: "03",
    title: "Arrive & unwind",
    text: "Check in, drop your bags, and go find the water.",
  },
];

export function Stay() {
  return (
    <section id="stay" className="scroll-mt-24 px-3 py-6 sm:px-6">
      <div className="stripes-dark relative mx-auto max-w-[92rem] overflow-hidden rounded-[2.5rem] bg-ink text-cream sm:rounded-[3rem]">
        <div
          className="pointer-events-none absolute -left-32 -top-32 size-[26rem] rounded-full bg-sea/40 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-40 -right-24 size-[30rem] rounded-full bg-sun/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative grid grid-cols-1 items-center gap-14 px-6 py-20 sm:px-10 sm:py-28 lg:grid-cols-12 lg:gap-12 lg:px-16">
          {/* copy */}
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow index="02" label="Rooms & your stay" light />
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display-tight mt-6 font-display text-4xl font-medium leading-[1.08] sm:text-5xl xl:text-6xl">
                Comfort first.
                <br />
                <em className="font-light italic text-sun">Prices that behave.</em>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-cream/75">
                Rooms at Morris Motel are simple, well-kept and easy on the
                budget — made for travellers who come to Nassau for the island,
                not for the thread count. Every stay starts the same way: you
                tell us what you need, we tell you honestly what we have.
              </p>
            </Reveal>

            {/* honesty note — no invented room types or prices */}
            <Reveal delay={220}>
              <div className="mt-8 flex max-w-2xl gap-4 rounded-3xl border hairline-light bg-pine/70 p-6 sm:p-7">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-sun/15 text-sun">
                  <MessagesSquare className="size-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-cream">
                    How rooms & rates work
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/70">
                    We don't publish fixed room types or prices online —
                    availability and rates change with the season. Send your
                    dates and group size and we'll confirm exactly what's open,
                    what it costs and what's included. Straight answers, no fine
                    print.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* steps */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {STEPS.map((step, i) => (
                <Reveal key={step.title} delay={260 + i * 90}>
                  <div className="h-full rounded-3xl border hairline-light bg-pine/50 p-5 transition-colors duration-300 hover:bg-pine">
                    <div className="flex items-center justify-between">
                      <span className="font-display text-sm italic text-sun">
                        {step.step}
                      </span>
                      <step.icon className="size-5 text-cream/60" />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-semibold">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-cream/65">
                      {step.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={440}>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#book"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-coral px-7 py-4 text-base font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-coral-deep"
                >
                  Check Availability
                  <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2.5 rounded-full border border-cream/30 px-7 py-4 text-base font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream hover:text-ink"
                >
                  <Mail className="size-5" />
                  Email Us
                </a>
              </div>
            </Reveal>
          </div>

          {/* visual */}
          <Reveal delay={240} className="lg:col-span-5">
            <div className="relative mx-auto max-w-[460px]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-[0_48px_90px_-46px_rgba(0,0,0,0.8)] ring-1 ring-cream/15">
                <Image
                  src={IMAGES.stay}
                  alt="Palm trees and a cruise ship along the Nassau shoreline"
                  fill
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent"
                  aria-hidden="true"
                />
              </div>
              <p className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full bg-cream px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink shadow-lg">
                <MapPin className="size-3.5 text-coral" />
                New Providence, Bahamas
              </p>
              <div
                className="absolute -right-6 -top-6 hidden size-16 animate-float rounded-full bg-sun sm:block"
                aria-hidden="true"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
