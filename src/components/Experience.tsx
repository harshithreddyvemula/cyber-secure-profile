
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      title: "IT Security & Compliance Administrator",
      company: "State of New Mexico",
      url: "https://www.doit.nm.gov/",
      period: "Oct 2024 – Present",
      location: "New Mexico, USA",
      achievements: [
        "Performed penetration testing and vulnerability assessments, identifying and mitigating over 100 security flaws",
        "Utilized Burp Suite and Nessus for comprehensive security analysis, improving system security posture by 30%",
        "Monitored alerts in Azure, Office 365, Microsoft Defender, and Sentinel for enhanced cybersecurity operations",
        "Applied MITRE ATT&CK Framework and Cyberattack Kill Chain to enhance threat detection capabilities",
        "Ensured compliance with GDPR, HIPAA, and ISO 27001 standards, improving compliance scores by 20%"
      ],
      skills: ["Penetration Testing", "Azure Security", "GRC", "MITRE ATT&CK", "Compliance"]
    },
    {
      title: "Software Development Intern",
      company: "University of Texas at Arlington",
      url: "https://www.uta.edu/",
      period: "Aug 2023 – May 2024",
      location: "Arlington, TX",
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
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Professional <span className="text-cyan-400">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-green-500 mx-auto"></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-700 backdrop-blur-sm hover:bg-slate-900/70 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <span className="text-sm text-cyan-400 font-normal">{exp.period}</span>
                    </div>
                    <a 
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      {exp.company}
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-300 flex items-start">
                        <span className="text-cyan-400 mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="bg-cyan-500/10 text-cyan-400 border-cyan-500/30">
                        {skill}
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

export default Experience;
