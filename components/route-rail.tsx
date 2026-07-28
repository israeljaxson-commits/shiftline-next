"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { routeSections } from "@/lib/site";

type RouteRailProps = {
  sections?: readonly { id: string; label: string }[];
};

export function RouteRail({ sections = routeSections }: RouteRailProps) {
  const { scrollYProgress } = useScroll();
  const [positions, setPositions] = useState<number[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const fillScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const sectionIds = useMemo(() => sections.map((section) => section.id), [sections]);

  useEffect(() => {
    const measure = () => {
      const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const nextPositions = sectionIds.map((id) => {
        const element = document.getElementById(id);
        if (!element) {
          return 0;
        }

        return (element.offsetTop / maxScroll) * 100;
      });

      setPositions(nextPositions);
    };

    const updateActive = () => {
      const midpoint = window.scrollY + window.innerHeight * 0.5;
      let nextIndex = 0;

      sectionIds.forEach((id, index) => {
        const element = document.getElementById(id);
        if (element && midpoint >= element.offsetTop) {
          nextIndex = index;
        }
      });

      setActiveIndex(nextIndex);
    };

    measure();
    updateActive();

    window.addEventListener("resize", measure);
    window.addEventListener("scroll", updateActive, { passive: true });

    const observer = new ResizeObserver(() => measure());
    observer.observe(document.documentElement);

    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", updateActive);
      observer.disconnect();
    };
  }, [sectionIds]);

  return (
    <aside aria-hidden="true" className="pointer-events-none fixed bottom-0 left-[22px] top-0 z-40 hidden w-px lg:block">
      <div className="absolute inset-0 bg-line" />
      <motion.div className="absolute inset-x-0 top-0 origin-top bg-gradient-to-b from-emerald-deep via-emerald to-emerald-bright" style={{ scaleY: fillScale }} />
      {sections.map((section, index) => (
        <div key={section.id} className="absolute inset-x-0">
          <span
            className={`route-dot absolute left-1/2 h-[9px] w-[9px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition-all duration-500 ${
              index === activeIndex ? "border-emerald-bright bg-emerald-bright shadow-[0_0_0_5px_rgba(46,204,129,0.18)]" : "border-steel bg-paper"
            }`}
            style={{ top: `${positions[index] ?? 0}%` }}
          />
          <span className="route-label" style={{ top: `calc(${positions[index] ?? 0}% - 6px)` }}>
            {section.label}
          </span>
        </div>
      ))}
    </aside>
  );
}
