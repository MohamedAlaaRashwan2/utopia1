"use client";

import { motion } from "framer-motion";
import { Globe, MessageSquare } from "lucide-react";
import GlassCard from "../components/GlassCard";
import SectionReveal from "../components/SectionReveal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import ProfileCard from '@/app/components/ProfileCard';

// ✅ مهم جدًا
import "swiper/css";
import "swiper/css/pagination";

const team = [
  {
    id: 1,
    name: "Mohamed Alaa",
    image: "/me.png",
    role: "Web Developer",
    initials: "AR",
    color: "from-[#28c8b6] to-[#06b6d4]",
    email: "rashwan.site",
  },
  {
    id: 2,
    name: "Aya Shadad",
    image: "/aya.png",
    role: "content creation ",
    initials: "AR",
    color: "from-[#28c8b6] to-[#06b6d4]",
    email: "mailto:",
  },
  {
    id: 3,
    name: "Mohamed Magdy",
    image: "/hamsa.png",
    role: "Medoa Production Manager",
    initials: "AR",
    color: "from-[#28c8b6] to-[#06b6d4]",
    email: "rashwan.site",
  },
  {
    id: 4,
    name: "Rana Youssef",
    image: "/rana.png",
    role: "CO-Founder & CEO",
    initials: "AR",
    color: "from-[#28c8b6] to-[#06b6d4]",
    email: "rashwan.site",
  },
  {
    id: 5,
    name: "Mustafa Alaa",
    image: "/mostafa.png",
    role: "Founder & CTO",
    initials: "AR",
    color: "from-[#28c8b6] to-[#06b6d4]",
    email: "rashwan.site",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-sm font-medium text-[#28c8b6] mb-4">
            Our Team
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Meet The <span className="text-gradient">Experts</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-white/60">
            Passionate professionals dedicated to bringing your vision to life.
          </p>
        </SectionReveal>

        {/* ✅ Swiper لوحده بدون grid */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
          loop={true}
          speed={600}
          grabCursor={true}
          centeredSlides={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3 },
          }}  
        >
          {team.map((member, index) => (
            <SwiperSlide key={member.id}>
              <div
                className="relative z-10  px-2"
                id= "221">
                <ProfileCard
                  behindGlowEnabled = {true}
                name={member.name}
                title={member.role}
                handle={`${member.name.toLowerCase().replace(/\s/g, '')}`}
                status="Online"
                contactText="Contact Me"
                avatarUrl={member.image}
                miniAvatarUrl={member.image}
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => window.open(`https://${member.email}`, '_blank')}
                behindGlowColor="rgba(125, 190, 255, 0.67)"
                behindGlowSize="60px"
                iconUrl="/icon2.png"
                innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
              />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}