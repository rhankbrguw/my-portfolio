"use client";

import React, { useState } from "react";
import { soundService } from "@/services/soundService";

interface DesktopIconProps {
  id: string;
  label: string;
  icon: React.ReactNode;
  onOpen: () => void;
}

export const DesktopIcon: React.FC<DesktopIconProps> = ({ id, label, icon, onOpen }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      soundService.play("click");
      onOpen();
      return;
    }
    setIsSelected(true);
    soundService.play("click");
  };

  const handleDoubleClick = () => {
    onOpen();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onOpen();
    }
  };

  return (
    <button
      type="button"
      id={`desktop-icon-${id}`}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      onBlur={() => setIsSelected(false)}
      onKeyDown={handleKeyDown}
      className={`group flex w-[68px] sm:w-[72px] flex-col items-center justify-center p-1 outline-none transition-none focus:outline-none border ${
        isSelected
          ? "border-dotted border-white bg-[#000080]/80 shadow-inner"
          : "border-transparent hover:border-[#d4a76a]/50 hover:bg-[#161a22]/60"
      }`}
      aria-label={`Open ${label}`}
    >
      <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center filter drop-shadow-[1px_1px_0_rgba(0,0,0,0.8)]">
        {icon}
      </div>
      <span
        className={`mt-1 text-center font-mono text-[9px] sm:text-[9.5px] leading-tight text-white select-none max-w-full px-0.5 break-words ${
          isSelected ? "bg-[#000080] text-white" : "drop-shadow-[1px_1px_1px_rgba(0,0,0,1)]"
        }`}
      >
        {label}
      </span>
    </button>
  );
};
