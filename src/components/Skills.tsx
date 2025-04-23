
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code, 
  Database, 
  FileCode, 
  Server, 
  BookOpen, 
  Cpu,
  Layers,
  Braces
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6 text-tech-blue" />,
      skills: ["C++", "Python", "JavaScript", "C", "MATLAB"]
    },
    {
      title: "Web Development",
      icon: <FileCode className="h-6 w-6 text-tech-green" />,
      skills: ["React", "Angular", "Node.js", "HTML", "CSS", "Bootstrap", "jQuery"]
    },
    {
      title: "Databases",
      icon: <Database className="h-6 w-6 text-tech-yellow" />,
      skills: ["MongoDB", "PostgreSQL", "SQL"]
    },
    {
      title: "Tools & Frameworks",
      icon: <Server className="h-6 w-6 text-tech-red" />,
      skills: ["Git", "Django", "LaTeX", "Docker"]
    },
    {
      title: "Computer Science Fundamentals",
      icon: <Cpu className="h-6 w-6 text-tech-blue" />,
      skills: ["Data Structures", "Algorithms", "Operating Systems", "Computer Networks"]
    },
    {
      title: "Design & Architecture",
      icon: <Layers className="h-6 w-6 text-tech-green" />,
      skills: ["Design Patterns", "Object-Oriented Programming", "System Design"]
    },
    {
      title: "Mathematics",
      icon: <Braces className="h-6 w-6 text-tech-yellow" />,
      skills: ["Linear Algebra", "Probability", "Statistics", "Machine Learning"]
    },
    {
      title: "Other Skills",
      icon: <BookOpen className="h-6 w-6 text-tech-red" />,
      skills: ["Problem Solving", "Team Collaboration", "Technical Documentation"]
    }
  ];

  return (
    <section id="skills" className="section-container">
      <h2 className="section-title">Skills & Technologies</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => (
          <Card key={index} className="border-none bg-white dark:bg-navy-dark shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-gray-100 dark:bg-navy rounded-full mr-3">
                  {category.icon}
                </div>
                <h3 className="font-bold text-xl text-navy-dark dark:text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="tech-badge bg-gray-200 dark:bg-navy-light">
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Skills;
