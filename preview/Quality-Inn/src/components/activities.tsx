import { ArrowUpRight, Binoculars, Droplets, Fish, FishingRod, Kayak, Umbrella } from "lucide-react";
import Image from "next/image";
import { Reveal, RevealScale } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const activities = [
  {
    icon: Umbrella,
    title: "Beach days",
    text: "Long, quiet stretches of pale sand and clear shallows — often with no one else in sight.",
  },
  {
    icon: Fish,
    title: "Snorkelling & diving",
    text: "Drift over coral gardens along the barrier reef, in water so clear it barely seems real.",
  },
  {
    icon: FishingRod,
    title: "Fishing the flats",
    text: "Bonefish on endless golden flats — the kind of water anglers dream about for years.",
  },
  {
    icon: Kayak,
    title: "Kayaking the creeks",
    text: "Slip along glassy tidal creeks under mangrove shade, with turtles and rays for company.",
  },
  {
    icon: Droplets,
    title: "Blue-hole adventures",
    text: "Seek out Andros’ famous blue holes — deep sapphire circles hidden in the pines.",
  },
  {
    icon: Binoculars,
    title: "Birding & nature walks",
    text: "Orchids, iguanas and rare island birds in what may be the Bahamas’ greenest corner.",
  },
];

export function Activities() {
  return (
    <section id="activities" className="relative overflow-hidden bg-sand-100 py-24 sm:py-32">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            index="05"
            eyebrow="Beaches & Outdoor Activities"
            title={
              <>
                Out here, the day <em className="text-lagoon-600">plans itself</em>
              </>
            }
            description="Quality Inn puts beaches and outdoor adventure within easy reach — whether your perfect day is a towel on the sand or a paddle on the creek."
          />
          <Reveal delay={0.2} className="hidden lg:block">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-pine-950/20 px-6 py-3.5 text-[0.72rem] font-semibold tracking-[0.16em] text-pine-950 uppercase transition-all duration-300 hover:border-pine-950 hover:bg-pine-950 hover:text-sand-50"
            >
              Start Planning
              <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          {/* Anchor image */}
          <RevealScale className="lg:col-span-5">
            <figure className="group relative h-80 overflow-hidden rounded-[2rem] shadow-soft lg:h-full lg:min-h-[38rem]">
              <Image
                src="/images/beach.jpg"
                alt="A quiet North Andros beach with pale sand, turquoise shallows and a kayak at the waterline"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pine-950/70 via-transparent to-transparent" />
              <figcaption className="absolute right-6 bottom-6 left-6 text-sand-50">
                <p className="font-display text-2xl leading-tight font-light italic sm:text-3xl">
                  Your nearest beach? Closer than you’d think.
                </p>
                <p className="mt-2 max-w-xs text-[0.85rem] leading-relaxed text-sand-50/75">
                  From the hotel, sand, shallows and creeks are all an easy reach away.
                </p>
              </figcaption>
            </figure>
          </RevealScale>

          {/* Cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {activities.map((activity, i) => (
              <Reveal key={activity.title} delay={0.06 + i * 0.06} className="h-full">
                <article className="group flex h-full flex-col rounded-[1.5rem] border border-pine-950/8 bg-white/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-lagoon-500/30 hover:bg-white hover:shadow-card">
                  <span className="grid size-11 place-items-center rounded-full bg-pine-900 text-sand-50 transition-colors duration-300 group-hover:bg-lagoon-600">
                    <activity.icon className="size-4.5" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-4 font-display text-xl font-normal text-pine-950">{activity.title}</h3>
                  <p className="mt-2 text-[0.9rem] leading-relaxed text-pine-900/65">{activity.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
