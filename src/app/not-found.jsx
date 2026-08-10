"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";

export default function NotFound() {
  const codeRef = useRef(null);
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);
  const decorRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    import("gsap").then(({ gsap }) => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Set initial states
      gsap.set(
        [
          codeRef.current,
          headingRef.current,
          descRef.current,
          ctaRef.current,
        ].filter(Boolean),
        { opacity: 0, y: 32 }
      );

      if (lineRef.current) gsap.set(lineRef.current, { scaleX: 0, opacity: 0 });
      if (decorRef.current) gsap.set(decorRef.current, { opacity: 0 });

      // Sequenced reveal
      tl.to(codeRef.current, { opacity: 1, y: 0, duration: 0.7 })
        .to(lineRef.current, { scaleX: 1, opacity: 1, duration: 0.5 }, "-=0.2")
        .to(headingRef.current, { opacity: 1, y: 0, duration: 0.55 }, "-=0.15")
        .to(descRef.current, { opacity: 1, y: 0, duration: 0.5 }, "-=0.1")
        .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.5 }, "-=0.1")
        .to(decorRef.current, { opacity: 1, duration: 1.2 }, "-=0.6");
    });
  }, []);

  return (
    <>
      {/* Navbar — identical to all other FORESTY pages */}
      <header>
        <Navbar />
      </header>

      {/* Full-screen dark canvas */}
      <main
        className="relative min-h-screen overflow-hidden bg-[#050A05]"
        aria-labelledby="not-found-heading"
      >
        {/* Radial background accent — subtle green warmth */}
        <div
          ref={decorRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 50% at 50% 45%, rgba(34,197,94,0.06) 0%, transparent 68%)",
          }}
        />

        {/* Top border rule */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent"
        />

        {/* Central content */}
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pb-28 pt-20 text-center md:pb-20 lg:pb-8">
          {/* 404 code — large typographic anchor */}
          <p
            ref={codeRef}
            aria-hidden="true"
            className="mb-2 select-none font-black leading-none tracking-tighter text-white"
            style={{
              fontSize: "clamp(6rem, 22vw, 18rem)",
              opacity: 0,
              /* Subtle green tint at bottom of the number */
              WebkitTextFillColor: "transparent",
              WebkitBackgroundClip: "text",
              backgroundImage:
                "linear-gradient(160deg, #ffffff 30%, rgba(34,197,94,0.55) 100%)",
            }}
          >
            404
          </p>

          {/* Thin divider line between 404 and the heading */}
          <div
            ref={lineRef}
            aria-hidden="true"
            className="mb-7 h-px w-16 origin-left rounded-full bg-green-500/50"
            style={{ opacity: 0 }}
          />

          {/* Primary heading */}
          <h1
            id="not-found-heading"
            ref={headingRef}
            className="mb-4 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl"
          >
            Page not found
          </h1>

          {/* Supporting copy */}
          <p
            ref={descRef}
            className="mb-10 max-w-sm text-sm leading-relaxed text-zinc-400 sm:text-base md:max-w-md"
          >
            The page you&apos;re looking for doesn&apos;t exist or may have
            been moved.
          </p>

          {/* CTAs */}
          <div
            ref={ctaRef}
            className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
          >
            <Link
              href="/"
              className="w-full rounded-xl bg-green-600 px-8 py-3 text-center text-sm font-semibold text-white shadow-[0_0_20px_rgba(34,197,94,0.25)] transition-all duration-300 hover:scale-105 hover:bg-green-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.35)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-400 sm:w-auto sm:text-[15px]"
            >
              Back to Home
            </Link>

            <Link
              href="/services"
              className="w-full rounded-xl border border-green-500/40 px-8 py-3 text-center text-sm font-semibold text-white/80 transition-all duration-300 hover:scale-105 hover:border-green-500/70 hover:bg-green-500/8 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-400 sm:w-auto sm:text-[15px]"
            >
              Explore Services
            </Link>
          </div>

          {/* Small technical detail — error code label */}
          <p
            aria-hidden="true"
            className="mt-12 font-mono text-[11px] tracking-widest text-zinc-700 uppercase"
          >
            Error · HTTP 404 · Route not matched
          </p>
        </div>

        {/* Bottom border rule */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent"
        />
      </main>

      {/* Footer — matches services / software pages */}
      <footer className="border-t border-white/10 bg-[#050A05] px-5 py-8 pb-24 text-center text-sm text-zinc-500 md:pb-8">
        © {new Date().getFullYear()} FORESTY. Digital solutions that grow with
        you.
      </footer>
    </>
  );
}
