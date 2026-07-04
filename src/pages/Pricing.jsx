import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    id: "basic",
    name: "Frontend Essentials",
    price: "$25",
    description: "Perfect for landing pages and simple personal portfolios.",
    features: [
      "Custom UI/UX design",
      "Frontend development only",
      "Basic animations (fade, scale)",
      "Fully responsive layout",
      "Standard performance optimization",
    ],
    highlight: false,
  },
  {
    id: "pro",
    name: "Full Stack Solution",
    price: "$35",
    description: "A complete website with robust backend functionality.",
    features: [
      "Custom UI/UX design",
      "Frontend & Backend development",
      "Database integration",
      "Dynamic data handling",
      "Basic interactive animations",
    ],
    highlight: false,
  },
  {
    id: "premium",
    name: "Premium Experience",
    price: "$50",
    description:
      "High-end web application with complex, immersive interactions.",
    features: [
      "High-quality premium design",
      "Complex custom animations (GSAP)",
      "Full Stack (Frontend + Backend)",
      "Advanced scroll effects",
      "Top-tier performance & SEO",
    ],
    highlight: true,
  },
];

export default function Pricing() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

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
            Pricing
          </span>
          <div className="h-[1px] w-8 bg-[#2ecc71]/40" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl lg:text-5xl font-bold text-white text-center leading-tight mb-16"
        >
          Premium Quality at <br className="hidden sm:block" />
          <span className="text-[#2ecc71]">Startup Prices</span>
        </motion.h2>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full max-w-5xl">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
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
                Choose Plan
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
