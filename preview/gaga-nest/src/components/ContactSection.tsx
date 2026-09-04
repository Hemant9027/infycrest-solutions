import { Bird, Mail, Phone } from "lucide-react";
import { Kicker } from "./ui";
import { Reveal } from "./Reveal";
import InquiryForm from "./InquiryForm";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-ink-deep py-24 text-cream sm:py-32 lg:py-40"
    >
      {/* ambient coral glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-0 h-[480px] w-[480px] rounded-full bg-coral/[0.12] blur-[130px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-flamingo/[0.08] blur-[130px]"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          {/* Contact details */}
          <div className="lg:col-span-5">
            <Reveal>
              <Kicker index="07" label="Contact" tone="cream" />
              <h2 className="mt-6 font-display text-4xl leading-[1.04] tracking-[-0.015em] text-cream text-balance sm:text-5xl lg:text-6xl">
                Plan your stay —{" "}
                <em className="text-flamingo">Kevin’s expecting you</em>
              </h2>
              <p className="mt-7 max-w-md text-[15px] leading-[1.85] text-cream/65 sm:text-base">
                Tell him your dates, tell him what you’re dreaming of —
                flamingos at dawn, a quiet week in the suite, a kitchen full of
                island cooking. Every inquiry is answered personally.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-10 space-y-3">
                <div className="flex items-center gap-5 rounded-2xl border border-cream/12 bg-cream/[0.04] px-6 py-5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-coral text-cream">
                    <Bird className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-cream/45">
                      Your host
                    </p>
                    <p className="font-display text-xl text-cream">
                      Mr. Kevin Hanchell
                    </p>
                  </div>
                </div>
                <a
                  href="tel:+12423391666"
                  className="group flex items-center gap-5 rounded-2xl border border-cream/12 bg-cream/[0.04] px-6 py-5 transition-colors hover:border-flamingo/50"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-cream/10 text-flamingo transition-colors group-hover:bg-coral group-hover:text-cream">
                    <Phone className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-cream/45">
                      Phone
                    </p>
                    <p className="font-display text-xl text-cream">
                      +1 (242) 339-1666
                    </p>
                  </div>
                </a>
                <a
                  href="mailto:gagas.nest@outlook.com"
                  className="group flex items-center gap-5 rounded-2xl border border-cream/12 bg-cream/[0.04] px-6 py-5 transition-colors hover:border-flamingo/50"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-cream/10 text-flamingo transition-colors group-hover:bg-coral group-hover:text-cream">
                    <Mail className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-cream/45">
                      Email
                    </p>
                    <p className="font-display text-xl text-cream break-all">
                      gagas.nest@outlook.com
                    </p>
                  </div>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <InquiryForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
