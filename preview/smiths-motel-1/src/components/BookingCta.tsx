"use client";

import { useState, type FormEvent } from "react";
import {
  CalendarCheck,
  CircleCheck,
  Mail,
  Sparkles,
  TriangleAlert,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { BUSINESS, HERO_IMAGE } from "@/data/site";
import { submitInquiry } from "@/lib/inquiries";

type Status = "idle" | "sending" | "sent" | "error";

export default function BookingCta() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    const res = await submitInquiry({
      type: "availability",
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      checkIn: String(data.get("checkIn") ?? ""),
      checkOut: String(data.get("checkOut") ?? ""),
      guests: String(data.get("guests") ?? ""),
      message: String(data.get("message") ?? ""),
    });
    if (res.ok) {
      setStatus("sent");
      form.reset();
    } else {
      setErrorMsg(res.error ?? "Something went wrong.");
      setStatus("error");
    }
  }

  const inputCls =
    "w-full rounded-2xl border border-line bg-parchment px-4 py-3.5 text-base text-ink placeholder:text-ink-3/50 focus:border-coral focus:ring-2 focus:ring-coral/30 focus:outline-none";
  const labelCls =
    "mb-2 block text-xs font-bold tracking-[0.15em] text-sand/80 uppercase";

  return (
    <section
      id="check-availability"
      className="relative overflow-hidden bg-sea-dusk py-20 text-sand sm:py-28"
    >
      {/* Sunburst backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage: `url(${HERO_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-sea-dusk/85 via-sea-dusk/92 to-sea-dusk" />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-bold tracking-[0.22em] text-sun uppercase backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            Book direct — no middlemen
          </span>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="mt-6 font-display text-[clamp(2.25rem,7vw,4.25rem)] leading-[1.02] font-medium tracking-tight text-balance">
            Ready for your{" "}
            <span className="text-sun italic">Nassau</span> stay?
          </h2>
        </Reveal>

        <Reveal delay={180}>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-sand/80 sm:text-lg">
            Send us your dates and party size. We&rsquo;ll reply personally to
            confirm availability and current rates — usually by email.
          </p>
        </Reveal>

        <Reveal delay={260} className="mt-10">
          <div className="rounded-[2rem] bg-white/8 p-6 ring-1 ring-white/15 backdrop-blur-md sm:p-9">
            {status === "sent" ? (
              <div className="flex flex-col items-center gap-4 py-8">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-white/10">
                  <CircleCheck className="h-10 w-10 text-sun" aria-hidden />
                </span>
                <h3 className="font-display text-2xl font-medium sm:text-3xl">
                  Dates received — thank you
                </h3>
                <p className="max-w-md text-sm leading-relaxed text-sand/75 sm:text-base">
                  We&rsquo;ve got your availability request and will reply
                  personally. In a hurry? Email us at{" "}
                  <a
                    href={`mailto:${BUSINESS.email}`}
                    className="u-link font-bold break-all text-sun"
                  >
                    {BUSINESS.email}
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-2 rounded-full border-2 border-white/30 px-6 py-3 text-sm font-bold transition-colors hover:bg-white/10"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-4 text-left">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="ba-name" className={labelCls}>
                      Your name *
                    </label>
                    <input
                      id="ba-name"
                      required
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Jane Johnson"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label htmlFor="ba-email" className={labelCls}>
                      Your email *
                    </label>
                    <input
                      id="ba-email"
                      required
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      className={inputCls}
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <div>
                    <label htmlFor="ba-in" className={labelCls}>
                      Check-in
                    </label>
                    <input
                      id="ba-in"
                      name="checkIn"
                      type="date"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label htmlFor="ba-out" className={labelCls}>
                      Check-out
                    </label>
                    <input
                      id="ba-out"
                      name="checkOut"
                      type="date"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label htmlFor="ba-guests" className={labelCls}>
                      Guests
                    </label>
                    <select
                      id="ba-guests"
                      name="guests"
                      className={`${inputCls} cursor-pointer`}
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      {["1", "2", "3", "4", "5", "6+"].map((g) => (
                        <option key={g} value={g}>
                          {g} {g === "1" ? "guest" : "guests"}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="ba-msg" className={labelCls}>
                    Anything else? (optional)
                  </label>
                  <textarea
                    id="ba-msg"
                    name="message"
                    rows={3}
                    placeholder="Questions, arrival plans, special requests..."
                    className={`${inputCls} resize-none`}
                  />
                </div>

                {status === "error" && (
                  <p className="flex items-center gap-2 rounded-2xl bg-coral/20 px-4 py-3 text-sm font-semibold text-coral-soft ring-1 ring-coral/40">
                    <TriangleAlert className="h-4 w-4 shrink-0" aria-hidden />
                    {errorMsg} You can email us directly at {BUSINESS.email}.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group mt-1 inline-flex items-center justify-center gap-2.5 rounded-full bg-coral px-9 py-4.5 text-base font-bold text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-coral-deep disabled:cursor-wait disabled:opacity-70 sm:text-lg"
                >
                  {status === "sending" ? "Sending…" : "Check Availability"}
                  <CalendarCheck
                    className="h-5 w-5 transition-transform duration-300 group-hover:-rotate-6"
                    aria-hidden
                  />
                </button>

                <p className="flex items-center justify-center gap-2 text-xs font-semibold text-sand/70 sm:text-sm">
                  <Mail className="h-3.5 w-3.5" aria-hidden />
                  Or write to us directly:{" "}
                  <a
                    href={`mailto:${BUSINESS.email}`}
                    className="u-link font-bold break-all text-sun"
                  >
                    {BUSINESS.email}
                  </a>
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
