
import { Card, CardContent } from "@/components/ui/card";
import { User, Shield, Code, Award } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";
import AnimatedCounter from "./AnimatedCounter";

const About = () => {
  const achievements = [
    { icon: Shield, label: "Security Flaws Identified", value: 100, suffix: "+" },
    { icon: Code, label: "Projects Completed", value: 15, suffix: "+" },
    { icon: Award, label: "Years Experience", value: 3, suffix: "+" },
    { icon: User, label: "Compliance Standards", value: 8, suffix: "+" },
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              About <span className="text-cyan-400">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-green-500 mx-auto"></div>
          </div>
        </ScrollAnimation>
        
        <div className="max-w-6xl mx-auto">
          {/* Achievement Stats */}
          <ScrollAnimation delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {achievements.map((achievement, index) => (
                <Card key={index} className="bg-slate-900/50 border-slate-700 backdrop-blur-sm text-center hover:bg-slate-900/70 transition-all duration-300">
                  <CardContent className="p-6">
                    <achievement.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-white mb-1">
                      <AnimatedCounter 
                        end={achievement.value} 
                        suffix={achievement.suffix}
                        duration={2000 + index * 200}
                      />
                    </div>
                    <p className="text-gray-400 text-sm">{achievement.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={400}>
            <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm hover:bg-slate-900/70 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="bg-cyan-500/10 p-4 rounded-full">
                    <User className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-6">
                      Cybersecurity Professional & Software Engineer
                    </h3>
                    <div className="space-y-4 text-gray-300 leading-relaxed">
                      <p>
                        I am a dedicated cybersecurity professional with extensive experience in IT security, 
                        compliance, and risk management. Currently serving as an IT Security & Compliance 
                        Administrator for the State of New Mexico, I specialize in protecting digital assets 
                        and ensuring regulatory compliance across complex environments.
                      </p>
                      <p>
                        My expertise spans across penetration testing, vulnerability assessments, cloud security, 
                        and secure software development. I have successfully identified and mitigated over 100 
                        security flaws, reducing potential attack surfaces by 25% while maintaining compliance 
                        with standards like NIST 800-53, ISO 27001, and OWASP Top 10.
                      </p>
                      <p>
                        With a Master's degree in Computer and Information Science from the University of Texas 
                        at Arlington and hands-on experience at leading organizations like Tata Consultancy Services, 
                        I bring a unique blend of theoretical knowledge and practical expertise to every project.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default About;
