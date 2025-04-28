import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { skillCategories } from "@/data/skillsData";

const Skills = () => {
  return (
    <section id="skills" className="section-container">
      <h2 className="section-title">Skills & Technologies</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <Card key={index} className="card-container">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-gray-100 dark:bg-navy rounded-full mr-3">
                    <Icon className={`h-6 w-6 ${category.colorClass}`} />
                  </div>
                  <h3 className="font-bold text-xl text-navy-dark dark:text-white">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span key={idx} className="capsule-container">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
