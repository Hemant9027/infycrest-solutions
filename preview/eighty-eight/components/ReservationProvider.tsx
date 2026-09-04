"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Phone, CalendarCheck, Check } from "lucide-react";
import { restaurant } from "@/data/restaurant";

const Ctx = createContext<{ openReservation: () => void }>({ openReservation: () => {} });
export const useReservation = () => useContext(Ctx);

const inputCls =
  "w-full bg-ember border border-ivory/15 rounded-sm px-4 py-3 text-sm text-ivory placeholder:text-stonewarm/60 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/40 transition-colors";

export default function ReservationProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const openReservation = () => {
    setSent(false);
    setOpen(true);
  };
  const close = () => setOpen(false);

  return (
    <Ctx.Provider value={{ openReservation }}>
      {children}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-0 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label="Request a reservation"
          >
            <button
              aria-label="Close reservation form"
              onClick={close}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-lg bg-ink border border-ivory/10 rounded-lg p-7 sm:p-9 max-h-[92vh] overflow-y-auto"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="eyebrow text-[10px] font-semibold text-gold">Reservation request</p>
                  <h3 className="font-display text-3xl mt-2 text-ivory">Reserve a table</h3>
                </div>
                <button
                  onClick={close}
                  aria-label="Close"
                  className="text-stonewarm hover:text-ivory transition-colors p-1"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {sent ? (
                <div className="mt-8 flex flex-col items-center text-center py-6">
                  <div className="circle-motif h-14 w-14 flex items-center justify-center">
                    <Check className="text-gold h-6 w-6" />
                  </div>
                  <h4 className="font-display text-2xl mt-6 text-ivory">Request received</h4>
                  <p className="mt-3 text-stonewarm max-w-xs text-sm leading-relaxed">
                    Thank you. Your reservation request has been noted. We&apos;ll
                    be in touch on {restaurant.phoneDisplay} to confirm availability.
                  </p>
                  <p className="mt-4 text-[11px] text-stonewarm/70">
                    This is a request — confirmation is by phone only.
                  </p>
                  <button
                    onClick={close}
                    className="mt-6 inline-flex items-center gap-2 uppercase tracking-wide2 text-[11px] text-gold hover:text-goldLight transition-colors"
                  >
                    Close <X className="h-3.5 w-3.5" />
                  </button>
                </div>
              ) : (
                <form
                  className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                >
                  <label className="block">
                    <span className="text-xs text-stonewarm mb-1.5 block">Name</span>
                    <input required className={inputCls} name="name" autoComplete="name" placeholder="Your name" />
                  </label>
                  <label className="block">
                    <span className="text-xs text-stonewarm mb-1.5 block">Phone</span>
                    <input required className={inputCls} name="phone" type="tel" autoComplete="tel" placeholder="+230 ..." />
                  </label>
                  <label className="block">
                    <span className="text-xs text-stonewarm mb-1.5 block">Email</span>
                    <input className={inputCls} name="email" type="email" autoComplete="email" placeholder="you@email.com" />
                  </label>
                  <label className="block">
                    <span className="text-xs text-stonewarm mb-1.5 block">Date</span>
                    <input required className={inputCls} name="date" type="date" />
                  </label>
                  <label className="block">
                    <span className="text-xs text-stonewarm mb-1.5 block">Time</span>
                    <input required className={inputCls} name="time" type="time" />
                  </label>
                  <label className="block">
                    <span className="text-xs text-stonewarm mb-1.5 block">Guests</span>
                    <select className={inputCls} name="guests" defaultValue="2">
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? "guest" : "guests"}
                        </option>
                      ))}
                      <option value="9+">9+ guests</option>
                    </select>
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="text-xs text-stonewarm mb-1.5 block">Special requests</span>
                    <textarea rows={2} className={inputCls} name="notes" placeholder="Occasion, seating preference..." />
                  </label>

                  <div className="sm:col-span-2 mt-1">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 uppercase tracking-wide2 text-[12px] font-medium px-8 py-4 bg-crimson text-ivory hover:bg-vermilion hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <CalendarCheck className="h-4 w-4" /> Request reservation
                    </button>
                    <p className="mt-3 text-center text-[11px] text-stonewarm/70">
                      This is a reservation <em>request</em>. We confirm by phone —
                      <a className="text-gold inline-block" href={restaurant.phoneTel}>
                        {" "}call {restaurant.phoneDisplay}
                      </a>
                    </p>
                  </div>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Floating call button (desktop) */}
      <a
        href={restaurant.phoneTel}
        aria-label={`Call ${restaurant.phoneDisplay}`}
        className="hidden md:inline-flex fixed bottom-8 right-8 z-50 items-center gap-2 bg-ink/80 backdrop-blur border border-ivory/15 rounded-sm px-4 py-3 text-[12px] uppercase tracking-wide2 text-ivory hover:border-gold hover:text-gold transition-all shadow-2xl"
      >
        <Phone className="h-4 w-4 text-gold" /> {restaurant.phoneDisplay}
      </a>
    </Ctx.Provider>
  );
}
