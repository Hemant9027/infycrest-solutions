import Image from "next/image";
import { Home, Leaf, User, Waves } from "lucide-react";
import { Reveal } from "./motion";
import { Italic, SectionHeading } from "./section-heading";

const FEATURES = [
  { icon: Home, label: "Caribbean-style villas" },
  { icon: Waves, label: "Atlantic Ocean views" },
  { icon: Leaf, label: "A truly peaceful setting" },
];

const STATS = [
  { value: "55", unit: "ft", label: "from your doorstep to the ocean" },
  { value: "5", unit: "min", label: "from Crooked Island Airport" },
  { value: "8", unit: "mi", label: "to the nearest restaurant" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-36">
      <div className="mx-auto grid w-full max-w-[90rem] gap-16 px-5 md:px-10 lg:grid-cols-[1.05fr_1fr] lg:gap-24">
        <div className="relative">
          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <Image
                src="/images/villa-exterior.jpg"
                alt="Caribbean-style villa at Sonsette Villas surrounded by palms"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover transition-transform duration-[1.6s] ease-out hover:scale-[1.04]"
              />
            </div>
          </Reveal>
          <Reveal
            delay={0.2}
            className="absolute -right-3 -bottom-10 w-[52%] sm:right-8 lg:-right-10"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.4rem] border-[6px] border-sand-50 shadow-2xl shadow-lagoon-950/20">
              <Image
                src="/images/villa-living.jpg"
                alt="Villa living and dining area with kitchenette"
                fill
                sizes="(min-width: 1024px) 24vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal
            delay={0.35}
            className="absolute -top-6 -left-2 hidden md:block lg:-left-6"
          >
            <p className="flex items-center gap-3 rounded-full bg-lagoon-900 py-3 pr-6 pl-4 text-[10px] font-semibold tracking-[0.26em] uppercase text-sand-50 shadow-xl shadow-lagoon-950/25">
              <User className="h-4 w-4 text-coral-400" />
              Hosted by Ms. Alsette Deleveaux
            </p>
          </Reveal>
        </div>

        <div className="pt-6 lg:pt-14">
          <SectionHeading
            index="01"
            eyebrow="About Sonsette Villas"
            title={
              <>
                Barefoot calm,
                <br />
                <Italic>quietly kept</Italic>
              </>
            }
          />
          <Reveal delay={0.2}>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-lagoon-950/70 md:text-lg">
              <p>
                Sonsette Villas is a small collection of Caribbean-style villas
                set among the palms of Major&apos;s Cay, on Crooked Island — a
                quiet Out Island of The Bahamas where the loudest sound most
                evenings is the tide.
              </p>
              <p>
                Each villa rests roughly{" "}
                <span className="font-semibold text-lagoon-950">
                  55 feet from the Atlantic Ocean
                </span>
                , close enough to fall asleep to the swell and wake to horizon
                views with your morning coffee. Nothing here is rushed, and
                nothing is crowded.
              </p>
              <p>
                Your host, Ms. Alsette Deleveaux, keeps everything personal and
                simple — one call or one email, and your island plans begin.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <ul className="mt-9 flex flex-wrap gap-3">
              {FEATURES.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2.5 rounded-full border border-lagoon-950/10 bg-white/60 px-4 py-2.5 text-xs font-semibold tracking-[0.14em] uppercase text-lagoon-800"
                >
                  <Icon className="h-4 w-4 text-lagoon-500" strokeWidth={1.75} />
                  {label}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.3}>
            <dl className="mt-12 grid grid-cols-3 divide-x divide-lagoon-950/10 border-y border-lagoon-950/10">
              {STATS.map((stat) => (
                <div key={stat.label} className="px-4 py-6 first:pl-0 md:px-6">
                  <dt className="order-2 mt-2 block text-[11px] leading-snug tracking-[0.12em] uppercase text-lagoon-950/55">
                    {stat.label}
                  </dt>
                  <dd className="order-1 font-display text-4xl font-light text-lagoon-950 md:text-5xl">
                    {stat.value}
                    <span className="ml-1 align-baseline text-lg italic text-coral-500">
                      {stat.unit}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
