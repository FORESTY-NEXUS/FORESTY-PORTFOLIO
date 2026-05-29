import React, { useEffect, useRef, useState } from "react";
import Animatedglow from "../components/Animatedglow";
import EnterAnimation from "../components/EnterAnimation";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
  {
    title: "FORESTY ACEDEMICS",
    image: "/foresty-acedemics-login.png",
    description:
      "FULLY DIGITTILIZE SYSTEM FOR ACEDEMIES TO MAINTAIN THIER ACEDMY",
    tech: ["NEXT JS", "NODE JS", "MONGO DB"],
    live: "https://foresty-academic.vercel.app",
  },
  {
    title: "FORESTY RESTURANT",
    image: "/FORESTY RESTURAAANt.png",
    description: "A WEBSITE FOR RESTURANTS TO MAKE THIER RESTURANT DEIGITAL.",
    tech: ["React", "JAVASCRIPT", "NEXT JS"],
    live: "https://foresty-resturant.netlify.app",
  },
  {
    title: "FORESTY LOVE",
    image: "/foresty-love.netlify.app.png",
    description: "A VALENTINE THEME WEBSITE FOR COUPLES TO EXPRESS THEIR LOVE.",
    tech: ["React", "JAVASCRIPT", "Tailwind"],
    live: "https://foresty-love.netlify.app",
  },
];

const ANIMATION_CSS = `
  @keyframes fadeSlideUp {
    from {
      opacity: 0;
      transform: translateY(28px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .title-enter {
    opacity: 0;
    animation: fadeSlideUp 1.4s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both;
  }

  .card-enter {
    opacity: 0;
  }

  .card-enter.card-enter--0 {
    animation: fadeSlideUp 1.4s cubic-bezier(0.22, 1, 0.36, 1) 0.6s both;
  }
  .card-enter.card-enter--1 {
    animation: fadeSlideUp 1.4s cubic-bezier(0.22, 1, 0.36, 1) 0.8s both;
  }
  .card-enter.card-enter--2 {
    animation: fadeSlideUp 1.4s cubic-bezier(0.22, 1, 0.36, 1) 1s both;
  }
`;

function useInjectStyles(css) {
  useEffect(() => {
    const id = "project-page-animations";
    if (document.getElementById(id)) return;

    const style = document.createElement("style");
    style.id = id;
    style.textContent = css;
    document.head.appendChild(style);

    return () => {
      const el = document.getElementById(id);
      if (el) el.remove();
    };
  }, []);
}

export default function Project() {
  useInjectStyles(ANIMATION_CSS);

  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // ✅ GSAP MOBILE ONLY ANIMATION
  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        "(max-width: 768px)": () => {
          const cards = gsap.utils.toArray(".project-card");
          if (!cards.length) return;

          const wrappers = cards.map(c => c.parentElement); // EnterAnimation wrappers
          const flexContainer = wrappers[0].parentElement; // The flex-col grid container

          // 1. Prevent pinned section from clipping the incoming cards
          gsap.set(containerRef.current, { minHeight: "100vh" });

          // 2. Force wrappers to stack in the exact same position, while keeping flexContainer height intact
          gsap.set(flexContainer, { 
            position: "relative", 
            minHeight: () => wrappers[0].offsetHeight 
          });
          
          gsap.set(wrappers, { 
            position: "absolute", 
            top: 0, 
            left: 0, 
            width: "100%" 
          });

          // 3. Set initial states (card 0 is active, others wait off-screen below)
          cards.forEach((card, i) => {
            gsap.set(card, {
              transformOrigin: "center top",
              y: () => i === 0 ? 0 : window.innerHeight,
              zIndex: i,
              filter: "blur(0px)",
              opacity: 1,
              scale: 1,
              animation: "none" // Force kill the CSS animation so GSAP can move them!
            });
          });

          // 4. Single master timeline for the pinned scroll effect
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: `+=${cards.length * 800}`,
              scrub: 1,
              pin: true,
              invalidateOnRefresh: true,
            },
          });

          // 5. Sequence the stack animations
          for (let i = 1; i < cards.length; i++) {
            const label = `stage${i}`;
            
            // Bring the next card up into view
            tl.to(cards[i], {
              y: 0,
              ease: "none",
              duration: 1
            }, label);
            
            // Push previous cards back, scale down, and blur
            for (let j = 0; j < i; j++) {
              const depth = i - j;
              tl.to(cards[j], {
                scale: 1 - depth * 0.05,
                y: -depth * 25,
                filter: `blur(${depth === 1 ? 8 : 12}px)`,
                opacity: depth === 1 ? 0.7 : 0.4,
                ease: "none",
                duration: 1
              }, label);
            }
          }
        },

        "(min-width: 769px)": () => {
          // no animation
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 768px)");
    const update = (e) => setIsMobileScreen(e.matches);
    setIsMobileScreen(mq.matches);
    if (mq.addEventListener) mq.addEventListener("change", update);
    else mq.addListener(update);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", update);
      else mq.removeListener(update);
    };
  }, []);

  return (
    <div
      id="projects"
      ref={containerRef}
      className="w-full bg-black text-white py-24 relative overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute flex justify-center items-center inset-0 pointer-events-none opacity-100">
        <Animatedglow />
      </div>

      <div className="relative z-10">
        {/* Title */}
        <div className="text-center mb-2">
          <h1
            className={`
              text-[17vw]
              sm:text-[18vw]
              md:text-[16vw]
              lg:text-[17vw]
              py-4
              font-extrabold
              text-white
              leading-none
              whitespace-nowrap
              mx-auto
              ${isVisible ? "title-enter" : ""}
            `}
          >
            PROJECTS
          </h1>
        </div>

        {/* Grid */}
        <div className="px-6 md:px-12">
          <div className="w-full max-w-[1400px] mx-auto flex flex-col lg:grid lg:grid-cols-3 lg:gap-5 gap-10 relative">
            {projects.map((project, index) => (
              <EnterAnimation key={index} disableScale={isMobileScreen}>
                <div
                  className={`project-card card-enter card-enter--${index} min-w-0 w-full lg:relative`}
                >
                  <div
                    className="
                      group
                      bg-black
                      border
                      border-white/10
                      rounded-3xl
                      overflow-hidden
                      hover:-translate-y-2
                      hover:border-white/20
                      transition-all
                      duration-500
                    "
                  >
                    {/* Image */}
                    <div className="overflow-hidden h-[220px]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="
                          w-full
                          h-full
                          object-fill
                          object-center
                          group-hover:scale-110
                          transition-transform
                          duration-700
                        "
                      />
                    </div>

                    {/* Content */}
                    <div className="px-3 py-2">
                      <h3 className="text-lg font-bold mb-3 text-white">
                        {project.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed mb-5">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((item, i) => (
                          <span
                            key={i}
                            className="
                              px-3 py-1 text-sm rounded-full
                              bg-white/10 border border-white/10
                            "
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        <a
                          href={project.live}
                          className="
                            px-5 py-3 mb-3 rounded-full
                            bg-white text-black
                            hover:scale-105
                            transition-all
                          "
                        >
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </EnterAnimation>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
