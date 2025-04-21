
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar, Award, Medal } from 'lucide-react';

const Education = () => {
  const education = [
    {
      institution: "Indian Institute of Technology, Ropar",
      degree: "Bachelor of Technology in Electrical Engineering",
      minor: "Minor in Computer Science Engineering",
      period: "July 2019 - June 2023",
      cgpa: "CGPA: 8.85/10 (BTech) | 9.75/10 (CS Minor)",
      location: "Rupnagar, Punjab, India"
    },
    {
      institution: "Vibrant Academy",
      degree: "High School, Physics, Chemistry and Mathematics",
      period: "2017 - 2019",
      location: "Udaipur, Rajasthan, India"
    }
  ];

  const awards = [
    {
      title: "Institute Merit Scholarship Award",
      description: "Awarded for academic excellence to the top 7% students of the batch.",
      years: "2020, 2021, 2022, 2023 (4 times)"
    },
    {
      title: "Regional Mathematics Olympiad",
      description: "Cleared Regional Mathematics Olympiad and appeared in Indian National Mathematics Olympiad.",
      years: "2019"
    },
    {
      title: "Google PageRank of 9/10",
      description: "Earned 142 stars for the GitHub repository of Layout Generation and Baseline Implementation project.",
      years: "2021"
    }
  ];

  const courses = [
    "Design Patterns",
    "Complete Modern C++",
    "Data Structures",
    "Databases",
    "Operating Systems",
    "Computer Networks",
    "Machine Learning",
    "Probability and Stochastic Processes",
    "Linear Algebra"
  ];

  return (
    <section id="education" className="section-container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="section-title">Education</h2>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-navy-dark dark:text-white">
                        {edu.institution}
                      </CardTitle>
                      <p className="font-medium text-gray-700 dark:text-gray-300">{edu.degree}</p>
                      {edu.minor && (
                        <p className="text-gray-600 dark:text-gray-400">{edu.minor}</p>
                      )}
                      <div className="flex items-center mt-2 text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="h-4 w-4 mr-1" />
                        {edu.period}
                      </div>
                      {edu.cgpa && (
                        <p className="mt-2 text-sm font-medium text-primary">{edu.cgpa}</p>
                      )}
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
          
          <h3 className="text-xl font-semibold mt-8 mb-4">Relevant Coursework</h3>
          <div className="flex flex-wrap gap-2">
            {courses.map((course, index) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="section-title">Awards & Honors</h2>
          
          <div className="space-y-6">
            {awards.map((award, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-2">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-full">
                      {index === 0 ? (
                        <Award className="h-6 w-6 text-primary" />
                      ) : (
                        <Medal className="h-6 w-6 text-primary" />
                      )}
                    </div>
                    <div>
                      <CardTitle className="text-xl text-navy-dark dark:text-white">
                        {award.title}
                      </CardTitle>
                      <div className="flex items-center mt-1 text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="h-4 w-4 mr-1" />
                        {award.years}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{award.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
