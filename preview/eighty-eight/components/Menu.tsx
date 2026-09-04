"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";
import { menuCategories } from "@/data/menu";
import Button from "./Button";
import { restaurant } from "@/data/restaurant";

export default function Menu() {
  const [active, setActive] = useState(menuCategories[0].id);
  const reduce = useReducedMotion();
  const current = menuCategories.find((c) => c.id === active)!;

  return (
    <section id="menu" className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-shell px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal>
            <p className="eyebrow text-[11px] font-semibold text-gold tracking-wide3">
              The menu
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ivory">
              Chinese favourites, generous plates and flavours made for sharing.
            </h2>
          </Reveal>
        </div>

        {/* Tabs */}
        <Reveal className="mt-12">
          <div className="flex flex-wrap justify-center gap-2.5">
            {menuCategories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`uppercase tracking-wide2 text-[11px] px-4 py-2.5 border transition-all duration-300 ${
                  active === c.id
                    ? "border-gold text-gold bg-gold/5"
                    : "border-ivory/15 text-stonewarm hover:text-ivory hover:border-ivory/30"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Item list */}
        <div className="mt-12 max-w-3xl mx-auto min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={reduce ? {} : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? {} : { opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="eyebrow text-[10px] text-gold text-center">{current.note}</p>
              <ul className="mt-8 space-y-1">
                {current.items.map((dish) => (
                  <li
                    key={dish.name}
                    className="group flex items-baseline gap-4 py-4 border-b border-ivory/10"
                  >
                    <div className="flex-1">
                      <h3 className="font-display text-xl sm:text-2xl text-ivory group-hover:text-gold transition-colors">
                        {dish.name}
                      </h3>
                      <p className="text-sm text-stonewarm mt-1">{dish.description}</p>
                    </div>
                    <span className="flex-1 border-b border-dotted border-ivory/20 translate-y-[-4px] hidden sm:block" aria-hidden="true" />
                    <span className="text-[11px] uppercase tracking-wide2 text-stonewarm/70 shrink-0">
                      {dish.category ?? ""}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>

        <Reveal className="mt-12 text-center">
          <Button
            variant="primary"
            size="lg"
            arrow
            external={!!restaurant.menuUrl}
            href={restaurant.menuUrl ?? "#menu"}
          >
            View full menu
          </Button>
          {!restaurant.menuUrl && (
            <p className="mt-4 text-[11px] text-stonewarm/60">Full menu available in store.</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
