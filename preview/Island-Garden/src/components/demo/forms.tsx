"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";
import { ArrowRight, CalendarDays, CircleCheck, LoaderCircle, Send } from "lucide-react";
import { PREBOOK_EVENT, type PrebookDetail } from "./prebook";

type Status =
  | { phase: "idle" }
  | { phase: "sending" }
  | { phase: "sent"; reference: string }
  | { phase: "error"; error: string };

async function postInquiry(
  slug: string,
  payload: Record<string, unknown>,
): Promise<{ ok: boolean; reference?: string; error?: string }> {
  try {
    const res = await fetch(`/api/demo/${slug}/inquiries`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = (await res.json().catch(() => null)) as { ok?: boolean; reference?: string; error?: string } | null;
    if (!res.ok || !data?.ok) {
      return { ok: false, error: data?.error ?? "Something went wrong. Please try again." };
    }
    return { ok: true, reference: data.reference };
  } catch {
    return { ok: false, error: "Network error — please try again in a moment." };
  }
}

const inputLight =
  "w-full rounded-xl border border-sandline bg-white/70 px-4 py-3 text-sm font-medium text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-pine";
const labelLight = "mb-1.5 block text-[10px] font-bold uppercase tracking-[0.22em] text-ink-soft";

const inputDark =
  "w-full rounded-xl border border-cream/20 bg-cream/[0.06] px-4 py-3 text-sm font-medium text-cream outline-none transition-colors placeholder:text-cream/35 focus:border-coral";
const labelDark = "mb-1.5 block text-[10px] font-bold uppercase tracking-[0.22em] text-cream/55";

/* ---------------------------------- Booking ---------------------------------- */

export function BookingForm({ slug, rooms }: { slug: string; rooms: string[] }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  const [roomType, setRoomType] = useState("");
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState<Status>({ phase: "idle" });

  // Listen for "check availability" / "request this room" actions elsewhere on the page.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const ci = params.get("check_in");
    const co = params.get("check_out");
    const g = params.get("guests");
    const r = params.get("room");
    if (ci) setCheckIn(ci);
    if (co) setCheckOut(co);
    if (g && !Number.isNaN(Number(g))) setGuests(Math.min(8, Math.max(1, Number(g))));
    if (r) setRoomType(r);

    const onPrebook = (e: Event) => {
      const detail = (e as CustomEvent<PrebookDetail>).detail ?? {};
      if (detail.checkIn) setCheckIn(detail.checkIn);
      if (detail.checkOut) setCheckOut(detail.checkOut);
      if (detail.guests) setGuests(detail.guests);
      if (detail.roomType) setRoomType(detail.roomType);
    };
    window.addEventListener(PREBOOK_EVENT, onPrebook);
    return () => window.removeEventListener(PREBOOK_EVENT, onPrebook);
  }, []);

  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 0;
    const diff = Math.round((Date.parse(checkOut) - Date.parse(checkIn)) / 86_400_000);
    return Number.isFinite(diff) && diff > 0 ? diff : 0;
  }, [checkIn, checkOut]);

  async function submit(e: FormEvent) {
    e.preventDefault();
    setStatus({ phase: "sending" });
    const result = await postInquiry(slug, {
      kind: "booking",
      name,
      email,
      checkIn: checkIn || undefined,
      checkOut: checkOut || undefined,
      guests,
      roomType: roomType || undefined,
      message: notes || undefined,
    });
    if (result.ok && result.reference) {
      setStatus({ phase: "sent", reference: result.reference });
    } else {
      setStatus({ phase: "error", error: result.error ?? "Please try again." });
    }
  }

  if (status.phase === "sent") {
    return (
      <div className="flex min-h-[480px] flex-col items-center justify-center rounded-[2rem] border border-pine/25 bg-cream p-8 text-center shadow-[0_40px_90px_-32px_rgba(13,28,22,0.4)] md:p-12">
        <span className="grid size-14 place-items-center rounded-full bg-pine/10 text-pine">
          <CircleCheck size={26} />
        </span>
        <p className="mt-6 font-display text-3xl font-medium">Request received</p>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-soft">
          Thank you, {name.split(" ")[0] || "friend"} — our front desk team will confirm your stay personally
          {nights > 0 ? ` — ${nights} ${nights === 1 ? "night" : "nights"} in Nassau` : ""}. Keep this reference handy:
        </p>
        <p className="mt-5 rounded-full border border-sandline bg-sand px-6 py-2.5 font-mono text-sm font-bold tracking-[0.18em] text-pine">
          {status.reference}
        </p>
        <button
          type="button"
          onClick={() => setStatus({ phase: "idle" })}
          className="mt-8 text-[11px] font-bold uppercase tracking-[0.2em] text-ink-soft underline-offset-4 hover:underline"
        >
          Make another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className="rounded-[2rem] border border-sandline bg-cream p-6 shadow-[0_40px_90px_-36px_rgba(13,28,22,0.45)] md:p-9"
      aria-label="Book direct request form"
    >
      <div className="mb-7 flex items-center justify-between gap-4">
        <p className="flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.24em] text-ink-soft">
          <CalendarDays size={15} className="text-coral" />
          Booking request
        </p>
        {nights > 0 ? (
          <span className="rounded-full bg-pine/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-pine">
            {nights} {nights === 1 ? "night" : "nights"}
          </span>
        ) : null}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="bk-name" className={labelLight}>
            Full name
          </label>
          <input
            id="bk-name"
            required
            minLength={2}
            maxLength={80}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Wells"
            className={inputLight}
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="bk-email" className={labelLight}>
            Email
          </label>
          <input
            id="bk-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            className={inputLight}
            autoComplete="email"
          />
        </div>
        <div>
          <label htmlFor="bk-in" className={labelLight}>
            Check-in
          </label>
          <input
            id="bk-in"
            type="date"
            required
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className={inputLight}
          />
        </div>
        <div>
          <label htmlFor="bk-out" className={labelLight}>
            Check-out
          </label>
          <input
            id="bk-out"
            type="date"
            required
            min={checkIn || undefined}
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className={inputLight}
          />
        </div>
        <div>
          <label htmlFor="bk-guests" className={labelLight}>
            Guests
          </label>
          <select id="bk-guests" value={guests} onChange={(e) => setGuests(Number(e.target.value))} className={inputLight}>
            {Array.from({ length: 8 }, (_, i) => i + 1).map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="bk-room" className={labelLight}>
            Room preference
          </label>
          <select id="bk-room" value={roomType} onChange={(e) => setRoomType(e.target.value)} className={inputLight}>
            <option value="">No preference</option>
            {rooms.map((room) => (
              <option key={room} value={room}>
                {room}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="bk-notes" className={labelLight}>
            Anything we should know? <span className="normal-case opacity-60">(shuttle times, occasions…)</span>
          </label>
          <textarea
            id="bk-notes"
            rows={3}
            maxLength={1000}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="We land at 6:40 pm — could we arrange the airport shuttle?"
            className={`${inputLight} resize-none`}
          />
        </div>

        {/* honeypot */}
        <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 opacity-0" />
      </div>

      {status.phase === "error" ? (
        <p className="mt-4 rounded-xl border border-coral/30 bg-coral/10 px-4 py-3 text-sm font-semibold text-coral-deep">
          {status.error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status.phase === "sending"}
        className="group mt-7 flex w-full items-center justify-center gap-3 rounded-full bg-coral py-4.5 text-[12px] font-bold uppercase tracking-[0.2em] text-cream transition-colors hover:bg-coral-deep disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status.phase === "sending" ? (
          <>
            Sending… <LoaderCircle size={16} className="animate-spin" />
          </>
        ) : (
          <>
            Send booking request
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </>
        )}
      </button>
      <p className="mt-4 text-center text-xs leading-relaxed text-ink-soft">
        No payment now — this goes straight to the front desk, and we confirm availability personally.
      </p>
    </form>
  );
}

/* ---------------------------------- Contact ---------------------------------- */

export function ContactForm({ slug }: { slug: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>({ phase: "idle" });

  async function submit(e: FormEvent) {
    e.preventDefault();
    setStatus({ phase: "sending" });
    const result = await postInquiry(slug, { kind: "message", name, email, message });
    if (result.ok && result.reference) {
      setStatus({ phase: "sent", reference: result.reference });
    } else {
      setStatus({ phase: "error", error: result.error ?? "Please try again." });
    }
  }

  if (status.phase === "sent") {
    return (
      <div className="flex min-h-[380px] flex-col items-center justify-center rounded-[2rem] border border-cream/15 bg-cream/[0.04] p-8 text-center md:p-12">
        <span className="grid size-14 place-items-center rounded-full bg-coral/20 text-coral">
          <CircleCheck size={26} />
        </span>
        <p className="mt-6 font-display text-3xl font-medium text-cream">Message on its way</p>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-cream/65">
          The front desk team will reply to {email || "your email"} shortly. Your reference:{" "}
          <span className="font-mono font-bold tracking-[0.14em] text-coral">{status.reference}</span>
        </p>
        <button
          type="button"
          onClick={() => {
            setMessage("");
            setStatus({ phase: "idle" });
          }}
          className="mt-8 text-[11px] font-bold uppercase tracking-[0.2em] text-cream/60 underline-offset-4 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className="rounded-[2rem] border border-cream/15 bg-cream/[0.04] p-6 md:p-9"
      aria-label="Contact form"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="ct-name" className={labelDark}>
            Name
          </label>
          <input
            id="ct-name"
            required
            minLength={2}
            maxLength={80}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Wells"
            className={inputDark}
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="ct-email" className={labelDark}>
            Email
          </label>
          <input
            id="ct-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            className={inputDark}
            autoComplete="email"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="ct-msg" className={labelDark}>
            Message
          </label>
          <textarea
            id="ct-msg"
            required
            rows={6}
            minLength={10}
            maxLength={2000}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Hi! We're planning a family trip in March — do you have two rooms side by side?"
            className={`${inputDark} resize-none`}
          />
        </div>
      </div>

      {status.phase === "error" ? (
        <p className="mt-4 rounded-xl border border-coral/40 bg-coral/15 px-4 py-3 text-sm font-semibold text-coral">
          {status.error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status.phase === "sending"}
        className="group mt-7 flex w-full items-center justify-center gap-3 rounded-full bg-coral py-4.5 text-[12px] font-bold uppercase tracking-[0.2em] text-cream transition-colors hover:bg-coral-deep disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status.phase === "sending" ? (
          <>
            Sending… <LoaderCircle size={16} className="animate-spin" />
          </>
        ) : (
          <>
            Send message
            <Send size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </>
        )}
      </button>
      <p className="mt-4 text-center text-xs text-cream/45">Answered by the 24-hour front desk team.</p>
    </form>
  );
}
