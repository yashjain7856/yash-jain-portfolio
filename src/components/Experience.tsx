
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Software Development Engineer",
      company: "MathWorks India Pvt. Ltd.",
      team: "Variant Systems",
      location: "Bangalore, India",
      period: "July 2023 - Present",
      description: [
        "Developed 2 critical end-to-end features for Simulink Variant Manager in MATLAB R2023b, addressing key requirements from 3 major customers.",
        "Resolved a critical IP leak issue in the Simulink Variant Reducer tool by implementing a solution to handle Test Harnesses, resulting in 10% performance improvement and positively impacting 2 existing customers.",
        "Fixed 3 critical bugs, impacting 2 customers, in the Variant Reducer Tool, reducing resource utilization by 15%.",
        "Ensured software reliability and quality by creating 20 MATLAB and C++ unit tests with over 98% code coverage."
      ]
    },
    {
      title: "Software Development Engineer",
      company: "MathWorks India Pvt. Ltd.",
      team: "Simulink Data Workflows",
      location: "Bangalore, India",
      period: "Jan 2023 - June 2023",
      description: [
        "Refactored 2 MATLAB and C++ components with 15 APIs using Design Patterns and Polymorphism, reducing cyclomatic complexity by over 25%.",
        "Extended 15 MATLAB APIs to support MAT and Excel files as external data sources for Simulink, increasing the number of supported data sources from 2 to 4.",
        "Implemented 5 data integration APIs in C++ and MATLAB for Simulink, enhancing the tool performance by 80%.",
        "Developed comprehensive unit tests in C++ and MATLAB, achieving over 95% code coverage across 2 components.",
        "Engineered MATLAB performance tests to monitor the performance regressions by 20%."
      ]
    },
    {
      title: "Software Development Intern",
      company: "Truminds Software Systems",
      team: "Website Builder Tool",
      location: "Gurugram, India",
      period: "May 2022 - July 2022",
      description: [
        "Developed a website builder tool using Angular, jQuery, and Bootstrap, enabling quick creation of complex web pages with over 90% design fidelity, adopted by 2 major clients."
      ]
    }
  ];

  return (
    <section id="experience" className="section-container">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl bg-white dark:bg-navy-dark transition-all duration-300">
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
