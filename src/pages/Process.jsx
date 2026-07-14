import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Search,
  Lightbulb,
  PenTool,
  Code,
  Edit3,
  RefreshCw,
  ThumbsUp,
  Rocket,
  Settings,
} from "lucide-react";

const processSteps = [
  {
    id: "01",
    title: "Listen",
    description: "We learn how your business works and where time or sales are being lost.",
    icon: Search,
  },
  {
    id: "02",
    title: "Plan",
    description: "We map the clearest path to more customers and less manual work.",
    icon: Lightbulb,
  },
  {
    id: "03",
    title: "Shape",
    description: "We make the customer journey clear, trustworthy, and easy to act on.",
    icon: PenTool,
  },
  {
    id: "04",
    title: "Build",
    description: "We turn the plan into the system your customers and team will use.",
    icon: Code,
  },
  {
    id: "05",
    title: "Guide",
    description: "We answer the questions customers need answered before they call.",
    icon: Edit3,
  },
  {
    id: "06",
    title: "Review",
    description: "You stay involved and approve the details that represent your business.",
    icon: RefreshCw,
  },
  {
    id: "07",
    title: "Prepare",
    description: "We make sure every route to an order, booking, or enquiry is ready.",
    icon: ThumbsUp,
  },
  {
    id: "08",
    title: "Launch",
    description: "Your business is ready to welcome customers around the clock.",
    icon: Rocket,
  },
  {
    id: "09",
    title: "Grow",
    description: "We keep improving the foundations as your business moves forward.",
    icon: Settings,
  },
];

export default function Process() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative w-full bg-black py-24 px-5 md:px-10 overflow-x-clip"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] max-w-[1000px] h-[500px] bg-[#2ecc71] opacity-[0.02] blur-[120px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col items-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-4"
        >
          <div className="h-[1px] w-8 bg-[#2ecc71]/40" />
          <span className="text-[#2ecc71] text-sm md:text-base font-semibold tracking-widest uppercase">
            Your Growth Plan
          </span>
          <div className="h-[1px] w-8 bg-[#2ecc71]/40" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center leading-tight mb-16"
        >
          From your first idea to <br className="hidden sm:block" />
          <span className="text-[#2ecc71]">real business momentum</span>
        </motion.h2>

        {/* Grid - 2 cols mobile, 2 cols md, 3 cols lg */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.08 }}
                className="flex flex-col items-center"
              >
                {/* Step Number - Outside Card */}
                <span className="text-[#2ecc71] text-xs font-bold tracking-widest mb-2 md:mb-3">
                  STEP {step.id}
                </span>

                {/* Card */}
                <div className="w-full h-full group relative rounded-2xl bg-[#0c0c0c] md:bg-[#0a0a0a] border border-white/5 p-5 md:p-8 flex flex-col items-center text-center hover:border-[#2ecc71]/30 hover:bg-[#0c140c] transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(46,204,113,0.05)] overflow-hidden">
                  {/* Background Numbering Watermark */}
                  <span className="absolute -bottom-4 -right-2 text-[80px] md:text-[100px] font-black text-white/[0.02] group-hover:text-[#2ecc71]/[0.05] transition-colors duration-500 pointer-events-none select-none">
                    {step.id}
                  </span>

                  <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#161616] border border-white/10 group-hover:border-[#2ecc71]/30 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-500 z-10">
                    <Icon
                      size={22}
                      className="text-gray-400 group-hover:text-[#2ecc71] transition-colors duration-300 md:w-[26px] md:h-[26px]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-sm md:text-xl font-bold text-white mb-2 md:mb-3 tracking-wide z-10">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-[11px] md:text-sm leading-relaxed max-w-[250px] z-10">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
