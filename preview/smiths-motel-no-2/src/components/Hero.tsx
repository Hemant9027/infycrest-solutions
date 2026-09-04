import Image from "next/image";
import type { CSSProperties } from "react";
import {
  ArrowRight,
  CalendarCheck,
  Heart,
  Mail,
  MapPin,
  PiggyBank,
  Sparkles,
  Sun,
} from "lucide-react";
import Reveal from "./Reveal";
import { SITE } from "@/lib/site";

function RotatingBadge() {
  return (
    <div className="relative size-28 md:size-36">
      <div className="absolute inset-0 rounded-full bg-sun shadow-xl shadow-ink/25" />
      <svg
        viewBox="0 0 100 100"
        aria-hidden="true"
        className="absolute inset-0 animate-rot"
      >
        <defs>
          <path
            id="badge-circle"
            d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0"
          />
        </defs>
        <text className="fill-ink text-[8px] font-bold tracking-[0.18em] uppercase">
          <textPath href="#badge-circle">
            {"Smith's Motel No. 2 · Nassau · Bahamas ·"}
          </textPath>
        </text>
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        <Sun className="size-7 text-ink md:size-8" />
      </div>
    </div>
  );
}

const CHIPS = [
  { icon: Sparkles, label: "The second Smith's" },
  { icon: PiggyBank, label: "Easy on the budget" },
  { icon: Heart, label: "Warm island welcome" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* soft Caribbean light */}
      <div
        aria-hidden
        className="absolute -top-44 right-[-12%] size-[34rem] rounded-full bg-sun/30 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute top-1/3 left-[-14%] size-[30rem] rounded-full bg-lagoon/20 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 pt-32 pb-28 md:px-8 lg:min-h-[96svh] lg:grid-cols-12 lg:items-center lg:gap-8 lg:pt-40 lg:pb-36">
        {/* Copy */}
        <div className="lg:col-span-6">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-cream px-4 py-1.5 text-xs font-bold tracking-[0.18em] text-ink/70 uppercase">
              <MapPin className="size-3.5 text-coral" />
              {SITE.location}
              <span aria-hidden className="size-1 rounded-full bg-ink/30" />
              {SITE.type}
            </span>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="mt-7 font-display text-ink">
              <span className="block text-2xl font-medium text-lagoon-deep italic md:text-3xl">
                Welcome to
              </span>
              <span className="mt-2 block text-[clamp(3rem,8.2vw,5.6rem)] leading-[0.95] font-semibold tracking-tight">
                Smith&rsquo;s Motel
              </span>
              <span className="relative mt-1 inline-block text-[clamp(3.4rem,9.5vw,6.4rem)] leading-[0.95] font-black tracking-tight text-coral italic">
                No. 2
                <svg
                  viewBox="0 0 220 24"
                  fill="none"
                  aria-hidden
                  className="absolute -bottom-3 left-0 h-4 w-full md:-bottom-4 md:h-5"
                >
                  <path
                    d="M4 16C34 6 62 20 92 13C122 6 150 19 182 12C198 9 210 12 216 11"
                    stroke="var(--color-sun)"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-ink/70">
              An independent little motel in Nassau, Bahamas — easygoing island
              stays that are simple, friendly and refreshingly affordable. Same
              Smith&rsquo;s name, brand-new breeze.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-9 flex flex-wrap items-center gap-3.5">
              <a
                href="#booking"
                className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-7 py-4 font-bold text-sand shadow-xl shadow-ink/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-coral-deep"
              >
                <CalendarCheck className="size-5" />
                Check Availability
                <ArrowRight className="size-4.5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href={SITE.mailto}
                className="inline-flex items-center gap-2.5 rounded-full border-2 border-ink/15 px-7 py-[14px] font-bold text-ink transition-colors duration-300 hover:border-coral hover:text-coral-deep"
              >
                <Mail className="size-5" />
                Email Us
              </a>
            </div>
          </Reveal>

          <Reveal delay={340}>
            <div className="mt-11 flex flex-wrap gap-2.5">
              {CHIPS.map((chip) => (
                <span
                  key={chip.label}
                  className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-cream px-4 py-2 text-sm font-semibold text-ink/70"
                >
                  <chip.icon className="size-4 text-coral" />
                  {chip.label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Visual */}
        <div className="relative lg:col-span-6">
          <Reveal delay={160} className="relative">
            <div
              aria-hidden
              className="absolute inset-x-6 -top-8 -bottom-8 -z-10 translate-x-5 rotate-2 rounded-t-[999px] rounded-b-[3rem] bg-lagoon/25"
            />
            <div
              aria-hidden
              className="absolute inset-x-10 -top-4 -bottom-4 -z-10 -translate-x-4 -rotate-2 rounded-t-[999px] rounded-b-[3rem] bg-sun/35"
            />
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[480px] overflow-hidden rounded-t-[999px] rounded-b-[2.75rem] border-[6px] border-cream shadow-[0_40px_90px_-30px_rgba(14,58,52,0.5)]">
              <Image
                src="/images/hero-motel.jpg"
                alt="Smith's Motel No. 2 — a pastel Caribbean motel beneath the palms in Nassau, Bahamas"
                fill
                priority
                sizes="(max-width: 1024px) 92vw, 480px"
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-6 left-1 md:left-8">
              <RotatingBadge />
            </div>

            <div
              className="absolute -top-2 right-0 hidden w-36 animate-float rounded-xl bg-cream p-2 pb-4 shadow-xl md:block lg:-right-2 lg:w-40"
              style={{ "--float-rot": "6deg" } as CSSProperties}
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/veranda.jpg"
                  alt="A coral doorway at Smith's Motel No. 2 with potted palms"
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </div>
              <p className="mt-2 text-center font-display text-xs text-ink/70 italic">
                No. 2, with love
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
