import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ServiceCard({ service }) {
  return (
    <Link 
      href={`/services/${service.slug}`} 
      className="group relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-white/5 bg-[#0e120f]/50 p-5 sm:p-6 transition-all duration-500 hover:-translate-y-1 hover:border-emerald-500/30 hover:bg-[#111613]/80 hover:shadow-[0_8px_30px_rgba(16,185,129,0.1)] h-[320px] sm:h-[380px]"
      aria-label={`View ${service.title} details`}
    >
      {/* Top Content: Title & Description */}
      <div className="relative z-10 space-y-2">
        <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white uppercase leading-snug">
          {service.title}
        </h3>
        <p className="text-xs sm:text-sm text-zinc-400 line-clamp-3 leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Floating 3D Image */}
      <div className="absolute right-0 bottom-0 w-3/4 h-3/5 sm:h-2/3 pointer-events-none transform transition-transform duration-700 group-hover:scale-105 group-hover:-translate-y-2 group-hover:-translate-x-2">
        {service.bgImage && (
          <img 
            src={service.bgImage} 
            alt="" 
            className="w-full h-full object-contain object-bottom filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)] mix-blend-normal"
          />
        )}
      </div>

      {/* Bottom CTA Element (Button arrow) */}
      <div className="relative z-10 mt-auto pt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
        <div className="flex size-9 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10 transition-colors duration-300 group-hover:bg-emerald-500 group-hover:text-black">
          <ArrowUpRight size={18} />
        </div>
        <span className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
          Details
        </span>
      </div>
    </Link>
  );
}