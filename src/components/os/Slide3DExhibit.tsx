"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/constants/projects";
import { soundService } from "@/services/soundService";

interface Slide3DExhibitProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
}

export const Slide3DExhibit: React.FC<Slide3DExhibitProps> = ({ isOpen, onClose }) => {
  const [index, setIndex] = useState(0);
  const activeProj = projects[index] ?? projects[0];

  if (!isOpen) return null;

  const handlePrev = () => {
    soundService.play("blip");
    setIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    soundService.play("blip");
    setIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      role="dialog"
      aria-label="3D Slide Exhibit"
      className="fixed inset-0 z-[2800] flex items-center justify-center bg-black/70 p-2 sm:p-4 select-none backdrop-blur-xs overflow-y-auto"
    >
      <div className="window w-full max-w-xl sm:max-w-2xl border-2 border-[#ffcc00] shadow-[0_0_24px_rgba(255,204,0,0.35)] font-mono text-xs my-auto">
        <div className="title-bar py-1 px-2 flex items-center justify-between bg-gradient-to-r from-[#ff0044] via-[#990022] to-[#111118]">
          <span className="font-bold text-xs text-white tracking-wider">
            RETRO 3D EXHIBIT // STAGE 0{index + 1} OF 0{projects.length}
          </span>
          <div className="title-bar-controls">
            <button aria-label="Close" onClick={() => { soundService.play("click"); onClose(); }} />
          </div>
        </div>

        <div className="window-body m-1.5 sm:m-2 p-2 sm:p-3 bg-[#0a0a10] border border-[#ffcc00]/40 flex flex-col gap-2 sm:gap-3 text-[#f5f5f5]">
          <div className="flex justify-between items-center border-b border-[#333] pb-1.5 text-[9.5px] sm:text-[10px]">
            <span className="text-[#00ff66] font-bold tracking-widest uppercase">
              MISSION // {activeProj.title.toUpperCase()}
            </span>
            <span className="text-[#ffcc00] font-mono">
              SCORE: x10 [NOMINAL]
            </span>
          </div>

          {/* 3D Perspective Card Container */}
          <div className="relative min-h-[230px] sm:min-h-[280px] w-full overflow-hidden flex items-center justify-center [perspective:1000px] bg-[#010612] border border-[#005588]/50">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProj.title}
                initial={{ rotateY: 35, opacity: 0, scale: 0.85, z: -100 }}
                animate={{ rotateY: 0, opacity: 1, scale: 1, z: 0 }}
                exit={{ rotateY: -35, opacity: 0, scale: 0.85, z: -100 }}
                transition={{ type: "spring", stiffness: 320, damping: 25 }}
                className="relative h-full w-full p-1.5 sm:p-2.5 flex flex-col justify-between gap-1.5"
              >
                <div className="relative h-28 sm:h-36 w-full overflow-hidden border border-[#00e5ff]/50 bg-[#000]">
                  <Image
                    src={activeProj.imageUrl}
                    alt={activeProj.title}
                    fill
                    sizes="600px"
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-[#020b1e]/90 border border-[#00e5ff] px-2 py-0.5 text-[9px] text-[#00e5ff] font-bold">
                    3D VIEW_PORT [PERSPECTIVE]
                  </div>
                </div>

                <div className="flex flex-col gap-1 bg-[#020b1e]/60 p-1.5 border border-[#005588]/40">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-xs sm:text-sm font-bold text-[#ffaa00]">{activeProj.title}</h3>
                    <div className="flex flex-wrap gap-1">
                      {activeProj.techStack.map((tech) => (
                        <span key={tech} className="bg-[#002244] border border-[#00e5ff]/40 px-1.5 py-0.5 text-[8.5px] sm:text-[9px] text-[#00e5ff] whitespace-nowrap">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-[#c0d0e0] leading-snug line-clamp-2">
                    {activeProj.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex flex-wrap justify-between items-center gap-1.5 sm:gap-2 pt-2 border-t border-[#00e5ff]/30">
            <div className="flex gap-1.5 sm:gap-2">
              <button
                type="button"
                onClick={handlePrev}
                className="button px-2 sm:px-3 py-1 font-bold text-[10px] sm:text-xs text-[#000]"
              >
                &lt;&lt; PREV
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="button px-2 sm:px-3 py-1 font-bold text-[10px] sm:text-xs text-[#000]"
              >
                NEXT &gt;&gt;
              </button>
            </div>

            <div className="flex gap-1.5 sm:gap-2">
              <a
                href={activeProj.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundService.play("click")}
                className="button px-2 sm:px-2.5 py-1 text-[10px] sm:text-xs font-bold text-[#000]"
              >
                [~] GitHub
              </a>
              {activeProj.liveUrl && (
                <a
                  href={activeProj.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundService.play("click")}
                  className="button px-2 sm:px-2.5 py-1 text-[10px] sm:text-xs font-bold text-[#000]"
                >
                  [&gt;] Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
