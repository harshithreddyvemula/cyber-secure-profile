
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const TestimonialsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "CISO",
      company: "TechCorp Solutions",
      image: "/placeholder.svg",
      rating: 5,
      text: "Harshith's cybersecurity assessment was incredibly thorough. He identified critical vulnerabilities we hadn't noticed and provided actionable solutions that significantly improved our security posture.",
      project: "Security Assessment & Penetration Testing"
    },
    {
      name: "David Chen",
      role: "IT Director",
      company: "FinanceFirst Bank",
      image: "/placeholder.svg",
      rating: 5,
      text: "Working with Harshith on our cloud security migration was exceptional. His expertise in AWS security helped us achieve compliance while maintaining operational efficiency.",
      project: "Cloud Security Implementation"
    },
    {
      name: "Maria Rodriguez",
      role: "Compliance Manager",
      company: "HealthTech Innovations",
      image: "/placeholder.svg",
      rating: 5,
      text: "Harshith guided us through HIPAA compliance with professionalism and deep expertise. His training sessions were invaluable for our team's security awareness.",
      project: "HIPAA Compliance Consulting"
    },
    {
      name: "James Thompson",
      role: "CEO",
      company: "StartupXYZ",
      image: "/placeholder.svg",
      rating: 5,
      text: "As a startup, we needed cost-effective security solutions. Harshith delivered a comprehensive security framework that scales with our growth. Highly recommended!",
      project: "Startup Security Strategy"
    },
    {
      name: "Lisa Wang",
      role: "Security Manager",
      company: "GlobalTech Industries",
      image: "/placeholder.svg",
      rating: 5,
      text: "The incident response service was outstanding. Harshith's quick action and expertise helped us contain a security breach within hours, minimizing damage and downtime.",
      project: "Emergency Incident Response"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Client <span className="text-cyan-400">Testimonials</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-green-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            What clients say about working with me on their cybersecurity challenges
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Card className="glass-effect mx-4">
                    <CardContent className="p-8">
                      <div className="flex items-start mb-6">
                        <Quote className="w-8 h-8 text-cyan-400 mr-4 flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            "{testimonial.text}"
                          </p>
                          
                          <div className="flex items-center mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                            ))}
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                                <span className="text-white font-bold text-lg">
                                  {testimonial.name.charAt(0)}
                                </span>
                              </div>
                              <div>
                                <div className="text-white font-semibold">{testimonial.name}</div>
                                <div className="text-gray-400 text-sm">
                                  {testimonial.role} at {testimonial.company}
                                </div>
                              </div>
                            </div>
                            
                            <div className="text-right">
                              <div className="text-cyan-400 text-sm font-medium">Project:</div>
                              <div className="text-gray-300 text-sm">{testimonial.project}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-slate-900/90 border-slate-700 hover:bg-cyan-500/20 hover:border-cyan-500"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-4 h-4 text-cyan-400" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-slate-900/90 border-slate-700 hover:bg-cyan-500/20 hover:border-cyan-500"
            onClick={nextSlide}
          >
            <ChevronRight className="w-4 h-4 text-cyan-400" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-cyan-400 scale-125' 
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-gray-400 mb-4">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span>Join 50+ satisfied clients who trust my cybersecurity expertise</span>
          </div>
          <Button
            className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white px-8 py-3"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
              
              if ((window as any).trackButtonClick) {
                (window as any).trackButtonClick('testimonials_cta', 'testimonials');
              }
            }}
          >
            Start Your Security Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
