"use client";

import { ArrowUpRight } from "lucide-react";
import { useBooking } from "./booking-provider";

type Props = {
  variant?: "solid" | "light" | "gold" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  label?: string;
  onOpen?: () => void;
};

const variants: Record<NonNullable<Props["variant"]>, string> = {
  solid: "bg-ink text-ivory hover:bg-sea",
  light: "bg-ivory text-ink hover:bg-goldlight",
  gold: "bg-gold text-ink hover:bg-goldlight shadow-[0_14px_38px_-12px_rgba(183,138,75,0.65)]",
  outline: "border border-ivory/60 text-ivory hover:bg-ivory hover:text-ink",
};

const sizes: Record<NonNullable<Props["size"]>, string> = {
  sm: "px-5 py-2.5 text-[11px]",
  md: "px-7 py-4 text-[12px]",
  lg: "px-9 py-5 text-[13px]",
};

export default function ReserveButton({ variant = "solid", size = "md", className = "", label = "Reserve Your Stay", onOpen }: Props) {
  const { open } = useBooking();
  return (
    <button
      type="button"
      onClick={() => {
        onOpen?.();
        open();
      }}
      className={`group inline-flex items-center justify-center gap-2.5 rounded-full font-semibold uppercase tracking-[0.22em] transition-all duration-500 ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {label}
      <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </button>
  );
}
