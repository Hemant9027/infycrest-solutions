import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { whatsappUrl } from "@/config/site";

const STAGGER = ["0ms", "90ms", "180ms", "270ms", "340ms"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="hero-dots absolute inset-0" />
      <div className="relative mx-auto max-w-[1200px] px-5 pb-16 pt-32 text-center sm:px-8 sm:pb-20 sm:pt-44">
        <p
          style={{ animationDelay: STAGGER[0] }}
          className="animate-fade-up text-[11px] font-semibold uppercase tracking-[0.24em] text-neutral-400 sm:text-xs"
        >
          Digital Experiences / 2026
        </p>

        <h1
          style={{ animationDelay: STAGGER[1] }}
          className="animate-fade-up mx-auto mt-6 max-w-4xl text-[clamp(2.55rem,6.4vw,5rem)] font-semibold leading-[1.03] tracking-[-0.04em] text-neutral-900"
        >
          Websites designed to make your business look{" "}
          <span className="whitespace-nowrap">exceptional.</span>
        </h1>

        <p
          style={{ animationDelay: STAGGER[2] }}
          className="animate-fade-up mx-auto mt-6 max-w-xl text-base leading-relaxed text-neutral-500 sm:text-lg"
        >
          Explore our ready-to-launch website concepts, preview them live, and
          choose the perfect starting point for your next project.
        </p>

        <div
          style={{ animationDelay: STAGGER[3] }}
          className="animate-fade-up mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Link
            href="#collection"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-neutral-900 px-7 py-3.5 text-[15px] font-medium text-white transition-all hover:bg-black hover:shadow-[0_14px_30px_rgba(0,0,0,0.18)] sm:w-auto"
          >
            Explore Websites
            <ArrowDown className="size-4" strokeWidth={2.4} />
          </Link>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-neutral-200 bg-white px-7 py-3.5 text-[15px] font-medium text-neutral-900 transition-all hover:border-neutral-900 sm:w-auto"
          >
            Let&apos;s Build Together
            <ArrowUpRight className="size-4" strokeWidth={2.4} />
          </a>
        </div>

        <p
          style={{ animationDelay: STAGGER[4] }}
          className="animate-fade-up mt-8 text-[13px] tracking-tight text-neutral-400"
        >
          Landing pages from Custom quote{" "}
          <span aria-hidden="true" className="mx-1.5 text-neutral-300">·</span>{" "}
          Fully responsive{" "}
          <span aria-hidden="true" className="mx-1.5 text-neutral-300">·</span>{" "}
          Customizable
        </p>
      </div>
    </section>
  );
}
