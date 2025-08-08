"use client";

import React from "react";
import SkillTag from "./SkillTag";
import { motion } from "framer-motion";
import {
  HtmlIcon,
  CssIcon,
  JsIcon,
  TsIcon,
  DartIcon,
  PhpIcon,
  NodeIcon,
  MysqlIcon,
  ReactIcon,
  LaravelIcon,
  SvelteIcon,
  FlutterIcon,
  BootstrapIcon,
  TailwindIcon,
  ExpressIcon,
  GitIcon,
} from "./icons/TechIcons";

const skills = [
  {
    name: "HTML",
    icon: <HtmlIcon />,
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    icon: <CssIcon />,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "JavaScript",
    icon: <JsIcon />,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    icon: <TsIcon />,
    url: "https://www.typescriptlang.org/",
  },
  { name: "React", icon: <ReactIcon />, url: "https://react.dev/" },
  { name: "Svelte", icon: <SvelteIcon />, url: "https://svelte.dev/" },
  { name: "Node.js", icon: <NodeIcon />, url: "https://nodejs.org/" },
  { name: "Express.js", icon: <ExpressIcon />, url: "https://expressjs.com/" },
  { name: "PHP", icon: <PhpIcon />, url: "https://www.php.net/" },
  { name: "Laravel", icon: <LaravelIcon />, url: "https://laravel.com/" },
  { name: "MySQL", icon: <MysqlIcon />, url: "https://dev.mysql.com/" },
  {
    name: "Tailwind CSS",
    icon: <TailwindIcon />,
    url: "https://tailwindcss.com/",
  },
  {
    name: "Bootstrap",
    icon: <BootstrapIcon />,
    url: "https://getbootstrap.com/",
  },
  { name: "Git", icon: <GitIcon />, url: "https://git-scm.com/" },
  { name: "Dart", icon: <DartIcon />, url: "https://dart.dev/" },
  { name: "Flutter", icon: <FlutterIcon />, url: "https://flutter.dev/" },
];

const SkillsSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  } as const;

  return (
    <section
      id="skills"
      className="bg-panel py-20 sm:py-24 px-4 sm:px-6 lg:px-8"
    >
      <motion.h2
        className="text-3xl font-bold text-center mb-12 sm:text-4xl text-accent"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Tech Stack
      </motion.h2>

      <motion.div
        className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
      >
        {skills.map((skill) => (
          <motion.div key={skill.name} variants={itemVariants}>
            <SkillTag name={skill.name} icon={skill.icon} url={skill.url} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SkillsSection;
