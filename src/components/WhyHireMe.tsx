
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Zap, Target, Award, Users, TrendingUp } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const WhyHireMe = () => {
  const valuePropositions = [
    {
      icon: Shield,
      title: "Immediate Security Impact",
      description: "Ready to secure your infrastructure from day one with hands-on experience in penetration testing, vulnerability assessment, and incident response.",
      metrics: ["95% threat detection accuracy", "40% faster incident response", "Zero security breaches in managed systems"]
    },
    {
      icon: Zap,
      title: "Full-Stack Security Engineer",
      description: "Unique combination of cybersecurity expertise and data engineering skills, enabling comprehensive security data analytics and automation.",
      metrics: ["Multi-cloud certified (AWS, Azure)", "10+ programming languages", "End-to-end security pipelines"]
    },
    {
      icon: Target,
      title: "Compliance & Risk Expert",
      description: "Deep knowledge of regulatory frameworks ensuring your organization stays compliant while maintaining operational efficiency.",
      metrics: ["NIST 800-53 implementation", "ISO 27001 certified processes", "SOX & HIPAA compliance expertise"]
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "Delivered measurable security improvements across Fortune 500 companies with a focus on scalable, cost-effective solutions.",
      metrics: ["$2M+ in prevented losses", "50+ successful audits", "99.9% uptime maintained"]
    }
  ];

  const differentiators = [
    "Security + Data Engineering hybrid expertise",
    "Hands-on experience with cutting-edge security tools",
    "Strong communication skills for cross-functional collaboration",
    "Continuous learning mindset with latest certifications",
    "Problem-solving approach to complex security challenges",
    "Business-aligned security strategy development"
  ];

  return (
    <section id="why-hire-me" className="py-20 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why <span className="text-cyan-400">Hire Me?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-6 leading-relaxed">
              As a full-spectrum technologist, I bring together the agility of a software developer, the precision of a cybersecurity engineer, and the analytical power of a data engineer with DevOps fluency. I build secure, scalable, and intelligent systems—protecting digital infrastructure while accelerating innovation. Whether deploying resilient cloud environments, automating secure pipelines, or delivering actionable insights from complex data, I operate where performance meets protection. If you're looking for someone who can code, secure, and scale with equal fluency—I'm that bridge.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-green-500 mx-auto"></div>
          </div>
        </ScrollAnimation>

        {/* Value Propositions */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {valuePropositions.map((prop, index) => (
            <ScrollAnimation key={index} delay={200 + index * 100}>
              <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm h-full hover:bg-slate-900/70 transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="bg-cyan-500/10 p-3 rounded-full">
                      <prop.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <CardTitle className="text-cyan-400 text-xl">
                      {prop.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{prop.description}</p>
                  <div className="space-y-2">
                    {prop.metrics.map((metric, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <TrendingUp className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-green-400">{metric}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        {/* Key Differentiators */}
        <ScrollAnimation delay={600}>
          <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-center text-cyan-400 text-2xl flex items-center justify-center space-x-2">
                <Users className="w-6 h-6" />
                <span>What Sets Me Apart</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {differentiators.map((diff, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="bg-cyan-500/10 text-cyan-300 border-cyan-500/30 p-3 text-center justify-center hover:bg-cyan-500/20 transition-colors"
                  >
                    {diff}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </ScrollAnimation>

        {/* Call to Action */}
        <ScrollAnimation delay={800}>
          <div className="text-center mt-12">
            <p className="text-lg text-gray-300 mb-6">
              Ready to strengthen your security posture with a proven professional?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 text-lg"
              >
                Let's Discuss Your Needs
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.open('mailto:harshithvamshi1@gmail.com?subject=Resume Request&body=Hi Harshith, I would like to request your detailed resume for review.')}
                className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 text-lg"
              >
                Request Full Resume
              </Button>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default WhyHireMe;
