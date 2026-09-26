"use client";

import React, { useState } from "react";
import { soundService } from "@/services/soundService";

interface DevBadge {
  id: string;
  name: string;
  color: string;
  secret: string;
  icon: React.ReactNode;
}

const DEV_BADGES: DevBadge[] = [
  {
    id: "react",
    name: "REACT 19",
    color: "#61dafb",
    secret: "Engineered with React 19 concurrent features and zero hydration mismatch.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61dafb" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61dafb" strokeWidth="1.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61dafb" strokeWidth="1.5" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="2" fill="#61dafb" />
      </svg>
    ),
  },
  {
    id: "flutter",
    name: "FLUTTER",
    color: "#54c5f8",
    secret: "Multi-platform pixel-perfect UI rendered natively with Dart runtime.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M14 2L4 12L7.5 15.5L21 2H14Z" fill="#54c5f8" />
        <path d="M14 14L8.5 19.5L12 23L21 14H14Z" fill="#01579b" />
        <path d="M8.5 19.5L12 16L15.5 19.5L12 23L8.5 19.5Z" fill="#29b6f6" />
      </svg>
    ),
  },
  {
    id: "typescript",
    name: "TYPESCRIPT",
    color: "#3178c6",
    secret: "Strict type-level safety, zero runtime penalty, 100% strict compiler pass.",
    icon: <span className="bg-[#3178c6] text-white font-mono text-[8px] font-black px-1">TS</span>,
  },
  {
    id: "nextjs",
    name: "NEXT.JS 16",
    color: "#ffffff",
    secret: "Production server engine running Turbopack incremental builds.",
    icon: <span className="bg-black text-white border border-white font-mono text-[8px] font-black px-1">N</span>,
  },
];

export const EasterEggApp: React.FC = () => {
  const [selectedBadge, setSelectedBadge] = useState<DevBadge | null>(null);

  const handleSelectBadge = (badge: DevBadge) => {
    soundService.play("blip");
    setSelectedBadge(badge);
  };

  return (
    <div className="flex flex-col gap-2 font-mono text-xs text-[#111] max-w-full">
      <div className="border border-[#808080] bg-[#ffffd0] p-2 text-[10px] sm:text-[11px] shadow-sm">
        <p className="font-bold text-[#cc0000]">SECURITY ADVISORY (CONFIDENTIAL)</p>
        <p className="mt-0.5">File: NOT-A-VIRUS.DOCX (Checksum: 0x00_VALID_OK)</p>
      </div>

      <div className="border-2 border-inset border-[#808080] bg-white p-2 text-[10px] sm:text-[11px] leading-relaxed space-y-1.5 overflow-y-auto max-h-[160px]">
        <p className="text-[#000080] font-bold">&gt; TRANSMISSION DECRYPTED:</p>
        <p>&gt; &quot;Simplicity and architecture are prerequisite for reliability.&quot;</p>
        <p>&gt; Welcome to Raihan Akbar Gunawan&apos;s digital workstation.</p>
        <p>&gt; Built with intention. Every pixel placed by hand.</p>
        <p className="text-[#008000] font-bold">Status: All systems running nominal.</p>
      </div>

      <div className="border border-[#808080] bg-[#0a0f18] p-2 text-white flex flex-col gap-1.5 shadow-inner">
        <div className="flex justify-between items-center text-[9px] border-b border-[#333] pb-1">
          <span className="font-bold text-[#ffcc00] tracking-wider">[✦] DEV STACK COLLECTIBLES:</span>
          <span className="text-[#00ff66] text-[8px]">CLICK TO INSPECT</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
          {DEV_BADGES.map((b) => (
            <button
              key={b.id}
              type="button"
              onClick={() => handleSelectBadge(b)}
              className={`flex items-center gap-1.5 p-1 border cursor-pointer text-left transition-none ${
                selectedBadge?.id === b.id
                  ? "border-[#ffcc00] bg-[#1a2436] shadow-[0_0_6px_#ffcc00]"
                  : "border-[#334155] bg-[#060a10] hover:border-[#94a3b8]"
              }`}
            >
              <div className="shrink-0 flex items-center justify-center">{b.icon}</div>
              <span className="text-[8.5px] font-bold" style={{ color: b.color }}>
                {b.name}
              </span>
            </button>
          ))}
        </div>

        {selectedBadge && (
          <div className="p-1.5 bg-[#030712] border border-[#00e5ff] text-[9px] text-[#00e5ff] leading-tight flex items-start gap-1.5">
            <span className="font-bold text-[#ffcc00] shrink-0">&gt;&gt;</span>
            <p className="break-words flex-1">{selectedBadge.secret}</p>
          </div>
        )}
      </div>

      <div className="flex justify-end pt-1">
        <button
          type="button"
          onClick={() => soundService.play("blip")}
          className="button font-bold text-[10px] sm:text-xs px-2 py-0.5"
        >
          Close Document
        </button>
      </div>
    </div>
  );
};
