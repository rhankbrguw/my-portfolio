"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { soundService } from "@/services/soundService";
import { WarningTriangleIcon } from "./RetroIcons";

interface AlertModalProps {
  readonly isOpen: boolean;
  readonly title: string;
  readonly message: string;
  readonly tip?: string;
  readonly onClose: () => void;
}

export const AlertModal: React.FC<AlertModalProps> = ({
  isOpen,
  title,
  message,
  tip,
  onClose,
}) => {
  useEffect(() => {
    if (isOpen) {
      soundService.play("chord");
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape" || e.key === "Enter") {
          onClose();
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="alert-dialog-title"
      className="fixed inset-0 z-[2500] flex items-center justify-center bg-black/50 p-4 select-none"
    >
      <motion.div
        initial={{ scale: 0.84, opacity: 0, y: 12 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.84, opacity: 0, y: 12 }}
        transition={{ type: "spring", stiffness: 450, damping: 28, mass: 0.8 }}
        className="window w-full max-w-md shadow-[4px_4px_16px_rgba(0,0,0,0.8)] border-2"
      >
        <div className="title-bar py-1 px-2 flex items-center justify-between">
          <div id="alert-dialog-title" className="title-bar-text font-bold text-xs">
            {title}
          </div>
          <div className="title-bar-controls">
            <button
              aria-label="Close"
              onClick={() => {
                soundService.play("click");
                onClose();
              }}
            />
          </div>
        </div>

        <div className="window-body m-3 flex flex-col gap-3 font-mono text-xs">
          <div className="flex items-start gap-3">
            <div className="shrink-0 p-1" aria-hidden="true">
              <WarningTriangleIcon size={28} />
            </div>
            <div className="flex flex-col gap-1.5 text-[#111]">
              <p className="font-semibold leading-relaxed">{message}</p>
              {tip && (
                <div className="bg-[#f0f0d8] border border-[#a0a080] p-1.5 text-[11px] text-[#333]">
                  <span className="font-bold text-[#665500]">SYSTEM TIP: </span>
                  {tip}
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-2 border-t border-[#808080]">
            <button
              type="button"
              autoFocus
              onClick={() => {
                soundService.play("click");
                onClose();
              }}
              className="button px-4 py-1 text-xs font-bold min-w-[75px]"
            >
              OK
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
