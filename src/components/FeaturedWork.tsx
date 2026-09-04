import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { FEATURED_DEMO } from "@/data/demos";
import BrowserFrame from "@/components/BrowserFrame";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import SelectDemoButton from "@/components/SelectDemoButton";

const FACTS = [
  { title: "Smart starter", text: "3 pages + admin panel" },
  { title: "One sharp launch", text: "Zero clutter, all signal" },
  { title: "Just a custom quote", text: "Scoped to your build" },
];

export default function FeaturedWork() {
  const demo = FEATURED_DEMO;

  return (
    <section id="demos" className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="InfyCrest / Featured"
          title="Build a stronger first impression."
          description="Premium digital experiences built around your brand, your audience and your goals."
        />

        <Reveal delay={120} className="mt-12 sm:mt-16">
          <div className="rounded-[2rem] border border-neutral-200 bg-neutral-50/60 p-5 sm:p-10 lg:p-14">
            <div className="grid items-center gap-10 lg:grid-cols-[1.02fr,0.98fr] lg:gap-14">
              {/* Composed preview */}
              <div className="relative pb-8 pr-3 sm:pr-8">
                <BrowserFrame
                  src={demo.thumbnail}
                  alt={`${demo.name} website preview`}
                  url={`infycrestsolutions.com${demo.previewUrl}`}
                  priority
                  sizes="(max-width: 1024px) 100vw, 46vw"
                  className="relative z-10 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.25)]"
                />
                <div className="absolute -bottom-0 right-0 z-20 w-[46%] -rotate-2 transition-transform duration-500 hover:rotate-0 sm:w-[44%]">
                  <BrowserFrame
                    src="/previews/restaurant.jpg"
                    alt="Restaurant website concept preview"
                    url="infycrestsolutions.com/demo/restaurant"
                    sizes="(max-width: 1024px) 44vw, 20vw"
                    className="rounded-xl shadow-[0_20px_50px_-16px_rgba(0,0,0,0.3)]"
                  />
                </div>
                <div className="absolute -left-2 top-10 z-0 w-[40%] rotate-3 opacity-90 sm:-left-4 sm:w-[38%]">
                  <BrowserFrame
                    src="/previews/dental-clinic.jpg"
                    alt="Dental clinic website concept preview"
                    url="infycrestsolutions.com/demo/dental-clinic"
                    sizes="(max-width: 1024px) 38vw, 17vw"
                    className="rounded-xl"
                  />
                </div>
                <span className="absolute -top-3 left-6 z-30 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-[11px] font-medium text-neutral-600 shadow-sm">
                  <span className="relative flex size-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
                  </span>
                  Live demo
                </span>
              </div>

              {/* Details */}
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-400">
                  {demo.scope}
                </p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
                  {demo.name}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-neutral-500 sm:text-base">
                  {demo.description}
                </p>

                <ul className="mt-6 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                  {demo.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-neutral-600"
                    >
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-neutral-900"
                        strokeWidth={2.6}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-2">
                  {demo.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-neutral-200 pt-7">
                  <div>
                    <p className="text-2xl font-semibold tracking-tight text-neutral-900">
                      {demo.priceLabel}
                    </p>
                    <p className="mt-0.5 text-xs text-neutral-400">
                      {demo.priceNote}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={demo.previewUrl}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-black hover:shadow-[0_12px_26px_rgba(0,0,0,0.18)]"
                    >
                      Live Preview
                      <ArrowUpRight className="size-4" strokeWidth={2.4} />
                    </Link>
                    <SelectDemoButton
                      demo={demo}
                      className="px-6 py-3 text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-6 border-t border-neutral-200 pt-8 sm:grid-cols-3 sm:gap-8">
              {FACTS.map((fact) => (
                <div key={fact.title} className="border-l-2 border-neutral-900 pl-4">
                  <p className="text-sm font-semibold tracking-tight text-neutral-900">
                    {fact.title}
                  </p>
                  <p className="mt-1 text-sm text-neutral-500">{fact.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
