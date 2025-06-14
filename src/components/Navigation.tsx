
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // Convert section names to proper IDs
    let targetId = sectionId.toLowerCase().replace(/\s+/g, '-');
    
    // Handle special case for "Why Hire Me" section
    if (sectionId === "Why Hire Me") {
      targetId = "why-hire-me";
    }
    
    console.log('Scrolling to section:', targetId); // Debug log
    
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      console.log('Found element and scrolling to:', targetId); // Debug log
    } else {
      console.log('Element not found:', targetId); // Debug log
    }
    
    setIsMobileMenuOpen(false);
    
    // Track navigation click
    if ((window as any).trackButtonClick) {
      (window as any).trackButtonClick(`nav_${targetId}`, 'navigation');
    }
  };

  const navItems = [
    "About", 
    "Why Hire Me",
    "Experience", 
    "Projects",
    "Education", 
    "Skills", 
    "Certifications",
    "Contact"
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-slate-900/95 backdrop-blur-sm border-b border-cyan-500/20" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-cyan-400 font-bold text-xl">
            Harshith Reddy Vemula
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6">
            {navItems.map((item) => (
              <Button
                key={item}
                variant="ghost"
                className="text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-200 relative group text-sm"
                onClick={() => scrollToSection(item)}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="lg:hidden text-gray-300 hover:text-cyan-400"
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              if ((window as any).trackButtonClick) {
                (window as any).trackButtonClick('mobile_menu_toggle', 'navigation');
              }
            }}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="pt-4 pb-2 space-y-2">
            {navItems.map((item) => (
              <Button
                key={item}
                variant="ghost"
                className="w-full text-left justify-start text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10"
                onClick={() => scrollToSection(item)}
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
