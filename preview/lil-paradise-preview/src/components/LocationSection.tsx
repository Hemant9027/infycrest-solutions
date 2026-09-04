import { ArrowUpRight, MapPin, Plane, Sun } from "lucide-react";
import { Eyebrow, Reveal } from "./Reveal";

export default function LocationSection() {
  return (
    <section id="location" className="relative scroll-mt-24 bg-cream px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <Reveal>
              <Eyebrow>Location</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 font-display text-4xl font-medium leading-[1.02] tracking-tight sm:text-5xl lg:text-[3.4rem]">
                Find us in
                <br />
                <span className="italic text-lagoon">Nassau</span>, The Bahamas
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 max-w-md text-base leading-relaxed text-ink/70 sm:text-lg">
                Nassau sits on the island of New Providence — the lively heart of The
                Bahamas, where pastel streets meet some of the clearest water on Earth.
                Lil Paradise Getaway makes a soft landing for exploring it all.
              </p>
            </Reveal>

            <div className="mt-9 space-y-4">
              {[
                {
                  icon: Sun,
                  title: "Island sunshine",
                  body: "Warm, breezy days are the norm here — pack light, live outside.",
                },
                {
                  icon: MapPin,
                  title: "New Providence, Bahamas",
                  body: "Perfectly placed for beaches, dining, markets and day trips.",
                },
                {
                  icon: Plane,
                  title: "Easy to reach",
                  body: "Fly into Nassau's Lynden Pindling International Airport (NAS).",
                },
              ].map((f, i) => (
                <Reveal key={f.title} delay={0.2 + i * 0.08}>
                  <div className="flex items-start gap-4 rounded-2xl border border-deep/10 bg-white/60 p-4.5 transition-colors hover:border-aqua/40">
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-foam text-deep">
                      <f.icon className="size-5" strokeWidth={2} />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold">{f.title}</h3>
                      <p className="mt-0.5 text-sm leading-relaxed text-ink/65">{f.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Nassau%2C+The+Bahamas"
                target="_blank"
                rel="noreferrer"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-deep px-7 py-4 text-sm font-extrabold tracking-wide text-cream transition-all hover:-translate-y-0.5 hover:bg-ink"
              >
                Open in Google Maps
                <ArrowUpRight className="size-4.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Reveal>
          </div>

          {/* Map card */}
          <Reveal delay={0.15}>
            <div className="relative">
              <div className="overflow-hidden rounded-[2.5rem] rounded-bl-[5rem] shadow-[0_35px_70px_-30px_rgba(11,58,56,0.5)] ring-8 ring-white/70">
                <iframe
                  title="Map of Nassau, The Bahamas"
                  src="https://maps.google.com/maps?q=Nassau%2C%20The%20Bahamas&z=11&output=embed"
                  className="h-[420px] w-full sm:h-[520px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="absolute -bottom-6 left-6 rounded-3xl bg-coral px-6 py-5 text-white shadow-[0_20px_45px_-15px_rgba(232,80,60,0.8)] sm:left-10">
                <p className="font-hand text-3xl font-semibold leading-none">you are here-ish</p>
                <p className="mt-1.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-white/85">
                  25.0443° N · 77.3504° W
                </p>
              </div>
              <span className="absolute -right-4 -top-5 hidden rotate-6 rounded-2xl bg-sun px-5 py-3 font-display text-sm font-bold uppercase tracking-[0.16em] text-ink shadow-lg sm:block">
                Nassau, Bahamas
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
