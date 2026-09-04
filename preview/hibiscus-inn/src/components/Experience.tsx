import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { IMG } from "@/lib/images";

const MOMENTS = [
  {
    n: "01",
    title: "Slow mornings",
    copy: "No alarm clocks and no breakfast queues. Just island light, a warm breeze and a day that's entirely yours to shape.",
  },
  {
    n: "02",
    title: "Easy afternoons",
    copy: "Beach, town, or a shady spot with a book — whatever you fancy, we'll happily point you in the right direction.",
  },
  {
    n: "03",
    title: "Soft island evenings",
    copy: "Wander back from dinner with sand still on your feet and let the trade winds finish the day for you.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative scroll-mt-24 overflow-hidden bg-sea-50 py-24 md:py-36"
    >
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-6 md:px-10 lg:grid-cols-2">
        <Reveal className="order-last lg:order-first">
          <div className="relative mx-auto w-full max-w-lg">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-xl shadow-sea-950/15 ring-1 ring-sea-900/10">
              <img
                src={IMG.experience.src}
                alt={IMG.experience.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.6s] ease-out hover:scale-105"
              />
            </div>
            <span className="absolute left-5 top-5 rounded-full bg-sand-50/90 px-4 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-sea-800 backdrop-blur">
              The guest house way
            </span>

            <div className="absolute -bottom-8 -right-3 w-40 rotate-3 animate-float sm:-right-10 sm:w-56">
              <div className="overflow-hidden rounded-2xl border-[6px] border-sand-50 bg-sand-50 shadow-xl shadow-sea-950/20">
                <img
                  src={IMG.experienceInset.src}
                  alt={IMG.experienceInset.alt}
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover"
                />
                <p className="px-3 py-2 text-center text-[0.65rem] font-medium uppercase tracking-[0.2em] text-ink/55">
                  Slow mornings, island-made
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="Guest experience"
            title={
              <>
                Days that go at{" "}
                <em className="italic text-sea-600">island speed</em>
              </>
            }
            lede="No lobby hurry, no schedules, no wristbands — just a gentle rhythm and people who are genuinely glad you came."
          />

          <div className="mt-12 divide-y divide-sea-900/10">
            {MOMENTS.map((m, i) => (
              <Reveal key={m.n} delay={0.1 + i * 0.08}>
                <div className="flex items-start gap-6 py-7 first:pt-0">
                  <span className="font-display text-3xl tracking-tight text-hibiscus-400">
                    {m.n}
                  </span>
                  <div>
                    <h3 className="font-display text-xl tracking-tight text-ink">
                      {m.title}
                    </h3>
                    <p className="mt-1.5 max-w-md leading-relaxed text-ink/65">
                      {m.copy}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.35} className="mt-8">
            <blockquote className="border-l-2 border-hibiscus-400 pl-6">
              <p className="font-display text-2xl italic leading-snug tracking-tight text-ink/80">
                &ldquo;Come as a guest, leave as a friend.&rdquo;
              </p>
              <footer className="mt-3 text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-ink/45">
                The way we like to do things
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
