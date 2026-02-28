export type HeroContent = {
  role: string;
  availability: string;
  headline: string;
  subtext: string;
};

export type AboutContent = {
  title: string;
  highlight: string;
  description: string;
  photoLabel: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type ExperienceItem = {
  period: string;
  title: string;
  org: string;
  detail: string;
};

export type Project = {
  title: string;
  summary: string;
  stack: string;
  demoUrl?: string;
};

export type Testimonial = {
  quote: string;
  by: string;
};

export type ContactContent = {
  title: string;
  highlight: string;
  intro: string;
  email: string;
  linkedinUrl: string;
  githubUrl: string;
};

export type PageContent = {
  brand: string;
  hero: HeroContent;
  about: AboutContent;
  skillGroups: SkillGroup[];
  experience: ExperienceItem[];
  projects: Project[];
  testimonials: Testimonial[];
  contact: ContactContent;
};

