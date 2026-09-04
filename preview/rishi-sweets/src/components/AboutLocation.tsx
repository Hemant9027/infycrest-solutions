import {
  Accessibility,
  CalendarHeart,
  Car,
  Clock,
  MapPin,
  MessageCircle,
  MoveUpRight,
  Navigation,
  Phone,
  Star,
} from "lucide-react";
import { IMG, serviceChips, site, STOCK, tel, wa, WHATSAPP_DEFAULT_MSG } from "../data/site";
import { Reveal, SectionHead, Tilt } from "./ui";
import { useOpenStatus } from "../hooks/useFx";
import { cn } from "../utils/cn";

/* ------------------------------- About ------------------------------ */

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* collage */}
          <Reveal className="relative">
            <div className="relative mx-auto max-w-[34rem]">
              <Tilt max={4}>
                <div className="relative overflow-hidden rounded-[2rem] depth-shadow">
                  <img
                    src={IMG.ambience}
                    alt="The warm family dining floor at Rishi Sweets"
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/4.6] w-full object-cover sm:aspect-[4/3.6]"
                  />
                </div>
              </Tilt>
              <div className="absolute -right-3 -bottom-8 w-40 rotate-3 rounded-2xl border-4 border-ivory-50 object-cover shadow-[0_24px_50px_-18px_rgba(51,8,15,0.5)] sm:-right-8 sm:w-52">
                <img
                  src={STOCK.sweetCraft}
                  alt="Sweets being shaped by hand"
                  loading="lazy"
                  decoding="async"
                  className="aspect-square w-full rounded-xl object-cover"
                />
              </div>
              <div className="absolute -top-5 -left-3 -rotate-6 rounded-2xl bg-maroon-800 px-5 py-4 text-ivory-50 shadow-xl sm:-left-6">
                <p className="flex items-center gap-2 font-display text-3xl font-bold">
                  <CalendarHeart size={20} className="text-gold-300" /> 2017
                </p>
                <p className="mt-0.5 text-[9px] font-bold tracking-[0.26em] text-ivory-200/80 uppercase">
                  Established
                </p>
              </div>
            </div>
          </Reveal>

          {/* copy */}
          <div>
            <SectionHead
              align="left"
              index="11"
              eyebrow="Our Story"
              title={
                <>
                  Serving Muzaffarnagar <span className="gold-grad-text italic">Since 2017</span>
                </>
              }
            />
            <Reveal delay={0.1}>
              <div className="mt-7 space-y-5 text-[15px] leading-relaxed text-ink-700">
                <p>
                  Since 2017, Rishi Sweets has been part of everyday life around Prakash Chowk —
                  the sweet box picked up on the way home, the dosa shared at a family table, the
                  cake cut at a hundred birthdays.
                </p>
                <p>
                  What makes the address unusual is the range under one roof: a fresh mithai
                  counter, a working bakery with cakes and pastries, and a family restaurant serving
                  North Indian, South Indian, Mughlai and multicuisine plates — from thalis and
                  biryani to pav bhaji and honey chilli potato.
                </p>
                <p>
                  Dine in on the calm restaurant floor, grab a quick bite on the go, take a parcel
                  home or ask about delivery. For big days, the team caters weddings, functions and
                  corporate events — with listed capacity for 1,000+ guests, and a party hall
                  on-site for smaller gatherings.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-wrap gap-2">
                {serviceChips.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-ink-900/10 bg-ivory-50 px-4 py-2 text-[10.5px] font-bold tracking-[0.14em] text-ink-700 uppercase"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-wrap items-center gap-8 border-t border-dashed border-ink-900/15 pt-7">
                <div>
                  <p className="font-display text-3xl font-bold text-ink-900">9+</p>
                  <p className="text-[10px] font-bold tracking-[0.22em] text-ink-500 uppercase">Years serving</p>
                </div>
                <div>
                  <p className="flex items-center gap-1.5 font-display text-3xl font-bold text-ink-900">
                    {site.rating.toFixed(1)} <Star size={16} className="fill-gold-500 text-gold-500" />
                  </p>
                  <p className="text-[10px] font-bold tracking-[0.22em] text-ink-500 uppercase">Public rating</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-bold text-ink-900">{site.cateringCapacity}</p>
                  <p className="text-[10px] font-bold tracking-[0.22em] text-ink-500 uppercase">Catering capacity</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------- Location + Hours ------------------------- */

export function LocationSection() {
  const isOpen = useOpenStatus();

  return (
    <section id="contact" className="relative scroll-mt-24 bg-ivory-200/50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          index="12"
          eyebrow="Visit Us"
          title={
            <>
              Find <span className="gold-grad-text italic">Rishi Sweets</span>
            </>
          }
          sub="Right by Prakash Chowk — easy to reach, easy to park, and open every single day."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-12">
          {/* info card */}
          <Reveal className="lg:col-span-5">
            <div className="flex h-full flex-col rounded-[2rem] border border-gold-500/25 bg-ivory-50 p-7 soft-shadow md:p-9">
              <div className="flex items-start justify-between gap-4">
                <p className="flex items-center gap-2 text-[10.5px] font-bold tracking-[0.26em] text-maroon-700 uppercase">
                  <MapPin size={14} /> Address
                </p>
                <span
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[10px] font-bold tracking-[0.18em] uppercase",
                    isOpen ? "bg-green-800/10 text-green-800" : "bg-maroon-800/10 text-maroon-800"
                  )}
                  role="status"
                >
                  <span className={cn("h-2 w-2 animate-pulse rounded-full", isOpen ? "bg-green-600" : "bg-maroon-600")} />
                  {isOpen ? "Open Now" : "Closed"}
                </span>
              </div>

              <address className="mt-4 font-display text-2xl leading-snug font-semibold text-ink-900 not-italic md:text-[1.7rem]">
                {site.addressLines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </address>
              <span className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-saffron-100 px-3.5 py-1.5 text-[10.5px] font-bold tracking-[0.16em] text-saffron-600 uppercase">
                <Navigation size={11} /> Landmark: {site.landmark}
              </span>

              {/* hours */}
              <div className="mt-7 rounded-2xl border border-ink-900/8 bg-ivory-100 p-5">
                <p className="flex items-center gap-2 text-[10.5px] font-bold tracking-[0.26em] text-ink-700 uppercase">
                  <Clock size={13} className="text-gold-600" /> Opening Hours
                </p>
                <div className="mt-3 flex items-center justify-between border-b border-dashed border-ink-900/10 pb-3">
                  <span className="text-[13.5px] font-semibold text-ink-900">Monday – Sunday</span>
                  <span className="text-[13.5px] font-bold text-maroon-700 tabular-nums">
                    {site.hours.open} – {site.hours.close}
                  </span>
                </div>
                <p className="mt-3 text-[12px] text-ink-500">
                  {isOpen
                    ? `Kitchen and counters are open — closes ${site.hours.close} today.`
                    : `Currently closed — opens at ${site.hours.open}.`}
                </p>
              </div>

              {/* actions */}
              <div className="mt-7 grid grid-cols-2 gap-3">
                <a
                  href={site.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-maroon-800 py-3.5 text-[11px] font-bold tracking-[0.14em] text-ivory-50 uppercase transition-colors hover:bg-maroon-700"
                >
                  <Navigation size={14} /> Get Directions
                </a>
                <a
                  href={tel}
                  className="flex items-center justify-center gap-2 rounded-full border border-maroon-800/30 py-3.5 text-[11px] font-bold tracking-[0.14em] text-maroon-800 uppercase transition-colors hover:bg-maroon-800 hover:text-ivory-50"
                >
                  <Phone size={14} /> Call
                </a>
                <a
                  href={wa(WHATSAPP_DEFAULT_MSG)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full border border-maroon-800/30 py-3.5 text-[11px] font-bold tracking-[0.14em] text-maroon-800 uppercase transition-colors hover:bg-maroon-800 hover:text-ivory-50"
                >
                  <MessageCircle size={14} /> WhatsApp
                </a>
                <a
                  href={wa("Hi Rishi Sweets, is home delivery available at my location?")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full border border-maroon-800/30 py-3.5 text-[11px] font-bold tracking-[0.14em] text-maroon-800 uppercase transition-colors hover:bg-maroon-800 hover:text-ivory-50"
                >
                  <MessageCircle size={14} /> Delivery?
                </a>
              </div>

              {/* amenities */}
              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2.5 border-t border-dashed border-ink-900/12 pt-5">
                {[
                  { icon: Car, label: "Parking" },
                  { icon: MoveUpRight, label: "Drive-through" },
                  { icon: Accessibility, label: "Wheelchair-accessible entrance" },
                  { icon: Accessibility, label: "Accessible parking" },
                ].map((a) => (
                  <span key={a.label} className="flex items-center gap-1.5 text-[11.5px] font-semibold text-ink-700">
                    <a.icon size={13} className="text-gold-600" /> {a.label}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* map */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="group relative h-full min-h-[420px] overflow-hidden rounded-[2rem] border border-gold-500/25 depth-shadow">
              <iframe
                title="Map — Rishi Sweets, near Prakash Chowk, Muzaffarnagar"
                src={site.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
              <div className="pointer-events-none absolute inset-x-5 bottom-5 flex items-center justify-between gap-3 rounded-2xl border border-gold-500/25 bg-ivory-50/92 p-4 backdrop-blur-md sm:inset-x-6">
                <div className="min-w-0">
                  <p className="truncate font-display text-lg font-semibold text-ink-900">Rishi Sweets</p>
                  <p className="truncate text-[11.5px] text-ink-500">
                    Near Prakash Chowk, South Civil Lines, Muzaffarnagar
                  </p>
                </div>
                <a
                  href={site.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pointer-events-auto inline-flex shrink-0 items-center gap-1.5 rounded-full bg-maroon-800 px-4 py-2.5 text-[10px] font-bold tracking-[0.14em] text-ivory-50 uppercase transition-colors hover:bg-maroon-700"
                >
                  Open in Maps <MoveUpRight size={12} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
