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
              Our Portfolio
            </motion.h1>
            <motion.p 
              className="text-xl text-blue-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Showcasing our expertise in creating remarkable spaces and successful projects
            </motion.p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Explore our diverse portfolio of landscape and building projects
            </p>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={filter === 'all' ? 'default' : 'outline'}
                  onClick={() => setFilter('all')}
                  className={filter === 'all' ? 'bg-blue-600 hover:bg-blue-700' : ''}
                >
                  All Projects
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={filter === 'landscape' ? 'default' : 'outline'}
                  onClick={() => setFilter('landscape')}
                  className={filter === 'landscape' ? 'bg-emerald-600 hover:bg-emerald-700' : 'border-emerald-500 text-emerald-700 hover:bg-emerald-50'}
                >
                  Landscape
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={filter === 'building' ? 'default' : 'outline'}
                  onClick={() => setFilter('building')}
                  className={filter === 'building' ? 'bg-orange-600 hover:bg-orange-700' : 'border-orange-500 text-orange-700 hover:bg-orange-50'}
                >
                  Building
                </Button>
              </motion.div>
            </div>
          </AnimatedSection>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Project Statistics
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Numbers that showcase our experience and success
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <AnimatedCard index={0} className="text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  <CounterAnimation end={100} suffix="+" />
                </div>
                <div className="text-gray-600">Total Projects</div>
              </motion.div>
            </AnimatedCard>
            <AnimatedCard index={1} className="text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-4xl font-bold text-emerald-600 mb-2">
                  <CounterAnimation end={60} suffix="+" />
                </div>
                <div className="text-gray-600">Landscape Projects</div>
              </motion.div>
            </AnimatedCard>
            <AnimatedCard index={2} className="text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-4xl font-bold text-orange-600 mb-2">
                  <CounterAnimation end={40} suffix="+" />
                </div>
                <div className="text-gray-600">Building Projects</div>
              </motion.div>
            </AnimatedCard>
            <AnimatedCard index={3} className="text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  <CounterAnimation end={98} suffix="%" />
                </div>
                <div className="text-gray-600">Client Satisfaction</div>
              </motion.div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life with our expertise and experience
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Get Started Today
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;