import Image from "next/image";
import { industries } from "@/lib/site";
import { Reveal } from "@/components/reveal";

export function Industries() {
  return (
    <section id="industries" data-section="true" data-journey="industries" className="section-shell bg-paper px-6 py-30 lg:px-10 lg:py-38">
      <div className="mx-auto max-w-[1400px]">
        <Reveal variant="text">
          <div className="industries-head mb-16 flex flex-wrap items-end justify-between gap-8">
            <h2 className="max-w-2xl font-display text-[2.5rem] leading-[0.9] tracking-[-0.024em] text-charcoal lg:text-[3.95rem]">Industries we keep moving.</h2>
            <p className="max-w-md font-mono text-[10.5px] font-semibold uppercase tracking-[0.16em] text-charcoal/58">Courier, warehouse, and construction staffing built for real shift pressure.</p>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:auto-rows-[minmax(220px,1fr)] lg:grid-cols-12">
          {industries.map((industry, index) => (
            <Reveal
              key={industry.title}
              variant="card"
              delay={index * 0.1}
              className={index === 0 ? "lg:col-span-7 lg:row-span-2" : "lg:col-span-5"}
            >
              <article className={index === 0 ? "industry-feature group h-full" : "industry-support group h-full"}>
                <div
                  data-parallax="soft"
                  data-cursor-reactive="true"
                  className={index === 0
                    ? "cursor-reactive-frame relative h-[52vh] overflow-hidden rounded-[26px] border border-charcoal/10 bg-white shadow-[0_30px_70px_-34px_rgba(18,20,15,0.5)] lg:h-full"
                    : "cursor-reactive-frame relative h-[32vh] overflow-hidden rounded-[22px] border border-charcoal/10 bg-white shadow-[0_22px_52px_-34px_rgba(18,20,15,0.44)] lg:h-full"}
                >
                  <Image
                    src={industry.image}
                    alt={industry.alt}
                    fill
                    className="cursor-reactive-media object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes={index === 0 ? "(min-width: 1024px) 58vw, 100vw" : "(min-width: 1024px) 42vw, 100vw"}
                  />
                  <span className="cursor-reactive-glow" aria-hidden="true" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/28 to-charcoal/8" />
                  <p className="absolute left-5 top-5 rounded-full border border-charcoal/20 bg-white/92 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-charcoal shadow-[0_6px_14px_rgba(0,0,0,0.18)] backdrop-blur-sm">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                </div>
                <div className={index === 0 ? "mt-5 grid gap-3 lg:grid-cols-[1.2fr_1fr]" : "mt-4 grid gap-3"}>
                  <p className={index === 0 ? "font-display text-[2.35rem] leading-[0.94] tracking-[-0.018em] text-charcoal" : "font-display text-[2.05rem] leading-[0.96] tracking-[-0.014em] text-charcoal lg:text-[2.25rem]"}>{industry.title}</p>
                  <p className="max-w-xs text-[0.97rem] leading-relaxed text-charcoal/72">{industry.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
