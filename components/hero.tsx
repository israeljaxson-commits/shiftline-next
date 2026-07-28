"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Clock } from "@/components/clock";
import { heroIndustries } from "@/lib/site";

const words = ["The", "people", "behind", "every", "shift."];

export function Hero() {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const item = {
    hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 110 },
    show: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.2, 0.9, 0.2, 1] } },
  };

  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pt-32">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.08, opacity: 0.9 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 0.8, 0.3, 1] }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.pexels.com/photos/9502199/pexels-photo-9502199.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1800&q=80"
            alt="A delivery rider on a bicycle in an urban street"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(46,204,129,0.2),transparent_30%),linear-gradient(90deg,rgba(12,14,10,0.95),rgba(12,14,10,0.55),rgba(12,14,10,0.2))]" />
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.16]">
          <svg viewBox="0 0 200 200" className="w-[130%] max-w-none" fill="none" aria-hidden="true">
            <path d="M10 150 C 60 40, 100 190, 190 30" stroke="#2ECC81" strokeWidth="0.6" strokeDasharray="1 3" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-20 lg:px-10 lg:pb-28">
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-bright" />
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/60">Recruitment & Employee Leasing</p>
          <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">
            Glovo & delivery riders
          </span>
          <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">
            Warehouse shifts
          </span>
          <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">
            Construction crews
          </span>
        </div>

        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-5xl font-display text-[13vw] leading-[0.95] tracking-tight text-white lg:text-[7vw] lg:leading-[0.92]"
        >
          <span className="block lg:hidden">
            {words.map((word, index) => (
              <motion.span key={word} variants={item} className={`inline-block ${index === 3 ? "italic" : ""} mr-[0.12em]`}>
                {word}
              </motion.span>
            ))}
          </span>
          <span className="hidden lg:block">
            <span className="block">
              <motion.span variants={item} className="mr-[0.12em] inline-block">
                The
              </motion.span>
              <motion.span variants={item} className="mr-[0.12em] inline-block">
                people
              </motion.span>
              <motion.span variants={item} className="mr-[0.12em] inline-block">
                behind
              </motion.span>
            </span>
            <span className="block">
              <motion.span variants={item} className="mr-[0.12em] inline-block italic">
                every
              </motion.span>
              <motion.span variants={item} className="inline-block">
                shift.
              </motion.span>
            </span>
          </span>
        </motion.h1>

        <div className="mt-10 grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 0.8, 0.3, 1] }}
            className="max-w-md text-balance text-lg leading-relaxed text-white/75"
          >
            From Glovo-style delivery riders to warehouse teams and construction crews, we recruit and place reliable people for the shifts that keep cities moving.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 0.8, 0.3, 1] }}
            className="flex flex-col gap-4 sm:flex-row lg:justify-end"
          >
            <Button href="#apply" size="lg">
              See available work →
            </Button>
            <Button href="#apply" variant="ghost" size="lg" className="border-white/30 bg-transparent text-white hover:border-white hover:bg-white hover:text-charcoal">
              Hire Workers →
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 font-mono text-[10px] uppercase tracking-widest text-white/50 lg:px-10">
          <span>Scroll</span>
          <span className="hidden sm:inline">{heroIndustries.join(" — ")}</span>
          <Clock />
        </div>
      </div>
    </section>
  );
}
