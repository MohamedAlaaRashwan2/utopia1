"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: "teal" | "purple" | "none";
  delay?: number;
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
  glow = "none",
  delay = 0,
}: GlassCardProps) {
  const glowClass =
    glow === "teal"
      ? "hover:glow-teal-strong"
      : glow === "purple"
      ? "hover:glow-purple-strong"
      : "hover:glow-teal";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={`
          glass-card p-6 md:p-8
          transition-all duration-300
      `}
    >
      {children}
    </motion.div>
  );
}

