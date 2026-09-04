"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { dispatchPrebook } from "./prebook";

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

function plusDays(iso: string, days: number) {
  const d = new Date(`${iso}T12:00:00`);
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

const fieldLabel = "mb-1 block text-[10px] font-bold uppercase tracking-[0.24em] text-ink-soft";
const fieldInput =
  "w-full bg-transparent font-display text-lg font-medium text-ink outline-none placeholder:text-ink/35";

/** Compact availability bar under the hero — hands its values to the main booking form. */
export function BookingBar() {
  const [checkIn, setCheckIn] = useState(todayISO());
  const [checkOut, setCheckOut] = useState(plusDays(todayISO(), 3));
  const [guests, setGuests] = useState(2);

  function submit(e: FormEvent) {
    e.preventDefault();
    let out = checkOut;
    if (checkOut <= checkIn) {
      out = plusDays(checkIn, 1);
      setCheckOut(out);
    }
    dispatchPrebook({ checkIn, checkOut: out, guests });
  }

  return (
    <form
      onSubmit={submit}
      className="grid gap-2 rounded-3xl bg-cream p-3 text-ink shadow-[0_36px_80px_-24px_rgba(13,28,22,0.55)] md:grid-cols-[1fr_1fr_1fr_auto] md:items-center md:gap-0 md:rounded-full md:p-2 md:pl-8"
      aria-label="Quick availability check"
    >
      <div className="px-5 py-3 md:border-r md:border-sandline md:px-0 md:py-2 md:pr-6">
        <label htmlFor="bb-in" className={fieldLabel}>
          Check-in
        </label>
        <input
          id="bb-in"
          type="date"
          required
          min={todayISO()}
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className={fieldInput}
        />
      </div>
      <div className="px-5 py-3 md:border-r md:border-sandline md:px-6 md:py-2 md:pr-6">
        <label htmlFor="bb-out" className={fieldLabel}>
          Check-out
        </label>
        <input
          id="bb-out"
          type="date"
          required
          min={plusDays(checkIn, 1)}
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          className={fieldInput}
        />
      </div>
      <div className="px-5 py-3 md:px-6 md:py-2 md:pr-6">
        <label htmlFor="bb-guests" className={fieldLabel}>
          Guests
        </label>
        <select id="bb-guests" value={guests} onChange={(e) => setGuests(Number(e.target.value))} className={fieldInput}>
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <option key={n} value={n}>
              {n} {n === 1 ? "guest" : "guests"}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="group mx-1 flex items-center justify-center gap-2 rounded-2xl bg-pine px-8 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-cream transition-colors hover:bg-pine-deep md:mx-0 md:rounded-full md:py-5"
      >
        Check availability
        <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </form>
  );
}
