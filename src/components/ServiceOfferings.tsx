
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, Search, Cloud, FileCheck, Users, Zap } from 'lucide-react';

const ServiceOfferings = () => {
  const services = [
    {
      icon: Shield,
      title: "Cybersecurity Assessment",
      description: "Comprehensive security audits and vulnerability assessments to identify and mitigate risks in your infrastructure.",
      features: ["Vulnerability Scanning", "Risk Assessment", "Security Policies Review", "Compliance Gap Analysis"],
      price: "Starting at $2,500",
      duration: "1-2 weeks",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Search,
      title: "Penetration Testing",
      description: "Ethical hacking services to identify security weaknesses before malicious actors do.",
      features: ["Network Penetration Testing", "Web Application Testing", "Social Engineering Tests", "Detailed Reporting"],
      price: "Starting at $3,500",
      duration: "2-3 weeks",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Cloud,
      title: "Cloud Security",
      description: "Secure your cloud infrastructure with best practices and continuous monitoring solutions.",
      features: ["AWS/Azure Security Review", "Cloud Architecture Design", "Identity & Access Management", "Monitoring Setup"],
      price: "Starting at $4,000",
      duration: "2-4 weeks",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: FileCheck,
      title: "Compliance Consulting",
      description: "Navigate complex regulatory requirements with expert guidance on GDPR, HIPAA, SOX, and more.",
      features: ["Compliance Gap Analysis", "Policy Development", "Audit Preparation", "Staff Training"],
      price: "Starting at $3,000",
      duration: "3-6 weeks",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Users,
      title: "Security Training",
      description: "Empower your team with cybersecurity awareness and technical security training programs.",
      features: ["Security Awareness Training", "Phishing Simulations", "Technical Training", "Custom Workshops"],
      price: "Starting at $1,500",
      duration: "1-2 weeks",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Zap,
      title: "Incident Response",
      description: "24/7 emergency response services to contain and remediate security incidents quickly.",
      features: ["Incident Investigation", "Forensic Analysis", "Recovery Planning", "Post-Incident Review"],
      price: "Starting at $5,000",
      duration: "Immediate",
      color: "from-cyan-500 to-cyan-600"
    }
  ];

  const handleContactClick = (service: string) => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
    
    // Track service inquiry
    if ((window as any).trackButtonClick) {
      (window as any).trackButtonClick(`service_inquiry_${service}`, 'services');
    }
  };

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Cybersecurity <span className="text-cyan-400">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-green-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Comprehensive cybersecurity solutions tailored to protect your business and ensure compliance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index}
                className="glass-effect hover:border-cyan-500/30 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10 group h-full flex flex-col"
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className={`bg-gradient-to-r ${service.color} p-4 rounded-full group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-white text-xl mb-2">{service.title}</CardTitle>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col justify-between pt-0">
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-cyan-400 font-semibold mb-3">What's Included:</h4>
                      <div className="space-y-2">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></div>
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-slate-700">
                      <div>
                        <div className="text-cyan-400 font-bold text-lg">{service.price}</div>
                        <div className="text-gray-500 text-sm">{service.duration}</div>
                      </div>
                      <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20">
                        Professional
                      </Badge>
                    </div>
                  </div>

                  <Button
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white transition-all duration-300"
                    onClick={() => handleContactClick(service.title)}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Need a Custom Solution?</h3>
            <p className="text-gray-400 mb-6">
              Every organization has unique security challenges. Let's discuss how I can create a tailored cybersecurity strategy for your specific needs.
            </p>
            <Button
              className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white px-8 py-3"
              onClick={() => handleContactClick('Custom Solution')}
            >
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOfferings;
