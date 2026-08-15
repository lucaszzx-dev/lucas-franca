"use client";

import { useLayoutEffect, type RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function motionValue(name: string, fallback: number) {
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
  return value.endsWith("ms") ? Number.parseFloat(value) / 1000 : fallback;
}

export function useMotion(
  scope: RefObject<HTMLElement | null>,
  options: { hero?: boolean } = {},
) {
  useLayoutEffect(() => {
    const node = scope.current;
    if (!node) return;
    const context = gsap.context(() => {
      const duration = motionValue("--duration-slow", 0.5);
      const media = gsap.matchMedia();
      media.add("(prefers-reduced-motion: no-preference)", () => {
        if (options.hero) {
          const intro = gsap.utils.toArray<HTMLElement>("[data-hero-intro]", node);
          const headline = gsap.utils.toArray<HTMLElement>(
            "[data-hero-headline]",
            node,
          );
          const cta = gsap.utils.toArray<HTMLElement>("[data-hero-cta]", node);
          const timeline = gsap.timeline();
          timeline
            .from(intro, {
              y: 14,
              autoAlpha: 0,
              duration,
              ease: "power3.out",
              stagger: 0.08,
            })
            .from(
              headline,
              { y: 26, autoAlpha: 0, duration, ease: "power3.out", stagger: 0.08 },
              "-=0.2",
            )
            .from(cta, { y: 12, autoAlpha: 0, duration, ease: "power3.out" }, "-=0.18");
          return;
        }
        const titles = gsap.utils.toArray<HTMLElement>("[data-text-reveal]", node);
        const reveals = gsap.utils.toArray<HTMLElement>("[data-reveal]", node);
        {
          gsap.from(reveals, {
            y: 20,
            autoAlpha: 0,
            duration,
            ease: "power3.out",
            stagger: 0.08,
            scrollTrigger: { trigger: node, start: "top 82%", once: true },
          });
        }
        gsap.from(titles, {
          yPercent: 28,
          autoAlpha: 0,
          duration,
          ease: "power3.out",
          scrollTrigger: { trigger: node, start: "top 82%", once: true },
        });
      });
      return () => media.revert();
    }, node);
    return () => context.revert();
  }, [scope, options.hero]);
}
