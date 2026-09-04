import { BedDouble, Wind, MoonStar, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const NOTES = [
  {
    icon: BedDouble,
    title: "Kept simple",
    text: "Timber, linen and light — rooms that feel part of the island rather than sealed off from it.",
  },
  {
    icon: Wind,
    title: "Ocean air",
    text: "Windows that open to the breeze, and mornings that start with the sound of water.",
  },
  {
    icon: MoonStar,
    title: "Proper quiet",
    text: "Nights dark enough for real stars and still enough to hear the tide turn.",
  },
];

export default function Accommodation() {
  return (
    <section id="stay" className="scroll-mt-24 bg-paper py-24 sm:py-32">
      <div className="mx-auto grid max-w-[90rem] gap-16 px-5 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:gap-24 lg:px-12">
        {/* Image */}
        <Reveal className="relative order-2 lg:order-1" y={40}>
          <div className="frame-hairline overflow-hidden rounded-[4px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/room.jpg"
              alt="Rustic wooden bedroom dressed in white linen with soft natural light"
              className="h-[420px] w-full object-cover transition-transform duration-[1.6s] ease-out hover:scale-[1.03] sm:h-[560px] lg:h-full lg:min-h-[640px]"
              loading="lazy"
            />
          </div>
          <div className="absolute bottom-6 left-6 rounded-full bg-paper/90 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.28em] text-pine backdrop-blur-sm">
            Nothing fussy — everything you need
          </div>
        </Reveal>

        {/* Copy */}
        <div className="order-1 flex flex-col justify-center lg:order-2">
          <SectionHeading
            index="02"
            eyebrow="Stay"
            title={
              <>
                Rooms made for{" "}
                <em className="font-light text-pine">ocean air</em>
              </>
            }
          />
          <Reveal delay={120} className="mt-8 space-y-5 text-[15px] leading-relaxed text-ink/75 sm:text-base">
            <p>
              The lodge keeps its rooms the way the island keeps its beaches —
              unhurried and unbuttoned. Expect rustic comfort with a light
              touch: somewhere cool to rest between the flats and the table,
              with character in the wood grain.
            </p>
            <p>
              Every stay is arranged directly with us, so tell us how you like
              to travel and we&rsquo;ll shape the rest around it.
            </p>
          </Reveal>

          <div className="mt-10 space-y-0 divide-y divide-ink/10 border-y border-ink/10">
            {NOTES.map((n, i) => (
              <Reveal key={n.title} delay={160 + i * 90}>
                <div className="flex items-start gap-5 py-6">
                  <span className="mt-0.5 grid size-11 shrink-0 place-items-center rounded-full border border-brass/40 text-brass">
                    <n.icon className="size-5" strokeWidth={1.25} />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-medium text-ink">
                      {n.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink/65">
                      {n.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={420} className="mt-10">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-deep px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.24em] text-shell transition-colors duration-300 hover:bg-brass hover:text-deep"
            >
              Plan Your Stay
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
