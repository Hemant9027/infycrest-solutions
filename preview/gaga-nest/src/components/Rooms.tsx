import Image from "next/image";
import { ArrowUpRight, BedDouble, CookingPot, Heart, Sofa, Wifi } from "lucide-react";
import { SectionHeading } from "./ui";
import { Reveal } from "./Reveal";
import Link from "next/link";

function RoomCard({
  image,
  badge,
  title,
  blurb,
  chips,
  ratio = "aspect-[4/3]",
}: {
  image: string;
  badge: string;
  title: string;
  blurb: string;
  chips: { icon: React.ReactNode; label: string }[];
  ratio?: string;
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-ink/10 bg-cream shadow-[0_24px_60px_-30px_rgb(22_48_42/0.3)] transition-transform duration-500 hover:-translate-y-1.5">
      <div className={`relative ${ratio} overflow-hidden`}>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/25 to-transparent opacity-60" />
        <span className="absolute left-5 top-5 rounded-full bg-bone/90 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-ink backdrop-blur-sm">
          {badge}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-7 sm:p-9">
        <h3 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
          {title}
        </h3>
        <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink/70">
          {blurb}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {chips.map((c) => (
            <span
              key={c.label}
              className="inline-flex items-center gap-1.5 rounded-full bg-parchment px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-ink/70"
            >
              <span className="text-coral">{c.icon}</span>
              {c.label}
            </span>
          ))}
        </div>
        <Link
          href="#contact"
          className="mt-8 inline-flex items-center gap-2 self-start border-b-2 border-coral pb-1 text-[13px] font-bold uppercase tracking-[0.14em] text-ink transition-colors hover:text-coral"
        >
          Contact Gaga’s Nest
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}

export default function Rooms() {
  return (
    <section id="rooms" className="relative py-24 sm:py-32 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              index="02"
              label="Rooms & Suite"
              title={
                <>
                  Simple, elegant rooms —{" "}
                  <em className="text-coral">kept like home</em>
                </>
              }
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:max-w-sm">
            <p className="text-[15px] leading-relaxed text-ink/65">
              Three elegant rooms, no two mornings alike. Two of the rooms
              join together as a full suite when you’d rather spread out and
              stay a while.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-10">
          <Reveal delay={0.05}>
            <RoomCard
              image="/img/room.jpg"
              badge="Three rooms"
              title="The Elegant Rooms"
              blurb="Freshly made beds, soft light through the louvres, and the essentials done right. Cool, quiet, and simply elegant — made for slow island mornings and early island nights."
              chips={[
                { icon: <BedDouble className="h-3.5 w-3.5" />, label: "Three rooms" },
                { icon: <Wifi className="h-3.5 w-3.5" />, label: "WiFi" },
                { icon: <Heart className="h-3.5 w-3.5" />, label: "Everyday essentials" },
              ]}
            />
          </Reveal>
          <Reveal delay={0.15}>
            <RoomCard
              image="/img/suite-living.jpg"
              badge="Two rooms, one suite"
              title="The Suite"
              blurb="Two of the rooms open into a private suite of your own — a complete kitchen for unhurried breakfasts and a proper living room for long, barefoot evenings. Cook in, stretch out, stay a while."
              chips={[
                { icon: <CookingPot className="h-3.5 w-3.5" />, label: "Complete kitchen" },
                { icon: <Sofa className="h-3.5 w-3.5" />, label: "Living room" },
                { icon: <Wifi className="h-3.5 w-3.5" />, label: "WiFi" },
              ]}
            />
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col items-start gap-3 rounded-3xl border border-dashed border-ink/25 bg-parchment/60 px-7 py-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[15px] leading-relaxed text-ink/75">
              <span className="font-display text-lg italic text-coral">
                No booking engines here.{" "}
              </span>
              For rates and availability, just call or write — Kevin answers
              personally.
            </p>
            <a
              href="tel:+12423391666"
              className="shrink-0 text-[13px] font-bold uppercase tracking-[0.14em] text-ink underline underline-offset-4 hover:text-coral"
            >
              +1 (242) 339-1666
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
