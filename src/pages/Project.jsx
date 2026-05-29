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

gsap.registerPlugin(ScrollTrigger);

export default function Project() {
  useInjectStyles(ANIMATION_CSS);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        // ONLY MOBILE - Stacking Animation
        "(max-width: 768px)": () => {
          const cards = gsap.utils.toArray(".project-card");

          cards.forEach((card, i) => {
            // 1. Pin the OUTER container
            ScrollTrigger.create({
              trigger: card,
              start: "top 12%",
              endTrigger: containerRef.current,
              end: "bottom 90%",
              pin: true,
              pinSpacing: false,
            });

            // 2. Animate the INNER wrapper so it doesn't fight the pin
            const innerCard = card.querySelector(".card-scale-wrapper");

            if (i !== cards.length - 1 && innerCard) {
              gsap.to(innerCard, {
                scale: 0.85,
                opacity: 0.3,
                transformOrigin: "top center", // Makes it shrink from the top edge
                ease: "none",
                scrollTrigger: {
                  trigger: cards[i + 1],
                  start: "top 85%", // Starts fading when the next card enters screen
                  end: "top 15%", // Finishes fading right before it overlaps
                  scrub: true,
                },
              });
            }
          });
        },

        // DESKTOP (NO EFFECT)
        "(min-width: 769px)": () => {
          // intentionally empty
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

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

  return (
    <div
      id="projects"
      ref={containerRef}
      className="w-full bg-black text-white py-24 relative"
    >
      <div className="absolute flex justify-center items-center inset-0 pointer-events-none opacity-100">
        <Animatedglow />
      </div>

      <div className="relative z-10">
        <div className="text-center mb-2">
          <h1
            className={`
              text-[14vw] sm:text-[18vw] md:text-[16vw] lg:text-[17vw]
              py-4 font-extrabold text-white leading-none whitespace-nowrap mx-auto
              ${isVisible ? "title-enter" : ""}
            `}
          >
            PROJECTS
          </h1>
        </div>

        <div className="px-6 md:px-12 ">
          <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, index) => (
              <EnterAnimation key={index}>
                {/* 1. OUTER CARD: This handles the pinning */}
                <div
                  className={`project-card card-enter card-enter--${index} min-w-0`}
                >
                  {/* 2. INNER WRAPPER: This handles the smooth GSAP scale/opacity */}
                  <div className="card-scale-wrapper w-full h-full">
                    {/* 3. VISUAL CARD: Your original layout/styles */}
                    <div
                      className="
                        group bg-black border border-white/10 rounded-3xl overflow-hidden
                        hover:-translate-y-2 hover:border-white/20 transition-all duration-500
                      "
                    >
                      {/* Project Image */}
                      <div className="overflow-hidden h-[220px]">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-fill object-center group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>

                      {/* Card Content */}
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
                              className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/10"
                            >
                              {item}
                            </span>
                          ))}
                        </div>

                        <div className="flex gap-4">
                          <a
                            href={project.live}
                            className="px-5 py-3 mb-3 rounded-full bg-white text-black hover:scale-105 transition-all"
                          >
                            Live Demo
                          </a>
                        </div>
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
