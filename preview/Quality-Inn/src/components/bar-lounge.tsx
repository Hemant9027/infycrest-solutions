import { ArrowUpRight, Moon, Sun, Users } from "lucide-react";
import Image from "next/image";
import { Reveal, RevealScale } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const moments = [
  {
    icon: Sun,
    title: "Golden-hour drinks",
    text: "Watch the light turn to amber over the tops of the palms, cold glass in hand.",
  },
  {
    icon: Users,
    title: "Stories at the bar",
    text: "Locals and travellers trading fish tales, island lore and tomorrow\u2019s plans.",
  },
  {
    icon: Moon,
    title: "Slow island nights",
    text: "No noise, no rush — just warm air, good company and the hum of the Garden.",
  },
];

export function BarLounge() {
  return (
    <section id="bar-lounge" className="relative overflow-hidden bg-pine-950 py-24 text-sand-50 sm:py-32">
      {/* glows */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 -left-40 size-[34rem] rounded-full bg-lagoon-600/25 blur-[120px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 -bottom-40 size-[34rem] rounded-full bg-copper-500/20 blur-[120px]" />

      <div className="container-site relative grid items-center gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading
            tone="light"
            index="03"
            eyebrow="Bar & Lounge"
            title={
              <>
                The <em className="text-copper-300">social heart</em> of the house
              </>
            }
            description="Every great island stay needs somewhere to end the day. At Quality Inn, that’s the Bar & Lounge — where the evening begins unhurried and ends whenever the conversation does."
          />

          <div className="mt-10 space-y-1 border-t border-sand-50/10">
            {moments.map((moment, i) => (
              <Reveal key={moment.title} delay={0.1 + i * 0.08}>
                <div className="group flex items-start gap-4 border-b border-sand-50/10 py-5 transition-colors hover:bg-sand-50/[0.03]">
                  <span className="mt-1 grid size-10 shrink-0 place-items-center rounded-full border border-sand-50/15 text-copper-300 transition-all duration-300 group-hover:border-copper-300">
                    <moment.icon className="size-4.5" strokeWidth={1.5} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-normal sm:text-xl">{moment.title}</h3>
                    <p className="mt-1 text-[0.925rem] leading-relaxed text-sand-50/60">{moment.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <a
              href="#contact"
              className="group mt-9 inline-flex items-center gap-2 text-[0.8rem] font-semibold tracking-[0.18em] text-tide-300 uppercase transition-colors hover:text-copper-300"
            >
              Plan Your Stay
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>

        <div className="relative lg:col-span-7">
          <RevealScale>
            <div className="relative overflow-hidden rounded-[2rem] shadow-soft">
              <div className="relative aspect-[4/3.2] sm:aspect-[16/10.5]">
                <Image
                  src="/images/bar.jpg"
                  alt="The warm glow of the Bar & Lounge at Quality Inn as evening falls"
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-pine-950/60 via-transparent to-transparent" />
              <div className="absolute right-5 bottom-5 left-5 flex flex-wrap items-end justify-between gap-4 sm:right-8 sm:bottom-7 sm:left-8">
                <div>
                  <p className="text-[0.62rem] font-semibold tracking-[0.32em] text-tide-300 uppercase">On site, every evening</p>
                  <p className="mt-1.5 font-display text-2xl font-light italic sm:text-3xl">Pull up a stool.</p>
                </div>
                <p className="max-w-[15rem] text-right text-[0.8rem] leading-relaxed text-sand-50/70">
                  Cold drinks, warm light, and the best seat in Staniard Creek.
                </p>
              </div>
            </div>
          </RevealScale>
        </div>
      </div>
    </section>
  );
}
