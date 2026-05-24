"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Background: React.FC = () => {
  const { scrollYProgress } = useScroll();

  // Parallax effects that span the entire page scroll
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const starsY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const twinklingY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);

  return (
    <div className="fixed inset-0 w-full h-full -z-50 overflow-hidden bg-black">
      {/* Base Image */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
        <div className="portfolio-bg w-full h-full absolute inset-0"></div>
      </motion.div>
      
      {/* Gradient overlay */}
      <div className="hero-gradient w-full h-full absolute inset-0 z-0"></div>

      {/* Parallax Stars */}
      <motion.div style={{ y: starsY }} className="absolute inset-0 w-full h-[150%] -top-[25%] z-10">
        <div className="stars w-full h-full absolute inset-0"></div>
      </motion.div>

      {/* Parallax Twinkling */}
      <motion.div style={{ y: twinklingY }} className="absolute inset-0 w-full h-[200%] -top-[50%] z-20">
        <div className="twinkling w-full h-full absolute inset-0"></div>
      </motion.div>
    </div>
  );
};

export default Background;
