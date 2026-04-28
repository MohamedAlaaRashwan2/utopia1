"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, MessageCircle } from "lucide-react";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import SectionReveal from "../components/SectionReveal";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "utopia@utopiaagency.cc",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+201100033218",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "itay al-barud, beheira, EG",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-sm font-medium text-[#28c8b6] mb-4">
            Contact Us
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-[var(--font-space-grotesk)] text-white mb-6">
            Let's Build <span className="text-gradient">Together</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-white/60">
            Ready to start your project? Get in touch and let's create something amazing.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold font-[var(--font-space-grotesk)] text-white mb-6">
                Get In Touch
              </h3>
              <p className="text-white/60 mb-8">
                Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you within 24 hours.
              </p>

              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-[#28c8b6]" />
                    </div>
                    <div>
                      <div className="text-sm text-white/50">{item.label}</div>
                      <div className="text-white font-medium">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick CTA */}
            <div className="glass-card p-8">
              <h4 className="text-lg font-semibold text-white mb-3">
                Prefer a quick chat?
              </h4>
              <p className="text-white/60 text-sm mb-4">
                Book a free 30-minute discovery call to discuss your project.
              </p>
              <motion.a
                href="#"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#28c8b6] to-[#1fa89a] text-[#0f0a1a] font-semibold rounded-xl hover:shadow-[0_0_30px_rgba(40,200,182,0.4)] transition-shadow duration-300"
              >
                <Phone className="w-4 h-4" />
                Schedule a Call
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <form className="glass-card p-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Name</label>
                  <Input
                    placeholder="John Doe"
                    className="glass-input border-white/10 text-white placeholder:text-white/30 focus:border-[#28c8b6]/50 focus:ring-[#28c8b6]/20 h-12"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Email</label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    className="glass-input border-white/10 text-white placeholder:text-white/30 focus:border-[#28c8b6]/50 focus:ring-[#28c8b6]/20 h-12"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Subject</label>
                <Input
                  placeholder="Project Inquiry"
                  className="glass-input border-white/10 text-white placeholder:text-white/30 focus:border-[#28c8b6]/50 focus:ring-[#28c8b6]/20 h-12"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Subject</label>
                <Select>
                  <SelectTrigger className="min-w-[100%] p-6 glass-input border-white/10 text-white placeholder:text-white/30 focus:border-[#28c8b6]/50 focus:ring-[#28c8b6]/20 h-12">
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="Client" >Client </SelectItem>
                      <SelectItem value="Employee">Employee</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Message</label>
                <Textarea
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="min-h-[130px] glass-input border-white/10 text-white placeholder:text-white/30 focus:border-[#28c8b6]/50 focus:ring-[#28c8b6]/20 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-[#28c8b6] to-[#1fa89a] text-[#0f0a1a] font-semibold rounded-xl text-lg hover:shadow-[0_0_40px_rgba(40,200,182,0.4)] transition-shadow duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

