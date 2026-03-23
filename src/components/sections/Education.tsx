import { SectionWrapper, SectionHeading } from '../ui/SectionWrapper';
import { EDUCATION } from '../../data/cv';

export function Education() {
  return (
    <SectionWrapper id="education">
      <SectionHeading>Education</SectionHeading>
      <div style={{
        background: 'var(--surface)',
        border: '1px solid rgba(0,212,255,0.2)',
        borderRadius: 12,
        padding: 'clamp(1.5rem, 4vw, 2.2rem)',
        maxWidth: 620,
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative corner glow */}
        <div style={{
          position: 'absolute',
          top: -40,
          right: -40,
          width: 120,
          height: 120,
          background: 'radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
          color: 'var(--primary)',
          opacity: 0.8,
          letterSpacing: '0.06em',
        }}>
          {EDUCATION.period}
        </span>

        <h3 style={{
          fontSize: 'clamp(1.05rem, 2.5vw, 1.3rem)',
          fontWeight: 600,
          color: 'var(--text)',
          marginTop: '0.3rem',
          marginBottom: '0.2rem',
        }}>
          {EDUCATION.degree}
        </h3>

        <p style={{
          fontSize: '0.92rem',
          color: 'var(--text-muted)',
        }}>
          {EDUCATION.school} · {EDUCATION.location}
        </p>
      </div>
    </SectionWrapper>
  );
}
