'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Users, Award, Target, Eye, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { companyInfo } from '@/lib/data';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedCard from '@/components/AnimatedCard';
import ParallaxImage from '@/components/ParallaxImage';

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

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-emerald-600 text-white">
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
              About CV Reswara Praptama
            </motion.h1>
            <motion.p 
              className="text-xl text-blue-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Your trusted partner in landscape development and building consulting since {companyInfo.established}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <p className="text-gray-600 mb-6">
                CV Reswara Praptama adalah perusahaan konsultan terkemuka yang mengkhususkan diri dalam pengembangan lingkungan dan bangunan lanskap. Dengan pengalaman lebih dari satu dekade, kami telah membantu berbagai klien menciptakan ruang yang tidak hanya indah secara estetika, tetapi juga fungsional dan berkelanjutan.
              </p>
              <p className="text-gray-600 mb-6">
                Kami menyediakan layanan komprehensif mulai dari desain lanskap, pengembangan taman, konsultasi lingkungan, hingga perencanaan dan perizinan bangunan. Tim ahli kami terdiri dari arsitek, insinyur, dan konsultan berpengalaman yang berdedikasi untuk memberikan solusi terbaik.
              </p>
              <div className="flex flex-wrap gap-2">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                  <Badge variant="outline" className="border-blue-500 text-blue-700">Certified Company</Badge>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                  <Badge variant="outline" className="border-emerald-500 text-emerald-700">Sustainable Solutions</Badge>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                  <Badge variant="outline" className="border-orange-500 text-orange-700">Expert Team</Badge>
                </motion.div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <ParallaxImage
                  src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Our team at work"
                  className="rounded-lg shadow-lg aspect-video"
                  speed={0.3}
                />
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nilai-nilai yang membimbing setiap aspek pekerjaan kami
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedCard key={index} index={index}>
                <Card className="text-center border-gray-200 hover:shadow-lg transition-shadow h-full">
                  <CardHeader className="pb-4">
                    <motion.div 
                      className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <value.icon className="h-6 w-6 text-blue-600" />
                    </motion.div>
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
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Milestones that define our growth and commitment to excellence
            </p>
          </AnimatedSection>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-200"></div>
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
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Card className="border-gray-200 hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Badge variant="outline" className="border-blue-500 text-blue-700">
                                {milestone.year}
                              </Badge>
                            </motion.div>
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
                    </motion.div>
                  </div>
                  <motion.div 
                    className="relative z-10 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  />
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            backgroundImage: 'radial-gradient(circle at 30% 70%, rgba(255, 255, 255, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.2) 0%, transparent 50%)',
          }}
        />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <AnimatedSection>
              <motion.div 
                className="text-4xl font-bold mb-2"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                100+
              </motion.div>
              <div className="text-blue-100">Projects Completed</div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <motion.div 
                className="text-4xl font-bold mb-2"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                50+
              </motion.div>
              <div className="text-blue-100">Happy Clients</div>
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <motion.div 
                className="text-4xl font-bold mb-2"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                15+
              </motion.div>
              <div className="text-blue-100">Years Experience</div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;