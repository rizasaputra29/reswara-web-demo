'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { services } from '@/lib/data';
import ServiceCard from '@/components/ServiceCard';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedCard from '@/components/AnimatedCard';

const ServicesPage = () => {
  const [filter, setFilter] = useState<'all' | 'landscape' | 'building' | 'perizinan' | 'pengujian' | 'studi' | 'penyelidikan-tanah'>('all');

  const filteredServices = services.filter(service => 
    filter === 'all' || service.category === filter
  );

  const categories = [
    { key: 'all', label: 'All Services', count: services.length },
    { key: 'landscape', label: '🌿 Landscape', count: services.filter(s => s.category === 'landscape').length },
    { key: 'building', label: '🏗️ Building', count: services.filter(s => s.category === 'building').length },
    { key: 'perizinan', label: '📋 Perizinan', count: services.filter(s => s.category === 'perizinan').length },
    { key: 'pengujian', label: '🔬 Pengujian', count: services.filter(s => s.category === 'pengujian').length },
    { key: 'studi', label: '📊 Studi', count: services.filter(s => s.category === 'studi').length },
    { key: 'penyelidikan-tanah', label: '🏔️ Penyelidikan Tanah', count: services.filter(s => s.category === 'penyelidikan-tanah').length }
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-50 via-white to-red-50 section-padding">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(220, 38, 38, 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
          }} />
        </div>
        
        <div className="relative container-responsive">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="bg-red-100 text-red-700 border-red-200 mb-6 px-4 py-2">
                Our Services
              </Badge>
              <h1 className="heading-xl mb-6">
                Comprehensive <span className="text-red-600">Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Professional landscape development and building consulting services 
                tailored to meet your specific needs and requirements.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-responsive">
          <AnimatedSection className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami menyediakan layanan lengkap untuk memenuhi kebutuhan pengembangan lingkungan dan bangunan Anda
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatedCard index={0}>
              <Card className="border-green-200 bg-green-50/50 h-full card-hover">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🌿</span>
                  </div>
                  <CardTitle className="text-2xl font-bold text-green-800">Landscape Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 text-center text-lg">
                    Layanan pengembangan lingkungan yang bertujuan untuk menciptakan ruang luar yang estetis, fungsional, dan berkelanjutan
                  </CardDescription>
                </CardContent>
              </Card>
            </AnimatedCard>
            
            <AnimatedCard index={1}>
              <Card className="border-red-200 bg-red-50/50 h-full card-hover">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🏗️</span>
                  </div>
                  <CardTitle className="text-2xl font-bold text-red-800">Building Consulting</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 text-center text-lg">
                    Konsultasi bangunan gedung yang meliputi perencanaan, desain, perizinan, dan pengujian untuk memastikan kualitas dan keamanan
                  </CardDescription>
                </CardContent>
              </Card>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-padding bg-red-50">
        <div className="container-responsive">
          <AnimatedSection className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              Browse Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Filter by category to find the specific services you need
            </p>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <Button
                  key={category.key}
                  variant={filter === category.key ? 'default' : 'outline'}
                  onClick={() => setFilter(category.key as any)}
                  className={`${
                    filter === category.key 
                      ? 'bg-red-600 hover:bg-red-700 text-white' 
                      : 'border-red-500 text-red-700 hover:bg-red-50'
                  } transition-all duration-300`}
                >
                  {category.label} ({category.count})
                </Button>
              ))}
            </div>
          </AnimatedSection>
          
          {/* Services Grid */}
          <motion.div 
            className="grid grid-auto-fit gap-8"
            layout
            key={filter}
          >
            {filteredServices.map((service, index) => (
              <AnimatedCard key={service.id} index={index}>
                <ServiceCard service={service} />
              </AnimatedCard>
            ))}
          </motion.div>
          
          {filteredServices.length === 0 && (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-500 text-lg">No services found for the selected category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-responsive">
          <AnimatedSection className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              Benefits of Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Manfaat yang akan Anda dapatkan dengan menggunakan layanan kami
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🎨',
                title: 'Aesthetic Value',
                description: 'Meningkatkan nilai estetika dan fungsionalitas ruang'
              },
              {
                icon: '🌱',
                title: 'Environmental Quality',
                description: 'Meningkatkan kualitas lingkungan dan kesehatan'
              },
              {
                icon: '🛡️',
                title: 'Safety & Security',
                description: 'Meningkatkan keselamatan dan keamanan'
              },
              {
                icon: '💰',
                title: 'Property Value',
                description: 'Meningkatkan nilai properti investasi Anda'
              }
            ].map((benefit, index) => (
              <AnimatedCard key={index} index={index}>
                <Card className="text-center border-gray-200 hover:shadow-xl transition-all duration-300 h-full card-hover">
                  <CardHeader>
                    <div className="text-5xl mb-4">{benefit.icon}</div>
                    <CardTitle className="text-lg font-semibold text-gray-900">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 30% 70%, rgba(255, 255, 255, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.2) 0%, transparent 50%)',
        }} />
        
        <div className="container-responsive text-center relative">
          <AnimatedSection>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life with our expertise and experience
            </p>
            <Button className="btn-secondary bg-white text-red-600 hover:bg-gray-100">
              <Link href="/contact" className="flex items-center">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;