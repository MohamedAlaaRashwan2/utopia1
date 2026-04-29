"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/201100033218"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-[#28c8b6] to-[#1fa89a] flex items-center justify-center shadow-[0_0_30px_rgba(40,200,182,0.4)] hover:shadow-[0_0_40px_rgba(40,200,182,0.6)] transition-shadow duration-300"
    >
      <MessageCircle className="w-7 h-7 text-[#0f0a1a]" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#4f029d] rounded-full border-2 border-[#0f0a1a]" />
    </motion.a>
  );
}

