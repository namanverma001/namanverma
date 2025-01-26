export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  image: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  score: string;
  details?: {
    marks?: Record<string, string>;
  };
}

export interface Achievement {
  title: string;
  description: string;
  date: string;
}