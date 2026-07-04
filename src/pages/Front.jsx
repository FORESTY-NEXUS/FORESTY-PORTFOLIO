"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Animatedglow from "../components/Animatedglow";
import Services from "./Services";
import Navbar from "../components/Navbar";
import MobileHeader from "../components/MobileHeader";

export default function Front() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const sceneProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.45,
  });

  const heroOpacity = useTransform(sceneProgress, [0, 0.15, 0.3], [1, 1, 0]);
  const heroScale = useTransform(sceneProgress, [0, 0.3], [1, 0.96]);

  const desktopTreeY = useTransform(
    sceneProgress,
    [0, 0.2, 0.55],
    [0, 120, 28],
  );
  const desktopTreeScale = useTransform(
    sceneProgress,
    [0, 0.25, 0.6],
    [1, 0.94, 0.97],
  );
  // 1. Extend the scale range to 0.72 to match the Y-axis so they finish together.
  // 2. Use useSpring to create that "premium" non-robotic smooth feel.

  const rawTreeY = useTransform(
    sceneProgress,
    [0, 0.18, 0.42, 0.72],
    [300, 600, 700, 800],
  );
  const mobileTreeY = useSpring(rawTreeY, {
    stiffness: 100,
    damping: 30,
    mass: 0.5,
  });

  const rawTreeScale = useTransform(
    sceneProgress,
    [0, 0.2, 0.72],
    [1.1, 1.03, 0.77],
  );
  const mobileTreeScale = useSpring(rawTreeScale, {
    stiffness: 100,
    damping: 30,
    mass: 0.5,
  });
  const treeOpacity = useTransform(sceneProgress, [0, 0.92, 1], [1, 1, 0.96]);

  return (
    <section
      id="home"
      ref={ref}
      // DESKTOP: 280vh for the scroll animation. MOBILE: height auto so it scrolls normally.
      className="relative bg-black h-auto lg:h-[280vh] lg:overflow-visible"
    >
      <MobileHeader />
      {/* Desktop Services scroll anchor */}
      <div
        id="services-anchor"
        className="absolute top-[150vh] h-screen w-0 pointer-events-none hidden lg:block"
      />

      {/* DESKTOP: Sticky container traps the screen. MOBILE: Normal relative container. */}
      <div className="w-full lg:sticky lg:top-0 lg:h-screen lg:overflow-hidden">
        {/* Flex-col on mobile stacks the sections. Block on desktop layers them. */}
        <div className="relative flex w-full flex-col lg:block lg:h-full lg:items-center lg:justify-center">
          <motion.img
            src="/maintree.png"
            alt="Foresty Tree"
            style={{
              y: mobileTreeY,
              scale: mobileTreeScale,
              opacity: treeOpacity,
            }}
            className="pointer-events-none relative left-1/2 -mt-16 md:-mt-20 z-[70] w-[120%] -translate-x-1/2 object-contain lg:hidden"
          />

          <div className="relative z-50">
            <Navbar />
          </div>

          {/* 1. HERO SECTION (Text & Tree) */}
          {/* MOBILE: Takes exactly 1 screen height. DESKTOP: Sits absolute behind Services. */}
          <div className="relative flex h-[110svh] w-full items-center justify-center overflow-hidden lg:absolute lg:inset-0 lg:h-full lg:w-full">
            <Animatedglow />

            <motion.h1
              style={{ opacity: heroOpacity, scale: heroScale }}
              className="absolute top-[18%] md:top-[25%] lg:top-[30%] xl:top-80 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 
              tracking-wider whitespace-nowrap px-4 text-center text-[17vw] font-black lg:tracking-[0.15em]
               text-white select-none sm:text-[18vw] md:text-[16vw] lg:text-[17vw]"
            >
              FORESTY
            </motion.h1>

            <motion.img
              src="/maintree.png"
              alt="Foresty Tree"
              style={{
                y: desktopTreeY,
                scale: desktopTreeScale,
                opacity: treeOpacity,
              }}
              className="pointer-events-none absolute -bottom-4 left-1/2 z-40 hidden  max-h-[85vh] w-[720px] -translate-x-1/2 object-contain lg:block"
            />

            {/* Hero Tagline & CTA Buttons */}
            <motion.div
              style={{ opacity: heroOpacity }}
              className="absolute top-[28%] left-0 z-[80] flex w-full flex-col items-center justify-between gap-5 px-4
                         lg:bottom-[6%] lg:flex-row lg:items-end lg:px-12 xl:px-24"
            >
              <p
                className="max-w-[520px] text-center text-sm leading-relaxed tracking-wide text-white/85
                            mix-blend-overlay sm:text-base md:text-[15px] lg:text-left lg:text-base"
              >
                A creative studio engineering<br></br> high-performance web
                applications and<br></br> premium UI/UX experiences.
              </p>

              <div className="flex items-center gap-3 sm:gap-22 lg:flex-col lg:items-end lg:gap-4">
                <a
                  href="#projects"
                  className="rounded-xl bg-[#07893d] px-6 py-2.5 text-center text-sm font-semibold text-white
                             shadow-[0_0_20px_rgba(46,204,113,0.3)] transition-all duration-300
                             hover:bg-[#27ae60] hover:shadow-[0_0_28px_rgba(46,204,113,0.45)]
                             sm:px-7 sm:py-3 sm:text-[15px] lg:w-48 hover:scale-105 cursor-pointer"
                >
                  View Our Work
                </a>
                <a
                  onClick={() =>
                    window.open("https://wa.me/923195403032", "_blank")
                  }
                  className="rounded-xl border border-[#2ecc71] px-6 py-2.5 text-center text-sm font-semibold text-white
                             transition-all duration-300 hover:bg-[#2ecc71]/10
                             hover:shadow-[0_0_20px_rgba(46,204,113,0.15)]
                             sm:px-7 sm:py-3 sm:text-[15px] lg:w-48 cursor-pointer hover:scale-105"
                >
                  Start a Project
                </a>
              </div>
            </motion.div>
          </div>

          {/* 2. SERVICES SECTION */}
          {/* MOBILE: Flows naturally below the hero with a dark bg. DESKTOP: Sits absolute over the tree. */}
          {/* Note: I added a very dark green/black background to this mobile wrapper to completely block the tree from bleeding through. */}
          <div className="relative w-full bg-[#050A05] lg:absolute lg:inset-0 lg:z-20 lg:bg-transparent">
            <Services progress={sceneProgress} />
          </div>
        </div>
      </div>
    </section>
  );
}
