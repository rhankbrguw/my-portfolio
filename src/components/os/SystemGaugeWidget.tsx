"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const SystemGaugeWidget: React.FC = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatUptime = (totalSec: number) => {
    const m = Math.floor(totalSec / 60);
    const s = totalSec % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  return (
    <motion.div
      drag
      dragMomentum={false}
      className="fixed bottom-14 left-1/2 -translate-x-1/2 sm:left-auto sm:right-[22%] window w-60 sm:w-64 shadow-[3px_3px_8px_rgba(0,0,0,0.6)] font-mono text-xs select-none cursor-grab active:cursor-grabbing z-20 hidden md:block"
    >
      <div className="title-bar py-0.5 px-1.5 flex items-center justify-between bg-gradient-to-r from-[#000080] to-[#102040]">
        <span className="font-bold text-[10px] text-white">Resource Meter</span>
      </div>

      <div className="window-body m-1 p-2 bg-[#dfdfdf] flex flex-col gap-2 border border-[#808080] text-[#111]">
        <div className="flex flex-col gap-1">
          <div className="flex justify-between text-[10px] font-bold">
            <span>CPU UTILIZATION:</span>
            <span className="text-[#000080]">99% [CRAFT]</span>
          </div>
          <div className="h-3 w-full bg-white border border-inset border-[#808080] p-0.5 flex gap-0.5">
            {[...Array(14)].map((_, i) => (
              <div
                key={i}
                className={`h-full flex-1 ${i < 12 ? "bg-[#000080]" : "bg-[#5bd3a1]"}`}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex justify-between text-[10px] font-bold">
            <span>MEMORY ALLOCATION:</span>
            <span className="text-[#008000]">64MB [NOMINAL]</span>
          </div>
          <div className="h-3 w-full bg-white border border-inset border-[#808080] p-0.5 flex gap-0.5">
            {[...Array(14)].map((_, i) => (
              <div
                key={i}
                className={`h-full flex-1 ${i === 0 ? "bg-[#ff6b6b]" : "bg-transparent"}`}
              />
            ))}
          </div>
        </div>

        <div className="border-t border-[#808080] pt-1.5 flex flex-col gap-0.5 text-[10px] text-[#333]">
          <div className="flex justify-between">
            <span>SESSION UPTIME:</span>
            <span className="font-bold text-[#000080]">{formatUptime(seconds)}</span>
          </div>
          <div className="flex justify-between">
            <span>NETWORK GATEWAY:</span>
            <span className="text-[#008000] font-bold">CLOUDFLARE EDGE</span>
          </div>
          <div className="flex justify-between">
            <span>ENGINE:</span>
            <span>NEXT 16 / TURBO</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

