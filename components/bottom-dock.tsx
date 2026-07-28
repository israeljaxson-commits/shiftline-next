"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

const items = [
  { href: "#industries", label: "Industries" },
  { href: "#services", label: "Services" },
  { href: "#how", label: "Process" },
  { href: "#metrics", label: "Metrics" },
  { href: "#apply", label: "Apply" },
] as const;

export function BottomDock() {
  const [activeHref, setActiveHref] = useState<string>("#industries");
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 26,
    mass: 0.2,
  });

  const sectionIds = useMemo(() => items.map((item) => item.href.replace("#", "")), []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible?.target?.id) return;
        setActiveHref(`#${visible.target.id}`);
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0.2, 0.45, 0.7],
      },
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return (
    <motion.div
      initial={{ y: 36, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 0.8, 0.3, 1] }}
      className="fixed bottom-4 left-1/2 z-50 w-[min(94vw,700px)] -translate-x-1/2"
    >
      <div className="flex items-center gap-2 rounded-2xl border p-2 text-paper shadow-[0_14px_36px_rgba(0,0,0,0.34)]" style={{ backgroundColor: "#000", borderColor: "#000" }}>
        <Link
          href="#top"
          className="flex h-12 min-w-[148px] items-center justify-center rounded-xl bg-paper px-4 text-center font-display text-lg font-semibold tracking-tight text-charcoal transition-transform hover:-translate-y-0.5"
          aria-label="Back to top"
        >
          Best Noornova
        </Link>
        <div className="grid flex-1 grid-cols-5 gap-2">
          {items.map((item) => {
            const isActive = activeHref === item.href;
            const isHovered = hoveredHref === item.href;

            return (
              <motion.div
                key={item.href}
                className={cn(
                  "relative overflow-hidden rounded-xl border bg-black px-2 py-3 text-center font-mono text-[11px] uppercase tracking-[0.12em] transition-colors",
                  isActive ? "border-white text-white" : "border-[#2b2b2b] text-white hover:border-[#595959] hover:text-white",
                )}
                whileHover={{ y: -2, scale: 1.02 }}
                animate={{
                  x: isHovered ? 0 : 0,
                }}
                transition={{ type: "spring", stiffness: 500, damping: 32 }}
                onMouseMove={(event) => {
                  const target = event.currentTarget;
                  const rect = target.getBoundingClientRect();
                  const offsetX = (event.clientX - rect.left - rect.width / 2) / 18;
                  const offsetY = (event.clientY - rect.top - rect.height / 2) / 18;
                  target.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
                  setHoveredHref(item.href);
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.transform = "translate(0px, 0px)";
                  setHoveredHref(null);
                }}
              >
                <Link href={item.href} onClick={() => setActiveHref(item.href)} className="absolute inset-0 z-20" aria-label={item.label} />
                {isActive ? (
                  <motion.span
                    layoutId="dock-active-pill"
                    transition={{ type: "spring", stiffness: 500, damping: 38 }}
                    className="absolute inset-0 rounded-[10px] bg-[#171717]"
                    aria-hidden="true"
                  />
                ) : null}
                <span className="relative z-10">{item.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
      <div className="pointer-events-none mt-2 h-1.5 overflow-hidden rounded-full bg-black">
        <motion.div
          className="h-full origin-left rounded-full bg-white"
          style={{ scaleX: progress }}
        />
      </div>
    </motion.div>
  );
}
