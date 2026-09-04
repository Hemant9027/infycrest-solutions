"use client";

import { type FormEvent, useState } from "react";
import { Check, Loader2, Send } from "lucide-react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    setError(null);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem("email") as HTMLInputElement).value.trim(),
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim(),
    };

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(body?.error ?? "Something went wrong. Please try again.");
      }
      setStatus("sent");
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-3xl border border-sea/25 bg-sea/5 p-10 text-center">
        <span className="grid size-16 place-items-center rounded-full bg-sea/15 text-sea">
          <Check className="size-7" />
        </span>
        <h3 className="mt-6 font-display text-3xl font-light">Message on its way</h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink/65">
          Thank you for writing to Sir Charles Hotel. Your note has been delivered to{" "}
          <span className="font-medium text-ink">sircharleshotel@hotmail.com</span> — we&apos;ll be in
          touch shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 rounded-full border border-ink/15 px-7 py-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-ink transition hover:border-ink/40"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 rounded-3xl border border-ink/10 bg-ivory p-7 shadow-card sm:p-9">
      <div>
        <label htmlFor="ct-name" className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/60">
          Your name
        </label>
        <input id="ct-name" name="name" required minLength={2} maxLength={120} placeholder="Jordan Rolle" className="field" />
      </div>
      <div>
        <label htmlFor="ct-email" className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/60">
          Email
        </label>
        <input id="ct-email" name="email" type="email" required placeholder="you@example.com" className="field" />
      </div>
      <div>
        <label htmlFor="ct-message" className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/60">
          Message
        </label>
        <textarea
          id="ct-message"
          name="message"
          required
          minLength={10}
          maxLength={3000}
          rows={5}
          placeholder="Tell us about your trip — dates, questions, anything at all…"
          className="field resize-none"
        />
      </div>

      {status === "error" && error ? (
        <p className="rounded-xl border border-coral/40 bg-coral/10 px-4 py-3 text-sm text-coral">{error}</p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-ink px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.22em] text-ivory transition hover:bg-sea disabled:opacity-60"
      >
        {status === "sending" ? (
          <>
            Sending
            <Loader2 className="size-4 animate-spin" />
          </>
        ) : (
          <>
            Send message
            <Send className="size-4 transition-transform duration-500 group-hover:translate-x-1" />
          </>
        )}
      </button>
    </form>
  );
}
