import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 36, filter: "blur(6px)" },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function Reveal({
  children,
  delay = 0,
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      variants={variants}
      custom={delay}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}

/** Section eyebrow label used across the site */
export function Eyebrow({ children, tone = "lagoon" }: { children: ReactNode; tone?: "lagoon" | "cream" }) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] ${
        tone === "lagoon"
          ? "border-lagoon/25 bg-foam/60 text-deep"
          : "border-white/25 bg-white/10 text-cream"
      }`}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 22V10M12 10c0-4 2.5-7 7-7 .5 3.5-2 7-7 7Zm0 0c0-4-2.5-7-7-7-.5 3.5 2 7 7 7Zm0 0c3.5-.6 6.5.8 8 3.5-2.8 1.6-6.4.8-8-3.5Zm0 0c-3.5-.6-6.5.8-8 3.5 2.8 1.6 6.4.8 8-3.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {children}
    </span>
  );
}
