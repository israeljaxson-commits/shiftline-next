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
    <p ref={ref} className="font-display text-5xl leading-none text-white lg:text-6xl">
      {value.toLocaleString()}
      {suffix}
    </p>
  );
}

export function Stats() {
  return (
    <section id="metrics" data-section="true" data-journey="stats" className="grain bg-emerald-deep py-36 lg:py-48">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal variant="text">
          <SectionHeading eyebrow="06 — In Numbers" title="Proof that scale doesn't have to feel impersonal." dark className="mb-16 max-w-3xl" />
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} variant="card" delay={index * 0.05}>
              <div className={index % 2 === 0 ? "stat-block bg-emerald-deep/72 px-6 py-8 backdrop-blur-sm lg:translate-y-0 lg:px-8 lg:py-10" : "stat-block bg-emerald-deep/62 px-6 py-8 backdrop-blur-sm lg:translate-y-8 lg:px-8 lg:py-10"}>
                <AnimatedStat target={stat.target} suffix={stat.suffix} />
                <p className="mt-4 font-mono text-[10.5px] font-semibold uppercase tracking-[0.14em] text-white/72">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
