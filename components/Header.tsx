'use client';

import { useState, useEffect } from 'react';
import { Diamond, Menu, X } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";
import Lenis from "lenis";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "We Help", href: "#We_Help" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Team", href: "#team" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const lenis = new Lenis();
    (window as any).lenis = lenis;
  
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
  
    requestAnimationFrame(raf);
  
    return () => lenis.destroy();
  }, []);
  const scrollTo = (target: string) => {
    const el = document.querySelector(target);
    if (!el) return;
  
    const lenis = (window as any).lenis;
    lenis?.scrollTo(el);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`glass-apple w-[90%] mx-auto fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glass-strong py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#home"
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
            <Image src="/LOGO1.png" alt="Logo" width={100} height={100} />

            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <motion.button
                  onClick={() => scrollTo(link.href)}
                  key={link.name}
                  className="cursor-pointer px-4 py-2 text-sm font-medium text-white/70 hover:text-white rounded-lg hover:bg-white/5 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                >
                  {link.name}
                </motion.button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 bg-gradient-to-r from-[#28c8b6] from-1% via-[#4f029d] via-50% to-[#2e2157]  to-90% text-[#0f0a1a] font-semibold rounded-xl hover:shadow-[0_0_20px_rgba(40,200,182,0.4)] transition-shadow duration-300"
              >
                Book a Call
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white/80 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-[#0f0a1a]/95 backdrop-blur-xl" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="absolute top-20 left-4 right-4 glass-card p-6"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-4 py-3 text-lg font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}
                <motion.a
                  href="#contact"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.35 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-4 px-6 py-3 bg-gradient-to-r from-[#28c8b6] to-[#1fa89a] text-[#0f0a1a] font-semibold rounded-xl text-center"
                >
                  Book a Call
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

