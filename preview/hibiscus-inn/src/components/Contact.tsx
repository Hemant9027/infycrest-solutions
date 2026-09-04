import { ArrowUpRight, Mail, MapPin, MessageSquareHeart } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import InquiryForm from "@/components/InquiryForm";
import { CONTACT_MAILTO, EMAIL, LOCATION } from "@/lib/site";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden bg-sand-100 py-24 md:py-36"
    >
      <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-6 md:px-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title={
              <>
                Say hello —{" "}
                <em className="italic text-sea-600">
                  we&apos;d love to hear from you
                </em>
              </>
            }
            lede="Questions, travel dates or a stay already taking shape in your mind? Drop us a line — you'll always reach a real person, never a call centre."
          />

          <Reveal delay={0.15} className="mt-10">
            <a
              href={CONTACT_MAILTO}
              className="group flex items-center gap-5 rounded-[1.75rem] bg-white p-6 shadow-sm ring-1 ring-sea-900/10 transition-shadow duration-300 hover:shadow-md sm:p-7"
            >
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-hibiscus-100 text-hibiscus-600 transition-colors duration-300 group-hover:bg-hibiscus-500 group-hover:text-white">
                <Mail className="h-6 w-6" />
              </span>
              <span className="min-w-0">
                <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-sea-800">
                  Email us anytime
                </span>
                <span className="mt-1 block truncate font-display text-xl tracking-tight text-ink sm:text-2xl">
                  {EMAIL}
                </span>
              </span>
              <ArrowUpRight className="ml-auto h-5 w-5 shrink-0 text-sea-700 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>

          <Reveal delay={0.22} className="mt-6">
            <div className="flex items-center gap-3 text-ink/65">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-sea-100 text-sea-700">
                <MapPin className="h-5 w-5" />
              </span>
              <span className="text-sm font-medium">{LOCATION}</span>
            </div>
          </Reveal>

          <Reveal delay={0.3} className="mt-8">
            <div className="flex items-start gap-4 rounded-2xl bg-sea-100/70 p-5 text-sm leading-relaxed text-sea-800">
              <MessageSquareHeart className="mt-0.5 h-5 w-5 shrink-0" />
              <p>
                Availability is confirmed personally by email. Send us your
                dates, tell us who&apos;s coming, and we&apos;ll take it from
                there — no booking portals, no middlemen.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <InquiryForm />
        </Reveal>
      </div>
    </section>
  );
}
