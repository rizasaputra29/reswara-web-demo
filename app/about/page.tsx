'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Users, Award, Target, Eye, Heart, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { companyInfo } from '@/lib/data';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedCard from '@/components/AnimatedCard';

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Berkomitmen untuk memberikan layanan terbaik dengan standar kualitas tertinggi'
    },
    {
      icon: Eye,
      title: 'Innovation',
      description: 'Menggunakan teknologi terdepan dan pendekatan inovatif dalam setiap proyek'
    },
    {
      icon: Heart,
      title: 'Sustainability',
      description: 'Mengutamakan solusi ramah lingkungan dan berkelanjutan'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Bekerja sama dengan klien untuk mencapai visi bersama'
    }
  ];

  const milestones = [
    { year: '2010', title: 'Company Founded', description: 'Established CV Reswara Praptama with a vision to transform spaces' },
    { year: '2015', title: 'First Major Project', description: 'Completed our first large-scale landscape development project' },
    { year: '2018', title: 'Green Building Certified', description: 'Achieved certification for sustainable building practices' },
    { year: '2020', title: 'Digital Transformation', description: 'Implemented BIM and digital design workflows' },
    { year: '2023', title: '100+ Projects', description: 'Reached milestone of 100 completed projects' }
  ];

  const achievements = [
    'ISO 9001:2015 Quality Management Certified',
    'Green Building Council Indonesia Member',
    'AMDAL Certified Environmental Consultants',
    'Licensed Professional Engineers on Staff'
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-red-50 section-padding">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(220, 38, 38, 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
          }} />
        </div>
        
        <div className="relative container mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="bg-red-100 text-red-700 border-red-200 mb-6 px-4 py-2">
                About Us
              </Badge>
              <h1 className="heading-xl mb-6">
                Building <span className="text-red-600">Excellence</span> Since 2010
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Your trusted partner in landscape development and building consulting, 
                creating sustainable and beautiful environments for over {new Date().getFullYear() - 2010} years.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <h2 className="heading-lg mb-6">
                Who We Are
              </h2>
              <div className="space-y-6 text-body">
                <p>
                  CV Reswara Praptama adalah perusahaan konsultan terkemuka yang mengkhususkan diri dalam pengembangan lingkungan dan bangunan lanskap. Dengan pengalaman lebih dari satu dekade, kami telah membantu berbagai klien menciptakan ruang yang tidak hanya indah secara estetika, tetapi juga fungsional dan berkelanjutan.
                </p>
                <p>
                  Kami menyediakan layanan komprehensif mulai dari desain lanskap, pengembangan taman, konsultasi lingkungan, hingga perencanaan dan perizinan bangunan. Tim ahli kami terdiri dari arsitek, insinyur, dan konsultan berpengalaman yang berdedikasi untuk memberikan solusi terbaik.
                </p>
              </div>
              
              <div className="mt-8 space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="right" className="relative">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-red-500 to-blue-500 rounded-3xl opacity-20 blur-xl" />
                <img
                  src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Our team at work"
                  className="relative rounded-3xl shadow-2xl aspect-[4/3] object-cover w-full"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto container-padding">
          <AnimatedSection className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nilai-nilai yang membimbing setiap aspek pekerjaan kami
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedCard key={index} index={index}>
                <Card className="text-center border-gray-200 hover:shadow-xl transition-all duration-300 h-full card-hover">
                  <CardHeader className="pb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-2xl mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-red-600" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <AnimatedSection className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Milestones that define our growth and commitment to excellence
            </p>
          </AnimatedSection>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-red-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div 
                  key={index} 
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="border-gray-200 hover:shadow-xl transition-all duration-300 card-hover">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Badge className="bg-red-100 text-red-700 border-red-200 px-3 py-1">
                            {milestone.year}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg font-semibold text-gray-900">
                          {milestone.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-600">
                          {milestone.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative z-10 w-6 h-6 bg-red-600 rounded-full border-4 border-white shadow-lg" />
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 30% 70%, rgba(255, 255, 255, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.2) 0%, transparent 50%)',
        }} />
        
        <div className="container mx-auto container-padding relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <AnimatedSection>
              <div className="text-5xl font-bold mb-2">100+</div>
              <div className="text-red-100 text-lg">Projects Completed</div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-red-100 text-lg">Happy Clients</div>
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-red-100 text-lg">Years Experience</div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;