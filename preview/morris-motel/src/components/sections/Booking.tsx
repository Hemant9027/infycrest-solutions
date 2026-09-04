import { Check, Mail } from "lucide-react";
import { EMAIL } from "@/lib/site";
import { Eyebrow } from "../Brand";
import { InquiryForm } from "../InquiryForm";
import { Reveal } from "../Reveal";

const ASSURANCES = [
  "No online payment — confirm the details by email first",
  "No booking fees, no middlemen",
  "Straight answers about what's available",
];

export function Booking() {
  return (
    <section id="book" className="scroll-mt-24 px-3 py-6 sm:px-6">
      <div className="stripes-dark relative mx-auto max-w-[92rem] overflow-hidden rounded-[2.5rem] bg-ink text-cream sm:rounded-[3rem]">
        <div
          className="pointer-events-none absolute -right-32 -top-40 size-[30rem] rounded-full bg-coral/15 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-40 -left-24 size-[26rem] rounded-full bg-sea/40 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative grid grid-cols-1 items-center gap-14 px-6 py-20 sm:px-10 sm:py-28 lg:grid-cols-12 lg:gap-12 lg:px-16">
          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow index="07" label="Booking" light />
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display-tight mt-6 font-display text-4xl font-medium leading-[1.08] sm:text-5xl xl:text-6xl">
                Check{" "}
                <em className="font-light italic text-sun">availability</em>.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-7 max-w-lg text-lg leading-relaxed text-cream/75">
                Tell us your dates and who's coming. Your request lands with
                the people who run the motel — we reply personally by email
                with what's open and what it costs.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <ul className="mt-8 space-y-3.5">
                {ASSURANCES.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-cream/80">
                    <span className="grid size-6 shrink-0 place-items-center rounded-full bg-sun/15 text-sun">
                      <Check className="size-3.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={320}>
              <p className="mt-9 flex flex-wrap items-center gap-2 text-sm text-cream/60">
                <Mail className="size-4 text-sun" />
                Prefer plain email? Write to us at{" "}
                <a
                  href={`mailto:${EMAIL}`}
                  className="font-semibold text-cream underline decoration-coral decoration-2 underline-offset-4 transition-colors hover:text-sun"
                >
                  {EMAIL}
                </a>
              </p>
            </Reveal>
          </div>

          <Reveal delay={200} className="lg:col-span-6">
            <div className="rounded-[2rem] bg-sand p-6 text-ink shadow-[0_48px_90px_-46px_rgba(0,0,0,0.8)] ring-1 ring-ink/10 sm:p-9">
              <InquiryForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
