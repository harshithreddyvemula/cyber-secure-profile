
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-slate-900/95 backdrop-blur-sm border-b border-cyan-500/20" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-cyan-400 font-bold text-xl">
            Harshith Reddy Vemula
          </div>
          <div className="hidden md:flex space-x-8">
            {["About", "Experience", "Projects", "Education", "Skills", "Contact"].map((item) => (
              <Button
                key={item}
                variant="ghost"
                className="text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10"
                onClick={() => scrollToSection(item.toLowerCase())}
              >
                {item}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
