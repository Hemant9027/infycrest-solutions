import { ArrowUpRight } from "lucide-react";
import { whatsappUrl } from "@/config/site";
import Reveal, { Eyebrow } from "@/components/Reveal";

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Choose a direction",
    desc: "Pick a ready-to-launch concept that fits your business.",
  },
  {
    step: "02",
    title: "Share your brief",
    desc: "Tell us about your brand, audience and must-have flows.",
  },
  {
    step: "03",
    title: "Make it yours",
    desc: "We tailor the copy, colours, imagery and details to you.",
  },
  {
    step: "04",
    title: "Review together",
    desc: "See the build live and refine it with focused feedback.",
  },
  {
    step: "05",
    title: "Launch with confidence",
    desc: "Go live with a fast, responsive and polished website.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative scroll-mt-28 overflow-hidden bg-neutral-950 py-20 text-white sm:py-28"
    >
      {/* Texture */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(255_255_255/0.08)_1px,transparent_0)] bg-[size:28px_28px] opacity-50 [mask-image:radial-gradient(75%_70%_at_50%_0%,black,transparent)]" />
        <div className="absolute left-1/2 top-[-200px] h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(255_255_255/0.07),transparent)] blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <Eyebrow>
              <span className="text-neutral-400">04 / Process</span>
            </Eyebrow>
            <h2 className="mt-5 text-balance text-[clamp(2rem,4.6vw,3.6rem)] font-semibold leading-[1.05] tracking-[-0.035em]">
              From concept to{" "}
              <em className="font-display font-normal italic">launch.</em>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="max-w-md text-[15.5px] leading-relaxed text-neutral-400 lg:ml-auto">
              A straightforward workflow designed to keep decisions fast and the
              final product sharp — most concepts go live in days, not months.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-16 sm:mt-20">
          {/* Connector */}
          <div className="absolute left-10 right-10 top-7 hidden border-t border-dashed border-white/15 lg:block" />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {PROCESS_STEPS.map((item, i) => (
              <Reveal key={item.step} delay={i * 120}>
                <div className="group relative">
                  <div className="relative z-10 flex size-14 items-center justify-center rounded-full border border-white/20 bg-neutral-950 font-mono text-[13px] text-neutral-300 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 group-hover:border-white group-hover:bg-white group-hover:font-semibold group-hover:text-neutral-950">
                    {item.step}
                  </div>
                  <h3 className="mt-6 text-[16.5px] font-semibold tracking-tight transition-colors duration-300 group-hover:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-neutral-500 transition-colors duration-300 group-hover:text-neutral-400">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={200}>
          <div className="mt-20 flex flex-col items-center justify-between gap-6 rounded-3xl border border-white/10 bg-white/[0.03] px-8 py-8 backdrop-blur-sm sm:flex-row sm:py-6 sm:pl-10">
            <p className="text-center font-display text-2xl italic text-neutral-200 sm:text-left sm:text-[1.7rem]">
              Ready when you are — step 01 takes two minutes.
            </p>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="group flex h-12 shrink-0 items-center gap-2 rounded-full bg-white px-7 text-[14.5px] font-semibold text-neutral-900 transition-all duration-300 hover:bg-neutral-200 hover:shadow-[0_16px_44px_-14px_rgb(255_255_255/0.35)]"
            >
              Start on WhatsApp
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
