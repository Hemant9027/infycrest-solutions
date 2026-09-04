import { Binoculars, Martini, Quote, TreePalm, Waves } from "lucide-react";
import Image from "next/image";
import { Reveal, RevealScale } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

const pillars = [
  { icon: TreePalm, title: "The Garden of Andros", text: "Staniard Creek’s lush, green character" },
  { icon: Waves, title: "Beaches, nearby", text: "Easy access to sand and shallows" },
  { icon: Binoculars, title: "Outdoors at your door", text: "Adventure in every direction" },
  { icon: Martini, title: "Bar & Lounge", text: "Cold drinks, easy evenings" },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32 lg:py-36">
      {/* oversized background word */}
      <span aria-hidden="true" className="text-hollow-dark pointer-events-none absolute -top-4 left-0 font-display text-[22vw] leading-none font-light tracking-tight uppercase whitespace-nowrap select-none">
        Garden
      </span>

      <div className="container-site relative grid gap-16 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <SectionHeading
            index="01"
            eyebrow="About Quality Inn"
            title={
              <>
                A slow, easy stay in the <em className="text-lagoon-600">green heart</em> of Andros
              </>
            }
          />

          <Reveal delay={0.2}>
            <div className="mt-7 space-y-5 text-base leading-relaxed text-pine-900/75 sm:text-lg">
              <p>
                They call Staniard Creek <strong className="font-semibold text-pine-950">&ldquo;The Garden of
                Andros&rdquo;</strong> — the lushest, greenest corner of an island famous for wild beauty. {site.name} sits
                right on the Queen&rsquo;s Highway in the middle of it, wrapped in palms, birdsong and sea air.
              </p>
              <p>
                This is the Andros that travellers dream about and rarely find: unhurried, authentic and personal.
                Days here run on island time — a morning on the water, a long lunch in the shade, an evening drink at
                the Bar&nbsp;&amp;&nbsp;Lounge as the light turns gold.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.28}>
            <figure className="mt-9 border-l-2 border-copper-400 pl-6">
              <Quote className="mb-3 size-5 text-copper-400" strokeWidth={1.5} />
              <blockquote className="font-display text-xl leading-snug font-light italic text-pine-900 sm:text-2xl">
                Come as a guest. Leave as family — that&rsquo;s how we&rsquo;ve always done it.
              </blockquote>
              <figcaption className="mt-4 text-[0.7rem] font-semibold tracking-[0.28em] text-pine-900/55 uppercase">
                {site.contact.host} — Your host at {site.name}
              </figcaption>
            </figure>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={0.1 + i * 0.07}>
                <div className="group flex h-full items-start gap-3.5 rounded-2xl border border-pine-950/8 bg-white/60 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-lagoon-500/30 hover:bg-white hover:shadow-card">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-pine-900 text-sand-50 transition-colors duration-300 group-hover:bg-lagoon-600">
                    <pillar.icon className="size-4.5" strokeWidth={1.5} />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-pine-950">{pillar.title}</span>
                    <span className="mt-0.5 block text-[0.825rem] leading-snug text-pine-900/60">{pillar.text}</span>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Imagery */}
        <div className="relative lg:col-span-7">
          <RevealScale className="relative z-10 lg:ml-16">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-soft sm:aspect-[5/5.5]">
              <Image
                src="/images/about.jpg"
                alt="Palms and tropical gardens surrounding the hotel at Quality Inn, Staniard Creek"
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
          </RevealScale>

          <Reveal delay={0.25} className="relative z-20 -mt-20 ml-auto w-64 sm:-mt-28 sm:w-80 lg:mr-2">
            <div className="overflow-hidden rounded-[1.5rem] border-4 border-sand-50 shadow-card">
              <Image
                src="/images/gallery-palms.jpg"
                alt="A sandy path through tall coconut palms in the garden"
                width={640}
                height={480}
                className="h-44 w-full object-cover sm:h-56"
              />
            </div>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="absolute top-6 right-4 z-20 max-w-[13rem] rounded-2xl bg-pine-950/90 p-5 text-sand-50 shadow-soft backdrop-blur-md sm:right-8">
              <p className="text-[0.62rem] font-semibold tracking-[0.3em] text-tide-300 uppercase">Local name</p>
              <p className="mt-2 font-display text-xl leading-tight font-light italic">
                &ldquo;The Garden of Andros&rdquo;
              </p>
              <p className="mt-2 text-xs leading-relaxed text-sand-50/65">
                How islanders describe Staniard Creek — and the view from your window.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
