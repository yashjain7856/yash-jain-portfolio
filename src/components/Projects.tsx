
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star } from 'lucide-react';
import { projects } from "@/data/projectsData";

const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card 
            key={index} 
            className="card-container">
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
                    className="capsule-container">
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
