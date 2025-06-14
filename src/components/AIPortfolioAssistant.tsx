
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Bot, Send, User, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const AIPortfolioAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hi! I'm Harshith's AI Portfolio Assistant. I can help you learn about his experience, skills, and projects. What would you like to know?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const quickQuestions = [
    "What are Harshith's key cybersecurity skills?",
    "Tell me about his certifications",
    "What projects has he worked on?",
    "How can he help my organization?",
    "What's his experience with cloud security?"
  ];

  const generateResponse = (question: string): string => {
    const responses: { [key: string]: string } = {
      "skills": "Harshith specializes in cybersecurity with expertise in penetration testing, cloud security (AWS, Azure), compliance frameworks (NIST 800-53, ISO 27001), and data engineering. He's proficient in Python, C++, and various security tools like Burp Suite, Nessus, and Splunk.",
      "certifications": "He holds CompTIA Security+, AWS Data Engineer Associate, and AWS Certified Security - Specialty certifications. He's also working towards additional cloud security certifications.",
      "projects": "His notable projects include enterprise security audits, cloud migration security assessments, automated vulnerability scanning systems, and secure data pipelines for compliance reporting.",
      "help": "Harshith can immediately contribute to your organization through penetration testing, security architecture design, compliance implementation, incident response, and building secure data analytics platforms.",
      "cloud": "He has extensive experience securing AWS and Azure environments, implementing cloud security best practices, managing IAM policies, and ensuring compliance in multi-cloud architectures.",
      "experience": "Harshith has worked across various industries, focusing on cybersecurity and data engineering. He's experienced in both technical implementation and strategic security planning.",
      "default": "That's a great question! Harshith brings a unique combination of cybersecurity expertise and data engineering skills. He's passionate about securing digital infrastructures and has a proven track record in enterprise environments. Would you like to know more about any specific area?"
    };

    const lowerQuestion = question.toLowerCase();
    
    if (lowerQuestion.includes('skill') || lowerQuestion.includes('technical')) return responses.skills;
    if (lowerQuestion.includes('cert') || lowerQuestion.includes('qualification')) return responses.certifications;
    if (lowerQuestion.includes('project') || lowerQuestion.includes('work')) return responses.projects;
    if (lowerQuestion.includes('help') || lowerQuestion.includes('contribute') || lowerQuestion.includes('value')) return responses.help;
    if (lowerQuestion.includes('cloud') || lowerQuestion.includes('aws') || lowerQuestion.includes('azure')) return responses.cloud;
    if (lowerQuestion.includes('experience') || lowerQuestion.includes('background')) return responses.experience;
    
    return responses.default;
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response delay
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: generateResponse(input),
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const handleQuickQuestion = (question: string) => {
    setInput(question);
    handleSend();
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-20 right-6 z-40">
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          size="lg"
        >
          <Bot className="w-6 h-6 mr-2" />
          Ask AI Assistant
          <Sparkles className="w-4 h-4 ml-2" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 w-96 max-w-[calc(100vw-2rem)]">
      <Card className="bg-slate-900/95 border-slate-700 backdrop-blur-sm shadow-2xl">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-cyan-400 text-lg flex items-center">
              <Bot className="w-5 h-5 mr-2" />
              AI Portfolio Assistant
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white"
            >
              ×
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Messages */}
          <div className="h-64 overflow-y-auto space-y-3 pr-2">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.role === 'user'
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800 text-gray-300'
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {message.role === 'assistant' && <Bot className="w-4 h-4 mt-0.5 text-cyan-400" />}
                    {message.role === 'user' && <User className="w-4 h-4 mt-0.5" />}
                    <span className="text-sm">{message.content}</span>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-800 text-gray-300 p-3 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Bot className="w-4 h-4 text-cyan-400" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Questions */}
          {messages.length <= 1 && (
            <div className="space-y-2">
              <p className="text-xs text-gray-400">Quick questions:</p>
              <div className="flex flex-wrap gap-1">
                {quickQuestions.slice(0, 3).map((question, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-xs cursor-pointer hover:bg-cyan-500/20 hover:text-cyan-400 transition-colors"
                    onClick={() => handleQuickQuestion(question)}
                  >
                    {question}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="flex space-x-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about Harshith's experience..."
              className="bg-slate-800 border-slate-600 text-white"
              disabled={isLoading}
            />
            <Button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="bg-cyan-500 hover:bg-cyan-600"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIPortfolioAssistant;
