import About from '@/components/About';
import HeroSection from '@/components/HeroSection';
import WhatsAppButton from "@/components/WhatsAppButton";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-black">
      <HeroSection />
      <About/>
      <Services />
      <Projects />
      <Team />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
