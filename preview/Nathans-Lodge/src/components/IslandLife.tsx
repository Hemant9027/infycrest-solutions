import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const CHIPS = [
  "Sandy lanes",
  "Conch shacks",
  "Handwoven baskets",
  "Sunset porches",
  "Small settlements",
  "Front-yard smokes",
  "Domino afternoons",
  "Church-bell Sundays",
];

export default function IslandLife() {
  return (
    <section
      id="island-life"
      className="scroll-mt-24 overflow-hidden bg-shell py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.15fr] lg:gap-24">
          {/* Copy */}
          <div className="flex flex-col justify-center">
            <SectionHeading
              index="03"
              eyebrow="Island Life"
              title={
                <>
                  The island sets{" "}
                  <em className="font-light text-pine">the pace</em>
                </>
              }
            />
            <Reveal
              delay={120}
              className="mt-8 space-y-5 text-[15px] leading-relaxed text-ink/75 sm:text-base"
            >
              <p>
                South Andros is the Out Islands at their most honest —
                scattered settlements, hand-painted signs, and people who wave
                because that&rsquo;s simply what you do. Conch is cracked a few
                steps from the sea, baskets are woven by hand, and evenings end
                when the light gives out.
              </p>
              <p>
                Borrow the rhythm: cycle the sandy lanes, stop where the smoke
                smells good, and let a stranger become the best part of your
                afternoon. This is island life you&rsquo;re invited into — not
                performed for you.
              </p>
            </Reveal>

            <Reveal delay={200} className="mt-9 flex flex-wrap gap-2.5">
              {CHIPS.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-ink/15 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/60 transition-colors hover:border-brass/60 hover:text-pine"
                >
                  {chip}
                </span>
              ))}
            </Reveal>
          </div>

          {/* Collage */}
          <div className="relative grid grid-cols-12 gap-4">
            <Reveal className="col-span-7" y={40}>
              <div className="frame-hairline overflow-hidden rounded-[4px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/island-palms.jpg"
                  alt="Palm-lined tropical beach under a clear sky"
                  className="h-[340px] w-full object-cover transition-transform duration-[1.6s] ease-out hover:scale-[1.03] sm:h-[460px]"
                  loading="lazy"
                />
              </div>
            </Reveal>
            <Reveal className="col-span-5 self-end" y={60} delay={140}>
              <div className="frame-hairline overflow-hidden rounded-[4px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/hut.jpg"
                  alt="Traditional thatched-roof island hut under a blue sky"
                  className="h-[220px] w-full object-cover transition-transform duration-[1.6s] ease-out hover:scale-[1.03] sm:h-[300px]"
                  loading="lazy"
                />
              </div>
            </Reveal>
            <Reveal
              className="col-span-9 col-start-3 -mt-4 sm:-mt-10"
              y={50}
              delay={220}
            >
              <div className="frame-hairline overflow-hidden rounded-[4px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/boardwalk.jpg"
                  alt="Wooden boardwalk leading toward calm turquoise ocean"
                  className="h-[240px] w-full object-cover transition-transform duration-[1.6s] ease-out hover:scale-[1.03] sm:h-[300px]"
                  loading="lazy"
                />
              </div>
              <p className="mt-3 text-right text-[10px] uppercase tracking-[0.3em] text-ink/40">
                Out this way, the day gets better
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
