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
  image?: string;
  details?: {
    marks: {
      [key: string]: string;
    };
  };
}

export interface Achievement {
  title: string;
  description: string;
  date: string;
  image?: string;
}