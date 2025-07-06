'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle, Star, Users, Award, Building2, Sparkles, Target, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { services, portfolioItems, companyInfo, incrementVisitorCount } from '@/lib/data';
import ServiceCard from '@/components/ServiceCard';
import PortfolioCard from '@/components/PortfolioCard';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedCard from '@/components/AnimatedCard';
import CounterAnimation from '@/components/CounterAnimation';

const HomePage = () => {
  useEffect(() => {
    incrementVisitorCount();
  }, []);

  const stats = [
    { icon: Building2, value: 100, label: 'Projects Completed', suffix: '+', color: 'red' },
    { icon: Users, value: 50, label: 'Happy Clients', suffix: '+', color: 'blue' },
    { icon: Award, value: 15, label: 'Years Experience', suffix: '+', color: 'green' },
    { icon: Star, value: 4.9, label: 'Client Rating', suffix: '', color: 'yellow' },
  ];

  const benefits = [
    'Professional expertise with 15+ years experience',
    'Comprehensive solutions from design to completion',
    'Sustainable and environmentally conscious approach',
    'Certified professionals and quality assurance'
  ];

  const features = [
    {
      icon: Target,
      title: 'Precision Planning',
      description: 'Detailed planning with cutting-edge technology and proven methodologies',
      color: 'red'
    },
    {
      icon: Sparkles,
      title: 'Creative Design',
      description: 'Innovative and sustainable design solutions tailored to your needs',
      color: 'blue'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous quality control and professional certification standards',
      color: 'green'
    }
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 via-white to-red-50">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(220, 38, 38, 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
          }} />
        </div>

        <div className="relative container mx-auto container-padding py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Badge className="bg-red-100 text-red-700 border-red-200 mb-6 px-4 py-2">
                  🏆 Trusted Since 2010
                </Badge>
                <h1 className="heading-xl">
                  <span className="text-red-600">Transform</span>
                  <br />
                  Your Space with
                  <br />
                  <span className="text-gray-900">Professional Excellence</span>
                </h1>
              </motion.div>

              <motion.p 
                className="text-xl text-gray-600 leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Leading landscape development and building consulting services. 
                Creating sustainable, beautiful, and functional environments for over 15 years.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Button className="btn-primary">
                  <Link href="/services" className="flex items-center">
                    Explore Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button className="btn-secondary">
                  <Link href="/contact">Free Consultation</Link>
                </Button>
              </motion.div>

              {/* Features */}
              <motion.div 
                className="grid grid-cols-3 gap-6 pt-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {features.map((feature, index) => (
                  <div key={index} className="text-center group">
                    <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-${feature.color}-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className={`h-6 w-6 text-${feature.color}-600`} />
                    </div>
                    <h3 className="font-semibold text-gray-800 text-sm mb-1">{feature.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Content - Hero Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-red-500 to-blue-500 rounded-3xl opacity-20 blur-xl" />
                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Beautiful landscape design"
                    className="w-full aspect-[4/3] object-cover rounded-3xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <AnimatedSection className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              Trusted by <span className="text-red-600">Hundreds</span> of Clients
            </h2>
            <p className="text-xl text-gray-600">Numbers that speak for our excellence</p>
          </AnimatedSection>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedCard key={index} index={index}>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 card-hover">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-${stat.color}-100 rounded-2xl mb-4`}>
                    <stat.icon className={`h-8 w-8 text-${stat.color}-600`} />
                  </div>
                  <div className="text-4xl font-bold text-gray-800 mb-2">
                    <CounterAnimation end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto container-padding">
          <AnimatedSection className="text-center mb-16">
            <Badge className="bg-red-100 text-red-700 border-red-200 mb-4 px-4 py-2">
              Our Expertise
            </Badge>
            <h2 className="heading-lg mb-6">
              Comprehensive <span className="text-red-600">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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

      {/* Benefits Section */}
      <section className="section-padding bg-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-500 to-red-700" />
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.2) 0%, transparent 50%)',
        }} />
        
        <div className="relative container mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <Badge className="bg-white/20 text-white border-white/30 mb-6 px-4 py-2">
                Why Choose Us
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-white">
                Transform Your Vision Into <span className="text-yellow-300">Reality</span>
              </h2>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-yellow-300 mt-1 flex-shrink-0" />
                    <span className="text-lg text-red-50">{benefit}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="right" className="relative">
              <div className="relative">
                <div className="absolute -inset-4 bg-white/20 rounded-3xl blur-xl" />
                <img
                  src="https://images.pexels.com/photos/1134166/pexels-photo-1134166.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Beautiful landscape design"
                  className="relative rounded-3xl shadow-2xl aspect-[4/3] object-cover w-full"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <AnimatedSection className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-700 border-blue-200 mb-4 px-4 py-2">
              Our Work
            </Badge>
            <h2 className="heading-lg mb-6">
              Featured <span className="text-blue-600">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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

      {/* CTA Section */}
      <section className="section-padding bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle at 30% 70%, rgba(220, 38, 38, 0.5) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(59, 130, 246, 0.5) 0%, transparent 50%)',
        }} />
        
        <div className="relative container mx-auto container-padding text-center">
          <AnimatedSection>
            <Sparkles className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Ready to <span className="text-red-400">Transform</span> Your Space?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Let's work together to create sustainable and beautiful environments 
              that exceed your expectations and stand the test of time.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="btn-primary">
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-gray-900">
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