import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Portfolios from '@/components/Portfolios';
import Vision from '@/components/Vision';
import Gallery from '@/components/Gallery';
import NewsAndTestimonials from '@/components/NewsAndTestimonials';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F8F9FA]">
      <Hero />
      <Stats />
      <About />
      <Experience />
      <Portfolios />
      <Vision />
      <Gallery />
      <NewsAndTestimonials />
    </main>
  );
}
