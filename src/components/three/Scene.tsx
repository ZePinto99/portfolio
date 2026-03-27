import { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMouseParallax } from '../../hooks/useMouseParallax';
import { FloatingTerminal } from './FloatingTerminal';
import { ParticleField } from './ParticleField';

interface SceneProps {
  isMobile: boolean;
}

export function Scene({ isMobile }: SceneProps) {
  const mouseRef = useMouseParallax();
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const onScroll = () => {
      const isMobileView = window.innerWidth < 768;
      const fadeStart = window.innerHeight * (isMobileView ? 0.25 : 0.4);
      const fadeEnd = window.innerHeight * (isMobileView ? 0.65 : 0.85);
      const progress = Math.max(0, Math.min(1, (window.scrollY - fadeStart) / (fadeEnd - fadeStart)));
      el.style.opacity = String(1 - progress);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      ref={wrapperRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
    <Canvas
      camera={{ position: [0, 0, 8], fov: 55 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ width: '100%', height: '100%' }}
    >
      <ambientLight intensity={0.15} />
      <pointLight position={[5, 5, 5]} color="#00d4ff" intensity={1.6} />
      <pointLight position={[-5, -3, 2]} color="#7b2fff" intensity={0.9} />
      <ParticleField isMobile={isMobile} />
      <FloatingTerminal mouseRef={mouseRef} isMobile={isMobile} />
    </Canvas>
    </div>
  );
}
