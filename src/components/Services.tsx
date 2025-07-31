import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Code, 
  Cpu, 
  Cloud, 
  Smartphone, 
  Database, 
  Shield, 
  Zap, 
  ArrowRight,
  Wifi
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs with modern technologies and best practices.',
      features: ['Web Applications', 'Desktop Software', 'API Development', 'Legacy Modernization'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Cpu,
      title: 'AI & ML Solutions',
      description: 'Intelligent automation and machine learning systems that transform data into actionable insights.',
      features: ['Predictive Analytics', 'Computer Vision', 'Natural Language Processing', 'Deep Learning'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Wifi,
      title: 'IoT Integration',
      description: 'Connect and automate your devices with our comprehensive IoT solutions and platforms.',
      features: ['Device Management', 'Real-time Monitoring', 'Edge Computing', 'Industrial IoT'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Cloud,
      title: 'Cloud Systems',
      description: 'Scalable cloud infrastructure and migration services for modern, resilient applications.',
      features: ['Cloud Migration', 'DevOps Solutions', 'Microservices', 'Container Orchestration'],
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter Apps'],
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Transform raw data into meaningful insights with our advanced analytics and visualization tools.',
      features: ['Business Intelligence', 'Data Warehousing', 'Real-time Analytics', 'Data Visualization'],
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
      features: ['Security Audits', 'Penetration Testing', 'Identity Management', 'Compliance Solutions'],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services to modernize your business processes.',
      features: ['Process Automation', 'Digital Strategy', 'Change Management', 'Technology Consulting'],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your digital transformation 
            and drive sustainable business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <CardHeader className="relative">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative">
                <p className="text-muted-foreground mb-4">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button variant="ghost" className="group/btn text-primary hover:text-primary p-0">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-primary rounded-2xl p-8 lg:p-12 shadow-elegant">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-white/90 mb-8">
              Let's discuss how our expert team can help you achieve your technology goals 
              and drive innovation in your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Get Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;