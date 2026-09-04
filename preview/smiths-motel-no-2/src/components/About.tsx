import Image from "next/image";
import { Heart, PiggyBank, Sparkles, Waves } from "lucide-react";
import Reveal from "./Reveal";

const VALUES = [
  {
    icon: Heart,
    title: "Friendly first",
    text: "A real Bahamian welcome, every single time you walk through the door.",
    tint: "bg-coral-soft text-coral-deep",
  },
  {
    icon: Sparkles,
    title: "Simple & modern",
    text: "Unfussy rooms and fresh, easy spaces — zero complications.",
    tint: "bg-lagoon-soft text-lagoon-deep",
  },
  {
    icon: PiggyBank,
    title: "Honestly affordable",
    text: "Fair, friendly rates that leave more in your pocket for the fun stuff.",
    tint: "bg-sun-soft text-ink",
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-sand pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-12 lg:gap-10">
        {/* Visuals */}
        <div className="relative lg:col-span-5">
          <Reveal>
            <div className="relative aspect-[4/5] w-full -rotate-[1.5deg] overflow-hidden rounded-[2.5rem] shadow-[0_35px_70px_-30px_rgba(14,58,52,0.45)]">
              <Image
                src="/images/veranda.jpg"
                alt="The coral arched doorway of Smith's Motel No. 2 with potted palms"
                fill
                sizes="(max-width: 1024px) 92vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="absolute -right-3 -bottom-10 size-36 overflow-hidden rounded-full border-8 border-sand shadow-lg md:size-44">
              <Image
                src="/images/detail.jpg"
                alt="Palm shadow on a coral wall with a brass room key"
                fill
                sizes="176px"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={220}>
            <span className="absolute top-6 -left-3 -rotate-6 rounded-full bg-sun px-4 py-2 text-sm font-bold text-ink shadow-md">
              Proudly independent
            </span>
          </Reveal>
        </div>

        {/* Copy */}
        <div className="lg:col-span-7 lg:pl-6">
          <Reveal>
            <p className="flex items-center gap-2 text-xs font-bold tracking-[0.22em] text-coral-deep uppercase">
              <Waves className="size-4" />
              About No. 2
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] font-semibold tracking-tight text-ink md:text-5xl">
              The second Smith&rsquo;s —{" "}
              <em className="text-lagoon-deep">with a spirit all its own.</em>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-7 max-w-2xl space-y-5 text-lg leading-relaxed text-ink/70">
              <p>
                Smith&rsquo;s Motel No. 2 is an independent motel in Nassau,
                Bahamas — the little sibling to Smith&rsquo;s Motel No. 1. Same
                family name, same friendly welcome, but its own corner of the
                island and its own laid-back rhythm.
              </p>
              <p>
                We keep island stays the way they should be: simple, modern and
                easy on the budget, with Caribbean colour in every corner and a
                genuine hello at the door.
              </p>
            </div>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-7 font-display text-xl text-ink italic md:text-2xl">
              One island. Two Smith&rsquo;s. Endless easygoing days.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {VALUES.map((value, i) => (
              <Reveal key={value.title} delay={120 * i}>
                <div className="h-full rounded-3xl border border-ink/5 bg-cream p-6 transition-transform duration-300 hover:-translate-y-1">
                  <span
                    className={`grid size-11 place-items-center rounded-full ${value.tint}`}
                  >
                    <value.icon className="size-5" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">
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
