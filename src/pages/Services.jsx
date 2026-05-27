import { motion, useSpring, useTransform } from "framer-motion";
import Animatedglow from "../components/Animatedglow";

const serviceItems = [
  {
    title: "React JS",
    description: "Build dynamic user interfaces",
    logo: "/react js logo.png",
    x: 17,
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
    x: 9,
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
    x: 83,
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
    x: 90,
    y: 73,
    revealStart: 0.46,
    entryX: 26,
    textClass:
      "left-[calc(100%+1.25rem)] top-1/2 w-44 -translate-y-1/2 text-left",
  },
];

function ServiceNode({ item, progress }) {
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

  return (
    <motion.div
      style={{
        left: `${item.x}%`,
        top: `${item.y}%`,
        opacity: nodeOpacity,
        scale: nodeScale,
        x: nodeX,
      }}
      className="absolute -translate-x-1/2 -translate-y-1/2"
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
  );
}

export default function Services({ progress }) {
  const ringProgress = progress;

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
    [0, 0.2, 0.5],
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
          text-[22vw]
          sm:text-[18vw]
          md:text-[16vw]
          lg:text-[17vw]
          font-black
          text-white/10
          select-none
          z-0
          text-center
          whitespace-nowrap
          tracking-[0.15em]
          px-4
          pointer-events-none
        "
      >
        SERVICES
      </motion.h1>

      {/* --- DESKTOP VIEW (Arc Layout) --- */}
      <div
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
            />
          ))}
        </motion.div>
      </div>

      {/* --- MOBILE & TABLET VIEW (Stacked Glassmorphic Cards) --- */}
      <div className="relative z-20 flex w-full flex-col items-center px-7 pt-14 pb-52 lg:hidden">
        <div className="pointer-events-none absolute inset-x-0 top-[11rem] h-[27rem] bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.16),rgba(10,18,11,0.08)_42%,transparent_76%)]" />

        {serviceItems.map((item) => {
          if (item.title) return null;

          return (
            <motion.div
              key="mobile-center-logo"
              initial={{ opacity: 0, scale: 0.85, y: 16 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative mb-10 flex h-24 w-24 shrink-0 items-center justify-center rounded-full border border-emerald-300/80 bg-white shadow-[0_0_22px_rgba(16,185,129,0.95)]"
            >
              <img
                src={item.logo}
                alt="Foresty"
                className="h-[88%] w-[88%] rounded-full object-cover"
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
                className="relative overflow-hidden rounded-[1.15rem] border border-emerald-500/20 bg-[#040704] px-4 py-4 shadow-[0_0_0_1px_rgba(34,197,94,0.04),0_16px_35px_rgba(0,0,0,0.48)]"
              >
                <div className="absolute inset-y-0 left-0 w-full bg-[linear-gradient(90deg,rgba(14,58,29,0.72),rgba(11,34,18,0.38)_36%,rgba(4,7,4,0)_72%)]" />
                <div className="absolute inset-0 rounded-[1.15rem] shadow-[inset_0_0_0_1px_rgba(34,197,94,0.08)]" />

                <div className="relative flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-emerald-300/30 bg-black shadow-[0_0_0_1px_rgba(16,185,129,0.12),0_0_18px_rgba(16,185,129,0.18)]">
                    <img
                      src={item.logo}
                      alt={item.title}
                      className={`object-contain ${item.imageClass || "h-[62%] w-[62%]"} ${item.logoClass || ""}`}
                    />
                  </div>

                  <div className="min-w-0 text-left">
                    <h3 className="font-mono text-[1.08rem] leading-none text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-[15rem] text-[0.78rem] leading-snug text-white/75">
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
