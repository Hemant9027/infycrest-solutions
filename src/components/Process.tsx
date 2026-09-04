"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { whatsappUrl } from "@/config/site";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    number: "01",
    title: "Choose a design",
    text: "Pick a direction that already feels close to your ambition.",
  },
  {
    number: "02",
    title: "Preview it live",
    text: "See the idea in motion before a single commitment is made.",
  },
  {
    number: "03",
    title: "Tell us what you need",
    text: "Share the details, goals and small things that make it yours.",
  },
  {
    number: "04",
    title: "We customize & build",
    text: "We shape the system, polish the details and make it work beautifully.",
  },
  {
    number: "05",
    title: "Launch",
    text: "Go live with a fast, responsive experience ready for real people.",
  },
];

export default function Process() {
  const [active, setActive] = useState(0);

  return (
    <section id="process" className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr,1.15fr] lg:gap-20">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-neutral-400 sm:text-xs">
                04 / Process
              </p>
              <h2 className="mt-4 text-[clamp(1.9rem,4vw,2.85rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-neutral-900">
                From concept to launch.
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-neutral-500 sm:text-lg">
                A straightforward workflow designed to keep decisions fast and
                the final product sharp.
              </p>
              <a
                href={whatsappUrl(
                  "Hi InfyCrest Solutions, I'd like to start the process for a new website."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-black hover:shadow-[0_12px_26px_rgba(0,0,0,0.18)]"
              >
                Start step one
                <ArrowUpRight className="size-4" strokeWidth={2.4} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ol className="border-t border-neutral-200">
              {STEPS.map((step, index) => {
                const isActive = active === index;
                return (
                  <li key={step.number} className="border-b border-neutral-200">
                    <button
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setActive(index)}
                      onMouseEnter={() => setActive(index)}
                      onFocus={() => setActive(index)}
                      className="group flex w-full items-start gap-5 py-6 text-left sm:gap-7 sm:py-7"
                    >
                      <span
                        className={cn(
                          "grid size-11 shrink-0 place-items-center rounded-full border font-mono text-xs transition-all duration-300",
                          isActive
                            ? "border-neutral-900 bg-neutral-900 text-white"
                            : "border-neutral-200 text-neutral-400 group-hover:border-neutral-400"
                        )}
                      >
                        {step.number}
                      </span>
                      <span
                        className={cn(
                          "transition-transform duration-300",
                          isActive ? "translate-x-1" : "translate-x-0"
                        )}
                      >
                        <span
                          className={cn(
                            "block text-lg font-semibold tracking-tight transition-colors duration-300 sm:text-xl",
                            isActive ? "text-neutral-900" : "text-neutral-400"
                          )}
                        >
                          {step.title}
                        </span>
                        <span
                          className={cn(
                            "mt-1.5 block max-w-md text-sm leading-relaxed transition-all duration-300",
                            isActive
                              ? "text-neutral-500 opacity-100"
                              : "text-neutral-400 opacity-70"
                          )}
                        >
                          {step.text}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
