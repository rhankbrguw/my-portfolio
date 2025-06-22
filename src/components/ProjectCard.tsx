
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, techStack, githubUrl, liveUrl }) => {
  return (
    <div className="bg-[#1A1A1A] rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#3EB489]/20 hover:-translate-y-2">
      <div className="relative w-full h-48">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4 text-sm leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech) => (
            <span key={tech} className="bg-[#333] text-xs text-[#E5E5E5] px-2 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
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
                className="text-[#3EB489] font-bold hover:underline"
              >
                Live Demo
              </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;