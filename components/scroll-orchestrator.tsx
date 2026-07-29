"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function ScrollOrchestrator() {
  useEffect(() => {
    if (!registered) {
      gsap.registerPlugin(ScrollTrigger);
      registered = true;
    }

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const parallaxRange = isMobile ? 1.8 : 4.8;
    const scrubStrength = isMobile ? 0.45 : 0.9;
    const sectionLift = isMobile ? 10 : 18;
    const sectionDuration = isMobile ? 0.72 : 0.9;
    const timelineOffset = isMobile ? 10 : 18;
    const timelineDuration = isMobile ? 0.62 : 0.76;
    const timelineStagger = isMobile ? 0.06 : 0.1;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-parallax='soft']").forEach((wrap) => {
        const target = wrap.querySelector("img") ?? wrap;
        gsap.fromTo(
          target,
          { yPercent: -parallaxRange, scale: isMobile ? 1.01 : 1.04 },
          {
            yPercent: parallaxRange,
            scale: isMobile ? 1.003 : 1.015,
            ease: "none",
            scrollTrigger: {
              trigger: wrap,
              start: "top bottom",
              end: "bottom top",
              scrub: scrubStrength,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-section='true']").forEach((section, index) => {
        if (index === 0) return;
        gsap.fromTo(
          section,
          { autoAlpha: 0.9, y: sectionLift },
          {
            autoAlpha: 1,
            y: 0,
            duration: sectionDuration,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: isMobile ? "top 92%" : "top 87%",
              once: true,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>(".timeline-column").forEach((column) => {
        const items = column.querySelectorAll(".timeline-item");
        gsap.fromTo(
          items,
          { autoAlpha: 0, x: timelineOffset },
          {
            autoAlpha: 1,
            x: 0,
            duration: timelineDuration,
            stagger: timelineStagger,
            ease: "power3.out",
            scrollTrigger: {
              trigger: column,
              start: isMobile ? "top 89%" : "top 80%",
              once: true,
            },
          },
        );

        const line = column.querySelector(".timeline-line");
        if (line) {
          gsap.fromTo(
            line,
            { scaleY: 0, transformOrigin: "top center" },
            {
              scaleY: 1,
              ease: "none",
              scrollTrigger: {
                trigger: column,
                start: isMobile ? "top 89%" : "top 80%",
                end: isMobile ? "bottom 50%" : "bottom 45%",
                scrub: isMobile ? 0.5 : 0.85,
              },
            },
          );
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
