import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { site } from "../data/site";

/** Live open/closed status computed from local device time. */
export function useOpenStatus() {
  const calc = () => {
    const now = new Date();
    const mins = now.getHours() * 60 + now.getMinutes();
    const open =
      mins >= site.hours.openMinutes && mins < site.hours.closeMinutes;
    return open;
  };
  const [open, setOpen] = useState<boolean>(calc);

  useEffect(() => {
    const t = setInterval(() => setOpen(calc()), 30_000);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return open;
}

/** Animated counter that starts when `startWhen` becomes true. */
export function useCountUp(target: number, startWhen: boolean, duration = 1600) {
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!startWhen || started.current) return;
    started.current = true;
    const t0 = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [startWhen, target, duration]);

  return value;
}

/** True when the primary input is a fine pointer (mouse) — used to gate heavy FX. */
export function useFinePointer() {
  const [fine, setFine] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const update = () => setFine(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return fine;
}

/** Simple in-view flag that stays true once triggered. */
export function useOnceInView<T extends HTMLElement>(margin = "-15% 0px") {
  const ref = useRef<T | null>(null);
  const inView = useInView(ref, { once: true, margin: margin as never });
  return { ref, inView };
}
