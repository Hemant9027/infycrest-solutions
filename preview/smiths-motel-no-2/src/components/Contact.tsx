"use client";

import { useMemo, useState, type FormEvent, type ReactNode } from "react";
import {
  CalendarCheck,
  Check,
  Copy,
  Loader2,
  Mail,
  MapPin,
  Send,
  Sparkles,
} from "lucide-react";
import Reveal from "./Reveal";
import { SITE } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

const INITIAL_FORM = {
  name: "",
  email: "",
  checkIn: "",
  checkOut: "",
  guests: "2",
  message: "",
};

const inputCls =
  "w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 text-[15px] font-medium text-ink outline-none transition placeholder:text-ink/35 focus:border-coral focus:ring-4 focus:ring-coral/20";

function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-xs font-bold tracking-[0.14em] text-ink/55 uppercase">
        {label}
      </span>
      {children}
    </label>
  );
}

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [copied, setCopied] = useState(false);

  const set = (key: keyof typeof INITIAL_FORM) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const mailtoHref = useMemo(() => {
    const lines = [
      `Name: ${form.name || "—"}`,
      `Email: ${form.email || "—"}`,
      `Check-in: ${form.checkIn || "flexible"}`,
      `Check-out: ${form.checkOut || "flexible"}`,
      `Guests: ${form.guests}`,
      "",
      form.message || "(Your message here)",
      "",
      "— sent from the Smith's Motel No. 2 website",
    ];
    return `${SITE.mailto}?subject=${encodeURIComponent(
      "Availability enquiry — Smith's Motel No. 2",
    )}&body=${encodeURIComponent(lines.join("\n"))}`;
  }, [form]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, guests: Number(form.guests) }),
      });
      const data = (await res.json().catch(() => null)) as {
        ok?: boolean;
        error?: string;
      } | null;
      if (!res.ok || !data?.ok) {
        throw new Error(data?.error ?? "Please try again in a moment.");
      }
      setStatus("sent");
    } catch (error) {
      setErrorMsg(
        error instanceof Error ? error.message : "Please try again in a moment.",
      );
      setStatus("error");
    }
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(SITE.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable — no-op */
    }
  }

  return (
    <section
      id="contact"
      className="relative z-10 -mt-8 scroll-mt-24 overflow-hidden rounded-t-[2.5rem] bg-ink pt-20 pb-24 text-sand md:rounded-t-[3.5rem] md:pt-28 md:pb-32"
    >
      <div
        aria-hidden
        className="absolute -top-24 right-[-10%] size-[28rem] rounded-full bg-lagoon/15 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute bottom-[-30%] left-[-10%] size-[30rem] rounded-full bg-coral/15 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-12 lg:gap-12">
        {/* Info */}
        <div className="lg:col-span-5">
          <Reveal>
            <p className="flex items-center gap-2 text-xs font-bold tracking-[0.22em] text-coral uppercase">
              <Mail className="size-4" />
              Contact
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] font-semibold tracking-tight md:text-5xl">
              Say hello — <em className="text-sun">we&rsquo;d love to host you.</em>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-sand/70">
              Booking at No. 2 is refreshingly old-school: tell us your dates
              and we&rsquo;ll email you back with availability and our best
              rate. No accounts, no booking fees.
            </p>
          </Reveal>

          <div className="mt-10 space-y-4">
            <Reveal delay={200}>
              <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-sand/10 bg-white/[0.05] p-5">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-coral text-cream">
                  <Mail className="size-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold tracking-[0.16em] text-sand/50 uppercase">
                    Email us
                  </p>
                  <a
                    href={SITE.mailto}
                    className="block truncate font-display text-lg font-semibold text-sand transition-colors hover:text-coral"
                  >
                    {SITE.email}
                  </a>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={copyEmail}
                    aria-label="Copy email address"
                    className="grid size-10 place-items-center rounded-full border border-sand/20 text-sand/80 transition-colors hover:border-coral hover:text-coral"
                  >
                    {copied ? (
                      <Check className="size-4 text-lagoon" />
                    ) : (
                      <Copy className="size-4" />
                    )}
                  </button>
                  <a
                    href={SITE.mailto}
                    className="inline-flex items-center gap-2 rounded-full bg-sand px-4 py-2 text-sm font-bold text-ink transition-colors hover:bg-coral hover:text-cream"
                  >
                    <Send className="size-3.5" />
                    Email Us
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <div className="flex items-center gap-4 rounded-2xl border border-sand/10 bg-white/[0.05] p-5">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-lagoon text-cream">
                  <MapPin className="size-5" />
                </span>
                <div>
                  <p className="text-xs font-bold tracking-[0.16em] text-sand/50 uppercase">
                    Find us
                  </p>
                  <p className="font-display text-lg font-semibold">
                    {SITE.location}
                  </p>
                  <p className="mt-0.5 text-sm text-sand/55">
                    We&rsquo;ll share easy directions when you book.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="flex items-center gap-4 rounded-2xl border border-sand/10 bg-white/[0.05] p-5">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-sun text-ink">
                  <Sparkles className="size-5" />
                </span>
                <div>
                  <p className="text-xs font-bold tracking-[0.16em] text-sand/50 uppercase">
                    Good to know
                  </p>
                  <p className="mt-0.5 text-sm leading-relaxed text-sand/70">
                    Every enquiry is answered personally — usually with a few
                    island tips thrown in.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Booking form */}
        <div className="lg:col-span-7">
          <Reveal delay={150}>
            <div
              id="booking"
              className="scroll-mt-28 rounded-[2rem] bg-sand p-6 text-ink shadow-[0_40px_90px_-40px_rgba(0,0,0,0.6)] md:p-9"
            >
              {status === "sent" ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center rounded-2xl bg-lagoon-soft/60 p-8 text-center">
                  <span className="grid size-16 place-items-center rounded-full bg-lagoon text-cream">
                    <Check className="size-8" />
                  </span>
                  <h3 className="mt-6 font-display text-3xl font-semibold">
                    Enquiry sent — thank you!
                  </h3>
                  <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-ink/65">
                    We&rsquo;ve received your dates and will reply by email as
                    soon as we can. Talk soon — and thank you for choosing
                    No. 2.
                  </p>
                  <div className="mt-8 flex flex-wrap justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setForm(INITIAL_FORM);
                        setStatus("idle");
                      }}
                      className="rounded-full border-2 border-ink/15 px-6 py-3 text-sm font-bold text-ink transition-colors hover:border-coral hover:text-coral-deep"
                    >
                      Send another enquiry
                    </button>
                    <a
                      href={mailtoHref}
                      className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-bold text-sand transition-colors hover:bg-coral-deep"
                    >
                      <Mail className="size-4" />
                      Also send by email
                    </a>
                  </div>
                </div>
              ) : (
                <>
                  <h3 className="font-display text-3xl font-semibold tracking-tight">
                    Check availability
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">
                    Tell us when you&rsquo;re coming — we&rsquo;ll email you
                    back with availability and our best rate.
                  </p>

                  <form
                    onSubmit={onSubmit}
                    className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2"
                  >
                    <Field label="Your name *">
                      <input
                        required
                        value={form.name}
                        onChange={(e) => set("name")(e.target.value)}
                        placeholder="Jane Appleton"
                        className={inputCls}
                        autoComplete="name"
                        maxLength={120}
                      />
                    </Field>
                    <Field label="Email *">
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => set("email")(e.target.value)}
                        placeholder="you@example.com"
                        className={inputCls}
                        autoComplete="email"
                      />
                    </Field>
                    <Field label="Check-in">
                      <input
                        type="date"
                        value={form.checkIn}
                        onChange={(e) => set("checkIn")(e.target.value)}
                        className={inputCls}
                      />
                    </Field>
                    <Field label="Check-out">
                      <input
                        type="date"
                        value={form.checkOut}
                        onChange={(e) => set("checkOut")(e.target.value)}
                        className={inputCls}
                      />
                    </Field>
                    <Field label="Guests" className="sm:col-span-2">
                      <select
                        value={form.guests}
                        onChange={(e) => set("guests")(e.target.value)}
                        className={inputCls}
                      >
                        {[1, 2, 3, 4, 5, 6].map((n) => (
                          <option key={n} value={n}>
                            {n} {n === 1 ? "guest" : "guests"}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field
                      label="Anything we should know?"
                      className="sm:col-span-2"
                    >
                      <textarea
                        rows={4}
                        value={form.message}
                        onChange={(e) => set("message")(e.target.value)}
                        placeholder="Dates flexible? Celebrating something? Tell us!"
                        className={`${inputCls} resize-none`}
                        maxLength={2000}
                      />
                    </Field>

                    {status === "error" && (
                      <p className="rounded-xl bg-coral-soft px-4 py-3 text-sm font-semibold text-coral-deep sm:col-span-2">
                        {errorMsg}{" "}
                        <a
                          href={mailtoHref}
                          className="underline underline-offset-2"
                        >
                          Email us directly instead
                        </a>
                        .
                      </p>
                    )}

                    <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
                      <button
                        type="submit"
                        disabled={status === "sending"}
                        className="inline-flex items-center gap-2.5 rounded-full bg-ink px-8 py-4 font-bold text-sand shadow-lg shadow-ink/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-coral-deep disabled:translate-y-0 disabled:opacity-60"
                      >
                        {status === "sending" ? (
                          <Loader2 className="size-5 animate-spin" />
                        ) : (
                          <CalendarCheck className="size-5" />
                        )}
                        {status === "sending" ? "Sending…" : "Check Availability"}
                      </button>
                      <a
                        href={mailtoHref}
                        className="text-sm font-bold text-ink/60 underline decoration-coral decoration-2 underline-offset-4 transition-colors hover:text-coral-deep"
                      >
                        or send from your own email app
                      </a>
                    </div>
                  </form>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
