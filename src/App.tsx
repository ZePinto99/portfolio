import { useState, useEffect } from 'react';
import { Navbar } from './components/ui/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Skills } from './components/sections/Skills';
import { Education } from './components/sections/Education';
import { Footer } from './components/sections/Footer';

export default function App() {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', onResize, { passive: true });
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <>
      <Navbar />
      <Hero isMobile={isMobile} />
      <main>
        <About />
        <Experience />
        <Skills />
        <Education />
      </main>
      <Footer />
    </>
  );
}
