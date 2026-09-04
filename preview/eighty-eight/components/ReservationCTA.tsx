"use client";

import Reveal from "./Reveal";
import Button from "./Button";
import { restaurant } from "@/data/restaurant";
import { useReservation } from "./ReservationProvider";

export default function ReservationCTA() {
  const { openReservation } = useReservation();
  return (
    <section id="reserve" className="relative py-28 sm:py-40 overflow-hidden grain">
      <img
        src="/images/hero.jpg"
        alt="An elegant table set for an evening at Eighty Eight"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/70" />
      <div className="absolute inset-0 bg-vermilion/15 mix-blend-overlay" />

      <div className="relative z-10 mx-auto max-w-shell px-5 sm:px-8 text-center">
        <Reveal>
          <p className="eyebrow text-[11px] font-semibold text-gold tracking-wide3">Eighty Eight · Moka</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl tracking-tight text-ivory leading-[0.98]">
            Your table
            <br />
            is <em className="not-italic text-gold">waiting</em>
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 text-lg text-stonewarm max-w-xl mx-auto leading-relaxed">
            Gather your favourite people and make an evening of it.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" onClick={openReservation} arrow>
              Reserve a table
            </Button>
            <Button variant="outline" size="lg" href={restaurant.phoneTel}>
              <PhoneLabel />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function PhoneLabel() {
  return <span>Call +230 468 8288</span>;
}
