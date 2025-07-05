'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { services } from '@/lib/data';
import ServiceCard from '@/components/ServiceCard';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedCard from '@/components/AnimatedCard';

const ServicesPage = () => {
  const landscapeServices = services.filter(service => service.category === 'landscape');
  const buildingServices = services.filter(service => service.category === 'building');

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)',
            backgroundSize: '100% 100%',
          }}
        />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-4xl lg:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Services
            </motion.h1>
            <motion.p 
              className="text-xl text-blue-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Comprehensive solutions for landscape development and building consulting
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami menyediakan layanan lengkap untuk memenuhi kebutuhan pengembangan lingkungan dan bangunan Anda
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatedCard index={0}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="border-emerald-200 bg-emerald-50/50 h-full">
                  <CardHeader className="text-center">
                    <motion.div 
                      className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <span className="text-2xl">🌿</span>
                    </motion.div>
                    <CardTitle className="text-2xl font-bold text-emerald-800">Landscape Development</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-700 text-center">
                      Layanan pengembangan lingkungan yang bertujuan untuk menciptakan ruang luar yang estetis, fungsional, dan berkelanjutan
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedCard>
            
            <AnimatedCard index={1}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="border-blue-200 bg-blue-50/50 h-full">
                  <CardHeader className="text-center">
                    <motion.div 
                      className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <span className="text-2xl">🏗️</span>
                    </motion.div>
                    <CardTitle className="text-2xl font-bold text-blue-800">Building Consulting</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-700 text-center">
                      Konsultasi bangunan gedung yang meliputi perencanaan, desain, perizinan, dan pengujian untuk memastikan kualitas dan keamanan
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Landscape Services */}
      <section className="py-16 bg-emerald-50 relative overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-5"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2316a34a" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Landscape Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Menciptakan ruang luar yang indah dan berkelanjutan
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {landscapeServices.map((service, index) => (
              <AnimatedCard key={service.id} index={index}>
                <ServiceCard service={service} />
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Building Services */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Building Consulting Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Solusi lengkap untuk perencanaan dan perizinan bangunan
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {buildingServices.map((service, index) => (
              <AnimatedCard key={service.id} index={index}>
                <ServiceCard service={service} />
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
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
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="text-center border-gray-200 hover:shadow-lg transition-shadow h-full">
                    <CardHeader>
                      <motion.div 
                        className="text-4xl mb-4"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        {benefit.icon}
                      </motion.div>
                      <CardTitle className="text-lg font-semibold text-gray-900">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600">
                        {benefit.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;