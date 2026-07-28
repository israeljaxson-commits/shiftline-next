import { timeline } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

function TimelineColumn({ title, items }: { title: string; items: readonly { title: string; text: string }[] }) {
  return (
    <div>
      <p className="mb-8 font-mono text-xs uppercase tracking-widest text-charcoal/50">{title}</p>
      <ol className="relative space-y-10 border-l border-charcoal/15 pl-8">
        {items.map((item, index) => (
          <li key={item.title} className="relative">
            <span
              className={`absolute -left-[38px] top-0 h-3 w-3 rounded-full ${index === 0 ? "bg-emerald-bright" : "border border-charcoal/30 bg-white"}`}
            />
            <p className="mb-1 font-display text-xl">{item.title}</p>
            <p className="text-sm text-charcoal/60">{item.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function Timeline() {
  return (
    <section id="how" className="bg-beige py-28 lg:py-40 xl:py-48">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <SectionHeading eyebrow="04 — How It Works" title="Two paths. One shared timeline." className="mb-16 max-w-xl" />
        </Reveal>

        <div className="grid gap-14 lg:grid-cols-2">
          <Reveal>
            <TimelineColumn title="For Job Seekers" items={timeline.seekers} />
          </Reveal>
          <Reveal>
            <TimelineColumn title="For Employers" items={timeline.employers} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
