import { ArrowRight, Mail } from "lucide-react";
import Hibiscus from "@/components/Hibiscus";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { IMG } from "@/lib/images";
import { AVAILABILITY_MAILTO, EMAIL } from "@/lib/site";

export default function BookingCta() {
  return (
    <section className="relative overflow-hidden bg-sea-950 py-28 md:py-40">
      <img
        src={IMG.cta.src}
        alt={IMG.cta.alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-sea-950/70" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-sand-100/40 to-transparent" />

      <Hibiscus className="pointer-events-none absolute -left-16 bottom-[-4rem] h-72 w-72 animate-spin-slow text-sea-800/50" />
      <Hibiscus className="pointer-events-none absolute -right-10 top-6 h-40 w-40 animate-spin-slow text-hibiscus-500/20" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center md:px-10">
        <SectionHeading
          align="center"
          tone="light"
          eyebrow="Booking & availability"
          title={
            <>
              Ready to trade the everyday for{" "}
              <em className="italic text-hibiscus-300">island time</em>?
            </>
          }
          lede="There's no booking portal to wrestle with here — just tell us when you're thinking of coming, and we'll confirm your stay personally."
        />

        <Reveal delay={0.2} className="mt-11">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={AVAILABILITY_MAILTO}
              className="group inline-flex items-center gap-2.5 rounded-full bg-hibiscus-500 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-sea-950/40 transition-all duration-300 hover:bg-hibiscus-600"
            >
              Check Availability
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 rounded-full border border-sand-50/40 px-8 py-4 text-sm font-semibold text-sand-50 backdrop-blur-sm transition-all duration-300 hover:border-sand-50 hover:bg-sand-50/10"
            >
              <Mail className="h-4 w-4" />
              Contact Us
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.3} className="mt-8">
          <p className="text-sm text-sand-100/75">
            Or simply write to{" "}
            <a
              href={`mailto:${EMAIL}`}
              className="link-underline font-display text-base italic text-sand-50"
            >
              {EMAIL}
            </a>{" "}
            — you&apos;ll always hear back from a real person.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
