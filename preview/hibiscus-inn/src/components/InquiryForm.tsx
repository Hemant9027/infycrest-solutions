"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import Hibiscus from "@/components/Hibiscus";
import { EMAIL } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "w-full rounded-xl border border-sand-200 bg-sand-50 px-4 py-3.5 text-sm text-ink placeholder:text-ink/35 transition-all duration-300 focus:border-hibiscus-400 focus:outline-none focus:ring-2 focus:ring-hibiscus-200";

const labelClass =
  "mb-2 block text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-sea-800";

export default function InquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    arrival: "",
    departure: "",
    guests: "2",
    message: "",
  });

  const update =
    (key: keyof typeof form) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    ) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          guests: form.guests ? Number(form.guests) : null,
        }),
      });
      const data = (await res.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null;
      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || "Something went wrong.");
      }
      setStatus("sent");
    } catch (err) {
      setError(
        err instanceof Error && err.message
          ? err.message
          : "We couldn't send your message just now.",
      );
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="flex min-h-[560px] flex-col items-center justify-center rounded-[2rem] bg-white p-10 text-center shadow-xl shadow-sea-950/10 ring-1 ring-sea-900/10"
      >
        <span className="relative grid h-20 w-20 place-items-center rounded-full bg-sea-100">
          <CheckCircle2 className="h-10 w-10 text-sea-600" />
          <Hibiscus className="absolute -right-2 -top-2 h-6 w-6 text-hibiscus-400" />
        </span>
        <h3 className="mt-7 font-display text-3xl tracking-tight text-ink">
          Thank you — it&apos;s on its way
        </h3>
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink/65">
          Your enquiry has been sent to the inn, and we&apos;ll reply to you
          personally at the email you gave us. Can&apos;t wait? You can always
          write directly:
        </p>
        <a
          href={`mailto:${EMAIL}`}
          className="mt-6 font-display text-xl italic text-hibiscus-600 link-underline"
        >
          {EMAIL}
        </a>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[2rem] bg-white p-7 shadow-xl shadow-sea-950/10 ring-1 ring-sea-900/10 sm:p-9"
    >
      <div className="flex items-center gap-3">
        <Hibiscus className="h-6 w-6 text-hibiscus-500" />
        <h3 className="font-display text-2xl tracking-tight text-ink">
          Send us an enquiry
        </h3>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-ink/60">
        Tell us a little about your trip — dates if you have them — and
        we&apos;ll write back with availability.
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Your name
          </label>
          <input
            id="name"
            name="name"
            required
            value={form.name}
            onChange={update("name")}
            placeholder="Full name"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={update("email")}
            placeholder="you@example.com"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="arrival" className={labelClass}>
            Arrival <span className="normal-case tracking-normal text-ink/40">(if known)</span>
          </label>
          <input
            id="arrival"
            name="arrival"
            type="date"
            value={form.arrival}
            onChange={update("arrival")}
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="departure" className={labelClass}>
            Departure <span className="normal-case tracking-normal text-ink/40">(if known)</span>
          </label>
          <input
            id="departure"
            name="departure"
            type="date"
            value={form.departure}
            onChange={update("departure")}
            className={fieldClass}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="guests" className={labelClass}>
            Guests
          </label>
          <select
            id="guests"
            name="guests"
            value={form.guests}
            onChange={update("guests")}
            className={fieldClass}
          >
            {["1", "2", "3", "4", "5", "6+"].map((g) => (
              <option key={g} value={g.replace("+", "")}>
                {g === "1" ? "Just me" : `${g} guests`}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClass}>
            Your message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={form.message}
            onChange={update("message")}
            placeholder="Hello! We'd love to stay with you in Nassau…"
            className={`${fieldClass} resize-none`}
          />
        </div>
      </div>

      {status === "error" && (
        <p className="mt-5 rounded-xl bg-hibiscus-50 px-4 py-3 text-sm leading-relaxed text-hibiscus-600">
          {error} Please try again, or write to us directly at{" "}
          <a href={`mailto:${EMAIL}`} className="font-semibold underline">
            {EMAIL}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="group mt-7 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-hibiscus-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-hibiscus-500/25 transition-all duration-300 hover:bg-hibiscus-600 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending your note…
          </>
        ) : (
          <>
            Send enquiry
            <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
          </>
        )}
      </button>

      <p className="mt-5 text-center text-xs leading-relaxed text-ink/50">
        Prefer plain email? Write to{" "}
        <a href={`mailto:${EMAIL}`} className="font-semibold text-sea-700 link-underline">
          {EMAIL}
        </a>{" "}
        — we answer every message personally.
      </p>
    </form>
  );
}
