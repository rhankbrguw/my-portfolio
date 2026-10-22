"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { soundService } from "@/services/soundService";
import { AppId } from "@/types/os";

interface RetroRunDialogProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
  readonly onOpenApp: (id: AppId) => void;
  readonly onTriggerVirus: () => void;
  readonly onOpenSlide3D: () => void;
  readonly onCommandError: (cmd: string) => void;
}

const PRESETS = ["projects", "about", "skills", "contact", "3d", "virus"];

export const RetroRunDialog: React.FC<RetroRunDialogProps> = ({
  isOpen,
  onClose,
  onOpenApp,
  onTriggerVirus,
  onOpenSlide3D,
  onCommandError,
}) => {
  const [command, setCommand] = useState("projects");

  if (!isOpen) return null;

  const handleExecute = (e?: React.FormEvent) => {
    e?.preventDefault();
    const cmd = command.trim().toLowerCase();
    onClose();

    if (cmd === "projects" || cmd === "03" || cmd === "proj") {
      soundService.play("chord");
      onOpenApp("projects");
    } else if (cmd === "about" || cmd === "01" || cmd === "dossier") {
      soundService.play("chord");
      onOpenApp("about");
    } else if (cmd === "skills" || cmd === "04" || cmd === "stack" || cmd === "system") {
      soundService.play("chord");
      onOpenApp("skills");
    } else if (cmd === "contact" || cmd === "05" || cmd === "mail") {
      soundService.play("chord");
      onOpenApp("contact");
    } else if (cmd === "virus" || cmd === "alert" || cmd === "trojan") {
      soundService.play("chord");
      onTriggerVirus();
    } else if (cmd === "3d" || cmd === "exhibit" || cmd === "02") {
      soundService.play("chord");
      onOpenSlide3D();
    } else if (cmd === "easteregg" || cmd === "not-a-virus" || cmd === "wordpad" || cmd === "docx") {
      soundService.play("chord");
      onOpenApp("easteregg");
    } else {
      soundService.play("error");
      onCommandError(command);
    }
  };

  return (
    <motion.div
      drag
      dragMomentum={false}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      className="fixed top-1/3 left-4 sm:left-1/3 z-[3500] window w-[calc(100vw-32px)] max-w-sm font-mono text-xs select-none shadow-[4px_4px_14px_rgba(0,0,0,0.8)] border-2 border-t-[#dfdfdf] border-l-[#dfdfdf] border-b-[#000] border-r-[#000] bg-[#c0c0c0] cursor-grab active:cursor-grabbing"
    >
      <div className="title-bar py-0.5 px-1.5 flex items-center justify-between bg-gradient-to-r from-[#000080] to-[#1084d0]">
        <span className="font-bold text-[10px] text-white tracking-wider flex items-center gap-1">
          <span className="text-[#ffcc00] font-black">[&gt;]</span> Run Command
        </span>
        <div className="title-bar-controls">
          <button aria-label="Close" onClick={() => { soundService.play("click"); onClose(); }} />
        </div>
      </div>

      <form onSubmit={handleExecute} className="window-body m-1.5 p-2 bg-[#dfdfdf] flex flex-col gap-2 border border-[#808080] text-[#111]">
        <div className="flex items-start gap-2.5">
          <div className="w-8 h-8 bg-[#000080] border border-[#fff] flex items-center justify-center font-bold text-sm text-[#ffcc00] shrink-0">
            C:\&gt;
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] sm:text-[11px] leading-tight text-[#222]">
              Type the name of a workstation program, resource, or document:
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="run-cmd-input" className="font-bold text-[10px] shrink-0">Open:</label>
          <input
            id="run-cmd-input"
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            className="flex-1 px-1.5 py-0.5 text-xs font-mono bg-white border border-inset border-[#808080]"
            autoFocus
          />
        </div>

        <div className="flex flex-wrap items-center gap-1 text-[8.5px] text-[#444]">
          <span className="font-bold">Quick:</span>
          {PRESETS.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => { soundService.play("click"); setCommand(p); }}
              className={`px-1 py-0.2 border text-[8px] cursor-pointer ${
                command === p ? "bg-[#000080] text-white border-[#000]" : "bg-white text-[#222] border-[#888]"
              }`}
            >
              {p}
            </button>
          ))}
        </div>

        <div className="flex justify-end gap-1.5 pt-1.5 border-t border-[#808080]">
          <button type="submit" className="button font-bold px-3 py-0.5 text-[10px]">
            OK
          </button>
          <button type="button" onClick={() => { soundService.play("click"); onClose(); }} className="button px-2.5 py-0.5 text-[10px]">
            Cancel
          </button>
        </div>
      </form>
    </motion.div>
  );
};
