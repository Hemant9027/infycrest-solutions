import type Lenis from "lenis";

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export function scrollToId(id: string) {
  const target = `#${id}`;
  if (typeof window !== "undefined" && window.__lenis) {
    window.__lenis.scrollTo(target, { offset: -72, duration: 1.4 });
    return;
  }
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}
