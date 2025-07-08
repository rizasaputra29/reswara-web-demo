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
    },
    perizinan: {
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      text: 'text-purple-700',
      icon: 'bg-purple-100',
      iconText: 'text-purple-600',
      badge: 'bg-purple-100 text-purple-700 border-purple-200'
    },
    pengujian: {
      bg: 'bg-orange-50',
      border: 'border-orange-200',
      text: 'text-orange-700',
      icon: 'bg-orange-100',
      iconText: 'text-orange-600',
      badge: 'bg-orange-100 text-orange-700 border-orange-200'
    },
    studi: {
      bg: 'bg-indigo-50',
      border: 'border-indigo-200',
      text: 'text-indigo-700',
      icon: 'bg-indigo-100',
      iconText: 'text-indigo-600',
      badge: 'bg-indigo-100 text-indigo-700 border-indigo-200'
    },
    'penyelidikan-tanah': {
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      text: 'text-amber-700',
      icon: 'bg-amber-100',
      iconText: 'text-amber-600',
      badge: 'bg-amber-100 text-amber-700 border-amber-200'
    }
  };

  const colors = categoryColors[service.category as keyof typeof categoryColors];

  return (
    <Card className={`group hover:shadow-xl transition-all duration-300 border-2 ${colors?.border || 'border-gray-200'} ${colors?.bg || 'bg-white'} h-full relative overflow-hidden card-hover`}>
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <CardHeader className="pb-4 relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-4 ${colors?.icon || 'bg-gray-100'} rounded-2xl group-hover:shadow-lg transition-all duration-300`}>
            {IconComponent && <IconComponent className={`h-8 w-8 ${colors?.iconText || 'text-gray-600'}`} />}
          </div>
          <Badge className={`${colors?.badge || 'bg-gray-100 text-gray-700'} font-medium px-3 py-1 rounded-full`}>
            {service.category === 'landscape' ? '🌿 Landscape' : 
             service.category === 'building' ? '🏗️ Building' :
             service.category === 'perizinan' ? '📋 Perizinan' :
             service.category === 'pengujian' ? '🔬 Pengujian' :
             service.category === 'studi' ? '📊 Studi' :
             service.category === 'penyelidikan-tanah' ? '🏔️ Penyelidikan Tanah' : 
             service.category}
          </Badge>
        </div>
        <CardTitle className={`text-xl font-bold ${colors?.text || 'text-gray-900'} group-hover:text-red-600 transition-colors duration-300`}>
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
            <div key={index} className="flex items-center text-sm text-gray-600">
              <div className="w-2 h-2 bg-red-400 rounded-full mr-3 flex-shrink-0" />
              <span className="group-hover:text-gray-800 transition-colors duration-300">
                {detail}
              </span>
            </div>
          ))}
        </div>
      </CardContent>

      {/* Hover effect overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </Card>
  );
};

export default ServiceCard;