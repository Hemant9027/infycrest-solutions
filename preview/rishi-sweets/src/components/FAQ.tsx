import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { MessageCircle, Plus } from "lucide-react";
import { faqs, wa } from "../data/site";
import { Reveal, SectionHead } from "./ui";
import { cn } from "../utils/cn";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionHead
                align="left"
                index="13"
                eyebrow="Good to Know"
                title={
                  <>
                    Questions, <span className="gold-grad-text italic">Answered</span>
                  </>
                }
                sub="Everything customers usually ask before visiting — hours, location, delivery, catering and more."
              />
              <Reveal delay={0.2}>
                <a
                  href={wa("Hi Rishi Sweets, I have a question.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full border border-maroon-800/25 px-6 py-3 text-[11px] font-bold tracking-[0.16em] text-maroon-800 uppercase transition-colors hover:bg-maroon-800 hover:text-ivory-50"
                >
                  <MessageCircle size={14} /> Ask something else
                </a>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-3.5">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <Reveal key={f.q} delay={0.03 * (i % 4)}>
                    <div
                      className={cn(
                        "overflow-hidden rounded-2xl border transition-colors duration-300",
                        isOpen ? "border-gold-500/50 bg-ivory-50 shadow-[0_18px_36px_-20px_rgba(51,8,15,0.3)]" : "border-ink-900/8 bg-ivory-50/70 hover:border-gold-500/35"
                      )}
                    >
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${i}`}
                        className="flex w-full items-center justify-between gap-5 p-5 text-left sm:p-6"
                      >
                        <span className="font-display text-[17px] leading-snug font-semibold text-ink-900 sm:text-lg">
                          {f.q}
                        </span>
                        <span
                          className={cn(
                            "grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-400",
                            isOpen
                              ? "rotate-45 border-maroon-800 bg-maroon-800 text-ivory-50"
                              : "border-ink-900/15 text-ink-700"
                          )}
                          aria-hidden
                        >
                          <Plus size={16} />
                        </span>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            id={`faq-panel-${i}`}
                            role="region"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                          >
                            <p className="px-5 pb-6 text-[14px] leading-relaxed text-ink-500 sm:px-6">
                              {f.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
