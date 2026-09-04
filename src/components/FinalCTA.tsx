import { ArrowUpRight, Phone } from "lucide-react";
import { SITE, whatsappUrl } from "@/config/site";
import NewsletterForm from "@/components/NewsletterForm";
import Reveal from "@/components/Reveal";

export default function FinalCTA() {
  return (
    <section id="contact" className="scroll-mt-24 pb-20 pt-2 sm:pb-28">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-neutral-950 px-6 py-16 text-center sm:rounded-[2.5rem] sm:px-12 sm:py-24">
            {/* Quiet top glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-40 left-1/2 size-[560px] -translate-x-1/2 rounded-full bg-white/[0.07] blur-3xl"
            />

            <div className="relative mx-auto max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-neutral-500 sm:text-xs">
                Let&apos;s talk / 2026
              </p>
              <h2 className="mt-5 text-[clamp(2.1rem,5.2vw,3.6rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-white">
                Let&apos;s create something exceptional.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-neutral-400 sm:text-base">
                Share your email for thoughtful updates — or skip the inbox and
                tell us directly about your website, software, automation or
                SaaS project.
              </p>

              <div className="mx-auto mt-10 max-w-md">
                <NewsletterForm />
              </div>

              <div className="mt-8 flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-600">
                <span aria-hidden="true" className="h-px flex-1 bg-white/10" />
                or reach out directly
                <span aria-hidden="true" className="h-px flex-1 bg-white/10" />
              </div>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-neutral-900 transition-colors hover:bg-neutral-200"
                >
                  Let&apos;s Build Together
                  <ArrowUpRight className="size-4" strokeWidth={2.4} />
                </a>
                <a
                  href={whatsappUrl(
                    "Hi InfyCrest Solutions, I'd like to discuss a project over WhatsApp."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-[15px] font-medium text-white transition-colors hover:border-white/60"
                >
                  Chat on WhatsApp
                  <ArrowUpRight className="size-4" strokeWidth={2.4} />
                </a>
                <a
                  href={SITE.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-[15px] font-medium text-white transition-colors hover:border-white/60"
                >
                  <Phone className="size-4" strokeWidth={2.2} />
                  {SITE.phoneDisplay}
                </a>
              </div>

              <p className="mt-8 text-sm text-neutral-500">
                Prefer email?{" "}
                <a
                  href={SITE.emailHref}
                  className="font-medium text-neutral-300 underline decoration-neutral-600 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
                >
                  {SITE.email}
                </a>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
