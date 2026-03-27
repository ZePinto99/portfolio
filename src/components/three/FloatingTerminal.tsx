import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { useTypewriter } from '../../hooks/useTypewriter';
import { BOOT_SEQUENCE } from '../../data/cv';

interface FloatingTerminalProps {
  mouseRef: React.MutableRefObject<{ x: number; y: number }>;
  isMobile: boolean;
}

function TerminalWindow({ text, isDone }: { text: string; isDone: boolean }) {
  return (
    <div style={{
      background: 'rgba(8, 8, 14, 0.93)',
      border: '1px solid rgba(0, 212, 255, 0.38)',
      borderRadius: '10px',
      boxShadow: '0 0 48px rgba(0, 212, 255, 0.12), 0 0 90px rgba(123, 47, 255, 0.07), 0 20px 60px rgba(0,0,0,0.6)',
      fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
      fontSize: '13px',
      lineHeight: '1.65',
      overflow: 'hidden',
      userSelect: 'none',
      minWidth: '380px',
    }}>
      {/* Title bar */}
      <div style={{
        background: 'rgba(255,255,255,0.04)',
        borderBottom: '1px solid rgba(0, 212, 255, 0.18)',
        padding: '10px 14px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}>
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#ff5f57', display: 'inline-block' }} />
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }} />
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#28c840', display: 'inline-block' }} />
        <span style={{ marginLeft: 10, color: 'rgba(144,144,176,0.7)', fontSize: '11px', letterSpacing: '0.04em' }}>
          portfolio.jar — terminal
        </span>
      </div>

      {/* Body */}
      <div style={{ padding: '18px 20px 20px', minHeight: '220px', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
        {text.split('\n').map((line, i) => {
          const isCommand = line.startsWith('$');
          const isLabel = line.startsWith('>');
          return (
            <div key={i} style={{
              color: isCommand ? '#e8e8ff' : isLabel ? '#00ff88' : 'rgba(144,144,176,0.5)',
              minHeight: '1.65em',
            }}>
              {line || '\u00a0'}
            </div>
          );
        })}
        {/* Blinking cursor */}
        <span style={{
          display: 'inline-block',
          width: 8,
          height: 15,
          background: isDone ? '#00d4ff' : 'transparent',
          verticalAlign: 'text-bottom',
          animation: isDone ? 'blink 1s step-end infinite' : 'none',
          marginLeft: 1,
        }} />
      </div>
    </div>
  );
}

export function FloatingTerminal({ mouseRef, isMobile }: FloatingTerminalProps) {
  const groupRef = useRef<THREE.Group>(null!);

  const { text, isDone } = useTypewriter({
    lines: BOOT_SEQUENCE,
    charDelay: 22,
    lineDelay: 110,
    startDelay: 900,
  });

  // On mobile, push terminal to the bottom third of the viewport so it doesn't
  // overlap the hero text which occupies the upper portion of the screen.
  const yBase = isMobile ? -2.8 : 0;

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    groupRef.current.position.y = yBase + Math.sin(state.clock.elapsedTime * 0.55) * 0.18;

    if (!isMobile) {
      const targetRotY = -0.22 + mouseRef.current.x * 0.14;
      const targetRotX = mouseRef.current.y * 0.07;
      groupRef.current.rotation.y += (targetRotY - groupRef.current.rotation.y) * 0.045 * (delta * 60);
      groupRef.current.rotation.x += (targetRotX - groupRef.current.rotation.x) * 0.045 * (delta * 60);
    }
  });

  const xPos = isMobile ? 0 : 2.2;
  const distanceFactor = isMobile ? 4.5 : 8;

  return (
    <group ref={groupRef} position={[xPos, yBase, 0]} rotation={[0, isMobile ? 0 : -0.22, 0]}>
      <Html
        transform
        distanceFactor={distanceFactor}
        style={{ width: isMobile ? '320px' : '420px', pointerEvents: 'none' }}
        zIndexRange={[10, 0]}
      >
        <TerminalWindow text={text} isDone={isDone} />
      </Html>
    </group>
  );
}
