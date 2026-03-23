import { SectionWrapper, SectionHeading } from '../ui/SectionWrapper';
import { OWNER } from '../../data/cv';

export function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeading>About</SectionHeading>
      <p style={{
        maxWidth: 680,
        fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
        color: 'var(--text-muted)',
        lineHeight: 1.8,
      }}>
        {OWNER.summary}
      </p>
      <div style={{
        marginTop: '2rem',
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap',
      }}>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.82rem',
          color: 'var(--primary)',
          background: 'rgba(0,212,255,0.07)',
          border: '1px solid rgba(0,212,255,0.2)',
          borderRadius: 6,
          padding: '0.3rem 0.75rem',
        }}>
          📍 {OWNER.location}
        </span>
        <a
          href={`mailto:${OWNER.email}`}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.82rem',
            color: 'var(--text-muted)',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 6,
            padding: '0.3rem 0.75rem',
            transition: 'color 0.2s, border-color 0.2s',
          }}
          onMouseEnter={e => {
            const el = e.currentTarget;
            el.style.color = 'var(--primary)';
            el.style.borderColor = 'rgba(0,212,255,0.3)';
          }}
          onMouseLeave={e => {
            const el = e.currentTarget;
            el.style.color = 'var(--text-muted)';
            el.style.borderColor = 'rgba(255,255,255,0.08)';
          }}
        >
          ✉ {OWNER.email}
        </a>
      </div>
    </SectionWrapper>
  );
}
