import { services } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Services() {
  return (
    <section id="services" data-section="true" data-journey="services" className="section-shell mx-auto max-w-[1400px] px-6 py-36 lg:px-10 lg:py-48 xl:py-56">
      <Reveal variant="text">
        <SectionHeading eyebrow="03 — Services" title="What we handle, so you don't have to." className="mb-16 max-w-2xl" />
      </Reveal>

      <div className="overflow-hidden rounded-[26px] border border-line/85">
        {services.map((service, index) => (
          <Reveal key={service.id} variant="card" delay={index * 0.05}>
            <div data-dir={index % 2 === 0 ? "right" : "left"} className={index % 2 === 0 ? "service-row group grid items-center gap-6 bg-[linear-gradient(150deg,rgba(255,255,255,0.9),rgba(249,245,236,0.78))] px-5 py-9 sm:px-6 sm:py-11 lg:grid-cols-12 lg:gap-8 lg:px-10" : "service-row group grid items-center gap-6 bg-[linear-gradient(150deg,rgba(239,231,209,0.5),rgba(255,255,255,0.84))] px-5 py-9 sm:px-6 sm:py-11 lg:grid-cols-12 lg:gap-8 lg:px-10"}>
              <p className={index % 2 === 0 ? "font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-steel lg:col-span-2" : "font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-steel lg:col-span-2 lg:order-4 lg:text-right"}>{service.id}</p>
              <p className={index % 2 === 0 ? "font-display text-[1.74rem] leading-[0.98] tracking-[-0.012em] sm:text-[1.95rem] lg:col-span-4 lg:text-[2.35rem]" : "font-display text-[1.74rem] leading-[0.98] tracking-[-0.012em] sm:text-[1.95rem] lg:col-span-4 lg:order-3 lg:text-[2.35rem]"}>{service.title}</p>
              <p className={index % 2 === 0 ? "text-[0.95rem] leading-relaxed text-charcoal/66 sm:text-[1rem] lg:col-span-5" : "text-[0.95rem] leading-relaxed text-charcoal/66 sm:text-[1rem] lg:col-span-5 lg:order-2"}>{service.description}</p>
              <div className={index % 2 === 0 ? "flex justify-end lg:col-span-1" : "flex justify-start lg:col-span-1 lg:order-1"}>
                <span className={index % 2 === 0 ? "inline-flex h-11 w-11 items-center justify-center rounded-full border border-line/90 bg-white/55 text-xl transition-transform duration-300 group-hover:translate-x-1" : "inline-flex h-11 w-11 items-center justify-center rounded-full border border-line/90 bg-white/55 text-xl transition-transform duration-300 group-hover:-translate-x-1"}>→</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
