"use client";
import React, { MouseEvent, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  techStack,
  githubUrl,
  liveUrl,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // 3D Tilt Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);
  const glareOpacity = useTransform(mouseXSpring, [-0.5, 0.5], [0, 0.3]);
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["-100%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["-100%", "100%"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleCardClick = () => {
    window.open(githubUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[#1A1A1A] rounded-xl overflow-hidden cursor-pointer h-full flex flex-col relative group"
    >
      {/* Glare Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-xl z-20"
        style={{
          background: "radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 60%)",
          opacity: glareOpacity,
          left: glareX,
          top: glareY,
          width: "200%",
          height: "200%",
          mixBlendMode: "soft-light",
          transform: "translate(-25%, -25%)",
        }}
      />
      
      {/* Glow Border on Hover */}
      <div className="absolute -inset-[1px] bg-gradient-to-r from-teal-500 to-emerald-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10"></div>
      
      <div 
        className="relative w-full h-48 bg-[#1A1A1A] z-10"
        style={{ transform: "translateZ(30px)" }}
      >
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>

      <div 
        className="p-6 flex-1 flex flex-col bg-[#1A1A1A] z-10 rounded-b-xl"
        style={{ transform: "translateZ(40px)" }}
      >
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4 text-sm leading-relaxed flex-1">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="bg-[#333] text-xs text-[#E5E5E5] px-2 py-1 rounded-full border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-auto">
          <Link
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 text-[#E5E5E5] hover:text-[#3EB489] transition-colors font-semibold"
          >
            <Github size={20} />
            GitHub
          </Link>
          {liveUrl && (
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-[#3EB489] font-bold hover:underline"
            >
              Live Demo
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
