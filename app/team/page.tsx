'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { teamMembers } from '@/lib/data';
import TeamCard from '@/components/TeamCard';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedCard from '@/components/AnimatedCard';

const TeamPage = () => {
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
                Our Team
              </Badge>
              <h1 className="heading-xl mb-6">
                Meet Our <span className="text-red-600">Expert</span> Team
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Experienced professionals dedicated to delivering exceptional results 
                and bringing your vision to life.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <AnimatedSection className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              Our Professional Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the skilled professionals who make our projects successful
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <AnimatedCard key={member.id} index={index}>
                <TeamCard member={member} />
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto container-padding">
          <AnimatedSection className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              What Makes Us Different
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our team's core strengths and collaborative approach
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎓',
                title: 'Expert Knowledge',
                description: 'Our team consists of certified professionals with advanced degrees and extensive experience in their respective fields'
              },
              {
                icon: '🤝',
                title: 'Collaborative Approach',
                description: 'We work closely with clients throughout the entire process, ensuring every project meets and exceeds expectations'
              },
              {
                icon: '🌱',
                title: 'Sustainable Focus',
                description: 'Every team member is committed to sustainable practices and environmentally responsible solutions'
              }
            ].map((value, index) => (
              <AnimatedCard key={index} index={index}>
                <Card className="text-center border-gray-200 hover:shadow-xl transition-all duration-300 h-full card-hover">
                  <CardHeader>
                    <div className="text-5xl mb-4">{value.icon}</div>
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

      {/* Join Our Team */}
      <section className="section-padding bg-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 30% 70%, rgba(255, 255, 255, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.2) 0%, transparent 50%)',
        }} />
        
        <div className="container mx-auto container-padding text-center relative">
          <AnimatedSection>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Join Our Growing Team
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for creating exceptional spaces
            </p>
            <div className="max-w-2xl mx-auto">
              <Card className="bg-white/10 border-white/20 text-center backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Current Openings</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-red-100 text-lg">
                    We have opportunities for landscape architects, structural engineers, and environmental consultants
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;