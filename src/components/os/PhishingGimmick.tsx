"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { soundService } from "@/services/soundService";

export const PhishingGimmick: React.FC<{ onClaim: () => void }> = ({ onClaim }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <motion.div
      drag
      dragMomentum={false}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="fixed top-20 left-4 sm:left-1/3 z-[3100] w-[calc(100vw-32px)] max-w-72 sm:max-w-76 select-none cursor-grab active:cursor-grabbing font-mono text-xs hidden sm:block"
    >
      <div className="window shadow-[0_0_20px_rgba(255,200,0,0.7)] border-2 border-[#ffcc00]">
        <div className="title-bar py-0.5 px-1.5 flex items-center justify-between bg-gradient-to-r from-[#aa7700] via-[#ee9900] to-[#663300]">
          <span className="font-bold text-[9px] text-black tracking-wider flex items-center gap-1">
            <span className="animate-ping text-[#ffffff]">★</span> WINNER #999,999! [CLAIM NOW]
          </span>
          <div className="title-bar-controls">
            <button aria-label="Close" onClick={() => { soundService.play("click"); setIsVisible(false); }} />
          </div>
        </div>

        <div className="window-body m-1 p-2 bg-[#ffffe6] text-[#000] flex flex-col gap-1.5 border border-[#808080]">
          <div className="bg-[#cc0000] text-white px-1.5 py-0.5 text-center font-black text-[9px] tracking-wider animate-pulse">
            [!] CONGRATULATIONS LUCKY VISITOR [!]
          </div>

          <p className="text-[10px] leading-tight font-bold text-[#333]">
            You were selected as lucky visitor #999,999! Claim your verified full-stack portfolio access.
          </p>

          <div className="flex flex-col gap-0.5 bg-[#dfdfdf] p-1 border border-[#808080]">
            <div className="flex justify-between text-[8px] font-bold text-[#000080]">
              <span>BUFFERING_REWARD.EXE</span>
              <span>99%</span>
            </div>
            <div className="h-2.5 w-full bg-white border border-inset border-[#808080] p-0.5 flex gap-0.5">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="h-full flex-1 bg-[#008000]" />
              ))}
              <div className="h-full flex-1 bg-transparent animate-pulse" />
            </div>
          </div>

          <div className="flex justify-between items-center pt-1 border-t border-[#808080]">
            <button
              type="button"
              onClick={() => { soundService.play("chord"); onClaim(); setIsVisible(false); }}
              className="button px-2 py-0.5 text-[9px] font-black text-[#000080] bg-[#ffea88] border-[#ffaa00]"
            >
              [&gt;&gt; CLAIM PRIZE &lt;&lt;]
            </button>
            <button
              type="button"
              onClick={() => { soundService.play("click"); setIsVisible(false); }}
              className="button px-1.5 py-0.5 text-[8px] font-bold"
            >
              DISMISS
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
