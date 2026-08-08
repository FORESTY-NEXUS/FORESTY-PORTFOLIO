import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { Check, X } from "lucide-react";
 // Adjust path as needed
// The ../ means "go up one folder" out of 'pages', then into 'components'
import InteractiveDots from "../components/InteractiveDots";
const cardData = [
  { id: 'do', title: 'What We Unlock' },
  { id: 'dont', title: 'What Holds You Back' },
];

export default function WhatWeDo() {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollLeft = el.scrollLeft;
    const cardWidth = el.querySelector(':scope > div')?.offsetWidth || 1;
    const gap = 24;
    const index = Math.round(scrollLeft / (cardWidth + gap));
    setActiveIndex(Math.min(index, cardData.length - 1));
  }, []);

  return (
    <section
      id="what-we-do"
      ref={sectionRef}
      className="relative w-full bg-black py-24 px-5 md:px-10 overflow-x-clip flex flex-col items-center justify-center"
    >
      {/* Interactive Dots Canvas Background */}
      <InteractiveDots backgroundColor="#000000" dotColor="#2ecc71" />

      {/* Background Subtle Glow matching the aesthetic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[800px] h-[400px] bg-[#2ecc71] opacity-[0.03] blur-[100px] pointer-events-none rounded-full z-0" />

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
            Built for Growth
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
          Every successful business <br className="hidden sm:block" />
          starts with a <span className="text-[#2ecc71]">strong seed.</span>
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-400 text-base md:text-lg max-w-3xl leading-relaxed mb-16"
        >
          We help businesses turn attention into customers, remove repetitive work,
          and build simple systems that keep working 24/7. Every decision is shaped
          around more revenue, more time, and a calmer day-to-day.
        </motion.p>

        {/* Cards Container / Carousel */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex md:flex-row gap-6 w-full max-w-4xl relative z-10 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory scroll-smooth pb-4 pt-4 pl-[12vw] md:pl-0 pr-[12vw] md:pr-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Left Card: What We Do */}
          <div className="w-[65vw] md:w-1/2 shrink-0 snap-center">
            <div className="w-full h-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="h-full flex-1 rounded-2xl bg-black md:bg-[#0a0a0a] border border-[#2ecc71]/20 p-8 md:p-10 shadow-[0_0_30px_rgba(46,204,113,0.05)] flex flex-col items-start gap-6 hover:border-[#2ecc71]/40 transition-colors duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-2">What We Unlock</h3>
                <ul className="flex flex-col gap-4">
                  {[
                    "More customers who are ready to act",
                    "Bookings and orders that arrive automatically",
                    "Less time spent repeating the same tasks",
                    "A professional presence that builds trust",
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
          <div className="w-[75vw] md:w-1/2 shrink-0 snap-center">
            <div className="w-full h-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="h-full flex-1 rounded-2xl bg-black md:bg-[#0a0a0a] border border-red-500/20 p-8 md:p-10 shadow-[0_0_30px_rgba(239,68,68,0.05)] flex flex-col items-start gap-6 hover:border-red-500/40 transition-colors duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-2">What Holds You Back</h3>
                <ul className="flex flex-col gap-4">
                  {[
                    "Customers leaving before they can understand your offer",
                    "Appointments and orders buried in WhatsApp chats",
                    "Hours lost to routine questions and manual work",
                    "A business that is invisible when people search online",
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

        {/* Swipe Indicator - Mobile Only */}
        <div className="flex flex-col items-center gap-3 mt-6 md:hidden">
          <div className="flex gap-1.5">
            {cardData.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? 'w-6 bg-[#2ecc71]'
                    : 'w-1.5 bg-white/20'
                }`}
              />
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-white/30 text-xs tracking-wider uppercase flex items-center gap-2"
          >
            <motion.span
              animate={{ x: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            >
              &larr;
            </motion.span>
            Swipe
            <motion.span
              animate={{ x: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            >
              &rarr;
            </motion.span>
          </motion.p>
        </div>
      </div>
    </section>
  );
}
