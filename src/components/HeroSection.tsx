"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative flex items-center min-h-screen overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center md:items-start md:text-left">
        {/* Fixed height container to prevent jumping */}
        <div className="h-[120px] sm:h-[140px] md:h-[160px] flex items-center">
          <TypeAnimation
            sequence={[
              "Hello, I'm Raihan Akbar Gunawan.",
              1500,
              "I'm a Computer Science Student.",
              1500,
              "I Build Things for the Web.",
              1500,
              "Connect With Me!.",
              1500,
            ]}
            wrapper="h1"
            speed={50}
            className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl leading-tight"
            repeat={Infinity}
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 max-w-2xl text-lg text-gray-400"
        >
          A Computer Science student crafting clean, efficient, and
          user-friendly applications from concept to deployment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-4"
        >
          <Link
            href="#projects"
            className="w-full sm:w-auto bg-accent text-background font-bold py-3 px-8 rounded-lg hover:bg-[#3EB489] transition-all text-center"
          >
            View My Projects
          </Link>
          <Link
            href="#contact"
            className="w-full sm:w-auto border border-accent text-accent font-bold py-3 px-8 rounded-lg hover:bg-[#3EB489] hover:text-background hover:border-[#3EB489] transition-all text-center"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
export default HeroSection;
