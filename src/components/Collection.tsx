"use client";

import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowUpRight, RotateCcw, Search } from "lucide-react";
import {
  COLLECTION_DEMOS,
  DEMO_CATEGORIES,
  getDemoBySlug,
  type Demo,
} from "@/data/demos";
import BrowserFrame from "@/components/BrowserFrame";
import ProductDetailsModal from "@/components/ProductDetailsModal";
import ProjectRequestModal from "@/components/ProjectRequestModal";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  ?select=<slug> deep-link support (e.g. from a /demo page)          */
/* ------------------------------------------------------------------ */
function AutoOpenFromQuery({
  onSelect,
}: {
  onSelect: (demo: Demo) => void;
}) {
  const searchParams = useSearchParams();
  const handled = useRef(false);

  useEffect(() => {
    if (handled.current) return;
    const slug = searchParams.get("select");
    if (!slug) return;
    const demo = getDemoBySlug(slug);
    if (demo) {
      handled.current = true;
      onSelect(demo);
    }
  }, [searchParams, onSelect]);

  return null;
}

/* ------------------------------------------------------------------ */
/*  Product card                                                       */
/* ------------------------------------------------------------------ */
function ProductCard({
  demo,
  index,
  onDetails,
  onSelect,
}: {
  demo: Demo;
  index: number;
  onDetails: (demo: Demo) => void;
  onSelect: (demo: Demo) => void;
}) {
  return (
    <Reveal delay={(index % 3) * 90} className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_56px_-28px_rgba(0,0,0,0.28)]">
        <div className="relative">
          <BrowserFrame
            src={demo.thumbnail}
            alt={`${demo.name} website preview`}
            url={`infycrestsolutions.com${demo.previewUrl}`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            imageClassName="transition-transform duration-700 ease-out group-hover:scale-[1.045]"
            className="rounded-none border-0 shadow-none"
          />
          <Link
            href={demo.previewUrl}
            aria-label={`Open live preview of ${demo.name}`}
            className="absolute bottom-3.5 right-3.5 inline-flex items-center gap-1.5 rounded-full border border-neutral-200/80 bg-white/95 px-3.5 py-2 text-xs font-medium text-neutral-900 opacity-100 shadow-sm backdrop-blur transition-all duration-300 hover:bg-neutral-900 hover:text-white lg:translate-y-1 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:focus-visible:translate-y-0 lg:focus-visible:opacity-100"
          >
            Live Preview
            <ArrowUpRight className="size-3.5" strokeWidth={2.4} />
          </Link>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-400">
                {demo.category}
              </p>
              <h3 className="mt-1.5 text-lg font-semibold tracking-tight text-neutral-900">
                {demo.name}
              </h3>
            </div>
            <span className="mt-1 shrink-0 rounded-full bg-neutral-900 px-2.5 py-1 text-[11px] font-semibold text-white">
              {demo.priceLabel}
            </span>
          </div>

          <p className="mt-2.5 line-clamp-2 text-sm leading-relaxed text-neutral-500">
            {demo.tagline}
          </p>

          <div className="mt-auto flex gap-2.5 pt-5">
            <button
              type="button"
              onClick={() => onDetails(demo)}
              className="flex-1 rounded-full border border-neutral-200 py-2.5 text-[13px] font-medium text-neutral-900 transition-colors hover:border-neutral-900"
            >
              Details
            </button>
            <button
              type="button"
              onClick={() => onSelect(demo)}
              className="flex-1 rounded-full bg-neutral-900 py-2.5 text-[13px] font-medium text-white transition-colors hover:bg-black"
            >
              Select
            </button>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/*  Collection section                                                 */
/* ------------------------------------------------------------------ */
export default function Collection() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");
  const [detailsDemo, setDetailsDemo] = useState<Demo | null>(null);
  const [requestDemo, setRequestDemo] = useState<Demo | null>(null);

  const handleSelect = useCallback((demo: Demo) => setRequestDemo(demo), []);

  const filtered = COLLECTION_DEMOS.filter((demo) => {
    const matchesCategory = category === "All" || demo.category === category;
    const haystack = `${demo.name} ${demo.category} ${demo.tagline}`.toLowerCase();
    return matchesCategory && haystack.includes(query.trim().toLowerCase());
  });

  return (
    <section id="collection" className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="02 / Collection"
          title="Explore the Collection"
          description="Choose a polished starting point, then make it yours."
        />

        {/* Controls */}
        <Reveal
          id="categories"
          delay={100}
          className="mt-10 flex scroll-mt-28 flex-col gap-4 sm:mt-12 sm:flex-row sm:items-center sm:justify-between"
        >
          <div
            role="tablist"
            aria-label="Filter by category"
            className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0 sm:pb-0"
          >
            {DEMO_CATEGORIES.map((item) => (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={category === item}
                onClick={() => setCategory(item)}
                className={cn(
                  "shrink-0 rounded-full border px-4 py-2 text-[13px] font-medium transition-colors",
                  category === item
                    ? "border-neutral-900 bg-neutral-900 text-white"
                    : "border-neutral-200 text-neutral-600 hover:border-neutral-900 hover:text-neutral-900"
                )}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64 sm:shrink-0">
            <Search
              className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-neutral-400"
              strokeWidth={2.2}
            />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search websites…"
              aria-label="Search websites"
              className="w-full rounded-full border border-neutral-200 bg-white py-2.5 pl-11 pr-4 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-neutral-900"
            />
          </div>
        </Reveal>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {filtered.map((demo, index) => (
              <ProductCard
                key={demo.slug}
                demo={demo}
                index={index}
                onDetails={setDetailsDemo}
                onSelect={handleSelect}
              />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-3xl border border-dashed border-neutral-200 py-20 text-center">
            <p className="text-[15px] text-neutral-400">
              No websites match your search.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setCategory("All");
              }}
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-neutral-200 px-5 py-2.5 text-sm font-medium text-neutral-900 transition-colors hover:border-neutral-900"
            >
              <RotateCcw className="size-3.5" strokeWidth={2.4} />
              Reset filters
            </button>
          </div>
        )}

        <p className="mt-8 text-center text-xs text-neutral-400">
          Showing {filtered.length} of {COLLECTION_DEMOS.length} website
          concepts — each one customizable end-to-end.
        </p>
      </div>

      {/* Flow modals */}
      <Suspense fallback={null}>
        <AutoOpenFromQuery onSelect={handleSelect} />
      </Suspense>

      <ProductDetailsModal
        demo={detailsDemo}
        onClose={() => setDetailsDemo(null)}
        onSelect={(demo) => {
          setDetailsDemo(null);
          setRequestDemo(demo);
        }}
      />

      {requestDemo && (
        <ProjectRequestModal
          demo={requestDemo}
          open
          onClose={() => setRequestDemo(null)}
        />
      )}
    </section>
  );
}
