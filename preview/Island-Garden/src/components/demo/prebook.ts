export const PREBOOK_EVENT = "demo:prebook";

export type PrebookDetail = {
  checkIn?: string;
  checkOut?: string;
  guests?: number;
  roomType?: string;
};

/**
 * Cross-component channel that lets any "request this room / check dates"
 * control pre-fill the booking form in the Book section.
 */
export function dispatchPrebook(detail: PrebookDetail) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent<PrebookDetail>(PREBOOK_EVENT, { detail }));
  requestAnimationFrame(() => {
    document.getElementById("book")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}
