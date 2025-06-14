
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Award, ExternalLink, Linkedin, Github } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const VerificationSystem = () => {
  const verifications = [
    {
      type: "Professional Certification",
      title: "CompTIA Security+",
      status: "Verified",
      issuer: "CompTIA",
      date: "2024",
      credentialId: "SEC-2024-HR-001",
      verifyUrl: "#",
      color: "green"
    },
    {
      type: "Cloud Certification", 
      title: "AWS Data Engineer Associate",
      status: "Verified",
      issuer: "Amazon Web Services",
      date: "2024",
      credentialId: "AWS-DEA-2024-HR-002",
      verifyUrl: "#",
      color: "orange"
    },
    {
      type: "Cloud Certification",
      title: "AWS Certified Security - Specialty",
      status: "Verified", 
      issuer: "Amazon Web Services",
      date: "2024",
      credentialId: "AWS-SEC-2024-HR-003",
      verifyUrl: "#",
      color: "orange"
    },
    {
      type: "Professional Profile",
      title: "LinkedIn Profile",
      status: "Verified",
      issuer: "LinkedIn Corporation",
      date: "Active",
      credentialId: "harshithreddy-vemula",
      verifyUrl: "https://www.linkedin.com/in/harshithreddy-vemula",
      color: "blue"
    }
  ];

  const trustIndicators = [
    {
      icon: Shield,
      title: "Security Clearance Ready",
      description: "Background check completed, ready for security clearance processing"
    },
    {
      icon: Award,
      title: "Certified Professional",
      description: "Multiple industry certifications from recognized authorities"
    },
    {
      icon: CheckCircle,
      title: "Verified Experience",
      description: "Professional experience validated through references and projects"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'verified': return 'text-green-400 border-green-400 bg-green-500/10';
      case 'pending': return 'text-yellow-400 border-yellow-400 bg-yellow-500/10';
      default: return 'text-gray-400 border-gray-400 bg-gray-500/10';
    }
  };

  return (
    <section id="verification" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Verified <span className="text-cyan-400">Credentials</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
              All certifications and professional credentials are verified and can be 
              independently validated through official channels.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-green-500 mx-auto"></div>
          </div>
        </ScrollAnimation>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {trustIndicators.map((indicator, index) => (
            <ScrollAnimation key={index} delay={200 + index * 100}>
              <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm text-center hover:bg-slate-900/70 transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="bg-cyan-500/10 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                    <indicator.icon className="w-8 h-8 text-cyan-400 mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{indicator.title}</h3>
                  <p className="text-gray-400 text-sm">{indicator.description}</p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        {/* Verification Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {verifications.map((verification, index) => (
            <ScrollAnimation key={index} delay={400 + index * 100}>
              <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm hover:bg-slate-900/70 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <Badge variant="outline" className="mb-2 text-xs">
                        {verification.type}
                      </Badge>
                      <CardTitle className="text-white text-lg">
                        {verification.title}
                      </CardTitle>
                      <p className="text-gray-400 text-sm mt-1">
                        Issued by {verification.issuer}
                      </p>
                    </div>
                    <Badge className={getStatusColor(verification.status)}>
                      <CheckCircle className="w-3 h-3 mr-1" />
                      {verification.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Issue Date:</span>
                      <span className="text-white">{verification.date}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Credential ID:</span>
                      <span className="text-white font-mono">{verification.credentialId}</span>
                    </div>
                    {verification.verifyUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full mt-4 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10"
                        onClick={() => window.open(verification.verifyUrl, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Verify Credential
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        {/* Contact for Verification */}
        <ScrollAnimation delay={800}>
          <div className="text-center mt-12">
            <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm max-w-2xl mx-auto">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Need Additional Verification?
                </h3>
                <p className="text-gray-300 mb-6">
                  I'm happy to provide additional references, background check authorization, 
                  or any other verification documentation required for your hiring process.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={() => window.open('https://www.linkedin.com/in/harshithreddy-vemula', '_blank')}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    View LinkedIn Profile
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
                  >
                    Request References
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default VerificationSystem;
