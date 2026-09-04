import Image from "next/image";
import { CookingPot, Heart, Users, Wifi } from "lucide-react";
import Reveal from "@/components/reveal";
import { CONTACT } from "@/lib/site";

const FEATURES = [
  {
    icon: Users,
    text: "Each villa sleeps two adults — or a small family of four",
  },
  {
    icon: CookingPot,
    text: "Full kitchens made for slow mornings and long stays",
  },
  { icon: Wifi, text: "WiFi throughout, when you feel like checking in" },
  {
    icon: Heart,
    text: "Weddings & special occasions arranged with your hosts",
  },
];

const STATS = [
  { value: "05", unit: "min", label: "to Congo Town Airport" },
  { value: "06", unit: "min", label: "to Driggs Hill dock" },
  { value: "02–04", unit: "guests", label: "per private villa" },
  { value: "01", unit: "beach", label: "all to yourself" },
];

export default function Welcome() {
  return (
    <section
      id="welcome"
      className="relative overflow-hidden bg-shell py-24 md:py-36"
    >
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
          {/* Copy */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="kicker relative pl-[3.25rem] text-lagoon before:absolute before:left-0 before:top-1/2 before:h-px before:w-10 before:bg-current before:opacity-40">
                01 · Welcome to Blue Hole Villas
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 max-w-2xl font-display text-[clamp(2.4rem,4.6vw,4.25rem)] font-medium leading-[1.04] tracking-[-0.01em]">
                Barefoot days on the{" "}
                <em className="font-light italic text-lagoon">quiet side</em> of
                Andros
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <div className="mt-8 max-w-xl space-y-5 text-[1.02rem] leading-relaxed text-abyss/70">
                <p>
                  Tucked among coconut palms on the Queen’s Highway in Congo
                  Town, Blue Hole Villas is a small collection of individually
                  shaped island villas set on a secluded private beach — five
                  minutes from the airport, and a world away from everything
                  else.
                </p>
                <p>
                  Across the street, ancient blue holes sink into the pine
                  forest. Just offshore, a living reef keeps the shallows calm
                  and clear. Your days here are measured in tides, not
                  appointments — and your hosts are happy to arrange everything
                  from fly-fishing guides to a wedding barefoot in the sand.
                </p>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <ul className="mt-10 grid gap-4 sm:grid-cols-2">
                {FEATURES.map(({ icon: Icon, text }) => (
                  <li
                    key={text}
                    className="group flex items-start gap-4 rounded-2xl border border-abyss/10 bg-white/60 p-4 transition-colors duration-300 hover:border-lagoon/40 hover:bg-foam"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lagoon/10 text-lagoon transition-colors duration-300 group-hover:bg-lagoon group-hover:text-white">
                      <Icon className="h-[1.1rem] w-[1.1rem]" />
                    </span>
                    <span className="pt-1.5 text-[0.92rem] font-medium leading-snug text-abyss/80">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Imagery */}
          <div className="relative lg:col-span-5">
            <Reveal delay={120} className="relative ml-auto max-w-md">
              <div className="relative aspect-[3/4] overflow-hidden rounded-b-[1.75rem] rounded-t-full border-[10px] border-foam shadow-[0_40px_80px_-30px_rgba(6,38,46,0.35)]">
                <Image
                  src="https://images.unsplash.com/photo-1551632786-1f5b66f6d2f1?auto=format&fit=crop&w=1600&q=85"
                  alt="Serene sandy footpath winding through lush tropical coconut palm grove leading to pristine turquoise beach"
                  fill
                  sizes="(min-width: 1024px) 38vw, 90vw"
                  className="object-cover transition-transform duration-[1.8s] ease-out hover:scale-105"
                />
              </div>

              {/* Rotating badge */}
              <div className="absolute -right-8 top-6 hidden h-28 w-28 animate-spin-slow items-center justify-center rounded-full bg-abyss text-aqua sm:flex md:h-32 md:w-32">
                <svg
                  viewBox="0 0 100 100"
                  className="absolute inset-0 h-full w-full"
                >
                  <defs>
                    <path
                      id="badge-circle"
                      d="M 50,50 m -34,0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0"
                    />
                  </defs>
                  <text className="fill-aqua text-[9px] font-semibold uppercase tracking-[0.28em]">
                    <textPath href="#badge-circle">
                      South Andros · The Bahamas ·
                    </textPath>
                  </text>
                </svg>
                <span className="font-display text-2xl italic">Bh</span>
              </div>
            </Reveal>

            <Reveal
              delay={260}
              className="absolute -bottom-8 left-0 hidden w-52 rotate-[-6deg] rounded-2xl border-8 border-white object-cover shadow-xl sm:block md:w-60"
            >
              <Image
                src="https://images.unsplash.com/photo-1505142468610-359e7d316be0?auto=format&fit=crop&w=1600&q=85"
                alt="Breathtaking golden sunset reflecting off calm turquoise ocean water viewed from secluded private beach"
                width={480}
                height={360}
                className="w-full rounded-lg object-cover"
              />
            </Reveal>
          </div>
        </div>

        {/* Stats */}
        <Reveal delay={120}>
          <dl className="mt-24 grid grid-cols-2 gap-y-10 border-t border-abyss/10 pt-10 md:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dd className="font-display text-5xl font-light text-abyss md:text-6xl">
                  {stat.value}
                  <span className="ml-1 align-baseline text-xl italic text-coral">
                    {stat.unit}
                  </span>
                </dd>
                <dt className="mt-2 text-[0.8rem] font-medium uppercase tracking-[0.16em] text-abyss/50">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
