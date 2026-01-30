
export interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  tech: string[];
  category: 'application' | 'research';
  imageUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
  posterUrl?: string;
  videoUrl?: string;
  year?: string;
  venue?: string;
}

export interface Paper {
  id: string;
  title: string;
  year: string;
  venue: string;
  abstract: string;
  link: string;
}

export interface Role {
  title: string;
  period: string;
  bullets: string[];
}

export interface Experience {
  company: string;
  roles: Role[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  details?: string[];
}
