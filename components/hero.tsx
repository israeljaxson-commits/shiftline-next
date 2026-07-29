"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import SplitType from "split-type";
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
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const heading = section.querySelector<HTMLElement>(".hero-title");
    if (!heading) return;

    const split = new SplitType(heading, { types: "lines,words,chars" });

    gsap.set(section.querySelectorAll(".hero-kicker, .hero-meta"), { autoAlpha: 0, y: 16 });
    gsap.set(section.querySelectorAll(".hero-cards > *"), { autoAlpha: 0, y: 22, scale: 0.988 });
    gsap.set(section.querySelectorAll(".hero-depth-back, .hero-depth-front"), { autoAlpha: 0, scale: 1.08 });
    gsap.set(section.querySelectorAll(".hero-ambient-video"), { autoAlpha: 0, scale: 1.12 });
    gsap.set(split.chars, { yPercent: 110, rotateX: -35, autoAlpha: 0, transformOrigin: "0% 100%" });

    const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
    intro
      .to(section.querySelectorAll(".hero-depth-back"), { autoAlpha: 0.42, scale: 1, duration: 1.5 })
      .to(section.querySelectorAll(".hero-ambient-video"), { autoAlpha: 0.24, scale: 1, duration: 1.7 }, "<")
      .to(section.querySelectorAll(".hero-depth-front"), { autoAlpha: 0.36, scale: 1, duration: 1.25 }, "<0.15")
      .to(split.chars, { autoAlpha: 1, yPercent: 0, rotateX: 0, duration: 0.95, stagger: 0.014 }, "<0.2")
      .to(section.querySelectorAll(".hero-kicker"), { autoAlpha: 1, y: 0, duration: 0.75 }, "<0.1")
      .to(section.querySelectorAll(".hero-cards > *"), { autoAlpha: 1, y: 0, scale: 1, duration: 1.05, stagger: 0.12 }, "-=0.45")
      .to(section.querySelectorAll(".hero-meta"), { autoAlpha: 1, y: 0, duration: 0.72 }, "-=0.64");

    const backX = gsap.quickTo(section.querySelector(".hero-depth-back"), "x", { duration: 0.9, ease: "power3.out" });
    const backY = gsap.quickTo(section.querySelector(".hero-depth-back"), "y", { duration: 0.9, ease: "power3.out" });
    const frontX = gsap.quickTo(section.querySelector(".hero-depth-front"), "x", { duration: 0.7, ease: "power3.out" });
    const frontY = gsap.quickTo(section.querySelector(".hero-depth-front"), "y", { duration: 0.7, ease: "power3.out" });
    const videoX = gsap.quickTo(section.querySelector(".hero-ambient-video"), "x", { duration: 1, ease: "power2.out" });
    const videoY = gsap.quickTo(section.querySelector(".hero-ambient-video"), "y", { duration: 1, ease: "power2.out" });

    const onMove = (event: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const nx = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = ((event.clientY - rect.top) / rect.height) * 2 - 1;

      backX(nx * -14);
      backY(ny * -10);
      frontX(nx * 18);
      frontY(ny * 12);
      videoX(nx * 10);
      videoY(ny * 8);
    };

    const onLeave = () => {
      backX(0);
      backY(0);
      frontX(0);
      frontY(0);
      videoX(0);
      videoY(0);
    };

    section.addEventListener("mousemove", onMove);
    section.addEventListener("mouseleave", onLeave);

    return () => {
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseleave", onLeave);
      split.revert();
      intro.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} id="top" data-section="true" data-journey="hero" className="section-shell relative overflow-hidden bg-paper px-6 pb-20 pt-30 lg:px-10 lg:pb-28 lg:pt-36">
      <div className="hero-depth-back pointer-events-none absolute -left-14 -top-24 h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle,rgba(32,145,95,0.28),rgba(32,145,95,0)_68%)] blur-[8px]" aria-hidden="true" />
      <div className="hero-depth-front pointer-events-none absolute -bottom-28 -right-16 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(12,14,10,0.16),rgba(12,14,10,0)_70%)] blur-[10px]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <video
          className="hero-ambient-video h-full w-full object-cover motion-reduce:hidden"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="https://images.pexels.com/photos/7706451/pexels-photo-7706451.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1800&q=80"
        >
          <source src="https://videos.pexels.com/video-files/4246213/4246213-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(250,249,244,0.9),rgba(250,249,244,0.72)_42%,rgba(250,249,244,0.88))]" />
      </div>

      <div className="relative mx-auto max-w-[1400px]">
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
