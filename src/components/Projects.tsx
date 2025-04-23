
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Layout Generation and Baseline Implementation",
      description: "Built a transformer model completely from scratch capable of generating document layouts with 80% score on performance metrics.\nImplemented baseline models for the research paper \"LayoutTransformer: Layout Generation and Completion with Self-attention\"",
      tech: ["Machine Learning", "Python", "Computer Vision", "Transformer Models"],
      github: "https://github.com/Layout-Generation/layout-generation",
      live: null,
      stars: 142,
      highlight: true
    },
    {
      title: "Railway Ticket Booking System",
      description: "Developed critical end-to-end features for Simulink Variant Manager in MATLAB R2023b, addressing key requirements from major customers.",
      tech: ["C++", "MATLAB", "OOP", "Design Patterns"],
      github: null,
      live: null,
      stars: null,
      highlight: true
    },
    {
      title: "Website Builder Tool",
      description: "Developed a website builder tool enabling quick creation of complex web pages with over 90% design fidelity.",
      tech: ["Angular", "jQuery", "Bootstrap", "JavaScript"],
      github: null,
      live: null,
      stars: null,
      highlight: false
    },
    {
      title: "Data Integration APIs",
      description: "Implemented data integration APIs in C++ and MATLAB for Simulink, enhancing tool performance by 80%.",
      tech: ["C++", "MATLAB", "API Design", "Performance Optimization"],
      github: null,
      live: null,
      stars: null,
      highlight: false
    }
  ];

  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card 
            key={index} 
            className={`bg-white dark:bg-navy-dark border-none shadow-lg hover:shadow-xl transition-all duration-300 ${
              project.highlight ? 'border-l-4 border-l-primary' : ''
            }`}
          >
            <CardHeader>
              <CardTitle className="text-xl text-navy-dark dark:text-white">{project.title}</CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-300 mt-2">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="tech-badge bg-gray-200 dark:bg-navy-light"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {project.stars && (
                <div className="flex items-center text-amber-500 mb-2">
                  <Star className="h-4 w-4 mr-1 fill-current" />
                  <span className="text-sm font-medium">{project.stars} stars on GitHub</span>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-start gap-3">
              {project.github && (
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <Github className="h-4 w-4 mr-2" />
                    <span>GitHub</span>
                  </a>
                </Button>
              )}
              
              {project.live && (
                <Button size="sm" asChild>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    <span>Live Demo</span>
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
