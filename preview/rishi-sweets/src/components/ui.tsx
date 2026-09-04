import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { useEffect, useState, type ReactNode, type MouseEvent } from "react";
import { Star } from "lucide-react";
import { cn } from "../utils/cn";
import { useFinePointer } from "../hooks/useFx";

/* ------------------------------ Reveal ------------------------------ */

export function Reveal({
  children,
  delay = 0,
  y = 36,
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y, scale: reduce ? 1 : 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* --------------------------- Section heading ------------------------ */

export function SectionHead({
  eyebrow,
  title,
  sub,
  align = "center",
  dark = false,
  index,
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  align?: "left" | "center";
  dark?: boolean;
  index?: string;
}) {
  return (
    <div
      className={cn(
        "relative max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left"
      )}
    >
      {index && (
        <span
          aria-hidden
          className={cn(
            "pointer-events-none absolute -top-12 font-display text-[7rem] leading-none font-bold select-none md:text-[10rem]",
            align === "center" ? "left-1/2 -translate-x-1/2" : "-left-4",
            dark ? "text-ivory-50/[0.045]" : "text-maroon-900/[0.05]"
          )}
        >
          {index}
        </span>
      )}
      <Reveal>
        <p
          className={cn(
            "mb-4 flex items-center gap-3 text-[11px] font-bold tracking-[0.32em] uppercase",
            align === "center" && "justify-center",
            dark ? "text-gold-300" : "text-maroon-600"
          )}
        >
          <span className={cn("inline-block h-px w-8", dark ? "bg-gold-400/60" : "bg-gold-500/70")} />
          {eyebrow}
          <span className={cn("inline-block h-px w-8", dark ? "bg-gold-400/60" : "bg-gold-500/70")} />
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "font-display text-4xl leading-[1.06] font-semibold text-balance md:text-5xl lg:text-6xl",
            dark ? "text-ivory-50" : "text-ink-900"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.16}>
          <p
            className={cn(
              "mt-5 max-w-xl text-[15px] leading-relaxed md:text-base",
              align === "center" && "mx-auto",
              dark ? "text-ivory-200/75" : "text-ink-500"
            )}
          >
            {sub}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* ------------------------------ Buttons ----------------------------- */

export function CtaButton({
  href,
  children,
  variant = "primary",
  className,
  onClick,
  external,
  ariaLabel,
}: {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "gold" | "ghost" | "dark";
  className?: string;
  onClick?: () => void;
  external?: boolean;
  ariaLabel?: string;
}) {
  const base = cn(
    "group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full px-7 py-3.5 text-[13px] font-bold tracking-[0.08em] uppercase transition-all duration-300 select-none",
    variant === "primary" &&
      "bg-maroon-800 text-ivory-50 shadow-[0_14px_30px_-12px_rgba(92,18,32,0.55)] hover:bg-maroon-700 hover:shadow-[0_20px_38px_-12px_rgba(92,18,32,0.6)]",
    variant === "dark" &&
      "bg-ink-900 text-ivory-50 hover:bg-ink-700 shadow-[0_14px_30px_-14px_rgba(22,16,12,0.6)]",
    variant === "gold" &&
      "bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 text-maroon-950 shadow-[0_14px_30px_-12px_rgba(148,113,47,0.55)] hover:brightness-105",
    variant === "outline" &&
      "border border-maroon-800/30 bg-transparent text-maroon-800 hover:border-maroon-800 hover:bg-maroon-800/5",
    variant === "ghost" &&
      "border border-ivory-50/30 bg-ivory-50/10 text-ivory-50 backdrop-blur-sm hover:bg-ivory-50/20",
    className
  );
  const inner = (
    <>
      <span className="pointer-events-none absolute inset-0 -translate-x-[130%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-[130%]" />
      <span className="relative z-10 inline-flex items-center gap-2.5">{children}</span>
    </>
  );
  if (href) {
    return (
      <Magnetic>
        <a
          href={href}
          aria-label={ariaLabel}
          onClick={onClick}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className={base}
        >
          {inner}
        </a>
      </Magnetic>
    );
  }
  return (
    <Magnetic>
      <button type="button" aria-label={ariaLabel} onClick={onClick} className={base}>
        {inner}
      </button>
    </Magnetic>
  );
}

/* ----------------------------- Magnetic ----------------------------- */

export function Magnetic({ children, strength = 5 }: { children: ReactNode; strength?: number }) {
  const fine = useFinePointer();
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 14, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 180, damping: 14, mass: 0.4 });

  if (!fine || reduce) return <>{children}</>;

  return (
    <motion.span
      className="inline-block"
      style={{ x: sx, y: sy }}
      onPointerMove={(e: MouseEvent) => {
        const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
        x.set(((e.clientX - r.left) / r.width - 0.5) * strength * 2);
        y.set(((e.clientY - r.top) / r.height - 0.5) * strength * 2);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.span>
  );
}

/* ------------------------------ Tilt -------------------------------- */

export function Tilt({
  children,
  className,
  max = 9,
  lift = true,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
  lift?: boolean;
}) {
  const fine = useFinePointer();
  const reduce = useReducedMotion();
  const active = fine && !reduce;
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 160, damping: 16 });
  const sry = useSpring(ry, { stiffness: 160, damping: 16 });
  const [hover, setHover] = useState(false);

  return (
    <div style={{ perspective: 1100 }} className={className}>
      <motion.div
        className="h-full will-change-transform"
        style={{
          rotateX: active ? srx : 0,
          rotateY: active ? sry : 0,
          transformStyle: "preserve-3d",
        }}
        animate={{ y: active && hover && lift ? -8 : 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        onPointerMove={(e) => {
          if (!active) return;
          const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width - 0.5;
          const py = (e.clientY - r.top) / r.height - 0.5;
          rx.set(-py * max);
          ry.set(px * max);
        }}
        onPointerEnter={() => setHover(true)}
        onPointerLeave={() => {
          setHover(false);
          rx.set(0);
          ry.set(0);
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* ---------------------------- Particles ----------------------------- */
/* Tasteful floating gold/saffron dust with depth-of-field blur.        */

export function Particles({
  count = 14,
  className,
  tint = "gold",
}: {
  count?: number;
  className?: string;
  tint?: "gold" | "cream";
}) {
  const parts = Array.from({ length: count }).map((_, i) => {
    const r = (n: number) => {
      const x = Math.sin(i * 127.1 + n * 311.7) * 43758.5453;
      return x - Math.floor(x);
    };
    const size = 3 + r(1) * 9;
    const blur = r(2) > 0.6 ? Math.round(r(3) * 4) : 0;
    return {
      left: `${r(4) * 100}%`,
      top: `${r(5) * 100}%`,
      size,
      blur,
      dur: 5 + r(6) * 7,
      delay: r(7) * 6,
      opacity: 0.35 + r(8) * 0.4,
    };
  });
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {parts.map((p, i) => (
        <span
          key={i}
          className="animate-floaty absolute rounded-full"
          style={
            {
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
              filter: p.blur ? `blur(${p.blur}px)` : undefined,
              background:
                tint === "gold"
                  ? i % 3 === 0
                    ? "radial-gradient(circle at 35% 35%, #e0c894, #b08a45)"
                    : i % 3 === 1
                      ? "radial-gradient(circle at 35% 35%, #f0b56a, #d9741e)"
                      : "radial-gradient(circle at 35% 35%, #c98b8b, #8a1e33)"
                  : "radial-gradient(circle at 35% 35%, #fdfaf3, #ead9bd)",
              "--dur": `${p.dur}s`,
              "--delay": `${p.delay}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

/* ------------------------------ Stars ------------------------------- */

export function Stars({ value = 4, size = 14, className }: { value?: number; size?: number; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-0.5", className)} aria-label={`Rated ${value} out of 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={size}
          className={i <= Math.round(value) ? "fill-gold-500 text-gold-500" : "fill-ink-300/40 text-ink-300/40"}
        />
      ))}
    </span>
  );
}

/* ----------------------------- Veg mark ----------------------------- */

export function VegMark({ veg }: { veg: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex h-4 w-4 items-center justify-center rounded-[3px] border-2",
        veg ? "border-green-700" : "border-maroon-700"
      )}
      title={veg ? "Vegetarian" : "Non-vegetarian"}
      aria-label={veg ? "Vegetarian" : "Non-vegetarian"}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", veg ? "bg-green-700" : "bg-maroon-700")} />
    </span>
  );
}

/* ---------------------------- Cursor FX ----------------------------- */

export function CursorFX() {
  const fine = useFinePointer();
  const reduce = useReducedMotion();
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 320, damping: 28, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 320, damping: 28, mass: 0.5 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (!fine || reduce) return;
    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement | null;
      setHovering(!!t?.closest("a,button,[data-cursor]"));
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [fine, reduce, x, y]);

  if (!fine || reduce) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[100] hidden lg:block"
      style={{ x: sx, y: sy }}
    >
      <motion.div
        className="-translate-x-1/2 -translate-y-1/2 rounded-full border border-maroon-700/50"
        animate={{
          width: hovering ? 44 : 26,
          height: hovering ? 44 : 26,
          backgroundColor: hovering ? "rgba(138,30,51,0.08)" : "rgba(138,30,51,0)",
        }}
        transition={{ duration: 0.25 }}
        style={{ translateX: "-50%", translateY: "-50%" }}
      />
      <div className="absolute top-0 left-0 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-maroon-800" />
    </motion.div>
  );
}

/* ------------------------- Instagram icon --------------------------- */
/* Lucide removed brand icons — inline equivalent.                      */

export function InstagramIcon({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

/* --------------------------- Scroll progress ------------------------ */

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  return (
    <motion.div
      aria-hidden
      className="fixed top-0 right-0 left-0 z-[95] h-[2.5px] origin-left bg-gradient-to-r from-maroon-800 via-saffron-500 to-gold-400"
      style={{ scaleX }}
    />
  );
}
