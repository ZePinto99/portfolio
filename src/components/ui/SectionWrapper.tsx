import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  style?: React.CSSProperties;
}

export function SectionWrapper({ id, children, style }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'relative',
        zIndex: 1,
        padding: `var(--section-padding) 0`,
        ...style,
      }}
    >
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 3rem)' }}>
        {children}
      </div>
    </motion.section>
  );
}

export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 style={{
      fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
      fontWeight: 700,
      marginBottom: '3rem',
      color: 'var(--text)',
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
    }}>
      <span style={{ color: 'var(--primary)', fontFamily: 'var(--font-mono)', fontSize: '1.1rem', opacity: 0.8 }}>
        &gt;_
      </span>
      {children}
    </h2>
  );
}
