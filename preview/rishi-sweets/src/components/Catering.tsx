import { useState, type FormEvent } from "react";
import { Check, PartyPopper, Send, Users } from "lucide-react";
import { cateringEvents, site, wa } from "../data/site";
import { Reveal, SectionHead, Tilt } from "./ui";

const inputCls =
  "w-full rounded-xl border border-ink-900/12 bg-ivory-50 px-4 py-3 text-[14px] font-medium text-ink-900 placeholder:text-ink-500/60 transition-colors focus:border-maroon-700 focus:outline-none";

export default function Catering() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    type: cateringEvents[0],
    guests: "",
    location: "",
    requirements: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const set = (k: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const msg = [
      "Hi Rishi Sweets, I would like to enquire about catering.",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Event date: ${form.date || "—"}`,
      `Event type: ${form.type}`,
      `Guests: ${form.guests || "—"}`,
      `Location: ${form.location || "—"}`,
      `Food requirements: ${form.requirements || "—"}`,
      form.message ? `Message: ${form.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(wa(msg), "_blank", "noopener,noreferrer");
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="catering" className="relative scroll-mt-24 overflow-hidden py-24 md:py-32">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-1/2 bg-[radial-gradient(55%_60%_at_85%_10%,rgba(232,137,47,0.14),transparent_70%)]"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-2">
          {/* left — story */}
          <div>
            <SectionHead
              align="left"
              index="07"
              eyebrow="Catering & Events"
              title={
                <>
                  Planning a Large <span className="gold-grad-text italic">Celebration?</span>
                </>
              }
              sub="From family gatherings to large events, enquire about catering and bulk food requirements — the sweets counter, kitchen and party hall are all under one roof."
            />

            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-2">
                {cateringEvents.map((e) => (
                  <span
                    key={e}
                    className="inline-flex items-center gap-1.5 rounded-full border border-maroon-800/20 bg-ivory-50 px-4 py-2 text-[11px] font-bold tracking-[0.1em] text-maroon-800 uppercase"
                  >
                    <PartyPopper size={12} className="text-gold-600" /> {e}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-9 flex items-center gap-5 rounded-3xl border border-gold-500/30 bg-gradient-to-br from-ivory-50 to-ivory-200 p-6">
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-maroon-800 text-gold-300">
                  <Users size={26} strokeWidth={1.7} />
                </span>
                <div>
                  <p className="font-display text-4xl font-bold text-ink-900">
                    {site.cateringCapacity}
                  </p>
                  <p className="text-[11px] font-bold tracking-[0.22em] text-ink-500 uppercase">
                    Listed catering capacity · people
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="group relative mt-9 overflow-hidden rounded-[1.8rem] depth-shadow">
                <img
                  src="https://images.pexels.com/photos/37976941/pexels-photo-37976941.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=650&w=940"
                  alt="Catering service at a celebration"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[16/9] w-full object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                />
                <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-maroon-950/70 to-transparent" />
                <p className="absolute bottom-4 left-5 text-[12px] font-bold tracking-[0.18em] text-ivory-100 uppercase">
                  Weddings · Functions · Corporate · Festivals
                </p>
              </div>
            </Reveal>
          </div>

          {/* right — form */}
          <Reveal delay={0.1}>
            <Tilt max={3} lift={false}>
              <form
                onSubmit={submit}
                className="relative overflow-hidden rounded-[2rem] border border-gold-500/25 bg-ivory-50 p-7 shadow-[0_40px_80px_-40px_rgba(51,8,15,0.45)] md:p-9"
                aria-label="Catering enquiry form"
              >
                <div aria-hidden className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-maroon-800 via-saffron-500 to-gold-400" />
                <h3 className="font-display text-2xl font-semibold text-ink-900">Catering Enquiry</h3>
                <p className="mt-1.5 text-[12.5px] text-ink-500">
                  Sends your enquiry straight to Rishi Sweets on WhatsApp. No data is stored on this
                  site.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-[11px] font-bold tracking-[0.14em] text-ink-700 uppercase">Name *</span>
                    <input required value={form.name} onChange={set("name")} placeholder="Your name" className={inputCls} autoComplete="name" />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-[11px] font-bold tracking-[0.14em] text-ink-700 uppercase">Phone *</span>
                    <input required type="tel" value={form.phone} onChange={set("phone")} placeholder="Your phone number" className={inputCls} autoComplete="tel" />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-[11px] font-bold tracking-[0.14em] text-ink-700 uppercase">Event date</span>
                    <input type="date" value={form.date} onChange={set("date")} min={new Date().toISOString().split("T")[0]} className={inputCls} />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-[11px] font-bold tracking-[0.14em] text-ink-700 uppercase">Event type</span>
                    <select value={form.type} onChange={set("type")} className={inputCls}>
                      {cateringEvents.map((e) => (
                        <option key={e}>{e}</option>
                      ))}
                    </select>
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-[11px] font-bold tracking-[0.14em] text-ink-700 uppercase">Guests</span>
                    <input type="number" min={10} value={form.guests} onChange={set("guests")} placeholder="e.g. 250" className={inputCls} />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-[11px] font-bold tracking-[0.14em] text-ink-700 uppercase">Location</span>
                    <input value={form.location} onChange={set("location")} placeholder="Venue / area" className={inputCls} />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="mb-1.5 block text-[11px] font-bold tracking-[0.14em] text-ink-700 uppercase">Food requirements</span>
                    <input value={form.requirements} onChange={set("requirements")} placeholder="e.g. Veg menu, sweets counter, biryani, snacks…" className={inputCls} />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="mb-1.5 block text-[11px] font-bold tracking-[0.14em] text-ink-700 uppercase">Message</span>
                    <textarea rows={3} value={form.message} onChange={set("message")} placeholder="Anything else we should know?" className={inputCls + " resize-none"} />
                  </label>
                </div>

                <button
                  type="submit"
                  className="group relative mt-7 flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-full bg-maroon-800 py-4 text-[12.5px] font-bold tracking-[0.18em] text-ivory-50 uppercase transition-all hover:bg-maroon-700"
                >
                  <span className="pointer-events-none absolute inset-0 -translate-x-[130%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-[130%]" />
                  {sent ? <Check size={16} /> : <Send size={15} />}
                  {sent ? "Opening WhatsApp…" : "Enquire About Catering"}
                </button>
                <p className="mt-3 text-center text-[11px] text-ink-500">
                  Prefer to talk? Call <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="font-bold text-maroon-700 underline decoration-gold-400 underline-offset-2">{site.phone}</a>
                </p>
              </form>
            </Tilt>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
