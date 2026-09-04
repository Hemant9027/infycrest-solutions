"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, LoaderCircle, Mail, MapPin, Phone, Send, UserRound } from "lucide-react";
import { type FormEvent, useState } from "react";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "success" | "error";

const contactMethods = [
  {
    icon: UserRound,
    label: "Your host",
    value: site.contact.host,
    sub: "Get in touch and you’ll be planning directly with the owner.",
    href: undefined as string | undefined,
  },
  {
    icon: Phone,
    label: "Call the hotel",
    value: site.contact.phoneDisplay,
    sub: "The quickest way to check availability and plan your stay.",
    href: site.contact.phoneHref,
  },
  {
    icon: Mail,
    label: "Email us",
    value: site.contact.email,
    sub: "Prefer writing? We answer every message personally.",
    href: site.contact.emailHref,
  },
  {
    icon: MapPin,
    label: "Where to find us",
    value: `${site.address.street}, ${site.address.settlement}`,
    sub: `${site.address.island}, ${site.address.country}`,
    href: "#location",
  },
];

const inputBase =
  "w-full rounded-xl border border-sand-50/15 bg-sand-50/[0.06] px-4 py-3.5 text-[0.95rem] text-sand-50 placeholder:text-sand-50/35 transition-all duration-300 focus:border-tide-300 focus:bg-sand-50/[0.09] focus:ring-4 focus:ring-tide-400/20 focus:outline-none";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    setError(null);

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          travelDates: data.get("travelDates"),
          message: data.get("message"),
        }),
      });
      const json = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;

      if (res.ok && json?.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setError(json?.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setError("Connection trouble — please call or email us directly.");
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-pine-950 py-24 text-sand-50 sm:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute -top-44 right-0 size-[36rem] rounded-full bg-lagoon-600/20 blur-[130px]" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 -left-32 size-[30rem] rounded-full bg-copper-500/15 blur-[130px]" />

      <div className="container-site relative grid gap-16 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow text-tide-300">
              <span className="opacity-60">08</span>
              <span>Contact the Hotel</span>
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] font-light tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Plan your stay in <em className="text-copper-300">the Garden</em>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-sand-50/70 sm:text-lg">
              Ready for Staniard Creek? Send us a note, or simply pick up the phone — {site.contact.host} will help
              you put your Andros trip together, personally.
            </p>
          </Reveal>

          <div className="mt-10 space-y-1 border-t border-sand-50/10">
            {contactMethods.map((method, i) => {
              const content = (
                <div className="group flex items-start gap-4 py-5">
                  <span className="mt-0.5 grid size-11 shrink-0 place-items-center rounded-full border border-sand-50/15 text-tide-300 transition-all duration-300 group-hover:border-tide-300 group-hover:bg-lagoon-600/20">
                    <method.icon className="size-4.5" strokeWidth={1.6} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[0.65rem] font-semibold tracking-[0.3em] text-sand-50/45 uppercase">{method.label}</h3>
                    <p className="mt-1 truncate font-display text-xl font-normal text-sand-50 transition-colors group-hover:text-copper-300 sm:text-[1.35rem]">
                      {method.value}
                    </p>
                    <p className="mt-1 text-[0.85rem] leading-relaxed text-sand-50/55">{method.sub}</p>
                  </div>
                </div>
              );
              return (
                <Reveal key={method.label} delay={0.1 + i * 0.06}>
                  {method.href ? (
                    <a href={method.href} className="block border-b border-sand-50/10 transition-colors hover:bg-sand-50/[0.03]">
                      {content}
                    </a>
                  ) : (
                    <div className="border-b border-sand-50/10">{content}</div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Form */}
        <Reveal delay={0.15} className="lg:col-span-7">
          <div className="relative overflow-hidden rounded-[2rem] border border-sand-50/12 bg-pine-900/70 p-6 shadow-soft backdrop-blur-sm sm:p-10">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="flex min-h-[28rem] flex-col items-center justify-center text-center"
                >
                  <span className="grid size-16 place-items-center rounded-full bg-lagoon-600 text-sand-50">
                    <Check className="size-7" strokeWidth={2.2} />
                  </span>
                  <h3 className="mt-6 font-display text-3xl font-light sm:text-4xl">Message on its way</h3>
                  <p className="mt-3 max-w-sm text-[0.95rem] leading-relaxed text-sand-50/65">
                    Thank you — your inquiry has reached the hotel. We’ll be in touch soon. In a hurry? Call{" "}
                    <a href={site.contact.phoneHref} className="text-copper-300 underline underline-offset-4">
                      {site.contact.phoneDisplay}
                    </a>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="group mt-8 inline-flex items-center gap-2 text-[0.75rem] font-semibold tracking-[0.2em] text-tide-300 uppercase transition-colors hover:text-copper-300"
                  >
                    Send another message
                    <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={false}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4 }}
                  onSubmit={onSubmit}
                  className="space-y-5"
                  noValidate={false}
                >
                  <div>
                    <h3 className="font-display text-2xl font-light sm:text-3xl">Stay inquiry</h3>
                    <p className="mt-2 text-[0.9rem] text-sand-50/55">
                      Tell us a little about your trip — we’ll take it from there.
                    </p>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-2 block text-[0.68rem] font-semibold tracking-[0.24em] text-sand-50/55 uppercase">
                        Your name *
                      </span>
                      <input name="name" type="text" required minLength={2} maxLength={160} placeholder="Full name" className={inputBase} autoComplete="name" />
                    </label>
                    <label className="block">
                      <span className="mb-2 block text-[0.68rem] font-semibold tracking-[0.24em] text-sand-50/55 uppercase">
                        Email *
                      </span>
                      <input name="email" type="email" required maxLength={200} placeholder="you@example.com" className={inputBase} autoComplete="email" />
                    </label>
                    <label className="block">
                      <span className="mb-2 block text-[0.68rem] font-semibold tracking-[0.24em] text-sand-50/55 uppercase">
                        Phone
                      </span>
                      <input name="phone" type="tel" maxLength={60} placeholder="Optional" className={inputBase} autoComplete="tel" />
                    </label>
                    <label className="block">
                      <span className="mb-2 block text-[0.68rem] font-semibold tracking-[0.24em] text-sand-50/55 uppercase">
                        Travel dates
                      </span>
                      <input name="travelDates" type="text" maxLength={160} placeholder="e.g. March, sometime in spring…" className={inputBase} />
                    </label>
                  </div>

                  <label className="block">
                    <span className="mb-2 block text-[0.68rem] font-semibold tracking-[0.24em] text-sand-50/55 uppercase">
                      Your message *
                    </span>
                    <textarea
                      name="message"
                      required
                      minLength={10}
                      maxLength={2000}
                      rows={5}
                      placeholder="What would you like to know about staying at Quality Inn?"
                      className={`${inputBase} resize-none`}
                    />
                  </label>

                  {status === "error" && error ? (
                    <p role="alert" className="rounded-xl border border-copper-400/40 bg-copper-500/10 px-4 py-3 text-[0.88rem] text-copper-300">
                      {error}
                    </p>
                  ) : null}

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                    <p className="max-w-[16rem] text-[0.75rem] leading-relaxed text-sand-50/40">
                      Or reach {site.contact.host} directly — your message goes straight to the hotel.
                    </p>
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="group inline-flex items-center gap-2.5 rounded-full bg-copper-400 px-8 py-4 text-[0.78rem] font-semibold tracking-[0.16em] text-pine-950 uppercase transition-all duration-300 hover:-translate-y-0.5 hover:bg-copper-300 disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {status === "sending" ? (
                        <>
                          Sending
                          <LoaderCircle className="size-4 animate-spin" />
                        </>
                      ) : (
                        <>
                          Send Inquiry
                          <Send className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
