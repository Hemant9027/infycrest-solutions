"use client";

import { type CSSProperties, type ReactNode, useEffect, useRef } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** ms before the transition starts */
  delay?: number;
  /** "rise" (default) or "clip" for image masks */
  variant?: "rise" | "clip";
};

export default function Reveal({ children, className = "", delay = 0, variant = "rise" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add("is-in");
            io.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const style: CSSProperties = { ["--reveal-delay" as string]: `${delay}ms` };

  return (
    <div ref={ref} style={style} className={`${variant === "clip" ? "reveal-clip" : "reveal"} ${className}`}>
      {children}
    </div>
  );
}
