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
      ? {
          textY: 18,
          cardY: 22,
          imageY: 24,
          sectionY: 24,
          timelineX: 14,
          durationBase: 0.8,
          imageDuration: 0.9,
          sectionDuration: 0.9,
          staggerDuration: 0.7,
          staggerCap: 0.08,
          start: "top 91%",
          ease: "power2.out",
        }
      : {
          textY: 30,
          cardY: 38,
          imageY: 40,
          sectionY: 42,
          timelineX: 24,
          durationBase: 0.98,
          imageDuration: 1.1,
          sectionDuration: 1.06,
          staggerDuration: 0.86,
          staggerCap: 0.1,
          start: "top 86%",
          ease: "power3.out",
        };

    const el = ref.current;
    const config = {
      text: {
        from: { autoAlpha: 0, y: motion.textY },
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
        from: { autoAlpha: 0, y: motion.cardY, scale: isMobile ? 0.992 : 0.986 },
        to: { autoAlpha: 1, y: 0, scale: 1, duration: motion.durationBase, ease: motion.ease },
      },
      section: {
        from: { autoAlpha: 0, y: motion.sectionY },
        to: { autoAlpha: 1, y: 0, duration: motion.sectionDuration, ease: motion.ease },
      },
      timeline: {
        from: { autoAlpha: 0, x: motion.timelineX },
        to: { autoAlpha: 1, x: 0, duration: motion.durationBase, ease: motion.ease },
      },
    }[variant];

    const ctx = gsap.context(() => {
      if (staggerChildren > 0) {
        gsap.fromTo(
          el.children,
          { autoAlpha: 0, y: isMobile ? 16 : 28 },
          {
            autoAlpha: 1,
            y: 0,
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
