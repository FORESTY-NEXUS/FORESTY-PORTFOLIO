import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="px-4 pb-16 pt-8 sm:px-6 sm:pb-24" aria-labelledby="consultation-heading">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-emerald-500/20 bg-gradient-to-r from-[#031b0e] via-[#08331a] to-[#04140a] p-6 shadow-2xl sm:rounded-[2.5rem] sm:p-10 lg:p-12">
        {/* Pine Trees Silhouette Overlay at Bottom */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex h-20 items-end opacity-25 sm:h-28">
          <svg className="w-full text-black" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="currentColor">
            <path d="M0,120 L0,90 L20,60 L40,90 L50,40 L70,85 L90,30 L110,85 L130,50 L150,90 L170,20 L190,80 L210,40 L230,90 L250,55 L270,95 L290,35 L310,85 L330,45 L350,90 L370,15 L390,85 L410,50 L430,95 L450,30 L470,85 L490,60 L510,95 L530,25 L550,85 L570,45 L590,90 L610,20 L630,85 L650,50 L670,95 L690,35 L710,85 L730,55 L750,90 L770,15 L790,85 L810,40 L830,90 L850,50 L870,95 L890,30 L910,85 L930,60 L950,95 L970,25 L990,85 L1010,45 L1030,90 L1050,20 L1070,85 L1090,50 L1110,95 L1130,35 L1150,85 L1170,55 L1200,90 L1200,120 Z" />
          </svg>
        </div>

        <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          {/* Left Text Column */}
          <div className="max-w-xl space-y-2 sm:space-y-3">
            <h2 id="consultation-heading" className="text-balance text-2xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to Transform <br className="hidden sm:inline" />
              <span className="text-emerald-400">Your Business?</span>
            </h2>
            <p className="text-xs leading-relaxed text-zinc-300 sm:text-sm lg:text-base">
              Let&apos;s discuss how our services can help you achieve your goals.
            </p>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-col gap-3 sm:w-[320px]">
            <Link
              href="/#contact"
              className="inline-flex min-h-11 w-full items-center justify-between rounded-full bg-green-500 px-6 text-xs font-semibold text-black transition hover:bg-emerald-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 sm:min-h-12 sm:text-sm"
            >
              <span>Get Free Business Consultation</span>
              <ArrowRight size={16} className="shrink-0" />
            </Link>

            <Link
              href="/#projects"
              className="inline-flex min-h-11 w-full items-center justify-between rounded-full border border-white/20 bg-black/80 px-6 text-xs font-semibold text-white transition hover:border-white/40 hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:min-h-12 sm:text-sm"
            >
              <span>Explore Our Projects</span>
              <ArrowRight size={16} className="shrink-0" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}