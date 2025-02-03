import { Project, Education, Achievement } from './types';

export const projects: Project[] = [
  {
    title: "Project 1",
    description: "A full-stack web application built with React and Node.js",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    githubUrl: "https://github.com/yourusername/project1",
    liveUrl: "https://project1.com",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000"
  },
  // Add more projects as needed
];

export const education: Education[] = [
  {
    degree: "BTech in Computer Engineering",
    institution: "K.K Wagh Institute of Engineering Eductaion and Research,Nashik",
    year: "2022-2026",
    score: "Overall CGPA: 8.96",
    image: "/images/kkwagh.jpg",
    details: {
      marks: {
        "FY-BTech CGPA": "9.02",
        "SY-BTech CGPA": "8.93",
        "TY-BTech SEM V SGPA": "9"
      }
    }
  },
  {
    degree: "HSC (XII)",
    institution: "B.D Public School,Hajipur",
    year: "2020-2022",
    score: "First Class",
    image: "/images/bdpublic.jpg"
  },
  {
    degree: "SSC (X)",
    institution: "St. John's Academy,Mahua",
    year: "2020",
    score: "First Class",
    image: "/images/stjohns.jpg"
  }
];

export const achievements: Achievement[] = [
  {
    title: "DBMS Mini Project Winner",
    description: "2nd place in DBMS Mini Project competition",
    date: "Nov 2024"
  },
  // Add more achievements
];
export const experience: { role: string; company: string; duration: string; Location: string; responsibilities: string[] }[] = [
  {
    role: "Web Developer Intern",
    company: "Adichem Technologies  Pvt. Ltd.",
    duration: "January 2025 - Present",
    Location: "(On-Site)Satpur,Nashik",
    responsibilities: [
      "Developed and maintained dynamic, production-ready web applications using React and Node.js.",
      "Collaborated closely with the design team to deliver intuitive and user-friendly interfaces.",
      "Participated in peer code reviews, adhering to industry best practices to enhance code quality and maintainability."
    ]
  }
];