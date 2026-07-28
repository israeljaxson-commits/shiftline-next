"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

function AnimatedStat({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) {
      return;
    }

    const controls = animate(0, target, {
      duration: 1.6,
      ease: [0.16, 0.8, 0.3, 1],
      onUpdate(latest) {
        setValue(Math.floor(latest));
      },
    });

    return () => controls.stop();
  }, [inView, target]);

  return (
    <p ref={ref} className="font-display text-5xl text-white lg:text-6xl">
      {value.toLocaleString()}
      {suffix}
    </p>
  );
}

export function Stats() {
  return (
    <section id="metrics" className="grain bg-emerald-deep py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <SectionHeading eyebrow="06 — In Numbers" title="Proof that scale doesn't have to feel impersonal." dark className="mb-14 max-w-2xl" />
        </Reveal>

        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.05}>
              <AnimatedStat target={stat.target} suffix={stat.suffix} />
              <p className="mt-3 font-mono text-[11px] uppercase tracking-widest text-white/60">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
