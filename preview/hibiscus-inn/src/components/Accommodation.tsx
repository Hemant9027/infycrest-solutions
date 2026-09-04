import { ArrowRight, Heart, User, Users } from "lucide-react";
import Hibiscus from "@/components/Hibiscus";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { IMG } from "@/lib/images";

const STAYS = [
  {
    icon: User,
    title: "Just you",
    copy: "A quiet corner to call your own between the beach and town.",
  },
  {
    icon: Heart,
    title: "The two of you",
    copy: "Easygoing spaces made for slow mornings and late returns.",
  },
  {
    icon: Users,
    title: "Bringing the crew",
    copy: "Room to spread out, regroup and plan tomorrow's adventure together.",
  },
];

export default function Accommodation() {
  return (
    <section
      id="accommodation"
      className="relative scroll-mt-24 bg-white py-24 md:py-36"
    >
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            eyebrow="Accommodation"
            title={
              <>
                Rooms made for{" "}
                <em className="italic text-sea-600">easy island living</em>
              </>
            }
            lede="We keep things simple: a comfortable bed, space to unpack and unwind, and windows that let the island light in. Tell us who's coming, and we'll help you find the cosiest fit."
          />
          <Reveal
            delay={0.2}
            className="hidden max-w-xs border-l-2 border-hibiscus-300 pl-5 text-sm leading-relaxed text-ink/60 lg:block"
          >
            Room details are always shared personally when you enquire — every
            stay here is a little different.
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          {STAYS.map((stay, i) => (
            <Reveal key={stay.title} delay={i * 0.12}>
              <article className="group">
                <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-sand-100">
                  <img
                    src={IMG.rooms[i].src}
                    alt={IMG.rooms[i].alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
                  />
                  <span className="absolute left-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-sand-50/90 text-hibiscus-500 shadow-sm backdrop-blur transition-colors duration-300 group-hover:bg-hibiscus-500 group-hover:text-white">
                    <stay.icon className="h-5 w-5" />
                  </span>
                </div>
                <h3 className="mt-7 font-display text-2xl tracking-tight text-ink">
                  {stay.title}
                </h3>
                <p className="mt-2 max-w-xs text-[0.95rem] leading-relaxed text-ink/65">
                  {stay.copy}
                </p>
                <a
                  href="#contact"
                  className="group/link mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sea-700"
                >
                  <span className="link-underline">Ask about this stay</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-16">
          <div className="flex flex-wrap items-center justify-center gap-3 rounded-3xl bg-sand-100/80 px-8 py-6 text-center text-[0.95rem] leading-relaxed text-ink/70">
            <Hibiscus className="h-5 w-5 shrink-0 text-hibiscus-400" />
            <span>
              Not sure what fits? Send us your dates and who&apos;s travelling
              — we&apos;ll suggest the cosiest option and write back personally.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
