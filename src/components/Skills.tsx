
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "C", "C++", "C#", ".NET", "Java", "Ruby", "R", "Bash", "PowerShell"]
    },
    {
      category: "Cybersecurity & Compliance",
      skills: ["Penetration Testing", "NIST 800-53", "ISO 27001", "OWASP Top 10", "MITRE ATT&CK", "GRC", "Risk Management", "SIEM", "IAM", "GDPR", "HIPAA", "SOX", "PCI DSS"]
    },
    {
      category: "Cloud & Infrastructure",
      skills: ["Microsoft Azure", "AWS", "Google Cloud Platform", "Azure Security Center", "Microsoft Defender", "Entra ID", "Active Directory"]
    },
    {
      category: "Security Tools",
      skills: ["Burp Suite", "Nessus", "Splunk", "BigID", "Securiti", "SonarQube", "Fortify", "Checkmarx", "Tenable"]
    },
    {
      category: "Web Technologies",
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Django", "Flask", "PHP"]
    },
    {
      category: "Data & Analytics",
      skills: ["SQL", "MySQL", "MongoDB", "NoSQL", "Power BI", "Tableau", "Apache Spark", "Hadoop", "TensorFlow", "Pandas", "NumPy"]
    },
    {
      category: "Testing & Automation",
      skills: ["Selenium", "Cypress", "JUnit", "CI/CD", "Terraform", "CloudFormation"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-green-500 mx-auto"></div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-700 backdrop-blur-sm h-full">
                <CardHeader>
                  <CardTitle className="text-cyan-400 text-lg">
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge 
                        key={i} 
                        variant="secondary" 
                        className="bg-slate-700/50 text-gray-300 border-slate-600 hover:bg-cyan-500/10 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-200"
                      >
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

export default Skills;
