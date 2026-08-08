"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Animatedglow from "../components/Animatedglow";
import Services from "./Services";
import Navbar from "../components/Navbar";
import MobileHeader from "../components/MobileHeader";

export default function Front() {
  const ref = useRef(null);

  // Tracks whether the mobile tree has finished its fall + bounce.
  // Once true, the tagline & CTA buttons fade in and nothing on
  // mobile animates further (scroll-independent).
  const [mobileTreeLanded, setMobileTreeLanded] = useState(false);

  // How far down (in px) the tree should rest once it lands, relative
  // to its original position. Increase to push it further down, decrease
  // (or use a negative number) to raise it back up.
  const MOBILE_TREE_LANDING_Y = 120;
  // How far above the screen it starts falling from.
  const MOBILE_TREE_FALL_DISTANCE = 650;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const sceneProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 10,
    mass: 1.3,
  });

  // ---- DESKTOP (unchanged): scroll-linked hero fade/scale ----
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

  // Desktop tree opacity stays scroll-linked as before.
  const treeOpacity = useTransform(sceneProgress, [0, 0.92, 1], [1, 1, 0.96]);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const targetId =
      id === "services" && window.innerWidth >= 1024 ? "services-anchor" : id;
    document
      .getElementById(targetId)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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
          {/* MOBILE-ONLY: Tree falls from above on page load with real spring physics,
              strikes the ground line, bounces up slightly, then settles. This is
              driven by time (mount), NOT scroll. */}
          <motion.img
            src="/maintree.png"
            alt="Foresty Tree"
            initial={{
              y: MOBILE_TREE_LANDING_Y - MOBILE_TREE_FALL_DISTANCE,
              scale: 1.08,
              opacity: 1,
            }}
            animate={{ y: MOBILE_TREE_LANDING_Y, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 170,
              damping: 13,
              mass: 1.3,
              delay: 0.15,
            }}
            onAnimationComplete={() => {
              // short decay/pause after impact settles, then reveal text + CTAs
              setTimeout(() => setMobileTreeLanded(true), 10);
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

            {/* DESKTOP-ONLY tree, still scroll-linked as before */}
            <motion.img
              src="/maintree.png"
              alt="Foresty Tree"
              style={{
                y: desktopTreeY,
                scale: desktopTreeScale,
                opacity: treeOpacity,
              }}
              className="pointer-events-none absolute -bottom-4 left-1/2 z-40 hidden max-h-[85vh] w-[720px] -translate-x-1/2 object-contain lg:block"
            />

            {/* DESKTOP Hero Tagline & CTA Buttons — still scroll-linked (fades with heroOpacity) */}
            <motion.div
              style={{ opacity: heroOpacity }}
              className="absolute bottom-[6%] left-0 z-[80] hidden w-full flex-row items-end justify-between gap-5 px-4
                         lg:flex lg:px-12 xl:px-24"
            >
              <p
                className="max-w-[650px] text-left text-[13px] leading-relaxed tracking-wide text-white/85
                            mix-blend-overlay md:text-[24px] lg:text-[25px]"
              >
                Your Business Has Problems.
                <br /> We Build The Right Solution.
              </p>

              <div className="flex flex-col items-end gap-4">
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, "contact")}
                  className="rounded-xl bg-[#07893d] px-6 py-2.5 text-center text-sm font-semibold text-white
                             shadow-[0_0_20px_rgba(46,204,113,0.3)] transition-all duration-300
                             hover:bg-[#27ae60] hover:shadow-[0_0_28px_rgba(46,204,113,0.45)]
                             sm:px-7 sm:py-3 sm:text-[15px] lg:w-64 hover:scale-105 cursor-pointer"
                >
                  Get Free Business Consultation
                </a>
                <a
                  href="#services"
                  onClick={(e) => scrollToSection(e, "digital-solutions")}
                  className="rounded-xl border border-[#2ecc71] px-6 py-2.5 text-center text-sm font-semibold text-white
                             transition-all duration-300 hover:bg-[#2ecc71]/10
                             hover:shadow-[0_0_20px_rgba(46,204,113,0.15)]
                             sm:px-7 sm:py-3 sm:text-[15px] lg:w-64 cursor-pointer hover:scale-105"
                >
                  Explore Our Solutions
                </a>
              </div>
            </motion.div>

            {/* MOBILE Hero Tagline & CTA Buttons — appear only after the tree lands,
                then stay static (no further animation on scroll). */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={
                mobileTreeLanded ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }
              }
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="absolute top-[28%] left-0 z-[80] flex w-full flex-col items-center justify-between gap-5 px-4 lg:hidden"
            >
              <p
                className="max-w-[520px] text-center text-[13px] leading-relaxed tracking-wide text-white/85
                            mix-blend-overlay sm:text-sm"
              >
                Your Business Has Problems.
                <br /> We Build The Right Solution.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full px-2">
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, "contact")}
                  className="w-full rounded-xl bg-[#07893d] px-4 py-2.5 text-center text-[13px] font-semibold text-white
                             shadow-[0_0_20px_rgba(46,204,113,0.3)] transition-all duration-300
                             hover:bg-[#27ae60] hover:shadow-[0_0_28px_rgba(46,204,113,0.45)]
                             sm:px-7 sm:py-3 sm:text-[15px] hover:scale-105 cursor-pointer"
                >
                  Get Free Business Consultation
                </a>
                <a
                  href="#digital-solutions"
                  onClick={(e) => scrollToSection(e, "digital-solutions")}
                  className="w-full rounded-xl border border-[#2ecc71] px-4 py-2.5 text-center text-[13px] font-semibold text-white
                             transition-all duration-300 hover:bg-[#2ecc71]/10
                             hover:shadow-[0_0_20px_rgba(46,204,113,0.15)]
                             sm:px-7 sm:py-3 sm:text-[15px] cursor-pointer hover:scale-105"
                >
                  Explore Our Solutions
                </a>
              </div>
            </motion.div>
          </div>

          {/* 2. SERVICES SECTION */}
          {/* MOBILE: Flows naturally below the hero with a dark bg. DESKTOP: Sits absolute over the tree. */}
          <div className="relative w-full bg-[#050A05] lg:absolute lg:inset-0 lg:z-20 lg:bg-transparent">
            <Services progress={sceneProgress} />
          </div>
        </div>
      </div>
    </section>
  );
}
