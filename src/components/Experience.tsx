
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Award, ExternalLink } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const Experience = () => {
  const experiences = [
    {
      title: "IT Security & Compliance Administrator",
      company: "State of New Mexico",
      url: "https://www.doit.nm.gov/",
      period: "Oct 2024 – Present",
      location: "New Mexico, USA",
      type: "Full-time",
      achievements: [
        "Performed penetration testing and vulnerability assessments, identifying and mitigating over 100 security flaws",
        "Utilized Burp Suite and Nessus for comprehensive security analysis, improving system security posture by 30%",
        "Monitored alerts in Azure, Office 365, Microsoft Defender, and Sentinel for enhanced cybersecurity operations",
        "Applied MITRE ATT&CK Framework and Cyberattack Kill Chain to enhance threat detection capabilities",
        "Ensured compliance with GDPR, HIPAA, and ISO 27001 standards, improving compliance scores by 20%"
      ],
      skills: ["Penetration Testing", "Azure Security", "GRC", "MITRE ATT&CK", "Compliance"],
      highlight: true
    },
    {
      title: "Software Development Intern",
      company: "University of Texas at Arlington",
      url: "https://www.uta.edu/",
      period: "Aug 2023 – May 2024",
      location: "Arlington, TX",
      type: "Internship",
      achievements: [
        "Collaborated with DevOps teams to integrate security best practices into CI/CD pipelines",
        "Implemented automated security testing tools like Selenium and Cypress, improving efficiency by 25%",
        "Conducted regular security reviews and audits of SDLC processes and tools",
        "Leveraged AWS Glue and Redshift for data automation and transformation"
      ],
      skills: ["DevOps", "CI/CD", "Selenium", "AWS", "Security Testing"]
    },
    {
      title: "Software Engineer",
      company: "Tata Consultancy Services",
      url: "https://www.tcs.com/",
      period: "Jul 2021 – Aug 2022",
      location: "India",
      type: "Full-time",
      achievements: [
        "Managed Microsoft Azure Cloud for user identity and access management",
        "Implemented security patches and compliance controls across Azure environments",
        "Developed PowerShell scripts to automate security workflows, improving efficiency by 30%",
        "Created and managed user identities using Entra ID, ensuring RBAC compliance",
        "Awarded On the Spot Team Award for 2 consecutive months in 2022"
      ],
      skills: ["Azure", "PowerShell", "IAM", "RBAC", "Security Automation"]
    },
    {
      title: "Student Intern",
      company: "Unschool",
      url: "https://www.unschool.in/",
      period: "May 2020 – Jun 2021",
      location: "Hyderabad, India",
      type: "Internship",
      achievements: [
        "Conducted security risk assessments and audits for web applications",
        "Developed cybersecurity policies and information security standards",
        "Improved data security and compliance for the organization",
        "Awarded Best Employee for the month of May 2020"
      ],
      skills: ["Risk Assessment", "Policy Development", "Web Security", "Compliance"]
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollAnimation>
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-6">
              Professional <span className="text-gradient">Experience</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-green-500 mx-auto mb-4"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A comprehensive journey through cybersecurity and software development roles
            </p>
          </div>
        </ScrollAnimation>
        
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ScrollAnimation key={index} delay={index * 150}>
                <Card className={`glass-effect hover-lift group relative overflow-hidden ${exp.highlight ? 'border-gradient cyber-glow' : ''}`}>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-white">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                            {exp.title}
                          </h3>
                          <a 
                            href={exp.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xl text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-2 group/link"
                          >
                            {exp.company}
                            <ExternalLink className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                          </a>
                        </div>
                        
                        <div className="flex flex-col gap-2 lg:text-right">
                          <div className="flex items-center gap-2 text-gray-400">
                            <Calendar className="w-4 h-4" />
                            <span className="font-medium">{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-400">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="w-fit border-cyan-500/30 text-cyan-400">
                              {exp.type}
                            </Badge>
                            {exp.highlight && (
                              <Badge className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-0">
                                Current Role
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-6">
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-gray-300 flex items-start group/item">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-4 flex-shrink-0 group-hover/item:bg-green-400 transition-colors"></div>
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700/50">
                        {exp.skills.map((skill, i) => (
                          <Badge 
                            key={i} 
                            variant="secondary" 
                            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-400 border-cyan-500/30 hover:from-cyan-500/20 hover:to-blue-500/20 transition-all duration-200"
                          >
                            {skill}
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

export default Experience;
