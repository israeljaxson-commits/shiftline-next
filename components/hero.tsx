"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

const showcases = [
  {
    title: "Courier routes, city pace.",
    partner: "Delivery Operations",
    image: "https://images.pexels.com/photos/7843932/pexels-photo-7843932.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1800&q=82",
    alt: "Documentary-style courier handoff on an active city route",
  },
  {
    title: "Warehouse shifts, always covered.",
    partner: "Fulfillment Teams",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1800&q=82",
    alt: "Authentic warehouse crew moving freight in a real fulfillment floor",
  },
] as const;

export function Hero() {
  return (
    <section id="top" data-section="true" data-journey="hero" className="section-shell bg-paper px-6 pb-20 pt-30 lg:px-10 lg:pb-28 lg:pt-36">
      <div className="mx-auto max-w-[1400px]">
        <Reveal variant="text">
          <p className="hero-kicker mb-5 font-mono text-[10.5px] font-semibold uppercase tracking-[0.2em] text-charcoal/55">Best Noornova • Workforce, on the move</p>
        </Reveal>

        <Reveal variant="section" delay={0.04}>
          <h1 className="hero-title max-w-5xl font-display text-[13vw] leading-[0.89] tracking-[-0.03em] text-charcoal sm:text-[11vw] lg:text-[6.5vw]">
            Recent shifts on the move.
          </h1>
        </Reveal>

        <div className="hero-cards mt-14 grid gap-6 lg:grid-cols-2">
          {showcases.map((item, index) => (
            <Reveal
              key={item.title}
              variant="image"
              delay={0.12 + index * 0.08}
              className="group luxury-panel overflow-hidden rounded-[24px]"
            >
              <div data-parallax="soft" data-cursor-reactive="true" className="cursor-reactive-frame relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="cursor-reactive-media object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  priority={index === 0}
                />
                <span className="cursor-reactive-glow" aria-hidden="true" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/72 via-charcoal/24 to-charcoal/6" />
                <div className="absolute left-5 top-5 rounded-full border border-white/28 bg-white/18 px-3.5 py-1 font-mono text-[9.5px] font-semibold uppercase tracking-[0.17em] text-white backdrop-blur-sm">
                  Live Route
                </div>
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-5 rounded-2xl border border-white/25 bg-white/88 p-4 shadow-[0_22px_46px_rgba(0,0,0,0.24)] backdrop-blur-md lg:p-5">
                  <div>
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-charcoal/66">Workforce</p>
                    <p className="mt-2 max-w-[18ch] font-display text-[2rem] font-semibold leading-[1] tracking-[-0.01em] text-charcoal lg:text-[2.2rem]">{item.title}</p>
                  </div>
                  <span className="rounded-full border border-charcoal/20 bg-white px-3.5 py-1.5 font-mono text-[9.8px] font-semibold uppercase tracking-[0.14em] text-charcoal shadow-[0_8px_18px_rgba(0,0,0,0.12)]">
                    {item.partner}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal variant="text" delay={0.18} className="hero-meta mt-10 flex flex-wrap items-center gap-x-10 gap-y-3 text-[0.98rem] text-charcoal/74">
          <p className="max-w-[42ch]">Recruitment and employee leasing for delivery, warehouse, and construction teams.</p>
          <Link href="#apply" className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-charcoal transition-opacity hover:opacity-70">
            View Open Roles
            <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
