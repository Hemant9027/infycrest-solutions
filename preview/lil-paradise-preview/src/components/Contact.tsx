import { useState } from "react";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { Eyebrow, Reveal } from "./Reveal";
import { BUSINESS, IMG } from "../data/site";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(BUSINESS.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      /* clipboard not available */
    }
  };

  return (
    <section id="contact" className="relative scroll-mt-24 bg-cream px-4 pb-24 pt-4 sm:px-6 md:pb-32">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] shadow-[0_45px_90px_-40px_rgba(11,58,56,0.7)] grain">
        <img
          src={IMG.contact.src}
          alt={IMG.contact.alt}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/65" />

        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-24 text-center text-cream sm:py-32">
          <Reveal>
            <Eyebrow tone="cream">Contact · Booking</Eyebrow>
          </Reveal>

          <Reveal delay={0.08}>
            <span className="mt-8 block font-hand text-3xl font-semibold text-sun sm:text-4xl">
              ready when you are —
            </span>
            <h2 className="mt-2 font-display text-5xl font-medium leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Your little
              <br />
              <span className="italic">paradise</span> awaits
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-7 max-w-lg text-base leading-relaxed text-cream/85 sm:text-lg">
              Tell us your dates, your questions, your island dreams — a real person
              reads every message and answers personally.
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="mt-10 flex w-full flex-col items-center gap-3.5 sm:w-auto sm:flex-row">
              <a
                href={BUSINESS.mailto}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-coral px-8 py-4.5 text-sm font-extrabold tracking-wide text-white shadow-[0_18px_40px_-12px_rgba(232,80,60,0.9)] transition-all hover:-translate-y-0.5 hover:bg-coraldeep sm:w-auto"
              >
                Plan Your Stay
                <ArrowUpRight className="size-4.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={BUSINESS.mailto}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white/10 px-8 py-4.5 text-sm font-extrabold tracking-wide text-white ring-1 ring-white/35 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white/20 sm:w-auto"
              >
                <Mail className="size-4.5" />
                Contact Lil Paradise Getaway
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <button
              onClick={copyEmail}
              className="group mt-9 inline-flex items-center gap-3 rounded-full border border-white/20 bg-ink/40 px-6 py-3.5 backdrop-blur-md transition-colors hover:border-sun/50"
            >
              <span className="font-mono text-sm tracking-wide text-cream sm:text-base">
                {BUSINESS.email}
              </span>
              <span
                className={`grid size-8 place-items-center rounded-full transition-colors ${
                  copied ? "bg-aqua text-white" : "bg-white/12 text-cream group-hover:bg-sun group-hover:text-ink"
                }`}
                aria-label={copied ? "Copied" : "Copy email"}
              >
                {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
              </span>
            </button>
          </Reveal>

          <Reveal delay={0.36}>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.24em] text-cream/55">
              {copied ? "Copied — talk soon!" : `${BUSINESS.name} · ${BUSINESS.location}`}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
