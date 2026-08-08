import React, { useEffect, useRef } from "react";
import Animatedglow from "../components/Animatedglow";
import EnterAnimation from "../components/EnterAnimation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
  {
    title: "FORESTY PERFUMES",
    image: "/mashab perfumes.png",
    description: "An elegant online storefront designed for a boutique fragrance brand to showcase and market their exclusive perfume collection.",
    tech: ["Online store", "More trust", "Always open"],
    live: "https://mashab-perfumes-k53u.vercel.app",
    target: "_blank",
  },
  {
    title: "FORESTY ZAIQA HUB",
    image: "/zaiqa-hub.jpeg",
    description: "A modern platform enabling restaurants to digitize their operations, feature interactive menus, and build a strong online presence.",
    tech: ["More online orders", "Clear menu", "Less manual work"],
    live: "https://foresty-resturant.vercel.app",
    target: "_blank",
  },
  {
    title: "FORESTY NAILS",
    image: "/Frame 2.jpeg",
    description: "A visually appealing website for beauty and nail salons to display their service offerings, portfolios, and retail products.",
    tech: ["Automatic bookings", "More enquiries", "Professional presence"],
    live: "https://lily-nails.vercel.app",
    target: "_blank",
  },
 
  // Add as many cards as you want here! The code will handle them automatically.
];
gsap.registerPlugin(ScrollTrigger);

export default function Project() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // 1. ENTRANCE ANIMATION (Replaces the IntersectionObserver & injected CSS)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 100%", // Triggers when the container is 20% into the screen
        },
      });

      // Animate Title
      tl.from(".project-title", {
        opacity: 0,
        y: 28,
        duration: 1.4,
        ease: "power3.out",
      })
      // Animate Cards dynamically using `stagger`
      .from(".project-card", {
        opacity: 0,
        y: 28,
        duration: 1.4,
        ease: "power3.out",
        stagger: 0.2, // <- This adds a 0.2s delay between EVERY card automatically!
      }, "-=1"); // Starts a bit early to overlap with the title animation

      // 2. SCROLL EFFECTS (Your existing mobile squeeze code)
      ScrollTrigger.matchMedia({
        "(max-width: 768px)": () => {
          const cards = gsap.utils.toArray(".project-card");

          cards.forEach((card, i) => {
            const innerCard = card.querySelector(".card-scale-wrapper");

            if (i !== cards.length - 1 && innerCard) {
              gsap.to(innerCard, {
                scale: 0.85,
                opacity: 0.3,
                transformOrigin: "top center",
                ease: "none",
                scrollTrigger: {
                  trigger: cards[i + 1],
                  start: "top 85%",
                  end: "top 15%",
                  scrub: true,
                },
              });
            }
          });
        },
        "(min-width: 769px)": () => {},
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div id="projects" ref={containerRef} className="w-full bg-black text-white py-24 relative">
      <div className="hidden lg:absolute flex justify-center items-center inset-0 pointer-events-none opacity-100">
        <Animatedglow />
      </div>

      <div className="relative z-10">
        <div className="text-center mb-2">
          <h1
            className="project-title text-[14vw] sm:text-[18vw] md:text-[16vw] lg:text-[17vw] py-4 font-extrabold text-white leading-none whitespace-nowrap mx-auto"
          >
            GROWTH STORIES
          </h1>
        </div>

       <div className="px-6 md:px-12">
  <div className="w-full max-w-[1400px] mx-auto flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-5">
    {projects.map((project, index) => (
      // Added h-full here so the grid item expands to fill the row height
      <div key={index} className="sticky top-[15vh] md:static w-full md:h-full">
        <EnterAnimation>
          {/* Added h-full to the project card wrapper */}
          <div className="project-card min-w-0 h-full">
            <div className="card-scale-wrapper w-full h-full">
              
              {/* Added h-full and flex flex-col to the main card card */}
              <div className="group bg-black border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-2 hover:border-white/20 transition-all duration-500 h-full flex flex-col">
                
                <div className="overflow-hidden h-[220px] w-full shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    // Changed object-fill to object-cover so your images don't stretch unnaturally
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Added flex-1 and flex flex-col to the content area */}
                <div className="p-5 flex-1 flex flex-col ">
                  <h3 className="text-lg font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-5">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((item, i) => (
                      <span key={i} className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/10 text-white/80">
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Added mt-auto to push the button container perfectly to the bottom */}
                  <div className="flex gap-4 mt-auto">
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="px-5 py-3 rounded-full bg-white text-black hover:scale-105 transition-all text-center inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </EnterAnimation>
      </div>
    ))}
  </div>
</div>
      </div>
    </div>
  );
}
