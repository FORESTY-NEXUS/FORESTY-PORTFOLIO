import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SoftwareCTA() {
  return (
    <section className="px-5 pb-20 pt-10 bg-[#091006]">
      <div className="mx-auto max-w-7xl relative overflow-hidden rounded-[2rem] bg-[#0c1408] border border-green-500/20 px-7 py-14 text-white sm:px-14 sm:py-20 shadow-[0_0_60px_rgba(180,230,58,0.05)]">
        
        {/* Decorative Background Elements */}
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-green-500/5 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-green-500/5 blur-3xl pointer-events-none" />
        
        {/* Tree silhouette overlay mimicking the rest of the site (assuming this adds to the "forest-themed" feel) */}
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 20\' preserveAspectRatio=\'none\'%3E%3Cpath d=\'M0,20 L0,15 L5,10 L10,15 L15,8 L20,15 L25,12 L30,18 L35,10 L40,16 L45,12 L50,15 L55,9 L60,14 L65,11 L70,17 L75,8 L80,16 L85,12 L90,15 L95,10 L100,16 L100,20 Z\' fill=\'%232ecc71\'/%3E%3C/svg%3E")', backgroundSize: '100px 100%', backgroundRepeat: 'repeat-x', backgroundPosition: 'bottom' }}></div>

        <div className="relative z-10 flex flex-col items-start max-w-3xl">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl text-white">
            Need Custom Software <br />
            for <span className="text-green-500">Your Business?</span>
          </h2>
          <p className="mt-6 text-lg text-white/70 max-w-xl">
            Don&apos;t see the software you need? We can build a custom solution around the way your business works.
          </p>
          
          <div className="mt-10 flex flex-col gap-4 sm:flex-row w-full sm:w-auto">
            <Link 
              href="https://wa.me/923195403032" 
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-green-500 px-6 font-semibold text-[#10200b] transition duration-300 hover:bg-green-400 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-500"
            >
              Get Free Consultation <ArrowRight size={16} />
            </Link>
            
            <Link 
              href="/contact" 
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-6 font-semibold text-white transition duration-300 hover:border-green-500 hover:text-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-500"
            >
              Contact Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
