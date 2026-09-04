"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "gold" | "ghost";
  size?: "md" | "lg" | "sm";
  arrow?: boolean;
  className?: string;
  external?: boolean;
  ariaLabel?: string;
};

const base =
  "group/btn inline-flex items-center justify-center gap-2 font-medium uppercase tracking-wide2 transition-all duration-300 select-none";

const sizes: Record<string, string> = {
  sm: "px-5 py-2.5 text-[11px]",
  md: "px-6 py-3 text-[12px]",
  lg: "px-8 py-4 text-[12px]",
};

const variants: Record<string, string> = {
  primary:
    "bg-crimson text-ivory hover:bg-vermilion hover:-translate-y-0.5 shadow-[0_10px_30px_-12px_rgba(181,42,42,0.7)]",
  gold: "bg-gold text-ink hover:bg-goldLight hover:-translate-y-0.5 shadow-[0_10px_30px_-12px_rgba(201,164,92,0.6)]",
  outline:
    "border border-ivory/25 text-ivory hover:border-gold hover:text-goldLight hover:-translate-y-0.5 bg-transparent",
  ghost: "text-ivory hover:text-goldLight hover:-translate-y-0.5",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  arrow = false,
  className = "",
  external = false,
  ariaLabel,
}: ButtonProps) {
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (href) {
    return external ? (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        aria-label={ariaLabel}
        className={cls}
      >
        {inner}
      </a>
    ) : (
      <Link href={href} aria-label={ariaLabel} className={cls}>
        {inner}
      </Link>
    );
  }
  return (
    <button type="button" onClick={onClick} aria-label={ariaLabel} className={cls}>
      {inner}
    </button>
  );
}
