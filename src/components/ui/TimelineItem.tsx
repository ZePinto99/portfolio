import { motion } from 'framer-motion';
import type { ExperienceItem } from '../../types';

interface TimelineItemProps {
  item: ExperienceItem;
  index: number;
}

export function TimelineItem({ item, index }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: 'easeOut', delay: index * 0.12 }}
      style={{
        position: 'relative',
        paddingLeft: '2.2rem',
        paddingBottom: '2.8rem',
      }}
    >
      {/* Timeline dot */}
      <div style={{
        position: 'absolute',
        left: -7,
        top: 6,
        width: 14,
        height: 14,
        borderRadius: '50%',
        background: 'var(--bg)',
        border: '2px solid var(--primary)',
        boxShadow: '0 0 10px rgba(0,212,255,0.4)',
      }} />

      {/* Period badge */}
      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.75rem',
        color: 'var(--primary)',
        opacity: 0.8,
        letterSpacing: '0.04em',
      }}>
        {item.period}
      </span>

      <h3 style={{
        fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
        fontWeight: 600,
        color: 'var(--text)',
        marginTop: '0.2rem',
        marginBottom: '0.15rem',
      }}>
        {item.role}
      </h3>

      <p style={{
        fontSize: '0.88rem',
        color: 'var(--text-muted)',
        marginBottom: '0.9rem',
      }}>
        {item.company} · {item.location}
      </p>

      <ul style={{
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.45rem',
      }}>
        {item.points.map((point, i) => (
          <li key={i} style={{
            fontSize: '0.9rem',
            color: 'var(--text-muted)',
            lineHeight: 1.65,
            display: 'flex',
            gap: '0.6rem',
          }}>
            <span style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.1em' }}>▸</span>
            {point}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
