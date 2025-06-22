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
    githubUrl: "https://github.com/Samaele13/rumah-kosim-sveltekit",
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
    githubUrl: "https://github.com/Samaele13/el-ngadu",
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <motion.section
      id="projects"
      className="py-20 sm:py-24 bg-panel px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 sm:text-4xl text-accent">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectData.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
