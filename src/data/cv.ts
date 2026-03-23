import type { ExperienceItem, SkillCategory, EducationItem } from '../types';

export const OWNER = {
  name: 'José Pinto',
  title: 'Backend Software Engineer',
  summary:
    'Software Engineer with experience in backend development, microservices, and cloud computing — focused on building scalable, high-performance systems. Proven track record delivering RESTful APIs and event-driven solutions in fast-paced, cross-functional teams. Currently working on sports betting products at BLIP (FanDuel).',
  email: 'z.miguelpinto@gmail.com',
  github: 'https://github.com/ZePinto99',
  linkedin: 'https://www.linkedin.com/in/jos%C3%A9-pinto-b60725114',
  cvPath: '/portfolio/cv-jose-pinto.pdf',
  location: 'Porto, Portugal',
};

export const BOOT_SEQUENCE = [
  '$ java -jar portfolio.jar',
  '',
  '> Initializing José Pinto...          ✓',
  '> Role............Backend Software Engineer',
  '> Location.........Porto, Portugal',
  '> Company..........BLIP (FanDuel)',
  '> Stack............Java · Spring Boot · AWS',
  '> Languages........Portuguese · English C1',
  '> Status...........Open to challenges ✓',
  '',
  '$ _',
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'BLIP (FanDuel)',
    role: 'Backend Associate Software Developer',
    location: 'Porto, Portugal',
    period: '2025 – Present',
    points: [
      'Contributed to the Picks application, shipping critical features including player cards and settlement data source migration.',
      'Integrated into the on-call rotation, taking on production support responsibilities.',
      'Mentored junior colleagues joining the team.',
      'Currently part of the Sportsbook Generosity pillar, focusing on backend services.',
    ],
  },
  {
    company: 'Accenture',
    role: 'Custom Software Engineering Analyst',
    location: 'Braga, Portugal',
    period: '2022 – 2025',
    points: [
      'Developed and maintained Java Spring Boot microservices, improving performance and scalability for enterprise clients.',
      'Integrated AWS SQS for event-driven applications, increasing system efficiency.',
      'Managed MySQL databases and optimised queries for faster response times.',
      'Implemented frontend components using Angular.',
    ],
  },
  {
    company: 'CodeVision',
    role: 'Software Developer',
    location: 'Braga, Portugal',
    period: '2022',
    points: [
      'Developed web applications using .NET and C#.',
      'Designed and optimised MySQL and MongoDB queries.',
      'Built dynamic web interfaces with JavaScript and HTML.',
    ],
  },
];

export const SKILLS: SkillCategory[] = [
  {
    category: 'Languages',
    items: ['Java', 'JavaScript', 'TypeScript', 'C#', 'HTML', 'CSS'],
  },
  {
    category: 'Frameworks',
    items: ['Spring Boot', 'Hibernate', 'Angular', '.NET'],
  },
  {
    category: 'Cloud & Infra',
    items: ['AWS', 'AWS SQS', 'Microservices', 'REST APIs', 'Event-Driven'],
  },
  {
    category: 'Databases',
    items: ['MySQL', 'MongoDB'],
  },
  {
    category: 'Practices',
    items: ['OOP', 'Agile', 'Git', 'On-Call'],
  },
];

export const EDUCATION: EducationItem = {
  degree: "Integrated Master's in Software Engineering",
  school: 'University of Minho',
  period: '2017 – 2022',
  location: 'Braga, Portugal',
};
