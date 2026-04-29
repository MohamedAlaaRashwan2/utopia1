"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { BookOpen, GraduationCap, Users, Globe, FlaskConical, ArrowDown, ChevronRight } from "lucide-react";
import GlassCard from "../components/GlassCard";
import SectionReveal from "../components/SectionReveal";
import GlowButton from "../components/GlowButton";


// Journey Timeline Data
const journeySteps = [
  {
    icon: BookOpen,
    title: "Courses & Learning",
    description: "Building foundations through structured education",
  },
  {
    icon: GraduationCap,
    title: "Master's Degrees",
    description: "Deepening expertise in specialized fields",
  },
  {
    icon: Users,
    title: "Mentors",
    description: "Learning from industry leaders and experts",
  },
  {
    icon: Globe,
    title: "Real Experiences",
    description: "Egypt, Regional & Global market exposure",
  },
  {
    icon: FlaskConical,
    title: "Experiments & Failures",
    description: "Testing ideas and learning from mistakes",
  },
];

// Fields Data
const fields = [
  {
    id: "economic",
    title: "Economic",
    icon: "📊",
    description: "Understanding market dynamics, financial systems, and economic trends that drive business decisions.",
  },
  {
    id: "political",
    title: "Political",
    icon: "🏛️",
    description: "Navigating the complex landscape of political influences on commerce and public perception.",
  },
  {
    id: "medical",
    title: "Medical",
    icon: "🏥",
    description: "Healthcare marketing requires empathy, accuracy, and strict adherence to ethical standards.",
  },
  {
    id: "commercial",
    title: "Commercial",
    icon: "💼",
    description: "Creating strategies that connect products with consumers in meaningful, profitable ways.",
  },
];

// Guidance Steps
const guidanceSteps = [
  {
    title: "Learn a skill with market demand",
    description: "Identify what the market needs and master it",
    number: "01",
  },
  {
    title: "Work (even for free at first)",
    description: "Gain experience and build your portfolio",
    number: "02",
  },
  {
    title: "Understand business",
    description: "Learn how businesses create and capture value",
    number: "03",
  },
  {
    title: "Build something small",
    description: "Start small, test ideas, iterate quickly",
    number: "04",
  },
  {
    title: "Show progress",
    description: "Document your journey and demonstrate growth",
    number: "05",
  },
];

// Animated Text Component
function AnimatedText({ text, className }: { text: string; className?: string }) {
  const words = text.split(" ");

  return (
    <span className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08, duration: 0.4 }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

// Floating Particles Component
function FloatingParticles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            y: [0, -100],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
          className="absolute rounded-full bg-[#28c8b6]/30"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
        />
      ))}
    </div>
  );
}


// Hero Section
function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

return (
    <section
    id="We_Help"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <FloatingParticles />

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="inline-block px-5 py-2 rounded-full glass-card text-sm font-medium text-[#28c8b6]">
            Our Story
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-[var(--font-space-grotesk)] leading-relaxed mb-8"
        >
          <AnimatedText text="While we were still studying, we searched for anything that could help us truly understand business..." />
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <GlowButton size="lg" onClick={() => {
            document.getElementById("journey")?.scrollIntoView({ behavior: "smooth" });
          }}>
            Discover Our Journey
            <ArrowDown className="ml-2 w-5 h-5" />
          </GlowButton>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ opacity: [1, 0.3, 1], y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-[#28c8b6]"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}




// Journey Timeline Section
function JourneySection() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  return (
    <section id="journey" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#28c8b6]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-sm font-medium text-[#28c8b6] mb-4">
            Our Journey
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-[var(--font-space-grotesk)] text-white">
            The Path That <span className="text-gradient">Shaped Us</span>
          </h2>
        </SectionReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#28c8b6]/30 to-transparent hidden md:block" />
          {/* Mobile horizontal line */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-[#28c8b6]/30 to-transparent md:hidden" />

          <div className="space-y-8 md:space-y-0">
            {journeySteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } md:justify-between`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#28c8b6] shadow-[0_0_20px_rgba(40,200,182,0.5)] z-10 hidden md:block" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#28c8b6] shadow-[0_0_15px_rgba(40,200,182,0.5)] z-10 md:hidden" />

                {/* Content */}
                <div className={`w-full md:w-[45%] ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} pl-8 md:pl-0`}>
                  <div
                    onClick={() => setActiveStep(activeStep === index ? null : index)}
                    onMouseEnter={() => setActiveStep(index)}
                    onMouseLeave={() => setActiveStep(null)}
                  >
                    <GlassCard
                      hover
                      glow="teal"
                      delay={0.1}
                      className={`cursor-pointer transition-all duration-300 ${
                        activeStep === index ? "scale-105 border-[#28c8b6]/50" : ""
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#28c8b6]/20 to-[#4f029d]/20 flex items-center justify-center flex-shrink-0"
                        >
                          <step.icon className="w-6 h-6 text-[#28c8b6]" />
                        </motion.div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2 font-[var(--font-space-grotesk)]">
                            {step.title}
                          </h3>
                          <p className="text-white/60 text-sm leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </GlassCard>
                  </div>
                </div>

                {/* Empty space for opposite side */}
                <div className="hidden md:block md:w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Philosophy Section
function PhilosophySection() {
  const statements = [
    "We don't market everything the same way",
    "Each field has its own mindset",
    "We understand before we execute",
  ];

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#4f029d]/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#28c8b6]/10 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Bold Statements */}
          <SectionReveal direction="left">
            <div className="space-y-8">
              <span className="inline-block px-4 py-1.5 rounded-full glass-card text-sm font-medium text-[#28c8b6]">
                Our Philosophy
              </span>
              {statements.map((statement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="group"
                >
                  <motion.p
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="text-2xl sm:text-3xl md:text-4xl font-bold font-[var(--font-space-grotesk)] text-white leading-tight cursor-pointer"
                  >
                    <span className="text-[#28c8b6] mr-3">-</span>
                    {statement}
                  </motion.p>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                    className="h-0.5 w-0 bg-gradient-to-r from-[#28c8b6] to-[#4f029d] mt-4 group-hover:w-full transition-all duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </SectionReveal>

          {/* Right - Abstract Visual */}
          <SectionReveal direction="right" delay={0.3}>
            <div className="relative">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 60,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 m-auto w-80 h-80 border border-[#28c8b6]/20 rounded-full"
              />
              <motion.div
                animate={{
                  rotate: [360, 0],
                }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 m-auto w-64 h-64 border border-[#4f029d]/30 rounded-full"
              />
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 m-auto w-48 h-48 bg-gradient-to-br from-[#28c8b6]/20 to-[#4f029d]/20 rounded-full blur-xl"
              />
              <div className="relative z-10 glass-card p-8 text-center">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <span className="text-6xl">🎯</span>
                  <p className="mt-4 text-white/80 font-medium">
                    Strategy First, Execution Second
                  </p>
                </motion.div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}

// Fields Section
function FieldsSection() {
  const [activeField, setActiveField] = useState<string | null>(null);

  return (
    <section className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#28c8b6]/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-sm font-medium text-[#28c8b6] mb-4">
            Our Expertise
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-[var(--font-space-grotesk)] text-white">
            Fields We <span className="text-gradient">Worked In</span>
          </h2>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fields.map((field, index) => (
            <motion.div
              key={field.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onClick={() => setActiveField(activeField === field.id ? null : field.id)}
              className="cursor-pointer"
            >
              <GlassCard
                hover
                glow={activeField === field.id ? "teal" : "none"}
                delay={0.1}
                className="h-full"
              >
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="text-5xl mb-4"
                  >
                    {field.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2 font-[var(--font-space-grotesk)]">
                    {field.title}
                  </h3>
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: activeField === field.id ? "auto" : 0,
                      opacity: activeField === field.id ? 1 : 0,
                    }}
                    className="overflow-hidden"
                  >
                    <p className="text-white/60 text-sm pt-2 leading-relaxed">
                      {field.description}
                    </p>
                  </motion.div>
                  {activeField === field.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-3 flex justify-center"
                    >
                      <ChevronRight className="w-5 h-5 text-[#28c8b6] rotate-90" />
                    </motion.div>
                  )}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Mindset Section
function MindsetSection() {
  const statements = [
    "A job isn't security",
    "A salary isn't the solution",
    "A skill alone isn't enough",
  ];

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4f029d]/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#28c8b6]/10 rounded-full blur-[80px]"
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <SectionReveal>
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-sm font-medium text-[#28c8b6] mb-8">
            Our Mindset
          </span>
        </SectionReveal>

        <div className="space-y-6">
          {statements.map((statement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <motion.p
                whileHover={{ scale: 1.02 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-[var(--font-space-grotesk)] text-white leading-tight"
              >
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.2 }}
                  className="text-[#28c8b6]"
                >
                  ✦{" "}
                </motion.span>
                {statement}
              </motion.p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 text-lg text-white/60 max-w-2xl mx-auto"
        >
          True success comes from combining skills with business understanding,
          continuous learning, and taking calculated risks.
        </motion.p>
      </div>
    </section>
  );
}

// Guidance Section
function GuidanceSection() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#28c8b6]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#4f029d]/10 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-sm font-medium text-[#28c8b6] mb-4">
            Start Your Journey
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-[var(--font-space-grotesk)] text-white">
            How to <span className="text-gradient">Begin</span>
          </h2>
        </SectionReveal>

        {/* Path UI */}
        <div className="relative">
          {/* Vertical connecting line */}
          {/* <div className="absolute left-8 sm:left-12 top-0 bottom-0 w-px bg-gradient-to-b from-[#28c8b6]/50 via-[#4f029d]/30 to-[#28c8b6]/50" /> */}

          <div className="space-y-8">
            {guidanceSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="relative flex items-start gap-6"
              >
                {/* Step number circle */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="relative z-10 w-16 sm:w-20 h-16 sm:h-20 rounded-2xl glass-card flex items-center justify-center flex-shrink-0 border-2 border-[#28c8b6]/30 hover:border-[#28c8b6]/60 transition-colors"
                >
                  <span className="text-xl sm:text-2xl font-bold text-gradient font-[var(--font-space-grotesk)]">
                    {step.number}
                  </span>
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-[#28c8b6]/10 blur-xl" />
                </motion.div>

                {/* Content */}
                <div className="pt-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-[var(--font-space-grotesk)]">
                    {step.title}
                  </h3>
                  <p className="text-white/60">{step.description}</p>
                </div>

                {/* Connector dot */}
                {/* <div className="absolute left-8 sm:left-12 top-8 sm:top-10 -translate-x-1/2 w-3 h-3 rounded-full bg-[#28c8b6] shadow-[0_0_10px_rgba(40,200,182,0.5)]" /> */}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Closing Section
function ClosingSection() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#28c8b6]/20 to-[#4f029d]/20 rounded-full blur-[100px]"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-sm font-medium text-[#28c8b6] mb-8">
            Let's Work Together
          </span>
        </motion.div>

        <div className="space-y-6">
          {[
            "You don't have to start big",
            "But you have to start right",
          ].map((text, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-[var(--font-space-grotesk)] text-white leading-tight"
            >
              {text}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12"
        >
          <GlowButton
            size="lg"
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Work With Us
            <ChevronRight className="ml-2 w-5 h-5" />
          </GlowButton>
        </motion.div>
      </div>
    </section>
  );
}

// Main Component
export default function About() {
  return (
    <div className="min-h-screen bg-[#0f0a1a]">
      <HeroSection />
      <JourneySection />
      <PhilosophySection />
      <FieldsSection /> 
      <MindsetSection />
      <GuidanceSection />
      <ClosingSection />
    </div>
  );
}