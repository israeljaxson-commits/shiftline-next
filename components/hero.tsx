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

    const split = new SplitType(heading, { types: "lines,words" });

    gsap.set(section.querySelectorAll(".hero-kicker, .hero-meta"), { autoAlpha: 0, y: 16 });
    gsap.set(section.querySelectorAll(".hero-cards > *"), { autoAlpha: 0, y: 22, scale: 0.988 });
    gsap.set(section.querySelectorAll(".hero-depth-back, .hero-depth-front"), { autoAlpha: 0, scale: 1.08 });
    gsap.set(section.querySelectorAll(".hero-ambient-video"), { autoAlpha: 0, scale: 1.12 });
    gsap.set(split.words, { yPercent: 112, rotateX: -18, autoAlpha: 0, transformOrigin: "0% 100%" });

    const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
    intro
      .to(section.querySelectorAll(".hero-depth-back"), { autoAlpha: 0.42, scale: 1, duration: 1.5 })
      .to(section.querySelectorAll(".hero-ambient-video"), { autoAlpha: 0.24, scale: 1, duration: 1.7 }, "<")
      .to(section.querySelectorAll(".hero-depth-front"), { autoAlpha: 0.36, scale: 1, duration: 1.25 }, "<0.15")
      .to(split.words, { autoAlpha: 1, yPercent: 0, rotateX: 0, duration: 0.9, stagger: 0.06 }, "<0.2")
      .to(section.querySelectorAll(".hero-kicker"), { autoAlpha: 1, y: 0, duration: 0.75 }, "<0.1")
      .to(section.querySelectorAll(".hero-cards > *"), { autoAlpha: 1, y: 0, scale: 1, duration: 1.02, stagger: 0.1 }, "-=0.42")
      .to(section.querySelectorAll(".hero-meta"), { autoAlpha: 1, y: 0, duration: 0.68 }, "-=0.58");

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
    <section ref={sectionRef} id="top" data-section="true" data-journey="hero" className="section-shell relative overflow-hidden bg-paper px-6 pb-14 pt-24 sm:pb-18 sm:pt-28 lg:px-10 lg:pb-28 lg:pt-36">
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
          <h1 className="hero-title max-w-5xl font-display text-[13vw] leading-[0.9] tracking-[-0.026em] text-charcoal sm:text-[11vw] lg:text-[6.3vw]">
            Recent shifts on the move.
          </h1>
        </Reveal>

        <div className="hero-cards mt-11 grid gap-4 sm:mt-12 sm:gap-5 lg:mt-13 lg:gap-6 lg:grid-cols-2">
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
                  className="cursor-reactive-media docu-image object-cover object-[50%_44%] transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  priority={index === 0}
                />
                <span className="cursor-reactive-glow" aria-hidden="true" />
                <div className="docu-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/72 via-charcoal/24 to-charcoal/6" />
                <div className="absolute left-4 top-4 rounded-full border border-white/28 bg-white/18 px-3 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-sm sm:left-5 sm:top-5 sm:px-3.5 sm:text-[9.5px] sm:tracking-[0.17em]">
                  Live Route
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex flex-col items-start gap-3 rounded-2xl border border-white/25 bg-white/88 p-3.5 shadow-[0_22px_46px_rgba(0,0,0,0.24)] backdrop-blur-md sm:bottom-5 sm:left-5 sm:right-5 sm:gap-5 sm:p-4 lg:flex-row lg:items-end lg:justify-between lg:p-5">
                  <div>
                    <p className="font-mono text-[9.5px] font-semibold uppercase tracking-[0.14em] text-charcoal/66 sm:text-[10px] sm:tracking-[0.18em]">Workforce</p>
                    <p className="mt-1.5 max-w-[18ch] font-display text-[1.58rem] font-semibold leading-[1.02] tracking-[-0.01em] text-charcoal sm:mt-2 sm:text-[1.82rem] lg:text-[2.2rem]">{item.title}</p>
                  </div>
                  <span className="rounded-full border border-charcoal/20 bg-white px-3 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.12em] text-charcoal shadow-[0_8px_18px_rgba(0,0,0,0.12)] sm:px-3.5 sm:py-1.5 sm:text-[9.8px] sm:tracking-[0.14em]">
                    {item.partner}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal variant="text" delay={0.18} className="hero-meta mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-[0.94rem] text-charcoal/74 sm:mt-9 sm:gap-x-10 sm:text-[0.97rem]">
          <p className="max-w-[42ch]">Recruitment and employee leasing for delivery, warehouse, and construction teams.</p>
          <Link href="#contact" className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-charcoal transition-opacity hover:opacity-70">
            View Open Roles
            <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
