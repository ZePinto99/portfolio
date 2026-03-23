import { motion, type Variants } from 'framer-motion';
import { Scene } from '../three/Scene';
import { OWNER } from '../../data/cv';

interface HeroProps {
  isMobile: boolean;
}

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1] } },
};

const NAV_ANCHORS = [
  { label: '#about',      href: '#about' },
  { label: '#experience', href: '#experience' },
  { label: '#skills',     href: '#skills' },
];

export function Hero({ isMobile }: HeroProps) {
  return (
    <section
      id="hero"
      style={{
        height: '100vh',
        minHeight: 600,
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Scene isMobile={isMobile} />

      <div style={{
        maxWidth: 'var(--container)',
        margin: '0 auto',
        padding: '0 clamp(1.5rem, 5vw, 3rem)',
        width: '100%',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: isMobile ? 'flex-start' : 'flex-start',
        paddingTop: isMobile ? 'clamp(4rem, 12vh, 6rem)' : 0,
        gap: isMobile ? '1.5rem' : 0,
        textAlign: isMobile ? 'center' : 'left',
      }}>
        {/* Left: text content — z-index above drei Html terminal overlay */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          style={{
            flex: isMobile ? undefined : '0 0 50%',
            maxWidth: isMobile ? 500 : undefined,
            position: 'relative',
            zIndex: 20,
          }}
        >
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: 'var(--font-mono)',
              color: 'var(--primary)',
              fontSize: '0.9rem',
              marginBottom: '0.8rem',
              letterSpacing: '0.08em',
            }}
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            variants={fadeUp}
            style={{
              fontSize: 'clamp(2.8rem, 8vw, 5.2rem)',
              fontWeight: 700,
              lineHeight: 1.08,
              marginBottom: '0.6rem',
              color: 'var(--text)',
              letterSpacing: '-0.02em',
            }}
          >
            {OWNER.name}
          </motion.h1>

          <motion.h2
            variants={fadeUp}
            style={{
              fontSize: 'clamp(1.1rem, 3vw, 1.6rem)',
              fontWeight: 500,
              color: 'var(--text-muted)',
              marginBottom: '2.4rem',
            }}
          >
            {OWNER.title}
          </motion.h2>

          {/* Anchor nav links */}
          <motion.div
            variants={fadeUp}
            style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              marginBottom: '1.4rem',
              justifyContent: isMobile ? 'center' : 'flex-start',
            }}
          >
            {NAV_ANCHORS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  color: 'var(--text-muted)',
                  border: '1px solid var(--border)',
                  borderRadius: 6,
                  padding: '0.45rem 0.9rem',
                  transition: 'color 0.2s, border-color 0.2s',
                  minHeight: 44,
                  display: 'flex',
                  alignItems: 'center',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget;
                  el.style.color = 'var(--primary)';
                  el.style.borderColor = 'var(--primary)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget;
                  el.style.color = 'var(--text-muted)';
                  el.style.borderColor = 'var(--border)';
                }}
              >
                {label}
              </a>
            ))}
          </motion.div>

          {/* CV download CTA */}
          <motion.div variants={fadeUp}>
            <a
              href={OWNER.cvPath}
              download
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'var(--primary)',
                color: '#0a0a0f',
                fontWeight: 600,
                fontSize: '0.9rem',
                padding: '0.7rem 1.5rem',
                borderRadius: 8,
                transition: 'opacity 0.2s, transform 0.2s',
                minHeight: 44,
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.opacity = '0.88';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.opacity = '1';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download CV
            </a>
          </motion.div>
        </motion.div>

        {/* Right: spacer for 3D terminal on desktop */}
        {!isMobile && <div style={{ flex: '0 0 50%' }} />}
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.4rem',
          color: 'var(--text-muted)',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          letterSpacing: '0.1em',
        }}
      >
        scroll
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
