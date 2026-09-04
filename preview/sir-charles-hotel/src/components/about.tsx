import Image from "next/image";
import { HeartHandshake, Palmtree, Sparkles } from "lucide-react";
import Reveal from "./reveal";
import { Eyebrow } from "./ui";
import { IMG } from "@/lib/images";

const VALUES = [
  {
    icon: Palmtree,
    title: "Classic island hospitality",
    copy: "Warm, personal and unhurried — the way the Bahamas has always welcomed travellers.",
  },
  {
    icon: Sparkles,
    title: "Modern boutique ease",
    copy: "Clean lines, considered details and a calm, contemporary finish throughout.",
  },
  {
    icon: HeartHandshake,
    title: "Independently owned",
    copy: "No chain, no script — every stay is looked after by people who call this island home.",
  },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-ivory py-24 sm:py-32">
      <div className="mx-auto grid w-full max-w-[1400px] gap-14 px-6 sm:px-10 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <Reveal>
            <Eyebrow index="01" label="About Sir Charles Hotel" />
          </Reveal>
          <Reveal delay={90}>
            <h2 className="mt-7 font-display text-[2.6rem] font-light leading-[1.04] sm:text-6xl">
              An independent spirit,
              <span className="block italic text-sea">a Bahamian soul.</span>
            </h2>
          </Reveal>
          <Reveal delay={170}>
            <p className="mt-8 max-w-md text-base leading-relaxed text-ink/70">
              Sir Charles Hotel is an independent island hotel in Nassau — shaped by the easy grace of
              classic Bahamian hospitality and finished with a modern, boutique sensibility.
            </p>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink/70">
              Days here move at the island&apos;s pace: mornings in soft light, afternoons in palm shade,
              evenings that stretch a little longer than planned. This is Nassau as it should feel —
              personal, warm, and quietly elegant.
            </p>
          </Reveal>

          <div className="mt-12">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <div className="group flex items-start gap-5 border-t border-ink/10 py-6 last:border-b">
                  <span className="mt-0.5 grid size-11 shrink-0 place-items-center rounded-full border border-sea/25 bg-sea/5 text-sea transition-colors duration-500 group-hover:bg-sea group-hover:text-ivory">
                    <v.icon className="size-[18px]" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl">{v.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{v.copy}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="relative lg:col-span-7">
          <Reveal variant="clip" delay={120} className="lg:pl-10">
            <div className="relative aspect-[4/4.6] overflow-hidden rounded-t-[260px] rounded-b-3xl sm:aspect-[4/4.2]">
              <Image
                src={IMG.aboutMain.src}
                alt={IMG.aboutMain.alt}
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" />
            </div>
          </Reveal>

          <Reveal delay={320} className="relative z-10 -mt-20 ml-4 w-44 sm:-mt-28 sm:ml-0 sm:w-60">
            <div className="overflow-hidden rounded-2xl border-[6px] border-ivory shadow-soft">
              <Image
                src={IMG.aboutAccent.src}
                alt={IMG.aboutAccent.alt}
                width={480}
                height={648}
                className="h-auto w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={380}>
            <p className="mt-8 max-w-xs text-[11px] font-medium uppercase leading-relaxed tracking-[0.28em] text-ink/45 lg:ml-auto lg:pl-10">
              Pastel streets, sea breezes &amp; island light — Nassau, New Providence
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
