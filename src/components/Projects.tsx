import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, ArrowRight, Filter } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'AI/ML', 'Web Development', 'Mobile Apps', 'IoT', 'Cloud Solutions'];

  const projects = [
    {
      title: 'Smart Healthcare Platform',
      category: 'AI/ML',
      description: 'AI-powered diagnostic platform serving 100+ hospitals worldwide with real-time patient monitoring.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
      technologies: ['Python', 'TensorFlow', 'React', 'AWS'],
      metrics: '50M+ Patients Served',
      status: 'Live Production'
    },
    {
      title: 'Global E-Commerce Solution',
      category: 'Web Development',
      description: 'Scalable multi-vendor marketplace handling 1M+ daily transactions across 25 countries.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Kubernetes'],
      metrics: '$500M+ Revenue Generated',
      status: 'Recently Launched'
    },
    {
      title: 'Smart City IoT Network',
      category: 'IoT',
      description: 'Comprehensive IoT infrastructure for traffic management, energy optimization, and public safety.',
      image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop',
      technologies: ['IoT Core', 'Edge Computing', 'Machine Learning', 'Real-time Analytics'],
      metrics: '10+ Cities Deployed',
      status: 'Expanding'
    },
    {
      title: 'Financial Trading Platform',
      category: 'Cloud Solutions',
      description: 'High-frequency trading platform with microsecond latency and 99.99% uptime guarantee.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop',
      technologies: ['C++', 'Kafka', 'Redis', 'Docker'],
      metrics: '10B+ Transactions/Day',
      status: 'Critical Infrastructure'
    },
    {
      title: 'Mobile Banking Revolution',
      category: 'Mobile Apps',
      description: 'Next-generation mobile banking app with biometric authentication and AI-powered insights.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
      technologies: ['React Native', 'Biometrics', 'Blockchain', 'AI'],
      metrics: '5M+ Active Users',
      status: 'Award Winning'
    },
    {
      title: 'Enterprise AI Assistant',
      category: 'AI/ML',
      description: 'Intelligent virtual assistant automating 80% of customer service inquiries across industries.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
      technologies: ['NLP', 'Deep Learning', 'Cloud AI', 'APIs'],
      metrics: '95% Customer Satisfaction',
      status: 'Industry Leading'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Showcasing our expertise through successful implementations that have transformed 
            businesses and impacted millions of users worldwide.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-gradient-primary text-white shadow-glow'
                  : 'bg-background text-muted-foreground hover:text-primary hover:bg-primary/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-gradient-secondary text-white">
                    {project.status}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-3">
                  <Badge variant="outline" className="text-primary border-primary">
                    {project.category}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <p className="text-sm font-semibold text-primary mb-2">{project.metrics}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button variant="ghost" className="group/btn text-primary hover:text-primary p-0">
                  View Case Study
                  <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group">
            View All Projects
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;