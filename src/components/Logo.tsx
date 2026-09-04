import { cn } from "@/lib/utils";

/** Original crest mark — twin ascending peaks in a rounded tile. */
export function CrestMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={cn("size-8 shrink-0", className)}
    >
      <rect width="32" height="32" rx="8" fill="#0a0a0a" />
      <path
        d="M8.5 21.5 16 9.5l7.5 12"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3 21.5 16 16.6l2.7 4.9"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.5"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Logo({
  className,
  showSuffix = true,
}: {
  className?: string;
  showSuffix?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <CrestMark />
      <span className="text-[15px] font-semibold tracking-tight text-neutral-900">
        InfyCrest
        {showSuffix && (
          <span className="font-medium text-neutral-400"> Solutions</span>
        )}
      </span>
    </span>
  );
}
