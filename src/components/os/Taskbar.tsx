"use client";

import React, { useState, useEffect } from "react";
import { AppId, WindowState } from "@/types/os";
import { appMetadataList } from "@/constants/tokens";
import { soundService } from "@/services/soundService";
import { WindowsLogoIcon, SpeakerIcon, MuteSpeakerIcon } from "./RetroIcons";

interface TaskbarProps {
  windows: Record<AppId, WindowState>;
  activeAppId: AppId | null;
  isStartOpen: boolean;
  onToggleStart: () => void;
  onSelectApp: (id: AppId) => void;
}

export const Taskbar: React.FC<TaskbarProps> = ({
  windows,
  activeAppId,
  isStartOpen,
  onToggleStart,
  onSelectApp,
}) => {
  const [timeStr, setTimeStr] = useState<string>("");
  const [isMuted, setIsMuted] = useState<boolean>(soundService.isMuted);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleMuteToggle = () => {
    const nextMute = soundService.toggleMute();
    setIsMuted(nextMute);
    if (!nextMute) {
      soundService.play("blip");
    }
  };

  const openAppEntries = appMetadataList.filter((app) => windows[app.id].isOpen);

  const APP_SHORT_NAMES: Record<AppId, string> = {
    about: "About",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
    easteregg: "WordPad",
  };

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-[1000] flex h-9 items-center justify-between border-t-2 border-[#ffffff] bg-[#c0c0c0] px-1 shadow-[inset_0_1px_0_#dfdfdf]">
      <div className="flex-1 min-w-0 flex items-center gap-1.5 overflow-hidden">
        <button
          id="taskbar-start-button"
          onClick={(e) => {
            e.stopPropagation();
            soundService.play("click");
            onToggleStart();
          }}
          className={`flex h-7 shrink-0 items-center gap-1.5 px-2 font-bold text-xs ${
            isStartOpen ? "active" : ""
          }`}
          style={{ minWidth: "58px" }}
          aria-expanded={isStartOpen}
          aria-label="Start Menu"
        >
          <WindowsLogoIcon size={14} />
          <span className="text-[11px] sm:text-xs">Start</span>
        </button>

        <div className="h-5 w-[1px] shrink-0 bg-[#808080] border-r border-[#ffffff] mx-0.5" />

        <div className="flex-1 min-w-0 flex items-center gap-1 overflow-x-auto scrollbar-none">
          {openAppEntries.map((app) => {
            const win = windows[app.id];
            const isActive = activeAppId === app.id && !win.isMinimized;
            const label = APP_SHORT_NAMES[app.id] ?? app.iconLabel;
            return (
              <button
                key={app.id}
                onClick={() => { soundService.play("click"); onSelectApp(app.id); }}
                className={`flex h-7 shrink-0 max-w-[90px] sm:max-w-[140px] items-center gap-1 px-2 text-[10px] sm:text-xs whitespace-nowrap ${
                  isActive ? "active font-bold" : ""
                }`}
              >
                <span>{label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="shrink-0 flex items-center gap-2 border-2 border-inset border-[#808080] bg-[#c0c0c0] px-2 py-0.5 text-xs ml-1">
        <button
          onClick={handleMuteToggle}
          className="border-0 bg-transparent p-0 cursor-pointer flex items-center justify-center"
          title={isMuted ? "Sound: Muted (Click to un-mute)" : "Sound: Active (Click to mute)"}
          aria-label="Toggle Sound"
        >
          {isMuted ? <MuteSpeakerIcon size={14} /> : <SpeakerIcon size={14} />}
        </button>
        <span className="font-mono text-[11px] text-[#222] select-none">{timeStr}</span>
      </div>
    </footer>
  );
};
