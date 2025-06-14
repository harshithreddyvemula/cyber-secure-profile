
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GitBranch, Star, Users, Calendar, ExternalLink } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';

interface GitHubRepo {
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
  html_url: string;
}

interface GitHubUser {
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

const GitHubStats = () => {
  const username = "harshithreddy-vemula"; // Replace with actual GitHub username

  const { data: userData } = useQuery({
    queryKey: ['github-user', username],
    queryFn: async () => {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) throw new Error('Failed to fetch user data');
      return response.json() as Promise<GitHubUser>;
    },
    staleTime: 5 * 60 * 1000,
  });

  const { data: reposData } = useQuery({
    queryKey: ['github-repos', username],
    queryFn: async () => {
      const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
      if (!response.ok) throw new Error('Failed to fetch repos');
      return response.json() as Promise<GitHubRepo[]>;
    },
    staleTime: 5 * 60 * 1000,
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      'Python': 'bg-blue-500',
      'JavaScript': 'bg-yellow-500',
      'TypeScript': 'bg-blue-600',
      'C#': 'bg-purple-500',
      'PowerShell': 'bg-blue-400',
      'Shell': 'bg-gray-500',
      'default': 'bg-gray-400'
    };
    return colors[language] || colors.default;
  };

  return (
    <section id="github-stats" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Live <span className="text-cyan-400">GitHub Activity</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-green-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real-time view of my development activity and contributions
          </p>
        </div>

        {/* GitHub Stats Overview */}
        {userData && (
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="glass-effect text-center">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center mb-4">
                  <GitBranch className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{userData.public_repos}</div>
                <div className="text-gray-400">Public Repositories</div>
              </CardContent>
            </Card>

            <Card className="glass-effect text-center">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-green-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{userData.followers}</div>
                <div className="text-gray-400">Followers</div>
              </CardContent>
            </Card>

            <Card className="glass-effect text-center">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center mb-4">
                  <Calendar className="w-8 h-8 text-purple-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {new Date().getFullYear() - new Date(userData.created_at).getFullYear()}+
                </div>
                <div className="text-gray-400">Years on GitHub</div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Recent Repositories */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Recent Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reposData?.map((repo, index) => (
              <Card key={index} className="glass-effect hover:border-cyan-500/30 transition-all duration-300 group">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg text-white group-hover:text-cyan-400 transition-colors">
                      {repo.name}
                    </CardTitle>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300 text-sm line-clamp-2">
                    {repo.description || "No description available"}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-gray-400">{repo.stargazers_count}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <GitBranch className="w-4 h-4 text-cyan-400" />
                        <span className="text-gray-400">{repo.forks_count}</span>
                      </div>
                    </div>
                    
                    {repo.language && (
                      <Badge className={`${getLanguageColor(repo.language)} text-white border-0`}>
                        {repo.language}
                      </Badge>
                    )}
                  </div>

                  <div className="text-xs text-gray-500">
                    Updated {formatDate(repo.updated_at)}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
