"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { AppMetadata, WindowState } from "@/types/os";
import { soundService } from "@/services/soundService";

interface WindowFrameProps {
  readonly app: AppMetadata;
  readonly state: WindowState;
  readonly isFocused: boolean;
  readonly onFocus: () => void;
  readonly onClose: () => void;
  readonly onMinimize: () => void;
  readonly onToggleMaximize: () => void;
  readonly onShowInfo?: (title: string, message: string, tip?: string) => void;
  readonly children: React.ReactNode;
}

type MenuKey = "file" | "edit" | "view" | "help";

export const WindowFrame: React.FC<WindowFrameProps> = ({
  app, state, isFocused, onFocus, onClose, onMinimize, onToggleMaximize, onShowInfo, children,
}) => {
  const windowRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MenuKey | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!state.isOpen || state.isMinimized) return null;
  const isFullscreen = state.isMaximized || isMobile;

  const handleAction = (action: () => void) => {
    soundService.play("click");
    action();
    setActiveMenu(null);
  };

  return (
    <motion.div
      ref={windowRef} drag={!isFullscreen} dragMomentum={false} dragElastic={0}
      onPointerDown={() => { onFocus(); setActiveMenu(null); }}
      initial={shouldReduceMotion ? false : { scale: 0.88, opacity: 0, y: 14 }}
      animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.88, opacity: 0, y: 14 }}
      transition={{ type: "spring", stiffness: 420, damping: 26, mass: 0.8 }}
      style={{
        zIndex: state.zIndex, position: "absolute",
        left: isFullscreen ? 2 : state.position.x, top: isFullscreen ? 32 : state.position.y,
        width: isFullscreen ? "calc(100vw - 4px)" : app.defaultSize.width,
        height: isFullscreen ? "calc(100dvh - 72px)" : app.defaultSize.height,
        maxWidth: isFullscreen ? "calc(100vw - 4px)" : "calc(100vw - 16px)",
        maxHeight: isFullscreen ? "calc(100dvh - 50px)" : "calc(100dvh - 56px)",
      }}
      className={`window shadow-[3px_3px_10px_rgba(0,0,0,0.5)] flex flex-col select-none ${
        state.isMaximized ? "fixed inset-0 m-0 w-full h-[calc(100%-36px)]" : ""
      }`}
    >
      <div className={`title-bar cursor-move select-none ${isFocused ? "" : "inactive"}`} onDoubleClick={onToggleMaximize}>
        <div className="title-bar-text flex items-center gap-1.5 font-bold">
          <span className="font-mono text-xs">{app.title}</span>
        </div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" onClick={(e) => { e.stopPropagation(); onMinimize(); }} />
          <button aria-label={state.isMaximized ? "Restore" : "Maximize"} onClick={(e) => { e.stopPropagation(); onToggleMaximize(); }} />
          <button aria-label="Close" onClick={(e) => { e.stopPropagation(); onClose(); }} />
        </div>
      </div>

      <div className="relative window-menu flex gap-1 border-b border-[#808080] bg-[#c0c0c0] px-1 py-0.5 text-xs text-[#222]">
        {(["file", "edit", "view", "help"] as MenuKey[]).map((m) => (
          <div key={m} className="relative">
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); soundService.play("click"); setActiveMenu((p) => (p === m ? null : m)); }}
              className={`px-1.5 py-0.2 border-0 bg-transparent text-xs capitalize cursor-pointer ${
                activeMenu === m ? "bg-[#000080] text-white" : "hover:bg-[#000080] hover:text-white"
              }`}
            >
              {m}
            </button>
            {activeMenu === m && (
              <div onClick={(e) => e.stopPropagation()} className="absolute top-full left-0 z-[5000] min-w-[150px] bg-[#c0c0c0] border-2 border-t-[#fff] border-l-[#fff] border-b-[#000] border-r-[#000] shadow-md py-0.5 text-xs text-[#111]">
                {m === "file" && (
                  <>
                    <button type="button" onClick={() => handleAction(() => window.print())} className="w-full text-left px-2 py-1 hover:bg-[#000080] hover:text-white border-0 bg-transparent">Print Window...</button>
                    <button type="button" onClick={() => handleAction(() => { navigator.clipboard?.writeText(app.filename); soundService.play("chord"); })} className="w-full text-left px-2 py-1 hover:bg-[#000080] hover:text-white border-0 bg-transparent">Copy Executable</button>
                    <hr className="my-0.5 border-t border-[#808080] border-b border-[#fff]" />
                    <button type="button" onClick={() => handleAction(onClose)} className="w-full text-left px-2 py-1 hover:bg-[#000080] hover:text-white font-bold border-0 bg-transparent">Close Program</button>
                  </>
                )}
                {m === "edit" && (
                  <>
                    <button type="button" onClick={() => handleAction(() => { navigator.clipboard?.writeText(app.title); soundService.play("blip"); })} className="w-full text-left px-2 py-1 hover:bg-[#000080] hover:text-white border-0 bg-transparent">Copy App Title</button>
                    <button type="button" onClick={() => handleAction(() => soundService.play("blip"))} className="w-full text-left px-2 py-1 hover:bg-[#000080] hover:text-white border-0 bg-transparent">Select Workspace</button>
                  </>
                )}
                {m === "view" && (
                  <>
                    <button type="button" onClick={() => handleAction(onToggleMaximize)} className="w-full text-left px-2 py-1 hover:bg-[#000080] hover:text-white border-0 bg-transparent">Toggle Fullscreen</button>
                    <button type="button" onClick={() => handleAction(() => soundService.play("chord"))} className="w-full text-left px-2 py-1 hover:bg-[#000080] hover:text-white border-0 bg-transparent">Refresh Buffer</button>
                  </>
                )}
                {m === "help" && (
                  <>
                    <button type="button" onClick={() => handleAction(() => onShowInfo?.(`ABOUT: ${app.filename}`, `Program: ${app.title}`, "RHANKBRGUW OS v2.4 // Build 2026.09"))} className="w-full text-left px-2 py-1 hover:bg-[#000080] hover:text-white border-0 bg-transparent">About Program...</button>
                    <button type="button" onClick={() => handleAction(() => onShowInfo?.("SYSTEM DIAGNOSTICS", "All subsystems operational. 0 runtime faults detected.", "Memory: 64MB [NOMINAL]"))} className="w-full text-left px-2 py-1 hover:bg-[#000080] hover:text-white border-0 bg-transparent">Diagnostics [OK]</button>
                  </>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="window-body flex-1 overflow-y-auto p-2 bg-[#ffffff] text-[#000000] m-1 border-2 border-inset border-[#808080]">
        {children}
      </div>

      <div className="status-bar m-1 text-[11px] text-[#444] px-1 py-0.5">
        <p className="status-bar-field">System: Ready</p>
        <p className="status-bar-field">{app.filename}</p>
      </div>
    </motion.div>
  );
};
