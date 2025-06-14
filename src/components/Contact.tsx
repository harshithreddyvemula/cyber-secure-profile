
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Phone, User } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
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
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
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
                    <Phone className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-gray-400">Phone</p>
                    <a href="tel:682-374-4788" className="text-white hover:text-cyan-400 transition-colors">
                      682-374-4788
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
              </div>
            </div>
            
            {/* Contact Form */}
            <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-gray-300">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-slate-800 border-slate-600 text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-300">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-slate-800 border-slate-600 text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-gray-300">Message</Label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full p-3 bg-slate-800 border border-slate-600 rounded-md text-white min-h-[120px] resize-none"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-600 text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
