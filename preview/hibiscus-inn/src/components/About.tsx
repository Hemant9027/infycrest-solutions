import { ArrowUpRight, Compass, HeartHandshake, Palmtree } from "lucide-react";
import Hibiscus from "@/components/Hibiscus";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { IMG } from "@/lib/images";

const VALUES = [
  {
    icon: Palmtree,
    title: "An easygoing base",
    copy: "Quiet corners, salty air and no schedule but yours.",
  },
  {
    icon: HeartHandshake,
    title: "Hospitality that remembers your name",
    copy: "Small by design, so every stay gets real, personal attention.",
  },
  {
    icon: Compass,
    title: "Do Nassau like a local",
    copy: "We happily share the beaches, bites and back roads we love.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 overflow-hidden bg-sand-50 py-24 md:py-36">
      <Hibiscus className="pointer-events-none absolute -right-20 top-8 h-72 w-72 animate-spin-slow text-sand-200/80" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-16 px-6 md:px-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="About the inn"
            title={
              <>
                Simple stays,{" "}
                <em className="italic text-sea-600">genuine island warmth</em>
              </>
            }
            lede="Hibiscus Inn is a small guest house in Nassau for travellers who prefer something personal over something polished — a comfortable bed, a friendly face and room to breathe."
          />

          <Reveal delay={0.1} className="mt-5">
            <p className="max-w-xl leading-relaxed text-ink/70">
              Days here are shaped around you. Sleep in or rise with the sun,
              wander down to the water, ask us where the locals eat. It&apos;s
              an easy base for exploring New Providence entirely at your own
              pace.
            </p>
          </Reveal>

          <div className="mt-11 space-y-7">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={0.12 + i * 0.08}>
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-sea-100 text-sea-700">
                    <v.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl tracking-tight text-ink">
                      {v.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink/65">
                      {v.copy}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4} className="mt-11">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 font-semibold text-hibiscus-600"
            >
              <span className="link-underline">Come say hello</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.2} className="relative mx-auto w-full max-w-md lg:ml-auto lg:max-w-lg">
            <div className="relative aspect-[3/4] overflow-hidden rounded-b-[2.5rem] rounded-t-[999px] shadow-2xl shadow-sea-950/15 ring-1 ring-sea-900/10">
              <img
                src={IMG.about.src}
                alt={IMG.about.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.6s] ease-out hover:scale-105"
              />
            </div>

            <div className="absolute -bottom-10 -left-4 w-40 -rotate-6 animate-float sm:-left-14 sm:w-52">
              <div className="overflow-hidden rounded-2xl border-[6px] border-sand-50 bg-sand-50 shadow-xl shadow-sea-950/20">
                <img
                  src={IMG.aboutInset.src}
                  alt={IMG.aboutInset.alt}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
                <p className="px-3 py-2 text-center text-[0.65rem] font-medium uppercase tracking-[0.2em] text-ink/55">
                  Where the hibiscus grow
                </p>
              </div>
            </div>

            <span className="absolute -right-3 top-12 rotate-3 rounded-full bg-sea-800 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-sand-100 shadow-lg sm:-right-6">
              Home base for island days
            </span>

            <Hibiscus className="absolute -top-8 right-6 h-16 w-16 text-hibiscus-400/90" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
