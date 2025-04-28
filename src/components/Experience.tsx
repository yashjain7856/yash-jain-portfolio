
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar } from 'lucide-react';
import { experiences } from "@/data/experienceData";

const Experience = () => {
  return (
    <section id="experience" className="section-container">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-container">
              <CardHeader className="pb-2">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  <div>
                    <CardTitle className="text-xl font-bold text-navy-dark dark:text-white">
                      {exp.title}
                    </CardTitle>
                    <p className="text-primary font-medium">{exp.company}</p>
                    <p className="text-lg font-medium">{exp.team}</p>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="h-4 w-4 mr-1" />
                    {exp.period}
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1">
                  <Briefcase className="h-4 w-4 mr-1" />
                  {exp.location}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 list-disc pl-5 text-gray-700 dark:text-gray-300">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
