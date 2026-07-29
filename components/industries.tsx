import Image from "next/image";
import { industries } from "@/lib/site";
import { Reveal } from "@/components/reveal";

export function Industries() {
  return (
    <section id="industries" data-section="true" data-journey="industries" className="bg-paper px-6 py-28 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-[1400px]">
        <Reveal variant="text">
          <div className="industries-head mb-14 flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-xl font-display text-[2.45rem] leading-[0.94] tracking-tight text-charcoal lg:text-[3.75rem]">Industries we keep moving.</h2>
            <p className="max-w-md font-mono text-[10.5px] font-semibold uppercase tracking-[0.16em] text-charcoal/55">Courier, warehouse, and construction staffing built for real shift pressure.</p>
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
                  className={index === 0
                    ? "relative h-[52vh] overflow-hidden rounded-[22px] border border-charcoal/10 bg-white lg:h-full"
                    : "relative h-[32vh] overflow-hidden rounded-[18px] border border-charcoal/10 bg-white lg:h-full"}
                >
                  <Image
                    src={industry.image}
                    alt={industry.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes={index === 0 ? "(min-width: 1024px) 58vw, 100vw" : "(min-width: 1024px) 42vw, 100vw"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/78 via-charcoal/35 to-charcoal/10" />
                  <p className="absolute left-5 top-5 rounded-full border border-charcoal/20 bg-white/92 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-charcoal shadow-[0_2px_8px_rgba(0,0,0,0.18)] backdrop-blur-sm">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                </div>
                <div className={index === 0 ? "mt-5 grid gap-3 lg:grid-cols-[1.2fr_1fr]" : "mt-4 grid gap-3"}>
                  <p className={index === 0 ? "font-display text-[2.25rem] leading-[0.95] tracking-tight text-charcoal" : "font-display text-[2rem] leading-[0.98] tracking-tight text-charcoal lg:text-[2.2rem]"}>{industry.title}</p>
                  <p className="max-w-xs text-[0.96rem] leading-relaxed text-charcoal/72">{industry.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
