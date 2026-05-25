import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="relative min-h-screen w-full bg-black  text-white flex items-center justify-center px-6 overflow-hidden">

      {/* 🔥 Glowing Background */}
     

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-3xl text-center space-y-8"
      >
        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold">
          ABOUT FORESTY
        </h1>

        {/* Scroll Reveal Sections */}
        {[
          "Hello dear visitor  We are FORESTY, a modern web development agency focused on building clean, fast, and visually powerful websites.",
          "We specialize in React, Next.js, Node.js, and MongoDB  making production-ready digital experiences with strong UI/UX.",
          "From portfolios to full-stack applications, we turn ideas into scalable, modern web products.",
        ].map((text, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="text-lg md:text-xl text-gray-300 leading-relaxed"
          >
            {text}
          </motion.p>
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="text-sm md:text-3xl font-semibold text-gray-300 pt-4"
        >
          Built with precision. Designed for impact.
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;