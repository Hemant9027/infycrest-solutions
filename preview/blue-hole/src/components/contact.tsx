"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Heart,
  Loader2,
  Mail,
  MapPin,
  Phone,
  User,
} from "lucide-react";
import Reveal from "@/components/reveal";
import { CONTACT } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

const inputLabel = "mb-1.5 block text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-abyss/50";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("submitting");
    setError("");

    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json().catch(() => null)) as
        | { ok: boolean; error?: string }
        | null;

      if (res.ok && json?.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setError(json?.error ?? "Something went wrong sending your inquiry.");
      }
    } catch {
      setStatus("error");
      setError("Network hiccup — please try again or email us directly.");
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-abyss py-24 text-shell md:py-36">
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-lagoon/10 blur-[130px]" />

      <div className="relative mx-auto max-w-[90rem] px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Info */}
          <div className="lg:col-span-5">
            <Reveal>
              <p className="kicker relative pl-[3.25rem] text-aqua before:absolute before:left-0 before:top-1/2 before:h-px before:w-10 before:bg-current before:opacity-40">
                08 · Contact & Booking
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-display text-[clamp(2.4rem,4.6vw,4.25rem)] font-medium leading-[1.04]">
                The tide is{" "}
                <em className="font-light italic text-aqua">waiting</em>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 max-w-md text-[1.02rem] leading-relaxed text-shell/70">
                No booking engine, no middlemen — every stay is arranged
                personally. Send a note, or simply pick up the phone.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-10 space-y-5">
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-aqua/10 text-aqua">
                    <User className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-shell/50">
                      Your host
                    </p>
                    <p className="mt-0.5 font-medium text-shell">{CONTACT.host}</p>
                  </div>
                </div>
                <a href={CONTACT.phoneHref} className="group flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-aqua/10 text-aqua transition-colors duration-300 group-hover:bg-aqua group-hover:text-abyss">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-shell/50">
                      Phone
                    </p>
                    <p className="mt-0.5 font-medium text-shell link-sweep">
                      {CONTACT.phoneDisplay}
                    </p>
                  </div>
                </a>
                <a href={CONTACT.emailHref} className="group flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-aqua/10 text-aqua transition-colors duration-300 group-hover:bg-aqua group-hover:text-abyss">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-shell/50">
                      Email
                    </p>
                    <p className="mt-0.5 break-all font-medium text-shell link-sweep">
                      {CONTACT.email}
                    </p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-aqua/10 text-aqua">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-shell/50">
                      Find us
                    </p>
                    <p className="mt-0.5 font-medium leading-snug text-shell">
                      {CONTACT.addressLines[0]}
                      <br />
                      <span className="text-shell/60">{CONTACT.addressLines[1]}</span>
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={280}>
              <div className="mt-10 flex items-start gap-4 rounded-2xl border border-coral/30 bg-coral/10 p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-coral/20 text-coral">
                  <Heart className="h-5 w-5" />
                </span>
                <p className="text-[0.95rem] leading-relaxed text-shell/80">
                  <span className="font-semibold text-shell">Barefoot weddings, anyone?</span>{" "}
                  Small ceremonies and special occasions on the beach, arranged
                  personally with your hosts.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={180} className="lg:col-span-7">
            <div className="rounded-[2rem] bg-shell p-6 text-abyss shadow-[0_60px_100px_-50px_rgba(0,0,0,0.7)] sm:p-10">
              {status === "success" ? (
                <div className="flex min-h-[26rem] flex-col items-center justify-center text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-lagoon/10 text-lagoon">
                    <CheckCircle2 className="h-8 w-8" />
                  </span>
                  <h3 className="mt-6 font-display text-3xl font-medium">
                    Your note is on its way
                  </h3>
                  <p className="mt-3 max-w-sm text-[0.95rem] leading-relaxed text-abyss/65">
                    Thank you — we’ll reply personally as soon as we surface.
                    Can’t wait? Call {CONTACT.host} at{" "}
                    <a href={CONTACT.phoneHref} className="font-semibold text-lagoon link-sweep">
                      {CONTACT.phoneDisplay}
                    </a>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-8 rounded-full border border-abyss/15 px-6 py-3 text-sm font-semibold transition-colors hover:border-lagoon hover:text-lagoon"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate={false}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className={inputLabel}>
                        Name *
                      </label>
                      <input id="name" name="name" required maxLength={120} placeholder="Your full name" className="field" autoComplete="name" />
                    </div>
                    <div>
                      <label htmlFor="email" className={inputLabel}>
                        Email *
                      </label>
                      <input id="email" name="email" type="email" required maxLength={200} placeholder="you@example.com" className="field" autoComplete="email" />
                    </div>
                    <div>
                      <label htmlFor="phone" className={inputLabel}>
                        Phone
                      </label>
                      <input id="phone" name="phone" type="tel" maxLength={60} placeholder="Optional" className="field" autoComplete="tel" />
                    </div>
                    <div>
                      <label htmlFor="guests" className={inputLabel}>
                        Guests
                      </label>
                      <select id="guests" name="guests" className="field" defaultValue="">
                        <option value="" disabled>
                          Who’s coming?
                        </option>
                        <option value="2 adults">2 adults</option>
                        <option value="Family of 3">Family of 3</option>
                        <option value="Family of 4">Family of 4</option>
                        <option value="Small group / multiple villas">
                          Small group / multiple villas
                        </option>
                        <option value="Undecided">Undecided</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="arrival" className={inputLabel}>
                        Arrival
                      </label>
                      <input id="arrival" name="arrival" type="date" className="field" />
                    </div>
                    <div>
                      <label htmlFor="departure" className={inputLabel}>
                        Departure
                      </label>
                      <input id="departure" name="departure" type="date" className="field" />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="message" className={inputLabel}>
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        maxLength={4000}
                        placeholder="Dates you’re dreaming of, a wedding you’re planning, the bonefish you intend to meet…"
                        className="field resize-none"
                      />
                    </div>
                  </div>

                  {status === "error" && (
                    <p className="mt-5 rounded-xl border border-coral/40 bg-coral/10 px-4 py-3 text-sm font-medium text-abyss">
                      {error}{" "}
                      <a href={CONTACT.emailHref} className="underline underline-offset-2">
                        {CONTACT.email}
                      </a>
                    </p>
                  )}

                  <div className="mt-7 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                    <p className="text-[0.8rem] leading-relaxed text-abyss/50">
                      A real person reads every message.
                      <br className="hidden sm:block" /> We reply personally — usually the same day.
                    </p>
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="group inline-flex items-center gap-2 rounded-full bg-abyss px-8 py-4 text-sm font-semibold text-shell transition-all duration-300 hover:bg-lagoon disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {status === "submitting" ? (
                        <>
                          Sending
                          <Loader2 className="h-4 w-4 animate-spin" />
                        </>
                      ) : (
                        <>
                          Request your stay
                          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
