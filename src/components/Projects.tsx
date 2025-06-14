
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Award, ExternalLink, Github } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

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
      technologies: ["React Native", "Swift", "Selenium", "Mobile Development", "Health Tech"],
      category: "Mobile Development",
      status: "Completed"
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
      technologies: ["Power BI", "Python", "SQL", "GRC", "NIST 800-53", "ISO 27001"],
      category: "Cybersecurity",
      status: "Production"
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
      technologies: ["AWS S3", "Python", "Azure", "Security", "Multi-threading", "Cloud Computing"],
      category: "Full Stack",
      status: "Completed"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Cybersecurity": return "from-red-500/20 to-orange-500/20 border-red-500/30";
      case "Mobile Development": return "from-green-500/20 to-emerald-500/20 border-green-500/30";
      case "Full Stack": return "from-blue-500/20 to-purple-500/20 border-blue-500/30";
      default: return "from-gray-500/20 to-slate-500/20 border-gray-500/30";
    }
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-slate-900/50 to-slate-800/50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-green-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollAnimation>
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-green-500 mx-auto mb-4"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Showcasing innovative solutions in cybersecurity, mobile development, and full-stack applications
            </p>
          </div>
        </ScrollAnimation>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ScrollAnimation key={index} delay={index * 200}>
                <Card className={`glass-effect hover-lift group h-full relative overflow-hidden bg-gradient-to-br ${getCategoryColor(project.category)}`}>
                  {/* Category badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-black/20 text-white border border-white/20 backdrop-blur-sm">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <CardHeader className="relative z-10">
                    <CardTitle className="text-white">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors pr-20">
                        {project.title}
                      </h3>
                      <div className="flex flex-col gap-2 text-sm">
                        <div className="flex items-center gap-2 text-cyan-400">
                          <User className="w-4 h-4" />
                          <span className="font-medium">{project.role}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                          <Calendar className="w-4 h-4" />
                          <span>{project.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${project.status === 'Production' ? 'bg-green-400' : 'bg-blue-400'}`}></div>
                          <span className="text-gray-400 text-xs">{project.status}</span>
                        </div>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="flex-1 flex flex-col relative z-10">
                    <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                    
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <Award className="w-4 h-4 text-yellow-400" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2 mb-6">
                        {project.achievements.map((achievement, i) => (
                          <li key={i} className="text-gray-300 text-sm flex items-start group/item">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0 group-hover/item:bg-green-400 transition-colors"></div>
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-auto">
                      <h4 className="text-white font-semibold mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <Badge 
                            key={i} 
                            variant="secondary" 
                            className="bg-white/10 text-gray-300 border border-white/20 text-xs hover:bg-white/20 transition-all duration-200"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
