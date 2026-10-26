"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { soundService } from "@/services/soundService";

const TIPS = [
  "You can drag any dialog, player, or gadget window freely across your screen.",
  "Click ► on the audio player in the top-right corner to play retro melodies.",
  "Launch '3D_Exhibit.exe' from desktop icons to view an interactive rotating 3D workstation.",
  "Click 'CYBER_ALERT' in the top navbar to trigger retro workstation alerts.",
  "Check out Raihan's full project showcase by clicking 'My Projects' or the folder icon.",
  "You can reset the workstation layout anytime through the Start Menu.",
];

interface RetroTipOfTheDayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RetroTipOfTheDay: React.FC<RetroTipOfTheDayProps> = ({ isOpen, onClose }) => {
  const [tipIndex, setTipIndex] = useState(0);
  const [showAtStartup, setShowAtStartup] = useState(true);

  if (!isOpen) return null;

  const handleNext = () => {
    soundService.play("click");
    setTipIndex((prev) => (prev + 1) % TIPS.length);
  };

  const handleClose = () => {
    soundService.play("click");
    onClose();
  };

  return (
    <motion.div
      drag
      dragMomentum={false}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="fixed top-28 left-2 sm:left-44 z-20 window w-[calc(100vw-16px)] max-w-72 sm:max-w-80 shadow-[4px_4px_12px_rgba(0,0,0,0.6)] font-mono text-xs select-none border-2 border-t-[#dfdfdf] border-l-[#dfdfdf] border-b-[#000] border-r-[#000] bg-[#c0c0c0] cursor-grab active:cursor-grabbing hidden sm:block"
    >
      <div className="title-bar py-0.5 px-1.5 flex items-center justify-between bg-gradient-to-r from-[#000080] to-[#1084d0]">
        <span className="font-bold text-[10px] text-white tracking-wider flex items-center gap-1">
          <span className="text-[#ffcc00] font-black">[?]</span> Tip of the Day
        </span>
        <div className="title-bar-controls">
          <button aria-label="Close" onClick={handleClose} />
        </div>
      </div>

      <div className="window-body m-1.5 p-2 bg-[#ffffff] border border-inset border-[#7f7f7f] text-[#000000] flex flex-col gap-2">
        <div className="flex items-start gap-2.5">
          <div className="p-1 bg-[#fff8db] border border-[#d4a76a] shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C8.13 2 5 5.13 5 9C5 11.38 6.19 13.47 8 14.74V17C8 17.55 8.45 18 9 18H15C15.55 18 16 17.55 16 17V14.74C17.81 13.47 19 11.38 19 9C19 5.13 15.87 2 12 2Z" fill="#ffcc00" stroke="#000" strokeWidth="1.5" />
              <path d="M9 21H15" stroke="#000" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-bold text-[11px] text-[#000080] border-b border-[#dfdfdf] pb-0.5 mb-1">
              Did you know... [Tip #{tipIndex + 1}/{TIPS.length}]
            </div>
            <p className="text-[10px] sm:text-[11px] leading-tight text-[#111] min-h-[38px]">
              {TIPS[tipIndex]}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between pt-1 border-t border-[#dfdfdf]">
          <label className="flex items-center gap-1 text-[9px] text-[#444] cursor-pointer">
            <input
              type="checkbox"
              checked={showAtStartup}
              onChange={(e) => setShowAtStartup(e.target.checked)}
            />
            Show at startup
          </label>
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={handleNext}
              className="button px-2 py-0.5 text-[10px] font-bold"
            >
              Next Tip &gt;
            </button>
            <button
              type="button"
              onClick={handleClose}
              className="button px-2 py-0.5 text-[10px]"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
