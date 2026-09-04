import Image from "next/image";
import { Footprints, Sunrise, Wind } from "lucide-react";
import { Reveal } from "./motion";
import { Italic, SectionHeading } from "./section-heading";

const MOMENTS = [
  {
    icon: Sunrise,
    title: "Slow mornings",
    text: "Sunrise over the Atlantic, coffee on the porch, nowhere to be.",
  },
  {
    icon: Footprints,
    title: "Empty beaches",
    text: "Long walks where the only footprints in the sand are your own.",
  },
  {
    icon: Wind,
    title: "Trade-wind evenings",
    text: "Dinner in from the kitchenette, then a sky full of stars.",
  },
];

export function IslandLife() {
  return (
    <section id="island" className="relative overflow-hidden py-24 md:py-36">
      <div className="mx-auto grid w-full max-w-[90rem] items-center gap-16 px-5 md:px-10 lg:grid-cols-2 lg:gap-24">
        <div>
          <SectionHeading
            index="04"
            eyebrow="Island Life"
            title={
              <>
                Crooked Island keeps
                <br />
                <Italic>its own time</Italic>
              </>
            }
          />
          <Reveal delay={0.2}>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-lagoon-950/70 md:text-lg">
              <p>
                This is the real Out Islands — no crowds, no schedules, no
                noise. Days stretch out between the palms and the shallows, and
                the island politely insists you slow down to meet it.
              </p>
              <p>
                The nearest restaurant sits about eight miles up the road, so
                evenings tend to be quiet ones: something simple from the
                kitchenette, the sound of the ocean, and a sunset that refuses
                to hurry. That&apos;s not a compromise here —{" "}
                <span className="font-semibold text-lagoon-950">
                  it&apos;s the whole point.
                </span>
              </p>
            </div>
          </Reveal>

          <div className="mt-10 space-y-0 divide-y divide-lagoon-950/10 border-y border-lagoon-950/10">
            {MOMENTS.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={0.15 + i * 0.08}>
                <div className="flex gap-5 py-6">
                  <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-lagoon-900 text-coral-400">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <div>
                    <h3 className="font-display text-xl text-lagoon-950">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-lagoon-950/65">
                      {text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="relative">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] sm:aspect-[3/3.4]">
              <Image
                src="/images/island-life.jpg"
                alt="A lone palm leaning over clear shallows on an empty Crooked Island beach"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover transition-transform duration-[1.6s] ease-out hover:scale-[1.04]"
              />
            </div>
          </Reveal>
          <Reveal delay={0.2} className="relative z-10 -mt-20 ml-auto w-[58%] sm:-mt-28">
            <div className="relative aspect-square overflow-hidden rounded-[1.4rem] border-[6px] border-sand-50 shadow-2xl shadow-lagoon-950/20">
              <Image
                src="/images/gallery-sunset.jpg"
                alt="Golden sunset over the ocean from the beach"
                fill
                sizes="(min-width: 1024px) 26vw, 58vw"
                className="object-cover"
              />
            </div>
            <p className="mt-4 text-right font-display text-lg italic text-lagoon-800/80">
              sundown, no filter required
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
