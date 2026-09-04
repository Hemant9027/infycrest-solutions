import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { ADDRESS, EMAIL, MAPS_URL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import { Eyebrow } from "../Brand";
import { CopyEmail } from "../CopyEmail";
import { Reveal } from "../Reveal";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-y hairline bg-cream py-24 sm:py-32"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <Reveal>
            <Eyebrow index="06" label="Contact" />
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display-tight mt-6 font-display text-4xl font-medium leading-[1.08] sm:text-5xl">
              Say hello.{" "}
              <em className="font-light italic text-sea">We answer.</em>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/70">
              Email is the quickest way to reach us — dates, rates, directions
              or anything about the island. Every message lands with the people
              who run the motel.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-mint px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-sea">
              <span className="size-2 rounded-full bg-sea" aria-hidden="true" />
              One email covers it all
            </p>
          </Reveal>
        </div>

        <div className="space-y-4 lg:col-span-7">
          <Reveal delay={120}>
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border hairline bg-sand p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_26px_50px_-36px_rgba(13,43,38,0.45)] sm:p-7">
              <div className="flex items-center gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-sea text-cream">
                  <Mail className="size-5" />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/50">
                    Email — fastest
                  </p>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="mt-1 block break-all font-display text-lg font-semibold text-ink transition-colors hover:text-sea sm:text-2xl"
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>
              <CopyEmail email={EMAIL} />
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border hairline bg-sand p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_26px_50px_-36px_rgba(13,43,38,0.45)] sm:p-7">
              <div className="flex items-center gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-sea text-cream">
                  <Phone className="size-5" />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/50">
                    Phone — directory listing
                  </p>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="mt-1 block font-display text-lg font-semibold text-ink transition-colors hover:text-sea sm:text-2xl"
                  >
                    {PHONE_DISPLAY}
                  </a>
                  <p className="mt-1 text-xs text-ink/50">
                    If we miss you, email is quickest.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={280}>
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border hairline bg-sand p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_26px_50px_-36px_rgba(13,43,38,0.45)] sm:p-7">
              <div className="flex items-center gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-sea text-cream">
                  <MapPin className="size-5" />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/50">
                    Find us
                  </p>
                  <p className="mt-1 font-display text-lg font-semibold leading-snug text-ink sm:text-2xl">
                    {ADDRESS}
                  </p>
                </div>
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-full border hairline bg-cream px-5 py-2.5 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-sea hover:text-sea"
              >
                Get directions
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
