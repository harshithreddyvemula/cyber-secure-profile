
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, ExternalLink } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced video background with overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/path-to-your-video.mp4" type="video/mp4" />
        </video>
        {/* Multi-layered overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 via-transparent to-blue-900/20"></div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
          <div className="flex-shrink-0 animate-float">
            <div className="relative group">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-cyan-500/50 shadow-2xl shadow-cyan-500/20 cyber-glow">
                <img 
                  src="/lovable-uploads/d5898636-b603-4616-9431-e5012594036b.png" 
                  alt="Harshith Reddy Vemula"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute -inset-4 border border-cyan-500/30 rounded-full animate-pulse-glow"></div>
              <div className="absolute -inset-8 border border-cyan-400/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
          
          <div className="text-left max-w-2xl animate-slide-up">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-cyan-500/20 text-cyan-400 text-sm font-mono rounded-full border border-cyan-500/30 mb-4">
                Cybersecurity Professional
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-extrabold block animate-slide-up">
                Harshith
              </span>
              <span className="text-gradient drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-extrabold block animate-slide-up animate-stagger-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-green-400 bg-300% animate-gradient-shift bg-clip-text">
                Reddy Vemula
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-gray-100 mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-semibold animate-slide-up animate-stagger-2">
              Cybersecurity Engineer & Software Developer
            </h2>
            
            <p className="text-lg text-gray-200 mb-8 max-w-2xl leading-relaxed drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] font-medium animate-slide-up animate-stagger-3">
              Specializing in IT Security, Compliance, and Risk Management with expertise in 
              cloud security, penetration testing, and secure software development.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animate-stagger-3">
              <Button 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 font-semibold shadow-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] hover-lift group"
                onClick={scrollToAbout}
              >
                Explore My Work
                <ExternalLink className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-500/20 hover:text-white px-8 py-3 font-semibold glass-effect shadow-lg hover-lift group"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get In Touch
                <Download className="ml-2 w-4 h-4 transition-transform group-hover:translate-y-1" />
              </Button>
            </div>
            
            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 animate-slide-up animate-stagger-3">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">100+</div>
                <div className="text-sm text-gray-400">Security Flaws Found</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">3+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">15+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <ArrowDown className="w-6 h-6 text-cyan-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" />
            <span className="text-xs text-gray-400 font-mono">SCROLL TO EXPLORE</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
