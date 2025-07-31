import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Award, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'Pioneering cutting-edge technology solutions that drive digital transformation'
    },
    {
      icon: Users,
      title: 'Excellence',
      description: 'Delivering world-class software solutions with uncompromising quality'
    },
    {
      icon: Award,
      title: 'Reliability',
      description: 'Trusted by global enterprises for mission-critical software development'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients across continents with localized expertise'
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Airobotech Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A leading multinational corporation at the forefront of software innovation, 
            specializing in intelligent solutions that transform businesses worldwide.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              Pioneering the Future of Software Development
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded with a vision to revolutionize the software industry, Airobotech Services 
                has grown into a global powerhouse, delivering innovative solutions to Fortune 500 
                companies and emerging startups alike.
              </p>
              <p>
                Under the visionary leadership of CEO Mr. Shubham Sethiya, our company has 
                established itself as a trusted partner for organizations seeking to leverage 
                cutting-edge technology for competitive advantage.
              </p>
              <p>
                Our multidisciplinary team of experts combines deep technical knowledge with 
                strategic business insights to deliver solutions that not only meet today's 
                challenges but anticipate tomorrow's opportunities.
              </p>
            </div>
            
            <div className="pt-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-2xl font-bold text-primary">10+</h4>
                  <p className="text-muted-foreground">Years of Excellence</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-primary">25+</h4>
                  <p className="text-muted-foreground">Countries Served</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-gradient-primary p-8 rounded-2xl shadow-elegant">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 space-y-4">
                <h4 className="text-xl font-semibold text-white">Our Mission</h4>
                <p className="text-white/90">
                  To empower organizations worldwide with intelligent software solutions 
                  that drive innovation, efficiency, and sustainable growth in the digital age.
                </p>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-secondary rounded-full opacity-30 animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;