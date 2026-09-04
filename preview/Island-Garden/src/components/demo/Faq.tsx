"use client";

import { useState } from "react";
import { ArrowUpRight, Plus } from "lucide-react";
import type { FaqItem } from "@/demos/types";
import { SectionHeading } from "./heading";
import { Reveal } from "./motion";

type FaqProps = {
  title: string;
  intro: string;
  items: FaqItem[];
};

export function Faq({ title, intro, items }: FaqProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="border-t border-sandline py-24 md:py-36">
      <div className="mx-auto grid w-full max-w-[1440px] gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:px-14">
        <div className="lg:col-span-4">
          <Reveal>
            <SectionHeading index="07" label="FAQ" title={title} intro={intro} className="mb-10" />
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-3xl bg-pine p-7 text-cream md:p-8">
              <p className="font-display text-2xl font-medium">Still curious?</p>
              <p className="mt-2 text-sm leading-relaxed text-cream/70">
                The front desk team answers around the clock — no question is too small.
              </p>
              <a
                href="#contact"
                className="group mt-6 inline-flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.18em] text-cream transition-colors hover:text-coral"
              >
                <span className="u-link">Message the front desk</span>
                <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <div className="border-t border-sandline">
            {items.map((item, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={item.q} delay={Math.min(i * 60, 240)}>
                  <div className="border-b border-sandline">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    >
                      <span
                        className={`font-display text-xl font-medium transition-colors duration-300 md:text-[1.55rem] ${
                          isOpen ? "text-coral" : "text-ink"
                        }`}
                      >
                        {item.q}
                      </span>
                      <span
                        className={`grid size-9 shrink-0 place-items-center rounded-full border transition-all duration-400 ${
                          isOpen ? "rotate-45 border-pine bg-pine text-cream" : "border-sandline text-ink"
                        }`}
                      >
                        <Plus size={16} />
                      </span>
                    </button>
                    <div
                      id={`faq-panel-${i}`}
                      className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-2xl pb-7 leading-relaxed text-ink-soft">{item.a}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
