"use client";

import { Palette, Code, Megaphone, Fingerprint  } from "lucide-react";
import GlassCard from "../components/GlassCard";
import SectionReveal from "../components/SectionReveal";

const services = [
  {
    icon: Palette,
    title: "Creative",
    description:"Its’s Rolext time!, we elevate your business to the level of a Rolex from a Casio, through our commitment to delivering top-quality designs.",
    color: "#28c8b6",
  },
  {
    icon: Code,
    title: "Web Solutions",
    description:"choosing the perfect outfit to showcase your style, you can customize your own website that reflects your unique personality and sets you apart from the crow.",
    color: "#4f029d",
  },
  {
    icon: Fingerprint,
    title: "Branding",
    description:" Similar to lightning in the sky that catches everyone's attention, our branding service will make your brand stand out in the market.",
    color: "#7c3aed",
  },
  {
    icon: Megaphone,
    title: "Social Media Management",
    description: "We're here to assist you in connecting with your target audience and utilizing our proven content strategy, planning, media buying services, and beyond to their fullest potential.",
    color: "#06b6d4",
  },
  {
    icon: Megaphone ,
    title: "Marketing Consultancy",
    description: "We deliver results that drive growth and engagement, We're Expert marketing consultancy to help your brand shine. From strategy to execution.",
    color: "#06b6d4",
  },
  {
    icon: Megaphone,
    title: "Media",
    description: "Our media service ignites all of your target audience's senses - sight, sound, and emotion. Through expert video editing, precise shooting, captivating motion graphics and seamless audio.",
    color: "#06b6d4",
  },
  {
    icon: Megaphone,
    title: "Production",
    description: "Just as a mouth-watering dish goes from a mere picture on a menu to a delectable reality on your plate, We turn your ideas into tangible masterpieces. Let us bring your designs to life",
    color: "#06b6d4",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing Training",
    description: "Specialized training programs in media buying and planning, SEO, Search Engine Marketing, Google Ads, Facebook Ads, Social Media Strategies",
    color: "#06b6d4",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-sm font-medium text-[#28c8b6] mb-4">
            What We Do
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-[var(--font-space-grotesk)] text-white mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-white/60">
           We work with small to medium sized businesses as well as leading brands, We work closely with our clients to understand their unique needs and develop tailored solutions that meet their specific objectives. Whether it's launching a new product, increasing brand awareness, or driving sales, we have the expertise and experience to deliver results-driven campaigns that resonate with audiences and deliver measurable ROI.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <GlassCard
            key={service.title}
            delay={index * 0.1}
            glow="teal"
            className="group relative overflow-hidden h-full flex flex-col"
          >
            <div className="relative z-10 flex flex-col h-full">
              
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{
                  background: `linear-gradient(135deg, ${service.color}20, ${service.color}10)`,
                  border: `1px solid ${service.color}30`,
                }}
              >
                <service.icon className="w-7 h-7" style={{ color: service.color }} />
              </div>
          
              <h3 className="text-2xl font-bold text-white mb-3">
                {service.title}
              </h3>
          
              <p className="text-white/60 text-sm leading-relaxed flex-1">
                {service.description}
              </p>
          
            </div>
          </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

