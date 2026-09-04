"use client";

import { MapPin, Phone, Navigation } from "lucide-react";
import Reveal from "./Reveal";
import Button from "./Button";
import { restaurant } from "@/data/restaurant";

export default function Location() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurant.mapQuery)}`;

  return (
    <section id="visit" className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-shell px-5 sm:px-8">
        <div className="text-center">
          <Reveal>
            <p className="eyebrow text-[11px] font-semibold text-gold tracking-wide3">Visit us</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ivory">
              Come find us
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid lg:grid-cols-12 gap-4 sm:gap-6 items-stretch">
          {/* Info card */}
          <div className="lg:col-span-5">
            <Reveal className="h-full">
              <div className="h-full bg-ember border border-ivory/10 rounded-sm p-9 sm:p-11 flex flex-col justify-center">
                <p className="eyebrow text-[10px] text-gold tracking-wide3">{restaurant.nameMark}</p>
                <h3 className="mt-3 font-display text-3xl sm:text-4xl text-ivory">Chinese Restaurant</h3>
                <div className="gold-rule w-16 my-7" aria-hidden="true" />

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-gold mt-0.5 shrink-0" aria-hidden="true" />
                    <div>
                      <p className="text-lg text-ivory">{restaurant.location}</p>
                      <p className="text-sm text-stonewarm mt-0.5">{restaurant.area}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-5 w-5 text-gold mt-0.5 shrink-0" aria-hidden="true" />
                    <div>
                      <a href={restaurant.phoneTel} className="text-lg text-ivory hover:text-gold transition-colors">
                        {restaurant.phoneDisplay}
                      </a>
                      <p className="text-sm text-stonewarm mt-0.5">Call or WhatsApp for reservations</p>
                    </div>
                  </div>
                </div>

                <div className="mt-9 flex flex-col sm:flex-row gap-3">
                  <Button variant="gold" size="md" external href={mapsUrl} arrow>
                    <Navigation className="h-4 w-4" aria-hidden="true" /> Get directions
                  </Button>
                  <Button variant="outline" size="md" href={restaurant.phoneTel}>
                    <Phone className="h-4 w-4" aria-hidden="true" /> Call us
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Map */}
          <div className="lg:col-span-7">
            <Reveal delay={0.12} className="h-full">
              <div className="relative h-[320px] sm:h-full min-h-[360px] overflow-hidden rounded-sm border border-ivory/10">
                <iframe
                  title="Map to Eighty Eight Chinese Restaurant, Moka, Mauritius"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(restaurant.mapQuery)}&output=embed`}
                  className="absolute inset-0 w-full h-full border-0 grayscale-[0.3] contrast-[1.05]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-ivory/10 rounded-sm" aria-hidden="true" />
                <div className="absolute bottom-4 left-4 bg-ink/90 backdrop-blur border border-ivory/10 rounded-sm px-4 py-3 pointer-events-none">
                  <p className="eyebrow text-[9px] text-gold">{restaurant.location}</p>
                  <p className="text-sm text-ivory mt-0.5">{restaurant.name} · {restaurant.area}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
