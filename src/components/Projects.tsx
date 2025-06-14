
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Healtify Mobile Application",
      role: "Tech Lead",
      period: "Jan 2023 - May 2023",
      description: "Cross-platform health monitoring mobile app with comprehensive wellness features",
      achievements: [
        "Developed using React Native Expo for Android & iOS platforms",
        "Implemented 5 key features including step tracking and nutrition logging",
        "Added personalized recommendations and medication management with reminders",
        "Integrated comprehensive testing using Selenium and unit testing frameworks"
      ],
      technologies: ["React Native", "Swift", "Selenium", "Mobile Development", "Health Tech"]
    },
    {
      title: "Security & Compliance Dashboard",
      role: "Developer",
      period: "Aug 2022 - Dec 2022",
      description: "Real-time cybersecurity compliance monitoring and reporting system",
      achievements: [
        "Built real-time cybersecurity compliance dashboard using Power BI and Python",
        "Implemented automated compliance tracking for GRC reporting",
        "Improved reporting efficiency by 35% through automation",
        "Ensured adherence to NIST 800-53 and ISO 27001 standards"
      ],
      technologies: ["Power BI", "Python", "SQL", "GRC", "NIST 800-53", "ISO 27001"]
    },
    {
      title: "Online Retail Platform",
      role: "Full Stack Developer",
      period: "Mar 2021 - Apr 2021",
      description: "Secure e-commerce platform with cloud integration and automated deployment",
      achievements: [
        "Deployed AWS S3 for secure cloud-based inventory data storage",
        "Developed Python automation scripts reducing deployment time by 50%",
        "Integrated comprehensive security features including data encryption",
        "Implemented secure coding practices and regular security audits",
        "Optimized performance using multi-threading for concurrent operations"
      ],
      technologies: ["AWS S3", "Python", "Azure", "Security", "Multi-threading", "Cloud Computing"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-green-500 mx-auto"></div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-700 backdrop-blur-sm hover:bg-slate-900/70 transition-all duration-300 h-full">
                <CardHeader>
                  <CardTitle className="text-white">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-cyan-400">{project.role}</span>
                      <span className="text-gray-400">{project.period}</span>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <ul className="space-y-1 mb-4 flex-1">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-300 text-sm flex items-start">
                        <span className="text-cyan-400 mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="bg-green-500/10 text-green-400 border-green-500/30 text-xs">
                        {tech}
                      </Badge>
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

export default Projects;
