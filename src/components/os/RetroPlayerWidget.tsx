"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { soundService } from "@/services/soundService";

const TRACKS = [
  "01. SYNTH_WAVE_01.MP3",
  "02. NIGHT_CHORD_02.MID",
  "03. AMBIENT_SYS_03.WAV",
];

const MELODIES = [
  [261.63, 329.63, 392.0, 523.25, 392.0, 329.63],
  [293.66, 369.99, 440.0, 587.33, 440.0, 369.99],
  [349.23, 440.0, 523.25, 659.25, 523.25, 440.0],
];

const NUM_BARS = 8;
const MAX_STEPS = 6;

export const RetroPlayerWidget: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackIdx, setTrackIdx] = useState(0);
  const [levels, setLevels] = useState<number[]>([0, 0, 0, 0, 0, 0, 0, 0]);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [sec, setSec] = useState(0);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => setSec((s) => s + 1), 1000);
    return () => clearInterval(timer);
  }, [isPlaying]);

  useEffect(() => {
    if (!isPlaying) { setLevels([0, 0, 0, 0, 0, 0, 0, 0]); return; }
    const interval = setInterval(() => {
      setLevels(Array.from({ length: NUM_BARS }, () => Math.floor(1 + Math.random() * MAX_STEPS)));
    }, 120);
    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    if (!isPlaying || soundService.isMuted) return;
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx(), notes = MELODIES[trackIdx % MELODIES.length];
    let step = 0;
    const interval = setInterval(() => {
      if (ctx.state === "suspended") void ctx.resume();
      const osc = ctx.createOscillator(), gain = ctx.createGain();
      osc.type = "square";
      osc.frequency.setValueAtTime(notes[step % notes.length], ctx.currentTime);
      gain.gain.setValueAtTime(0.012, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.18);
      osc.connect(gain); gain.connect(ctx.destination);
      osc.start(); osc.stop(ctx.currentTime + 0.18);
      step++;
    }, 220);
    return () => { clearInterval(interval); void ctx.close(); };
  }, [isPlaying, trackIdx]);

  const formatTimer = (s: number) =>
    `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  const handlePrev = () => { soundService.play("click"); setSec(0); setTrackIdx((p) => (p === 0 ? TRACKS.length - 1 : p - 1)); };
  const handleNext = () => { soundService.play("click"); setSec(0); setTrackIdx((p) => (p + 1) % TRACKS.length); };

  const handleTogglePlay = () => {
    if (isPlaying) { soundService.play("click"); setIsPlaying(false); } else { soundService.play("blip"); setIsPlaying(true); }
  };

  if (!isVisible) {
    return (
      <button type="button" onClick={() => { soundService.play("chord"); setIsVisible(true); }} className="fixed top-10 right-2 sm:right-4 z-40 button px-2 py-0.5 font-mono text-[9px] text-[#5bd3a1] bg-[#0c1017] border border-[#d4a76a] shadow-lg cursor-pointer">
        [&gt;] AUDIO PLAYER
      </button>
    );
  }

  return (
    <motion.div
      drag
      dragMomentum={false}
      className="fixed top-10 right-2 sm:right-4 z-40 window w-60 sm:w-64 shadow-[4px_4px_14px_rgba(0,0,0,0.9)] font-mono text-xs select-none border-2 border-t-[#dfdfdf] border-l-[#dfdfdf] border-b-[#000] border-r-[#000] bg-[#161a22] cursor-grab active:cursor-grabbing overflow-hidden"
    >
      <div className="title-bar py-0.5 px-1.5 flex items-center justify-between bg-gradient-to-r from-[#1b263b] via-[#24344d] to-[#0c1017]">
        <span className="font-bold text-[9px] text-white tracking-wider">AUDIO PLAYER // STEREO</span>
        <div className="title-bar-controls flex gap-0.5">
          <button aria-label="Minimize" onClick={() => { soundService.play("click"); setIsMinimized(!isMinimized); }} />
          <button aria-label="Close" onClick={() => { soundService.play("click"); setIsVisible(false); setIsPlaying(false); }} />
        </div>
      </div>

      {!isMinimized && (
        <div className="window-body m-0.5 p-1.5 bg-[#06090e] text-[#5bd3a1] flex flex-col gap-1 border border-[#1e293b]">
          <div className="flex items-center justify-between bg-[#0a0e14] px-1.5 py-0.5 border border-[#1e293b]">
            <div className="flex items-center gap-1.5">
              <span className="bg-[#02150d] px-1.5 py-0.2 text-[11px] font-black text-[#5bd3a1] tracking-widest border border-[#0d3b22]">{formatTimer(sec)}</span>
              <span className="text-[8px] text-[#d4a76a] font-bold">{isPlaying ? "PLAYING" : "PAUSED"}</span>
            </div>
            <span className="text-[8px] text-[#8e949b] font-bold">128 KBPS</span>
          </div>

          <div className="overflow-hidden bg-[#0a0e14] px-1.5 py-0.5 border border-[#1e293b]">
            <p className="text-[8.5px] text-[#5bd3a1] font-bold whitespace-nowrap">
              {TRACKS[trackIdx]}
            </p>
          </div>

          <div className="flex items-end justify-between h-7 px-1.5 py-0.5 bg-[#0a0e14] border border-[#1e293b] gap-1">
            {levels.map((lvl, col) => (
              <div key={col} className="flex-1 flex flex-col justify-end h-full gap-[1px]">
                {Array.from({ length: MAX_STEPS }, (_, i) => {
                  const step = MAX_STEPS - 1 - i;
                  const lit = isPlaying && step <= lvl;
                  const c = step >= 4 ? "#ff6b6b" : step >= 2 ? "#d4a76a" : "#5bd3a1";
                  return <div key={i} className="w-full h-1" style={{ backgroundColor: lit ? c : "#111822", boxShadow: lit ? `0 0 2px ${c}` : "none" }} />;
                })}
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 pt-1 border-t border-[#1e293b]">
            <button type="button" title="Previous Track" onClick={handlePrev} style={{ minWidth: "44px", width: "44px", height: "20px", padding: 0 }} className="font-mono text-[10px] font-black text-white bg-[#1a2332] border border-[#334155] active:bg-[#0c1017] flex items-center justify-center cursor-pointer">|◄</button>
            <button type="button" title={isPlaying ? "Pause Track" : "Play Track"} onClick={handleTogglePlay} style={{ minWidth: "52px", width: "52px", height: "20px", padding: 0 }} className={`font-mono text-[10px] font-black ${isPlaying ? "text-[#d4a76a] bg-[#2b2111] border-[#d4a76a]" : "text-[#5bd3a1] bg-[#0c2419] border-[#5bd3a1]"} border active:bg-[#0c1017] flex items-center justify-center cursor-pointer`}>{isPlaying ? "❚❚" : "►"}</button>
            <button type="button" title="Next Track" onClick={handleNext} style={{ minWidth: "44px", width: "44px", height: "20px", padding: 0 }} className="font-mono text-[10px] font-black text-white bg-[#1a2332] border border-[#334155] active:bg-[#0c1017] flex items-center justify-center cursor-pointer">►|</button>
          </div>
        </div>
      )}
    </motion.div>
  );
};
