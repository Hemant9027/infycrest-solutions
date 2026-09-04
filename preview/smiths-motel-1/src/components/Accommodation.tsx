import { BedDouble, CalendarCheck, CircleCheck, Mail } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import { BUSINESS } from "@/data/site";

const STEPS = [
  {
    icon: Mail,
    title: "Send us your dates",
    text: "Email or use the form below — tell us when you'd like to visit Nassau and how many are travelling.",
  },
  {
    icon: CalendarCheck,
    title: "We reply personally",
    text: "We confirm availability, current rates and the right room for your stay — always from us, never a bot.",
  },
  {
    icon: CircleCheck,
    title: "We confirm your stay",
    text: "Once everything suits you, we confirm directly. Simple, clear and handled one-to-one.",
  },
];

export default function Accommodation() {
  return (
    <section
      id="accommodation"
      className="relative overflow-hidden bg-cream py-20 sm:py-28"
    >
      {/* Soft blobs */}
      <div
        aria-hidden
        className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-sea-soft/70 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-sun-soft/80 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHead
          eyebrow="Accommodation"
          title={
            <>
              A comfortable <span className="text-sea italic">base</span> for
              your Nassau trip
            </>
          }
          sub="Every stay at Smith's Motel No. 1 begins with a simple conversation — arranged directly with us, from first message to check-out."
        />

        <Reveal delay={140} className="mt-14">
          <div className="grid gap-10 rounded-[2.5rem] border border-line bg-parchment p-7 shadow-soft sm:p-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14 lg:p-12">
            {/* Left: honest statement */}
            <div className="flex flex-col justify-center gap-6">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-sea text-sand shadow-card">
                <BedDouble className="h-7 w-7" aria-hidden />
              </span>
              <h3 className="font-display text-2xl leading-tight font-medium text-ink sm:text-3xl">
                Simple rooms, arranged the
                <span className="text-coral italic"> old-fashioned </span>
                way — conversation first.
              </h3>
              <p className="text-base leading-relaxed text-ink-3">
                We don&rsquo;t hide behind booking platforms. Tell us what you
                need for your time in Nassau and we&rsquo;ll let you know
                availability, current rates and the best option for your
                visit — personally.
              </p>
              <div className="rounded-2xl border border-sea/20 bg-sea-soft/60 p-4">
                <p className="text-sm leading-relaxed font-semibold text-sea-deep">
                  For room options and current rates, write to us any time:{" "}
                  <a
                    href={`mailto:${BUSINESS.email}`}
                    className="u-link break-all text-sea"
                  >
                    {BUSINESS.email}
                  </a>
                </p>
              </div>
            </div>

            {/* Right: steps timeline */}
            <ol className="relative flex flex-col gap-2 lg:pl-4">
              <span
                aria-hidden
                className="absolute top-8 bottom-8 left-[27px] hidden w-px border-l-2 border-dashed border-sea/30 sm:block"
              />
              {STEPS.map(({ icon: Icon, title, text }, i) => (
                <Reveal key={title} as="li" delay={160 + i * 120}>
                  <div className="group flex items-start gap-5 rounded-3xl border border-transparent p-4 transition-all duration-300 hover:border-line hover:bg-sand sm:p-5">
                    <span className="relative grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-coral-soft text-coral-deep transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <Icon className="h-6 w-6" aria-hidden />
                      <span className="absolute -top-1.5 -right-1.5 grid h-6 w-6 place-items-center rounded-full bg-sea text-[11px] font-black text-white">
                        {i + 1}
                      </span>
                    </span>
                    <div>
                      <h4 className="font-display text-xl font-medium text-ink">
                        {title}
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-ink-3 sm:text-base">
                        {text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
