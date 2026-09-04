"use client";

import { useState, type FormEvent } from "react";
import {
  CircleCheck,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  TriangleAlert,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import { BUSINESS } from "@/data/site";
import { submitInquiry } from "@/lib/inquiries";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    const res = await submitInquiry({
      type: "contact",
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      message: String(data.get("message") ?? ""),
    });
    if (res.ok) {
      setStatus("sent");
      form.reset();
    } else {
      setErrorMsg(res.error ?? "Something went wrong.");
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHead
          eyebrow="Contact Us"
          title={
            <>
              Talk to us{" "}
              <span className="text-sea italic">directly</span>
            </>
          }
          sub="A real person reads every message. Ask anything about your Nassau stay."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          {/* Info panel */}
          <Reveal>
            <div className="flex h-full flex-col gap-8 rounded-[2rem] bg-sea-dusk p-8 text-sand shadow-soft sm:p-10">
              <div>
                <span className="inline-grid h-13 w-13 place-items-center rounded-2xl bg-white/10">
                  <MessageCircle className="h-6 w-6 text-sun" aria-hidden />
                </span>
                <h3 className="mt-5 font-display text-2xl leading-snug font-medium sm:text-3xl">
                  One inbox. The people behind the motel.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-sand/75 sm:text-base">
                  No call centre and no middlemen — every question goes
                  straight to us, and we reply by email.
                </p>
              </div>

              <ul className="flex flex-col gap-5">
                <li className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10">
                    <Mail className="h-5 w-5 text-sun" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-bold tracking-[0.2em] text-sand/60 uppercase">
                      Email
                    </p>
                    <a
                      href={`mailto:${BUSINESS.email}`}
                      className="u-link text-base font-bold break-all text-sand hover:text-sun"
                    >
                      {BUSINESS.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10">
                    <MapPin className="h-5 w-5 text-sun" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-bold tracking-[0.2em] text-sand/60 uppercase">
                      Location
                    </p>
                    <p className="text-base font-bold text-sand">
                      {BUSINESS.island}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10">
                    <Clock className="h-5 w-5 text-sun" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-bold tracking-[0.2em] text-sand/60 uppercase">
                      Our promise
                    </p>
                    <p className="text-base font-bold text-sand">
                      We reply personally to every enquiry.
                    </p>
                  </div>
                </li>
              </ul>

              <p className="mt-auto rounded-2xl bg-white/5 p-4 text-sm leading-relaxed text-sand/70 ring-1 ring-white/10">
                Prefer plain email? Write to us any time at{" "}
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="u-link font-bold text-sun"
                >
                  {BUSINESS.email}
                </a>
                .
              </p>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120}>
            <div className="h-full rounded-[2rem] border border-line bg-parchment p-8 shadow-card sm:p-10">
              {status === "sent" ? (
                <div className="flex h-full flex-col items-center justify-center gap-4 py-10 text-center">
                  <span className="grid h-20 w-20 place-items-center rounded-full bg-sea-soft">
                    <CircleCheck className="h-10 w-10 text-sea" aria-hidden />
                  </span>
                  <h3 className="font-display text-2xl font-medium text-ink sm:text-3xl">
                    Message on its way
                  </h3>
                  <p className="max-w-sm text-sm leading-relaxed text-ink-3 sm:text-base">
                    Thank you — we&rsquo;ve received your note and will reply
                    personally. You can also reach us directly at{" "}
                    <a
                      href={`mailto:${BUSINESS.email}`}
                      className="u-link font-bold break-all text-sea"
                    >
                      {BUSINESS.email}
                    </a>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-2 rounded-full border-2 border-sea px-6 py-3 text-sm font-bold text-sea-deep transition-colors hover:bg-sea-soft"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="flex h-full flex-col gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="flex flex-col gap-2">
                      <span className="text-xs font-bold tracking-[0.15em] text-ink-2 uppercase">
                        Your name *
                      </span>
                      <input
                        required
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="e.g. Jane Johnson"
                        className="rounded-2xl border border-line bg-sand px-4 py-3.5 text-base text-ink placeholder:text-ink-3/50 focus:border-sea focus:ring-2 focus:ring-sea/25 focus:outline-none"
                      />
                    </label>
                    <label className="flex flex-col gap-2">
                      <span className="text-xs font-bold tracking-[0.15em] text-ink-2 uppercase">
                        Your email *
                      </span>
                      <input
                        required
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        className="rounded-2xl border border-line bg-sand px-4 py-3.5 text-base text-ink placeholder:text-ink-3/50 focus:border-sea focus:ring-2 focus:ring-sea/25 focus:outline-none"
                      />
                    </label>
                  </div>

                  <label className="flex flex-1 flex-col gap-2">
                    <span className="text-xs font-bold tracking-[0.15em] text-ink-2 uppercase">
                      Your message *
                    </span>
                    <textarea
                      required
                      name="message"
                      rows={6}
                      placeholder="Hi! We're thinking about visiting Nassau and would love to know..."
                      className="flex-1 resize-none rounded-2xl border border-line bg-sand px-4 py-3.5 text-base text-ink placeholder:text-ink-3/50 focus:border-sea focus:ring-2 focus:ring-sea/25 focus:outline-none"
                    />
                  </label>

                  {status === "error" && (
                    <p className="flex items-center gap-2 rounded-2xl bg-coral-soft px-4 py-3 text-sm font-semibold text-coral-deep">
                      <TriangleAlert className="h-4 w-4 shrink-0" aria-hidden />
                      {errorMsg} You can email us directly at {BUSINESS.email}.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-sea px-8 py-4 text-base font-bold text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-sea-deep disabled:cursor-wait disabled:opacity-70"
                  >
                    {status === "sending" ? "Sending…" : "Send message"}
                    <Send
                      className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                      aria-hidden
                    />
                  </button>
                  <p className="text-center text-xs font-semibold text-ink-3">
                    Goes straight to the motel — we reply to{" "}
                    {BUSINESS.email}.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
