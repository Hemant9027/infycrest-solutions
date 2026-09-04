import { CalendarCheck, Mail, MapPin } from "lucide-react";
import ContactForm from "./contact-form";
import Reveal from "./reveal";
import ReserveButton from "./reserve-button";
import { Eyebrow } from "./ui";
import { HOTEL_EMAIL } from "@/lib/images";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-cream py-24 sm:py-32">
      <div className="mx-auto grid w-full max-w-[1400px] gap-14 px-6 sm:px-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-6">
          <Reveal>
            <Eyebrow index="06" label="Contact" />
          </Reveal>
          <Reveal delay={90}>
            <h2 className="mt-7 font-display text-[2.6rem] font-light leading-[1.04] sm:text-6xl">
              Talk to <span className="italic text-sea">a real person.</span>
            </h2>
          </Reveal>
          <Reveal delay={170}>
            <p className="mt-7 max-w-md text-base leading-relaxed text-ink/70">
              Questions, plans, special occasions — or simply the pleasure of planning a trip properly.
              Write to us and a member of the team will answer personally.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 space-y-4">
              <a
                href={`mailto:${HOTEL_EMAIL}`}
                className="group flex items-center gap-5 rounded-3xl border border-ink/10 bg-ivory p-6 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-soft"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-gold/15 text-gold transition-colors duration-500 group-hover:bg-gold group-hover:text-ink">
                  <Mail className="size-5" />
                </span>
                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.28em] text-ink/45">
                    Email us directly
                  </span>
                  <span className="mt-1 block break-all font-display text-lg text-ink sm:text-xl">
                    {HOTEL_EMAIL}
                  </span>
                </span>
              </a>

              <div className="flex items-center gap-5 rounded-3xl border border-ink/10 bg-ivory p-6 shadow-card">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-sea/10 text-sea">
                  <MapPin className="size-5" />
                </span>
                <div>
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.28em] text-ink/45">
                    Find us in
                  </span>
                  <span className="mt-1 block font-display text-lg text-ink sm:text-xl">
                    Nassau, New Providence, The Bahamas
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-5 rounded-3xl border border-dashed border-gold/50 bg-gold/5 p-6">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                  <CalendarCheck className="size-5" />
                </span>
                <div className="min-w-[220px] flex-1">
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.28em] text-ink/45">
                    Ready when you are
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-ink/70">
                    Skip the queue of emails — send your dates straight through.
                  </span>
                </div>
                <ReserveButton size="sm" variant="solid" />
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="lg:col-span-6">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
