import {
  HeartHandshake,
  House,
  MapPin,
  MessageCircle,
  Wallet,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";

const REASONS = [
  {
    icon: House,
    bg: "bg-sea-soft text-sea-deep",
    title: "Independent & locally run",
    text: "We're a small Nassau property, not a chain. Decisions are made here — quickly and with care.",
  },
  {
    icon: MessageCircle,
    bg: "bg-coral-soft text-coral-deep",
    title: "You talk directly to us",
    text: "Every enquiry goes straight to the motel. No call centres, no forms that vanish into the void.",
  },
  {
    icon: Wallet,
    bg: "bg-sun-soft text-sun",
    title: "Affordable by design",
    text: "Straightforward, no-fuss value — so more of your budget goes toward enjoying The Bahamas.",
  },
  {
    icon: MapPin,
    bg: "bg-sea-soft text-sea-deep",
    title: "A Nassau base",
    text: "Set in Nassau, New Providence — well placed for beaches, local dining and island exploring.",
  },
  {
    icon: HeartHandshake,
    bg: "bg-coral-soft text-coral-deep",
    title: "Personal from start to finish",
    text: "The same people who answer your questions are the ones who welcome you on arrival.",
  },
];

export default function WhyStay() {
  return (
    <section id="why-us" className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHead
          eyebrow="Why stay with us"
          title={
            <>
              Straightforward, personal and{" "}
              <span className="text-sea italic">independent</span>
            </>
          }
          sub="The things that make a small motel different — and better — when you travel."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map(({ icon: Icon, bg, title, text }, i) => (
            <Reveal key={title} delay={i * 90}>
              <article className="group h-full rounded-3xl border border-line bg-parchment p-7 shadow-sm transition-all duration-400 hover:-translate-y-1.5 hover:shadow-lift">
                <span
                  className={`grid h-13 w-13 place-items-center rounded-2xl ${bg} transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6`}
                >
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-5 font-display text-xl leading-snug font-medium text-ink sm:text-2xl">
                  {title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-3 sm:text-base">
                  {text}
                </p>
              </article>
            </Reveal>
          ))}

          {/* CTA tile */}
          <Reveal delay={4 * 90}>
            <a
              href="#check-availability"
              className="group flex h-full flex-col justify-between gap-6 rounded-3xl bg-sea p-7 text-sand shadow-card transition-all duration-400 hover:-translate-y-1.5 hover:shadow-lift"
            >
              <div>
                <p className="font-display text-2xl leading-snug font-medium sm:text-3xl">
                  Planning your
                  <span className="text-sun italic"> Nassau </span>
                  trip?
                </p>
                <p className="mt-2 text-sm leading-relaxed text-sand/75 sm:text-base">
                  Send us your dates — we&rsquo;ll reply personally with
                  availability and current rates.
                </p>
              </div>
              <span className="inline-flex items-center gap-2 font-bold text-sun">
                Check Availability
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
