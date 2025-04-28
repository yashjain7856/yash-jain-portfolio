import {
    Code, FileCode, Database, Server, Cpu, Layers, Braces, BookOpen
  } from 'lucide-react';
  
  export const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      colorClass: "text-tech-blue",
      skills: ["C++", "Python", "JavaScript", "C", "MATLAB"]
    },
    {
      title: "Web Development",
      icon: FileCode,
      colorClass: "text-tech-green",
      skills: ["React", "Angular", "Node.js", "HTML", "CSS", "Bootstrap", "jQuery"]
    },
    {
      title: "Databases",
      icon: Database,
      colorClass: "text-tech-yellow",
      skills: ["MongoDB", "PostgreSQL", "SQL"]
    },
    {
      title: "Tools & Frameworks",
      icon: Server,
      colorClass: "text-tech-red",
      skills: ["Git", "Django", "LaTeX", "Docker"]
    },
    {
      title: "Computer Science Fundamentals",
      icon: Cpu,
      colorClass: "text-tech-blue",
      skills: ["Data Structures", "Algorithms", "Operating Systems", "Computer Networks"]
    },
    {
      title: "Design & Architecture",
      icon: Layers,
      colorClass: "text-tech-green",
      skills: ["Design Patterns", "Object-Oriented Programming", "System Design"]
    },
    {
      title: "Mathematics",
      icon: Braces,
      colorClass: "text-tech-yellow",
      skills: ["Linear Algebra", "Probability", "Statistics", "Machine Learning"]
    },
    {
      title: "Other Skills",
      icon: BookOpen,
      colorClass: "text-tech-red",
      skills: ["Problem Solving", "Team Collaboration", "Technical Documentation"]
    }
  ];
  