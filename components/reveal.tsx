"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  variant?: "text" | "image" | "card" | "section" | "timeline";
  staggerChildren?: number;
  className?: string;
};

let gsapRegistered = false;
const MOTION_INTENSITY: "quieter" | "stronger" = "quieter";

const revealIntensity = {
  quieter: {
    mobile: {
      textY: 14,
      cardY: 18,
      imageY: 20,
      sectionY: 20,
      timelineX: 12,
      durationBase: 0.72,
      imageDuration: 0.82,
      sectionDuration: 0.82,
      staggerDuration: 0.62,
      staggerCap: 0.07,
      start: "top 92%",
      ease: "power2.out",
    },
    desktop: {
      textY: 24,
      cardY: 30,
      imageY: 34,
      sectionY: 36,
      timelineX: 18,
      durationBase: 0.88,
      imageDuration: 0.98,
      sectionDuration: 0.96,
      staggerDuration: 0.78,
      staggerCap: 0.09,
      start: "top 88%",
      ease: "power2.out",
    },
  },
  stronger: {
    mobile: {
      textY: 22,
      cardY: 26,
      imageY: 28,
      sectionY: 30,
      timelineX: 16,
      durationBase: 0.9,
      imageDuration: 1,
      sectionDuration: 0.98,
      staggerDuration: 0.82,
      staggerCap: 0.1,
      start: "top 90%",
      ease: "power3.out",
    },
    desktop: {
      textY: 40,
      cardY: 50,
      imageY: 54,
      sectionY: 58,
      timelineX: 30,
      durationBase: 1.12,
      imageDuration: 1.24,
      sectionDuration: 1.18,
      staggerDuration: 0.98,
      staggerCap: 0.14,
      start: "top 84%",
      ease: "power3.out",
    },
  },
} as const;

export function Reveal({ children, className, delay = 0, variant = "text", staggerChildren = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    if (!gsapRegistered) {
      gsap.registerPlugin(ScrollTrigger);
      gsapRegistered = true;
    }

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    const motion = isMobile
      ? revealIntensity[MOTION_INTENSITY].mobile
      : revealIntensity[MOTION_INTENSITY].desktop;

    const el = ref.current;
    const journeyRoot = el.closest("[data-journey]");
    if (journeyRoot && !el.hasAttribute("data-reveal-force")) {
      return;
    }

    const config = {
      text: {
        from: {
          autoAlpha: 0,
          y: motion.textY,
          clipPath: isMobile ? "inset(0 0 100% 0 round 6px)" : "inset(0 0 100% 0 round 8px)",
        },
        to: { autoAlpha: 1, y: 0, duration: motion.durationBase, ease: motion.ease },
      },
      image: {
        from: { autoAlpha: 0, y: motion.imageY, clipPath: isMobile ? "inset(0 0 10% 0 round 14px)" : "inset(0 0 16% 0 round 14px)" },
        to: {
          autoAlpha: 1,
          y: 0,
          clipPath: "inset(0 0 0% 0 round 14px)",
          duration: motion.imageDuration,
          ease: motion.ease,
        },
      },
      card: {
        from: {
          autoAlpha: 0,
          y: motion.cardY,
          scale: isMobile ? 0.992 : 0.986,
          clipPath: isMobile ? "inset(0 0 8% 0 round 14px)" : "inset(0 0 12% 0 round 14px)",
        },
        to: { autoAlpha: 1, y: 0, scale: 1, duration: motion.durationBase, ease: motion.ease },
      },
      section: {
        from: {
          autoAlpha: 0,
          x: isMobile ? 10 : 16,
          y: motion.sectionY,
          clipPath: isMobile ? "inset(0 0 14% 0 round 10px)" : "inset(0 0 18% 0 round 10px)",
        },
        to: { autoAlpha: 1, x: 0, y: 0, duration: motion.sectionDuration, ease: motion.ease },
      },
      timeline: {
        from: {
          autoAlpha: 0,
          x: motion.timelineX,
          clipPath: isMobile ? "inset(0 0 12% 0 round 10px)" : "inset(0 0 18% 0 round 10px)",
        },
        to: { autoAlpha: 1, x: 0, duration: motion.durationBase, ease: motion.ease },
      },
    }[variant];

    const ctx = gsap.context(() => {
      if (staggerChildren > 0) {
        gsap.fromTo(
          el.children,
          {
            autoAlpha: 0,
            y: isMobile ? 16 : 28,
            clipPath: isMobile ? "inset(0 0 10% 0 round 10px)" : "inset(0 0 14% 0 round 10px)",
          },
          {
            autoAlpha: 1,
            y: 0,
            clipPath: "inset(0 0 0% 0 round 10px)",
            duration: motion.staggerDuration,
            ease: motion.ease,
            stagger: Math.min(staggerChildren, motion.staggerCap),
            delay,
            scrollTrigger: {
              trigger: el,
              start: motion.start,
              once: true,
            },
          },
        );
        return;
      }

      gsap.fromTo(el, config.from, {
        ...config.to,
        clipPath: "inset(0 0 0% 0 round 14px)",
        delay,
        scrollTrigger: {
          trigger: el,
          start: motion.start,
          once: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, [delay, staggerChildren, variant]);

  return <div ref={ref} className={cn(className)}>{children}</div>;
}
