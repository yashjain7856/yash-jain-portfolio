
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Code, GraduationCap, Trophy } from 'lucide-react';

const About = () => {
  const stats = [
    { 
      icon: <Briefcase className="h-6 w-6 text-tech-blue" />, 
      value: "2+", 
      label: "Years Experience" 
    },
    { 
      icon: <Code className="h-6 w-6 text-tech-green" />, 
      value: "15+", 
      label: "Projects Completed" 
    },
    { 
      icon: <GraduationCap className="h-6 w-6 text-tech-yellow" />, 
      value: "9.75/10", 
      label: "CGPA in CS Minor" 
    },
    { 
      icon: <Trophy className="h-6 w-6 text-tech-red" />, 
      value: "4", 
      label: "Merit Scholarships" 
    }
  ];

  return (
    <section id="about" className="section-container">
      <h2 className="section-title">About Me</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8 items-center">
        <div className="md:col-span-2 space-y-6">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            I am Yash Jain, a Software Development Engineer at MathWorks India Pvt. Ltd., where I primarily 
            work on C++, MATLAB and JavaScript. With a strong foundation in data structures, algorithms, 
            design patterns, and object-oriented programming, I specialize in developing efficient software solutions.
          </p>
          
          <p className="text-lg text-gray-700 dark:text-gray-300">
            At MathWorks, I've developed critical end-to-end features for Simulink Variant Manager, 
            implemented solutions for IP leak issues, and enhanced performance through code optimization. 
            I've also leveraged my expertise in machine learning, having built transformer models capable of 
            generating document layouts with 80% performance accuracy.
          </p>
          
          <p className="text-lg text-gray-700 dark:text-gray-300">
            I graduated from the Indian Institute of Technology Ropar with a Bachelor of Technology in 
            Electrical Engineering and a Minor in Computer Science Engineering, where I maintained 
            excellent academic performance, receiving multiple merit scholarships.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
        {stats.map((stat, index) => (
          <Card key={index} className="border-none shadow-lg bg-white dark:bg-navy-dark hover:shadow-xl transition-shadow">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="mb-4 p-3 bg-gray-100 dark:bg-navy rounded-full">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-navy-dark dark:text-white mb-1">{stat.value}</h3>
              <p className="text-gray-500 dark:text-gray-400">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default About;
