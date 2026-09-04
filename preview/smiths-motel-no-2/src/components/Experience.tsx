import { Compass, ConciergeBell, Mail, Sparkles, Sun } from "lucide-react";
import Reveal from "./Reveal";
import { SITE } from "@/lib/site";

const MOMENTS = [
  {
    number: "01",
    icon: ConciergeBell,
    title: "A warm hello",
    text: "Arrive as a guest, settle in like a local — welcome at No. 2 is friendly, quick and completely unfussy.",
  },
  {
    number: "02",
    icon: Sun,
    title: "Easy island days",
    text: "Sleep in, wander out, drift back. No. 2 is your easy base for slow, sunny Nassau days.",
  },
  {
    number: "03",
    icon: Compass,
    title: "Local favourites",
    text: "Beach in the morning, conch salad for lunch? Just ask — sharing our favourite Nassau spots is half the fun.",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "See you soon",
    text: "Fair warning: No. 2 has a way of feeling like home. Don't be surprised if you're planning the next trip on the way out.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative z-10 -mt-8 scroll-mt-24 overflow-hidden rounded-t-[2.5rem] bg-ink pt-20 pb-24 text-sand md:rounded-t-[3.5rem] md:pt-28 md:pb-32"
    >
      {/* ambient glow + ghost numeral */}
      <div
        aria-hidden
        className="absolute -top-24 left-[-8%] size-[26rem] rounded-full bg-lagoon/15 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute right-[-10%] bottom-[-20%] size-[30rem] rounded-full bg-coral/15 blur-3xl"
      />
      <div
        aria-hidden
        className="text-stroke-sand pointer-events-none absolute -top-6 right-4 hidden font-display text-[11rem] leading-none font-black italic lg:block"
      >
        No. 2
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <p className="flex items-center gap-2 text-xs font-bold tracking-[0.22em] text-coral uppercase">
              <ConciergeBell className="size-4" />
              Guest Experience
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] font-semibold tracking-tight md:text-5xl">
              The No. 2 way <em className="text-sun">to stay.</em>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-6 text-lg leading-relaxed text-sand/70">
              No scripts, no fuss — just easy, genuine hospitality from hello
              to see-you-soon.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {MOMENTS.map((moment, i) => (
            <Reveal key={moment.number} delay={110 * i}>
              <article className="group h-full rounded-3xl border border-sand/10 bg-white/[0.04] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-sand/20 hover:bg-white/[0.08]">
                <div className="flex items-start justify-between">
                  <span className="font-display text-5xl font-black text-coral italic">
                    {moment.number}
                  </span>
                  <span className="grid size-11 place-items-center rounded-full bg-lagoon/15 text-lagoon">
                    <moment.icon className="size-5" />
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold">
                  {moment.title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-sand/60">
                  {moment.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-10 flex flex-wrap items-center gap-2 text-sm text-sand/55">
            <Mail className="size-4 text-coral" />
            Questions before you book? We&rsquo;re one email away —
            <a
              href={SITE.mailto}
              className="font-bold text-sand underline decoration-coral decoration-2 underline-offset-4 transition-colors hover:text-coral"
            >
              {SITE.email}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
