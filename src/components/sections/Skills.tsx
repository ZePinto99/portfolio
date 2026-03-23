import { SectionWrapper, SectionHeading } from '../ui/SectionWrapper';
import { SkillTag } from '../ui/SkillTag';
import { SKILLS } from '../../data/cv';

export function Skills() {
  let globalIndex = 0;

  return (
    <SectionWrapper id="skills">
      <SectionHeading>Skills</SectionHeading>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {SKILLS.map(({ category, items }) => (
          <div key={category}>
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--primary)',
              letterSpacing: '0.1em',
              marginBottom: '0.75rem',
              textTransform: 'uppercase',
              opacity: 0.75,
            }}>
              {category}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem' }}>
              {items.map(skill => (
                <SkillTag key={skill} label={skill} index={globalIndex++} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
