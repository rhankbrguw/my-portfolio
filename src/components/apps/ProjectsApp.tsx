"use client";

import React, { useState } from "react";
import Image from "next/image";
import { projects } from "@/constants/projects";
import { soundService } from "@/services/soundService";

export const ProjectsApp: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const activeProject = projects[selectedIndex] ?? projects[0];

  const handleSelect = (idx: number) => {
    soundService.play("click");
    setSelectedIndex(idx);
  };

  return (
    <div className="flex flex-col h-full gap-2 text-xs font-sans text-[#111]">
      <div className="flex gap-2 bg-[#dfdfdf] border border-b-[#808080] p-1 text-[11px]">
        <span>Address:</span>
        <span className="bg-white px-2 border border-inset border-[#808080] flex-1 font-mono">
          C:\PROJECTS\{activeProject.title.toUpperCase().replace(/\s+/g, "_")}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 flex-1 overflow-hidden min-h-[300px]">
        <div className="border-2 border-inset border-[#808080] bg-white overflow-y-auto p-1 flex flex-col gap-0.5 max-h-[110px] md:max-h-none">
          {projects.map((proj, idx) => {
            const isSelected = idx === selectedIndex;
            return (
              <button
                key={proj.title}
                onClick={() => handleSelect(idx)}
                className={`flex items-center gap-2 px-1.5 py-1 text-left w-full border-0 outline-none text-xs ${
                  isSelected ? "bg-[#000080] text-white" : "hover:bg-[#efefef] text-[#111]"
                }`}
              >
                <span>[/]</span>
                <span>{proj.title}</span>
              </button>
            );
          })}
        </div>

        <div className="border-2 border-inset border-[#808080] bg-white p-3 overflow-y-auto flex flex-col gap-3">
          <div className="flex items-center justify-between border-b border-[#808080] pb-2">
            <h2 className="text-sm font-bold text-[#000080]">{activeProject.title}</h2>
            <span className="font-mono text-[10px] text-[#666]">0{selectedIndex + 1} of 0{projects.length}</span>
          </div>

          <div className="relative h-40 w-full overflow-hidden border border-[#808080] bg-[#111]">
            <Image
              src={activeProject.imageUrl}
              alt={activeProject.title}
              fill
              sizes="400px"
              className="object-cover"
            />
          </div>

          <p className="text-xs leading-relaxed text-[#222]">{activeProject.description}</p>

          <div>
            <span className="font-bold text-[11px] block mb-1">Tech Stack:</span>
            <div className="flex flex-wrap gap-1">
              {activeProject.techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-[#dfdfdf] border border-outset border-[#ffffff] px-1.5 py-0.5 text-[10px] font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-2 pt-2 border-t border-[#808080] mt-auto">
            <a
              href={activeProject.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundService.play("click")}
              className="button text-xs font-bold"
            >
              [~] GitHub
            </a>
            {activeProject.liveUrl && (
              <a
                href={activeProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundService.play("click")}
                className="button text-xs font-bold"
              >
                [&gt;] Launch Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
