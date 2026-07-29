"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

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
    <section id="top" data-section="true" className="bg-paper px-6 pb-16 pt-30 lg:px-10 lg:pt-36">
      <div className="mx-auto max-w-[1400px]">
        <Reveal variant="text">
          <p className="mb-4 font-mono text-[10.5px] font-semibold uppercase tracking-[0.2em] text-charcoal/55">Best Noornova • Workforce, on the move</p>
        </Reveal>

        <Reveal variant="section" delay={0.04}>
          <h1 className="max-w-4xl font-display text-[13vw] leading-[0.91] tracking-[-0.028em] text-charcoal sm:text-[11vw] lg:text-[6.4vw]">Recent shifts on the move.</h1>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {showcases.map((item, index) => (
            <Reveal
              key={item.title}
              variant="image"
              delay={0.12 + index * 0.08}
              className="group overflow-hidden rounded-[20px] border border-charcoal/10 bg-white"
            >
              <div data-parallax="soft" className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  priority={index === 0}
                />
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

        <Reveal variant="text" delay={0.18} className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-3 text-[0.96rem] text-charcoal/72">
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
