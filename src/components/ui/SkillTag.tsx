import { motion } from 'framer-motion';

interface SkillTagProps {
  label: string;
  index: number;
}

export function SkillTag({ label, index }: SkillTagProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.88 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      style={{
        display: 'inline-block',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.8rem',
        color: 'var(--text-muted)',
        background: 'rgba(0,212,255,0.05)',
        border: '1px solid rgba(0,212,255,0.18)',
        borderRadius: 6,
        padding: '0.35rem 0.75rem',
        transition: 'color 0.2s, border-color 0.2s, background 0.2s',
        cursor: 'default',
      }}
      whileHover={{
        color: 'var(--text)' as string,
        borderColor: 'rgba(123,47,255,0.5)',
        backgroundColor: 'rgba(123,47,255,0.1)',
      }}
    >
      {label}
    </motion.span>
  );
}
