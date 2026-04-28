"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
const footerLinks = {
  Services: [
    { name: "UI/UX Design", href: "#" },
    { name: "Web Development", href: "#" },
    { name: "Branding", href: "#" },
    { name: "Marketing", href: "#" },
  ],
  Company: [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Press", href: "#" },
  ],
  Resources: [
    { name: "Documentation", href: "#" },
    { name: "Help Center", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms", href: "#" },
  ],
  Social: [
    { name: "Instagram", href: "https://www.instagram.com/utopiaagency_eg?igsh=dnBteDA5M2JmNGY2" },
    { name: "Facebook", href: "https://www.facebook.com/share/1Craey6F7P/?mibextid=wwXIfr" },
    { name: "TikTok", href: "https://www.tiktok.com/@utopiaagency_eg?_r=1&_t=ZS-95vS3Qk6JEr" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/utopia-marketing-b23623329/" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative pt-24 pb-8">
      {/* Top divider with glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#28c8b6]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[var(--font-space-grotesk)] text-white mb-6">
            Ready to Start Your <span className="text-gradient">Project?</span>
          </h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Let's discuss how we can help transform your digital presence and drive real results.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#28c8b6] to-[#1fa89a] text-[#0f0a1a] font-semibold rounded-xl text-lg hover:shadow-[0_0_40px_rgba(40,200,182,0.4)] transition-shadow duration-300"
          >
            Start a Project
            <ArrowUpRight className="w-5 h-5" />
          </motion.a>
        </motion.div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold font-[var(--font-space-grotesk)] mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/50 hover:text-[#28c8b6] transition-colors text-sm"
                      target="blaink"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="glass-card px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
          <Image src="/LOGO1.png" alt="Logo" width={100} height={100} />

          </div>
          <p className="text-white/40 text-sm text-center">
            &copy; {new Date().getFullYear()} Utopia Agency. All rights reserved.
          </p>
          <div className="flex gap-4">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/40 hover:text-white/70 text-sm transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

