"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function ProjectGrid({ projects }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="px-5 py-16 sm:px-6 sm:py-20" aria-labelledby="our-work-title">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
            Portfolio
          </p>
          <h2 id="our-work-title" className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Our Work
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-400">
            A selection of websites we&apos;ve designed and developed for real clients.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Global Modal rendered cleanly outside card transforms */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}