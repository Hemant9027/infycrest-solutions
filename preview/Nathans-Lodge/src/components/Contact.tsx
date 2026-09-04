"use client";

import { useState, type FormEvent } from "react";
import {
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  MessageSquareText,
  CalendarDays,
  Fish,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

type Status = "idle" | "sending" | "sent" | "error";

const INTERESTS = [
  "Bonefishing the flats",
  "Reef & deep-water fishing",
  "Beach & pure rest",
  "A bit of everything",
];

const TIPS = [
  {
    icon: MessageSquareText,
    title: "No booking engine",
    text: "Every stay is arranged directly with the lodge — your note goes straight to us, and we reply personally.",
  },
  {
    icon: CalendarDays,
    title: "Rough dates are fine",
    text: "Tell us a window and we'll help you match it to the tides and the season.",
  },
  {
    icon: Fish,
    title: "Mention the fishing",
    text: "First time on the flats or chasing a personal best — say so, and we'll point you toward the right days.",
  },
];

const inputClass =
  "w-full rounded-[3px] border border-ink/15 bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink/35 outline-none transition-all duration-300 focus:border-brass/70 focus:ring-2 focus:ring-brass/20";

const labelClass =
  "mb-2 block text-[10px] font-bold uppercase tracking-[0.25em] text-ink/50";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !json.ok) {
        throw new Error(json.error ?? "Something went wrong.");
      }
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error ? err.message : "Something went wrong — try again.",
      );
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-deep py-24 text-shell sm:py-32">
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[1.15fr_1fr] lg:gap-24">
          {/* Form column */}
          <div>
            <SectionHeading
              dark
              index="09"
              eyebrow="Contact / Booking"
              title={
                <>
                  Plan your{" "}
                  <em className="font-light text-seafoam">stay</em>
                </>
              }
            />
            <Reveal delay={120}>
              <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-shell/70">
                Tell us when, who&rsquo;s coming, and what you love — fishing,
                beaches, food or all three. We&rsquo;ll write back with
                everything you need to know.
              </p>
            </Reveal>

            <Reveal delay={200} className="mt-10">
              {status === "sent" ? (
                <div className="rounded-[4px] border border-seafoam/25 bg-pine/25 p-8 sm:p-10">
                  <CheckCircle2 className="size-9 text-seafoam" strokeWidth={1.25} />
                  <h3 className="mt-5 font-display text-2xl font-light text-shell sm:text-3xl">
                    Your note is on its way.
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-shell/70">
                    Thank you for writing to Nathan&rsquo;s Lodge. We read
                    every inquiry ourselves and will reply as soon as the day
                    allows — tides permitting, usually sooner.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="link-draw mt-6 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.28em] text-seafoam"
                  >
                    Send another note <span aria-hidden>→</span>
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-[4px] border border-seafoam/15 bg-shell p-6 text-ink sm:p-8"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className={labelClass}>
                        Your name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        maxLength={160}
                        placeholder="Jane Cooper"
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
                        maxLength={240}
                        placeholder="jane@example.com"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="arrival" className={labelClass}>
                        Arrive around
                      </label>
                      <input
                        id="arrival"
                        name="arrival"
                        type="date"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="departure" className={labelClass}>
                        Depart around
                      </label>
                      <input
                        id="departure"
                        name="departure"
                        type="date"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="guests" className={labelClass}>
                        Travelers
                      </label>
                      <select id="guests" name="guests" className={inputClass}>
                        <option value="">Just me</option>
                        <option value="2">Two of us</option>
                        <option value="3-4">3–4</option>
                        <option value="5+">5 or more</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="interests" className={labelClass}>
                        Drawn to
                      </label>
                      <select
                        id="interests"
                        name="interests"
                        className={inputClass}
                      >
                        {INTERESTS.map((i) => (
                          <option key={i} value={i}>
                            {i}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="message" className={labelClass}>
                        Anything else
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        maxLength={2000}
                        placeholder="First time to Andros, hoping to learn the flats…"
                        className={`${inputClass} resize-none`}
                      />
                    </div>
                  </div>

                  {status === "error" && (
                    <p className="mt-5 flex items-center gap-2 rounded-[3px] border border-red-900/20 bg-red-900/5 px-4 py-3 text-sm text-red-900">
                      <AlertCircle className="size-4 shrink-0" />
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-deep px-7 py-4 text-[11px] font-bold uppercase tracking-[0.26em] text-shell transition-colors duration-300 hover:bg-brass hover:text-deep disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                  >
                    {status === "sending" ? (
                      <>
                        Sending <Loader2 className="size-4 animate-spin" />
                      </>
                    ) : (
                      <>
                        Send Inquiry
                        <Send className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </Reveal>
          </div>

          {/* Side column */}
          <div className="flex flex-col justify-center">
            <div className="space-y-0 divide-y divide-seafoam/12 border-y border-seafoam/12">
              {TIPS.map((tip, i) => (
                <Reveal key={tip.title} delay={i * 110}>
                  <div className="flex items-start gap-5 py-7">
                    <span className="mt-0.5 grid size-11 shrink-0 place-items-center rounded-full border border-brass/50 text-brass">
                      <tip.icon className="size-5" strokeWidth={1.25} />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-light text-shell">
                        {tip.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-shell/60">
                        {tip.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={360}>
              <p className="mt-8 font-display text-lg font-light italic leading-relaxed text-shell/55">
                &ldquo;Write like you mean it — we&rsquo;ll do the same when we
                answer.&rdquo;
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
