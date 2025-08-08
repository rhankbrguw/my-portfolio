"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const HeroSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative flex items-center min-h-screen overflow-hidden"
    >
      <div className="portfolio-bg"></div>
      <div className="hero-gradient"></div>
      <div className="stars"></div>
      <div className="twinkling"></div>

      <div className="hero-content w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-6xl mx-auto flex flex-col items-center text-center md:items-start md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="h-[120px] sm:h-[140px] md:h-[160px] lg:h-[180px] flex items-center mb-4"
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
              className="text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl leading-tight drop-shadow-2xl"
              repeat={Infinity}
            />
          </motion.div>

          <motion.div variants={itemVariants} className="max-w-3xl mb-6 px-2">
            <p className="text-base md:text-xl lg:text-2xl text-gray-200 leading-relaxed drop-shadow-lg">
              A Computer Science student crafting clean, efficient, and
              user-friendly applications from concept to deployment.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-4 w-full max-w-sm sm:max-w-none sm:flex-row sm:justify-center md:justify-start"
          >
            <motion.div variants={buttonVariants} className="w-full sm:w-auto">
              <Link
                href="#projects"
                className="block w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 text-center min-w-[200px]"
              >
                View My Projects
              </Link>
            </motion.div>

            <motion.div variants={buttonVariants} className="w-full sm:w-auto">
              <Link
                href="#contact"
                className="block w-full sm:w-auto border-2 border-white/30 backdrop-blur-sm bg-white/10 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-white/20 hover:border-white/50 transition-all duration-300 text-center min-w-[200px]"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-8 text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start space-x-4 text-white/70">
              <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent to-white/50"></div>
              <span className="text-xs sm:text-sm font-medium tracking-wider uppercase">
                Scroll to explore
              </span>
              <div className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent to-white/50"></div>
            </div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
