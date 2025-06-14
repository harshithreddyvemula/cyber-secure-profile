
import { Card, CardContent } from "@/components/ui/card";
import { User, Shield, Code, Award, Zap, Target } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";
import AnimatedCounter from "./AnimatedCounter";

const About = () => {
  const achievements = [
    { icon: Shield, label: "Security Flaws Identified", value: 100, suffix: "+", color: "text-red-400" },
    { icon: Code, label: "Projects Completed", value: 15, suffix: "+", color: "text-green-400" },
    { icon: Award, label: "Years Experience", value: 3, suffix: "+", color: "text-blue-400" },
    { icon: Target, label: "Compliance Standards", value: 8, suffix: "+", color: "text-purple-400" },
  ];

  const highlights = [
    {
      icon: Shield,
      title: "Security Expert",
      description: "Specialized in penetration testing and vulnerability assessments with 100+ security flaws identified",
      color: "text-red-400"
    },
    {
      icon: Zap,
      title: "Performance Optimizer",
      description: "Improved system security posture by 30% and compliance scores by 20% through strategic implementations",
      color: "text-yellow-400"
    },
    {
      icon: Code,
      title: "Full-Stack Developer",
      description: "Proficient in multiple programming languages with expertise in secure software development practices",
      color: "text-green-400"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-slate-800/50 to-slate-900/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-500/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollAnimation>
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-green-500 mx-auto mb-4"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Passionate cybersecurity professional dedicated to protecting digital assets and ensuring compliance
            </p>
          </div>
        </ScrollAnimation>
        
        <div className="max-w-7xl mx-auto">
          {/* Achievement Stats */}
          <ScrollAnimation delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {achievements.map((achievement, index) => (
                <Card key={index} className="glass-effect hover-lift group cursor-pointer">
                  <CardContent className="p-8 text-center">
                    <achievement.icon className={`w-12 h-12 ${achievement.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`} />
                    <div className="text-3xl font-bold text-white mb-2">
                      <AnimatedCounter 
                        end={achievement.value} 
                        suffix={achievement.suffix}
                        duration={2000 + index * 200}
                      />
                    </div>
                    <p className="text-gray-400 text-sm font-medium">{achievement.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollAnimation>

          {/* Highlights Grid */}
          <ScrollAnimation delay={300}>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {highlights.map((highlight, index) => (
                <Card key={index} className="glass-effect hover-lift group">
                  <CardContent className="p-8">
                    <highlight.icon className={`w-10 h-10 ${highlight.color} mb-4 group-hover:scale-110 transition-transform duration-300`} />
                    <h3 className="text-xl font-semibold text-white mb-3">{highlight.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{highlight.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollAnimation>

          {/* Main About Content */}
          <ScrollAnimation delay={400}>
            <Card className="glass-effect hover-lift">
              <CardContent className="p-10">
                <div className="flex flex-col lg:flex-row items-start gap-8">
                  <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-6 rounded-2xl">
                    <User className="w-12 h-12 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-semibold text-white mb-8">
                      Cybersecurity Professional & Software Engineer
                    </h3>
                    <div className="space-y-6 text-gray-300 leading-relaxed">
                      <p className="text-lg">
                        I am a dedicated cybersecurity professional with extensive experience in IT security, 
                        compliance, and risk management. Currently serving as an <span className="text-cyan-400 font-semibold">IT Security & Compliance 
                        Administrator for the State of New Mexico</span>, I specialize in protecting digital assets 
                        and ensuring regulatory compliance across complex environments.
                      </p>
                      <p className="text-lg">
                        My expertise spans across <span className="text-green-400 font-semibold">penetration testing, vulnerability assessments, cloud security, 
                        and secure software development</span>. I have successfully identified and mitigated over 100 
                        security flaws, reducing potential attack surfaces by 25% while maintaining compliance 
                        with standards like <span className="text-blue-400 font-semibold">NIST 800-53, ISO 27001, and OWASP Top 10</span>.
                      </p>
                      <p className="text-lg">
                        With a <span className="text-purple-400 font-semibold">Master's degree in Computer and Information Science from the University of Texas 
                        at Arlington</span> and hands-on experience at leading organizations like Tata Consultancy Services, 
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
