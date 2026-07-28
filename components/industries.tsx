import Image from "next/image";
import { industries } from "@/lib/site";
import { Reveal } from "@/components/reveal";

export function Industries() {
  return (
    <section id="industries" className="bg-paper px-6 py-16 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <h2 className="max-w-xl font-display text-4xl tracking-tight text-charcoal lg:text-6xl">Industries we keep moving.</h2>
            <p className="max-w-md font-mono text-[11px] uppercase tracking-[0.16em] text-charcoal/55">Courier, warehouse, and construction staffing built for real shift pressure.</p>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {industries.map((industry, index) => (
            <Reveal key={industry.title} delay={index * 0.08}>
              <article className="group">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[18px] border border-charcoal/10 bg-white">
                  <Image
                    src={industry.image}
                    alt={industry.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
                  <p className="absolute left-5 top-5 rounded-full border border-white/40 bg-black/30 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-white/85">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap items-start justify-between gap-3">
                  <p className="font-display text-3xl tracking-tight text-charcoal">{industry.title}</p>
                  <p className="max-w-xs text-sm leading-relaxed text-charcoal/72">{industry.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
