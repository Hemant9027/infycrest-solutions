"use client";

import {
  CalendarDays,
  Check,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
  User,
} from "lucide-react";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { Reveal } from "./motion";
import { Italic, SectionHeading } from "./section-heading";

type Status = "idle" | "sending" | "sent" | "error";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  villa: "",
  checkIn: "",
  checkOut: "",
  guests: "2",
  message: "",
};

const inputClass =
  "w-full rounded-xl border border-lagoon-950/15 bg-white px-4 py-3 text-sm text-lagoon-950 placeholder:text-lagoon-950/35 transition-all duration-300 focus:border-lagoon-600 focus:ring-2 focus:ring-lagoon-600/25 focus:outline-none";

const labelClass =
  "mb-2 block text-[10px] font-semibold tracking-[0.24em] uppercase text-lagoon-700";

export function Booking() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<Status>("idle");

  const update = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone || null,
          villa: form.villa || "flexible",
          checkIn: form.checkIn || null,
          checkOut: form.checkOut || null,
          guests: Number.parseInt(form.guests, 10) || null,
          message: form.message || null,
        }),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="booking"
      className="relative mt-10 rounded-t-[2.5rem] bg-lagoon-950 pt-24 pb-28 md:rounded-t-[4rem] md:pt-32"
    >
      <div className="mx-auto grid w-full max-w-[90rem] gap-16 px-5 md:px-10 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
        <div>
          <SectionHeading
            dark
            index="07"
            eyebrow="Contact & Booking"
            title={
              <>
                Stay at
                <br />
                <Italic>Sonsette Villas</Italic>
              </>
            }
            description="Send a note with your dates and your inquiry lands directly with your host — no middlemen, no booking engines, no noise."
          />

          <Reveal delay={0.2}>
            <ul className="mt-12 space-y-0 divide-y divide-sand-50/10 border-y border-sand-50/10">
              <li className="flex items-center gap-4 py-5">
                <User className="h-5 w-5 shrink-0 text-coral-400" strokeWidth={1.5} />
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.26em] uppercase text-sand-100/50">
                    Your host
                  </p>
                  <p className="mt-0.5 font-display text-xl text-sand-50">
                    Ms. Alsette Deleveaux
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-4 py-5">
                <Phone className="h-5 w-5 shrink-0 text-coral-400" strokeWidth={1.5} />
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.26em] uppercase text-sand-100/50">
                    Phone
                  </p>
                  <a
                    href="tel:+12423442041"
                    className="mt-0.5 block font-display text-xl text-sand-50 transition-colors hover:text-coral-300"
                  >
                    +1 (242) 344-2041
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-4 py-5">
                <Mail className="h-5 w-5 shrink-0 text-coral-400" strokeWidth={1.5} />
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.26em] uppercase text-sand-100/50">
                    Email
                  </p>
                  <a
                    href="mailto:adeleveaux@yahoo.com"
                    className="mt-0.5 block font-display text-xl break-all text-sand-50 transition-colors hover:text-coral-300"
                  >
                    adeleveaux@yahoo.com
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-4 py-5">
                <MapPin className="h-5 w-5 shrink-0 text-coral-400" strokeWidth={1.5} />
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.26em] uppercase text-sand-100/50">
                    Find us
                  </p>
                  <p className="mt-0.5 font-display text-xl text-sand-50">
                    Major&apos;s Cay, Crooked Island, The Bahamas
                  </p>
                </div>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="tel:+12423442041"
                className="inline-flex items-center gap-2 rounded-full bg-sand-50 px-6 py-3.5 text-[11px] font-semibold tracking-[0.22em] uppercase text-lagoon-950 transition-colors hover:bg-coral-400"
              >
                <Phone className="h-4 w-4" /> Call the villas
              </a>
              <a
                href="mailto:adeleveaux@yahoo.com"
                className="inline-flex items-center gap-2 rounded-full border border-sand-50/30 px-6 py-3.5 text-[11px] font-semibold tracking-[0.22em] uppercase text-sand-50 transition-colors hover:border-sand-50 hover:bg-sand-50/10"
              >
                <Mail className="h-4 w-4" /> Write an email
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="rounded-[2rem] bg-sand-50 p-6 text-lagoon-950 shadow-2xl shadow-black/30 md:p-10">
            {status === "sent" ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-lagoon-100 text-lagoon-700">
                  <Check className="h-7 w-7" />
                </span>
                <h3 className="mt-6 font-display text-3xl font-light">
                  Your inquiry is on its way
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-lagoon-950/65">
                  Thank you — Ms. Deleveaux will reply personally. If you&apos;d
                  rather not wait, you&apos;re always welcome to call{" "}
                  <a
                    href="tel:+12423442041"
                    className="font-semibold text-lagoon-800 underline underline-offset-4"
                  >
                    +1 (242) 344-2041
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setForm(initialForm);
                    setStatus("idle");
                  }}
                  className="mt-8 rounded-full border border-lagoon-950/15 px-6 py-3 text-[11px] font-semibold tracking-[0.22em] uppercase transition-colors hover:bg-lagoon-900 hover:text-sand-50"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate={false}>
                <p className="mb-8 flex items-center gap-3 text-[10px] font-semibold tracking-[0.26em] uppercase text-lagoon-700">
                  <CalendarDays className="h-4 w-4 text-coral-500" />
                  Booking inquiry — replies come straight from your host
                </p>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={update}
                      placeholder="Your full name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={update}
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClass}>
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={update}
                      placeholder="Optional"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="villa" className={labelClass}>
                      Villa
                    </label>
                    <select
                      id="villa"
                      name="villa"
                      value={form.villa}
                      onChange={update}
                      className={inputClass}
                    >
                      <option value="">Either — I&apos;m flexible</option>
                      <option value="one-bedroom">The One-Bedroom Villa</option>
                      <option value="two-bedroom">The Two-Bedroom Villa</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="checkIn" className={labelClass}>
                      Check-in
                    </label>
                    <input
                      id="checkIn"
                      name="checkIn"
                      type="date"
                      value={form.checkIn}
                      onChange={update}
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
                      min={form.checkIn || undefined}
                      value={form.checkOut}
                      onChange={update}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="guests" className={labelClass}>
                      Guests
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={form.guests}
                      onChange={update}
                      className={inputClass}
                    >
                      {[1, 2, 3, 4, 5, 6].map((n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? "guest" : "guests"}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className={labelClass}>
                      Your note
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={update}
                      placeholder="Anything we should know — arrival plans, questions about the island…"
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                </div>

                {status === "error" ? (
                  <p className="mt-5 rounded-xl bg-coral-500/10 px-4 py-3 text-sm text-coral-600">
                    Something interrupted the trade winds — please try again, or
                    reach Ms. Deleveaux directly at +1 (242) 344-2041.
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-lagoon-900 py-4 text-[11px] font-semibold tracking-[0.26em] uppercase text-sand-50 transition-all duration-300 hover:bg-lagoon-800 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send inquiry
                      <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                    </>
                  )}
                </button>
                <p className="mt-4 text-center text-xs text-lagoon-950/45">
                  No payment is taken online — this simply starts the
                  conversation.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
