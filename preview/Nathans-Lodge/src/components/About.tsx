import { Sun, Footprints, Clock } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const TRUTHS = [
  {
    icon: Sun,
    label: "First light",
    detail: "Sets the schedule",
  },
  {
    icon: Footprints,
    label: "Footwear",
    detail: "Entirely optional",
  },
  {
    icon: Clock,
    label: "Rush hour",
    detail: "Doesn\u2019t exist here",
  },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-shell py-24 sm:py-32">
      <div className="mx-auto grid max-w-[90rem] gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-24 lg:px-12">
        {/* Copy side */}
        <div className="flex flex-col justify-center">
          <SectionHeading
            index="01"
            eyebrow="The Lodge"
            title={
              <>
                A slower way to spend{" "}
                <em className="font-light text-pine">your days</em>
              </>
            }
          />
          <Reveal delay={120} className="mt-8 space-y-5 text-[15px] leading-relaxed text-ink/75 sm:text-base">
            <p>
              Nathan&rsquo;s Lodge sits on the quiet side of South Andros — an
              island of pine forest, hidden blue holes and water in more shades
              of blue than you can name. It is a place kept simple on purpose:
              an authentic island escape for travelers who would rather wade a
              flat at sunrise than queue for anything.
            </p>
            <p>
              Days here run on tide and sunlight. Coffee as the sky turns
              brass, sand between your toes by noon, long suppers and longer
              conversations after dark. No schedule is handed to you — the
              island suggests one, gently.
            </p>
          </Reveal>

          <Reveal delay={220} className="mt-10">
            <div className="grid grid-cols-3 divide-x divide-ink/10 border-y border-ink/10">
              {TRUTHS.map((t) => (
                <div key={t.label} className="px-4 py-6 text-center sm:px-6">
                  <t.icon
                    className="mx-auto size-5 text-brass"
                    strokeWidth={1.25}
                  />
                  <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.25em] text-ink/50">
                    {t.label}
                  </p>
                  <p className="mt-1 font-display text-sm italic text-pine sm:text-base">
                    {t.detail}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={300} className="mt-10">
            <a
              href="#stay"
              className="link-draw inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.28em] text-pine"
            >
              See how you&rsquo;ll stay <span aria-hidden>→</span>
            </a>
          </Reveal>
        </div>

        {/* Image composition */}
        <div className="relative">
          <Reveal className="relative" y={40}>
            <div className="frame-hairline overflow-hidden rounded-[4px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/lodge.jpg"
                alt="Rustic island building with kayaks resting against palm trees"
                className="h-[420px] w-full object-cover transition-transform duration-[1.6s] ease-out hover:scale-[1.03] sm:h-[540px] lg:h-[620px]"
                loading="lazy"
              />
            </div>
            <span className="mt-3 block text-right text-[10px] uppercase tracking-[0.3em] text-ink/40">
              The shore, most mornings
            </span>
          </Reveal>

          <Reveal
            delay={180}
            className="absolute -bottom-10 -left-4 hidden w-[42%] sm:block lg:-left-12"
            y={50}
          >
            <div className="frame-hairline overflow-hidden rounded-[4px] bg-paper p-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/island-palms.jpg"
                alt="Palm trees leaning over an empty tropical beach"
                className="h-52 w-full rounded-[2px] object-cover lg:h-64"
                loading="lazy"
              />
            </div>
          </Reveal>

          {/* Vertical side note */}
          <span className="writing-vertical absolute -right-2 top-8 hidden text-[10px] font-semibold uppercase tracking-[0.4em] text-ink/30 lg:block">
            An authentic island escape
          </span>
        </div>
      </div>
    </section>
  );
}
