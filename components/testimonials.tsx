import Image from "next/image";
import { testimonials } from "@/lib/site";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Testimonials() {
  return (
    <section data-section="true" data-journey="voices" className="section-shell mx-auto max-w-[1400px] px-6 py-38 lg:px-10 lg:py-50 xl:py-58">
      <Reveal variant="text">
        <SectionHeading eyebrow="07 — Voices" title="People who've worked with us say it best." className="mb-18 max-w-3xl" />
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-12">
        {testimonials.map((testimonial, index) => (
          <Reveal key={testimonial.role} variant="card" delay={index * 0.08} className={index === 0 ? "lg:col-span-7" : "lg:col-span-5"}>
            <Card className={index === 0 ? "testimonial-feature luxury-panel p-8 lg:p-10" : "testimonial-card luxury-panel p-8 lg:p-9"} lift>
              <div className="relative mb-7 h-12 w-12 overflow-hidden rounded-full border border-line bg-line">
                <Image src={testimonial.image} alt={testimonial.alt} fill className="object-cover" sizes="44px" />
              </div>
              <p className={index === 0 ? "mb-7 max-w-3xl font-display text-[1.72rem] leading-[1.26] tracking-[-0.012em] text-charcoal" : "mb-7 font-display text-[1.4rem] leading-[1.34] tracking-[-0.008em] text-charcoal"}>"{testimonial.quote}"</p>
              <p className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.14em] text-steel">{testimonial.role}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
