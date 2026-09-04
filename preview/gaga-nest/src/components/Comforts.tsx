import {
  BedDouble,
  CookingPot,
  HeartHandshake,
  Home,
  Sofa,
  Wifi,
} from "lucide-react";
import { SectionHeading } from "./ui";
import { Reveal } from "./Reveal";

const COMFORTS = [
  {
    icon: Wifi,
    title: "WiFi throughout",
    text: "Stay connected from your room, the porch, or wherever you settle in with a book.",
  },
  {
    icon: CookingPot,
    title: "A complete kitchen",
    text: "The suite’s full kitchen keeps breakfast unhurried and supper happily unplanned.",
  },
  {
    icon: Sofa,
    title: "A proper living room",
    text: "The suite’s own lounge — room to read, rest, and dream up tomorrow.",
  },
  {
    icon: BedDouble,
    title: "Three elegant rooms",
    text: "Five ranch-style units in all, each made up fresh and simply elegant for your arrival.",
  },
  {
    icon: Home,
    title: "Single-storey living",
    text: "True ranch style — no stairs, no fuss, everything on one easy island level.",
  },
  {
    icon: HeartHandshake,
    title: "Essentials, personally kept",
    text: "Basic amenities done properly — clean, working, and looked over by Kevin himself.",
  },
];

export default function Comforts() {
  return (
    <section id="comforts" className="relative py-24 sm:py-32 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="rounded-[2.5rem] border border-ink/10 bg-parchment/70 px-6 py-14 sm:px-12 sm:py-18 lg:px-16 lg:py-20">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <Reveal>
              <SectionHeading
                index="03"
                label="Comforts"
                title={
                  <>
                    Honest comforts,{" "}
                    <em className="text-coral">looked after with care</em>
                  </>
                }
              />
            </Reveal>
            <Reveal delay={0.1} className="lg:max-w-sm">
              <p className="text-[15px] leading-relaxed text-ink/65">
                Everything you need for an easy island stay — nothing you
                don’t. That’s the way a guesthouse ought to be.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {COMFORTS.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 0.08}>
                <div className="group flex h-full flex-col gap-4 border-t border-dashed border-ink/25 pt-6">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-ink text-flamingo transition-all duration-500 group-hover:scale-110 group-hover:bg-coral group-hover:text-cream">
                    <c.icon className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <h3 className="font-display text-2xl tracking-tight text-ink">
                    {c.title}
                  </h3>
                  <p className="text-[14.5px] leading-relaxed text-ink/65">
                    {c.text}
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
