"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Reveal({ children, stagger = false }) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const targets = stagger ? Array.from(element.children) : [element];
    const context = gsap.context(() => {
      const animate = () => gsap.fromTo(targets, { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.55, stagger: stagger ? 0.07 : 0, ease: "power2.out" });
      if (!stagger) {
        animate();
        return undefined;
      }
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          animate();
          observer.disconnect();
        }
      }, { threshold: 0.12 });
      observer.observe(element);
      return () => observer.disconnect();
    }, element);
    return () => context.revert();
  }, [stagger]);

  return <div ref={elementRef}>{children}</div>;
}
