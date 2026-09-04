"use client";

import type { ReactNode } from "react";
import { dispatchPrebook } from "./prebook";

type PrebookButtonProps = {
  className?: string;
  roomType?: string;
  children: ReactNode;
};

/** Small client island: scrolls to the booking form and pre-fills the room preference. */
export function PrebookButton({ className, roomType, children }: PrebookButtonProps) {
  return (
    <button type="button" onClick={() => dispatchPrebook({ roomType })} className={className}>
      {children}
    </button>
  );
}
