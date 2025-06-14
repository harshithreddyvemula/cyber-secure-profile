
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-cyan-500/30 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 border border-green-500/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-blue-500/20 rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-cyan-500/50 shadow-2xl shadow-cyan-500/20">
                <img 
                  src="/lovable-uploads/d5898636-b603-4616-9431-e5012594036b.png" 
                  alt="Harshith Reddy Vemula"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 border border-cyan-500/30 rounded-full animate-pulse"></div>
            </div>
          </div>
          
          <div className="text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Harshith</span>
              <br />
              <span className="text-cyan-400">Reddy Vemula</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
              Cybersecurity Engineer & Software Developer
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed">
              Specializing in IT Security, Compliance, and Risk Management with expertise in 
              cloud security, penetration testing, and secure software development.
            </p>
            <div className="flex gap-4">
              <Button 
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3"
                onClick={scrollToAbout}
              >
                Explore My Work
              </Button>
              <Button 
                variant="outline" 
                className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-cyan-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
