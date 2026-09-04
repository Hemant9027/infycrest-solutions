import Image from "next/image";
import Reveal from "./reveal";
import { Eyebrow } from "./ui";
import { IMG } from "@/lib/images";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 bg-ivory py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow index="03" label="Hotel Experience" />
          </Reveal>
          <Reveal delay={90}>
            <h2 className="mt-7 font-display text-[2.6rem] font-light leading-[1.04] sm:text-6xl">
              The unhurried art of
              <span className="block italic text-sea">a Bahamian day.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 sm:mt-20">
          {IMG.experience.map((item, i) => {
            const flip = i % 2 === 1;
            return (
              <div
                key={item.title}
                className={`grid items-center gap-10 border-t border-ink/10 py-14 sm:py-16 lg:grid-cols-12 lg:gap-14 ${
                  i === 0 ? "border-t-0 pt-2" : ""
                }`}
              >
                <Reveal
                  variant="clip"
                  delay={100}
                  className={`lg:col-span-5 ${flip ? "lg:order-2" : ""}`}
                >
                  <div className="group relative aspect-[4/3.2] overflow-hidden rounded-3xl shadow-card">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 1024px) 42vw, 100vw"
                      className="img-zoom object-cover"
                    />
                  </div>
                </Reveal>

                <div className={`lg:col-span-7 ${flip ? "lg:order-1" : ""}`}>
                  <Reveal delay={60}>
                    <span className="font-display text-6xl font-light italic text-sand sm:text-7xl">
                      0{i + 1}
                    </span>
                  </Reveal>
                  <Reveal delay={140}>
                    <h3 className="mt-4 font-display text-3xl font-light sm:text-4xl">{item.title}</h3>
                  </Reveal>
                  <Reveal delay={220}>
                    <p className="mt-5 max-w-lg text-base leading-relaxed text-ink/70">{item.copy}</p>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
