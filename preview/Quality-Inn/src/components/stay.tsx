import { ArrowRight, BedDouble, Compass, Martini, Phone, TreePalm, Waves } from "lucide-react";
import Image from "next/image";
import { Reveal, RevealScale } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

const comforts = [
  {
    icon: BedDouble,
    title: "Easygoing island stays",
    text: "Simple, comfortable accommodations on the Queen\u2019s Highway — everything arranged personally, nothing overcomplicated.",
  },
  {
    icon: TreePalm,
    title: "Wrapped in the Garden",
    text: "Wake up to the greenery that gave Staniard Creek its nickname, with birdsong for an alarm clock.",
  },
  {
    icon: Waves,
    title: "Minutes from the water",
    text: "Beaches, shallows and creeks are an easy reach away — ask us where the sand is softest today.",
  },
  {
    icon: Martini,
    title: "Evenings at the Bar & Lounge",
    text: "After the sun goes down, the Bar & Lounge is right downstairs with a cold drink waiting.",
  },
];

export function Stay() {
  return (
    <section id="stay" className="relative overflow-hidden bg-sand-100 py-24 sm:py-32">
      <div className="container-site grid items-start gap-14 lg:grid-cols-12">
        {/* Imagery */}
        <div className="relative order-2 lg:order-1 lg:col-span-6">
          <RevealScale>
            <div className="relative aspect-[4/4.6] overflow-hidden rounded-[2rem] shadow-soft sm:aspect-[4/4]">
              <Image
                src="/images/stay.jpg"
                alt="A bright, airy guest room at Quality Inn with linen, rattan and palm views"
                fill
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
          </RevealScale>

          <Reveal delay={0.2} className="relative z-10 mx-auto -mt-16 w-[86%] sm:mx-0 sm:ml-auto sm:-mt-20 sm:w-72">
            <div className="rounded-[1.5rem] border-4 border-sand-100 shadow-card">
              <Image
                src="/images/gallery-flats.jpg"
                alt="Golden light over the shallow flats of Andros"
                width={560}
                height={400}
                className="h-40 w-full rounded-[1.15rem] object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="absolute -top-5 left-5 z-10 flex items-center gap-3 rounded-full bg-pine-950 py-2.5 pr-6 pl-3 text-sand-50 shadow-soft">
              <span className="grid size-8 place-items-center rounded-full bg-lagoon-600">
                <Compass className="size-4" strokeWidth={1.8} />
              </span>
              <span className="text-[0.7rem] font-semibold tracking-[0.22em] uppercase">
                Your base for the outdoors
              </span>
            </div>
          </Reveal>
        </div>

        {/* Copy */}
        <div className="order-1 lg:order-2 lg:col-span-6 lg:pl-6">
          <SectionHeading
            index="02"
            eyebrow="Stay With Us"
            title={
              <>
                Simple comforts, <em className="text-lagoon-600">honest</em> island hospitality
              </>
            }
            description="Quality Inn keeps things refreshingly uncomplicated — a relaxed place to rest between days on the water, run with the kind of personal care big resorts forgot long ago."
          />

          <div className="mt-10 space-y-2">
            {comforts.map((item, i) => (
              <Reveal key={item.title} delay={0.08 + i * 0.07}>
                <div className="group flex items-start gap-4 rounded-2xl p-4 transition-colors duration-300 hover:bg-white/70 sm:gap-5 sm:p-5">
                  <span className="mt-0.5 grid size-11 shrink-0 place-items-center rounded-full border border-pine-950/10 bg-sand-50 text-pine-900 transition-all duration-300 group-hover:border-lagoon-500 group-hover:bg-lagoon-600 group-hover:text-sand-50">
                    <item.icon className="size-4.5" strokeWidth={1.5} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-normal text-pine-950 sm:text-xl">{item.title}</h3>
                    <p className="mt-1 max-w-md text-[0.925rem] leading-relaxed text-pine-900/65">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="mt-10 rounded-2xl bg-pine-950 p-6 text-sand-50 shadow-soft sm:p-7">
              <p className="text-[0.68rem] font-semibold tracking-[0.3em] text-tide-300 uppercase">
                Every stay is arranged personally
              </p>
              <p className="mt-2.5 text-[0.95rem] leading-relaxed text-sand-50/75">
                Call or email the hotel and {site.contact.host} will help you plan the details — availability,
                timing, and how to make the most of Staniard Creek.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-copper-400 px-6 py-3 text-[0.75rem] font-semibold tracking-[0.14em] text-pine-950 uppercase transition-all duration-300 hover:-translate-y-0.5 hover:bg-copper-300"
                >
                  Plan Your Stay
                  <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </a>
                <a
                  href={site.contact.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full border border-sand-50/25 px-6 py-3 text-[0.75rem] font-semibold tracking-[0.14em] text-sand-50 uppercase transition-colors duration-300 hover:bg-sand-50/10"
                >
                  <Phone className="size-3.5" />
                  {site.contact.phoneDisplay}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
