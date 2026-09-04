import { BadgeDollarSign, HeartHandshake, MessagesSquare } from "lucide-react";
import Image from "next/image";
import { IMAGES } from "@/lib/site";
import { Eyebrow, PalmMark } from "../Brand";
import { Reveal } from "../Reveal";

const VALUES = [
  {
    icon: HeartHandshake,
    title: "Locally run",
    text: "An independent motel — decisions happen here, not at a head office.",
  },
  {
    icon: BadgeDollarSign,
    title: "Affordable by design",
    text: "Fair rates for travellers who'd rather spend on the island, not the room.",
  },
  {
    icon: MessagesSquare,
    title: "Talk to a person",
    text: "Email us and the people who actually run the motel write back.",
  },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-20">
        {/* visual */}
        <Reveal className="relative lg:col-span-5">
          <div className="relative mx-auto max-w-[480px]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-[0_40px_80px_-46px_rgba(13,43,38,0.55)] ring-1 ring-ink/10">
              <Image
                src={IMAGES.about}
                alt="Coconut palm against a bright Bahamian sky"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div
              className="absolute -left-5 -top-5 grid size-20 place-items-center rounded-full bg-sun text-ink shadow-lg sm:-left-8"
              aria-hidden="true"
            >
              <PalmMark className="size-9" />
            </div>
            <div className="absolute -bottom-8 -right-3 max-w-[240px] rounded-3xl bg-sea p-6 text-cream shadow-[0_28px_50px_-26px_rgba(14,92,79,0.8)] sm:-right-8">
              <p className="font-display text-lg italic leading-snug">
                “We keep things simple — so your trip stays affordable.”
              </p>
            </div>
          </div>
        </Reveal>

        {/* copy */}
        <div className="lg:col-span-7">
          <Reveal>
            <Eyebrow index="01" label="About Morris Motel" />
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display-tight mt-6 font-display text-4xl font-medium leading-[1.08] sm:text-5xl">
              A little motel with a{" "}
              <em className="font-light italic text-sea">straight answer</em>.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-7 max-w-2xl space-y-5 text-lg leading-relaxed text-ink/70">
              <p>
                Morris Motel has one job: give travellers a clean, comfortable
                and genuinely affordable place to sleep in Nassau. We're a
                small, independent, locally run motel on Davis Street — not a
                resort, and proud of it.
              </p>
              <p>
                Because we're small, everything is personal. You book by talking
                to us directly, you get honest answers about what's available
                and what it costs, and you get the kind of local tips that never
                make it into the brochures.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {VALUES.map((value, i) => (
              <Reveal key={value.title} delay={200 + i * 90}>
                <div className="group h-full rounded-3xl border hairline bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_50px_-32px_rgba(13,43,38,0.4)]">
                  <span className="grid size-12 place-items-center rounded-2xl bg-mint text-sea transition-colors duration-300 group-hover:bg-coral group-hover:text-cream">
                    <value.icon className="size-6" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">
                    {value.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
