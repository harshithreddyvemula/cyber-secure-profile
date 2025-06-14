
import { Mail, Phone } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const FloatingContactButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className={`flex flex-col-reverse gap-3 transition-all duration-300 ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
        <Button
          onClick={() => window.open('mailto:harshithvamshi1@gmail.com')}
          className="bg-slate-800 hover:bg-slate-700 text-white p-3 rounded-full shadow-lg"
          size="sm"
        >
          <Mail className="w-4 h-4" />
        </Button>
        <Button
          onClick={() => window.open('tel:682-374-4788')}
          className="bg-slate-800 hover:bg-slate-700 text-white p-3 rounded-full shadow-lg"
          size="sm"
        >
          <Phone className="w-4 h-4" />
        </Button>
      </div>
      
      <Button
        onClick={() => {
          if (isExpanded) {
            scrollToContact();
          } else {
            setIsExpanded(!isExpanded);
          }
        }}
        className="bg-cyan-500 hover:bg-cyan-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        size="lg"
      >
        <Mail className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default FloatingContactButton;
