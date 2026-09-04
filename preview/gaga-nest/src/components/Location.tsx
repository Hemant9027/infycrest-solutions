import { MapPin, Phone, Plane } from "lucide-react";
import { SectionHeading } from "./ui";
import { Reveal } from "./Reveal";

export default function Location() {
  return (
    <section id="location" className="py-24 sm:py-32 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Text */}
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                index="06"
                label="Location"
                title={
                  <>
                    East Street South,{" "}
                    <em className="text-coral">north side of town</em>
                  </>
                }
              />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 text-[15px] leading-[1.85] text-ink/70 sm:text-base">
                You’ll find Gaga’s Nest on the quiet northern side of Matthew
                Town — close enough to stroll into the heart of things, far
                enough that the loudest sound at night is the breeze. The
                island air is clean, the stars are unhurried, and the sea is
                never far away.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-9 space-y-5">
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-coral/10 text-coral">
                    <MapPin className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink/45">
                      Address
                    </p>
                    <p className="mt-1 font-display text-xl text-ink">
                      East Street South, Matthew Town
                      <br />
                      Inagua, The Bahamas
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-coral/10 text-coral">
                    <Plane className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink/45">
                      Getting here
                    </p>
                    <p className="mt-1 text-[15px] leading-relaxed text-ink/70">
                      Fly into Inagua’s small airport at Matthew Town — then
                      just ask for Gaga’s Nest. In a town this friendly,
                      everyone knows the way.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-coral/10 text-coral">
                    <Phone className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink/45">
                      Prefer specific directions?
                    </p>
                    <a
                      href="tel:+12423391666"
                      className="mt-1 inline-block text-[15px] font-semibold text-ink underline underline-offset-4 transition-colors hover:text-coral"
                    >
                      Call Kevin — +1 (242) 339-1666
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Map */}
          <Reveal delay={0.12} className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-[2rem] border border-ink/10 shadow-[0_40px_80px_-40px_rgb(22_48_42/0.4)]">
              <iframe
                title="Map — Gaga’s Nest, East Street South, Matthew Town, Inagua, The Bahamas"
                src="https://www.google.com/maps?q=East%20Street%20South%2C%20Matthew%20Town%2C%20Inagua%2C%20Bahamas&z=14&output=embed"
                className="h-[420px] w-full sm:h-[520px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-ink/10" />
              <div className="absolute bottom-5 left-5 rounded-2xl bg-bone/95 px-5 py-4 shadow-lg backdrop-blur-sm">
                <p className="font-display text-lg italic text-coral">
                  Gaga’s Nest
                </p>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/55">
                  Matthew Town · Inagua
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
