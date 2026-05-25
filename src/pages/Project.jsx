import React from "react";
import Animatedglow from "../components/Animatedglow";
import EnterAnimation from "../components/EnterAnimation";

const projects = [
  {
    title: "FORESTY ACEDEMICS",
    image:
      "/foresty-acedemics-login.png",
    description:
      "FULLY DIGITTILIZE SYSTEM FOR ACEDEMIES TO MAINTAIN THIER ACEDMY",
    tech: ["NEXT JS", "NODE JS", "MONGO DB"],
  
    live: "https://foresty-academic.vercel.app",
  },

  {
    title: "FORESTY RESTURANT",
    image:
      "/foresty-resturant.netlify.app.png",
    description:
      "A WEBSITE FOR RESTURANTS TO MAKE THIER RESTURANT DEIGITAL.",
    tech: ["React", "JAVASCRIPT", "NEXT JS"],
    
    live: "https://cheezarilla-resturant.netlify.app",
  },

  {
    title: "FORESTY LOVE",
    image:
      "/foresty-love.netlify.app.png",
    description:
      "A VALENTINE THEME WEBSITE FOR COUPLES TO EXPRESS THEIR LOVE.",
    tech: ["React", "JAVASCRIPT", "Tailwind"],
   
    live: "https://foresty-love.netlify.app",
  },
];



export default function Project() {
  return (
    <div className="relative w-full bg-black overflow-visible text-white">
      {/* Animated Glow Background */}
      <div className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none">
        <Animatedglow />
      </div>

      {/* Huge Background Text - Part of Flow */}
      <div className="relative z-10 py-0 flex justify-center items-center pointer-events-none">
        <h1 className="text-[17vw] font-extrabold text-white select-none">
          PROJECTS
        </h1>
      </div>

      {/* Projects Grid */}
      <div className="relative z-20 px-6 md:px-12 py-0">
        <div
          className="
            max-w-7xl
            mx-auto
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-5
          "
        >
          {projects.map((project, index) => (
            <EnterAnimation key={index}>
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
                {/* Project Image */}
                <div className="overflow-hidden h-35 ">
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

                {/* Card Content */}
                <div className="px-3 py-2">
                  {/* Title */}
                  <h3 className="text-lg font-bold mb-3 text-white">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((item, i) => (
                      <span
                        key={i}
                        className="
                          px-3
                          py-1
                          text-sm
                          rounded-full
                          bg-white/10
                          border
                          border-white/10
                        "
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4">
                    <a
                      href={project.live}
                      className="
                        px-5
                        py-3
                        mb-3
                        rounded-full
                        bg-white
                        text-black
                        hover:scale-105
                        transition-all
                      "
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </EnterAnimation>
          ))}
        </div>
      </div>
    </div>
  );
}