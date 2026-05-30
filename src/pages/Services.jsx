import React, { useRef, useState, useEffect } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import Animatedglow from "../components/Animatedglow";

const serviceItems = [
  {
    title: "React JS",
    description: "Build dynamic user interfaces",
    logo: "/react js logo.png",
    x: 5,
    y: 45,
    revealStart: 0.22,
    entryX: -36,
    textClass:
      "right-[calc(100%+1.25rem)] top-1/2 w-44 -translate-y-1/2 text-right",
  },
  {
    title: "Next.js",
    description: "Server-side, full-stack performance",
    logo: "/next js logo.png",
    x: -7,
    y: 73,
    revealStart: 0.26,
    entryX: -28,
    textClass:
      "right-[calc(100%+1.25rem)] top-1/2 w-44 -translate-y-1/2 text-right",
  },
  {
    title: "Tailwind CSS",
    description: "Rapid, utility-first responsive styling",
    logo: "/tailwind-css-logo.png",
    x: 32,
    y: 28,
    revealStart: 0.3,
    entryX: -22,
    textClass:
      "right-[calc(100%+1.25rem)] top-1/2 w-44 -translate-y-1/2 text-right",
  },
  {
    // Center Logo Node (Foresty)
    logo: "/FORESTY LOGO.jfif",
    logoClass: "rounded-full object-cover",
    x: 50,
    y: 23,
    revealStart: 0.34,
    entryX: -22,
    textClass: "left-1/2 top-[-5.5rem] w-44 -translate-x-1/2 text-center",
  },
  {
    title: "Node.js",
    description: "High-performance JS servers",
    logo: "/NODE JS LOGO.png",
    logoClass: "rounded-full object-cover",
    imageClass: "h-[62%] w-[62%]",
    x: 70,
    y: 28,
    revealStart: 0.38,
    entryX: -16,
    textClass:
      "left-[calc(100%+1.25rem)] top-1/2 w-44 -translate-y-1/2 text-left",
  },
  {
    title: "Express.js",
    description: "Fast, minimal web framework",
    logo: "/express-js.png",
    imageClass: "h-[60%] w-[60%]",
    x: 94,
    y: 45,
    revealStart: 0.42,
    entryX: 18,
    textClass:
      "left-[calc(100%+1.25rem)] top-1/2 w-44 -translate-y-1/2 text-left",
  },
  {
    title: "MongoDB",
    description: "Scalable NoSQL database",
    logo: "/mongodb logo.svg",
    imageClass: "h-[60%] w-[60%]",
    x: 107,
    y: 73,
    revealStart: 0.46,
    entryX: 26,
    textClass:
      "left-[calc(100%+1.25rem)] top-1/2 w-44 -translate-y-1/2 text-left",
  },
];

function ServiceNode({ item, progress, containerDimensions }) {
  const nodeOpacity = useTransform(
    progress,
    [item.revealStart, item.revealStart + 0.08],
    [0, 1],
  );
  const nodeScale = useTransform(
    progress,
    [item.revealStart, item.revealStart + 0.1],
    [0.7, 1],
  );
  const nodeX = useTransform(
    progress,
    [item.revealStart, item.revealStart + 0.12],
    [item.entryX, 0],
  );

  // The SVG ring preserves its aspect ratio (viewBox 1000x780).
  // The percentages (item.x, item.y) were handcrafted on a specific container aspect ratio.
  const AUTHORED_WIDTH = 1220;
  const AUTHORED_HEIGHT = 1040;
  const VIEWBOX_WIDTH = 1000;
  const VIEWBOX_HEIGHT = 780;

  // Wait until we have container dimensions
  if (!containerDimensions.width || !containerDimensions.height) return null;

  // 1. Determine how the SVG was scaled and offset on the AUTHORED screen
  const authScale = Math.min(
    AUTHORED_WIDTH / VIEWBOX_WIDTH,
    AUTHORED_HEIGHT / VIEWBOX_HEIGHT,
  );
  const authSvgWidth = VIEWBOX_WIDTH * authScale;
  const authSvgHeight = VIEWBOX_HEIGHT * authScale;
  const authOffsetX = (AUTHORED_WIDTH - authSvgWidth) / 2;
  const authOffsetY = (AUTHORED_HEIGHT - authSvgHeight) / 2;

  // 2. Convert the handcrafted percentages back into the TRUE viewBox coordinates
  const pixelX_Authored = (item.x / 100) * AUTHORED_WIDTH;
  const pixelY_Authored = (item.y / 100) * AUTHORED_HEIGHT;

  const viewBoxX =
    ((pixelX_Authored - authOffsetX) / authSvgWidth) * VIEWBOX_WIDTH;
  const viewBoxY =
    ((pixelY_Authored - authOffsetY) / authSvgHeight) * VIEWBOX_HEIGHT;

  // 3. Determine how the SVG is scaled and offset on the CURRENT screen
  const currentScale = Math.min(
    containerDimensions.width / VIEWBOX_WIDTH,
    containerDimensions.height / VIEWBOX_HEIGHT,
  );

  const currentSvgWidth = VIEWBOX_WIDTH * currentScale;
  const currentSvgHeight = VIEWBOX_HEIGHT * currentScale;
  const currentOffsetX = (containerDimensions.width - currentSvgWidth) / 2;
  const currentOffsetY = (containerDimensions.height - currentSvgHeight) / 2;

  // 4. Map the true viewBox coordinates perfectly onto the current screen!
  const realX = currentOffsetX + (viewBoxX / VIEWBOX_WIDTH) * currentSvgWidth;
  const realY = currentOffsetY + (viewBoxY / VIEWBOX_HEIGHT) * currentSvgHeight;

  return (
    <div
      style={{
        position: "absolute",
        left: realX,
        top: realY,
        transform: "translate(-50%, -50%)",
        zIndex: 30,
      }}
    >
      <motion.div
        style={{
          opacity: nodeOpacity,
          scale: nodeScale,
          x: nodeX,
        }}
      >
        <div className="relative">
          <div
            className="
            flex h-20 w-20 items-center justify-center rounded-full
            border border-green-300/70 bg-transparent text-green-100
            shadow-[0_0_30px_rgba(74,222,128,0.18)]
            sm:h-24 sm:w-24
          "
          >
            <div className="absolute inset-0 rounded-full shadow-[0_0_26px_rgba(74,222,128,0.35)]" />
            <img
              src={item.logo}
              alt={item.title || "Logo"}
              className={`relative z-10 object-contain ${item.imageClass || "h-[72%] w-[72%]"} ${item.logoClass || ""}`}
            />
          </div>

          {item.title && (
            <div className={`absolute text-white/90 ${item.textClass}`}>
              <p className="text-xl font-semibold text-white sm:text-[1.65rem]">
                {item.title}
              </p>
              <p className="mt-1 text-sm leading-snug text-white/75 sm:text-base">
                {item.description}
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default function Services({ progress }) {
  const ringProgress = progress;

  const containerRef = useRef(null);
  const [containerDimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      if (entries[0]) {
        setDimensions({
          width: entries[0].contentRect.width,
          height: entries[0].contentRect.height,
        });
      }
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const ringY = useTransform(ringProgress, [0.15, 0.5], [54, 0]);
  const ringOpacity = useTransform(
    ringProgress,
    [0.12, 0.26, 0.6],
    [0, 0.8, 1],
  );
  const ringScale = useTransform(ringProgress, [0.12, 0.45], [0.88, 1]);
  const sweepX = useTransform(ringProgress, [0.16, 0.62], ["-18%", "118%"]);
  const sweepOpacity = useTransform(
    ringProgress,
    [0.18, 0.32, 0.6],
    [0, 0.8, 0],
  );

  // Adjusted opacity for the background text to make sure mobile text is readable over it
  const titleOpacity = useTransform(
    ringProgress,
    [0.1, 0.22, 0.6],
    [0, 0.2, 1.0],
  );

  return (
    <div
      id="services"
      className="
        relative
        overflow-hidden
        text-center
        text-white
        lg:absolute
        lg:inset-0
        lg:h-screen
        aspect-ratio: 1/1
      
        
        "
    >
      {/* BACKGROUND TEXT - Fixed position so it stays centered behind scrolling mobile content */}
      <motion.h1
        style={{ opacity: titleOpacity }}
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          text-[14vw]
          sm:text-[18vw]
          md:text-[16vw]
          lg:text-[17vw]
          font-black
          text-white
          select-none
          z-0
          text-center
          whitespace-nowrap
          tracking-[0.15em]
          px-4
          pointer-events-none
          not-lg:top-10
        "
      >
        SERVICES
      </motion.h1>

      {/* --- DESKTOP VIEW (Arc Layout) --- */}
      <div
        ref={containerRef}
        className="
          hidden lg:block
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          z-20
          w-[min(100%,1220px)]
          h-[min(1040px,112vh)]
          -translate-x-1/2
          -translate-y-1/2
        "
      >
        <Animatedglow />

        <motion.div
          style={{
            y: ringY,
            opacity: ringOpacity,
            scale: ringScale,
          }}
          className="absolute inset-0 z-20"
        >
          <motion.svg
            viewBox="0 0 1000 780"
            className="absolute inset-0 h-full w-full overflow-visible"
          >
            <defs>
              <linearGradient
                id="services-ring-stroke"
                x1="0%"
                y1="50%"
                x2="100%"
                y2="50%"
              >
                <stop offset="0%" stopColor="rgba(74, 222, 128, 0.55)" />
                <stop offset="50%" stopColor="rgba(134, 239, 172, 0.98)" />
                <stop offset="100%" stopColor="rgba(74, 222, 128, 0.55)" />
              </linearGradient>
              <filter id="services-ring-glow">
                <feGaussianBlur stdDeviation="10" result="blurred" />
                <feMerge>
                  <feMergeNode in="blurred" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <motion.ellipse
              cx="500"
              cy="162"
              rx="590"
              ry="515"
              transform="rotate(180 500 420)"
              fill="none"
              stroke="url(#services-ring-stroke)"
              strokeWidth="3.5"
              filter="url(#services-ring-glow)"
              strokeLinecap="round"
            />
          </motion.svg>

          <motion.div
            style={{ left: sweepX, opacity: sweepOpacity }}
            className="
              absolute inset-y-[8%] z-10 w-24 -translate-x-1/2
              bg-[linear-gradient(90deg,transparent,rgba(134,239,172,0.7),transparent)]
              blur-xl
            "
          />

          {serviceItems.map((item) => (
            <ServiceNode
              key={item.title || "center-logo"}
              item={item}
              progress={ringProgress}
              containerDimensions={containerDimensions}
            />
          ))}
        </motion.div>
      </div>

      {/* --- MOBILE & TABLET VIEW (Stacked Glassmorphic Cards) --- */}
     <div className="relative z-20 flex w-full flex-col items-center px-7 pt-14 pb-52 lg:hidden">
  {/* Removed the glowing radial background for a completely clean, flat environment */}

  {serviceItems.map((item) => {
    if (item.title) return null;

    return (
      <motion.div
        key="mobile-center-logo"
        initial={{ opacity: 0, scale: 0.85, y: 16 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        // Cleaned up the center logo: pure white tone, solid border, no glowing shadow
        className="relative mb-10 flex h-24 w-24 shrink-0 items-center justify-center rounded-full border-2 border-white bg-white"
      >
        <img
          src={item.logo}
          alt="Foresty"
        className="h-full w-full rounded-full object-cover"
        />
      </motion.div>
    );
  })}

  <div className="relative z-10 flex w-full flex-col gap-4">
    {serviceItems.map((item, index) => {
      if (!item.title) return null;

      return (
        <motion.div
          key={`mobile-${item.title}`}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: index * 0.08, duration: 0.4 }}
          // FLAT CARD STYLING: Solid dark background, simple border, no box-shadow
          className="relative overflow-hidden rounded-[1.15rem] border border-[#1a2e1f] bg-[#0c130d] px-4 py-4"
        >
          {/* DELETED: The absolute linear-gradient background layer */}
          {/* DELETED: The absolute inset-shadow glass layer */}

          <div className="relative flex items-center gap-4">
            {/* FLAT ICON CONTAINER: Solid background, subtle flat border, no glow */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#1a2e1f] bg-[#121c14]">
              <img
                src={item.logo}
                alt={item.title}
                className={`object-contain ${item.imageClass || "h-full w-full"} ${item.logoClass || ""}`}
              />
            </div>

            <div className="min-w-0 text-left">
              <h3 className="font-mono text-[1.08rem] leading-none text-white">
                {item.title}
              </h3>
              <p className="mt-2 max-w-[15rem] text-[0.78rem] leading-snug text-gray-400">
                {item.description}
              </p>
            </div>
          </div>
        </motion.div>
      );
    })}
  </div>
</div>
    </div>
  );
}
