"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function ProjectModal({ project, isOpen, onClose }) {
  const [mounted, setMounted] = useState(false);
  const closeButton = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", onKeyDown);
    closeButton.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project || !mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-6"
      onClick={onClose}
      role="presentation"
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${project.id}-title`}
        onClick={(e) => e.stopPropagation()}
        className="flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#0c110d] shadow-2xl sm:rounded-3xl"
        data-lenis-prevent
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 bg-[#0c110d] px-5 py-4 sm:px-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
            Project Details
          </span>
          <button
            ref={closeButton}
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="grid size-9 place-items-center rounded-full border border-white/15 text-white transition hover:bg-white/10"
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto px-5 py-6 sm:px-8 sm:py-8">
          <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-white/10 bg-black">
            <Image
              src={project.image}
              alt={project.alt || project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
          </div>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1.15fr_.85fr]">
            <div>
              <p className="text-sm font-medium text-emerald-300">{project.category}</p>
              <h2 id={`${project.id}-title`} className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                {project.title}
              </h2>

              <dl className="mt-6 grid gap-4 border-y border-white/10 py-5 text-sm sm:grid-cols-2">
                <div>
                  <dt className="text-zinc-500">Industry</dt>
                  <dd className="mt-1 text-zinc-200">{project.industry || "N/A"}</dd>
                </div>
                <div>
                  <dt className="text-zinc-500">Services</dt>
                  <dd className="mt-1 text-zinc-200">
                    {project.services?.join(", ") || "N/A"}
                  </dd>
                </div>
              </dl>

              <h3 className="mt-7 text-lg font-semibold text-white">About the project</h3>
              <p className="mt-3 leading-7 text-zinc-400">{project.about}</p>
            </div>

            <aside className="h-fit rounded-2xl border border-emerald-400/15 bg-[#0b1d10] p-5 sm:p-6">
              <h3 className="text-lg font-semibold text-white">Technologies</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies?.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-black/25 px-3 py-1.5 text-sm text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.projectUrl && (
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 hover:text-emerald-200"
                >
                  Visit live website <ExternalLink size={15} />
                </a>
              )}
            </aside>
          </div>

          <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-emerald-400/20 bg-[#10341b] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div>
              <h3 className="text-xl font-semibold text-white">Want a website like this?</h3>
              <p className="mt-1 text-sm text-emerald-50/70">
                Let&apos;s build a digital solution around your goals.
              </p>
            </div>
            <Link
              href="/#contact"
              onClick={onClose}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-emerald-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-emerald-300"
            >
              Let&apos;s Build Yours <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>,
    document.body
  );
}