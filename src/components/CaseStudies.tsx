
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, Shield, Database, Cloud, Target, CheckCircle, AlertTriangle } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const CaseStudies = () => {
  const [expandedCase, setExpandedCase] = useState<number | null>(null);

  const caseStudies = [
    {
      id: 1,
      title: "Enterprise Security Architecture Overhaul",
      client: "State of New Mexico",
      duration: "6 months",
      category: "Security Architecture",
      icon: Shield,
      challenge: "Legacy security infrastructure with multiple vulnerabilities and compliance gaps across 50+ government departments.",
      solution: [
        "Conducted comprehensive security assessment using NIST 800-53 framework",
        "Implemented Azure Security Center with Microsoft Defender integration",
        "Developed automated compliance monitoring using PowerShell scripts",
        "Established centralized identity management with Entra ID"
      ],
      results: [
        "Reduced security incidents by 65%",
        "Achieved 98% compliance score across all frameworks",
        "Improved incident response time by 70%",
        "Cost savings of $2.3M annually through automation"
      ],
      technologies: ["Azure Security Center", "Microsoft Defender", "NIST 800-53", "PowerShell", "Entra ID"],
      metrics: {
        vulnerabilities: { before: 150, after: 12 },
        complianceScore: { before: 72, after: 98 },
        incidentResponse: { before: "4 hours", after: "1.2 hours" }
      }
    },
    {
      id: 2,
      title: "Penetration Testing & Vulnerability Management",
      client: "Fortune 500 Financial Institution",
      duration: "3 months",
      category: "Penetration Testing",
      icon: Target,
      challenge: "Critical web applications with unknown security posture requiring comprehensive security assessment.",
      solution: [
        "Performed black-box and white-box penetration testing",
        "Utilized Burp Suite Professional for web application testing",
        "Conducted network infrastructure assessment with Nessus",
        "Implemented continuous vulnerability scanning pipeline"
      ],
      results: [
        "Identified 89 vulnerabilities across applications",
        "Prevented potential data breach affecting 2M+ customers",
        "Established ongoing security testing protocols",
        "Reduced attack surface by 80%"
      ],
      technologies: ["Burp Suite", "Nessus", "OWASP Top 10", "Metasploit", "Wireshark"],
      metrics: {
        vulnerabilities: { before: 89, after: 8 },
        riskScore: { before: "High", after: "Low" },
        coverage: { before: "30%", after: "95%" }
      }
    },
    {
      id: 3,
      title: "Cloud Security & Data Protection Initiative",
      client: "Healthcare Technology Startup",
      duration: "4 months",
      category: "Cloud Security",
      icon: Cloud,
      challenge: "HIPAA compliance requirements for cloud-based healthcare data with stringent security controls.",
      solution: [
        "Designed secure AWS architecture with encryption at rest and in transit",
        "Implemented AWS CloudTrail and CloudWatch for monitoring",
        "Established data classification and DLP policies using BigID",
        "Created automated backup and disaster recovery procedures"
      ],
      results: [
        "Achieved HIPAA compliance certification",
        "99.9% data protection with zero breaches",
        "Reduced compliance audit time by 60%",
        "Enabled secure scaling to 100K+ patient records"
      ],
      technologies: ["AWS", "BigID", "CloudTrail", "CloudWatch", "HIPAA", "Encryption"],
      metrics: {
        compliance: { before: "Non-compliant", after: "Fully Compliant" },
        dataProtection: { before: "85%", after: "99.9%" },
        auditTime: { before: "2 weeks", after: "3 days" }
      }
    }
  ];

  const toggleExpand = (id: number) => {
    setExpandedCase(expandedCase === id ? null : id);
  };

  return (
    <section id="case-studies" className="py-24 bg-gradient-to-b from-slate-800/50 to-slate-900/50">
      <div className="container mx-auto px-6">
        <ScrollAnimation>
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-6">
              Security <span className="text-gradient">Case Studies</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-green-500 mx-auto mb-4"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real-world cybersecurity implementations with measurable business impact
            </p>
          </div>
        </ScrollAnimation>

        <div className="max-w-6xl mx-auto space-y-8">
          {caseStudies.map((study, index) => {
            const IconComponent = study.icon;
            const isExpanded = expandedCase === study.id;
            
            return (
              <ScrollAnimation key={study.id} delay={index * 150}>
                <Card className="glass-effect hover-lift border-slate-700/50">
                  <CardHeader className="cursor-pointer" onClick={() => toggleExpand(study.id)}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                          <IconComponent className="w-6 h-6 text-cyan-400" />
                        </div>
                        <div>
                          <CardTitle className="text-xl text-white mb-2">{study.title}</CardTitle>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="border-cyan-500/30 text-cyan-400">
                              {study.client}
                            </Badge>
                            <Badge variant="outline" className="border-green-500/30 text-green-400">
                              {study.duration}
                            </Badge>
                            <Badge variant="outline" className="border-purple-500/30 text-purple-400">
                              {study.category}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </Button>
                    </div>
                  </CardHeader>

                  {isExpanded && (
                    <CardContent className="pt-0">
                      <div className="grid lg:grid-cols-2 gap-8">
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-lg font-semibold text-red-400 mb-3 flex items-center gap-2">
                              <AlertTriangle className="w-5 h-5" />
                              Challenge
                            </h4>
                            <p className="text-gray-300 leading-relaxed">{study.challenge}</p>
                          </div>

                          <div>
                            <h4 className="text-lg font-semibold text-blue-400 mb-3">Solution</h4>
                            <ul className="space-y-2">
                              {study.solution.map((item, i) => (
                                <li key={i} className="text-gray-300 flex items-start">
                                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-lg font-semibold text-green-400 mb-3 flex items-center gap-2">
                              <CheckCircle className="w-5 h-5" />
                              Results
                            </h4>
                            <ul className="space-y-2">
                              {study.results.map((result, i) => (
                                <li key={i} className="text-gray-300 flex items-start">
                                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                  {result}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="space-y-6">
                          <div>
                            <h4 className="text-lg font-semibold text-yellow-400 mb-3">Key Metrics</h4>
                            <div className="space-y-4">
                              {Object.entries(study.metrics).map(([key, value]) => (
                                <div key={key} className="bg-slate-800/50 p-4 rounded-lg">
                                  <div className="text-sm text-gray-400 mb-2 capitalize">
                                    {key.replace(/([A-Z])/g, ' $1').trim()}
                                  </div>
                                  <div className="flex justify-between items-center">
                                    <span className="text-red-400">Before: {value.before}</span>
                                    <span className="text-green-400">After: {value.after}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="text-lg font-semibold text-purple-400 mb-3">Technologies Used</h4>
                            <div className="flex flex-wrap gap-2">
                              {study.technologies.map((tech, i) => (
                                <Badge 
                                  key={i}
                                  variant="secondary"
                                  className="bg-purple-500/10 text-purple-300 border-purple-500/30"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  )}
                </Card>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
