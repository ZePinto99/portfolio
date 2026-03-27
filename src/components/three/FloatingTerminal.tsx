import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { useTypewriter } from '../../hooks/useTypewriter';
import { BOOT_SEQUENCE } from '../../data/cv';
import { TerminalWindow } from '../ui/TerminalWindow';

interface FloatingTerminalProps {
  mouseRef: React.MutableRefObject<{ x: number; y: number }>;
}

export function FloatingTerminal({ mouseRef }: FloatingTerminalProps) {
  const groupRef = useRef<THREE.Group>(null!);

  const { text, isDone } = useTypewriter({
    lines: BOOT_SEQUENCE,
    charDelay: 22,
    lineDelay: 110,
    startDelay: 900,
  });

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.55) * 0.18;

    const targetRotY = -0.22 + mouseRef.current.x * 0.14;
    const targetRotX = mouseRef.current.y * 0.07;
    groupRef.current.rotation.y += (targetRotY - groupRef.current.rotation.y) * 0.045 * (delta * 60);
    groupRef.current.rotation.x += (targetRotX - groupRef.current.rotation.x) * 0.045 * (delta * 60);
  });

  return (
    <group ref={groupRef} position={[2.2, 0, 0]} rotation={[0, -0.22, 0]}>
      <Html
        transform
        distanceFactor={8}
        style={{ width: '420px', pointerEvents: 'none' }}
        zIndexRange={[10, 0]}
      >
        <TerminalWindow text={text} isDone={isDone} />
      </Html>
    </group>
  );
}
