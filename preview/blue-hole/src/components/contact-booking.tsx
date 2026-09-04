"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  CalendarDays,
  CheckCircle2,
  CircleAlert,
  Mail,
  MapPin,
  Phone,
  Send,
  User,
} from "lucide-react";
import { type FormEvent, useEffect, useState } from "react";
import { Eyebrow, Reveal } from "@/components/motion-primitives";
import { BUSINESS } from "@/lib/site";

type RoomChoice = "one-bedroom" | "two-bedroom" | "either";

type Status =
  | { state: "idle" }
  | { state: "submitting" }
  | { state: "success" }
  | { state: "error"; message: string };

const ROOM_OPTIONS: { id: RoomChoice; label: string }[] = [
  { id: "one-bedroom", label: "One-Bedroom" },
  { id: "two-bedroom", label: "Two-Bedroom" },
  { id: "either", label: "Either / Not sure" },
];

const inputClass =
  "w-full rounded-xl border border-ink/12 bg-sand-50/60 px-4 py-3 text-[15px] text-ink placeholder:text-ink/35 outline-none transition-all focus:border-lagoon-500 focus:bg-white focus:ring-4 focus:ring-lagoon-500/15";

const labelClass = "mb-1.5 block text-[12px] font-bold tracking-[0.14em] text-ink/60 uppercase";

function AvailabilityForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const [roomType, setRoomType] = useState<RoomChoice>("either");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    // Computed client-side only to avoid hydration mismatch
    setMinDate(new Date().toISOString().slice(0, 10));
  }, []);

  useEffect(() => {
    const onPick = (e: Event) => {
      const id = (e as CustomEvent<string>).detail;
      if (id === "one-bedroom" || id === "two-bedroom") setRoomType(id);
    };
    window.addEventListener("mgh:select-room", onPick);
    return () => window.removeEventListener("mgh:select-room", onPick);
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      kind: "stay",
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone"),
      checkIn,
      checkOut,
      guests: Number(data.get("guests")),
      roomType,
      message: data.get("message"),
      company: data.get("company"),
    };

    setStatus({ state: "submitting" });
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as { ok: boolean; error?: string };
      if (res.ok && json.ok) {
        setStatus({ state: "success" });
        form.reset();
        setCheckIn("");
        setCheckOut("");
      } else {
        setStatus({
          state: "error",
          message: json.error ?? "Please review the form and try again.",
        });
      }
    } catch {
      setStatus({
        state: "error",
        message:
          "We couldn't reach the server. Please call or email us instead — we'd love to hear from you.",
      });
    }
  }

  if (status.state === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="grid min-h-[30rem] place-items-center p-8 text-center"
      >
        <div>
          <span className="mx-auto grid size-16 place-items-center rounded-full bg-lagoon-100 text-lagoon-600">
            <CheckCircle2 className="size-8" strokeWidth={1.8} />
          </span>
          <h3 className="font-display mt-6 text-3xl font-medium text-ink">
            Your request is with the Marshalls.
          </h3>
          <p className="mx-auto mt-3 max-w-sm text-[15px] leading-relaxed text-ink/70">
            Thank you — we&apos;ve received your dates and will reply personally by email or
            phone to confirm availability. Island time is real, but guests always come first.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-abyss-900 px-5 py-3 text-sm font-bold text-sand-50 transition-colors hover:bg-abyss-800"
            >
              <Phone className="size-4" strokeWidth={2.2} /> Call us directly
            </a>
            <button
              type="button"
              onClick={() => setStatus({ state: "idle" })}
              className="rounded-full px-5 py-3 text-sm font-bold text-ink/70 ring-1 ring-ink/15 transition-colors hover:text-ink hover:ring-ink/30"
            >
              Send another request
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="p-7 sm:p-9" noValidate={false}>
      {/* Honeypot */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      {/* Room choice */}
      <fieldset>
        <legend className={labelClass}>Preferred room</legend>
        <div className="grid grid-cols-3 gap-2 rounded-2xl bg-sand-100 p-1.5">
          {ROOM_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setRoomType(opt.id)}
              aria-pressed={roomType === opt.id}
              className={`rounded-xl px-2 py-2.5 text-[12.5px] font-bold tracking-wide transition-all sm:text-[13px] ${
                roomType === opt.id
                  ? "bg-abyss-900 text-sand-50 shadow-md"
                  : "text-ink/55 hover:text-ink"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="mt-5 grid gap-5 sm:grid-cols-3">
        <div>
          <label htmlFor="checkIn" className={labelClass}>
            Check-in
          </label>
          <input
            id="checkIn"
            name="checkIn"
            type="date"
            required
            min={minDate}
            value={checkIn}
            onChange={(e) => {
              setCheckIn(e.target.value);
              if (checkOut && e.target.value >= checkOut) setCheckOut("");
            }}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="checkOut" className={labelClass}>
            Check-out
          </label>
          <input
            id="checkOut"
            name="checkOut"
            type="date"
            required
            min={checkIn || minDate}
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="guests" className={labelClass}>
            Guests
          </label>
          <select id="guests" name="guests" required defaultValue="2" className={inputClass}>
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n}>
                {n} {n === 6 ? "+" : ""} {n === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Your name
          </label>
          <input id="name" name="name" type="text" required placeholder="Full name" autoComplete="name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input id="email" name="email" type="email" required placeholder="you@example.com" autoComplete="email" className={inputClass} />
        </div>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone <span className="font-medium normal-case text-ink/40">(optional)</span>
          </label>
          <input id="phone" name="phone" type="tel" placeholder="+1 …" autoComplete="tel" className={inputClass} />
        </div>
        <div>
          <label htmlFor="message" className={labelClass}>
            Notes <span className="font-medium normal-case text-ink/40">(optional)</span>
          </label>
          <input
            id="message"
            name="message"
            type="text"
            placeholder="Anniversary trip, boat day plans…"
            className={inputClass}
          />
        </div>
      </div>

      <AnimatePresence>
        {status.state === "error" && (
          <motion.p
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-5 flex items-start gap-2 rounded-xl bg-coral-100 px-4 py-3 text-sm font-semibold text-coral-600"
          >
            <CircleAlert className="mt-0.5 size-4 shrink-0" strokeWidth={2.2} />
            {status.message}
          </motion.p>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={status.state === "submitting"}
        className="group mt-7 flex w-full items-center justify-center gap-3 rounded-full bg-coral-500 px-7 py-4 text-sm font-bold tracking-wide text-sand-50 shadow-[0_16px_40px_-14px_rgba(226,116,77,0.9)] transition-all hover:-translate-y-0.5 hover:bg-coral-600 disabled:translate-y-0 disabled:opacity-70"
      >
        {status.state === "submitting" ? (
          <>
            <span className="size-4 animate-spin rounded-full border-2 border-sand-50/40 border-t-sand-50" />
            Sending your dates…
          </>
        ) : (
          <>
            Send Availability Request
            <Send className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" strokeWidth={2.2} />
          </>
        )}
      </button>
      <p className="mt-4 text-center text-[12.5px] leading-relaxed text-ink/50">
        This is a request, not a charge — the family confirms every stay personally.
      </p>
    </form>
  );
}

const CONTACT_ROWS = [
  {
    icon: User,
    label: "Your host",
    value: BUSINESS.host,
    href: undefined as string | undefined,
  },
  {
    icon: Phone,
    label: "Phone",
    value: BUSINESS.phoneDisplay,
    href: BUSINESS.phoneHref,
  },
  {
    icon: Mail,
    label: "Email",
    value: BUSINESS.email,
    href: BUSINESS.emailHref,
  },
  {
    icon: MapPin,
    label: "Find us",
    value: BUSINESS.addressOneLine,
    href: "https://www.google.com/maps/search/?api=1&query=Marshall%27s+Guest+House+Queen%27s+Highway+George+Town+Exuma+Bahamas",
  },
];

export function ContactBooking() {
  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden bg-sand-100 py-24 sm:py-32">
      <div
        className="pointer-events-none absolute -top-40 right-0 size-[30rem] rounded-full bg-lagoon-100/70 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          {/* Contact panel */}
          <div>
            <Reveal>
              <Eyebrow>Plan Your Stay</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display mt-4 text-4xl leading-[1.05] font-medium text-balance text-ink sm:text-5xl lg:text-[3.4rem]">
                Contact Marshall&apos;s
                <br />
                <span className="italic text-lagoon-600">Guest House</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-ink/70">
                No booking engines, no call centres. Send your dates and the family will write
                or ring you back themselves — or reach out right now, the old-fashioned way.
              </p>
            </Reveal>

            <div className="mt-10 space-y-1.5">
              {CONTACT_ROWS.map((row, i) => (
                <Reveal key={row.label} delay={0.1 + i * 0.06}>
                  <div className="group flex items-center gap-4 rounded-2xl px-4 py-4 transition-colors hover:bg-sand-50">
                    <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white text-lagoon-600 shadow-sm ring-1 ring-ink/5 transition-transform duration-300 group-hover:scale-105">
                      <row.icon className="size-5" strokeWidth={1.8} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[11px] font-bold tracking-[0.22em] text-ink/45 uppercase">
                        {row.label}
                      </p>
                      {row.href ? (
                        <a
                          href={row.href}
                          target={row.href.startsWith("http") ? "_blank" : undefined}
                          rel={row.href.startsWith("http") ? "noreferrer" : undefined}
                          className="mt-0.5 block truncate text-[15.5px] font-bold text-ink transition-colors hover:text-lagoon-600"
                        >
                          {row.value}
                        </a>
                      ) : (
                        <p className="mt-0.5 text-[15.5px] font-bold text-ink">{row.value}</p>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.35}>
              <div className="mt-10 flex items-start gap-3 rounded-2xl bg-abyss-900 p-5 text-sand-50">
                <CalendarDays className="mt-0.5 size-5 shrink-0 text-lagoon-300" strokeWidth={1.8} />
                <p className="text-sm leading-relaxed text-sand-50/85">
                  <span className="font-bold text-sand-50">Booking tip:</span> Exuma fills up
                  around regatta season and the winter months — the earlier you send your dates,
                  the easier it is to say yes.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Form card */}
          <Reveal delay={0.12}>
            <div id="book" className="scroll-mt-28">
              <div className="overflow-hidden rounded-[2rem] bg-white shadow-[0_50px_100px_-45px_rgba(3,38,46,0.5)] ring-1 ring-ink/5">
                <div className="border-b border-ink/8 bg-gradient-to-r from-lagoon-50 to-sand-50 px-7 py-6 sm:px-9">
                  <h3 className="font-display text-2xl font-medium text-ink">
                    Check Availability
                  </h3>
                  <p className="mt-1 text-sm text-ink/60">
                    Tell us when — we&apos;ll confirm within a day, usually much sooner.
                  </p>
                </div>
                <AvailabilityForm />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
