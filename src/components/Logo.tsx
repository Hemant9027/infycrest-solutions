import { cn } from "@/lib/utils";

/** InfyCrest stacked-layers mark. */
export function CrestMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={cn("size-8 shrink-0", className)}
    >
      <rect width="32" height="32" rx="8" fill="#0a0a0a" />
      <path
        d="m8 12 8-4 8 4-8 4-8-4Z"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="m8 16 8 4 8-4"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m8 20 8 4 8-4"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.8"
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
