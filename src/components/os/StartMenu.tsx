"use client";

import React from "react";
import { AppId } from "@/types/os";
import { routePaths } from "@/constants/routes";
import { soundService } from "@/services/soundService";
import { ComputerIcon, FolderIcon, HardwareIcon, MailIcon, FloppyIcon, NotepadIcon } from "./RetroIcons";

interface StartMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenApp: (id: AppId) => void;
  onResetLayout: () => void;
  onOpenNotice?: () => void;
  onOpenTips?: () => void;
  onOpenRun?: () => void;
  onShutDown?: () => void;
}

export const StartMenu: React.FC<StartMenuProps> = ({
  isOpen, onClose, onOpenApp, onResetLayout, onOpenNotice, onOpenTips, onOpenRun, onShutDown,
}) => {
  if (!isOpen) return null;

  const handleAppClick = (id: AppId) => {
    soundService.play("click");
    onOpenApp(id);
    onClose();
  };

  const handleDownloadCv = () => {
    soundService.play("click");
    window.open(routePaths.cv, "_blank");
    onClose();
  };

  const handleNoticeClick = () => {
    soundService.play("chord");
    onOpenNotice?.();
    onClose();
  };

  return (
    <div
      id="start-menu-panel"
      className="window absolute bottom-9 left-1 z-[9999] flex shadow-[4px_4px_10px_rgba(0,0,0,0.5)] border-2 border-outset border-[#dfdfdf] bg-[#c0c0c0]"
      style={{ width: "230px" }}
    >
      <div className="w-8 bg-gradient-to-t from-[#000080] to-[#1084d0] flex items-end justify-center pb-3">
        <span className="transform -rotate-90 origin-bottom-left font-bold text-white tracking-widest text-sm whitespace-nowrap pl-2">
          rhankbrguw<span className="text-[#ffcc00] ml-1">OS</span>
        </span>
      </div>

      <div className="flex-1 py-1 flex flex-col text-xs text-[#222]">
        <button
          onClick={() => handleAppClick("about")}
          className="flex items-center gap-2.5 px-3 py-1.5 hover:bg-[#000080] hover:text-white text-left outline-none border-0 w-full"
        >
          <ComputerIcon size={18} />
          <span className="font-bold">About Me</span>
        </button>
        <button
          onClick={() => handleAppClick("projects")}
          className="flex items-center gap-2.5 px-3 py-1.5 hover:bg-[#000080] hover:text-white text-left outline-none border-0 w-full"
        >
          <FolderIcon size={18} />
          <span className="font-bold">My Projects</span>
        </button>
        <button
          onClick={() => handleAppClick("skills")}
          className="flex items-center gap-2.5 px-3 py-1.5 hover:bg-[#000080] hover:text-white text-left outline-none border-0 w-full"
        >
          <HardwareIcon size={18} />
          <span className="font-bold">System Toolkit</span>
        </button>
        <button
          onClick={() => handleAppClick("contact")}
          className="flex items-center gap-2.5 px-3 py-1.5 hover:bg-[#000080] hover:text-white text-left outline-none border-0 w-full"
        >
          <MailIcon size={18} />
          <span className="font-bold">Contact Terminal</span>
        </button>
        <button
          onClick={() => handleAppClick("easteregg")}
          className="flex items-center gap-2.5 px-3 py-1.5 hover:bg-[#000080] hover:text-white text-left outline-none border-0 w-full"
        >
          <FloppyIcon size={18} />
          <span>not-a-virus.docx</span>
        </button>

        <hr className="my-1 border-t border-[#808080] border-b border-[#ffffff]" />

        <button
          onClick={handleNoticeClick}
          className="flex items-center gap-2.5 px-3 py-1.5 hover:bg-[#000080] hover:text-white text-left outline-none border-0 w-full"
        >
          <NotepadIcon size={18} />
          <span>System Notice...</span>
        </button>
        <button
          onClick={handleDownloadCv}
          className="flex items-center gap-2.5 px-3 py-1.5 hover:bg-[#000080] hover:text-white text-left outline-none border-0 w-full"
        >
          <NotepadIcon size={18} />
          <span>Download CV.pdf</span>
        </button>
        <button
          onClick={() => { soundService.play("click"); onOpenTips?.(); onClose(); }}
          className="flex items-center gap-2.5 px-3 py-1.5 hover:bg-[#000080] hover:text-white text-left outline-none border-0 w-full"
        >
          <NotepadIcon size={18} />
          <span>Tip of the Day...</span>
        </button>
        <button
          onClick={() => { soundService.play("chord"); onResetLayout(); onClose(); }}
          className="flex items-center gap-2.5 px-3 py-1.5 hover:bg-[#000080] hover:text-white text-left outline-none border-0 w-full"
        >
          <HardwareIcon size={18} />
          <span>Reset Desktop...</span>
        </button>

        <button
          onClick={() => { soundService.play("click"); onOpenRun?.(); onClose(); }}
          className="flex items-center gap-2.5 px-3 py-1.5 hover:bg-[#000080] hover:text-white text-left outline-none border-0 w-full"
        >
          <FloppyIcon size={18} />
          <span>Run Command...</span>
        </button>

        <hr className="my-1 border-t border-[#808080] border-b border-[#ffffff]" />

        <button
          onClick={() => { soundService.play("chord"); onShutDown?.(); onClose(); }}
          className="flex items-center gap-2.5 px-3 py-1.5 hover:bg-[#000080] hover:text-white text-left outline-none border-0 w-full text-[#aa0000] hover:text-white font-bold"
        >
          <ComputerIcon size={18} />
          <span>Shut Down...</span>
        </button>
      </div>
    </div>
  );
};
