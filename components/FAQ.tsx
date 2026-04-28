"use client";

import { motion } from "framer-motion";
import SectionReveal from "../components/SectionReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";

const faqs = [
  {
    question: "What services does Utopia offer?",
    answer:
      "Utopia provides comprehensive digital solutions including UI/UX design, web and mobile development, brand identity creation, and digital marketing strategies. We handle everything from concept to launch.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on complexity. A standard website typically takes 4-6 weeks, while enterprise solutions may take 3-6 months. We provide detailed timelines during our initial consultation.",
  },
  {
    question: "What is your design process?",
    answer:
      "Our process follows five phases: Discovery (understanding your goals), Strategy (planning the approach), Design (creating visuals), Development (building the solution), and Launch (deploying and optimizing).",
  },
  {
    question: "Do you offer ongoing maintenance?",
    answer:
      "Yes! We offer various maintenance packages including regular updates, security monitoring, performance optimization, and content updates. Our Enterprise plan includes comprehensive ongoing support.",
  },
  {
    question: "Can you work with our existing brand?",
    answer:
      "Absolutely. We can work within your existing brand guidelines or help evolve your brand identity. Our team ensures all work aligns with your established visual language while pushing creative boundaries.",
  },
  {
    question: "What makes Utopia different?",
    answer:
      "We combine strategic thinking with exceptional design and cutting-edge technology. Our focus on measurable results, transparent communication, and long-term partnerships sets us apart from typical agencies.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 sm:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-sm font-medium text-[#28c8b6] mb-4">
            FAQ
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-[var(--font-space-grotesk)] text-white mb-6">
            Common <span className="text-gradient">Questions</span>
          </h2>
        </SectionReveal>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Accordion className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card border-none px-6 data-[state=open]:border-[#28c8b6]/30 data-[state=open]:glow-teal transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-white font-semibold font-[var(--font-space-grotesk)] py-5 hover:no-underline hover:text-[#28c8b6] transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/60 pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

