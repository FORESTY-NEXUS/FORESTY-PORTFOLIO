import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ServiceCard({ service }) {
  const Icon = service.icon;
  return (
    <article className="group flex flex-col justify-between gap-6 rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-green-400/30">
      <div className="flex flex-col lg:gap-4  gap-2">
        <div className="flex gap-2 justify-center items-center">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-green-400/10 text-green-400">
          <Icon aria-hidden="true" size={22} />

        </div>
         <h3 className="text-sm font-semibold tracking-[-0.02em] text-white not-lg:text-start">
            {service.title}
          </h3>
        </div>-
        <div>
         
          <p className="mt-2 text-sm lg:leading-6  text-zinc-400  not-lg:text-center">
            {service.description}
          </p>
        </div>
      </div>

      <Link
        href={`/services/${service.slug}`}
        className="flex gap-2    min-h-10 w-full items-center justify-center  p-2 rounded-xl border border-white/15 px-4 text-sm font-medium text-white transition hover:border-green-400/50 hover:text-green-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"
        aria-label={`View ${service.title} details`}
      >
  
        <span className=" hidden lg:block">View</span>  Details <ArrowUpRight size={16} aria-hidden="true" />
    
      </Link>

    </article>
  );
}