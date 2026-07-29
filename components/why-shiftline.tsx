import { whyShiftline } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const icons = [
  <path key="fast" d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />,
  <path key="verified" d="M9 12l2 2 4-4M12 3l7 4v5c0 5-3 8-7 9-4-1-7-4-7-9V7l7-4z" />,
  <path key="support" d="M12 20l-1-1c-4-4-7-6.5-7-10A4 4 0 0112 6a4 4 0 017 3c0 3.5-3 6-7 10z" />,
  <path key="reliable" d="M3 4h18v16H3zM3 9h18M8 3v3M16 3v3" />,
  <><path key="flexible-lines" d="M4 6h16M4 12h10M4 18h16" /><circle key="flexible-dot" cx="18" cy="12" r="2" /></>,
];

export function WhyShiftline() {
  return (
    <section id="why" data-section="true" className="bg-beige px-6 py-36 lg:px-10 lg:py-48 xl:py-56">
      <Reveal variant="text">
        <SectionHeading eyebrow="05 — Why Best Noornova" title="Built for companies that need certainty before sunrise." className="mb-16 max-w-3xl" />
      </Reveal>

      <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
        {whyShiftline.map((item, index) => (
          <Reveal key={item} variant="card" delay={index * 0.08}>
            <div className={index % 2 === 0 ? "flex min-h-[236px] flex-col justify-between bg-paper p-8 transition-transform duration-500 hover:-translate-y-2.5 lg:-translate-y-4" : "flex min-h-[236px] flex-col justify-between bg-paper p-8 transition-transform duration-500 hover:-translate-y-2.5"}>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-emerald-deep/22 bg-emerald-deep/[0.05]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-emerald-deep)" strokeWidth="1.5" aria-hidden="true">
                {icons[index]}
                </svg>
              </span>
              <p className="mt-6 font-display text-[1.36rem] leading-[1.05]">{item}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
