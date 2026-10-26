"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { soundService } from "@/services/soundService";

interface RetroGazetteNewsProps {
  readonly onOpenProjects: () => void;
  readonly onOpenAbout: () => void;
}

export const RetroGazetteNews: React.FC<RetroGazetteNewsProps> = ({
  onOpenProjects,
  onOpenAbout,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return (
      <button
        type="button"
        onClick={() => {
          soundService.play("chord");
          setIsVisible(true);
        }}
        className="fixed bottom-12 left-2 sm:left-4 z-30 button px-2 py-0.5 font-mono text-[9px] text-[#000] bg-[#fff] border border-[#000] shadow-md cursor-pointer hidden lg:inline-block"
      >
        [NEWS] CYBER GAZETTE
      </button>
    );
  }

  return (
    <motion.div
      drag
      dragMomentum={false}
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      className="fixed top-24 left-3 sm:left-32 z-20 w-72 sm:w-80 max-w-[calc(100vw-24px)] font-mono select-none cursor-grab active:cursor-grabbing text-xs hidden md:block"
    >
      <div className="window shadow-[4px_4px_14px_rgba(0,0,0,0.9)] border-2 border-[#111] bg-[#fbf9f4] overflow-hidden">
        {/* Newspaper Title Bar */}
        <div className="title-bar py-0.5 px-1.5 flex items-center justify-between bg-[#111] text-[#fff]">
          <span className="font-bold text-[9px] tracking-wider uppercase">
            DAILY CYBER GAZETTE // EDITION #01
          </span>
          <div className="title-bar-controls">
            <button
              aria-label="Close"
              onClick={() => {
                soundService.play("click");
                setIsVisible(false);
              }}
            />
          </div>
        </div>

        {/* Newspaper Body */}
        <div className="window-body m-1 p-2 bg-[#f4efe4] border border-[#808080] text-[#111] flex flex-col gap-1.5 overflow-hidden">
          {/* Newspaper Masthead */}
          <div className="border-b-2 border-double border-[#222] pb-1 text-center overflow-hidden">
            <div className="flex justify-between items-center text-[7px] text-[#555] pt-0.5 font-bold uppercase">
              <span>VOL. XXIV</span>
              <span>JKT 31°C [CLEAR]</span>
              <span>FREE EDITION</span>
            </div>
          </div>

          {/* Lead Headline */}
          <div className="flex flex-col gap-1 overflow-hidden">
            <span className="bg-[#cc0000] text-white px-1 py-0.2 text-[7.5px] font-black uppercase inline-block self-start">
              BREAKING NEWS
            </span>
            <h3 className="font-extrabold text-[10.5px] sm:text-[11px] leading-tight text-[#000080] break-words">
              RAIHAN SHIPS FULL-STACK RESILIENT WEB PLATFORMS
            </h3>
            <p className="text-[8.5px] sm:text-[9px] leading-snug text-[#333] break-words">
              Senior CS student authors high-performance software combining
              React 19, TypeScript, and classic web design.
            </p>
          </div>

          {/* Micro Editorial Columns */}
          <div className="grid grid-cols-2 gap-1.5 pt-1 border-t border-[#808080] text-[8px] text-[#222]">
            <div className="bg-[#fff] p-1.5 border border-[#aaa] flex flex-col justify-between overflow-hidden">
              <div>
                <span className="font-bold text-[#008000] block text-[8px]">
                  [01. Dossier]
                </span>
                <p className="leading-tight text-[7.5px] mt-0.5 text-[#333] break-words">
                  Developer history &amp; architecture bio.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  soundService.play("click");
                  onOpenAbout();
                }}
                className="mt-1 text-[7.5px] text-[#000080] font-bold underline text-left cursor-pointer"
              >
                Read Bio &gt;&gt;
              </button>
            </div>
            <div className="bg-[#fff] p-1.5 border border-[#aaa] flex flex-col justify-between overflow-hidden">
              <div>
                <span className="font-bold text-[#cc0000] block text-[8px]">
                  [02. Releases]
                </span>
                <p className="leading-tight text-[7.5px] mt-0.5 text-[#333] break-words">
                  5 production web projects with live demos.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  soundService.play("click");
                  onOpenProjects();
                }}
                className="mt-1 text-[7.5px] text-[#cc0000] font-bold underline text-left cursor-pointer"
              >
                View Works &gt;&gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
