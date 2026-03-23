import { SectionWrapper, SectionHeading } from '../ui/SectionWrapper';
import { TimelineItem } from '../ui/TimelineItem';
import { EXPERIENCE } from '../../data/cv';

export function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionHeading>Experience</SectionHeading>
      <div style={{
        position: 'relative',
        paddingLeft: 8,
      }}>
        {/* Vertical timeline line */}
        <div style={{
          position: 'absolute',
          left: 0,
          top: 8,
          bottom: 0,
          width: 2,
          background: 'linear-gradient(to bottom, var(--primary), var(--accent), transparent)',
          opacity: 0.35,
          borderRadius: 1,
        }} />

        {EXPERIENCE.map((item, i) => (
          <TimelineItem key={item.company} item={item} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
