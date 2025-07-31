import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Code, Cpu, Cloud } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-primary rounded-full opacity-20 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-secondary rounded-full opacity-15 blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm">
                <Cpu className="w-4 h-4 mr-2" />
                AI-Powered Solutions
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Empowering{' '}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Intelligent
                </span>
                <br />
                Software Solutions
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl">
                Leading multinational corporation specializing in cutting-edge software development, 
                AI & ML solutions, IoT integration, and cloud systems. Transform your business with 
                our innovative technology solutions.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-muted-foreground">Global Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">200+</div>
                <div className="text-muted-foreground">Projects Delivered</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white group">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            {/* CEO Info */}
            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-2">Led by CEO</p>
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center">
                  <span className="font-semibold text-white">SS</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Mr. Shubham Sethiya</h3>
                  <p className="text-sm text-muted-foreground">Chief Executive Officer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Elements */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              {/* Main Tech Card */}
              <div className="bg-card p-8 rounded-2xl shadow-elegant border border-border">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Code className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Software Development</h3>
                      <p className="text-sm text-muted-foreground">Custom Solutions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-secondary rounded-lg flex items-center justify-center">
                      <Cpu className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">AI & ML Solutions</h3>
                      <p className="text-sm text-muted-foreground">Intelligent Automation</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Cloud className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Cloud Integration</h3>
                      <p className="text-sm text-muted-foreground">Scalable Infrastructure</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-secondary rounded-full opacity-20 animate-glow-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-primary rounded-full opacity-30 animate-float"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;