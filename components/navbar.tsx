"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-transparent transition-all duration-300",
        scrolled ? "border-line bg-paper/90 backdrop-blur-xl" : "bg-paper/70",
      )}
    >
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 lg:px-10">
        <Link href="#top" className="flex items-center gap-2 font-display text-2xl tracking-tight transition-opacity hover:opacity-80">
          w.
        </Link>

        <nav className="hidden items-center gap-6 rounded-full border border-line bg-white/75 px-5 py-2 font-mono text-[10px] uppercase tracking-wider text-charcoal/75 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors duration-300 hover:text-charcoal">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button href="#apply" variant="secondary" size="sm" className="rounded-xl border-line bg-white hover:bg-charcoal hover:text-paper">
            Find work
          </Button>
          <Button href="#apply" size="sm" className="rounded-xl bg-charcoal text-paper hover:bg-black">
            Hire crew
          </Button>
        </div>

        <button
          type="button"
          className="flex flex-col gap-1.5 p-2 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="h-px w-6 bg-charcoal" />
          <span className="h-px w-6 bg-charcoal" />
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 0.8, 0.3, 1] }}
            className="border-t border-line bg-paper px-6 py-6 lg:hidden"
          >
            <nav className="flex flex-col gap-5 font-mono text-xs uppercase tracking-widest">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-6 flex gap-3">
              <Button href="#apply" variant="secondary" size="sm" className="flex-1 rounded-xl">
                Find Work
              </Button>
              <Button href="#apply" size="sm" className="flex-1 rounded-xl">
                Hire
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
