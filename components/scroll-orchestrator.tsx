"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;
const MOTION_INTENSITY: "quieter" | "stronger" = "stronger";

const orchestratorIntensity = {
  quieter: {
    mobile: {
      parallaxRange: 1.3,
      scrubStrength: 0.35,
      sectionLift: 8,
      sectionDuration: 0.62,
      timelineOffset: 8,
      timelineDuration: 0.56,
      timelineStagger: 0.05,
      sectionStart: "top 93%",
      timelineStart: "top 90%",
      timelineScrub: 0.42,
    },
    desktop: {
      parallaxRange: 3.2,
      scrubStrength: 0.72,
      sectionLift: 14,
      sectionDuration: 0.8,
      timelineOffset: 14,
      timelineDuration: 0.68,
      timelineStagger: 0.08,
      sectionStart: "top 89%",
      timelineStart: "top 82%",
      timelineScrub: 0.72,
    },
  },
  stronger: {
    mobile: {
      parallaxRange: 2.6,
      scrubStrength: 0.58,
      sectionLift: 16,
      sectionDuration: 0.84,
      timelineOffset: 13,
      timelineDuration: 0.72,
      timelineStagger: 0.08,
      sectionStart: "top 91%",
      timelineStart: "top 88%",
      timelineScrub: 0.58,
    },
    desktop: {
      parallaxRange: 7.8,
      scrubStrength: 1.35,
      sectionLift: 28,
      sectionDuration: 1.06,
      timelineOffset: 26,
      timelineDuration: 0.9,
      timelineStagger: 0.14,
      sectionStart: "top 85%",
      timelineStart: "top 77%",
      timelineScrub: 1.05,
    },
  },
} as const;

export function ScrollOrchestrator() {
  useEffect(() => {
    if (!registered) {
      gsap.registerPlugin(ScrollTrigger);
      registered = true;
    }

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const profile = isMobile
      ? orchestratorIntensity[MOTION_INTENSITY].mobile
      : orchestratorIntensity[MOTION_INTENSITY].desktop;

    const clipSoft = isMobile ? "inset(0 0 14% 0 round 10px)" : "inset(0 0 18% 0 round 10px)";
    const clipHard = isMobile ? "inset(0 0 100% 0 round 8px)" : "inset(0 0 100% 0 round 10px)";
    const detach: Array<() => void> = [];

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-parallax='soft']").forEach((wrap) => {
        const target = wrap.querySelector("img") ?? wrap;
        gsap.fromTo(
          target,
          { yPercent: -profile.parallaxRange, scale: isMobile ? 1.01 : 1.04 },
          {
            yPercent: profile.parallaxRange,
            scale: isMobile ? 1.003 : 1.015,
            ease: "none",
            scrollTrigger: {
              trigger: wrap,
              start: "top bottom",
              end: "bottom top",
              scrub: profile.scrubStrength,
            },
          },
        );
      });

      if (!isMobile) {
        gsap.utils.toArray<HTMLElement>("[data-cursor-reactive='true']").forEach((wrap) => {
          const media = wrap.querySelector<HTMLElement>("img");
          if (!media) return;

          const glow = wrap.querySelector<HTMLElement>(".cursor-reactive-glow");
          const moveX = gsap.quickTo(media, "x", { duration: 0.45, ease: "power3.out" });
          const moveY = gsap.quickTo(media, "y", { duration: 0.45, ease: "power3.out" });
          const scale = gsap.quickTo(media, "scale", { duration: 0.5, ease: "power2.out" });
          const rotX = gsap.quickTo(wrap, "rotationX", { duration: 0.55, ease: "power3.out" });
          const rotY = gsap.quickTo(wrap, "rotationY", { duration: 0.55, ease: "power3.out" });
          const glowX = glow ? gsap.quickTo(glow, "x", { duration: 0.35, ease: "power3.out" }) : null;
          const glowY = glow ? gsap.quickTo(glow, "y", { duration: 0.35, ease: "power3.out" }) : null;

          const onMove = (event: MouseEvent) => {
            const rect = wrap.getBoundingClientRect();
            const px = (event.clientX - rect.left) / rect.width;
            const py = (event.clientY - rect.top) / rect.height;
            const nx = px * 2 - 1;
            const ny = py * 2 - 1;

            moveX(nx * 14);
            moveY(ny * 14);
            scale(1.055);
            rotX(-ny * 3.2);
            rotY(nx * 3.2);

            if (glowX && glowY) {
              glowX(nx * 38);
              glowY(ny * 38);
            }
          };

          const onLeave = () => {
            moveX(0);
            moveY(0);
            scale(1);
            rotX(0);
            rotY(0);
            if (glowX && glowY) {
              glowX(0);
              glowY(0);
            }
          };

          wrap.addEventListener("mousemove", onMove);
          wrap.addEventListener("mouseleave", onLeave);
          detach.push(() => {
            wrap.removeEventListener("mousemove", onMove);
            wrap.removeEventListener("mouseleave", onLeave);
          });
        });
      }

      const about = document.querySelector<HTMLElement>("#about");
      if (about) {
        const aboutTl = gsap.timeline({
          scrollTrigger: {
            trigger: about,
            start: profile.sectionStart,
            once: true,
          },
        });
        aboutTl
          .fromTo(about.querySelectorAll(".about-head"), { autoAlpha: 0, x: -18, clipPath: clipSoft }, { autoAlpha: 1, x: 0, clipPath: "inset(0 0 0% 0 round 10px)", duration: profile.sectionDuration, ease: "power2.out" })
          .fromTo(about.querySelectorAll(".about-copy"), { autoAlpha: 0, x: 18, clipPath: clipSoft }, { autoAlpha: 1, x: 0, clipPath: "inset(0 0 0% 0 round 10px)", duration: profile.sectionDuration, ease: "power2.out" }, "-=0.48")
          .fromTo(
            about.querySelectorAll(".about-pillars > *"),
            { autoAlpha: 0, y: 22, scale: 0.992, clipPath: clipSoft },
            { autoAlpha: 1, y: 0, scale: 1, clipPath: "inset(0 0 0% 0 round 12px)", duration: profile.sectionDuration, stagger: 0.08, ease: "power3.out" },
            "-=0.34",
          )
          .fromTo(about.querySelectorAll(".about-image"), { autoAlpha: 0, y: 24, clipPath: isMobile ? "inset(0 0 18% 0 round 16px)" : "inset(0 0 24% 0 round 16px)" }, { autoAlpha: 1, y: 0, clipPath: "inset(0 0 0% 0 round 16px)", duration: profile.sectionDuration + 0.14, ease: "power3.out" }, "-=0.26");
      }

      const industries = document.querySelector<HTMLElement>("#industries");
      if (industries) {
        gsap.fromTo(
          industries.querySelectorAll(".industries-head"),
          { autoAlpha: 0, y: 16, clipPath: clipHard },
          {
            autoAlpha: 1,
            y: 0,
            clipPath: "inset(0 0 0% 0 round 10px)",
            duration: profile.sectionDuration,
            ease: "power3.out",
            scrollTrigger: { trigger: industries, start: profile.sectionStart, once: true },
          },
        );

        gsap.fromTo(
          industries.querySelectorAll(".industry-feature"),
          { autoAlpha: 0, y: 24, scale: 0.985, clipPath: isMobile ? "inset(0 0 16% 0 round 16px)" : "inset(0 0 24% 0 round 18px)" },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            clipPath: "inset(0 0 0% 0 round 18px)",
            duration: profile.sectionDuration + 0.16,
            ease: "power3.out",
            scrollTrigger: { trigger: industries, start: profile.sectionStart, once: true },
          },
        );

        industries.querySelectorAll<HTMLElement>(".industry-support").forEach((card, index) => {
          gsap.fromTo(
            card,
            { autoAlpha: 0, x: index % 2 === 0 ? -16 : 16, clipPath: clipSoft },
            {
              autoAlpha: 1,
              x: 0,
              clipPath: "inset(0 0 0% 0 round 14px)",
              duration: profile.sectionDuration,
              delay: index * 0.08,
              ease: "power2.out",
              scrollTrigger: { trigger: industries, start: profile.sectionStart, once: true },
            },
          );
        });
      }

      const services = document.querySelector<HTMLElement>("#services");
      if (services) {
        services.querySelectorAll<HTMLElement>(".service-row").forEach((row, index) => {
          const direction = row.getAttribute("data-dir") === "left" ? -1 : 1;
          gsap.fromTo(
            row,
            { autoAlpha: 0, x: direction * (isMobile ? 12 : 22), clipPath: clipSoft },
            {
              autoAlpha: 1,
              x: 0,
              clipPath: "inset(0 0 0% 0 round 10px)",
              duration: profile.sectionDuration,
              delay: index * 0.04,
              ease: "power2.out",
              scrollTrigger: { trigger: row, start: profile.sectionStart, once: true },
            },
          );
        });
      }

      const timelineSection = document.querySelector<HTMLElement>("#how");
      if (timelineSection) {
        gsap.fromTo(
          timelineSection.querySelectorAll("h2"),
          { autoAlpha: 0, y: 18, clipPath: clipHard },
          {
            autoAlpha: 1,
            y: 0,
            clipPath: "inset(0 0 0% 0 round 10px)",
            duration: profile.sectionDuration,
            ease: "power3.out",
            scrollTrigger: { trigger: timelineSection, start: profile.sectionStart, once: true },
          },
        );
      }

      gsap.utils.toArray<HTMLElement>(".timeline-column").forEach((column) => {
        const items = column.querySelectorAll(".timeline-item");
        gsap.fromTo(
          items,
          { autoAlpha: 0, x: profile.timelineOffset },
          {
            autoAlpha: 1,
            x: 0,
            duration: profile.timelineDuration,
            stagger: profile.timelineStagger,
            ease: "power3.out",
            scrollTrigger: {
              trigger: column,
              start: profile.timelineStart,
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
                start: profile.timelineStart,
                end: isMobile ? "bottom 50%" : "bottom 45%",
                scrub: profile.timelineScrub,
              },
            },
          );
        }
      });
    });

      const why = document.querySelector<HTMLElement>("#why");
      if (why) {
        gsap.fromTo(
          why.querySelectorAll(".why-card"),
          { autoAlpha: 0, y: 18, scale: 0.987, rotate: (i) => (i % 2 === 0 ? -0.55 : 0.55), transformOrigin: "center bottom" },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            rotate: 0,
            duration: profile.sectionDuration,
            stagger: 0.07,
            ease: "power3.out",
            scrollTrigger: { trigger: why, start: profile.sectionStart, once: true },
          },
        );
      }

      const stats = document.querySelector<HTMLElement>("#metrics");
      if (stats) {
        gsap.fromTo(
          stats.querySelectorAll(".stat-block"),
          { autoAlpha: 0, scaleY: 0.86, y: 14, transformOrigin: "bottom center" },
          {
            autoAlpha: 1,
            scaleY: 1,
            y: 0,
            duration: profile.sectionDuration,
            stagger: 0.06,
            ease: "power2.out",
            scrollTrigger: { trigger: stats, start: profile.sectionStart, once: true },
          },
        );
      }

      const voices = document.querySelector<HTMLElement>("[data-journey='voices']");
      if (voices) {
        gsap.fromTo(
          voices.querySelectorAll(".testimonial-feature"),
          { autoAlpha: 0, clipPath: isMobile ? "inset(0 0 18% 0 round 12px)" : "inset(0 0 24% 0 round 12px)", y: 20 },
          {
            autoAlpha: 1,
            clipPath: "inset(0 0 0% 0 round 12px)",
            y: 0,
            duration: profile.sectionDuration + 0.08,
            ease: "power3.out",
            scrollTrigger: { trigger: voices, start: profile.sectionStart, once: true },
          },
        );
        gsap.fromTo(
          voices.querySelectorAll(".testimonial-card"),
          { autoAlpha: 0, y: 18, x: 12, clipPath: clipSoft },
          {
            autoAlpha: 1,
            y: 0,
            x: 0,
            clipPath: "inset(0 0 0% 0 round 12px)",
            duration: profile.sectionDuration,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: { trigger: voices, start: profile.sectionStart, once: true },
          },
        );
      }

      const apply = document.querySelector<HTMLElement>("#apply");
      if (apply) {
        gsap.fromTo(
          apply.querySelectorAll(".apply-copy"),
          { autoAlpha: 0, x: -16, clipPath: clipSoft },
          {
            autoAlpha: 1,
            x: 0,
            clipPath: "inset(0 0 0% 0 round 12px)",
            duration: profile.sectionDuration,
            ease: "power2.out",
            scrollTrigger: { trigger: apply, start: profile.sectionStart, once: true },
          },
        );
        gsap.fromTo(
          apply.querySelectorAll(".apply-form"),
          { autoAlpha: 0, x: 20, scale: 0.989, clipPath: isMobile ? "inset(0 0 14% 0 round 14px)" : "inset(0 0 18% 0 round 14px)" },
          {
            autoAlpha: 1,
            x: 0,
            scale: 1,
            clipPath: "inset(0 0 0% 0 round 14px)",
            duration: profile.sectionDuration + 0.12,
            ease: "power3.out",
            scrollTrigger: { trigger: apply, start: profile.sectionStart, once: true },
          },
        );
      }

      const outro = document.querySelector<HTMLElement>("#contact");
      if (outro) {
        gsap.fromTo(
          outro.querySelectorAll(".outro-brand"),
          { autoAlpha: 0, y: 18, clipPath: clipHard },
          {
            autoAlpha: 1,
            y: 0,
            clipPath: "inset(0 0 0% 0 round 12px)",
            duration: profile.sectionDuration,
            ease: "power2.out",
            scrollTrigger: { trigger: outro, start: profile.sectionStart, once: true },
          },
        );
        gsap.fromTo(
          outro.querySelectorAll(".outro-links > *"),
          { autoAlpha: 0, y: 12, clipPath: clipSoft },
          {
            autoAlpha: 1,
            y: 0,
            clipPath: "inset(0 0 0% 0 round 10px)",
            duration: profile.sectionDuration,
            stagger: 0.07,
            ease: "power2.out",
            scrollTrigger: { trigger: outro, start: profile.sectionStart, once: true },
          },
        );
      }

    return () => {
      detach.forEach((fn) => fn());
      ctx.revert();
    };
  }, []);

  return null;
}
