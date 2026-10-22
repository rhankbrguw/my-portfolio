"use client";

import React from "react";
import { portfolioStrings } from "@/constants/strings";
import { routePaths } from "@/constants/routes";
import { soundService } from "@/services/soundService";

interface AboutAppProps {
  readonly onOpenProjects: () => void;
}

export const AboutApp: React.FC<AboutAppProps> = ({ onOpenProjects }) => {
  return (
    <div className="flex flex-col gap-2 sm:gap-3 font-mono text-xs text-[#111] max-w-full">
      {/* 8-bit ASCII Header Strip */}
      <div className="bg-[#020b1e] border-2 border-inset border-[#00e5ff] p-1.5 sm:p-2 text-[#00e5ff] shadow-inner">
        <div className="flex justify-between items-center text-[9px] sm:text-[10px] pb-1 border-b border-[#00e5ff]/30">
          <span className="font-bold text-[#ffaa00]">╔═ IDENT: 0xRA_SYS ═╗</span>
          <span className="text-[8px] sm:text-[9px] bg-[#0d2b7a] px-1 text-white">NOMINAL</span>
        </div>
        <div className="flex gap-2 sm:gap-2.5 items-center mt-1.5">
          <div className="h-11 w-11 sm:h-13 sm:w-13 shrink-0 border-2 border-[#ffaa00] bg-[#001133] flex items-center justify-center font-bold text-lg sm:text-xl text-[#00e5ff] shadow-md">
            RA
          </div>
          <div className="flex flex-col gap-0.5 min-w-0 flex-1">
            <p
              className="font-bold text-white leading-tight break-words"
              style={{ fontSize: "clamp(10.5px, 3vw, 13px)", lineHeight: "1.25" }}
            >
              {portfolioStrings.heroIntro}
            </p>
            <p className="text-[9px] sm:text-[10px] text-[#ffcc00] leading-tight break-words">
              &gt;&gt; {portfolioStrings.heroStudent}
            </p>
            <p className="text-[8px] sm:text-[9px] text-[#00ff66]">STATUS: ACTIVE FULL-STACK ARCHITECT</p>
          </div>
        </div>
      </div>

      {/* Narrative Section with Retro Indents */}
      <div className="bg-[#f8f9fa] border border-[#808080] p-2 sm:p-2.5 space-y-1 text-[10px] sm:text-[11px] leading-relaxed text-[#222]">
        <p className="font-bold text-[#000080]">&gt; SYSTEM SUMMARY:</p>
        <p className="pl-1.5 sm:pl-2 border-l-2 border-[#000080]">{portfolioStrings.aboutParagraphOne}</p>
        <p className="pl-1.5 sm:pl-2 border-l-2 border-[#5bd3a1] pt-0.5">{portfolioStrings.aboutParagraphTwo}</p>
      </div>

      {/* Compact Responsive Metrics Grid */}
      <div className="grid grid-cols-3 gap-1 sm:gap-1.5">
        {portfolioStrings.stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center justify-center border-2 border-inset border-[#808080] bg-[#dfdfdf] p-1 sm:p-1.5"
          >
            <span className="font-bold text-[11px] sm:text-xs md:text-sm text-[#000080]">{stat.value}</span>
            <span className="text-[7px] sm:text-[8px] md:text-[9px] text-[#555] uppercase text-center leading-tight">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-between items-center gap-1.5 sm:gap-2 pt-1.5 sm:pt-2 border-t border-[#808080]">
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          <a
            href={routePaths.cv}
            download
            onClick={() => soundService.play("click")}
            className="button font-bold text-[10px] sm:text-xs px-2 py-0.5"
          >
            [+] Download CV
          </a>
          <button
            type="button"
            onClick={() => { soundService.play("click"); onOpenProjects(); }}
            className="button font-bold text-[10px] sm:text-xs px-2 py-0.5"
          >
            [&gt;] Explore Projects
          </button>
        </div>
        <span className="font-mono text-[8px] sm:text-[9px] text-[#555] hidden sm:inline">[ID: 06°12′S 106°50′E]</span>
      </div>
    </div>
  );
};
