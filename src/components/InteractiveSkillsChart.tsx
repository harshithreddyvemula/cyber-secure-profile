
import { useEffect, useState } from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ScrollAnimation from './ScrollAnimation';

const InteractiveSkillsChart = () => {
  const [activeView, setActiveView] = useState<'radar' | 'bar'>('radar');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const skillsData = [
    { skill: 'Cybersecurity', proficiency: 95, years: 4, projects: 12 },
    { skill: 'Cloud Security', proficiency: 90, years: 3, projects: 8 },
    { skill: 'Pen Testing', proficiency: 88, years: 3, projects: 15 },
    { skill: 'Python', proficiency: 85, years: 5, projects: 20 },
    { skill: 'Risk Mgmt', proficiency: 92, years: 4, projects: 10 },
    { skill: 'Compliance', proficiency: 90, years: 3, projects: 7 }
  ];

  const toolsData = [
    { category: 'Security Tools', tools: ['Burp Suite', 'Nessus', 'Splunk', 'BigID'], color: '#ef4444' },
    { category: 'Cloud Platforms', tools: ['Azure', 'AWS', 'GCP'], color: '#3b82f6' },
    { category: 'Programming', tools: ['Python', 'C#', 'PowerShell', 'Bash'], color: '#10b981' },
    { category: 'Compliance', tools: ['NIST 800-53', 'ISO 27001', 'GDPR', 'HIPAA'], color: '#f59e0b' }
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        <Button
          variant={activeView === 'radar' ? 'default' : 'outline'}
          onClick={() => setActiveView('radar')}
          className="bg-cyan-500 hover:bg-cyan-600"
        >
          Skills Radar
        </Button>
        <Button
          variant={activeView === 'bar' ? 'default' : 'outline'}
          onClick={() => setActiveView('bar')}
          className="bg-green-500 hover:bg-green-600"
        >
          Experience Chart
        </Button>
      </div>

      {activeView === 'radar' && (
        <ScrollAnimation>
          <Card className="glass-effect">
            <CardHeader>
              <CardTitle className="text-cyan-400 text-center">Core Skills Proficiency</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={skillsData}>
                    <PolarGrid stroke="#475569" />
                    <PolarAngleAxis 
                      dataKey="skill" 
                      tick={{ fill: '#e2e8f0', fontSize: 12 }}
                      className="text-xs"
                    />
                    <PolarRadiusAxis 
                      angle={90} 
                      domain={[0, 100]}
                      tick={{ fill: '#94a3b8', fontSize: 10 }}
                    />
                    <Radar
                      name="Proficiency"
                      dataKey="proficiency"
                      stroke="#06b6d4"
                      fill="#06b6d4"
                      fillOpacity={0.3}
                      strokeWidth={2}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </ScrollAnimation>
      )}

      {activeView === 'bar' && (
        <ScrollAnimation>
          <Card className="glass-effect">
            <CardHeader>
              <CardTitle className="text-green-400 text-center">Years of Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={skillsData} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                    <XAxis 
                      dataKey="skill" 
                      tick={{ fill: '#e2e8f0', fontSize: 10 }}
                      angle={-45}
                      textAnchor="end"
                      height={80}
                      interval={0}
                    />
                    <YAxis tick={{ fill: '#94a3b8' }} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1e293b', 
                        border: '1px solid #475569',
                        borderRadius: '8px'
                      }}
                      labelStyle={{ color: '#e2e8f0' }}
                    />
                    <Legend />
                    <Bar dataKey="years" fill="#10b981" name="Years of Experience" />
                    <Bar dataKey="projects" fill="#f59e0b" name="Projects Completed" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </ScrollAnimation>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {toolsData.map((category, index) => (
          <ScrollAnimation key={index} delay={index * 100}>
            <Card 
              className={`glass-effect cursor-pointer transition-all duration-300 hover:scale-105 ${
                selectedCategory === category.category ? 'ring-2 ring-cyan-400' : ''
              }`}
              onClick={() => setSelectedCategory(
                selectedCategory === category.category ? null : category.category
              )}
            >
              <CardHeader>
                <CardTitle 
                  className="text-white flex items-center gap-2"
                  style={{ color: category.color }}
                >
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: category.color }}
                  ></div>
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.tools.map((tool, i) => (
                    <Badge 
                      key={i}
                      variant="secondary"
                      className="bg-slate-700/50 text-gray-300 border-slate-600 hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default InteractiveSkillsChart;
