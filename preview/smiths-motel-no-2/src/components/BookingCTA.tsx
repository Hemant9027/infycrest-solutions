import { ArrowRight, CalendarCheck, Mail, Sun } from "lucide-react";
import Reveal from "./Reveal";
import { SITE } from "@/lib/site";

export default function BookingCTA() {
  return (
    <section
      id="cta"
      className="relative z-10 -mt-8 overflow-hidden rounded-t-[2.5rem] bg-coral pt-24 pb-28 text-cream md:rounded-t-[3.5rem] md:pt-32 md:pb-36"
    >
      {/* giant lazy sun */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -z-0 size-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cream/10 blur-2xl"
      />
      <Sun
        aria-hidden
        className="absolute -top-10 -right-10 size-56 animate-rot text-cream/15"
      />
      <Sun
        aria-hidden
        className="absolute -bottom-16 -left-16 size-72 animate-rot text-cream/10"
      />

      <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
        <Reveal>
          <p className="text-xs font-bold tracking-[0.3em] text-cream/80 uppercase">
            Book direct · No fees · Just sunshine
          </p>
        </Reveal>
        <Reveal delay={90}>
          <h2 className="mt-5 font-display text-[clamp(2.6rem,7vw,5rem)] leading-[1.02] font-semibold tracking-tight">
            Ready for a little{" "}
            <em className="text-sun">Nassau sunshine?</em>
          </h2>
        </Reveal>
        <Reveal delay={170}>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream/85">
            Tell us your dates and Smith&rsquo;s Motel No. 2 will take care of
            the rest — simple, friendly and easy on the budget.
          </p>
        </Reveal>
        <Reveal delay={250}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#booking"
              className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-8 py-4.5 font-bold text-sand shadow-2xl shadow-ink/30 transition-all duration-300 hover:-translate-y-1 hover:bg-ink-deep"
            >
              <CalendarCheck className="size-5" />
              Check Availability
              <ArrowRight className="size-4.5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href={SITE.mailto}
              className="inline-flex items-center gap-2.5 rounded-full border-2 border-cream/70 px-8 py-4 font-bold text-cream transition-all duration-300 hover:bg-cream hover:text-coral-deep"
            >
              <Mail className="size-5" />
              Email Us
            </a>
          </div>
        </Reveal>
        <Reveal delay={320}>
          <p className="mt-8 text-sm break-all text-cream/70">
            We reply to every enquiry personally — {SITE.email}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
