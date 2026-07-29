import { timeline } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

function TimelineColumn({ title, items }: { title: string; items: readonly { title: string; text: string }[] }) {
  return (
    <div className="timeline-column">
      <p className="mb-8 font-mono text-[10.5px] font-semibold uppercase tracking-[0.16em] text-charcoal/58">{title}</p>
      <ol className="timeline-line relative space-y-6 border-l border-charcoal/22 pl-8">
        {items.map((item, index) => (
          <li key={item.title} className="timeline-item luxury-panel relative rounded-2xl p-5">
            <span
              className={`absolute -left-[38px] top-0 h-3 w-3 rounded-full ${index === 0 ? "bg-emerald-bright" : "border border-charcoal/30 bg-white"}`}
            />
            <p className="mb-2 font-display text-[1.58rem] leading-[1.01] tracking-[-0.01em]">{item.title}</p>
            <p className="text-[0.95rem] leading-relaxed text-charcoal/62">{item.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function Timeline() {
  return (
    <section id="how" data-section="true" data-journey="timeline" className="section-shell relative overflow-hidden bg-beige py-36 lg:py-48 xl:py-56">
      <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden="true">
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-charcoal/20 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal variant="text">
          <SectionHeading eyebrow="04 — How It Works" title="Two paths. One shared timeline." className="mb-16 max-w-2xl" />
        </Reveal>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-14">
          <Reveal variant="timeline" className="lg:pr-8">
            <TimelineColumn title="For Job Seekers" items={timeline.seekers} />
          </Reveal>
          <Reveal variant="timeline" delay={0.08} className="lg:pt-16 lg:pl-8">
            <TimelineColumn title="For Employers" items={timeline.employers} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
