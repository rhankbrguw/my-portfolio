"use client";

import React, { useState } from "react";
import { soundService } from "@/services/soundService";

const skillCategories = [
  {
    id: "interface",
    name: "Interface",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "SvelteKit", "Tailwind CSS"],
  },
  {
    id: "systems",
    name: "Systems",
    items: ["Node.js", "Express.js", "PHP", "Laravel", "MySQL", "REST APIs", "JWT Auth"],
  },
  {
    id: "delivery",
    name: "Delivery",
    items: ["Git & GitHub", "Vercel", "Cloudflare", "Linux / Bash", "Dart / Flutter", "Performance Tuning"],
  },
];

interface SkillsAppProps {
  readonly onClose?: () => void;
}

export const SkillsApp: React.FC<SkillsAppProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<string>("general");

  const handleTab = (id: string) => {
    soundService.play("click");
    setActiveTab(id);
  };

  return (
    <div className="flex flex-col gap-2 font-sans text-xs text-[#111]">
      <menu role="tablist" className="flex flex-nowrap overflow-x-auto scrollbar-none border-b border-[#808080]">
        <li role="tab" aria-selected={activeTab === "general"} className={activeTab === "general" ? "active" : ""}>
          <button type="button" onClick={() => handleTab("general")} className="border-0 bg-transparent text-[11px] sm:text-xs p-1 whitespace-nowrap">
            General
          </button>
        </li>
        {skillCategories.map((cat) => (
          <li role="tab" key={cat.id} aria-selected={activeTab === cat.id} className={activeTab === cat.id ? "active" : ""}>
            <button type="button" onClick={() => handleTab(cat.id)} className="border-0 bg-transparent text-[11px] sm:text-xs p-1 whitespace-nowrap">
              {cat.name}
            </button>
          </li>
        ))}
      </menu>

      <div className="border-2 border-inset border-[#808080] bg-white p-3 min-h-[220px]">
        {activeTab === "general" && (
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 border-b border-[#dfdfdf] pb-2">
              <span className="text-3xl font-mono text-[#000080]">[:::]</span>
              <div>
                <p className="font-bold text-sm text-[#000080]">rhankbrguw Workstation</p>
                <p className="text-[11px] text-[#555]">Full-Stack Developer Specification</p>
              </div>
            </div>
            <div className="space-y-1 font-mono text-[11px]">
              <p>Owner: Raihan Akbar Gunawan</p>
              <p>Registered To: Computer Science Undergraduate</p>
              <p>Primary Core: TypeScript / React / Full-Stack</p>
              <p>Architecture: Strict Layered System Design</p>
              <p>Status: All Subsystems Operational</p>
            </div>
          </div>
        )}

        {skillCategories.map((cat) =>
          cat.id === activeTab ? (
            <div key={cat.id} className="flex flex-col gap-3">
              <p className="font-bold text-[#000080] border-b border-[#dfdfdf] pb-1">
                Installed Toolkit - {cat.name} Components
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                {cat.items.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 border border-[#808080] bg-[#f7f7f7] px-2 py-1.5 shadow-sm"
                  >
                    <span className="font-mono text-[10px] font-bold text-[#000080]">[OK]</span>
                    <span className="font-mono text-xs font-semibold">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : null
        )}
      </div>

      <div className="flex justify-end pt-2">
        <button
          type="button"
          className="button font-bold text-xs"
          onClick={() => {
            soundService.play("click");
            onClose?.();
          }}
        >
          OK
        </button>
      </div>
    </div>
  );
};
