"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Navbar from "../components/Navbar";
import Animatedglow from "../components/Animatedglow";
import Services from "./Services";

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

  const heroOpacity = useTransform(sceneProgress, [0, 0.34, 0.5], [1, 1, 0]);
  const heroScale = useTransform(sceneProgress, [0, 0.45], [1, 0.96]);

  const treeY = useTransform(sceneProgress, [0, 0.36, 0.68], [0, 300, 28]);
  const treeScale = useTransform(sceneProgress, [0, 0.4, 0.72], [1, 0.94, 0.97]);
  const treeOpacity = useTransform(sceneProgress, [0, 0.92, 1], [1, 1, 0.96]);

  return (
    <section
      ref={ref}
      className="relative h-[380vh] bg-black overflow-clip"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="relative flex h-full w-full items-center justify-center">
          <Navbar />
          <Animatedglow />

          <motion.h1
            style={{ opacity: heroOpacity, scale: heroScale }}
            className="
              absolute
              top-1/2
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
              text-[16vw]
              sm:text-[18vw]
              md:text-[16vw]
              lg:text-[17vw]
              font-black
              text-white
              select-none
              z-10
              text-center
              whitespace-nowrap
              tracking-[0.15em]
              px-4
            "
          >
            FORESTY
          </motion.h1>

          <Services progress={sceneProgress} />

          <motion.img
            src="/maintree.png"
            alt="Foresty Tree"
            style={{
              y: treeY,
              scale: treeScale,
              opacity: treeOpacity,
            }}
            className="
              absolute
              -bottom-10
              left-1/2
              -translate-x-1/2
              z-40
              pointer-events-none
              object-contain

              w-[90%]
              sm:w-[80%]
              md:w-[650px]
              lg:w-[720px]

              max-h-[85vh]
            "
          />
        </div>
      </div>
    </section>
  );
}
