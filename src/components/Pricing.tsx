import { ArrowUpRight } from "lucide-react";
import { PRICING_PLANS, type PricingPlan } from "@/data/pricing";
import { whatsappUrl } from "@/config/site";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { cn } from "@/lib/utils";

function PricingCard({ plan, index }: { plan: PricingPlan; index: number }) {
  const href = whatsappUrl(
    `Hi InfyCrest Solutions, I'm interested in the ${plan.name} plan (${plan.price}).`
  );

  return (
    <Reveal delay={(index % 3) * 90} className="h-full">
      <article
        className={cn(
          "flex h-full flex-col rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1.5 sm:p-8",
          plan.inverted
            ? "border-neutral-800 bg-neutral-950 text-white hover:shadow-[0_30px_60px_-24px_rgba(0,0,0,0.55)]"
            : "border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-[0_28px_56px_-28px_rgba(0,0,0,0.28)]"
        )}
      >
        <h3
          className={cn(
            "text-sm font-semibold tracking-tight",
            plan.inverted ? "text-neutral-300" : "text-neutral-900"
          )}
        >
          {plan.name}
        </h3>
        <p
          className={cn(
            "mt-4 text-[2.1rem] font-semibold leading-none tracking-tight",
            plan.inverted ? "text-white" : "text-neutral-900"
          )}
        >
          {plan.price}
        </p>
        <p
          className={cn(
            "mt-4 text-sm leading-relaxed",
            plan.inverted ? "text-neutral-400" : "text-neutral-500"
          )}
        >
          {plan.description}
        </p>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "mt-8 inline-flex items-center justify-between gap-2 rounded-full border px-5 py-3 text-sm font-medium transition-colors",
            plan.inverted
              ? "border-white/20 bg-white text-neutral-900 hover:bg-neutral-200"
              : "border-neutral-200 text-neutral-900 hover:border-neutral-900"
          )}
        >
          {plan.cta}
          <ArrowUpRight className="size-4 shrink-0" strokeWidth={2.4} />
        </a>
      </article>
    </Reveal>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="03 / Pricing"
          title="Simple, transparent pricing."
          description="Start with a proven design and invest more only when your project needs it."
        />
        <div className="mt-12 grid gap-5 sm:mt-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {PRICING_PLANS.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>
        <Reveal delay={160}>
          <p className="mt-10 text-center text-xs text-neutral-400">
            Every build ships responsive, SEO-ready and launch-supported —
            websites from the Collection start at just ₹999.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
