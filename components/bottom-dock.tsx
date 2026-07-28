"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const items = [
  { href: "#industries", label: "Industries" },
  { href: "#services", label: "Services" },
  { href: "#how", label: "Process" },
  { href: "#metrics", label: "Metrics" },
  { href: "#apply", label: "Apply" },
] as const;

export function BottomDock() {
  return (
    <motion.div
      initial={{ y: 36, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 0.8, 0.3, 1] }}
      className="fixed bottom-4 left-1/2 z-50 w-[min(92vw,640px)] -translate-x-1/2"
    >
      <div className="flex items-center gap-2 rounded-2xl border border-charcoal/35 bg-charcoal/90 p-2 text-paper shadow-[0_12px_32px_rgba(0,0,0,0.22)] backdrop-blur-xl">
        <Link
          href="#top"
          className="flex h-12 w-12 items-center justify-center rounded-xl bg-paper text-2xl font-bold text-charcoal transition-transform hover:-translate-y-0.5"
          aria-label="Back to top"
        >
          w.
        </Link>
        <div className="grid flex-1 grid-cols-3 gap-2 sm:grid-cols-5">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl border border-white/20 px-2 py-3 text-center font-mono text-[10px] uppercase tracking-wider text-paper/80 transition-colors hover:border-white/45 hover:text-paper"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
