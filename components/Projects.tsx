"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import SectionReveal from "../components/SectionReveal";

const projects = [
  {
    title: "Luminex Platform",
    category: "SaaS Dashboard",
    description: "AI-powered analytics dashboard with real-time data visualization.",
    color: "from-[#28c8b6] to-[#06b6d4]",
    gradient: "bg-gradient-to-br from-[#28c8b6]/20 to-[#06b6d4]/20",
  },
  {
    title: "Nova Finance",
    category: "Fintech App",
    description: "Mobile-first banking experience with seamless transactions.",
    color: "from-[#4f029d] to-[#7c3aed]",
    gradient: "bg-gradient-to-br from-[#4f029d]/20 to-[#7c3aed]/20",
  },
  {
    title: "Zenith Health",
    category: "Healthcare Platform",
    description: "Telemedicine platform connecting patients with specialists.",
    color: "from-[#28c8b6] to-[#4f029d]",
    gradient: "bg-gradient-to-br from-[#28c8b6]/20 to-[#4f029d]/20",
  },
  {
    title: "Pulse Commerce",
    category: "E-commerce",
    description: "Next-gen shopping experience with AR product preview.",
    color: "from-[#7c3aed] to-[#06b6d4]",
    gradient: "bg-gradient-to-br from-[#7c3aed]/20 to-[#06b6d4]/20",
  },
  {
    title: "Aurora Creative",
    category: "Brand Identity",
    description: "Complete rebrand for a global creative agency.",
    color: "from-[#28c8b6] to-[#7c3aed]",
    gradient: "bg-gradient-to-br from-[#28c8b6]/20 to-[#7c3aed]/20",
  },
  {
    title: "Stellar Social",
    category: "Social Platform",
    description: "Community-driven platform with advanced engagement tools.",
    color: "from-[#4f029d] to-[#06b6d4]",
    gradient: "bg-gradient-to-br from-[#4f029d]/20 to-[#06b6d4]/20",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-sm font-medium text-[#28c8b6] mb-4">
            Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-[var(--font-space-grotesk)] text-white mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-white/60">
            Explore our latest work and see how we help brands achieve their digital goals.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl glass-card aspect-[4/3] cursor-pointer">
                {/* Background gradient */}
                <div className={`absolute inset-0 ${project.gradient} transition-transform duration-500 group-hover:scale-110`} />
                
                {/* Abstract shape */}
                <div className={`absolute inset-0 flex items-center justify-center`}>
                  <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${project.color} opacity-40 blur-2xl group-hover:scale-150 transition-transform duration-700`} />
                </div>

                {/* Content overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a1a] via-[#0f0a1a]/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="text-sm font-medium text-[#28c8b6] mb-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold font-[var(--font-space-grotesk)] text-white mb-2 group-hover:text-[#28c8b6] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/60 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                    {project.description}
                  </p>
                </div>

                {/* Hover icon */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-xl glass-card flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <ExternalLink className="w-5 h-5 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

