import { CalendarCheck, Check, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { EMAIL, IMAGES } from "@/lib/site";
import { Eyebrow, OrbitBadge } from "../Brand";
import { Reveal } from "../Reveal";

const REASSURANCES = [
  "Independent & locally run",
  "Straightforward rates",
  "Real replies, not bots",
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-36">
      {/* soft tropical light */}
      <div
        className="pointer-events-none absolute -right-40 -top-40 size-[36rem] rounded-full bg-sun/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-52 top-72 size-[30rem] rounded-full bg-mint/60 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10">
        {/* ——— copy ——— */}
        <div className="lg:col-span-6">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border hairline bg-cream px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-sea">
              <MapPin className="size-3.5 text-coral" />
              Independent motel · Davis Street, Nassau
            </p>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="display-tight mt-6 font-display text-[2.85rem] font-medium leading-[1.03] sm:text-6xl lg:text-[4.1rem] xl:text-[4.6rem]">
              Simple,{" "}
              <em className="font-light italic text-sea">comfortable</em>
              <br />
              accommodation in{" "}
              <span className="relative inline-block">
                Nassau
                <svg
                  viewBox="0 0 220 14"
                  className="absolute -bottom-2 left-0 w-full text-coral"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4 10c34-6 68-8 106-4 38 4 74 2 106-4"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              .
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/70">
              Morris Motel is an independent, locally run motel on Davis Street —
              an uncomplicated, affordable base for exploring New Providence. No
              resort theatre, no surprises: a clean room, a fair rate and a
              straight answer from a real person.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#book"
                className="group inline-flex items-center gap-2.5 rounded-full bg-coral px-7 py-4 text-base font-semibold text-cream shadow-[0_18px_36px_-16px_rgba(228,87,46,0.9)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-coral-deep"
              >
                <CalendarCheck className="size-5 transition-transform duration-300 group-hover:-rotate-6" />
                Check Availability
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2.5 rounded-full border hairline bg-cream px-7 py-4 text-base font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-sea hover:text-sea"
              >
                <Mail className="size-5" />
                Email Us
              </a>
            </div>
          </Reveal>

          <Reveal delay={340}>
            <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-2.5">
              {REASSURANCES.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm font-medium text-ink/65"
                >
                  <span className="grid size-5 place-items-center rounded-full bg-mint text-sea">
                    <Check className="size-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* ——— collage ——— */}
        <div className="relative lg:col-span-6">
          <Reveal delay={200} className="relative mx-auto max-w-[560px]">
            <div className="relative h-[400px] overflow-hidden rounded-[2.5rem] shadow-[0_48px_90px_-48px_rgba(13,43,38,0.55)] ring-1 ring-ink/10 sm:h-[470px] lg:h-[540px]">
              <Image
                src={IMAGES.heroMain}
                alt="Evening light over the water and pier in Nassau, The Bahamas"
                fill
                priority
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent"
                aria-hidden="true"
              />
              <p className="absolute bottom-4 left-4 rounded-full bg-ink/60 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-cream backdrop-blur">
                Evening on the water — Nassau
              </p>
            </div>

            {/* polaroid */}
            <figure className="absolute -bottom-10 -left-4 w-36 rotate-[-5deg] animate-float rounded-2xl border-[6px] border-cream bg-cream shadow-[0_28px_50px_-28px_rgba(13,43,38,0.55)] sm:-left-12 sm:w-48">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                <Image
                  src={IMAGES.heroSmall}
                  alt="White sand and turquoise water on a Bahamian beach"
                  fill
                  sizes="(min-width: 640px) 192px, 144px"
                  className="object-cover"
                />
              </div>
              <figcaption className="py-2 text-center font-display text-xs italic text-ink/70">
                beach day, sorted
              </figcaption>
            </figure>

            {/* rotating badge */}
            <div className="absolute -top-9 right-2 rounded-full bg-cream p-1.5 text-sea shadow-[0_20px_40px_-20px_rgba(13,43,38,0.45)] ring-1 ring-ink/5 sm:-right-6">
              <OrbitBadge className="size-28 sm:size-32" />
            </div>

            {/* sun dot */}
            <div
              className="absolute -left-8 top-10 hidden size-14 animate-float-late rounded-full bg-sun shadow-[0_14px_30px_-12px_rgba(242,178,62,0.9)] sm:block"
              aria-hidden="true"
            />
          </Reveal>

          {/* verified coordinates, straight from listings */}
          <p
            className="absolute -right-3 top-1/2 hidden origin-center rotate-90 text-[10px] font-semibold uppercase tracking-[0.42em] text-ink/35 xl:block"
            aria-hidden="true"
          >
            25.0588° N · 77.3675° W
          </p>
        </div>
      </div>
    </section>
  );
}
