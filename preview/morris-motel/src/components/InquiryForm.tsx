"use client";

import {
  AlertCircle,
  ArrowUpRight,
  CheckCircle2,
  Loader2,
  Send,
} from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import { availabilityMailto, EMAIL, type InquiryDetails } from "@/lib/site";

type Status = "idle" | "sending" | "success" | "error";

const inputClass =
  "mt-1.5 w-full rounded-xl border hairline bg-cream px-4 py-3 text-base text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-sea";
const labelClass =
  "block text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/55";

const EMPTY = {
  name: "",
  email: "",
  checkIn: "",
  checkOut: "",
  guests: "2",
  message: "",
  company: "",
};

export function InquiryForm() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [today, setToday] = useState("");
  const [submitted, setSubmitted] = useState<InquiryDetails | null>(null);

  useEffect(() => {
    setToday(new Date().toISOString().slice(0, 10));
  }, []);

  const set = (key: keyof typeof EMPTY) => (value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    if (form.checkOut <= form.checkIn) {
      setError("Check-out must be after check-in.");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, guests: Number(form.guests) }),
      });
      const data = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !data.ok) {
        setError(data.error ?? "Something went wrong — please try again.");
        setStatus("error");
        return;
      }
      setSubmitted({
        name: form.name,
        email: form.email,
        checkIn: form.checkIn,
        checkOut: form.checkOut,
        guests: form.guests,
        message: form.message,
      });
      setStatus("success");
    } catch {
      setError(
        `We couldn't reach the server — email us directly at ${EMAIL} and we'll sort it out.`,
      );
      setStatus("error");
    }
  };

  if (status === "success" && submitted) {
    return (
      <div className="text-center">
        <span className="mx-auto grid size-16 place-items-center rounded-full bg-mint text-sea">
          <CheckCircle2 className="size-8" />
        </span>
        <h3 className="mt-5 font-display text-2xl font-semibold">
          Request received.
        </h3>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-ink/65">
          Your dates are saved on our side. For the fastest reply, send the
          same details straight to our inbox from your email app:
        </p>
        <a
          href={availabilityMailto(submitted)}
          className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-coral px-7 py-4 text-base font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-coral-deep"
        >
          <Send className="size-5" />
          Confirm in your email app
        </a>
        <div>
          <button
            type="button"
            onClick={() => {
              setStatus("idle");
              setForm(EMPTY);
              setSubmitted(null);
            }}
            className="mt-5 text-sm font-semibold text-sea underline-offset-4 hover:underline"
          >
            Send another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate={false}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="iq-name" className={labelClass}>
            Full name
          </label>
          <input
            id="iq-name"
            name="name"
            required
            minLength={2}
            maxLength={120}
            autoComplete="name"
            value={form.name}
            onChange={(e) => set("name")(e.target.value)}
            placeholder="Jordan Smith"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="iq-email" className={labelClass}>
            Email
          </label>
          <input
            id="iq-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={(e) => set("email")(e.target.value)}
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="iq-checkin" className={labelClass}>
            Check-in
          </label>
          <input
            id="iq-checkin"
            name="checkIn"
            type="date"
            required
            min={today || undefined}
            value={form.checkIn}
            onChange={(e) => set("checkIn")(e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="iq-checkout" className={labelClass}>
            Check-out
          </label>
          <input
            id="iq-checkout"
            name="checkOut"
            type="date"
            required
            min={form.checkIn || today || undefined}
            value={form.checkOut}
            onChange={(e) => set("checkOut")(e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="iq-guests" className={labelClass}>
            Guests
          </label>
          <select
            id="iq-guests"
            name="guests"
            value={form.guests}
            onChange={(e) => set("guests")(e.target.value)}
            className={inputClass}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? "guest" : "guests"}
              </option>
            ))}
            <option value="9">9+ guests</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="iq-message" className={labelClass}>
            Anything else? <span className="text-ink/35">(optional)</span>
          </label>
          <textarea
            id="iq-message"
            name="message"
            rows={3}
            maxLength={2000}
            value={form.message}
            onChange={(e) => set("message")(e.target.value)}
            placeholder="Arrival time, questions about the room, getting around the island…"
            className={`${inputClass} resize-none`}
          />
        </div>
      </div>

      {/* honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="iq-company">Company</label>
        <input
          id="iq-company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.company}
          onChange={(e) => set("company")(e.target.value)}
        />
      </div>

      {error && (
        <p
          role="alert"
          className="mt-4 flex items-start gap-2 rounded-2xl bg-coral/10 px-4 py-3 text-sm font-medium text-coral-deep"
        >
          <AlertCircle className="mt-0.5 size-4 shrink-0" />
          <span>
            {error}{" "}
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-1 font-semibold underline underline-offset-2"
            >
              Email us instead <ArrowUpRight className="size-3.5" />
            </a>
          </span>
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-coral px-8 py-4 text-base font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-coral-deep disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="size-5 animate-spin" />
            Sending your request…
          </>
        ) : (
          <>
            <Send className="size-5" />
            Send availability request
          </>
        )}
      </button>
      <p className="mt-4 text-xs leading-relaxed text-ink/50">
        Your details are only used to answer this enquiry — nothing is
        published, shared or added to a mailing list.
      </p>
    </form>
  );
}
