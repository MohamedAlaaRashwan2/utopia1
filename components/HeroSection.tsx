'use client';

import Image from 'next/image';
import ColorBends from '@/components/ColorBends';
import DotField from '@/components/DotField';

const brandLogos = [
  { src: '/next.svg', alt: 'Next.js' },
  { src: '/vercel.svg', alt: 'Vercel' },
  { src: '/window.svg', alt: 'Window' },
  { src: '/globe.svg', alt: 'Globe' },
  { src: '/file.svg', alt: 'File' },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-black via-[#0a0a0a] to-black flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
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
          colors={[ '#28c8d6', '#4f029d', '#2e2157']}
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

      {/* Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/15 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto pt-40 pb-20">
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
          <span className="block">Grow Faster With</span>
          <span className="block mt-2 sm:mt-4">
            <span className="font-playfair italic font-medium text-blue-100">
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

        {/* Brands Section */}
        {/* <div className="mt-16 sm:mt-20 flex flex-col items-center gap-6">
          <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-medium">
            Trusted by leading brands:
          </p>
          <div className="flex items-center justify-center gap-8 sm:gap-10 flex-wrap">
            {brandLogos.map((logo) => (
              <div
                key={logo.alt}
                className="relative w-20 h-8 sm:w-24 sm:h-10 opacity-40 grayscale hover:opacity-60 hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}

