"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const showcases = [
  {
    title: "Courier routes, city pace.",
    partner: "Delivery Operations",
    image: "https://images.pexels.com/photos/7706451/pexels-photo-7706451.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&q=80",
    alt: "Delivery worker carrying a thermal bag on an urban street",
  },
  {
    title: "Warehouse shifts, always covered.",
    partner: "Fulfillment Teams",
    image: "https://images.unsplash.com/photo-1586528116493-a029325540fa?auto=format&fit=crop&w=1600&q=80",
    alt: "Warehouse workers moving stock in fulfillment center",
  },
] as const;

export function Hero() {
  return (
    <section id="top" className="bg-paper px-6 pb-12 pt-28 lg:px-10 lg:pt-32">
      <div className="mx-auto max-w-[1400px]">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 0.8, 0.3, 1] }}
          className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-charcoal/55"
        >
          Best Noornova • Workforce, on the move
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08, ease: [0.16, 0.8, 0.3, 1] }}
          className="max-w-3xl font-display text-[13vw] leading-[0.94] tracking-tight text-charcoal sm:text-[11vw] lg:text-[6.3vw]"
        >
          Recent shifts on the move.
        </motion.h1>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {showcases.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.16 + index * 0.09, ease: [0.16, 0.8, 0.3, 1] }}
              className="group overflow-hidden rounded-[20px] border border-charcoal/10 bg-white"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/78 via-charcoal/30 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-5">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">Workforce</p>
                    <p className="mt-2 max-w-[18ch] font-display text-3xl leading-[1.02] text-white">{item.title}</p>
                  </div>
                  <span className="rounded-full border border-white/35 bg-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-white/90">
                    {item.partner}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-charcoal/70">
          <p>Recruitment and employee leasing for delivery, warehouse, and construction teams.</p>
          <Link href="#apply" className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-charcoal transition-opacity hover:opacity-70">
            View Open Roles
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
