"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Animatedglow from "../components/Animatedglow";
import Services from "./Services";
import Navbar from "../components/Navbar";

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
  const mobileTreeY = useTransform(
    sceneProgress,
    [0, 0.18, 0.42, 0.72],
    [190, 600, 800, 1020],
  );
  const mobileTreeScale = useTransform(
    sceneProgress,
    [0, 0.2, 0.48],
    [1.1, 1.03, 0.98],
  );
  const treeOpacity = useTransform(sceneProgress, [0, 0.92, 1], [1, 1, 0.96]);

  return (
    <section
      id="home"
      ref={ref}
      // DESKTOP: 280vh for the scroll animation. MOBILE: height auto so it scrolls normally.
      className="relative bg-black h-auto lg:h-[280vh] lg:overflow-visible"
    >
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
            className="pointer-events-none relative left-1/2 top-0 z-[70] w-[120%] -translate-x-1/2 object-contain lg:hidden"
          />

          <div className="relative z-50">
            <Navbar />
          </div>

          {/* 1. HERO SECTION (Text & Tree) */}
          {/* MOBILE: Takes exactly 1 screen height. DESKTOP: Sits absolute behind Services. */}
          <div className="relative flex h-[100svh] w-full items-center justify-center overflow-hidden lg:absolute lg:inset-0 lg:h-full lg:w-full">
            <Animatedglow />

            <motion.h1
              style={{ opacity: heroOpacity, scale: heroScale }}
              className="absolute top-50 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap px-4 text-center text-[14vw] font-black tracking-[0.15em] text-white select-none sm:text-[18vw] md:text-[16vw] lg:text-[17vw]"
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
              className="pointer-events-none absolute -bottom-10 left-1/2 z-40 hidden max-h-[85vh] w-[720px] -translate-x-1/2 object-contain lg:block"
            />
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
