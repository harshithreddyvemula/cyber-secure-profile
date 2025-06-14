
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ScrollAnimation from "./ScrollAnimation";
import SkillBar from "./SkillBar";
import InteractiveSkillsChart from "./InteractiveSkillsChart";
import PerformanceOptimizer from "./PerformanceOptimizer";

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

  const coreSkills = [
    { skill: "Cybersecurity", percentage: 95 },
    { skill: "Cloud Security", percentage: 90 },
    { skill: "Penetration Testing", percentage: 88 },
    { skill: "Python Programming", percentage: 85 },
    { skill: "Risk Management", percentage: 92 },
    { skill: "Compliance & GRC", percentage: 90 }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Technical <span className="text-cyan-400">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-green-500 mx-auto"></div>
          </div>
        </ScrollAnimation>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="overview" className="w-full">
            <ScrollAnimation delay={200}>
              <TabsList className="grid w-full grid-cols-3 mb-8 bg-slate-800/50">
                <TabsTrigger value="overview" className="data-[state=active]:bg-cyan-500">Overview</TabsTrigger>
                <TabsTrigger value="interactive" className="data-[state=active]:bg-cyan-500">Interactive Charts</TabsTrigger>
                <TabsTrigger value="performance" className="data-[state=active]:bg-cyan-500">Performance</TabsTrigger>
              </TabsList>
            </ScrollAnimation>

            <TabsContent value="overview" className="space-y-8">
              {/* Core Skills with Progress Bars */}
              <ScrollAnimation delay={200}>
                <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm mb-8">
                  <CardHeader>
                    <CardTitle className="text-cyan-400 text-xl text-center">
                      Core Competencies
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      {coreSkills.map((skill, index) => (
                        <SkillBar 
                          key={skill.skill} 
                          skill={skill.skill} 
                          percentage={skill.percentage}
                          delay={index * 200}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>

              {/* Skill Categories */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map((category, index) => (
                  <ScrollAnimation key={index} delay={300 + index * 100}>
                    <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm h-full hover:bg-slate-900/70 transition-all duration-300 transform hover:scale-105">
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
                              className="bg-slate-700/50 text-gray-300 border-slate-600 hover:bg-cyan-500/10 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-200 cursor-default"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </ScrollAnimation>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="interactive">
              <InteractiveSkillsChart />
            </TabsContent>

            <TabsContent value="performance">
              <PerformanceOptimizer />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Skills;
