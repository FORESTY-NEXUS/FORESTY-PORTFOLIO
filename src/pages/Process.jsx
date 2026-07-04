import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    id: "01",
    title: "Research",
    description: "Determine your needs, target audience, and business goals.",
    icon: Search,
  },
  {
    id: "02",
    title: "Propose",
    description: "What can we do to help you succeed? We map out the strategy.",
    icon: Lightbulb,
  },
  {
    id: "03",
    title: "Design",
    description:
      "Designing a site that stands out & makes a meaningful connection.",
    icon: PenTool,
  },
  {
    id: "04",
    title: "Build",
    description:
      "Putting the pieces into action to create the final working product.",
    icon: Code,
  },
  {
    id: "05",
    title: "Write",
    description:
      "Crafting copy that empathizes and provides answers to your visitors.",
    icon: Edit3,
  },
  {
    id: "06",
    title: "Revise",
    description:
      "Your input is critical. We ensure the site represents your company well.",
    icon: RefreshCw,
  },
  {
    id: "07",
    title: "Approve",
    description:
      "Give us your thumbs up. We prepare to present your site to the world.",
    icon: ThumbsUp,
  },
  {
    id: "08",
    title: "Launch",
    description: "Congratulations! Your new high-performance website is live.",
    icon: Rocket,
  },
  {
    id: "09",
    title: "Maintain",
    description:
      "Keeping it up-to-date is critical to the long-term success of your website.",
    icon: Settings,
  },
];

export default function Process() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        "(max-width: 768px)": () => {
          const cards = gsap.utils.toArray(".process-card-stack");
          cards.forEach((card, i) => {
            const innerCard = card.querySelector(".process-scale-wrapper");
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
            Our Process
          </span>
          <div className="h-[1px] w-8 bg-[#2ecc71]/40" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center leading-tight mb-16"
        >
          How We Bring Your <br className="hidden sm:block" />
          <span className="text-[#2ecc71]">Vision to Life</span>
        </motion.h2>

        {/* Grid */}
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className="sticky top-[15vh] md:static w-full process-card-stack">
                <div className="process-scale-wrapper w-full h-full">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="h-full group relative rounded-2xl bg-[#0a0a0a] border border-white/5 p-8 flex flex-col items-center text-center hover:border-[#2ecc71]/30 hover:bg-[#0c140c] transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(46,204,113,0.05)] overflow-hidden"
                  >
                    {/* Background Numbering Watermark */}
                    <span className="absolute -bottom-4 -right-2 text-[100px] font-black text-white/[0.02] group-hover:text-[#2ecc71]/[0.05] transition-colors duration-500 pointer-events-none select-none">
                      {step.id}
                    </span>

                    <div className="relative w-16 h-16 rounded-full bg-[#161616] border border-white/10 group-hover:border-[#2ecc71]/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 z-10">
                      <Icon
                        size={26}
                        className="text-gray-400 group-hover:text-[#2ecc71] transition-colors duration-300"
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 tracking-wide z-10">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-[250px] z-10">
                      {step.description}
                    </p>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
