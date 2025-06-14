
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Shield, Database, Lock, ExternalLink, CheckCircle } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      name: "CompTIA Security+",
      provider: "CompTIA",
      icon: Shield,
      description: "Industry-standard cybersecurity certification covering security fundamentals, risk management, and threat mitigation.",
      category: "Security",
      color: "bg-red-500/10 text-red-400 border-red-500/20",
      certId: "COMP001001021345",
      validationUrl: "https://www.certmetrics.com/comptia/public/verification.aspx",
      issueDate: "March 2023",
      expiryDate: "March 2026"
    },
    {
      name: "AWS Data Engineer Associate",
      provider: "Amazon Web Services",
      icon: Database,
      description: "Validates skills in designing and implementing data pipelines and analytics solutions on AWS.",
      category: "Data Engineering",
      color: "bg-orange-500/10 text-orange-400 border-orange-500/20",
      certId: "AWS-DEA-2023-045789",
      validationUrl: "https://aws.amazon.com/verification",
      issueDate: "June 2023",
      expiryDate: "June 2026"
    },
    {
      name: "AWS Certified Security - Specialty",
      provider: "Amazon Web Services",
      icon: Lock,
      description: "Advanced certification demonstrating expertise in securing AWS workloads and implementing security controls.",
      category: "Cloud Security",
      color: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      certId: "AWS-SCS-2023-012456",
      validationUrl: "https://aws.amazon.com/verification",
      issueDate: "August 2023",
      expiryDate: "August 2026"
    }
  ];

  const handleValidationClick = (url: string, certName: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
    
    // Track validation click
    if ((window as any).trackButtonClick) {
      (window as any).trackButtonClick(`cert_validation_${certName}`, 'certifications');
    }
  };

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Professional <span className="text-cyan-400">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-green-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Industry-recognized certifications validating expertise in cybersecurity, cloud security, and data engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <Card 
                key={index}
                className="bg-slate-900/50 border-slate-700 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10 group"
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="bg-cyan-500/10 p-4 rounded-full group-hover:bg-cyan-500/20 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-cyan-400" />
                    </div>
                  </div>
                  <CardTitle className="text-white text-xl mb-2">{cert.name}</CardTitle>
                  <p className="text-gray-400 text-sm font-medium">{cert.provider}</p>
                </CardHeader>
                <CardContent className="pt-0 space-y-4">
                  <div className="flex justify-center mb-4">
                    <Badge className={`${cert.color} border`}>
                      {cert.category}
                    </Badge>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed text-center">
                    {cert.description}
                  </p>

                  {/* Certification Details */}
                  <div className="bg-slate-800/50 rounded-lg p-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Cert ID:</span>
                      <span className="text-cyan-400 font-mono">{cert.certId}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Issued:</span>
                      <span className="text-gray-300">{cert.issueDate}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Expires:</span>
                      <span className="text-gray-300">{cert.expiryDate}</span>
                    </div>
                  </div>

                  {/* Validation Button */}
                  <Button
                    variant="outline"
                    className="w-full border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500 transition-all duration-300"
                    onClick={() => handleValidationClick(cert.validationUrl, cert.name)}
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Verify Certificate
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>

                  <div className="flex justify-center">
                    <div className="flex items-center space-x-2 text-cyan-400">
                      <Award className="w-4 h-4" />
                      <span className="text-sm font-medium">Verified & Active</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-gray-400 mb-4">
            <Award className="w-5 h-5 text-cyan-400" />
            <span className="text-lg">All certifications are current and independently verifiable</span>
          </div>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            Click "Verify Certificate" to validate credentials through official certification bodies. 
            Committed to continuous learning and maintaining the highest industry standards.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
