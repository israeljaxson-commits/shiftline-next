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
    <section id="top" data-section="true" data-journey="hero" className="bg-paper px-6 pb-16 pt-30 lg:px-10 lg:pt-36">
      <div className="mx-auto max-w-[1400px]">
        <Reveal variant="text">
          <p className="hero-kicker mb-4 font-mono text-[10.5px] font-semibold uppercase tracking-[0.2em] text-charcoal/55">Best Noornova • Workforce, on the move</p>
        </Reveal>

        <Reveal variant="section" delay={0.04}>
          <h1 className="hero-title max-w-4xl font-display text-[13vw] leading-[0.91] tracking-[-0.028em] text-charcoal sm:text-[11vw] lg:text-[6.4vw]">Recent shifts on the move.</h1>
        </Reveal>

        <div className="hero-cards mt-12 grid gap-5 lg:grid-cols-2">
          {showcases.map((item, index) => (
            <Reveal
              key={item.title}
              variant="image"
              delay={0.12 + index * 0.08}
              className="group overflow-hidden rounded-[20px] border border-charcoal/10 bg-white"
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
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/64 via-charcoal/26 to-charcoal/8" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-5 rounded-xl bg-white/90 p-4 shadow-[0_12px_30px_rgba(0,0,0,0.2)] backdrop-blur-sm">
                  <div>
                    <p className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.18em] text-charcoal/68">Workforce</p>
                    <p className="mt-2 max-w-[18ch] font-display text-[2rem] font-semibold leading-[1.02] text-charcoal lg:text-[2.15rem]">{item.title}</p>
                  </div>
                  <span className="rounded-full border border-charcoal/22 bg-white px-3.5 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-charcoal shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                    {item.partner}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal variant="text" delay={0.18} className="hero-meta mt-9 flex flex-wrap items-center gap-x-8 gap-y-3 text-[0.96rem] text-charcoal/72">
          <p>Recruitment and employee leasing for delivery, warehouse, and construction teams.</p>
          <Link href="#apply" className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-charcoal transition-opacity hover:opacity-70">
            View Open Roles
            <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
