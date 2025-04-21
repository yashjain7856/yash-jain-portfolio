
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-50 dark:from-navy-dark dark:to-navy pt-16">
      <div className="max-w-6xl mx-auto px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <div>
              <p className="text-primary font-medium">Hello, I'm</p>
              <h1 className="text-4xl md:text-6xl font-bold text-navy-dark dark:text-white mb-2">
                Yash Jain
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
                Software Development Engineer at MathWorks
              </h2>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 text-lg md:pr-10">
              Specialized in C++, MATLAB, and Machine Learning with a passion for solving complex engineering problems and building efficient software solutions.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <Button asChild className="rounded-full">
                <Link to={"#contact"}>Contact Me</Link>
              </Button>
              <Button variant="outline" asChild className="rounded-full">
                <Link to={"#projects"}>View My Work</Link>
              </Button>
            </div>
            
            <div className="flex items-center space-x-4 pt-2">
              <a 
                href="https://github.com/yashjain7856" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://linkedin.com/in/jain-yash1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="mailto:jainyashyj21@gmail.com" 
                className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full -z-10"></div>
              <img 
                src="profileImg.jpeg"
                alt="Yash Jain Profile"
                className="rounded-full object-cover w-full h-full p-4"
              />
            </div>
          </div>
        </div>
        
        <a 
          href="#about" 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce text-gray-500 dark:text-gray-400"
          aria-label="Scroll down"
        >
          <span className="text-sm mb-1">Scroll Down</span>
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
