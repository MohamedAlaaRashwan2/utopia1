"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlowButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  href?: string;
}

export default function GlowButton({
  children,
  className = "",
  variant = "primary",
  size = "md",
  onClick,
  href,
}: GlowButtonProps) {
  const baseStyles = "relative inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 cursor-pointer overflow-hidden group";
  
  const sizeStyles = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-10 py-4 text-lg",
  };

  const variantStyles = {
    primary: `
      bg-gradient-to-r from-[#28c8b6] to-[#1fa89a]
      text-[#0f0a1a]
      hover:scale-105
      hover:shadow-[0_0_30px_rgba(40,200,182,0.4),0_0_60px_rgba(40,200,182,0.2)]
      active:scale-95
    `,
    outline: `
      border border-[#28c8b6]/50
      text-[#28c8b6]
      bg-transparent
      hover:bg-[#28c8b6]/10
      hover:border-[#28c8b6]
      hover:shadow-[0_0_20px_rgba(40,200,182,0.3)]
      hover:scale-105
      active:scale-95
    `,
    ghost: `
      text-white/80
      bg-white/5
      border border-white/10
      hover:bg-white/10
      hover:border-white/20
      hover:scale-105
      active:scale-95
    `,
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        ${baseStyles}
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        ${className}
      `}
    >
      <span className="relative z-10">{children}</span>
      {variant === "primary" && (
        <div className="absolute inset-0 -z-0 bg-gradient-to-r from-[#28c8b6] via-[#4f029d] to-[#28c8b6] bg-[length:200%_100%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[shimmer_2s_linear_infinite]" />
      )}
    </Component>
  );
}

