import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Clients = () => {
  const clients = [
    { name: 'TechCorp', logo: 'TC', sector: 'Technology' },
    { name: 'Global Finance', logo: 'GF', sector: 'Financial Services' },
    { name: 'HealthPlus', logo: 'HP', sector: 'Healthcare' },
    { name: 'SmartManufacturing', logo: 'SM', sector: 'Manufacturing' },
    { name: 'EduTech Solutions', logo: 'ES', sector: 'Education' },
    { name: 'RetailNext', logo: 'RN', sector: 'Retail' },
    { name: 'EnergyFlow', logo: 'EF', sector: 'Energy' },
    { name: 'LogiMove', logo: 'LM', sector: 'Logistics' },
    { name: 'MediaStream', logo: 'MS', sector: 'Media' },
    { name: 'AgriTech Pro', logo: 'AP', sector: 'Agriculture' },
    { name: 'FinanceCore', logo: 'FC', sector: 'Fintech' },
    { name: 'CloudFirst', logo: 'CF', sector: 'Cloud Services' }
  ];

  const testimonials = [
    {
      quote: "Airobotech Services transformed our entire digital infrastructure. Their AI solutions increased our operational efficiency by 300% and reduced costs significantly.",
      author: "Sarah Johnson",
      position: "CTO, TechCorp International",
      company: "TechCorp"
    },
    {
      quote: "The IoT platform they developed for our smart city initiative has been revolutionary. Real-time monitoring and analytics have improved our urban management capabilities dramatically.",
      author: "Michael Chen",
      position: "Director of Innovation, Smart Cities Alliance",
      company: "Global Cities"
    },
    {
      quote: "Their mobile banking solution has set new industry standards. The user experience is exceptional, and the security features are world-class. Our customer engagement increased by 400%.",
      author: "Emily Rodriguez",
      position: "Chief Digital Officer, National Bank",
      company: "FinanceCore"
    }
  ];

  return (
    <section id="clients" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by <span className="bg-gradient-primary bg-clip-text text-transparent">Global Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We're proud to partner with industry leaders across various sectors, 
            delivering innovative solutions that drive their success.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="mb-20">
          <h3 className="text-xl font-semibold text-center text-foreground mb-8">
            Our Valued Partners
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {clients.map((client, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:shadow-glow transition-all duration-300">
                    <span className="text-white font-bold text-lg">{client.logo}</span>
                  </div>
                  <h4 className="font-semibold text-foreground text-sm mb-1">{client.name}</h4>
                  <p className="text-xs text-muted-foreground">{client.sector}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">
            What Our Clients Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="text-4xl text-primary mb-4">"</div>
                    <p className="text-muted-foreground italic leading-relaxed">
                      {testimonial.quote}
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.author}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-primary rounded-2xl p-8 lg:p-12 shadow-elegant">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-white/90">Global Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-white/90">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-white/90">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-white/90">Projects Delivered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;