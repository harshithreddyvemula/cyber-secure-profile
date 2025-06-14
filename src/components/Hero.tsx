
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/path-to-your-video.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          Your browser does not support the video tag.
        </video>
        {/* Enhanced dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
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
              <span className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-extrabold">Harshith</span>
              <br />
              <span className="text-cyan-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-extrabold">Reddy Vemula</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-100 mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-semibold">
              Cybersecurity Engineer & Software Developer
            </h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl leading-relaxed drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] font-medium">
              Specializing in IT Security, Compliance, and Risk Management with expertise in 
              cloud security, penetration testing, and secure software development.
            </p>
            <div className="flex gap-4">
              <Button 
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 font-semibold shadow-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
                onClick={scrollToAbout}
              >
                Explore My Work
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-500/20 hover:text-white px-8 py-3 font-semibold backdrop-blur-sm bg-black/20 shadow-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-cyan-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
