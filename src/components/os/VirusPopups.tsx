"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { soundService } from "@/services/soundService";

interface VirusItem {
  readonly id: number;
  readonly title: string;
  readonly message: string;
  readonly url: string;
  readonly btnLabel: string;
  readonly tag: string;
  readonly x: number;
  readonly y: number;
}

const VIRUS_CATALOG = [
  { title: "ALERT: EL_NGADU.EXE", message: "Civic complaint engine detected! Direct digital flow for public services.", url: "https://el-ngadu.rhankbrguw.xyz/", btnLabel: "[>] Open El Ngadu", tag: "CIVIC" },
  { title: "WARNING: RUMAH_KOSIM.DAT", message: "Bookstore catalog loaded! SvelteKit + Tailwind reading interface.", url: "https://rumah-kosim.rhankbrguw.xyz/", btnLabel: "[>] Open Bookstore", tag: "STORE" },
  { title: "TROJAN: INVENTORY.SYS", message: "Inventory manager running! Real-time operational stock system.", url: "https://inventory-project.rhankbrguw.xyz/", btnLabel: "[>] Stock System", tag: "STOCK" },
  { title: "WORM: AGRISYNC_GPS.VBS", message: "Offline agritech engine online! GPS-aware field sync active.", url: "https://agrisync.rhankbrguw.xyz/", btnLabel: "[>] Open Agrisync", tag: "AGRI" },
  { title: "INFECTED: AUDIONARA.WAV", message: "Audio platform found! Lightweight audio discovery experience.", url: "https://github.com/rhankbrguw/audionara", btnLabel: "[>] Audio Stream", tag: "AUDIO" },
  { title: "BEACON: GITHUB_SRC.EXE", message: "Raihan Akbar Gunawan's source repository! Explore open-source projects.", url: "https://github.com/rhankbrguw", btnLabel: "[~] Open GitHub", tag: "GIT" },
  { title: "CONNECT: LINKEDIN.DLL", message: "Professional transmission ready! Connect with Raihan on LinkedIn.", url: "https://www.linkedin.com/in/rhakbr", btnLabel: "[+] Open LinkedIn", tag: "LINK" },
];

const CENTER_OFFSETS = [
  { dx: -240, dy: -140 }, { dx: 30, dy: -160 }, { dx: -310, dy: -10 },
  { dx: -120, dy: -40 }, { dx: 80, dy: 0 }, { dx: -220, dy: 110 }, { dx: 40, dy: 100 },
];

export const VirusPopups: React.FC<{ triggerCount?: number }> = ({ triggerCount = 0 }) => {
  const [popups, setPopups] = useState<VirusItem[]>([]);

  const spawnPopups = useCallback((isManual = false) => {
    if (typeof window === "undefined") return;
    const w = window.innerWidth;
    const h = window.innerHeight;
    const isMobile = w < 768;

    if (!isManual && isMobile) return;
    soundService.play("error");

    if (isMobile) {
      const single = VIRUS_CATALOG[Math.floor(Math.random() * VIRUS_CATALOG.length)];
      setPopups([{
        id: Date.now(),
        ...single,
        x: Math.max(10, Math.floor((w - 270) / 2)),
        y: Math.max(50, Math.floor((h - 180) / 2)),
      }]);
      return;
    }

    const items: VirusItem[] = VIRUS_CATALOG.map((item, idx) => {
      const offset = CENTER_OFFSETS[idx % CENTER_OFFSETS.length];
      const targetX = (w / 2) + offset.dx + ((idx % 2 === 0 ? 1 : -1) * (10 + (idx * 5)));
      const targetY = (h / 2) + offset.dy + ((idx % 3 === 0 ? 1 : -1) * (8 + (idx * 4)));
      const clampedX = Math.max(8, Math.min(w - 260, targetX));
      const clampedY = Math.max(34, Math.min(h - 170, targetY));

      return { id: Date.now() + idx + Math.random(), ...item, x: Math.floor(clampedX), y: Math.floor(clampedY) };
    });

    setPopups(items);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => spawnPopups(false), 150);
    return () => clearTimeout(timer);
  }, [spawnPopups]);

  useEffect(() => {
    if (triggerCount > 0) spawnPopups(true);
  }, [triggerCount, spawnPopups]);

  const dismiss = (id: number) => {
    soundService.play("click");
    setPopups((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <AnimatePresence>
      {popups.map((p) => (
        <motion.div
          key={p.id} drag dragMomentum={false}
          initial={{ scale: 0.3, opacity: 0, y: 12 }} animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.3, opacity: 0 }} transition={{ type: "spring", stiffness: 450, damping: 24 }}
          style={{ left: p.x, top: p.y }}
          className="fixed z-[3200] w-64 sm:w-68 max-w-[calc(100vw-20px)] select-none cursor-grab active:cursor-grabbing"
        >
          <div className="window shadow-[0_0_18px_rgba(255,0,50,0.75)] border-2 border-[#ff2244]">
            <div className="title-bar py-0.5 px-1.5 flex items-center justify-between bg-gradient-to-r from-[#cc0022] via-[#880011] to-[#220000]">
              <span className="font-bold text-[9px] text-white tracking-wider flex items-center gap-1">
                <span className="text-[#ffff00]">▲</span> {p.title}
              </span>
              <div className="title-bar-controls">
                <button aria-label="Close" onClick={() => dismiss(p.id)} />
              </div>
            </div>
            <div className="window-body m-1 flex flex-col gap-1.5 font-mono text-xs bg-[#ffffe8] text-[#111] p-1.5 border border-[#808080]">
              <div className="flex items-start gap-1.5">
                <div className="shrink-0 bg-[#cc0000] text-white px-1 py-0.2 font-black text-[8px] border border-[#000]">
                  [{p.tag}]
                </div>
                <p className="text-[10px] leading-tight font-bold text-[#880000]">{p.message}</p>
              </div>
              <div className="flex justify-between items-center pt-1 border-t border-[#808080]">
                <a
                  href={p.url} target="_blank" rel="noopener noreferrer"
                  onClick={() => soundService.play("click")}
                  className="button px-2 py-0.5 text-[9px] font-bold text-[#000080]"
                >
                  {p.btnLabel}
                </a>
                <button type="button" className="button px-2 py-0.5 text-[9px] font-bold" onClick={() => dismiss(p.id)}>
                  OK
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </AnimatePresence>
  );
};
