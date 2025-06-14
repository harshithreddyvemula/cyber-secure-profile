
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import FloatingContactButton from "@/components/FloatingContactButton";
import SEO from "@/components/SEO";
import Analytics from "@/components/Analytics";
import CaseStudies from "@/components/CaseStudies";
import InteractiveTimeline from "@/components/InteractiveTimeline";
import WhyHireMe from "@/components/WhyHireMe";
import PerformanceMonitor from "@/components/PerformanceMonitor";
import EnhancedAnimations from "@/components/EnhancedAnimations";

const Index = () => {
  return (
    <>
      <SEO />
      <Analytics />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-x-hidden">
        {/* Enhanced background effects */}
        <EnhancedAnimations />
        
        {/* Global background pattern */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1)_0%,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(6,182,212,0.05)_50%,transparent_100%)]"></div>
        </div>
        
        <div className="relative z-10">
          <Navigation />
          <Hero />
          <About />
          <WhyHireMe />
          <Experience />
          <InteractiveTimeline />
          <Projects />
          <CaseStudies />
          <Education />
          <Skills />
          <Certifications />
          <Contact />
          <FloatingContactButton />
          {/* Performance Monitor now at the very bottom */}
          <PerformanceMonitor />
        </div>
      </div>
    </>
  );
};

export default Index;
