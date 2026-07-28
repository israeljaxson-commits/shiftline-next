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
        "overflow-hidden rounded-[1.5rem] border border-line/80 bg-paper shadow-[0_18px_45px_rgba(12,14,10,0.06)]",
        lift && "transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(12,14,10,0.12)]",
        className,
      )}
      whileHover={lift ? { y: -6 } : undefined}
      transition={{ duration: 0.45, ease: [0.16, 0.8, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
