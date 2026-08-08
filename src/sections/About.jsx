import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Rocket, Star, Leaf, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    title: 'More Growth',
    description: 'Every decision should help your business earn more attention, trust, and revenue.',
    icon: <Rocket size={40} className="mx-auto text-white" />,
  },
  {
    title: 'Less Work',
    description: 'We remove unnecessary back-and-forth so your team can focus on customers.',
    icon: <Star size={36} className="mx-auto text-white" />,
  },
  {
    title: 'Clear Systems',
    description: 'Bookings, orders, and information should be easy for everyone to manage.',
    icon: <Leaf size={36} className="mx-auto text-white" />,
  },
  {
    title: 'Long-Term Trust',
    description: 'Your business needs a professional home customers can rely on at any hour.',
    icon: <Shield size={36} className="mx-auto text-white" />,
  },
];

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-bg-letter', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'top 30%',
          scrub: 1,
        },
        y: 80,
        opacity: 0,
        stagger: 0.05,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen py-20 px-5 md:px-10 overflow-hidden bg-black"
    >
      {/* Background text */}
      <div className="flex justify-center mb-8 md:mb-12 select-none pointer-events-none">
        <div className="flex">
          {'ABOUT US'.split('').map((letter, i) => (
            <span key={i} className="about-bg-letter section-bg-text">
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Top section: Logo + intro */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="flex-shrink-0"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-2 border-forest-500/30 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
              <img
                src="/FORESTY LOGO.jfif"
                alt="Foresty"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Intro text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 green-glow-text">
              About <span className="text-forest-500">Foresty</span>
            </h2>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base max-w-xl">
              Foresty helps local businesses grow with an online presence that does more than simply exist.

We make it easier for customers to choose you, buy from you, book with you, and trust you—while making your day-to-day work lighter.
            </p>
           
          </motion.div>
        </div>

        {/* Values grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-8 text-center">
            What Your Business Gets
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                className="service-card-glow rounded-xl p-6 text-center group hover:border-forest-500/40 transition-all duration-300"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{value.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech stack summary */}
      {/* Tech stack summary */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-50px" }}
  transition={{ delay: 0.4, duration: 0.6 }}
  className="mt-16 text-center relative z-30 pointer-events-auto"
>
  <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Built For Business</h3>
  <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
    {['More visibility', '24/7 enquiries', 'Automatic bookings', 'Online orders', 'Secure payments', 'Customer management', 'Mobile friendly', 'Google ready', 'Ongoing support'].map(
      (tech, i) => (
        <motion.span
          key={tech}
          // Native clean entrance animation sequence
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ 
            delay: i * 0.02, 
            duration: 0.5,
            ease: "easeOut"
          }}
          
          // Smooth spring hover animation
          whileHover={{ 
            scale: 1.08,
            borderColor: "#22c55e", 
            color: "#22c55e",
            backgroundColor: "rgba(34, 197, 94, 0.15)",
          }}
          
          // Explicitly removed "transition-all duration-300" to eliminate stuttering
          className="px-4 py-2 rounded-full border border-forest-500/30 text-sm text-gray-300 bg-forest-900/50 cursor-pointer select-none"
        >
          {tech}
        </motion.span>
      )
    )}
  </div>
</motion.div>
      </div>
    </section>
  );
}
