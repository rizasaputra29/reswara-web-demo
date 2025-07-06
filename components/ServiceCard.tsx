'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Service } from '@/lib/data';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const IconComponent = (LucideIcons as any)[service.icon];

  const categoryColors = {
    landscape: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      text: 'text-green-700',
      icon: 'bg-green-100',
      iconText: 'text-green-600',
      badge: 'bg-green-100 text-green-700 border-green-200'
    },
    building: {
      bg: 'bg-blue-50',
      border: 'border-blue-200', 
      text: 'text-blue-700',
      icon: 'bg-blue-100',
      iconText: 'text-blue-600',
      badge: 'bg-blue-100 text-blue-700 border-blue-200'
    }
  };

  const colors = categoryColors[service.category];

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className={`group hover:shadow-2xl transition-all duration-500 border-2 ${colors.border} ${colors.bg} h-full relative overflow-hidden`}>
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          initial={{ scale: 0, rotate: 45 }}
          whileHover={{ scale: 1.5, rotate: 0 }}
          transition={{ duration: 0.6 }}
        />
        
        <CardHeader className="pb-4 relative z-10">
          <div className="flex items-center justify-between mb-4">
            <motion.div
              className={`p-3 ${colors.icon} rounded-2xl group-hover:shadow-lg transition-all duration-300`}
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              {IconComponent && <IconComponent className={`h-7 w-7 ${colors.iconText}`} />}
            </motion.div>
            <Badge className={`${colors.badge} font-medium px-3 py-1 rounded-full`}>
              {service.category === 'landscape' ? '🌿 Landscape' : '🏗️ Building'}
            </Badge>
          </div>
          <CardTitle className={`text-xl font-bold ${colors.text} group-hover:text-red-600 transition-colors duration-300`}>
            {service.title}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="relative z-10">
          <CardDescription className="text-gray-600 mb-6 leading-relaxed">
            {service.description}
          </CardDescription>
          
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">
              Key Services:
            </h4>
            {service.details.map((detail, index) => (
              <motion.div 
                key={index} 
                className="flex items-center text-sm text-gray-600"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 5 }}
              >
                <motion.div 
                  className="w-2 h-2 bg-red-400 rounded-full mr-3 flex-shrink-0"
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.2 }}
                />
                <span className="group-hover:text-gray-800 transition-colors duration-300">
                  {detail}
                </span>
              </motion.div>
            ))}
          </div>
        </CardContent>

        {/* Hover effect overlay */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
        />
      </Card>
    </motion.div>
  );
};

export default ServiceCard;