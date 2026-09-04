import { UtensilsCrossed, Shell, Flame } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const DISHES = [
  {
    icon: Shell,
    title: "Conch, every way",
    text: "Cracked, scorched, in salad with lime and pepper — the taste South Andros is famous for.",
  },
  {
    icon: UtensilsCrossed,
    title: "The day's catch",
    text: "Fish landed in the morning, on the table by night, with peas & rice and whatever the garden gave.",
  },
  {
    icon: Flame,
    title: "Fire & smoke",
    text: "Beach-grilled suppers when the evening is too good to eat indoors.",
  },
];

export default function Food() {
  return (
    <section id="food" className="scroll-mt-24 bg-paper py-24 sm:py-32">
      <div className="mx-auto grid max-w-[90rem] gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-24 lg:px-12">
        {/* Copy */}
        <div className="flex flex-col justify-center">
          <SectionHeading
            index="06"
            eyebrow="Local Food"
            title={
              <>
                Caught this morning,{" "}
                <em className="font-light text-pine">
                  on the table tonight
                </em>
              </>
            }
          />
          <Reveal
            delay={120}
            className="mt-8 space-y-5 text-[15px] leading-relaxed text-ink/75 sm:text-base"
          >
            <p>
              Island cooking doesn&rsquo;t need explaining — it needs a tide, a
              fire and someone who&rsquo;s been doing it their whole life.
              Meals are built around what came out of the water that day and
              seasoned the way Andros has always seasoned things.
          </p>
          </Reveal>

          <div className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
            {DISHES.map((d, i) => (
              <Reveal key={d.title} delay={160 + i * 90}>
                <div className="flex items-start gap-5 py-6">
                  <span className="mt-0.5 grid size-11 shrink-0 place-items-center rounded-full border border-brass/40 text-brass">
                    <d.icon className="size-5" strokeWidth={1.25} />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-medium text-ink">
                      {d.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink/65">
                      {d.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Images */}
        <div className="relative flex flex-col gap-4">
          <Reveal y={40}>
            <div className="frame-hairline overflow-hidden rounded-[4px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/beach-grill.jpg"
                alt="Fresh fish grilling over an open beach fire"
                className="h-[300px] w-full object-cover transition-transform duration-[1.6s] ease-out hover:scale-[1.03] sm:h-[380px]"
                loading="lazy"
              />
            </div>
            <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-ink/40">
              Lunch, the honest way
            </p>
          </Reveal>
          <Reveal y={50} delay={160} className="sm:ml-16">
            <div className="frame-hairline overflow-hidden rounded-[4px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/platter.jpg"
                alt="Island seafood platter with prawns, fish and sides"
                className="h-[260px] w-full object-cover transition-transform duration-[1.6s] ease-out hover:scale-[1.03] sm:h-[320px]"
                loading="lazy"
              />
            </div>
            <p className="mt-3 text-right text-[10px] uppercase tracking-[0.3em] text-ink/40">
              The table, set by the tide
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
