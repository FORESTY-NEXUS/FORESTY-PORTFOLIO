import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Check, X } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhatWeDo() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        "(max-width: 768px)": () => {
          const cards = gsap.utils.toArray(".wwd-card-stack");
          cards.forEach((card, i) => {
            const innerCard = card.querySelector(".wwd-scale-wrapper");
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
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="what-we-do"
      ref={sectionRef}
      className="relative w-full bg-black py-24 px-5 md:px-10 overflow-x-clip flex flex-col items-center justify-center"
    >
      {/* Background Subtle Glow matching the aesthetic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[800px] h-[400px] bg-[#2ecc71] opacity-[0.03] blur-[100px] pointer-events-none rounded-full" />

      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto w-full">
        {/* Subtle Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="h-[1px] w-8 bg-[#2ecc71]/40" />
          <span className="text-[#2ecc71] text-sm md:text-base font-semibold tracking-widest uppercase">
            What We Do
          </span>
          <div className="h-[1px] w-8 bg-[#2ecc71]/40" />
        </motion.div>

        {/* Main Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center leading-tight mb-8"
        >
          We Build Websites <br className="hidden sm:block" />
          That <span className="text-[#2ecc71]">Grow Your Business</span>
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-400 text-base md:text-lg max-w-3xl leading-relaxed mb-16"
        >
          We design and develop high-performance custom websites for all types
          of businesses including restaurants, salons, clinics, academies, real
          estate, eCommerce, gyms, law firms, and more. If you have a business,
          we have a tailored solution to help it grow online.
        </motion.p>

        {/* Cards Container */}
        <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl relative z-10">
          {/* Left Card: What We Do */}
          <div className="sticky top-[15vh] md:static w-full wwd-card-stack">
            <div className="wwd-scale-wrapper w-full h-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="h-full flex-1 rounded-2xl bg-[#0a0a0a] border border-[#2ecc71]/20 p-8 md:p-10 shadow-[0_0_30px_rgba(46,204,113,0.05)] flex flex-col items-start gap-6 hover:border-[#2ecc71]/40 transition-colors duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-2">What We Do</h3>
                <ul className="flex flex-col gap-4">
                  {[
                    "Custom-coded web applications",
                    "Premium, user-centric interface design",
                    "High-performance headless architectures",
                    "Complex interactive animations",
                  ].map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-0.5 text-[#2ecc71] flex-shrink-0">
                        <Check size={18} strokeWidth={3} />
                      </div>
                      <span className="text-gray-300 text-sm md:text-[15px] leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Right Card: What We Don't Do */}
          <div className="sticky top-[15vh] md:static w-full wwd-card-stack">
            <div className="wwd-scale-wrapper w-full h-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="h-full flex-1 rounded-2xl bg-[#0a0a0a] border border-red-500/20 p-8 md:p-10 shadow-[0_0_30px_rgba(239,68,68,0.05)] flex flex-col items-start gap-6 hover:border-red-500/40 transition-colors duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-2">What We Don't Do</h3>
                <ul className="flex flex-col gap-4">
                  {[
                    "Pre-made drag-and-drop templates",
                    "Cookie-cutter WordPress themes",
                    "Rushed, low-quality deliverables",
                    "Compromising on performance for speed",
                  ].map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-0.5 text-[#ef4444] flex-shrink-0">
                        <X size={18} strokeWidth={3} />
                      </div>
                      <span className="text-gray-300 text-sm md:text-[15px] leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
