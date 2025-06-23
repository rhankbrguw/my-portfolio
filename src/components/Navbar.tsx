"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="w-full bg-background/80 backdrop-blur-sm fixed top-0 z-50 border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Link
                href="/"
                onClick={closeMenu}
                className="flex items-center space-x-3 group transition-all duration-300"
              >
                <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-[#3EB489]/20 transition-all duration-300">
                  <Image
                    src="/pp.png"
                    alt="Samaele13 Profile"
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <span className="text-lg font-semibold text-white transition-colors duration-300">
                  Samaele13
                </span>
              </Link>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-gray-300 hover:text-[#3EB489] hover:bg-white/5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3EB489] group-hover:w-full transition-all duration-300"></span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none transition-all duration-300"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full pt-16 space-y-8">
              <div className="flex items-center space-x-4 mb-8">
                <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-[#3EB489]/30">
                  <Image
                    src="/pp.png"
                    alt="Samaele13 Profile"
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <span className="text-2xl font-semibold text-white">
                  Samaele13
                </span>
              </div>

              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className="text-gray-300 hover:text-[#3EB489] block px-6 py-3 rounded-lg text-xl font-medium transition-all duration-300 hover:bg-white/5"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
