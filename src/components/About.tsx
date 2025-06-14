
import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-green-500 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm">
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
        </div>
      </div>
    </section>
  );
};

export default About;
