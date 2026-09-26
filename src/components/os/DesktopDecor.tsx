"use client";

import React from "react";
import { soundService } from "@/services/soundService";

const AnimatedCassette: React.FC = () => (
  <div className="absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none opacity-95 select-none">
    <div className="relative w-48 sm:w-60 h-28 sm:h-34 bg-[#161a22] border-4 border-[#d4a76a] shadow-[0_0_18px_rgba(212,167,106,0.3)] p-2 flex flex-col justify-between">
      <div className="bg-[#000080] px-2 py-0.5 flex justify-between items-center text-[8px] sm:text-[9px] font-mono font-bold text-white">
        <span>SIDE A // 90 MIN</span>
        <span className="tracking-widest">RHANKBRGUW OS</span>
      </div>
      <div className="relative h-12 sm:h-14 bg-[#000000] border-2 border-[#555] mx-1 flex items-center justify-around px-4">
        <div className="relative h-8 w-8 rounded-full border-2 border-[#00ff66] bg-[#001800] flex items-center justify-center animate-[spin-disc_3s_linear_infinite]">
          <div className="h-3.5 w-3.5 rounded-full border border-dashed border-[#d4a76a]" />
          <div className="h-1.5 w-1.5 rounded-full bg-[#ffffff]" />
        </div>
        <div className="h-1 flex-1 mx-2 bg-[#d4a76a]/60 border-t border-b border-[#000080]" />
        <div className="relative h-8 w-8 rounded-full border-2 border-[#00ff66] bg-[#001800] flex items-center justify-center animate-[spin-disc_3s_linear_infinite]">
          <div className="h-3.5 w-3.5 rounded-full border border-dashed border-[#d4a76a]" />
          <div className="h-1.5 w-1.5 rounded-full bg-[#ffffff]" />
        </div>
      </div>
      <div className="flex justify-between items-center text-[7px] sm:text-[8px] font-mono text-[#00ff66] px-1">
        <span>[STEREO CHROME]</span>
        <span className="text-[#d4a76a]">8-BIT AUDIO SPINDLE</span>
        <span>[DOLBY ON]</span>
      </div>
    </div>
  </div>
);

const AnimatedGramophone: React.FC = () => (
  <div className="absolute top-[28%] left-4 sm:left-24 hidden md:flex flex-col items-center select-none pointer-events-none">
    <div className="relative h-18 w-18 bg-[#161a22] border-2 border-[#d4a76a] p-1 flex items-center justify-center shadow-lg">
      <div className="h-14 w-14 rounded-full border-2 border-[#444] bg-[#050508] flex items-center justify-center animate-[spin-disc_4s_linear_infinite]">
        <div className="h-5 w-5 rounded-full border border-[#d4a76a] bg-[#000080] flex items-center justify-center">
          <div className="h-1.5 w-1.5 rounded-full bg-[#ffffff]" />
        </div>
      </div>
      <div className="absolute right-1 top-2 w-6 h-0.5 bg-[#d4a76a] rotate-45 origin-right" />
    </div>
    <span className="font-mono text-[7px] text-[#d4a76a] font-bold mt-0.5">RETRO TURNTABLE</span>
  </div>
);

const AnimatedStarfighter: React.FC = () => (
  <div className="absolute bottom-32 sm:bottom-36 left-20 sm:left-32 pointer-events-none select-none z-[5] hidden sm:block">
    <div className="relative animate-[patrol-horizontal-left_6s_easeInOut_infinite] flex flex-col items-center">
      <div className="absolute -top-4 left-1.5 w-1 h-4 bg-[#00ffff] rounded-full animate-[shoot-laser-vertical_1.4s_ease-out_infinite] shadow-[0_0_8px_#00ffff]" />
      <div className="absolute -top-4 right-1.5 w-1 h-4 bg-[#00ffff] rounded-full animate-[shoot-laser-vertical_1.4s_ease-out_0.2s_infinite] shadow-[0_0_8px_#00ffff]" />
      <svg width="28" height="30" viewBox="0 0 16 18" fill="none">
        <path d="M7 0h2v4H7zM6 4h4v4H6zM4 8h8v4H4zM1 12h14v3H1zM0 15h4v2H0zM12 15h4v2h-4z" fill="#d4a76a" />
        <rect x="7" y="5" width="2" height="4" fill="#00ffff" />
        <rect x="5" y="11" width="6" height="2" fill="#1b263b" />
      </svg>
      <div className="w-3 h-2 bg-[#ff0044] animate-pulse rounded-b shadow-[0_0_8px_#ff0044]" />
    </div>
  </div>
);

const RoamingUfo: React.FC = () => (
  <div className="fixed top-0 left-0 hidden sm:flex flex-col items-center select-none pointer-events-none z-[6] animate-[roam-ufo-fullscreen_24s_ease-in-out_infinite]">
    <div className="relative flex flex-col items-center">
      <svg width="38" height="19" viewBox="0 0 38 19" fill="none">
        <ellipse cx="19" cy="12" rx="17" ry="5.5" fill="#16202c" stroke="#5bd3a1" strokeWidth="1.2" />
        <ellipse cx="19" cy="6.5" rx="7.5" ry="4.5" fill="#00ff66" opacity="0.85" />
        <circle cx="9" cy="13" r="1.3" fill="#ffcc00" />
        <circle cx="19" cy="14" r="1.3" fill="#ffcc00" />
        <circle cx="29" cy="13" r="1.3" fill="#ffcc00" />
      </svg>
      <div className="w-8 h-6 bg-gradient-to-b from-[#00ff66]/30 to-transparent opacity-80 animate-pulse" />
    </div>
    <span className="font-mono text-[6.5px] text-[#5bd3a1] bg-[#000] px-1 border border-[#5bd3a1]">
      UFO_ROAM.SYS
    </span>
  </div>
);

const DriftingBanner: React.FC = () => (
  <div className="absolute top-[88%] w-full flex pointer-events-none opacity-90 select-none animate-[drift-horizontal_22s_linear_infinite]">
    <div className="bg-[#000080] text-white font-mono text-[8.5px] font-bold px-3 py-0.5 tracking-[0.18em] shadow-md border-t border-b border-[#d4a76a] whitespace-nowrap">
      ★ RHANKBRGUW WORKSTATION // ALL SUBSYSTEMS NOMINAL // JAKARTA, ID ★
    </div>
  </div>
);

interface SpecialOfferCardProps {
  readonly onOpenProjects?: () => void;
}

const SpecialOfferCard: React.FC<SpecialOfferCardProps> = ({ onOpenProjects }) => (
  <div className="absolute top-[30%] right-3 sm:right-6 w-52 sm:w-60 border-2 border-[#d4a76a] bg-[#0c1017] p-2 shadow-[0_0_20px_rgba(212,167,106,0.25)] rotate-1 hidden sm:block select-none pointer-events-auto text-[#f5f5f5]">
    <div className="bg-[#1b263b] border border-[#d4a76a]/60 px-1.5 py-0.5 flex justify-between items-center text-white font-mono text-[8.5px] font-bold tracking-wider uppercase">
      <span className="text-[#d4a76a]">★ SPECIAL INVITATION ★</span>
      <span className="text-[#5bd3a1]">[VIP]</span>
    </div>
    <div className="mt-1.5 border border-[#334155] bg-[#06090e] p-2 font-mono text-[8.5px] space-y-1.5">
      <p className="text-[#e2e8f0] leading-snug">
        You have been exclusively invited to inspect selected software projects &amp; live production builds.
      </p>
      <button
        type="button"
        onClick={() => {
          soundService.play("click");
          onOpenProjects?.();
        }}
        className="w-full py-1 px-2 font-mono text-[9px] font-bold text-[#0c1017] bg-[#d4a76a] hover:bg-[#e6be8a] active:bg-[#b88c4f] border border-[#f5d09d] cursor-pointer shadow-[0_0_8px_rgba(212,167,106,0.4)] flex items-center justify-center gap-1"
      >
        <span>[▶]</span>
        <span>CLICK HERE TO OPEN PROJECTS</span>
      </button>
      <div className="flex justify-between items-center text-[7px] text-[#8e949b] pt-0.5 border-t border-[#1e293b]">
        <span>STATUS: ACCESS GRANTED</span>
        <span className="text-[#5bd3a1]">0xAUTH_OK</span>
      </div>
    </div>
  </div>
);

interface DesktopDecorProps {
  readonly onOpenProjects?: () => void;
}

export const DesktopDecor: React.FC<DesktopDecorProps> = ({ onOpenProjects }) => (
  <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-[2]" aria-hidden="true">
    <AnimatedCassette />
    <AnimatedGramophone />
    <SpecialOfferCard onOpenProjects={onOpenProjects} />
    <AnimatedStarfighter />
    <RoamingUfo />
    <DriftingBanner />
  </div>
);
