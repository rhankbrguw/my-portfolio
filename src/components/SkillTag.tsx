import React from "react";
import Link from "next/link";

interface SkillTagProps {
  name: string;
  icon: React.ReactNode;
  url: string;
}

const SkillTag: React.FC<SkillTagProps> = ({ name, icon, url }) => {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 bg-[#1A1A1A] text-[#E5E5E5] px-4 py-2 rounded-lg border border-transparent hover:border-[#3EB489] transition-colors cursor-pointer"
    >
      {icon}
      <span className="font-medium">{name}</span>
    </Link>
  );
};

export default SkillTag;
