"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const HeroSection: React.FC = () => {
  const ref = useRef(null);
  
  // Setup Parallax Scroll
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Text moves slightly faster and fades out
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        mass: 0.5,
      },
    },
  };

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex items-center min-h-screen overflow-hidden"
    >
      <div className="hero-content w-full px-4 sm:px-6 lg:px-8 relative z-10 mt-16">
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="max-w-6xl mx-auto flex flex-col items-center text-center lg:items-start lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="h-[140px] sm:h-[160px] md:h-[180px] flex items-center mb-4"
            variants={itemVariants}
          >
            <TypeAnimation
              sequence={[
                "Hello, I'm Raihan Akbar Gunawan.",
                2000,
                "Undergraduate Computer Science Student.",
                2000,
                "I Build Things.",
                2000,
                "Connect With Me!",
                2000,
              ]}
              wrapper="h1"
              speed={60}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight drop-shadow-2xl"
              repeat={Infinity}
            />
          </motion.div>

          <motion.div variants={itemVariants} className="max-w-2xl mb-6 px-2">
            <p className="text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed drop-shadow-lg">
              A Computer Science student crafting clean, efficient, and
              user-friendly applications from concept to deployment.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-4 w-full max-w-sm sm:max-w-none sm:flex-row sm:justify-center lg:justify-start"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="#projects"
                className="block w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold py-3 px-8 rounded-lg shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all duration-300 text-center min-w-[200px]"
              >
                View My Projects
              </Link>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
              <Link
                href="#contact"
                className="relative block w-full sm:w-auto border-2 border-white/30 backdrop-blur-sm bg-black/50 text-white font-semibold py-3 px-8 rounded-lg hover:border-white/80 transition-all duration-300 text-center min-w-[200px]"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 text-center lg:text-left"
          >
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="flex items-center justify-center lg:justify-start space-x-4 text-white/70"
            >
              <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent to-white/50"></div>
              <span className="text-xs sm:text-sm font-medium tracking-wider uppercase">
                Scroll to explore
              </span>
              <div className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent to-white/50"></div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
