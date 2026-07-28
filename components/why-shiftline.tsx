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
    <section className="mx-auto max-w-[1400px] px-6 py-28 lg:px-10 lg:py-40">
      <Reveal>
        <SectionHeading eyebrow="05 — Why Shiftline" title="Built for the shift that can't go unfilled." className="mb-16 max-w-xl" />
      </Reveal>

      <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
        {whyShiftline.map((item, index) => (
          <Reveal key={item} delay={index * 0.05} amount={0.22}>
            <div className="flex min-h-[220px] flex-col justify-between bg-paper p-8 transition-transform duration-500 hover:-translate-y-1.5">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--color-emerald-deep)" strokeWidth="1.5" aria-hidden="true">
                {icons[index]}
              </svg>
              <p className="mt-6 font-display text-lg">{item}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
