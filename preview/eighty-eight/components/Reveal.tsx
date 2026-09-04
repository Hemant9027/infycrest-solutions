"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Delay in seconds */
  delay?: number;
  /** Starting translateY in px */
  y?: number;
  className?: string;
  as?: "div" | "span" | "li" | "figure";
};

/**
 * Scroll-triggered reveal wrapper. Fades + rises content into view.
 * Disabled (instant) when the user prefers reduced motion.
 */
export default function Reveal({ children, delay = 0, y = 32, className, as = "div" }: RevealProps) {
  const reduce = useReducedMotion();
  const Comp = (motion as any)[as] ?? motion.div;
  return (
    <Comp
      className={className}
      initial={reduce ? { opacity: 1 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Comp>
  );
}
