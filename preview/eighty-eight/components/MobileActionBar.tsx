"use client";

import { Phone, UtensilsCrossed, CalendarCheck } from "lucide-react";
import { restaurant } from "@/data/restaurant";
import { useReservation } from "./ReservationProvider";

export default function MobileActionBar() {
  const { openReservation } = useReservation();
  return (
    <nav
      className="md:hidden fixed bottom-0 inset-x-0 z-50 grid grid-cols-3 bg-ink/95 backdrop-blur border-t border-ivory/10"
      aria-label="Quick actions"
    >
      <a
        href={restaurant.phoneTel}
        className="flex flex-col items-center gap-1 py-3.5 text-ivory active:bg-ivory/5"
      >
        <Phone className="h-5 w-5" aria-hidden="true" />
        <span className="text-[10px] uppercase tracking-wide2">Call</span>
      </a>
      <a
        href="#menu"
        className="flex flex-col items-center gap-1 py-3.5 text-ivory active:bg-ivory/5 border-x border-ivory/10"
      >
        <UtensilsCrossed className="h-5 w-5" aria-hidden="true" />
        <span className="text-[10px] uppercase tracking-wide2">Menu</span>
      </a>
      <button
        onClick={openReservation}
        className="flex flex-col items-center gap-1 py-3.5 text-crimson active:bg-ivory/5"
      >
        <CalendarCheck className="h-5 w-5" aria-hidden="true" />
        <span className="text-[10px] uppercase tracking-wide2">Reserve</span>
      </button>
    </nav>
  );
}
