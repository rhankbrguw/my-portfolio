"use client";

import React, { useEffect, useState } from "react";
import { soundService } from "@/services/soundService";

interface RetroShutdownScreenProps {
  isOpen: boolean;
  onRestart: () => void;
}

export const RetroShutdownScreen: React.FC<RetroShutdownScreenProps> = ({ isOpen, onRestart }) => {
  const [closeNotice, setCloseNotice] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === "Escape") {
        soundService.play("chord");
        onRestart();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onRestart]);

  if (!isOpen) return null;

  const handleCloseTab = () => {
    soundService.play("chord");
    try {
      window.close();
      setTimeout(() => {
        setCloseNotice(true);
      }, 300);
    } catch {
      setCloseNotice(true);
    }
  };

  return (
    <div className="fixed inset-0 z-[99999] bg-[#000000] flex flex-col items-center justify-center p-4 select-none font-mono overflow-y-auto">
      <div className="w-[min(90vw,360px)] sm:w-[380px] min-h-[460px] sm:min-h-[520px] border-2 border-[#ff8800] p-5 sm:p-7 bg-[#080500] shadow-[0_0_35px_rgba(255,136,0,0.35)] flex flex-col items-center justify-between box-border">
        <div className="w-10 h-10 border border-[#ff8800] flex items-center justify-center text-[#ff8800] text-xl font-bold shrink-0 shadow-[0_0_8px_#ff8800]">
          [⏻]
        </div>

        <div className="flex-1 flex flex-col items-center justify-center my-3 text-center w-full">
          <h1
            className="font-black text-[#ff8800] tracking-wider leading-[1.25] uppercase text-center max-w-full break-words"
            style={{
              fontSize: "clamp(1.15rem, 5.2vw, 1.75rem)",
              textShadow: "0 0 10px #ff8800, 0 0 20px #ff5500",
            }}
          >
            It is now
            <br />
            safe to turn
            <br />
            off your
            <br />
            workstation.
          </h1>
        </div>

        <div className="w-full flex flex-col items-center gap-2.5">
          <p className="text-[10px] sm:text-xs text-[#d4a76a] opacity-80 text-center max-w-full break-words px-1">
            rhankbrguw OS :: All active subsystem processes terminated.
          </p>

          {closeNotice && (
            <div className="p-2 border border-[#ffaa00] bg-[#1a0a00] text-[#ffcc00] text-[9px] sm:text-[10px] leading-tight max-w-full text-center">
              Browser security policy prevents scripts from closing unparented tabs. Please close this tab using [Ctrl+W] or [Cmd+W].
            </div>
          )}

          <div className="w-full h-px bg-[#ff8800] opacity-30 my-0.5" />

          <div className="flex flex-col gap-2 w-full pt-1">
            <button
              type="button"
              onClick={handleCloseTab}
              className="w-full py-2 font-mono text-xs font-bold text-white bg-[#880011] hover:bg-[#aa0022] active:bg-[#660000] border-2 border-[#ff3366] cursor-pointer shadow-[0_0_8px_#ff0033] text-center"
            >
              [ ✕ Close Tab &amp; Exit ]
            </button>
            <button
              type="button"
              onClick={() => {
                soundService.play("chord");
                onRestart();
              }}
              className="w-full py-2 font-mono text-xs font-bold text-[#000000] bg-[#ff8800] hover:bg-[#ffaa33] active:bg-[#cc6600] border-2 border-[#ffa500] cursor-pointer shadow-[0_0_8px_#ff8800] text-center"
            >
              [ ↺ Restart Workstation ]
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
