"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

// Adjust these exact values for each card index (0, 1, 2, 3, etc.)
const MANUAL_CARD_POSITIONS = [
  { x: -650, y: 70, z: -120, rotY: 18, scale: 0.85, zIndex: 10 },  // Card 0 (Far Left)
  { x: -440, y: 15, z: -20,  rotY: 10, scale: 0.92, zIndex: 20 },  // Card 1 (Mid Left)
  { x: -180,    y: -40,  z: 140,  rotY: 0,  scale: 1.00, zIndex: 50 },  // Card 2 (Center Featured)
  { x: 80,  y: 15, z: -120,  rotY: -10, scale: 0.92, zIndex: 20 }, // Card 3 (Mid Right)
  { x: 280,  y: 100, z: -120, rotY: -18, scale: 0.85, zIndex: 10 }, // Card 4 (Far Right)
];

export default function PerspectiveStage({ children }) {
  const containerRef = useRef(null);
  const elementsRef = useRef([]);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const element = containerRef.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const targets = elementsRef.current.filter(Boolean);
    if (!targets.length) return undefined;

    const context = gsap.context(() => {
      const animate = () => {
        if (isMobile) {
          gsap.fromTo(
            targets,
            { autoAlpha: 0, y: 30 },
            { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" }
          );
        } else {
          gsap.from(targets, {
            autoAlpha: 0,
            z: -300,
            scale: 0.8,
            duration: 1.1,
            stagger: 0.08,
            ease: "power3.out",
            clearProps: "all"
          });
        }
      };

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            animate();
            observer.disconnect();
          }
        },
        { threshold: 0.15 }
      );

      observer.observe(element);
      return () => observer.disconnect();
    }, element);

    return () => context.revert();
  }, [isMobile]);

  const childArray = Array.isArray(children) ? children : [children];

  return (
    <div
      ref={containerRef}
      className={`
        w-full
        flex overflow-x-auto snap-x snap-mandatory py-10 px-6 gap-6
        [-webkit-overflow-scrolling:touch] hide-scrollbar
        sm:block sm:overflow-visible sm:relative sm:min-h-[580px] sm:px-0 sm:py-0
      `}
      style={
        isMobile
          ? {}
          : {
              perspective: "1800px",
              perspectiveOrigin: "50% 50%",
              transformStyle: "preserve-3d",
            }
      }
    >
      {childArray.map((child, i) => {
        // Fallback calculation if you add more children than manual entries defined
        const pos = MANUAL_CARD_POSITIONS[i] || {
          x: (i - 2) * 200,
          y: 0,
          z: 0,
          rotY: 0,
          scale: 1,
          zIndex: 1,
        };

        const { x, y, z, rotY, scale, zIndex } = pos;

        return (
          <div
            key={i}
            ref={(el) => (elementsRef.current[i] = el)}
            style={{ zIndex }}
            className={`
              w-[85vw] max-w-[340px] shrink-0 snap-center
              sm:absolute sm:top-1/2 sm:left-1/2 sm:w-[310px] sm:h-[460px]
            `}
          >
            <div
              style={{
                transform: isMobile
                  ? "none"
                  : `translateX(-50%) translateY(-50%) translate3d(${x}px, ${y}px, ${z}px) rotateY(${rotY}deg) scale(${scale})`,
                transformStyle: "preserve-3d",
              }}
              className={`
                w-full h-full transition-all duration-500 rounded-2xl p-6 flex flex-col justify-between
                bg-gradient-to-b from-[#0e2115] via-[#09130c]/95 to-[#050906]
                border border-[#1b3d27]/70 hover:border-[#22c55e]/70 hover:shadow-[0_0_25px_rgba(34,197,94,0.15)]
                backdrop-blur-md shadow-2xl overflow-hidden
              `}
            >
              {child}
            </div>
          </div>
        );
      })}
    </div>
  );
}