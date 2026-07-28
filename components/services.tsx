import { services } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-[1400px] px-6 py-28 lg:px-10 lg:py-40 xl:py-48">
      <Reveal>
        <SectionHeading eyebrow="03 — Services" title="What we handle, so you don't have to." className="mb-16 max-w-xl" />
      </Reveal>

      <div className="border-y border-line divide-y divide-line">
        {services.map((service, index) => (
          <Reveal key={service.id} amount={0.18} delay={index * 0.05}>
            <div className="group grid items-center gap-6 py-9 lg:grid-cols-12">
              <p className="font-mono text-sm text-steel lg:col-span-2">{service.id}</p>
              <p className="font-display text-2xl lg:col-span-4 lg:text-3xl">{service.title}</p>
              <p className="leading-relaxed text-charcoal/65 lg:col-span-5">{service.description}</p>
              <div className="flex justify-end lg:col-span-1">
                <span className="inline-block text-2xl transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
