"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
  lift?: boolean;
};

export function Card({ lift = true, className, children }: CardProps) {
  return (
    <motion.div
      className={cn(
        "overflow-hidden rounded-[1.55rem] border border-line/80 bg-paper shadow-[0_24px_56px_-28px_rgba(12,14,10,0.28)]",
        lift && "transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_34px_82px_-30px_rgba(12,14,10,0.42)]",
        className,
      )}
      whileHover={lift ? { y: -6 } : undefined}
      transition={{ duration: 0.45, ease: [0.16, 0.8, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
