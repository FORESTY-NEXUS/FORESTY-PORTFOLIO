"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import Navbar from "./Navbar";

/**
 * Reusable FORESTY Coming Soon page component.
 *
 * Usage:
 *   <ComingSoon />
 *   <ComingSoon
 *     label="Services"
 *     title="Coming Soon"
 *     subtitle="We're building something worth the wait."
 *     description="This part of FORESTY is currently under development. Check back soon to explore what's coming next."
 *     backHref="/"
 *     backLabel="Back to Home"
 *     secondaryHref="/services"
 *     secondaryLabel="Explore Services"
 *   />
 */
export default function ComingSoon({
  label = null,
  title = "Coming Soon",
  subtitle = "We're building something worth the wait.",
  description = "This part of FORESTY is currently under development. Check back soon to explore what's coming next.",
  backHref = "/",
  backLabel = "Back to Home",
  secondaryHref = "/services",
  secondaryLabel = "Explore Services",
}) {
  const labelRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);
  const decorRef = useRef(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    let gsapModule;
    import("gsap").then(({ gsap }) => {
      gsapModule = gsap;
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (decorRef.current) {
        gsap.set(decorRef.current, { opacity: 0 });
      }

      const elements = [
        labelRef.current,
        titleRef.current,
        subtitleRef.current,
        descRef.current,
        ctaRef.current,
      ].filter(Boolean);

      gsap.set(elements, { opacity: 0, y: 28 });

      tl.to(elements, {
        opacity: 1,
        y: 0,
        duration: 0.65,
        stagger: 0.12,
      });

      if (decorRef.current) {
        tl.to(
          decorRef.current,
          { opacity: 1, duration: 1.2 },
          "-=0.4"
        );
      }
    });

    return () => {
      if (gsapModule) gsapModule.killTweensOf("*");
    };
  }, []);

  return (
    <>
      <header>
        <Navbar />
      </header>

      {/* Main page — full-screen dark canvas matching FORESTY's aesthetic */}
      <main
        className="relative min-h-screen overflow-hidden bg-[#050A05]"
        aria-labelledby="coming-soon-heading"
      >
        {/* Subtle radial background accent */}
        <div
          ref={decorRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 45% at 50% 40%, rgba(34,197,94,0.07) 0%, transparent 70%)",
          }}
        />

        {/* Horizontal rule decoration — top */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent"
        />

        {/* Content container */}
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pb-28 pt-32 text-center md:pb-20 lg:pb-16">
          {/* Category label */}
          {label && (
            <div ref={labelRef} className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-green-500/25 bg-green-500/8 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-green-400">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-green-400"
                />
                {label}
              </span>
            </div>
          )}

          {/* Primary heading */}
          <h1
            id="coming-soon-heading"
            ref={titleRef}
            className="mb-4 text-5xl font-black tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
          >
            {title}
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="mb-5 max-w-xl text-lg font-medium text-white/80 sm:text-xl md:text-2xl"
          >
            {subtitle}
          </p>

          {/* Supporting description */}
          <p
            ref={descRef}
            className="mb-10 max-w-md text-sm leading-relaxed text-zinc-400 sm:text-base"
          >
            {description}
          </p>

          {/* CTAs */}
          <div
            ref={ctaRef}
            className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
          >
            <Link
              href={backHref}
              className="w-full rounded-xl bg-green-600 px-8 py-3 text-center text-sm font-semibold text-white shadow-[0_0_20px_rgba(34,197,94,0.25)] transition-all duration-300 hover:scale-105 hover:bg-green-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.35)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-400 sm:w-auto sm:text-[15px]"
            >
              {backLabel}
            </Link>
            {secondaryHref && secondaryLabel && (
              <Link
                href={secondaryHref}
                className="w-full rounded-xl border border-green-500/40 px-8 py-3 text-center text-sm font-semibold text-white/80 transition-all duration-300 hover:scale-105 hover:border-green-500/70 hover:bg-green-500/8 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-400 sm:w-auto sm:text-[15px]"
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        </div>

        {/* Horizontal rule decoration — bottom */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent"
        />
      </main>

      {/* Footer matching services/software pages */}
      <footer className="border-t border-white/10 bg-[#050A05] px-5 py-8 pb-24 text-center text-sm text-zinc-500 md:pb-8">
        © {new Date().getFullYear()} FORESTY. Digital solutions that grow with
        you.
      </footer>
    </>
  );
}
