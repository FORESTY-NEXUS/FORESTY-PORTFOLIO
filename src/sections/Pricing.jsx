import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    id: "basic",
    name: "Professional Business Website",
    price: "$25",
    description: "For businesses ready to look established and earn trust online.",
    features: [
      "A professional online presence",
      "Clear services and enquiry paths",
      "Mobile-friendly customer experience",
      "Built to help people find you",
      "A foundation for long-term growth",
    ],
    highlight: false,
  },
  {
    id: "pro",
    name: "Business Growth Website",
    price: "$35",
    description: "For teams that want more bookings, orders, and time back.",
    features: [
      "Everything in the business website",
      "Online bookings or order journeys",
      "Customer enquiries in one clear place",
      "Payments and follow-ups made simpler",
      "Automations that save hours every week",
    ],
    highlight: false,
  },
  {
    id: "premium",
    name: "Complete Business System",
    price: "$50",
    description:
      "For ambitious businesses ready to simplify their entire customer journey.",
    features: [
      "A premium customer-facing experience",
      "Customer and order management",
      "A dashboard for the work behind the scenes",
      "Business reporting that stays clear",
      "Systems designed to keep growing with you",
    ],
    highlight: true,
  },
];

export default function Pricing() {
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
    setActiveIndex(Math.min(index, pricingPlans.length - 1));
  }, []);

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="relative w-full bg-black py-24 px-5 md:px-10 overflow-hidden"
    >
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[800px] h-[400px] bg-[#2ecc71] opacity-[0.03] blur-[120px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-4"
        >
          <div className="h-[1px] w-8 bg-[#2ecc71]/40" />
          <span className="text-[#2ecc71] text-sm md:text-base font-semibold tracking-widest uppercase">
            Growth Packages
          </span>
          <div className="h-[1px] w-8 bg-[#2ecc71]/40" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl lg:text-5xl font-bold text-white text-center leading-tight mb-16"
        >
          Choose the next step for <br className="hidden sm:block" />
          <span className="text-[#2ecc71]">your business growth</span>
        </motion.h2>

        {/* Pricing Cards */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-3 gap-6 lg:gap-8 w-full max-w-5xl overflow-x-auto md:overflow-x-visible snap-x snap-mandatory scroll-smooth pb-4 pt-6 pl-[12vw] md:pl-0 pr-[12vw] md:pr-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {pricingPlans.map((plan, index) => (
            <div key={plan.id} className="w-[65vw] md:w-full shrink-0 snap-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className={`relative rounded-3xl p-8 flex flex-col h-full transition-all duration-300 ${
                plan.highlight
                  ? "bg-[#0c140c] border border-[#2ecc71]/50 shadow-[0_0_30px_rgba(46,204,113,0.15)] hover:shadow-[0_0_40px_rgba(46,204,113,0.25)] hover:-translate-y-2"
                  : "bg-[#0a0a0a] border border-white/5 hover:border-[#2ecc71]/30 hover:-translate-y-2 hover:bg-[#0c140c]"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#2ecc71] text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full shadow-[0_0_15px_rgba(46,204,113,0.4)]">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm min-h-[40px] mb-6">
                {plan.description}
              </p>

              <div className="flex items-end gap-1 mb-8">
                <span className="text-5xl font-black text-white">
                  {plan.price}
                </span>
              </div>

              <div className="w-full h-[1px] bg-white/10 mb-8" />

              <ul className="flex flex-col gap-4 flex-grow mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check
                      size={18}
                      className="text-[#2ecc71] mt-0.5 flex-shrink-0"
                      strokeWidth={3}
                    />
                    <span className="text-gray-300 text-sm leading-snug">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-auto w-full py-3.5 rounded-xl text-center text-sm font-semibold transition-all duration-300 bg-white/5 text-white hover:bg-[#2ecc71] hover:text-white border border-white/10 hover:border-transparent"
              >
                Let&apos;s Talk Growth
              </a>
            </motion.div>
            </div>
          ))}
        </div>

        {/* Swipe Indicator - Mobile Only */}
        <div className="flex flex-col items-center gap-3 mt-6 md:hidden">
          <div className="flex gap-1.5">
            {pricingPlans.map((_, i) => (
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
              ←
            </motion.span>
            Swipe to compare
            <motion.span
              animate={{ x: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            >
              →
            </motion.span>
          </motion.p>
        </div>
      </div>
    </section>
  );
}
