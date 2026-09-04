"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Anchor, Sailboat, Shell } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { Eyebrow, Reveal } from "@/components/motion-primitives";
import { IMG } from "@/lib/site";

const CHIPS = [
  { icon: Anchor, label: "Overlooking the anchorage" },
  { icon: Sailboat, label: "Home of Bahamian sailing" },
  { icon: Shell, label: "Stocking Island just across" },
];

export function Harbour() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? ["0%", "0%"] : ["-12%", "12%"],
  );

  return (
    <section
      ref={ref}
      id="harbour"
      className="relative scroll-mt-24 overflow-hidden"
    >
      {/* Parallax backdrop */}
      <div className="absolute inset-0">
        <motion.div style={{ y }} className="absolute -inset-y-[14%] inset-x-0">
          <Image
            src={IMG.harbourSail}
            alt="Beautiful sailboats anchored in the pristine turquoise waters of historic Elizabeth Harbour at sunset"
            fill
            sizes="100vw"
            placeholder="blur"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-abyss-950/70 via-abyss-950/25 to-abyss-950/10" />
        <div className="grain absolute inset-0" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[42rem] max-w-[88rem] items-center px-5 py-28 sm:px-8">
        <div className="max-w-xl">
          <Reveal>
            <Eyebrow tone="light">Elizabeth Harbour</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display mt-4 text-4xl leading-[1.05] font-medium text-balance text-sand-50 sm:text-5xl lg:text-[3.6rem]">
              Our front yard is
              <span className="italic text-lagoon-300"> legendary</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-base leading-relaxed text-sand-50/85">
              Elizabeth Harbour is the deep, protected natural harbour that made
              George Town — long regarded as one of the great anchorages of the
              Bahamas, and each spring the racecourse of the National Family
              Island Regatta. From Marshall&apos;s, it&apos;s simply the view:
              cruising yachts swinging at anchor, bonefish flats at the edge of
              the channel, and Stocking Island lying long and green on the
              horizon.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="mt-4 text-base leading-relaxed text-sand-50/85">
              Some guests come for the boats. Most come back for the quiet.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-9 flex flex-wrap gap-3">
              {CHIPS.map((chip) => (
                <span
                  key={chip.label}
                  className="inline-flex items-center gap-2 rounded-full border border-sand-50/25 bg-abyss-950/35 px-4.5 py-2.5 text-[12px] font-semibold tracking-wide text-sand-50 backdrop-blur-md"
                >
                  <chip.icon
                    className="size-4 text-lagoon-300"
                    strokeWidth={1.8}
                  />
                  {chip.label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
