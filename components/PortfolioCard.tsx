'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PortfolioItem } from '@/lib/data';
import { motion } from 'framer-motion';
import { Calendar, User, ExternalLink } from 'lucide-react';

interface PortfolioCardProps {
  item: PortfolioItem;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ item }) => {
  const categoryColors = {
    landscape: {
      badge: 'bg-green-100 text-green-700 border-green-200',
      accent: 'from-green-500 to-green-600'
    },
    building: {
      badge: 'bg-blue-100 text-blue-700 border-blue-200',
      accent: 'from-blue-500 to-blue-600'
    },
    perizinan: {
      badge: 'bg-purple-100 text-purple-700 border-purple-200',
      accent: 'from-purple-500 to-purple-600'
    },
    pengujian: {
      badge: 'bg-orange-100 text-orange-700 border-orange-200',
      accent: 'from-orange-500 to-orange-600'
    },
    studi: {
      badge: 'bg-indigo-100 text-indigo-700 border-indigo-200',
      accent: 'from-indigo-500 to-indigo-600'
    },
    'penyelidikan-tanah': {
      badge: 'bg-amber-100 text-amber-700 border-amber-200',
      accent: 'from-amber-500 to-amber-600'
    }
  };

  const colors = categoryColors[item.category] || categoryColors.building; // Fallback to building colors

  const getCategoryDisplay = (category: string) => {
    const categoryMap = {
      landscape: '🌿 Landscape',
      building: '🏗️ Building',
      perizinan: '📋 Perizinan',
      pengujian: '🔬 Pengujian',
      studi: '📊 Studi',
      'penyelidikan-tanah': '🏔️ Penyelidikan Tanah',
      default: '🏗️ Building'
    };
    return categoryMap[category] || categoryMap.default;
  };

  return (
    <Card className="group hover:shadow-2xl transition-all duration-500 overflow-hidden h-full bg-white border-2 border-gray-100 hover:border-red-200 card-hover">
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <Badge className={`${colors.badge} font-medium px-3 py-1 rounded-full shadow-lg`}>
            {getCategoryDisplay(item.category)}
          </Badge>
        </div>

        {/* View Project Button */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors duration-300">
            <ExternalLink className="h-5 w-5 text-gray-700" />
          </div>
        </div>

        {/* Year Badge */}
        <div className="absolute bottom-4 right-4">
          <Badge className="bg-white/90 text-gray-700 border-white/50 font-medium px-3 py-1 rounded-full shadow-lg backdrop-blur-sm">
            {item.year}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-red-600 transition-colors duration-300 line-clamp-2">
          {item.title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="pt-0">
        <CardDescription className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
          {item.description}
        </CardDescription>
        
        {/* Project Details */}
        <div className="space-y-2">
          <div className="flex items-center text-sm text-gray-500">
            <User className="h-4 w-4 mr-2 text-red-400" />
            <span className="font-medium">Client:</span>
            <span className="ml-1">{item.client}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="h-4 w-4 mr-2 text-red-400" />
            <span className="font-medium">Completed:</span>
            <span className="ml-1">{item.year}</span>
          </div>
        </div>
      </CardContent>

      {/* Bottom Accent Line */}
      <div className={`h-1 bg-gradient-to-r ${colors.accent} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
    </Card>
  );
};

export default PortfolioCard;