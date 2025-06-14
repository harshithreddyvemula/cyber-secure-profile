
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, User, FileText, Briefcase } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    inquiryType: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate email with appropriate subject and body based on inquiry type
    const subject = formData.inquiryType === 'resume' 
      ? 'Resume Request - Harshith Reddy Vemula'
      : `${formData.inquiryType.charAt(0).toUpperCase() + formData.inquiryType.slice(1)} Inquiry - ${formData.name}`;
    
    const body = `
Hello Harshith,

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Role: ${formData.role}
Inquiry Type: ${formData.inquiryType}

Message:
${formData.message}

Best regards,
${formData.name}
    `;

    const mailtoLink = `mailto:harshithvamshi1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);

    toast({
      title: "Message Prepared!",
      description: "Your email client has been opened with the pre-filled message. Please send it to complete your inquiry.",
    });
    
    setFormData({ name: "", email: "", company: "", role: "", inquiryType: "", message: "" });
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
      inquiryType: value
    }));
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
                      onClick={() => window.open('mailto:harshithvamshi1@gmail.com?subject=Resume Request&body=Hi Harshith, I would like to request your detailed resume for review.')}
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Request Resume (PDF)
                    </Button>
                    <Button 
                      onClick={() => window.open('mailto:harshithvamshi1@gmail.com?subject=Interview Request&body=Hi Harshith, I would like to schedule an interview to discuss potential opportunities.')}
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
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="inquiryType" className="text-gray-300">Inquiry Type *</Label>
                      <Select onValueChange={handleSelectChange} required>
                        <SelectTrigger className="bg-slate-800 border-slate-600 text-white">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 border-slate-600 text-white z-50">
                          <SelectItem value="resume" className="text-white hover:bg-slate-700 focus:bg-slate-700">Resume Request</SelectItem>
                          <SelectItem value="interview" className="text-white hover:bg-slate-700 focus:bg-slate-700">Interview Opportunity</SelectItem>
                          <SelectItem value="project" className="text-white hover:bg-slate-700 focus:bg-slate-700">Project Collaboration</SelectItem>
                          <SelectItem value="consultation" className="text-white hover:bg-slate-700 focus:bg-slate-700">Security Consultation</SelectItem>
                          <SelectItem value="general" className="text-white hover:bg-slate-700 focus:bg-slate-700">General Inquiry</SelectItem>
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
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 text-lg"
                      disabled={!formData.name || !formData.email || !formData.inquiryType || !formData.message}
                    >
                      Send Message
                    </Button>
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
