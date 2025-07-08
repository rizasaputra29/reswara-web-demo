'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { portfolioItems } from '@/lib/data';
import PortfolioCard from '@/components/PortfolioCard';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedCard from '@/components/AnimatedCard';
import CounterAnimation from '@/components/CounterAnimation';

const PortfolioPage = () => {
  const [filter, setFilter] = useState<'all' | 'landscape' | 'building'>('all');

  const filteredItems = portfolioItems.filter(item => 
    filter === 'all' || item.category === filter
  );

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
                Our Portfolio
              </Badge>
              <h1 className="heading-xl mb-6">
                Featured <span className="text-red-600">Projects</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Showcasing our expertise in creating remarkable spaces and successful projects 
                that inspire and endure.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <AnimatedSection className="text-center mb-12">
            <h2 className="heading-lg mb-4">
              Our Work
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Explore our diverse portfolio of landscape and building projects
            </p>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button
                variant={filter === 'all' ? 'default' : 'outline'}
                onClick={() => setFilter('all')}
                className={filter === 'all' ? 'btn-primary' : 'btn-secondary'}
              >
                All Projects
              </Button>
              <Button
                variant={filter === 'landscape' ? 'default' : 'outline'}
                onClick={() => setFilter('landscape')}
                className={filter === 'landscape' ? 'bg-green-600 hover:bg-green-700 text-white' : 'border-green-500 text-green-700 hover:bg-green-50'}
              >
                Landscape
              </Button>
              <Button
                variant={filter === 'building' ? 'default' : 'outline'}
                onClick={() => setFilter('building')}
                className={filter === 'building' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'border-blue-500 text-blue-700 hover:bg-blue-50'}
              >
                Building
              </Button>
            </div>
          </AnimatedSection>
          
          <motion.div 
            className="grid grid-auto-fit gap-8"
            layout
          >
            {filteredItems.map((item, index) => (
              <AnimatedCard key={item.id} index={index}>
                <PortfolioCard item={item} />
              </AnimatedCard>
            ))}
          </motion.div>
          
          {filteredItems.length === 0 && (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-500 text-lg">No projects found for the selected filter.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Project Stats */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto container-padding">
          <AnimatedSection className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              Project Statistics
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Numbers that showcase our experience and success
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <AnimatedCard index={0} className="text-center">
              <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
                <div className="text-5xl font-bold text-blue-600 mb-2">
                  <CounterAnimation end={100} suffix="+" />
                </div>
                <div className="text-gray-600 text-lg">Total Projects</div>
              </div>
            </AnimatedCard>
            <AnimatedCard index={1} className="text-center">
              <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
                <div className="text-5xl font-bold text-green-600 mb-2">
                  <CounterAnimation end={60} suffix="+" />
                </div>
                <div className="text-gray-600 text-lg">Landscape Projects</div>
              </div>
            </AnimatedCard>
            <AnimatedCard index={2} className="text-center">
              <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
                <div className="text-5xl font-bold text-orange-600 mb-2">
                  <CounterAnimation end={40} suffix="+" />
                </div>
                <div className="text-gray-600 text-lg">Building Projects</div>
              </div>
            </AnimatedCard>
            <AnimatedCard index={3} className="text-center">
              <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
                <div className="text-5xl font-bold text-purple-600 mb-2">
                  <CounterAnimation end={98} suffix="%" />
                </div>
                <div className="text-gray-600 text-lg">Client Satisfaction</div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 30% 70%, rgba(255, 255, 255, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.2) 0%, transparent 50%)',
        }} />
        
        <div className="container mx-auto container-padding text-center relative">
          <AnimatedSection>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life with our expertise and experience
            </p>
            <Button className="btn-secondary bg-white text-red-600 hover:bg-gray-100">
              Get Started Today
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;