
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Database, Lock } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      name: "CompTIA Security+",
      provider: "CompTIA",
      icon: Shield,
      description: "Industry-standard cybersecurity certification covering security fundamentals, risk management, and threat mitigation.",
      category: "Security",
      color: "bg-red-500/10 text-red-400 border-red-500/20"
    },
    {
      name: "AWS Data Engineer Associate",
      provider: "Amazon Web Services",
      icon: Database,
      description: "Validates skills in designing and implementing data pipelines and analytics solutions on AWS.",
      category: "Data Engineering",
      color: "bg-orange-500/10 text-orange-400 border-orange-500/20"
    },
    {
      name: "AWS Certified Security - Specialty",
      provider: "Amazon Web Services",
      icon: Lock,
      description: "Advanced certification demonstrating expertise in securing AWS workloads and implementing security controls.",
      category: "Cloud Security",
      color: "bg-purple-500/10 text-purple-400 border-purple-500/20"
    }
  ];

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
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
