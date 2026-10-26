"use client";

import React from "react";

const PIXEL_STARS = [
  { top: "5%", left: "8%", delay: "0s", size: 6, color: "#00ff66" },
  { top: "9%", left: "34%", delay: "0.5s", size: 8, color: "#00e5ff" },
  { top: "14%", left: "68%", delay: "1.2s", size: 6, color: "#ec4899" },
  { top: "18%", left: "88%", delay: "1.8s", size: 10, color: "#ffcc00" },
  { top: "24%", left: "18%", delay: "0.3s", size: 8, color: "#a855f7" },
  { top: "28%", left: "48%", delay: "1.5s", size: 6, color: "#00ff66" },
  { top: "33%", left: "82%", delay: "0.8s", size: 8, color: "#00e5ff" },
  { top: "39%", left: "8%", delay: "2.1s", size: 10, color: "#ec4899" },
  { top: "44%", left: "32%", delay: "0.6s", size: 6, color: "#ffcc00" },
  { top: "49%", left: "92%", delay: "1.3s", size: 8, color: "#00ff66" },
  { top: "55%", left: "22%", delay: "1.9s", size: 8, color: "#ff0044" },
  { top: "60%", left: "64%", delay: "0.2s", size: 10, color: "#a855f7" },
  { top: "66%", left: "12%", delay: "1.6s", size: 6, color: "#ffffff" },
  { top: "71%", left: "44%", delay: "0.9s", size: 8, color: "#ffcc00" },
  { top: "77%", left: "85%", delay: "1.4s", size: 6, color: "#ec4899" },
  { top: "83%", left: "28%", delay: "0.4s", size: 10, color: "#ff0044" },
  { top: "88%", left: "72%", delay: "1.7s", size: 8, color: "#00e5ff" },
  { top: "93%", left: "50%", delay: "1.1s", size: 6, color: "#a855f7" },
  { top: "12%", left: "54%", delay: "2.3s", size: 8, color: "#00ff66" },
  { top: "36%", left: "62%", delay: "0.7s", size: 6, color: "#ffcc00" },
  { top: "52%", left: "76%", delay: "1.0s", size: 8, color: "#ffffff" },
  { top: "74%", left: "94%", delay: "1.5s", size: 8, color: "#00e5ff" },
];

export const DesktopCanvas: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none bg-[#000000]">
      {/* 8-bit Space Shmup Starfield */}
      {PIXEL_STARS.map((s, idx) => (
        <svg
          key={idx}
          className="absolute animate-pulse"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            animationDuration: "1.8s",
            animationDelay: s.delay,
          }}
          viewBox="0 0 8 8"
          fill="none"
          aria-hidden="true"
        >
          <rect x="3" y="0" width="2" height="8" fill={s.color} opacity="0.8" />
          <rect x="0" y="3" width="8" height="2" fill={s.color} opacity="0.8" />
          <rect x="2" y="2" width="4" height="4" fill="#ffffff" />
        </svg>
      ))}

      {/* Retro CRT Scanlines */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0px, rgba(0, 0, 0, 0.6) 1px, transparent 1px, transparent 2px)",
          backgroundSize: "100% 2px",
        }}
      />

      {/* Subtle Retro Grid */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 255, 102, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 102, 0.12) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Retro HUD Overlay in Top Corners */}
      <div className="absolute top-8 left-4 font-mono text-[9px] text-[#ffcc00] tracking-widest hidden sm:flex gap-4 opacity-75">
        <span>1UP: 042100</span>
        <span className="text-[#00ff66]">HIGH: 999990</span>
        <span className="text-[#ff0044]">CREDIT 02</span>
      </div>
    </div>
  );
};
