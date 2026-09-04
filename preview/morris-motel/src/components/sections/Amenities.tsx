import {
  ArrowUpRight,
  BadgeDollarSign,
  BedDouble,
  CalendarClock,
  Compass,
  HeartHandshake,
  HelpCircle,
  MessagesSquare,
} from "lucide-react";
import { EMAIL } from "@/lib/site";
import { Eyebrow } from "../Brand";
import { Reveal } from "../Reveal";

/**
 * Service-level promises only. No fabricated amenities —
 * anything specific is confirmed by email before booking.
 */
const ESSENTIALS = [
  {
    icon: BedDouble,
    title: "Clean, comfortable rooms",
    text: "Simple, well-kept spaces that put a good night's sleep first.",
  },
  {
    icon: BadgeDollarSign,
    title: "Affordable, straightforward rates",
    text: "Budget-friendly pricing, confirmed before you commit to anything.",
  },
  {
    icon: MessagesSquare,
    title: "A real person replies",
    text: "Questions go straight to the people who run the motel — not a call centre.",
  },
  {
    icon: CalendarClock,
    title: "Easy arrival planning",
    text: "Landing late or leaving early? Ask, and we'll work out the practicalities with you.",
  },
  {
    icon: Compass,
    title: "Local tips & directions",
    text: "Where to eat, what to see and how to get around New Providence.",
  },
  {
    icon: HeartHandshake,
    title: "Independent & locally run",
    text: "A small team that knows the island and looks after its guests directly.",
  },
];

export function Amenities() {
  return (
    <section id="amenities" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow index="03" label="Amenities — handled honestly" />
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display-tight mt-6 font-display text-4xl font-medium leading-[1.08] sm:text-5xl">
              The essentials,{" "}
              <em className="font-light italic text-sea">done right</em>.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-lg leading-relaxed text-ink/70">
              We're a small motel, not a resort — so you won't find a glossy,
              padded amenity list here. What you will find are the things that
              genuinely make a budget stay easy:
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {ESSENTIALS.map((item, i) => (
            <Reveal key={item.title} delay={120 + (i % 3) * 90}>
              <div className="group h-full rounded-3xl border hairline bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_50px_-32px_rgba(13,43,38,0.4)] sm:p-7">
                <span className="grid size-12 place-items-center rounded-2xl bg-mint text-sea transition-colors duration-300 group-hover:bg-coral group-hover:text-cream">
                  <item.icon className="size-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* transparent “ask us” banner */}
        <Reveal delay={200}>
          <div className="mt-12 flex flex-col gap-6 rounded-[2rem] bg-sea p-7 text-cream sm:p-9 md:flex-row md:items-center md:justify-between">
            <div className="flex gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-cream/15 text-sun">
                <HelpCircle className="size-6" />
              </span>
              <div>
                <h3 className="font-display text-2xl font-semibold">
                  Need something specific? Ask before you book.
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-cream/80">
                  Wi-Fi, parking, air conditioning, accessibility, kitchen
                  access — whatever matters to your trip, email us and we'll
                  confirm exactly what's available. We'd rather give you a
                  straight answer than a guess.
                </p>
              </div>
            </div>
            <a
              href={`mailto:${EMAIL}?subject=${encodeURIComponent("Question about amenities")}`}
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-cream px-6 py-3.5 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-sun"
            >
              Email us
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
