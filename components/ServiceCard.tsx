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

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="group hover:shadow-lg transition-all duration-300 border-gray-200 h-full">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              {IconComponent && <IconComponent className="h-6 w-6 text-blue-600" />}
            </motion.div>
            <Badge variant="outline" className={service.category === 'landscape' ? 'border-emerald-500 text-emerald-700' : 'border-orange-500 text-orange-700'}>
              {service.category === 'landscape' ? 'Landscape' : 'Building'}
            </Badge>
          </div>
          <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
            {service.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-gray-600 mb-4">
            {service.description}
          </CardDescription>
          <div className="space-y-1">
            {service.details.map((detail, index) => (
              <motion.div 
                key={index} 
                className="flex items-center text-sm text-gray-500"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.span 
                  className="w-2 h-2 bg-blue-400 rounded-full mr-2"
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.2 }}
                />
                {detail}
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;