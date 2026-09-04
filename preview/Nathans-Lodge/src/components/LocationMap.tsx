import { MapPin, Plane, Compass, Clock3 } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const FACTS = [
  {
    icon: MapPin,
    label: "Where",
    value: "South Andros, The Bahamas",
  },
  {
    icon: Plane,
    label: "Arrive via",
    value: "Congo Town Airport (TZN), by way of Nassau",
  },
  {
    icon: Compass,
    label: "Coordinates",
    value: "24.00° N, 77.75° W",
  },
  {
    icon: Clock3,
    label: "Time",
    value: "Eastern Time — tide dependent",
  },
];

export default function LocationMap() {
  return (
    <section id="location" className="scroll-mt-24 bg-sand py-24 sm:py-32">
      <div className="mx-auto grid max-w-[90rem] gap-16 px-5 sm:px-8 lg:grid-cols-[1fr_1.15fr] lg:gap-20 lg:px-12">
        {/* Copy + facts */}
        <div className="flex flex-col justify-center">
          <SectionHeading
            index="08"
            eyebrow="Find Us"
            title={
              <>
                Far enough away{" "}
                <em className="font-light text-pine">to feel it</em>
              </>
            }
          />
          <Reveal
            delay={120}
            className="mt-8 space-y-5 text-[15px] leading-relaxed text-ink/75 sm:text-base"
          >
            <p>
              Getting here is part of the story: an easy hop from Nassau to
              Congo Town, then a road that keeps getting quieter until it runs
              out of reasons to be a road. What waits at the end is the west
              side of South Andros — flats, creeks and open Atlantic.
            </p>
            <p>
              We&rsquo;ll walk you through the travel steps when you write.
              Pack lighter than you think you need to.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-px overflow-hidden rounded-[4px] border border-ink/10 bg-ink/10 sm:grid-cols-2">
            {FACTS.map((f, i) => (
              <Reveal key={f.label} delay={160 + i * 80} className="bg-sand">
                <div className="flex h-full items-start gap-4 bg-paper/60 p-5">
                  <f.icon
                    className="mt-0.5 size-5 shrink-0 text-brass"
                    strokeWidth={1.25}
                  />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-ink/45">
                      {f.label}
                    </p>
                    <p className="mt-1.5 text-sm font-medium leading-snug text-ink">
                      {f.value}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Map */}
        <Reveal y={40} className="flex flex-col">
          <div className="relative flex-1 overflow-hidden rounded-[4px] frame-hairline">
            <iframe
              title="Map of South Andros, The Bahamas"
              src="https://www.google.com/maps?q=Congo+Town,+South+Andros,+Bahamas&z=10&output=embed"
              className="h-full min-h-[380px] w-full border-0 grayscale-[0.35] sepia-[0.18] contrast-[0.95] lg:min-h-[520px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between p-5">
              <span className="rounded-full bg-deep/85 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.28em] text-seafoam backdrop-blur-sm">
                South Andros — The Bahamas
              </span>
            </div>
          </div>
          <p className="mt-3 text-right text-[10px] uppercase tracking-[0.3em] text-ink/40">
            The quiet end of the third-largest reef on Earth
          </p>
        </Reveal>
      </div>
    </section>
  );
}
