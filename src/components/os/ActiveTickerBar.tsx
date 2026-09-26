"use client";

import React from "react";

const TICKER_TEXT =
  "RHANKBRGUW OS v2.4 // ACTIVE WORKSTATION :: FULL-STACK DEVELOPMENT ENVIRONMENT :: NEXT.JS 16 / TURBO / REACT 19 :: JAKARTA, ID [06 12 S 106 50 E] :: OPEN FOR COLLABORATIONS :: STATUS: ALL SYSTEMS NOMINAL :: rhankbrguw.com ::";

export const ActiveTickerBar: React.FC = () => {
  return (
    <div
      role="region"
      aria-label="System status ticker"
      className="window-body m-0 flex h-6 w-full items-center overflow-hidden border-2 border-inset border-[#808080] bg-[#000000] px-2 select-none"
    >
      <div className="flex shrink-0 items-center gap-1.5 pr-2 border-r border-[#333] z-10 bg-[#000000]">
        <span className="h-2 w-2 rounded-full bg-[#5bd3a1] animate-ping" />
        <span className="font-mono text-[10px] font-extrabold text-[#d4a76a] tracking-wider uppercase">
          FEED
        </span>
      </div>

      <div className="relative flex-1 overflow-hidden h-full flex items-center">
        <div className="inline-block whitespace-nowrap animate-[marquee_30s_linear_infinite] font-mono text-[11px] text-[#5bd3a1] tracking-wide">
          <span className="mr-8">{TICKER_TEXT}</span>
          <span className="mr-8">{TICKER_TEXT}</span>
        </div>
      </div>
    </div>
  );
};
