import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ServiceCard({ service }) {
  const Icon = service.icon;
  return (
    <article className="group flex flex-col justify-between gap-6 rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-green-400/30">
      <div className="flex flex-col gap-4">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-green-400/10 text-green-400">
          <Icon aria-hidden="true" size={22} />
        </div>
        <div>
          <h3 className="text-lg font-semibold tracking-[-0.02em] text-white">
            {service.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-zinc-400">
            {service.description}
          </p>
        </div>
      </div>

      <Link
        href={`/services/${service.slug}`}
        className="inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-xl border border-white/15 px-4 text-sm font-medium text-white transition hover:border-green-400/50 hover:text-green-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"
        aria-label={`View ${service.title} details`}
      >
        View Details <ArrowUpRight size={16} aria-hidden="true" />
      </Link>
    </article>
  );
}