"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Check, Send } from "lucide-react";

type Status = "idle" | "sending" | "sent" | "error";

const inputCls =
  "w-full rounded-xl border border-ink/15 bg-cream px-4 py-3.5 text-sm text-ink outline-none transition-all placeholder:text-ink/35 focus:border-coral focus:bg-white focus:shadow-[0_0_0_4px_rgb(206_98_70/0.12)]";

const labelCls =
  "mb-1.5 block text-[11px] font-bold uppercase tracking-[0.16em] text-ink/55";

export default function InquiryForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex min-h-[420px] flex-col items-center justify-center rounded-[2rem] bg-cream p-10 text-center shadow-[0_30px_70px_-30px_rgb(0_0_0/0.5)]"
      >
        <span className="grid h-16 w-16 place-items-center rounded-full bg-coral/10 text-coral">
          <Check className="h-7 w-7" strokeWidth={2.2} />
        </span>
        <h3 className="mt-6 font-display text-3xl text-ink">
          Your note is on its way
        </h3>
        <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-ink/65">
          Thank you for writing. Kevin reads every inquiry personally and will
          be in touch soon. Can’t wait? Call{" "}
          <a
            href="tel:+12423391666"
            className="font-semibold text-coral underline underline-offset-2"
          >
            +1 (242) 339-1666
          </a>
          .
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-8 rounded-full border border-ink/20 px-6 py-3 text-[12px] font-bold uppercase tracking-[0.14em] text-ink transition-colors hover:border-coral hover:text-coral"
        >
          Send another note
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[2rem] bg-cream p-7 shadow-[0_30px_70px_-30px_rgb(0_0_0/0.5)] sm:p-9"
    >
      <p className="font-display text-2xl italic text-ink">
        Tell us when you’re coming
      </p>
      <p className="mt-1.5 text-sm text-ink/55">
        A few details, and Kevin will take it from there.
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="name" className={labelCls}>
            Your name *
          </label>
          <input
            id="name"
            name="name"
            required
            maxLength={120}
            placeholder="e.g. Martha Rolle"
            className={inputCls}
          />
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="contact" className={labelCls}>
            Email or phone *
          </label>
          <input
            id="contact"
            name="contact"
            required
            maxLength={160}
            placeholder="How do we reach you?"
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="arrival" className={labelCls}>
            Arrival
          </label>
          <input id="arrival" name="arrival" type="date" className={inputCls} />
        </div>
        <div>
          <label htmlFor="departure" className={labelCls}>
            Departure
          </label>
          <input
            id="departure"
            name="departure"
            type="date"
            className={inputCls}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="guests" className={labelCls}>
            Guests
          </label>
          <select id="guests" name="guests" className={inputCls} defaultValue="">
            <option value="" disabled>
              How many of you?
            </option>
            <option value="1">Just me</option>
            <option value="2">Two of us</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
            <option value="5+">Five or more — we may need the suite</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelCls}>
            Anything else?
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            maxLength={2000}
            placeholder="Birding trip? Family visit? A long, quiet week with a book? Tell Kevin what you’re dreaming of…"
            className={`${inputCls} resize-none`}
          />
        </div>
      </div>

      {status === "error" && (
        <p className="mt-4 rounded-xl bg-coral/10 px-4 py-3 text-sm font-medium text-coral-deep">
          Something went wrong — please email us directly at
          gagas.nest@outlook.com or call +1 (242) 339-1666.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-7 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-coral px-7 py-4 text-[13px] font-bold uppercase tracking-[0.14em] text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-coral-deep disabled:translate-y-0 disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-cream/40 border-t-cream" />
            Sending…
          </>
        ) : (
          <>
            Plan Your Stay
            <Send className="h-4 w-4" />
          </>
        )}
      </button>
      <p className="mt-4 text-[12px] leading-relaxed text-ink/45">
        This sends your note straight to Gaga’s Nest — no accounts, no
        booking-engine fees.
      </p>
    </form>
  );
}
