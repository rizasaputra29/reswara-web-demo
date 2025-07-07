'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle, Star, Users, Award, Building2, Sparkles, Target, Zap, Shield, Phone, Mail, MapPin } from 'lucide-react';
import { services, portfolioItems, companyInfo, incrementVisitorCount } from '@/lib/data';
import ServiceCard from '@/components/ServiceCard';
import PortfolioCard from '@/components/PortfolioCard';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedCard from '@/components/AnimatedCard';
import CounterAnimation from '@/components/CounterAnimation';

const HomePage = () => {
  useEffect(() => {
    incrementVisitorCount();
    // Track page view
    fetch('/api/analytics/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'page_view', page: 'home' })
    }).catch(console.error);
  }, []);

  const stats = [
    { icon: Building2, value: 100, label: 'Projects Completed', suffix: '+', color: 'blue' },
    { icon: Users, value: 50, label: 'Happy Clients', suffix: '+', color: 'emerald' },
    { icon: Award, value: 15, label: 'Years Experience', suffix: '+', color: 'amber' },
    { icon: Star, value: 4.9, label: 'Client Rating', suffix: '', color: 'purple' },
  ];

  const benefits = [
    'Professional expertise with 15+ years experience',
    'Comprehensive solutions from design to completion',
    'Sustainable and environmentally conscious approach',
    'Certified professionals and quality assurance'
  ];

  const businessPartners = [
    { name: 'PT. Graha Indah', logo: '/api/placeholder/120/60' },
    { name: 'PT. Teknologi Maju', logo: '/api/placeholder/120/60' },
    { name: 'Pemda Kota Jakarta', logo: '/api/placeholder/120/60' },
    { name: 'PT. Retail Nusantara', logo: '/api/placeholder/120/60' },
    { name: 'Paradise Resort & Spa', logo: '/api/placeholder/120/60' },
    { name: 'RS. Sehat Sentosa', logo: '/api/placeholder/120/60' }
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center gradient-brand-light">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(30, 64, 175, 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(5, 150, 105, 0.3) 0%, transparent 50%)',
          }} />
        </div>

        <div className="relative container-responsive py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <AnimatedSection>
                <Badge className="bg-blue-100 text-blue-700 border-blue-200 mb-6 px-4 py-2">
                  🏆 Trusted Since 2010
                </Badge>
                <h1 className="heading-xl">
                  <span className="text-blue-600">Transform</span>
                  <br />
                  Your Space with
                  <br />
                  <span className="text-slate-900">Professional Excellence</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                  Leading landscape development and building consulting services. 
                  Creating sustainable, beautiful, and functional environments for over 15 years.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="btn-primary">
                    <Link href="/services" className="flex items-center">
                      Explore Services
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button className="btn-secondary">
                    <Link href="/contact">Free Consultation</Link>
                  </Button>
                </div>
              </AnimatedSection>

              {/* Quick Contact */}
              <AnimatedSection delay={0.6}>
                <div className="flex flex-wrap gap-6 pt-8 border-t border-slate-200">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <span className="text-sm text-slate-600">{companyInfo.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <span className="text-sm text-slate-600">{companyInfo.email}</span>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right Content - Hero Image */}
            <AnimatedSection direction="right" className="relative">
              <div className="relative">
                <div className="absolute -inset-4 gradient-brand rounded-3xl opacity-20 blur-xl" />
                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Beautiful landscape design"
                    className="w-full aspect-[4/3] object-cover rounded-3xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="section-padding bg-white">
        <div className="container-responsive">
          <AnimatedSection className="text-center mb-16">
            <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 mb-4 px-4 py-2">
              Our Services
            </Badge>
            <h2 className="heading-lg mb-6">
              Comprehensive <span className="text-blue-600">Solutions</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From landscape design to building consulting, we provide end-to-end services 
              for your development needs
            </p>
          </AnimatedSection>
          
          <div className="grid grid-auto-fit gap-8 mb-16">
            {services.slice(0, 6).map((service, index) => (
              <AnimatedCard key={service.id} index={index}>
                <ServiceCard service={service} />
              </AnimatedCard>
            ))}
          </div>
          
          <AnimatedSection className="text-center">
            <Button className="btn-primary">
              <Link href="/services" className="flex items-center">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="section-padding bg-slate-50">
        <div className="container-responsive">
          <AnimatedSection className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-700 border-blue-200 mb-4 px-4 py-2">
              Portfolio
            </Badge>
            <h2 className="heading-lg mb-6">
              Featured <span className="text-emerald-600">Projects</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Showcasing our expertise in creating remarkable spaces that inspire and endure
            </p>
          </AnimatedSection>
          
          <div className="grid grid-auto-fit gap-8 mb-16">
            {portfolioItems.slice(0, 6).map((item, index) => (
              <AnimatedCard key={item.id} index={index}>
                <PortfolioCard item={item} />
              </AnimatedCard>
            ))}
          </div>
          
          <AnimatedSection className="text-center">
            <Button className="btn-primary">
              <Link href="/portfolio" className="flex items-center">
                View Full Portfolio
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding gradient-brand text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 30% 70%, rgba(255, 255, 255, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.2) 0%, transparent 50%)',
        }} />
        
        <div className="container-responsive relative">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
              Total Project dan Client
            </h2>
            <p className="text-xl text-blue-100">Numbers that speak for our excellence</p>
          </AnimatedSection>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedCard key={index} index={index}>
                <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 card-hover">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">
                    <CounterAnimation end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-blue-100 font-medium">{stat.label}</div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Business Partners */}
      <section className="section-padding bg-white">
        <div className="container-responsive">
          <AnimatedSection className="text-center mb-16">
            <Badge className="bg-amber-100 text-amber-700 border-amber-200 mb-4 px-4 py-2">
              Business Partner
            </Badge>
            <h2 className="heading-lg mb-6">
              Trusted by Leading <span className="text-blue-600">Organizations</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're proud to work with industry leaders and government institutions
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {businessPartners.map((partner, index) => (
              <AnimatedCard key={index} index={index}>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 card-hover text-center">
                  <div className="w-full h-16 bg-slate-100 rounded-lg mb-4 flex items-center justify-center">
                    <Building2 className="h-8 w-8 text-slate-400" />
                  </div>
                  <p className="text-sm font-medium text-slate-600">{partner.name}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation/Certifications */}
      <section className="section-padding bg-slate-50">
        <div className="container-responsive">
          <AnimatedSection className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-700 border-purple-200 mb-4 px-4 py-2">
              Dokumentasi
            </Badge>
            <h2 className="heading-lg mb-6">
              Certified <span className="text-purple-600">Excellence</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our certifications and quality standards ensure professional service delivery
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'ISO 9001:2015', description: 'Quality Management System', icon: Award },
              { title: 'Green Building', description: 'Sustainable Construction Certified', icon: Sparkles },
              { title: 'AMDAL Certified', description: 'Environmental Impact Assessment', icon: Shield },
              { title: 'Professional License', description: 'Licensed Engineers & Architects', icon: Target }
            ].map((cert, index) => (
              <AnimatedCard key={index} index={index}>
                <Card className="card-primary text-center h-full card-hover">
                  <CardHeader>
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mx-auto mb-4">
                      <cert.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-slate-900">{cert.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600">
                      {cert.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle at 30% 70%, rgba(30, 64, 175, 0.5) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(5, 150, 105, 0.5) 0%, transparent 50%)',
        }} />
        
        <div className="relative container-responsive text-center">
          <AnimatedSection>
            <Sparkles className="h-16 w-16 text-emerald-400 mx-auto mb-6" />
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Ready to <span className="text-blue-400">Transform</span> Your Space?
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
              Let's work together to create sustainable and beautiful environments 
              that exceed your expectations and stand the test of time.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="btn-primary">
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-slate-900">
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default HomePage;