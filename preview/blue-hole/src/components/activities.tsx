import Image from "next/image";
import { ArrowUpRight, Fish, Shell, Waves } from "lucide-react";
import Reveal from "@/components/reveal";

const ACTIVITIES = [
  {
    icon: Fish,
    tag: "Guides arranged",
    src: "/villa/21.jpg",
    alt: "Fly fisherman casting on glassy turquoise flats at golden hour",
    title: "Fly-Fishing",
    blurb:
      "South Andros is bonefish country — endless flats, tailing fish, and tides that set the day’s rhythm. We arrange fly-fishing trips with experienced local guides.",
  },
  {
    icon: Waves,
    tag: "By arrangement",
    src: "/villa/22.jpg",
    alt: "Modern kayaks gliding through pristine clear water and natural mangrove channels with white sand bottom",
    title: "Kayaking",
    blurb:
      "Slip into glassy creeks and mangrove channels where the water runs clear over white sand. Kayaking is available by arrangement, right from the property.",
  },
  {
    icon: Shell,
    tag: "Just offshore",
    src: "/villa/23.jpg",
    alt: "Snorkeler floating above coral and tropical fish",
    title: "Snorkeling & the Reef",
    blurb:
      "A living reef shelters our waters just offshore, keeping the shallows calm and full of life. Mask, fins, and you’re floating over coral minutes from your door.",
  },
];

export default function Activities() {
  return (
    <section id="activities" className="relative bg-sand py-24 md:py-36">
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <p className="kicker relative pl-[3.25rem] text-lagoon before:absolute before:left-0 before:top-1/2 before:h-px before:w-10 before:bg-current before:opacity-40">
                05 · Fishing · Kayaking · Snorkeling
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 max-w-xl font-display text-[clamp(2.4rem,4.6vw,4.25rem)] font-medium leading-[1.04]">
                Days measured{" "}
                <em className="font-light italic text-lagoon">in tides</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <p className="max-w-md text-[1.02rem] leading-relaxed text-abyss/70">
              Water sports of every kind belong to this coast. Tell us what you
              love, and your hosts will arrange the rest.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {ACTIVITIES.map(({ icon: Icon, tag, src, alt, title, blurb }, i) => (
            <Reveal key={title} delay={i * 110}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-abyss/10 bg-white shadow-[0_20px_50px_-30px_rgba(6,38,46,0.3)] transition-transform duration-500 hover:-translate-y-1.5">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-108"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-shell/85 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-abyss backdrop-blur-sm">
                    {tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-lagoon/10 text-lagoon">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-2xl font-medium text-abyss">
                      {title}
                    </h3>
                  </div>
                  <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-abyss/65">
                    {blurb}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140}>
          <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-[1.75rem] bg-abyss px-8 py-8 text-shell sm:flex-row sm:items-center md:px-12">
            <p className="max-w-xl text-[1.02rem] leading-relaxed text-shell/85">
              <span className="font-display italic text-aqua">
                Bonefishing at dawn, a reef before lunch, kayaking at golden
                hour
              </span>{" "}
              — one conversation with your hosts and it’s on the calendar.
            </p>
            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-sand px-7 py-3.5 text-sm font-semibold text-abyss transition-colors duration-300 hover:bg-aqua"
            >
              Ask about activities
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
