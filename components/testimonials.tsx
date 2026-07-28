import Image from "next/image";
import { testimonials } from "@/lib/site";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Testimonials() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-28 lg:px-10 lg:py-40 xl:py-48">
      <Reveal>
        <SectionHeading eyebrow="07 — Voices" title="People who've worked with us say it best." className="mb-16 max-w-2xl" />
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Reveal key={testimonial.role} delay={index * 0.06}>
            <Card className="bg-white p-8" lift>
              <div className="relative mb-6 h-11 w-11 overflow-hidden rounded-full border border-line bg-line">
                <Image src={testimonial.image} alt={testimonial.alt} fill className="object-cover" sizes="44px" />
              </div>
              <p className="mb-6 font-display text-lg leading-relaxed">"{testimonial.quote}"</p>
              <p className="font-mono text-xs uppercase tracking-widest text-steel">{testimonial.role}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
