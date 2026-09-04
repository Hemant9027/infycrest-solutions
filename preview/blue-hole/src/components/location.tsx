import { Anchor, ArrowUpRight, Compass, Droplets, Fish, MapPin, Plane } from "lucide-react";
import Reveal from "@/components/reveal";
import { CONTACT } from "@/lib/site";

const DISTANCES = [
  { icon: Plane, place: "Congo Town Airport", time: "about 5 minutes" },
  { icon: Anchor, place: "Driggs Hill docking facility", time: "about 6 minutes" },
  { icon: Droplets, place: "Blue holes", time: "across the street" },
  { icon: Fish, place: "The reef", time: "just offshore" },
];

export default function Location() {
  return (
    <section id="location" className="relative overflow-hidden bg-deep py-24 text-shell md:py-36">
      <div className="pointer-events-none absolute -right-40 top-0 h-[30rem] w-[30rem] rounded-full bg-lagoon/10 blur-[130px]" />

      <div className="relative mx-auto max-w-[90rem] px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Copy + distances */}
          <div>
            <Reveal>
              <p className="kicker relative pl-[3.25rem] text-aqua before:absolute before:left-0 before:top-1/2 before:h-px before:w-10 before:bg-current before:opacity-40">
                06 · Location
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-display text-[clamp(2.4rem,4.6vw,4.25rem)] font-medium leading-[1.04]">
                Easy to reach.{" "}
                <em className="font-light italic text-aqua">Hard to leave.</em>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 max-w-xl text-[1.02rem] leading-relaxed text-shell/70">
                Fly into Congo Town Airport and you’re practically unpacked
                before the propellers stop turning. The villas sit right on the
                Queen’s Highway — close to everything in South Andros, and far
                from everything everywhere else.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <address className="mt-8 flex items-start gap-4 not-italic">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-aqua/10 text-aqua">
                  <MapPin className="h-5 w-5" />
                </span>
                <span className="pt-1 text-[1.02rem] leading-relaxed text-shell/85">
                  {CONTACT.addressLines[0]}
                  <br />
                  <span className="text-shell/60">{CONTACT.addressLines[1]}</span>
                </span>
              </address>
            </Reveal>

            <div className="mt-10 divide-y divide-shell/10 border-y border-shell/10">
              {DISTANCES.map(({ icon: Icon, place, time }, i) => (
                <Reveal key={place} delay={240 + i * 70}>
                  <div className="flex items-center gap-4 py-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-shell/15 text-aqua">
                      <Icon className="h-[1.1rem] w-[1.1rem]" />
                    </span>
                    <span className="flex-1 text-[0.98rem] font-medium text-shell/90">{place}</span>
                    <span className="text-sm italic text-aqua/90">{time}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Stylised map panel */}
          <Reveal delay={140}>
            <div
              className="relative h-[30rem] overflow-hidden rounded-[2rem] border border-shell/10 bg-abyss shadow-[0_60px_100px_-50px_rgba(0,0,0,0.8)]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(127,216,204,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(127,216,204,0.06) 1px, transparent 1px)",
                backgroundSize: "44px 44px",
              }}
            >
              {/* glow */}
              <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lagoon/15 blur-[80px]" />

              {/* Queen's Highway */}
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 600 480" fill="none" aria-hidden="true">
                <path
                  d="M-20 300 C 120 260, 220 320, 340 285 S 540 230, 640 250"
                  stroke="rgba(243,236,220,0.25)"
                  strokeWidth="2.5"
                  strokeDasharray="10 9"
                />
                <text x="70" y="252" fill="rgba(243,236,220,0.45)" fontSize="12" letterSpacing="3" fontFamily="inherit">
                  QUEEN’S HIGHWAY
                </text>
                {/* reef line offshore */}
                <path
                  d="M-20 90 C 140 60, 320 110, 640 70"
                  stroke="rgba(127,216,204,0.35)"
                  strokeWidth="2"
                  strokeDasharray="2 8"
                  strokeLinecap="round"
                />
                <text x="430" y="52" fill="rgba(127,216,204,0.6)" fontSize="12" letterSpacing="3">
                  THE REEF · OFFSHORE
                </text>
              </svg>

              {/* Sea / land labels */}
              <span className="absolute right-6 top-24 font-display text-3xl font-light italic text-aqua/40">
                Atlantic
              </span>
              <span className="absolute bottom-8 left-6 font-display text-3xl font-light italic text-shell/30">
                South Andros
              </span>

              {/* Blue hole marker */}
              <div className="absolute left-[24%] top-[62%] flex flex-col items-center" aria-hidden="true">
                <span className="h-3.5 w-3.5 rounded-full border-2 border-lagoon bg-lagoon/30" />
                <span className="mt-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-shell/60">
                  Blue Holes
                </span>
              </div>

              {/* Villa pin */}
              <div className="absolute left-1/2 top-[48%] -translate-x-1/2 -translate-y-1/2">
                <span className="absolute inset-0 -m-1 animate-pulse-ring rounded-full bg-aqua/50" />
                <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-aqua text-abyss shadow-[0_10px_30px_rgba(127,216,204,0.4)]">
                  <MapPin className="h-5 w-5" />
                </span>
              </div>
              <span className="absolute left-1/2 top-[48%] mt-9 -translate-x-1/2 whitespace-nowrap text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-shell">
                Blue Hole Villas
              </span>

              {/* Compass */}
              <div className="absolute left-6 top-6 flex items-center gap-2.5 rounded-full border border-shell/15 bg-abyss/60 px-4 py-2 backdrop-blur-sm">
                <Compass className="h-4 w-4 text-aqua" />
                <span className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-shell/70">
                  {CONTACT.coordinates}
                </span>
              </div>

              {/* Maps link */}
              <a
                href={CONTACT.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="group absolute bottom-6 right-6 inline-flex items-center gap-2 rounded-full bg-sand px-5 py-2.5 text-[0.8rem] font-semibold text-abyss transition-colors duration-300 hover:bg-aqua"
              >
                Open in Google Maps
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
