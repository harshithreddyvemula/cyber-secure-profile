
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Computer and Information Science",
      institution: "University of Texas at Arlington",
      url: "https://www.uta.edu/",
      period: "Aug 2022 - May 2024",
      gpa: "3.5/4.0",
      coursework: [
        "Design and Analysis of Algorithms",
        "Artificial Intelligence",
        "Database Systems",
        "Machine Learning",
        "Data Mining",
        "Data Visualization",
        "Web Data Management",
        "Special Topics in Networking",
        "Software Engineering"
      ]
    },
    {
      degree: "Bachelor of Technology in Computer Science Engineering",
      institution: "Anurag Group of Institutions (JNTU, Hyderabad)",
      url: "https://www.anurag.edu.in/",
      period: "Aug 2017 - Jun 2021",
      gpa: "3.8/4.0",
      coursework: [
        "Data Structures",
        "Information Security",
        "Encryption & Decryption",
        "Cryptography",
        "Big Data Analytics",
        "Internet of Things",
        "Database Management Systems",
        "Computer Networks",
        "Cloud Computing"
      ]
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="text-cyan-400">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-green-500 mx-auto"></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <h3 className="text-xl font-semibold">{edu.degree}</h3>
                      <div className="flex flex-col md:items-end">
                        <span className="text-sm text-cyan-400">{edu.period}</span>
                        <span className="text-sm text-green-400">GPA: {edu.gpa}</span>
                      </div>
                    </div>
                    <a 
                      href={edu.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      {edu.institution}
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h4 className="text-white font-semibold mb-3">Relevant Coursework:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {edu.coursework.map((course, i) => (
                      <div key={i} className="text-gray-300 text-sm flex items-start">
                        <span className="text-cyan-400 mr-2">•</span>
                        {course}
                      </div>
                    ))}
                  </div>
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
