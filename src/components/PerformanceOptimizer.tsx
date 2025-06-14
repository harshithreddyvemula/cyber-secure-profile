
import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Zap, Globe, Smartphone, Shield, CheckCircle, AlertCircle } from 'lucide-react';

const PerformanceOptimizer = () => {
  const [metrics, setMetrics] = useState({
    performance: 0,
    accessibility: 0,
    bestPractices: 0,
    seo: 0,
    loadTime: 0,
    fcp: 0,
    lcp: 0
  });

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate performance metrics loading
    const timer = setTimeout(() => {
      setMetrics({
        performance: 95,
        accessibility: 98,
        bestPractices: 92,
        seo: 96,
        loadTime: 1.2,
        fcp: 0.8,
        lcp: 1.5
      });
      setIsLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const optimizations = [
    {
      category: 'Performance',
      icon: Zap,
      improvements: [
        'Optimized images with WebP format and lazy loading',
        'Implemented code splitting and dynamic imports',
        'Minified CSS and JavaScript bundles',
        'Used CDN for static asset delivery'
      ],
      status: 'implemented'
    },
    {
      category: 'Accessibility',
      icon: Globe,
      improvements: [
        'Added ARIA labels and semantic HTML structure',
        'Ensured keyboard navigation compatibility',
        'Implemented proper color contrast ratios',
        'Added screen reader support'
      ],
      status: 'implemented'
    },
    {
      category: 'Mobile Experience',
      icon: Smartphone,
      improvements: [
        'Responsive design with Tailwind CSS',
        'Touch-friendly interaction areas',
        'Optimized viewport configuration',
        'Progressive Web App features'
      ],
      status: 'implemented'
    },
    {
      category: 'Security',
      icon: Shield,
      improvements: [
        'HTTPS enforcement and security headers',
        'Content Security Policy implementation',
        'XSS and CSRF protection',
        'Secure cookie configuration'
      ],
      status: 'implemented'
    }
  ];

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreBg = (score: number) => {
    if (score >= 90) return 'from-green-500/20 to-green-600/20';
    if (score >= 70) return 'from-yellow-500/20 to-yellow-600/20';
    return 'from-red-500/20 to-red-600/20';
  };

  return (
    <div className="space-y-8">
      {/* Performance Metrics */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Performance', value: metrics.performance, icon: Zap },
          { label: 'Accessibility', value: metrics.accessibility, icon: Globe },
          { label: 'Best Practices', value: metrics.bestPractices, icon: CheckCircle },
          { label: 'SEO', value: metrics.seo, icon: Shield }
        ].map((metric, index) => {
          const IconComponent = metric.icon;
          return (
            <Card key={metric.label} className={`glass-effect bg-gradient-to-br ${getScoreBg(metric.value)}`}>
              <CardContent className="p-6 text-center">
                <IconComponent className={`w-8 h-8 mx-auto mb-3 ${getScoreColor(metric.value)}`} />
                <div className={`text-3xl font-bold mb-2 ${getScoreColor(metric.value)}`}>
                  {isLoaded ? metric.value : 0}
                </div>
                <div className="text-gray-300 text-sm">{metric.label}</div>
                <Progress 
                  value={isLoaded ? metric.value : 0} 
                  className="mt-3 h-2"
                />
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Core Web Vitals */}
      <Card className="glass-effect">
        <CardHeader>
          <CardTitle className="text-cyan-400 flex items-center gap-2">
            <Zap className="w-5 h-5" />
            Core Web Vitals
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: 'First Contentful Paint', value: metrics.fcp, unit: 's', threshold: 1.8 },
              { label: 'Largest Contentful Paint', value: metrics.lcp, unit: 's', threshold: 2.5 },
              { label: 'Page Load Time', value: metrics.loadTime, unit: 's', threshold: 3.0 }
            ].map((vital) => (
              <div key={vital.label} className="text-center">
                <div className={`text-2xl font-bold mb-1 ${vital.value <= vital.threshold ? 'text-green-400' : 'text-yellow-400'}`}>
                  {isLoaded ? vital.value.toFixed(1) : '0.0'}{vital.unit}
                </div>
                <div className="text-gray-300 text-sm">{vital.label}</div>
                <Badge 
                  variant="outline" 
                  className={vital.value <= vital.threshold ? 'border-green-500/30 text-green-400' : 'border-yellow-500/30 text-yellow-400'}
                >
                  {vital.value <= vital.threshold ? 'Good' : 'Needs Improvement'}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Optimization Details */}
      <div className="grid md:grid-cols-2 gap-6">
        {optimizations.map((opt, index) => {
          const IconComponent = opt.icon;
          return (
            <Card key={index} className="glass-effect">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <IconComponent className="w-5 h-5 text-cyan-400" />
                  {opt.category}
                  {opt.status === 'implemented' && (
                    <CheckCircle className="w-4 h-4 text-green-400 ml-auto" />
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {opt.improvements.map((improvement, i) => (
                    <li key={i} className="text-gray-300 text-sm flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                      {improvement}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default PerformanceOptimizer;
