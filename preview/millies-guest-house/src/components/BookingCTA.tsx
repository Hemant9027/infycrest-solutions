import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CONTACT, IMAGES } from "@/lib/media";

export default function BookingCTA() {
  return (
    <section id="plan" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={IMAGES.cta}
          alt="A golden sunset settling over calm water with a small boat on the horizon"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-abyss/70 via-abyss/40 to-abyss/80" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[92rem] flex-col items-center px-5 py-32 text-center sm:px-8 sm:py-40 lg:px-12">
        <Reveal>
          <p className="inline-flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-foam">
            <span className="h-px w-10 bg-foam/50" />
            Your dates — your pace
            <span className="h-px w-10 bg-foam/50" />
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 max-w-4xl font-serif text-5xl font-light leading-[1.02] tracking-tight text-cream sm:text-6xl lg:text-7xl">
            The water <em className="italic text-foam">is waiting</em>.
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg">
            Tell Judy when you’re coming, and let The Abacos take care of the
            rest. Every stay at Millie’s begins with a simple conversation.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-full bg-cream px-8 py-4 text-sm font-semibold text-sea transition-colors duration-500 hover:bg-foam"
            >
              Plan Your Stay
            </a>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-3 rounded-full border border-cream/40 px-8 py-4 text-sm font-semibold text-cream transition-colors duration-500 hover:border-cream hover:bg-cream/10"
            >
              <Phone className="size-4" />
              {CONTACT.phone}
            </a>
            <a
              href={CONTACT.emailHref}
              className="inline-flex items-center gap-3 rounded-full border border-cream/40 px-8 py-4 text-sm font-semibold text-cream transition-colors duration-500 hover:border-cream hover:bg-cream/10"
            >
              <Mail className="size-4" />
              Email Judy
            </a>
          </div>
          <p className="mt-12 text-[11px] font-medium uppercase tracking-[0.3em] text-cream/55">
            Contact Millie’s Guest House · The Abacos, The Bahamas
          </p>
        </Reveal>
      </div>
    </section>
  );
}
