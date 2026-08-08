import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ProjectCard({ project, onOpenModal }) {
  return (
    <article 
      onClick={onOpenModal}
      className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0c100d] transition duration-300 hover:-translate-y-1 hover:border-emerald-300/30 hover:shadow-xl hover:shadow-emerald-950/20"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-black">
        <Image
          src={project.image}
          alt={project.alt || project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-sm font-medium text-emerald-300">{project.category}</p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-zinc-400">{project.description}</p>
        <div className="mt-auto pt-6">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 group-hover:text-emerald-200">
            View project <ArrowRight size={16} aria-hidden="true" />
          </span>
        </div>
      </div>
    </article>
  );
}