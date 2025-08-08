"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  } as const;

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  } as const;

  const textContainerVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  } as const;

  const textItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  } as const;

  return (
    <section
      id="about"
      className="bg-black pt-16 pb-20 sm:pt-20 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <motion.h2
        className="text-3xl font-bold mb-8 text-center sm:text-4xl text-accent md:hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
      >
        <motion.div variants={imageVariants}>
          <div className="relative aspect-square max-w-md mx-auto">
            <Image
              src="/profile.png"
              alt="Raihan Akbar Gunawan"
              fill
              className="object-cover rounded-lg shadow-2xl"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </motion.div>

        <motion.div
          className="text-center md:text-left"
          variants={textContainerVariants}
        >
          <motion.h2
            className="hidden md:block text-3xl font-bold mb-6 sm:text-4xl text-accent"
            variants={textItemVariants}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300 leading-relaxed"
            variants={textItemVariants}
          >
            Hello! I&apos;m Raihan Akbar Gunawan, a Computer Science student
            based in Jakarta with a strong passion for technology and software
            development. I specialize in building full-stack web applications
            and enjoy diving deep into new technologies.
          </motion.p>
          <motion.p
            className="mt-4 text-lg text-gray-300 leading-relaxed"
            variants={textItemVariants}
          >
            I thrive on solving complex problems and turning ideas into clean,
            efficient, and user-friendly code. I&apos;m always eager to learn
            and collaborate on exciting projects.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
