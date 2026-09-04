"use client";

import {
  type FormEvent,
  type ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { ArrowRight, Check, Loader2, X } from "lucide-react";

type BookingContextValue = {
  open: () => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used inside <BookingProvider>");
  return ctx;
}

type Status = "idle" | "sending" | "sent" | "error";

const todayIso = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};

function BookingModal({ onClose }: { onClose: () => void }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const firstFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    firstFieldRef.current?.focus();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && status !== "sending") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, status]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    setError(null);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem("email") as HTMLInputElement).value.trim(),
      checkIn,
      checkOut,
      guests: Number((form.elements.namedItem("guests") as HTMLSelectElement).value),
      notes: (form.elements.namedItem("notes") as HTMLTextAreaElement).value.trim(),
    };

    setStatus("sending");
    try {
      const res = await fetch("/api/reserve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(body?.error ?? "Something went wrong. Please try again.");
      }
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  return (
    <div
      className="anim-fade fixed inset-0 z-[90] flex items-end justify-center bg-ink/70 p-4 backdrop-blur-sm sm:items-center"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget && status !== "sending") onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Reserve your stay"
    >
      <div className="anim-rise relative max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-3xl bg-ivory p-7 shadow-soft sm:p-9">
        <button
          type="button"
          onClick={onClose}
          disabled={status === "sending"}
          aria-label="Close reservation form"
          className="absolute right-5 top-5 grid size-10 place-items-center rounded-full border border-ink/10 text-ink/60 transition hover:border-ink/30 hover:text-ink disabled:opacity-40"
        >
          <X className="size-4" />
        </button>

        {status === "sent" ? (
          <div className="flex flex-col items-center px-2 py-10 text-center">
            <span className="grid size-16 place-items-center rounded-full bg-sea/15 text-sea">
              <Check className="size-7" />
            </span>
            <h3 className="mt-6 font-display text-3xl font-light">Request received</h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink/65">
              Thank you — your dates are with us. We&apos;ll reply personally to confirm availability, sent
              onward to <span className="font-medium text-ink">sircharleshotel@hotmail.com</span>. Talk soon.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-8 rounded-full bg-ink px-8 py-3.5 text-[12px] font-semibold uppercase tracking-[0.22em] text-ivory transition hover:bg-sea"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold">Reserve your stay</p>
            <h3 className="mt-2 font-display text-3xl font-light sm:text-4xl">Tell us your dates.</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">
              Every request is answered personally by the hotel. No booking engines, no middlemen.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label htmlFor="bk-name" className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/60">
                  Full name
                </label>
                <input ref={firstFieldRef} id="bk-name" name="name" required minLength={2} maxLength={120} placeholder="Jordan Rolle" className="field" />
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="bk-email" className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/60">
                  Email
                </label>
                <input id="bk-email" name="email" type="email" required placeholder="you@example.com" className="field" />
              </div>
              <div>
                <label htmlFor="bk-in" className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/60">
                  Check-in
                </label>
                <input
                  id="bk-in"
                  type="date"
                  required
                  min={todayIso()}
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="field"
                />
              </div>
              <div>
                <label htmlFor="bk-out" className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/60">
                  Check-out
                </label>
                <input
                  id="bk-out"
                  type="date"
                  required
                  min={checkIn || todayIso()}
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="field"
                />
              </div>
              <div>
                <label htmlFor="bk-guests" className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/60">
                  Guests
                </label>
                <select id="bk-guests" name="guests" className="field" defaultValue="2">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "guest" : "guests"}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="bk-notes" className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/60">
                  Anything else? <span className="font-normal normal-case tracking-normal text-ink/40">(optional)</span>
                </label>
                <textarea id="bk-notes" name="notes" rows={1} maxLength={1000} placeholder="Anniversary trip, extra cot…" className="field resize-none" />
              </div>

              {status === "error" && error ? (
                <p className="sm:col-span-2 rounded-xl border border-coral/40 bg-coral/10 px-4 py-3 text-sm text-coral">{error}</p>
              ) : null}

              <button
                type="submit"
                disabled={status === "sending"}
                className="group mt-2 inline-flex items-center justify-center gap-2.5 rounded-full bg-ink px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.22em] text-ivory transition hover:bg-sea disabled:opacity-60 sm:col-span-2"
              >
                {status === "sending" ? (
                  <>
                    Sending your request
                    <Loader2 className="size-4 animate-spin" />
                  </>
                ) : (
                  <>
                    Send reservation request
                    <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-1" />
                  </>
                )}
              </button>
              <p className="text-center text-[11px] leading-relaxed text-ink/45 sm:col-span-2">
                Requests are emailed directly to the hotel at sircharleshotel@hotmail.com — we confirm every
                stay personally.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <BookingContext.Provider value={{ open }}>
      {children}
      {isOpen ? <BookingModal onClose={close} /> : null}
    </BookingContext.Provider>
  );
}
