"use client";

import { motion } from "framer-motion";
import { Check, Coffee, MoonStar, Sunrise, Wifi } from "lucide-react";
import Image from "next/image";
import { Eyebrow, Reveal } from "@/components/motion-primitives";
import { AMENITIES, IMG } from "@/lib/site";

const PILLARS = [
  {
    icon: Sunrise,
    title: "Harbour mornings",
    copy: "The sun comes up over Elizabeth Harbour, and so will you — gladly.",
  },
  {
    icon: Coffee,
    title: "Dining, on foot",
    copy: "A restaurant and café sit within easy walking distance of your door.",
  },
  {
    icon: MoonStar,
    title: "Genuinely quiet",
    copy: "Non-smoking rooms, trade-wind evenings, and stars by the hundreds.",
  },
  {
    icon: Wifi,
    title: "Easily connected",
    copy: "WiFi and TV in every room, when you feel like the mainland after all.",
  },
];

export function GuestExperience() {
  return (
    <section
      id="experience"
      className="relative scroll-mt-24 overflow-hidden bg-abyss-950 py-24 sm:py-32"
    >
      <div className="grain absolute inset-0" />
      <div
        className="pointer-events-none absolute top-0 right-0 h-[36rem] w-[36rem] rounded-full bg-lagoon-500/10 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
        <div className="grid items-start gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          {/* Copy + pillars */}
          <div>
            <Reveal>
              <Eyebrow tone="light">The Guest Experience</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display mt-4 max-w-xl text-4xl leading-[1.05] font-medium text-balance text-sand-50 sm:text-5xl lg:text-[3.4rem]">
                Days shaped by
                <span className="italic text-lagoon-300"> tide & light</span>,
                not schedules.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-sand-50/70">
                There is no lobby fuss here. You arrive, you exhale, and the
                island takes over. Breakfast is wherever the breeze leads you;
                adventures are arranged with a phone call and a smile; evenings
                end with the harbour turning gold.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {PILLARS.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group rounded-3xl border border-sand-50/10 bg-sand-50/[0.04] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-lagoon-400/35 hover:bg-sand-50/[0.07]"
                >
                  <span className="grid size-11 place-items-center rounded-2xl bg-lagoon-500/15 text-lagoon-300 transition-colors duration-300 group-hover:bg-lagoon-500/25">
                    <pillar.icon className="size-5" strokeWidth={1.7} />
                  </span>
                  <h3 className="font-display mt-4 text-xl text-sand-50">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-sand-50/60">
                    {pillar.copy}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Imagery + checklist */}
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2rem] shadow-[0_50px_100px_-40px_rgba(0,0,0,0.8)]">
                <div className="relative aspect-[4/5] sm:aspect-[5/5]">
                  <Image
                    src="/villa/26.jpg"
                    alt="Serene wooden pier extending over calm turquoise Caribbean waters at magical golden hour dusk"
                    fill
                    sizes="(min-width: 1024px) 40vw, 92vw"
                    placeholder="blur"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-abyss-950/70 via-transparent to-transparent" />
                  <p className="font-display absolute bottom-6 left-7 max-w-[16rem] text-2xl leading-snug text-sand-50 italic">
                    “Hurry” is not a word we use around here.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-5 rounded-[2rem] border border-sand-50/10 bg-sand-50/[0.04] p-7 backdrop-blur-sm">
                <h3 className="text-[11px] font-bold tracking-[0.28em] text-lagoon-300 uppercase">
                  In every stay
                </h3>
                <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                  {AMENITIES.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-sand-50/80"
                    >
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-lagoon-400"
                        strokeWidth={2.5}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
