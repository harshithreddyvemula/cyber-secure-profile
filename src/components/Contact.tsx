import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, User, FileText, Briefcase, Loader2, Send } from "lucide-react";
import { useState, useEffect } from "react";
import { useContactForm } from "@/hooks/useContactForm";
import { useAnalytics } from "@/hooks/useAnalytics";

const Contact = () => {
  const { submitContact, isSubmitting } = useContactForm();
  const { trackSectionView, trackButtonClick } = useAnalytics();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    inquiry_type: "",
    message: ""
  });

  useEffect(() => {
    trackSectionView('contact');
  }, [trackSectionView]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    trackButtonClick('contact_form_submit', 'contact');
    
    const result = await submitContact({
      name: formData.name,
      email: formData.email,
      company: formData.company,
      role: formData.role,
      inquiry_type: formData.inquiry_type,
      message: formData.message
    });

    if (result.success) {
      setFormData({ name: "", email: "", company: "", role: "", inquiry_type: "", message: "" });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      inquiry_type: value
    }));
  };

  const handleQuickAction = (actionType: string, subject: string, body: string) => {
    trackButtonClick(`quick_action_${actionType}`, 'contact');
    window.open(`mailto:harshithvamshi1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-green-500 mx-auto"></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-cyan-500/10 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-gray-400">Email</p>
                    <a href="mailto:harshithvamshi1@gmail.com" className="text-white hover:text-cyan-400 transition-colors">
                      harshithvamshi1@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-cyan-500/10 p-3 rounded-full">
                    <User className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-gray-400">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/harshithreddy-vemula" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-cyan-400 transition-colors"
                    >
                      linkedin.com/in/harshithreddy-vemula
                    </a>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="mt-8 space-y-4">
                  <h4 className="text-lg font-semibold text-cyan-400">Quick Actions</h4>
                  <div className="space-y-3">
                    <Button 
                      onClick={() => handleQuickAction('resume', 'Resume Request', 'Hi Harshith, I would like to request your detailed resume for review.')}
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Request Resume (PDF)
                    </Button>
                    <Button 
                      onClick={() => handleQuickAction('interview', 'Interview Request', 'Hi Harshith, I would like to schedule an interview to discuss potential opportunities.')}
                      variant="outline"
                      className="w-full border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
                    >
                      <Briefcase className="w-4 h-4 mr-2" />
                      Schedule Interview
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Send a Message</CardTitle>
                  <p className="text-gray-400">Fill out the form below and I'll get back to you within 24 hours.</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-gray-300">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="bg-slate-800 border-slate-600 text-white"
                          placeholder="Your full name"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-gray-300">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="bg-slate-800 border-slate-600 text-white"
                          placeholder="your.email@company.com"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="company" className="text-gray-300">Company</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="bg-slate-800 border-slate-600 text-white"
                          placeholder="Your company name"
                          disabled={isSubmitting}
                        />
                      </div>
                      <div>
                        <Label htmlFor="role" className="text-gray-300">Your Role</Label>
                        <Input
                          id="role"
                          name="role"
                          value={formData.role}
                          onChange={handleChange}
                          className="bg-slate-800 border-slate-600 text-white"
                          placeholder="e.g., HR Manager, CTO"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="inquiry_type" className="text-gray-300">Inquiry Type *</Label>
                      <Select onValueChange={handleSelectChange} required disabled={isSubmitting}>
                        <SelectTrigger className="bg-slate-800 border-slate-600 text-white">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 border-slate-600 text-white z-50">
                          <SelectItem value="resume">Resume Request</SelectItem>
                          <SelectItem value="interview">Interview Opportunity</SelectItem>
                          <SelectItem value="project">Project Collaboration</SelectItem>
                          <SelectItem value="consultation">Security Consultation</SelectItem>
                          <SelectItem value="general">General Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-gray-300">Message *</Label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-3 bg-slate-800 border border-slate-600 rounded-md text-white min-h-[120px] resize-none"
                        placeholder="Tell me about your requirements, timeline, or any specific questions you have..."
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="pt-4">
                      <Button 
                        type="submit" 
                        className="w-full h-14 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none border border-cyan-400/30"
                        disabled={!formData.name || !formData.email || !formData.inquiry_type || !formData.message || isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-3" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
