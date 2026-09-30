"use client";

import React from "react";
import { soundService } from "@/services/soundService";
import { AppId } from "@/types/os";

interface TopCyberNavbarProps {
  readonly onOpenApp: (id: AppId) => void;
  readonly onOpenSlide3D: () => void;
  readonly onTriggerVirus: () => void;
}

export const TopCyberNavbar: React.FC<TopCyberNavbarProps> = ({
  onOpenApp,
  onOpenSlide3D,
  onTriggerVirus,
}) => {
  return (
    <nav
      aria-label="Retro Station Navbar"
      className="window-body m-0 flex h-7 w-full items-center justify-between overflow-x-auto border-b-2 border-[#d4a76a]/60 bg-[#000000] px-1.5 sm:px-2 py-0 select-none text-xs font-mono shadow-[0_2px_10px_rgba(0,0,0,0.9)] scrollbar-none"
    >
      <div className="flex items-center gap-1 shrink-0">
        <span className="font-extrabold text-[8.5px] sm:text-[11px] text-[#ffcc00] tracking-wider pr-1 sm:pr-2 border-r border-[#333] whitespace-nowrap">
          <span className="hidden md:inline">RHANKBRGUW // </span>
          <span className="hidden sm:inline">WORKSTATION</span>
          <span className="sm:hidden">RH_OS</span>
        </span>
        <button
          type="button"
          onClick={() => { soundService.play("click"); onOpenApp("about"); }}
          className="button px-1 sm:px-2 py-0.5 text-[8.5px] sm:text-[10px] font-bold text-[#000]"
        >
          [01. DOSSIER]
        </button>
        <button
          type="button"
          onClick={() => { soundService.play("chord"); onOpenSlide3D(); }}
          className="button px-1 sm:px-2 py-0.5 text-[8.5px] sm:text-[10px] font-bold text-[#000] bg-[#d4a76a] border-[#d4a76a]"
        >
          [02. 3D]
        </button>
        <button
          type="button"
          onClick={() => { soundService.play("click"); onOpenApp("projects"); }}
          className="button px-1 sm:px-2 py-0.5 text-[8.5px] sm:text-[10px] font-bold text-[#000]"
        >
          [03. PROJECTS]
        </button>
        <button
          type="button"
          onClick={() => { soundService.play("click"); onOpenApp("skills"); }}
          className="button px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] font-bold text-[#000] hidden sm:inline-block"
        >
          [04. SYSTEM]
        </button>
        <button
          type="button"
          onClick={() => { soundService.play("click"); onOpenApp("contact"); }}
          className="button px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] font-bold text-[#000] hidden md:inline-block"
        >
          [05. COMPOSE]
        </button>
      </div>

      <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
        <button
          type="button"
          onClick={() => { soundService.play("error"); onTriggerVirus(); }}
          className="button px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] font-extrabold text-[#cc0000] border-[#ff0044] animate-pulse"
        >
          [⚡ VIRUS ATTACK]
        </button>
        <span className="text-[9px] sm:text-[10px] text-[#00ff66] font-bold hidden lg:inline-block">
          SYS_STATUS: ONLINE
        </span>
      </div>
    </nav>
  );
};
