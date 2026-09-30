"use client";

import React from "react";

interface RetroIconProps {
  className?: string;
  size?: number;
}

export const ComputerIcon: React.FC<RetroIconProps> = ({ className, size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    <rect x="3" y="3" width="26" height="20" rx="1" fill="#c0c0c0" stroke="#000000" strokeWidth="1.5" />
    <rect x="6" y="6" width="20" height="14" fill="#000080" stroke="#808080" strokeWidth="1" />
    <path d="M12 23L10 27H22L20 23H12Z" fill="#808080" stroke="#000000" strokeWidth="1" />
    <rect x="8" y="27" width="16" height="2" fill="#c0c0c0" stroke="#000000" strokeWidth="1" />
    <rect x="23" y="19" width="2" height="1.5" fill="#00ff66" />
  </svg>
);

export const FolderIcon: React.FC<RetroIconProps> = ({ className, size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    <path d="M3 6H12L15 9H29V26H3V6Z" fill="#ffcc00" stroke="#000000" strokeWidth="1.5" />
    <path d="M3 11H29V26H3V11Z" fill="#ffe066" stroke="#000000" strokeWidth="1.5" />
    <line x1="6" y1="15" x2="26" y2="15" stroke="#cc9900" strokeWidth="1" />
    <line x1="6" y1="18" x2="26" y2="18" stroke="#cc9900" strokeWidth="1" />
  </svg>
);

export const HardwareIcon: React.FC<RetroIconProps> = ({ className, size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    <rect x="5" y="5" width="22" height="22" rx="2" fill="#c0c0c0" stroke="#000000" strokeWidth="1.5" />
    <circle cx="16" cy="16" r="6" fill="#808080" stroke="#000000" strokeWidth="1.5" />
    <circle cx="16" cy="16" r="2.5" fill="#dfdfdf" stroke="#000000" strokeWidth="1" />
    <rect x="14.5" y="2" width="3" height="4" fill="#000000" />
    <rect x="14.5" y="26" width="3" height="4" fill="#000000" />
    <rect x="2" y="14.5" width="4" height="3" fill="#000000" />
    <rect x="26" y="14.5" width="4" height="3" fill="#000000" />
  </svg>
);

export const MailIcon: React.FC<RetroIconProps> = ({ className, size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    <rect x="3" y="7" width="26" height="18" fill="#ffffff" stroke="#000000" strokeWidth="1.5" />
    <path d="M3 7L16 18L29 7" stroke="#000080" strokeWidth="1.5" strokeLinecap="round" />
    <rect x="22" y="9" width="5" height="5" fill="#ff6b6b" stroke="#000000" strokeWidth="0.75" />
  </svg>
);

export const FloppyIcon: React.FC<RetroIconProps> = ({ className, size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    <path d="M4 4H24L28 8V28H4V4Z" fill="#142236" stroke="#000000" strokeWidth="1.5" />
    <rect x="8" y="4" width="14" height="9" fill="#c0c0c0" stroke="#000000" strokeWidth="1" />
    <rect x="10" y="6" width="3" height="5" fill="#000000" />
    <rect x="7" y="17" width="18" height="11" fill="#ffffff" stroke="#000000" strokeWidth="1" />
    <line x1="9" y1="20" x2="23" y2="20" stroke="#ff3333" strokeWidth="1.5" />
    <line x1="9" y1="23" x2="23" y2="23" stroke="#808080" strokeWidth="1" />
  </svg>
);

export const NotepadIcon: React.FC<RetroIconProps> = ({ className, size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    <rect x="5" y="3" width="20" height="26" fill="#ffffff" stroke="#000000" strokeWidth="1.5" />
    <path d="M9 8H21M9 12H21M9 16H21M9 20H17" stroke="#808080" strokeWidth="1.5" strokeLinecap="square" />
    <path d="M20 18L26 24L22 28L16 22L20 18Z" fill="#ffcc00" stroke="#000000" strokeWidth="1" />
  </svg>
);

export const WindowsLogoIcon: React.FC<RetroIconProps> = ({ className, size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
    <rect x="1" y="1" width="6" height="6" fill="#ff4b4b" />
    <rect x="9" y="1" width="6" height="6" fill="#44aa44" />
    <rect x="1" y="9" width="6" height="6" fill="#2b7cd3" />
    <rect x="9" y="9" width="6" height="6" fill="#ffcc00" />
  </svg>
);

export const SpeakerIcon: React.FC<RetroIconProps> = ({ className, size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
    <path d="M2 5H5L9 2V14L5 11H2V5Z" fill="#000000" />
    <path d="M12 4C13.5 5.5 13.5 10.5 12 12" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M14 2C16 4.5 16 11.5 14 14" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const MuteSpeakerIcon: React.FC<RetroIconProps> = ({ className, size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
    <path d="M2 5H5L9 2V14L5 11H2V5Z" fill="#666666" />
    <line x1="11" y1="5" x2="15" y2="11" stroke="#cc0000" strokeWidth="1.5" />
    <line x1="15" y1="5" x2="11" y2="11" stroke="#cc0000" strokeWidth="1.5" />
  </svg>
);

export const WarningTriangleIcon: React.FC<RetroIconProps> = ({ className, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M12 2L1 21H23L12 2Z" fill="#ffcc00" stroke="#000000" strokeWidth="1.5" />
    <rect x="11" y="9" width="2" height="6" fill="#000000" />
    <rect x="11" y="17" width="2" height="2" fill="#000000" />
  </svg>
);

export const CdIcon: React.FC<RetroIconProps> = ({ className, size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
    <circle cx="8" cy="8" r="7" fill="#dfdfdf" stroke="#000000" strokeWidth="1" />
    <circle cx="8" cy="8" r="4" fill="#a0aec0" stroke="#808080" strokeWidth="0.75" />
    <circle cx="8" cy="8" r="2" fill="#000000" />
  </svg>
);

export const GaugeIcon: React.FC<RetroIconProps> = ({ className, size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
    <rect x="1" y="1" width="14" height="14" rx="1" fill="#c0c0c0" stroke="#000000" strokeWidth="1" />
    <path d="M3 12C3 7 13 7 13 12" stroke="#000080" strokeWidth="1.5" />
    <line x1="8" y1="12" x2="11" y2="7" stroke="#ff3333" strokeWidth="1.5" />
  </svg>
);
