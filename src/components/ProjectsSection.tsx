"use client";

import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const projectData = [
  {
    title: "Rumah Kosim - Book Management",
    description:
      "A full-stack web application for managing books, built with SvelteKit, featuring user authentication and a robust book management system.",
    imageUrl: "/rumah-kosim.png",
    techStack: ["SvelteKit", "Tailwind CSS", "JWT", "bcrypt", "MySQL"],
    githubUrl: "https://github.com/rhankbrguw/rumah-kosim-sveltekit",
    liveUrl: "https://rumah-kosim-books.up.railway.app/",
  },
  {
    title: "El Ngadu - Public Complaint App",
    description:
      "A responsive web application for public complaint submission and management. Built with a modern frontend using React, TypeScript, and Shadcn UI, and powered by a custom native PHP backend.",
    imageUrl: "/el-ngadu.png",
    techStack: [
      "React",
      "TypeScript",
      "PHP (Native)",
      "Tailwind CSS",
      "Shadcn UI",
    ],
    githubUrl: "https://github.com/rhankbrguw/el-ngadu",
    liveUrl: "https://el-ngadu.noxturne.my.id/",
  },
];

const ProjectsSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  } as const;

  return (
    <section id="projects" className="py-20 px-6 bg-black">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
          variants={itemVariants}
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {projectData.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="h-full"
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
