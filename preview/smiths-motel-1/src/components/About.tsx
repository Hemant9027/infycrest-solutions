import Image from "next/image";
import { HeartHandshake, House, Mail, MapPin, Quote } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import { ABOUT_IMAGES, BUSINESS } from "@/data/site";

const VALUES = [
  { icon: House, label: "Independent motel" },
  { icon: MapPin, label: "Nassau, New Providence" },
  { icon: Mail, label: "Direct contact, always" },
  { icon: HeartHandshake, label: "Warm Bahamian welcome" },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-20 sm:py-28">
      {/* Decorative palm ghost */}
      <svg
        viewBox="0 0 24 24"
        aria-hidden
        className="pointer-events-none absolute -right-16 top-10 h-72 w-72 rotate-12 text-sea/10"
      >
        <path
          fill="currentColor"
          d="M13.75 6.48C13.9 4.66 14.75 2.5 16.6 2c.34-.1.34-.55.02-.67-1.76-.66-3.7.08-4.86 1.5-.38-1.9-1.5-3.3-3.5-3.6-.36-.05-.6.4-.36.7 1.1 1.4 1.75 3 1.9 4.5C7.1 3.7 4.5 4.1 2.9 5.9c-.28.32-.03.8.4.76 2-.18 3.9.1 5.35 1.15-2.8.3-5 1.9-6 4.6-.18.5.3.95.8.8 2.3-.69 4.5-.85 6.15-.4.35 1.3.5 2.95.4 4.6-.1 1.8-.4 3.5-.9 5.1-.13.4.14.82.56.82h4.4c.42 0 .7-.42.56-.82-.55-1.75-.9-3.7-.95-5.6-.05-1.5.1-3 .4-4.4 1.6-.5 3.8-.4 6.1.3.5.15.97-.33.8-.82-1-2.75-3.2-4.35-6.05-4.65 1.46-1.1 3.4-1.4 5.42-1.2.43.04.68-.47.4-.78-1.7-1.85-4.35-2.2-7.04-1.1Z"
        />
      </svg>

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        {/* Images */}
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-[2rem] shadow-soft">
            <Image
              src={ABOUT_IMAGES.main}
              alt="Tall palms under a clear Bahamian sky"
              width={1000}
              height={1250}
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div className="floaty absolute -right-3 -bottom-8 w-40 rotate-6 rounded-2xl bg-parchment p-2 shadow-lift sm:-right-8 sm:w-52">
            <Image
              src={ABOUT_IMAGES.small}
              alt="Coconuts growing on a palm tree"
              width={700}
              height={520}
              sizes="(max-width: 640px) 160px, 208px"
              className="aspect-[4/3] w-full rounded-xl object-cover"
            />
            <p className="px-1 pt-2 pb-1 text-center font-display text-xs text-ink-3 italic sm:text-sm">
              everyday island life
            </p>
          </div>

          <div className="absolute -top-5 -left-3 flex items-center gap-3 rounded-2xl bg-parchment px-4 py-3 shadow-card ring-1 ring-line sm:-left-6">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-sea-soft">
              <House className="h-4.5 w-4.5 text-sea" aria-hidden />
            </span>
            <div className="leading-tight">
              <p className="text-xs font-bold text-ink">Independent</p>
              <p className="text-[11px] font-semibold text-ink-3">
                family-run feel, not a chain
              </p>
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <div className="flex flex-col items-start gap-6">
          <SectionHead
            align="left"
            eyebrow={`About ${BUSINESS.name}`}
            title={
              <>
                A small Nassau motel with a{" "}
                <span className="text-sea italic">warm island</span> welcome
              </>
            }
          />

          <Reveal delay={120}>
            <p className="text-base leading-relaxed text-ink-3 sm:text-lg">
              {BUSINESS.name} is an independent motel in Nassau, on the island
              of New Providence. We keep things straightforward: comfortable,
              affordable accommodation and the kind of personal attention that
              only a small, locally run property can offer.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-base leading-relaxed text-ink-3 sm:text-lg">
              There&rsquo;s no call centre here and no booking bots. When you
              reach out, you deal directly with us — from your first question
              to the day you check out.
            </p>
          </Reveal>

          <Reveal delay={280}>
            <blockquote className="flex gap-4 rounded-3xl border border-line bg-parchment p-6 shadow-card">
              <Quote
                className="h-7 w-7 shrink-0 rotate-180 text-coral"
                aria-hidden
              />
              <p className="font-display text-lg leading-snug text-ink italic sm:text-xl">
                When you write to us, you&rsquo;re writing to the people who
                will welcome you at the door.
              </p>
            </blockquote>
          </Reveal>

          <Reveal delay={360}>
            <ul className="flex flex-wrap gap-2.5">
              {VALUES.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2 rounded-full border border-line bg-parchment px-4 py-2 text-xs font-bold text-ink-2 shadow-sm sm:text-sm"
                >
                  <Icon className="h-4 w-4 text-sea" aria-hidden />
                  {label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
