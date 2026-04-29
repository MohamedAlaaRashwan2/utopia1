'use client';

import ColorBends from '@/components/ColorBends';
import DotField from '@/components/DotField';
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const brandLogos = [
  { src: '/next.svg', alt: 'Next.js' },
  { src: '/vercel.svg', alt: 'Vercel' },
  { src: '/window.svg', alt: 'Window' },
  { src: '/globe.svg', alt: 'Globe' },
  { src: '/file.svg', alt: 'File' },
];

export default function HeroSection() {
  return (
    <section id='home' className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-black via-[#0a0a0a] to-black flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Background Shader Layers */}
        <div className="absolute inset-0 z-0">
        <DotField
          dotRadius={2}
          dotSpacing={14}
          cursorRadius={500}
          cursorForce={0.1}
          bulgeOnly
          bulgeStrength={67}
          glowRadius={160}
          sparkle
          waveAmplitude={0}
          gradientFrom="rgba(96, 165, 250, 0.25)"
          gradientTo="rgba(168, 85, 247, 0.2)"
          glowColor="#0000"
        />
      </div>
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ColorBends
          colors={['#4f029d', '#2e2157']}
          rotation={90}
          speed={0.2}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={1}
          noise={0.15}
          parallax={0.5}
          iterations={1}
          intensity={1.2}
          bandWidth={1}
          transparent
          autoRotate={0}
        />
      </div> 
      {/* Hero Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto pt-40 pb-20"
      >
      {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
          >
            <Sparkles className="w-4 h-4 text-[#28c8b6]" />
            <span className="text-sm text-white/80">
            The Website is still under development
            </span>
          </motion.div>
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
          <span className="block">Grow Faster With</span>
          <span className="block mt-2 sm:mt-4">
            <span className="font-playfair italic font-medium text-blue-100 bg-gradient-to-r from-[#28c8b6] to-[#4f029d] bg-clip-text text-transparent">
            Utopia Marketing 
            </span>{' '}
            <span className="font-bold text-white"> Agency</span>
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 sm:mt-8 text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed">
        We craft powerful marketing strategies, stunning visuals, and conversion-driven campaigns to take your brand to the next level.
        </p>

        {/* CTA Button */}
        <button className="mt-8 sm:mt-10 group relative inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white font-medium text-sm sm:text-base transition-all duration-300 hover:bg-white/10 hover:border-blue-400/50 hover:shadow-[0_0_24px_rgba(96,165,250,0.35)] hover:-translate-y-0.5">
          Book a Call
        </button>
      </motion.div>
    </section>
  );
}

