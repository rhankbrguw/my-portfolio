"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface ClockZone {
  readonly city: string;
  readonly code: string;
  readonly timeZone: string;
}

const ZONES: readonly ClockZone[] = [
  { city: "JAKARTA", code: "WIB", timeZone: "Asia/Jakarta" },
  { city: "TOKYO", code: "JST", timeZone: "Asia/Tokyo" },
  { city: "LONDON", code: "GMT", timeZone: "Europe/London" },
  { city: "NEW YORK", code: "EST", timeZone: "America/New_York" },
];

export const WorldClockBar: React.FC = () => {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatZoneTime = (tz: string) => {
    if (!time) return "--:--:--";
    return new Intl.DateTimeFormat("en-US", {
      timeZone: tz,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }).format(time);
  };

  return (
    <motion.div
      drag
      dragMomentum={false}
      className="fixed top-10 left-28 sm:left-32 window shadow-[3px_3px_8px_rgba(0,0,0,0.7)] font-mono text-[11px] select-none z-20 cursor-grab active:cursor-grabbing max-w-lg lg:max-w-xl hidden md:block"
    >
      <div className="title-bar py-0.5 px-1.5 flex items-center justify-between bg-gradient-to-r from-[#000080] to-[#102040]">
        <span className="font-bold text-[10px] tracking-wider text-white">
          World Chronometer
        </span>
      </div>
      <div className="window-body m-1 p-1 bg-[#000000] border border-[#808080] grid grid-cols-2 sm:grid-cols-4 gap-1.5">
        {ZONES.map((zone) => (
          <div
            key={zone.code}
            className="flex flex-col items-center bg-[#0d1218] border border-[#23395b] px-1.5 py-0.5"
          >
            <span className="text-[8px] text-[#d4a76a] font-bold tracking-widest">
              {zone.city} ({zone.code})
            </span>
            <span className="text-xs font-mono text-[#5bd3a1] tracking-wider font-bold">
              {formatZoneTime(zone.timeZone)}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

