
export type NavItem = {
  title: string;
  href: string;
};

export type ProjectType = {
  title: string;
  description: string;
  skills: string[];
  timeline: string;
  achievements: string[];
};

export type ExperienceType = {
  position: string;
  company: string;
  location?: string;
  duration: string;
  description: string[];
};

export type EducationType = {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  gpa?: string;
  percentage?: string;
  description: string;
};

export type CertificationType = {
  title: string;
  issuer: string;
  date: string;
};

export type SkillCategory = {
  category: string;
  skills: string[];
};
