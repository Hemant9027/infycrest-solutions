import { ArrowUpRight, Globe, Server, ShieldCheck } from "lucide-react";
import { whatsappUrl } from "@/config/site";
import Reveal from "@/components/Reveal";

const ITEMS = [
  {
    icon: Server,
    title: "Managed hosting",
    text: "Fast NVMe servers, SSL certificates and daily backups — configured and monitored for you.",
  },
  {
    icon: ShieldCheck,
    title: "Care plan",
    text: "Updates, security patches, uptime monitoring and priority fixes while you run the business.",
  },
  {
    icon: Globe,
    title: "Domains & email",
    text: "Domain setup, DNS management and professional business email on your own name.",
  },
];

export default function HostingBand() {
  return (
    <section id="hosting" className="scroll-mt-24 pb-16 sm:pb-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <Reveal>
          <div className="rounded-[2rem] border border-neutral-200 bg-neutral-50/60 p-7 sm:p-12">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div className="max-w-md">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-400">
                  Web hosting / Care
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
                  Web hosting, handled.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-500 sm:text-[15px]">
                  Every website we launch can stay fast, secure and updated —
                  with hosting and maintenance managed under one roof.
                </p>
              </div>
              <a
                href={whatsappUrl(
                  "Hi InfyCrest Solutions, I'd like to know more about your web hosting and care plans."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-neutral-900 px-6 py-3 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white"
              >
                Ask about hosting
                <ArrowUpRight className="size-4" strokeWidth={2.4} />
              </a>
            </div>

            <div className="mt-10 grid gap-8 border-t border-neutral-200 pt-9 sm:grid-cols-3">
              {ITEMS.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-neutral-200 bg-white text-neutral-900">
                    <item.icon className="size-[18px]" strokeWidth={2} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold tracking-tight text-neutral-900">
                      {item.title}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-neutral-500">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
