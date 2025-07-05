'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TeamMember } from '@/lib/data';
import { motion } from 'framer-motion';

interface TeamCardProps {
  member: TeamMember;
}

const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="group hover:shadow-lg transition-all duration-300 h-full">
        <div className="aspect-square overflow-hidden rounded-t-lg relative">
          <motion.img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          />
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
            {member.name}
          </CardTitle>
          <CardDescription className="text-blue-600 font-medium">{member.position}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
          <div className="flex flex-wrap gap-1">
            {member.expertise.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Badge variant="secondary" className="text-xs">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TeamCard;