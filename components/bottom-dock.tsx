"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

const items = [
  {
    href: "#industries",
    label: "Industries",
    icon: (
      <path d="M5 18h14M6.5 18V9.5l5.5-3 5.5 3V18M9 18v-4h6v4" />
    ),
  },
  {
    href: "#services",
    label: "Services",
    icon: (
      <>
        <rect x="5" y="6" width="14" height="12" rx="2" />
        <path d="M5 11h14M9 6v12" />
      </>
    ),
  },
  {
    href: "#how",
    label: "Process",
    icon: (
      <>
        <circle cx="7" cy="12" r="1.8" />
        <circle cx="12" cy="12" r="1.8" />
        <circle cx="17" cy="12" r="1.8" />
        <path d="M8.8 12h1.4M13.8 12h1.4" />
      </>
    ),
  },
  {
    href: "#metrics",
    label: "Metrics",
    icon: (
      <>
        <path d="M5 18h14" />
        <path d="M7 18v-5M12 18v-8M17 18v-11" />
      </>
    ),
  },
  {
    href: "#apply",
    label: "Apply",
    icon: (
      <>
        <path d="M12 4v16" />
        <path d="M4 12h16" />
      </>
    ),
  },
] as const;

export function BottomDock() {
  const [activeHref, setActiveHref] = useState<string>("#industries");
  const [isAtTop, setIsAtTop] = useState(true);
  const { scrollYProgress } = useScroll();
  const liftY = useTransform(scrollYProgress, [0, 1], [0, -8]);
  const progress = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 26,
    mass: 0.2,
  });

  const sectionIds = useMemo(() => items.map((item) => item.href.replace("#", "")), []);

  const updateActiveSection = useCallback(() => {
    const marker = window.scrollY + window.innerHeight * 0.38;
    let current = sectionIds[0];

    for (const id of sectionIds) {
      const section = document.getElementById(id);
      if (!section) continue;
      if (section.offsetTop <= marker) {
        current = id;
      }
    }

    setActiveHref(`#${current}`);
  }, [sectionIds]);

  useEffect(() => {
    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [updateActiveSection]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setIsAtTop(value < 0.03);
  });

  const handleDockNavigation = useCallback((href: string) => {
    const sectionId = href.replace("#", "");
    const target = document.getElementById(sectionId);
    if (!target) return;

    target.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveHref(href);
  }, []);

  return (
    <motion.div
      initial={{ y: 36, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 0.8, 0.3, 1] }}
      style={{ y: liftY }}
      className="fixed bottom-4 left-1/2 z-50 w-[min(94vw,700px)] -translate-x-1/2"
    >
      <motion.div
        animate={{ scale: isAtTop ? 0.97 : 1, opacity: isAtTop ? 0.92 : 1 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="flex items-center gap-2 rounded-2xl border p-2 text-paper shadow-[0_14px_36px_rgba(0,0,0,0.34)]"
        style={{ backgroundColor: "#000", borderColor: "#000" }}
      >
        <Link
          href="#top"
          className="flex h-12 min-w-[148px] items-center justify-center rounded-xl bg-paper px-4 text-center font-display text-lg font-semibold tracking-tight text-charcoal transition-transform hover:-translate-y-0.5"
          aria-label="Back to top"
          onClick={(event) => {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Best Noornova
        </Link>
        <div className="grid flex-1 grid-cols-5 gap-2">
          {items.map((item) => {
            const isActive = activeHref === item.href;

            return (
              <motion.div
                key={item.href}
                className={cn(
                  "relative overflow-hidden rounded-xl border bg-black px-2 py-3 text-center font-mono text-[11px] uppercase tracking-[0.12em] transition-colors",
                  isActive ? "border-white text-white" : "border-[#2b2b2b] text-white hover:border-[#595959] hover:text-white",
                )}
                whileHover={{ y: -2, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 500, damping: 32 }}
              >
                <Link
                  href={item.href}
                  onClick={(event) => {
                    event.preventDefault();
                    handleDockNavigation(item.href);
                  }}
                  className="absolute inset-0 z-20"
                  aria-label={item.label}
                />
                {isActive ? (
                  <motion.span
                    layoutId="dock-active-pill"
                    transition={{ type: "spring", stiffness: 500, damping: 38 }}
                    className="absolute inset-0 rounded-[10px] bg-[#171717]"
                    aria-hidden="true"
                  />
                ) : null}
                <span className="relative z-10 flex items-center justify-center gap-1.5">
                  <span className="relative h-3.5 w-3.5">
                    <AnimatePresence mode="wait">
                      {isActive ? (
                        <motion.svg
                          key="active"
                          viewBox="0 0 24 24"
                          className="absolute inset-0 h-3.5 w-3.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ opacity: 0, rotate: -16, scale: 0.74 }}
                          animate={{ opacity: 1, rotate: 0, scale: 1 }}
                          exit={{ opacity: 0, rotate: 16, scale: 0.74 }}
                          transition={{ duration: 0.22, ease: "easeOut" }}
                        >
                          {item.icon}
                        </motion.svg>
                      ) : (
                        <motion.svg
                          key="idle"
                          viewBox="0 0 24 24"
                          className="absolute inset-0 h-3.5 w-3.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.55"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ opacity: 0, scale: 1.28 }}
                          animate={{ opacity: 0.85, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.78 }}
                          transition={{ duration: 0.18, ease: "easeOut" }}
                        >
                          <circle cx="12" cy="12" r="3.1" />
                          <path d="M12 4.8v2.1M12 17.1v2.1M4.8 12h2.1M17.1 12h2.1" />
                        </motion.svg>
                      )}
                    </AnimatePresence>
                  </span>
                  {item.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
      <div className="pointer-events-none mt-2 h-1.5 overflow-hidden rounded-full bg-black">
        <motion.div
          className="h-full origin-left rounded-full bg-white"
          style={{ scaleX: progress }}
        />
      </div>
    </motion.div>
  );
}
