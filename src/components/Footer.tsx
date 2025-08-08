import React from "react";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#1A1A1A] mt-20">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm text-[#E5E5E5]">
            &copy; {currentYear} Raihan Akbar Gunawan. All Rights Reserved.
          </p>
        </div>
        <div className="flex space-x-6">
          <a
            href="https://github.com/rhankbrguw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#E5E5E5] hover:text-[#3EB489] transition-colors duration-300"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/raihan-akbar-2b5820334/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#E5E5E5] hover:text-[#3EB489] transition-colors duration-300"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:raihanakbarg28@gmail.com"
            className="text-[#E5E5E5] hover:text-[#3EB489] transition-colors duration-300"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://www.instagram.com/rhankbrguw_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#E5E5E5] hover:text-[#3EB489] transition-colors duration-300"
          >
            <Instagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
