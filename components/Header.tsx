'use client';

import { useState } from 'react';
import { Diamond, Menu, X } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  'Why Us',
  'Projects',
  'Testimonials',
  'Team',
  'Pricing',
  'FAQ',
];

export default function GlassNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl z-50">
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-lg px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5 text-white font-semibold text-lg tracking-tight">
        <Image 
         alt="logo" 
         src="/LOGO1.png" 
            width={80} 
            height={80} 
            className="rounded-full"
            />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-white/60 text-sm hover:text-white transition-colors duration-300 relative group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white/80 hover:text-white transition-colors duration-300 p-1"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mt-3 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col gap-4 md:hidden">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-white/70 hover:text-white transition-colors duration-300 text-sm"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

