import { useState, useEffect } from 'react';
import { OWNER } from '../../data/cv';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
];

export function Navbar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.82);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: '1rem clamp(1.5rem, 5vw, 3rem)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: visible ? 'rgba(10,10,15,0.85)' : 'transparent',
      backdropFilter: visible ? 'blur(12px)' : 'none',
      borderBottom: visible ? '1px solid rgba(0,212,255,0.08)' : '1px solid transparent',
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(-8px)',
      transition: 'opacity 0.3s ease, transform 0.3s ease, background 0.3s ease, border-color 0.3s ease',
      pointerEvents: visible ? 'auto' : 'none',
    }}>
      <a
        href="#hero"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.95rem',
          color: 'var(--primary)',
          letterSpacing: '0.04em',
        }}
      >
        {OWNER.name.split(' ')[0].toLowerCase()}.dev
      </a>

      <div style={{ display: 'flex', gap: 'clamp(1rem, 3vw, 2rem)', alignItems: 'center' }}>
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            style={{
              fontSize: '0.88rem',
              color: 'var(--text-muted)',
              transition: 'color 0.2s',
              letterSpacing: '0.02em',
            }}
            onMouseEnter={e => ((e.target as HTMLElement).style.color = 'var(--primary)')}
            onMouseLeave={e => ((e.target as HTMLElement).style.color = 'var(--text-muted)')}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
