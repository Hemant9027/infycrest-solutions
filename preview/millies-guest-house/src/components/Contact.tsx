"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
  User,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CONTACT } from "@/lib/media";

type Status = "idle" | "sending" | "success" | "error";

const CONTACT_ROWS = [
  {
    icon: User,
    label: "Your host",
    value: CONTACT.host,
    href: undefined as string | undefined,
    note: "Millie’s Guest House",
  },
  {
    icon: Phone,
    label: "Phone",
    value: CONTACT.phone,
    href: CONTACT.phoneHref,
    note: "The quickest way to reach Judy",
  },
  {
    icon: Mail,
    label: "Email",
    value: CONTACT.email,
    href: CONTACT.emailHref,
    note: "Every message is answered personally",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "The Abacos, The Bahamas",
    href: undefined,
    note: "On the water’s edge",
  },
];

const inputClass =
  "w-full rounded-xl border border-sea/15 bg-white/70 px-4 py-3 text-sm text-ink outline-none transition placeholder:text-ink/35 focus:border-ocean focus:ring-2 focus:ring-ocean/20";

const labelClass =
  "mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/55";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const [guests, setGuests] = useState("");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, arrival, departure, guests, message }),
      });
      const data = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !data.ok) {
        setError(data.error ?? "Something went wrong — please try again.");
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setError("No connection — please email or call Judy directly.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <section id="contact" className="scroll-mt-24 bg-sand py-24 sm:py-32 lg:py-40">
        <div className="mx-auto w-full max-w-[92rem] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl rounded-[2rem] border border-sea/10 bg-cream p-10 text-center shadow-[0_30px_70px_-40px_rgba(13,58,65,0.4)] sm:p-14">
            <CheckCircle2 className="mx-auto size-14 text-lagoon" />
            <h2 className="mt-6 font-serif text-3xl font-light text-sea sm:text-4xl">
              Thank you, {name.split(" ")[0]} —{" "}
              <em className="italic text-lagoon">your inquiry is in</em>.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink/65">
              Judy will be in touch soon. For the quickest reply, call{" "}
              <a href={CONTACT.phoneHref} className="font-semibold text-ocean underline-offset-4 hover:underline">
                {CONTACT.phone}
              </a>{" "}
              or email{" "}
              <a href={CONTACT.emailHref} className="font-semibold text-ocean underline-offset-4 hover:underline">
                {CONTACT.email}
              </a>{" "}
              directly.
            </p>
            <button
              type="button"
              onClick={() => {
                setStatus("idle");
                setMessage("");
              }}
              className="mt-8 rounded-full border border-sea/25 px-7 py-3 text-sm font-semibold text-sea transition hover:bg-sea hover:text-cream"
            >
              Send another inquiry
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-sand py-24 sm:py-32 lg:py-40">
      <div className="mx-auto grid w-full max-w-[92rem] gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-14 lg:px-12">
        <div>
          <Reveal>
            <p className="flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-ocean">
              <span className="h-px w-10 bg-ocean/50" />
              06 — Contact
            </p>
            <h2 className="mt-6 font-serif text-4xl font-light leading-[1.05] tracking-tight text-sea sm:text-5xl lg:text-[3.6rem]">
              Contact <em className="italic text-lagoon">Millie’s Guest House</em>
            </h2>
            <p className="mt-8 max-w-md text-base leading-relaxed text-ink/70 sm:text-lg">
              For availability and bookings, reach Judy directly — she knows the
              house, the water, and the cays, and she’ll be glad to help you
              plan your time on them.
            </p>
          </Reveal>

          <div className="mt-10">
            {CONTACT_ROWS.map(({ icon: Icon, label, value, href, note }, i) => (
              <Reveal key={label} delay={0.07 * i}>
                <div className="group flex items-center gap-5 border-b border-sea/10 py-5">
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-foam text-sea transition-colors duration-500 group-hover:bg-sea group-hover:text-foam">
                    <Icon className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ink/50">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="mt-0.5 inline-flex items-center gap-1.5 break-all font-serif text-xl text-sea transition-colors hover:text-ocean sm:text-2xl"
                      >
                        {value}
                        <ArrowUpRight className="size-4 shrink-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      </a>
                    ) : (
                      <p className="mt-0.5 font-serif text-xl text-sea sm:text-2xl">
                        {value}
                      </p>
                    )}
                    <p className="mt-0.5 text-xs text-ink/50">{note}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.15}>
          <div className="rounded-[2rem] border border-sea/10 bg-cream p-7 shadow-[0_30px_70px_-40px_rgba(13,58,65,0.4)] sm:p-10">
            <h3 className="font-serif text-2xl text-sea sm:text-3xl">
              Plan Your Stay
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">
              Tell Judy about your trip — dates, party size, anything else —
              and she’ll reply personally.
            </p>

            <form onSubmit={onSubmit} className="mt-8 grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="arrival" className={labelClass}>
                    Arrival
                  </label>
                  <input
                    id="arrival"
                    type="date"
                    value={arrival}
                    onChange={(e) => setArrival(e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="departure" className={labelClass}>
                    Departure
                  </label>
                  <input
                    id="departure"
                    type="date"
                    value={departure}
                    min={arrival || undefined}
                    onChange={(e) => setDeparture(e.target.value)}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="guests" className={labelClass}>
                  Guests
                </label>
                <select
                  id="guests"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className={inputClass}
                >
                  <option value="">Select…</option>
                  {["1", "2", "3", "4", "5", "6", "7", "8+"].map((g) => (
                    <option key={g} value={g}>
                      {g} {g === "1" ? "guest" : "guests"}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Anything Judy should know — what you’re hoping for from your time in the Abacos…"
                  className={`${inputClass} resize-none`}
                />
              </div>

              {status === "error" && (
                <p className="rounded-xl bg-clay/10 px-4 py-3 text-sm font-medium text-clay">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-sea px-7 py-4 text-sm font-semibold text-cream transition-colors duration-500 hover:bg-ocean disabled:opacity-60"
              >
                {status === "sending" ? (
                  <>
                    Sending your inquiry
                    <Loader2 className="size-4 animate-spin" />
                  </>
                ) : (
                  <>
                    Send inquiry
                    <Send className="size-4 transition-transform duration-500 group-hover:translate-x-1" />
                  </>
                )}
              </button>

              <p className="text-center font-serif text-sm italic text-ink/50">
                Prefer email? Write to Judy directly at{" "}
                <a href={CONTACT.emailHref} className="not-italic text-ocean underline-offset-4 hover:underline">
                  {CONTACT.email}
                </a>
              </p>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
