import Image from "next/image";
import { Anchor, HeartHandshake, Home, Waves } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CONTACT, IMAGES } from "@/lib/media";

const TRUTHS = [
  {
    icon: Home,
    title: "Spacious & modern",
    text: "A proper house, not a room — generous spaces with clean, contemporary comfort.",
  },
  {
    icon: Waves,
    title: "Directly waterfront",
    text: "Situated on the water’s edge, with the Sea of Abaco as the front yard.",
  },
  {
    icon: HeartHandshake,
    title: "Personal, hosted stays",
    text: `Run and cared for personally by ${CONTACT.host} — island hospitality, first hand.`,
  },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-sand py-24 sm:py-32 lg:py-40">
      <div className="mx-auto grid w-full max-w-[92rem] gap-16 px-5 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:px-12">
        <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <p className="flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-ocean">
              <span className="h-px w-10 bg-ocean/50" />
              01 — About Millie’s Guest House
            </p>
            <h2 className="mt-6 font-serif text-4xl font-light leading-[1.05] tracking-tight text-sea sm:text-5xl lg:text-[3.4rem]">
              A home at the water’s edge,{" "}
              <em className="italic text-lagoon">kept personal</em>.
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-8 text-base leading-relaxed text-ink/70 sm:text-lg">
              Millie’s Guest House is a spacious, modern guest house situated on
              the water’s edge in The Abacos — a 120-mile chain of islands and
              cays in the northern Bahamas where the water stays impossibly
              clear and life still moves with the tide.
            </p>
            <p className="mt-5 text-base leading-relaxed text-ink/70 sm:text-lg">
              This is not a resort, and that is exactly the point. The house is
              run personally by Judy Russell, and every stay is looked after the
              old island way: unhurried, genuine, and wonderfully quiet.
            </p>
            <p className="mt-8 font-serif text-2xl italic text-sea">
              — Judy Russell, <span className="text-ink/50">your host</span>
            </p>
          </Reveal>

          <div className="mt-10 border-t border-sea/10">
            {TRUTHS.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={0.08 * i}>
                <div className="flex items-start gap-5 border-b border-sea/10 py-5">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-foam text-sea">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-serif text-xl text-sea">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink/60">
                      {text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="relative lg:col-span-7">
          <Reveal delay={0.15} className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-40px_rgba(6,34,39,0.45)] sm:aspect-[5/6] lg:aspect-[4/5]">
              <Image
                src={IMAGES.aboutMain}
                alt="A bright waterfront house with a boat resting at the water’s edge"
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover transition-transform duration-[1.4s] ease-out hover:scale-[1.04]"
              />
            </div>

            <div className="absolute -right-4 -top-6 hidden size-32 place-items-center rounded-full bg-sea text-cream shadow-xl sm:grid lg:-right-8">
              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 size-full animate-[spin_22s_linear_infinite]"
                aria-hidden="true"
              >
                <defs>
                  <path
                    id="badge-circle"
                    d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                    fill="none"
                  />
                </defs>
                <text className="fill-cream text-[8px] font-semibold uppercase tracking-[0.2em]">
                  <textPath href="#badge-circle">
                    Millie’s Guest House · The Abacos · Bahamas ·
                  </textPath>
                </text>
              </svg>
              <Anchor className="size-5 text-lagoon" />
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="relative z-10 -mt-20 ml-6 w-56 rotate-[-3deg] overflow-hidden rounded-2xl border-[6px] border-sand shadow-[0_30px_60px_-30px_rgba(6,34,39,0.5)] sm:-mt-28 sm:ml-10 sm:w-72">
              <Image
                src={IMAGES.aboutDock}
                alt="A weathered wooden dock leading into calm blue water"
                width={720}
                height={540}
                className="h-auto w-full object-cover"
              />
            </div>
            <p className="mt-10 text-right font-serif text-lg italic text-ink/50">
              The water side of the house — where days begin and end.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
