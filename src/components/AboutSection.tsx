"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutSection: React.FC = () => {
  return (
    <motion.section
      id="about"
      className="bg-panel pt-16 pb-20 sm:pt-20 sm:pb-24 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Mobile-First Title (visible only on mobile) */}
      <h2 className="text-3xl font-bold mb-8 text-center sm:text-4xl md:hidden text-accent">
        About Me
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative aspect-square max-w-md mx-auto">
            <Image
              src="/profile.png"
              alt="Raihan Akbar Gunawan"
              fill
              className="object-cover rounded-lg shadow-2xl"
            />
          </div>
        </motion.div>

        {/* Text Content Column */}
        <div className="text-center md:text-left">
          {/* Desktop Title (hidden on mobile) */}
          <h2 className="hidden md:block text-3xl font-bold mb-6 sm:text-4xl text-accent">
            About Me
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Hello! I&apos;m Raihan Akbar Gunawan, a Computer Science student
            based in Jakarta with a strong passion for technology and software
            development. I specialize in building full-stack web applications
            and enjoy diving deep into new technologies.
          </p>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            I thrive on solving complex problems and turning ideas into clean,
            efficient, and user-friendly code. I&apos;m always eager to learn
            and collaborate on exciting projects.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
