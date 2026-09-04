"use client";

import { Star } from "lucide-react";
import Reveal from "./Reveal";
import { restaurant } from "@/data/restaurant";
import Button from "./Button";

// Neutral placeholder review cards. Replace with real review text when
// verified Google reviews are supplied — do not invent quotes.
const placeholderReviews = [
  { text: "Guest review text goes here.", name: "Guest Name" },
  { text: "Guest review text goes here.", name: "Guest Name" },
];

export default function Reviews() {
  const stars = Math.round(restaurant.rating);
  return (
    <section id="reviews" className="relative bg-ember py-24 sm:py-32 grain">
      <div className="mx-auto max-w-shell px-5 sm:px-8 text-center">
        <Reveal>
          <p className="eyebrow text-[11px] font-semibold text-gold tracking-wide3">
            What guests are saying
          </p>
        </Reveal>

        {/* Oversized rating */}
        <Reveal delay={0.08}>
          <div className="mt-10 flex flex-col items-center">
            <p className="font-display text-[clamp(5rem,18vw,11rem)] leading-none text-ivory">{restaurant.rating}</p>
            <div className="flex gap-1.5 mt-4" aria-label={`Rated ${restaurant.rating} out of 5`}>
              {[0, 1, 2, 3, 4].map((i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${i < stars ? "text-gold fill-gold" : "text-ivory/20"}`}
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="eyebrow text-[11px] text-stonewarm mt-4">Google rating · {restaurant.rating} / 5</p>
            <p className="eyebrow text-[11px] text-stonewarm mt-2">{restaurant.reviewCount}+ reviews</p>
          </div>
        </Reveal>

        {/* Placeholder review cards */}
        <div className="mt-14 grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto">
          {placeholderReviews.map((r, i) => (
            <Reveal key={i} delay={0.1 * (i + 1)}>
              <figure className="bg-ink/60 border border-ivory/10 rounded-sm p-8 text-left h-full">
                <Star className="h-4 w-4 text-gold fill-gold mb-4" aria-hidden="true" />
                <blockquote className="font-display text-xl text-ivory leading-relaxed">“{r.text}”</blockquote>
                <figcaption className="mt-4 eyebrow text-[10px] text-stonewarm">— {r.name}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <Button
            variant="outline"
            size="lg"
            external={!!restaurant.reviewsUrl}
            href={restaurant.reviewsUrl ?? "#reviews"}
            arrow
          >
            Read more reviews
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
