import Image from "next/image";
import {
  ArrowRight,
  BedDouble,
  CalendarCheck,
  Mail,
  Sun,
  Wallet,
} from "lucide-react";
import Reveal from "./Reveal";
import { SITE } from "@/lib/site";

const PERKS = [
  {
    icon: BedDouble,
    title: "Rest easy",
    text: "Comfortable, uncluttered rooms made for good sleep after long island days.",
  },
  {
    icon: Sun,
    title: "Made for the tropics",
    text: "Breezy, light-filled spaces with that warm, colourful Caribbean feel.",
  },
  {
    icon: Wallet,
    title: "Friendly prices",
    text: "Independent means flexible — we keep our rates fair, simple and honest.",
  },
];

const ROOM_IMAGES = [
  {
    src: "/images/room-calm.jpg",
    alt: "A calm, cosy room at Smith's Motel No. 2 with a teal accent wall",
    caption: "Soft & calm",
  },
  {
    src: "/images/courtyard.jpg",
    alt: "The sunny courtyard at Smith's Motel No. 2 with palms and a bench",
    caption: "Sunny corners",
  },
];

export default function Accommodation() {
  return (
    <section
      id="rooms"
      className="relative z-10 -mt-8 scroll-mt-24 rounded-t-[2.5rem] bg-cream pt-20 pb-24 md:rounded-t-[3.5rem] md:pt-28 md:pb-32"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-3xl">
          <Reveal>
            <p className="flex items-center gap-2 text-xs font-bold tracking-[0.22em] text-coral-deep uppercase">
              <BedDouble className="size-4" />
              Accommodation
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] font-semibold tracking-tight text-ink md:text-5xl">
              Simple rooms, <em className="text-coral">done right.</em>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-6 text-lg leading-relaxed text-ink/70">
              At No. 2, a good stay is a simple one — a fresh, comfortable room
              with modern touches, wrapped in easy Caribbean charm and priced
              the friendly way. Tell us your dates and we&rsquo;ll match you
              with the right room for your trip.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Images */}
          <div className="space-y-6 lg:col-span-7">
            <Reveal>
              <figure className="group relative aspect-[16/11] overflow-hidden rounded-[2rem]">
                <Image
                  src="/images/room-bright.jpg"
                  alt="A bright, modern room at Smith's Motel No. 2 with turquoise and coral accents"
                  fill
                  sizes="(max-width: 1024px) 92vw, 55vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <figcaption className="absolute bottom-4 left-4 rounded-full bg-cream/90 px-4 py-2 text-sm font-bold text-ink backdrop-blur">
                  Bright & breezy
                </figcaption>
              </figure>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2">
              {ROOM_IMAGES.map((room, i) => (
                <Reveal key={room.src} delay={120 * i}>
                  <figure className="group relative aspect-[4/3] overflow-hidden rounded-[2rem]">
                    <Image
                      src={room.src}
                      alt={room.alt}
                      fill
                      sizes="(max-width: 640px) 92vw, 27vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <figcaption className="absolute bottom-4 left-4 rounded-full bg-cream/90 px-4 py-2 text-sm font-bold text-ink backdrop-blur">
                      {room.caption}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Perks + CTA */}
          <div className="flex flex-col gap-4 lg:col-span-5">
            {PERKS.map((perk, i) => (
              <Reveal key={perk.title} delay={100 * i}>
                <div className="flex items-start gap-5 rounded-3xl border border-ink/5 bg-sand p-6 transition-transform duration-300 hover:-translate-y-1 md:p-7">
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-lagoon-soft text-lagoon-deep">
                    <perk.icon className="size-5.5" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-ink">
                      {perk.title}
                    </h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-ink/60">
                      {perk.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={320}>
              <div className="mt-2 rounded-3xl bg-ink p-7 text-sand md:p-8">
                <h3 className="font-display text-2xl font-semibold">
                  Find your dates
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-sand/70">
                  Send us your travel dates and we&rsquo;ll come back with
                  availability and our best rate — no fuss, no pressure.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <a
                    href="#booking"
                    className="group inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3.5 font-bold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-coral-deep"
                  >
                    <CalendarCheck className="size-4.5" />
                    Check Availability
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                  <a
                    href={SITE.mailto}
                    className="inline-flex items-center gap-2 text-sm font-bold text-sand/80 underline decoration-coral decoration-2 underline-offset-4 transition-colors hover:text-coral"
                  >
                    <Mail className="size-4" />
                    or email us
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
