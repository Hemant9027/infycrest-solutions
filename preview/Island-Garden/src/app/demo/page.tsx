import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, Palmtree } from "lucide-react";
import { listDemos } from "@/demos";

export const metadata: Metadata = {
  title: "Website Demos — InfyCrest Solutions",
  description: "Hospitality website concepts by InfyCrest Solutions.",
};

export default function DemoIndexPage() {
  const demos = listDemos();

  return (
    <main className="bg-pine-ink px-5 py-20 text-cream sm:px-8 md:py-28">
      <div className="mx-auto w-full max-w-5xl">
        <div className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-full bg-coral text-cream">
            <Palmtree size={18} />
          </span>
          <p className="text-[11px] font-bold uppercase tracking-[0.32em] text-cream/60">
            InfyCrest Solutions · Website demos
          </p>
        </div>

        <h1 className="mt-8 max-w-2xl font-display text-5xl leading-[1.02] font-medium md:text-6xl">
          Hospitality concepts, <span className="italic text-coral">live</span> in the browser.
        </h1>

        <div className="mt-14 space-y-4">
          {demos.map((demo) => (
            <Link
              key={demo.slug}
              href={`/demo/${demo.slug}`}
              className="group flex flex-col gap-6 rounded-3xl border border-cream/12 p-5 transition-colors hover:border-cream/35 sm:flex-row sm:items-center"
            >
              <span className="relative block h-40 w-full shrink-0 overflow-hidden rounded-2xl sm:h-28 sm:w-44">
                <Image
                  src={demo.hero.image.src}
                  alt={demo.hero.image.alt}
                  fill
                  sizes="(min-width: 640px) 11rem, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </span>
              <span className="flex-1">
                <span className="block text-[10px] font-bold uppercase tracking-[0.26em] text-cream/50">
                  /demo/{demo.slug}
                </span>
                <span className="mt-1.5 block font-display text-3xl font-medium">{demo.name}</span>
                <span className="mt-1 block text-sm text-cream/60">
                  {demo.positioning} — {demo.address.city}, {demo.address.country}
                </span>
              </span>
              <span className="grid size-12 shrink-0 place-items-center rounded-full border border-cream/20 transition-all duration-300 group-hover:border-coral group-hover:bg-coral">
                <ArrowUpRight size={18} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
