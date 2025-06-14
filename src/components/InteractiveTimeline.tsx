
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Award, Users, TrendingUp } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const InteractiveTimeline = () => {
  const [selectedYear, setSelectedYear] = useState<number | null>(2024);
  const [filter, setFilter] = useState<'all' | 'work' | 'education' | 'certification'>('all');

  const timelineData = [
    {
      year: 2024,
      type: 'work',
      title: 'IT Security & Compliance Administrator',
      organization: 'State of New Mexico',
      location: 'New Mexico, USA',
      status: 'Current',
      description: 'Leading cybersecurity initiatives and compliance management across state government departments.',
      achievements: [
        'Reduced security incidents by 65% through proactive threat detection',
        'Improved compliance scores by 28% across all frameworks',
        'Implemented automated security monitoring for 50+ departments'
      ],
      skills: ['Azure Security', 'Penetration Testing', 'GRC', 'MITRE ATT&CK'],
      impact: 'High'
    },
    {
      year: 2024,
      type: 'education',
      title: 'Master of Science in Computer Science',
      organization: 'University of Texas at Arlington',
      location: 'Arlington, TX',
      status: 'Completed',
      description: 'Specialized in cybersecurity, artificial intelligence, and data systems.',
      achievements: [
        'GPA: 3.5/4.0',
        'Focus on AI and Machine Learning applications in cybersecurity',
        'Completed advanced coursework in security architecture'
      ],
      skills: ['AI/ML', 'Database Systems', 'Algorithm Design', 'Web Security'],
      impact: 'High'
    },
    {
      year: 2023,
      type: 'work',
      title: 'Software Development Intern',
      organization: 'University of Texas at Arlington',
      location: 'Arlington, TX',
      status: 'Completed',
      description: 'Integrated security practices into DevOps pipelines and conducted security audits.',
      achievements: [
        'Improved testing efficiency by 25% through automation',
        'Implemented security testing in CI/CD pipelines',
        'Conducted security reviews of SDLC processes'
      ],
      skills: ['DevOps', 'Selenium', 'AWS', 'Security Testing'],
      impact: 'Medium'
    },
    {
      year: 2022,
      type: 'work',
      title: 'Software Engineer',
      organization: 'Tata Consultancy Services',
      location: 'India',
      status: 'Completed',
      description: 'Managed Azure cloud infrastructure and implemented security automation.',
      achievements: [
        'Automated security workflows improving efficiency by 30%',
        'Awarded "On the Spot Team Award" for 2 consecutive months',
        'Managed identity and access management for enterprise clients'
      ],
      skills: ['Azure', 'PowerShell', 'IAM', 'RBAC'],
      impact: 'High'
    },
    {
      year: 2021,
      type: 'education',
      title: 'Bachelor of Technology in CSE',
      organization: 'Anurag Group of Institutions',
      location: 'Hyderabad, India',
      status: 'Completed',
      description: 'Comprehensive computer science education with focus on security and systems.',
      achievements: [
        'GPA: 3.8/4.0',
        'Specialized in Information Security and Cryptography',
        'Completed projects in IoT security and cloud computing'
      ],
      skills: ['Data Structures', 'Cryptography', 'Networks', 'Cloud Computing'],
      impact: 'Foundation'
    },
    {
      year: 2021,
      type: 'work',
      title: 'Student Intern',
      organization: 'Unschool',
      location: 'Hyderabad, India',
      status: 'Completed',
      description: 'Conducted security assessments and developed cybersecurity policies.',
      achievements: [
        'Awarded "Best Employee" for May 2020',
        'Developed comprehensive security policies',
        'Improved organizational data security posture'
      ],
      skills: ['Risk Assessment', 'Policy Development', 'Web Security'],
      impact: 'Medium'
    }
  ];

  const certifications = [
    { year: 2024, name: 'CompTIA Security+', issuer: 'CompTIA', type: 'certification' },
    { year: 2024, name: 'AWS Data Engineer Associate', issuer: 'Amazon Web Services', type: 'certification' },
    { year: 2023, name: 'AWS Security Specialty', issuer: 'Amazon Web Services', type: 'certification' }
  ];

  const allEvents = [...timelineData, ...certifications].sort((a, b) => b.year - a.year);
  const filteredEvents = filter === 'all' ? allEvents : allEvents.filter(event => event.type === filter);
  const years = [...new Set(allEvents.map(event => event.year))].sort((a, b) => b - a);

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'High': return 'text-green-400 bg-green-400/20';
      case 'Medium': return 'text-yellow-400 bg-yellow-400/20';
      case 'Foundation': return 'text-blue-400 bg-blue-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'work': return <Users className="w-4 h-4" />;
      case 'education': return <Award className="w-4 h-4" />;
      case 'certification': return <TrendingUp className="w-4 h-4" />;
      default: return <Calendar className="w-4 h-4" />;
    }
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Professional <span className="text-gradient">Journey</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-green-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              An interactive timeline showcasing my career progression and achievements
            </p>
          </div>
        </ScrollAnimation>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'work', 'education', 'certification'].map((filterType) => (
            <Button
              key={filterType}
              variant={filter === filterType ? 'default' : 'outline'}
              onClick={() => setFilter(filterType as any)}
              className={filter === filterType ? 'bg-cyan-500 hover:bg-cyan-600' : ''}
            >
              {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
            </Button>
          ))}
        </div>

        {/* Year Navigation */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-4">
          <div className="flex gap-2">
            {years.map((year) => (
              <Button
                key={year}
                variant={selectedYear === year ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedYear(selectedYear === year ? null : year)}
                className={selectedYear === year ? 'bg-green-500 hover:bg-green-600' : ''}
              >
                {year}
              </Button>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-green-500"></div>
            
            <div className="space-y-8">
              {filteredEvents
                .filter(event => !selectedYear || event.year === selectedYear)
                .map((event, index) => (
                <ScrollAnimation key={`${event.year}-${index}`} delay={index * 100}>
                  <div className="relative flex items-start">
                    {/* Timeline Dot */}
                    <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 border-4 border-slate-900">
                      {getTypeIcon(event.type)}
                    </div>
                    
                    {/* Content */}
                    <div className="ml-8 flex-1">
                      <Card className="glass-effect hover-lift">
                        <CardContent className="p-6">
                          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-white mb-2">
                                {'title' in event ? event.title : event.name}
                              </h3>
                              <div className="flex flex-wrap gap-2 mb-3">
                                <Badge variant="outline" className="border-cyan-500/30 text-cyan-400">
                                  {'organization' in event ? event.organization : event.issuer}
                                </Badge>
                                {'location' in event && (
                                  <Badge variant="outline" className="border-gray-500/30 text-gray-400">
                                    <MapPin className="w-3 h-3 mr-1" />
                                    {event.location}
                                  </Badge>
                                )}
                                {'impact' in event && (
                                  <Badge className={getImpactColor(event.impact)}>
                                    {event.impact} Impact
                                  </Badge>
                                )}
                              </div>
                            </div>
                            
                            <div className="flex flex-col gap-2 lg:text-right">
                              <div className="flex items-center gap-2 text-gray-400">
                                <Calendar className="w-4 h-4" />
                                <span className="font-medium">{event.year}</span>
                              </div>
                              {'status' in event && (
                                <Badge 
                                  variant="outline" 
                                  className={event.status === 'Current' ? 'border-green-500/30 text-green-400' : 'border-blue-500/30 text-blue-400'}
                                >
                                  {event.status}
                                </Badge>
                              )}
                            </div>
                          </div>
                          
                          {'description' in event && (
                            <p className="text-gray-300 mb-4 leading-relaxed">{event.description}</p>
                          )}
                          
                          {'achievements' in event && event.achievements && (
                            <div className="mb-4">
                              <h4 className="text-white font-semibold mb-2">Key Achievements:</h4>
                              <ul className="space-y-1">
                                {event.achievements.map((achievement, i) => (
                                  <li key={i} className="text-gray-300 text-sm flex items-start">
                                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    {achievement}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          
                          {'skills' in event && event.skills && (
                            <div className="flex flex-wrap gap-2">
                              {event.skills.map((skill, i) => (
                                <Badge 
                                  key={i}
                                  variant="secondary"
                                  className="bg-slate-700/50 text-gray-300 border-slate-600 text-xs"
                                >
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveTimeline;
