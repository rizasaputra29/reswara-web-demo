'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PortfolioItem } from '@/lib/data';
import { motion } from 'framer-motion';

interface PortfolioCardProps {
  item: PortfolioItem;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ item }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden h-full">
        <div className="aspect-video overflow-hidden relative">
          <motion.img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          />
        </div>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Badge variant="outline" className={item.category === 'landscape' ? 'border-emerald-500 text-emerald-700' : 'border-orange-500 text-orange-700'}>
                {item.category === 'landscape' ? 'Landscape' : 'Building'}
              </Badge>
            </motion.div>
            <span className="text-sm text-gray-500">{item.year}</span>
          </div>
          <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
            {item.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-gray-600 mb-2">
            {item.description}
          </CardDescription>
          <div className="text-sm text-gray-500">
            <span className="font-medium">Client:</span> {item.client}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PortfolioCard;