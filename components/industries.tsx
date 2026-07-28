import Image from "next/image";
import { industries } from "@/lib/site";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const industryIcons = [
  <svg key="delivery" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><circle cx="6" cy="18" r="3" /><circle cx="18" cy="18" r="3" /><path d="M9 18h6M9 18l2-9h4l3 5M11 9H7l-2 5" /></svg>,
  <svg key="hospitality" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M6 3v7a2 2 0 002 2 2 2 0 002-2V3M8 12v9M17 3c-2 0-3 2-3 5s1 4 3 4 0 9 0 9M17 3v18" /></svg>,
  <svg key="construction" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M3 21l7-7M13 11l7-7M10 4l10 10-3 3L7 7l3-3zM3 21l3-1 1-3-4 4z" /></svg>,
];

export function Industries() {
  return (
    <section id="industries" className="bg-charcoal py-28 lg:py-40 xl:py-48">
      <div className="grain mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mb-16 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <Reveal>
            <SectionHeading
              dark
              eyebrow="02 — Industries"
              title="From the street to the site."
              description="We keep live, verified workers ready for delivery routes, warehouse floors, and active construction projects."
            />
          </Reveal>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <Reveal key={industry.title} delay={index * 0.09}>
              <Card className="border border-white/10 bg-white/[0.03]" lift>
                <div className="frame-surface relative h-72">
                  <Image src={industry.image} alt={industry.alt} fill className="object-cover opacity-85" sizes="(min-width: 1024px) 33vw, 100vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white/90">{industryIcons[index]}</div>
                </div>
                <div className="bg-white/[0.03] p-7">
                  <p className="mb-3 font-display text-2xl text-white">{industry.title}</p>
                  <p className="text-sm leading-relaxed text-white/55">{industry.description}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
