import About from '@/components/About';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  return (
    <main className="min-h-screen relative bg-black">
      <HeroSection />
      <About/>
    </main>
  );
}
