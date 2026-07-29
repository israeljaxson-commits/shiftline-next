import { services } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Services() {
  return (
    <section id="services" data-section="true" className="mx-auto max-w-[1400px] px-6 py-36 lg:px-10 lg:py-48 xl:py-56">
      <Reveal variant="text">
        <SectionHeading eyebrow="03 — Services" title="What we handle, so you don't have to." className="mb-18 max-w-2xl" />
      </Reveal>

      <div className="divide-y divide-line border-y border-line">
        {services.map((service, index) => (
          <Reveal key={service.id} variant="card" delay={index * 0.05}>
            <div className={index % 2 === 0 ? "group grid items-center gap-7 bg-paper py-12 lg:grid-cols-12 lg:gap-8" : "group grid items-center gap-7 bg-beige/45 py-12 lg:grid-cols-12 lg:gap-8"}>
              <p className={index % 2 === 0 ? "font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-steel lg:col-span-2" : "font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-steel lg:col-span-2 lg:order-4 lg:text-right"}>{service.id}</p>
              <p className={index % 2 === 0 ? "font-display text-[2rem] leading-[0.98] lg:col-span-4 lg:text-[2.2rem]" : "font-display text-[2rem] leading-[0.98] lg:col-span-4 lg:order-3 lg:text-[2.2rem]"}>{service.title}</p>
              <p className={index % 2 === 0 ? "text-[0.98rem] leading-relaxed text-charcoal/66 lg:col-span-5" : "text-[0.98rem] leading-relaxed text-charcoal/66 lg:col-span-5 lg:order-2"}>{service.description}</p>
              <div className={index % 2 === 0 ? "flex justify-end lg:col-span-1" : "flex justify-start lg:col-span-1 lg:order-1"}>
                <span className={index % 2 === 0 ? "inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-xl transition-transform duration-300 group-hover:translate-x-1" : "inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-xl transition-transform duration-300 group-hover:-translate-x-1"}>→</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
