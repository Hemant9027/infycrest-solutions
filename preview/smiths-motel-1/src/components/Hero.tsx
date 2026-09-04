import Image from "next/image";
import {
  CalendarCheck,
  ChevronDown,
  House,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { BUSINESS, HERO_IMAGE } from "@/data/site";

const TRUST = [
  { icon: House, label: "Independent & locally run" },
  { icon: MapPin, label: "Nassau, New Providence" },
  { icon: Mail, label: "Direct replies, personally" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-sea-dusk"
    >
      {/* Backdrop */}
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt="Evening light over the water and pier in Nassau, The Bahamas"
          fill
          priority
          sizes="100vw"
          className="kenburns object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sea-dusk/80 via-sea-dusk/35 to-sea-dusk/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-sea-dusk/60 via-transparent to-transparent" />
      </div>

      {/* Warm sun accent */}
      <div
        aria-hidden
        className="sunspin absolute -top-32 -right-32 h-96 w-96 rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(244,178,62,0.55) 0%, rgba(244,178,62,0) 65%)",
        }}
      />

      {/* Content */}
      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 pt-32 pb-24 sm:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[11px] font-bold tracking-[0.22em] text-sand uppercase backdrop-blur-md sm:text-xs">
            <Sparkles className="h-3.5 w-3.5 text-sun" aria-hidden />
            Independent motel · Nassau, The Bahamas
          </span>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="mt-6 max-w-3xl font-display text-[clamp(2.75rem,9.5vw,5.75rem)] leading-[0.98] font-medium tracking-tight text-white">
            Your Comfortable
            <br />
            <span className="text-sun italic">Nassau</span> Stay
          </h1>
        </Reveal>

        <Reveal delay={240}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-sand/85 sm:text-lg">
            {BUSINESS.name} is a small, independent motel in Nassau, Bahamas —
            simple, affordable accommodation arranged directly with the people
            who will welcome you.
          </p>
        </Reveal>

        <Reveal delay={360}>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#check-availability"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-coral px-8 py-4 text-base font-bold text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-coral-deep"
            >
              <CalendarCheck className="h-5 w-5 transition-transform duration-300 group-hover:-rotate-6" aria-hidden />
              Check Availability
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-white/35 bg-white/5 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/70 hover:bg-white/15"
            >
              <Mail className="h-5 w-5" aria-hidden />
              Contact Us
            </a>
          </div>
        </Reveal>

        <Reveal delay={500}>
          <ul className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/15 pt-6">
            {TRUST.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2.5 text-xs font-semibold tracking-wide text-sand/80 sm:text-sm"
              >
                <span className="grid h-8 w-8 place-items-center rounded-full bg-white/10">
                  <Icon className="h-4 w-4 text-sun" aria-hidden />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-sand/70 transition-colors hover:text-sun md:flex"
      >
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase">
          Discover
        </span>
        <ChevronDown className="h-5 w-5 animate-bounce" aria-hidden />
      </a>
    </section>
  );
}

export function Marquee() {
  const items = [
    "Independent motel",
    "Nassau, The Bahamas",
    "Book direct with us",
    "Warm island welcome",
    "Comfortable & affordable",
  ];
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-sea-deep/20 bg-sea-deep py-4">
      <div className="marquee-track flex w-max items-center gap-10 pr-10">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 text-sm font-bold tracking-[0.2em] whitespace-nowrap text-sand/90 uppercase"
          >
            {item}
            <svg viewBox="0 0 24 24" className="h-3 w-3 fill-sun" aria-hidden>
              <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z" />
            </svg>
          </span>
        ))}
      </div>
    </div>
  );
}
