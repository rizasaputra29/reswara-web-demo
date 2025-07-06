'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TeamMember } from '@/lib/data';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Award } from 'lucide-react';

interface TeamCardProps {
  member: TeamMember;
}

const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <Card className="group hover:shadow-2xl transition-all duration-500 h-full bg-white border-2 border-gray-100 hover:border-red-200 overflow-hidden card-hover">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Social Links */}
        <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors duration-300">
            <Linkedin className="h-5 w-5 text-blue-600" />
          </div>
          <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors duration-300">
            <Mail className="h-5 w-5 text-red-600" />
          </div>
        </div>

        {/* Professional Badge */}
        <div className="absolute top-4 right-4">
          <Badge className="bg-red-100 text-red-700 border-red-200 font-medium px-3 py-1 rounded-full shadow-lg">
            <Award className="h-3 w-3 mr-1" />
            Expert
          </Badge>
        </div>
      </div>

      {/* Content */}
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-red-600 transition-colors duration-300">
          {member.name}
        </CardTitle>
        <CardDescription className="text-red-600 font-semibold text-base">
          {member.position}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-0">
        <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-3">
          {member.bio}
        </p>
        
        {/* Expertise Tags */}
        <div className="space-y-3">
          <h4 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">
            Expertise:
          </h4>
          <div className="flex flex-wrap gap-2">
            {member.expertise.map((skill, index) => (
              <Badge 
                key={index}
                variant="secondary" 
                className="text-xs bg-gray-100 text-gray-700 hover:bg-red-100 hover:text-red-700 transition-colors duration-300 px-3 py-1 rounded-full"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>

      {/* Bottom Accent Line */}
      <div className="h-1 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </Card>
  );
};

export default TeamCard;