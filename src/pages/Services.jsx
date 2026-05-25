import { motion, useSpring, useTransform } from "framer-motion";
import Animatedglow from "../components/Animatedglow";
const serviceItems = [
  {
    title: "React JS",
    description: "Build dynamic user interfaces",
    logo: "/react js logo.png",
    x: 17,
    y: 45,
    revealStart: 0.56,
    entryX: -36,
    textClass: "right-[calc(100%+1.25rem)] top-1/2 w-44 -translate-y-1/2 text-right",
  },
  {
    title: "Next.js",
    description: "Server-side, full-stack performance",
    logo: "/next js logo.png",
    x: 9,
    y: 73,
    revealStart: 0.58,
    entryX: -28,
    textClass: "right-[calc(100%+1.25rem)] top-1/2 w-44 -translate-y-1/2 text-right",
  },
  {
    title: "Tailwind CSS",
    description: "Rapid, utility-first responsive styling",
    logo: "/tailwind-css-logo.png",
    x: 32,
    y: 28,
    revealStart: 0.6,
    entryX: -22,
    textClass: "right-[calc(100%+1.25rem)] top-1/2 w-44 -translate-y-1/2 text-right",
  },
  {

    
    logo: "/FORESTY LOGO.jfif",
    logoClass: "rounded-full object-cover",
    x: 50,
    y: 23,
    revealStart: 0.62,
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
    revealStart: 0.64,
    entryX: -16,
    textClass: "left-[calc(100%+1.25rem)] top-1/2 w-44 -translate-y-1/2 text-left",
  },
  {
    title: "Express.js",
    description: "Fast, minimal web framework",
    logo: "/express-js.png",
    imageClass: "h-[60%] w-[60%]",
    x: 83,
    y: 45,
    revealStart: 0.66,
    entryX: 18,
    textClass: "left-[calc(100%+1.25rem)] top-1/2 w-44 -translate-y-1/2 text-left",
  },
  {
    title: "MongoDB",
    description: "Scalable NoSQL database",
    logo: "/mongodb logo.svg",
    imageClass: "h-[60%] w-[60%]",
    x: 90,
    y: 73,
    revealStart: 0.68,
    entryX: 26,
    textClass: "left-[calc(100%+1.25rem)] top-1/2 w-44 -translate-y-1/2 text-left",
  },
//   {
//     title: "Framer Motion",
//     description: "Smooth UI and web animations",
//     logo: "/framermotion logo.png",
//     x: 5,
//     y: 82,
//     revealStart: 0.7,
//     entryX: 16,
//     textClass: "left-1/2 top-[calc(100%+1.1rem)] w-44 -translate-x-1/2 text-center",
//   },
//   {
//     title: "Backend Ready",
//     description: "APIs, auth, and scalable systems",
//     logo: "/NODE JS LOGO.png",
//     x: 89,
//     y: 82,
//     revealStart: 0.72,
//     entryX: 16,
//     textClass: "left-1/2 top-[calc(100%+1.1rem)] w-44 -translate-x-1/2 text-center",
//   },
];

function ServiceNode({ item, progress }) {
  const nodeOpacity = useTransform(
    progress,
    [item.revealStart, item.revealStart + 0.08],
    [0, 1]
  );
  const nodeScale = useTransform(
    progress,
    [item.revealStart, item.revealStart + 0.1],
    [0.7, 1]
  );
  const nodeX = useTransform(
    progress,
    [item.revealStart, item.revealStart + 0.12],
    [item.entryX, 0]
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
            alt={item.title}
            className={`relative z-10 object-contain ${item.imageClass || "h-[72%] w-[72%]"} ${item.logoClass || ""}`}
          />
        </div>

        <div className={`absolute text-white/90 ${item.textClass}`}>
          <p className="text-xl font-semibold text-white sm:text-[1.65rem]">{item.title}</p>
          <p className="mt-1 text-sm leading-snug text-white/75 sm:text-base">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services({ progress }) {
  const ringProgress = useSpring(progress, {
    stiffness: 42,
    damping: 18,
    mass: 1.15,
  });

  const ringY = useTransform(ringProgress, [0.52, 0.88], [54, 0]);
  const ringOpacity = useTransform(ringProgress, [0.5, 0.68, 0.88], [0, 0.8, 1]);
  const ringScale = useTransform(ringProgress, [0.5, 0.82], [0.88, 1]);
  const sweepX = useTransform(ringProgress, [0.52, 0.98], ["-18%", "118%"]);
  const sweepOpacity = useTransform(ringProgress, [0.54, 0.72, 0.96], [0, 0.8, 0]);
  const titleOpacity = useTransform(ringProgress, [0.48, 0.64, 0.92], [0, 0.35, 1]);

  return (
    <div
      className="
        absolute
        inset-0
        overflow-hidden
        text-center
        text-white
      "
    >
      <motion.h1
        style={{ opacity: titleOpacity }}
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
          z-0
          text-center
          whitespace-nowrap
          tracking-[0.15em]
          px-4
        "
      >
        SERVICES
      </motion.h1>

      <div
        className="
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
              <linearGradient id="services-ring-stroke" x1="0%" y1="50%" x2="100%" y2="50%">
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
            <ServiceNode key={item.title} item={item} progress={ringProgress} />
          ))}
        </motion.div>
      </div>
     
    </div>
  );
}
