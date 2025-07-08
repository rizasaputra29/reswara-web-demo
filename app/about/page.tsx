'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Users, Award, Target, Eye, Heart, CheckCircle } from 'lucide-react';
import { useContentStore } from '@/lib/contentStore';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedCard from '@/components/AnimatedCard';

const AboutPage = () => {
  const { teamMembers, companySettings } = useContentStore();

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Berkomitmen untuk memberikan layanan terbaik dengan standar kualitas tertinggi'
    },
    {
      icon: Eye,
      title: 'Innovation',
      description: 'Menggunakan teknologi terdepan dan pendekatan inovatif dalam setiap proyek'
    },
    {
      icon: Heart,
      title: 'Sustainability',
      description: 'Mengutamakan solusi ramah lingkungan dan berkelanjutan'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Bekerja sama dengan klien untuk mencapai visi bersama'
    }
  ];

  const milestones = [
    { year: '2010', title: 'Company Founded', description: 'Established CV Reswara Praptama with a vision to transform spaces' },
    { year: '2015', title: 'First Major Project', description: 'Completed our first large-scale landscape development project' },
    { year: '2018', title: 'Green Building Certified', description: 'Achieved certification for sustainable building practices' },
    { year: '2020', title: 'Digital Transformation', description: 'Implemented BIM and digital design workflows' },
    { year: '2023', title: '100+ Projects', description: 'Reached milestone of 100 completed projects' }
  ];

  const achievements = [
    'ISO 9001:2015 Quality Management Certified',
    'Green Building Council Indonesia Member',
    'AMDAL Certified Environmental Consultants',
    'Licensed Professional Engineers on Staff'
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative gradient-brand-light section-padding">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(30, 64, 175, 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(5, 150, 105, 0.3) 0%, transparent 50%)',
          }} />
        </div>
        
        <div className="relative container-responsive">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <Badge className="bg-blue-100 text-blue-700 border-blue-200 mb-6 px-4 py-2">
                About Us
              </Badge>
              <h1 className="heading-xl mb-6">
                Building <span className="text-blue-600">Excellence</span> Since 2010
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Your trusted partner in landscape development and building consulting, 
                creating sustainable and beautiful environments for over {new Date().getFullYear() - 2010} years.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Background Section */}
      <section className="section-padding bg-white">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <h2 className="heading-lg mb-6">
                Background
              </h2>
              <div className="space-y-6 text-body">
                <p>
                  {companySettings?.description ?? ''} Dengan pengalaman lebih dari satu dekade, kami telah membantu berbagai klien menciptakan ruang yang tidak hanya indah secara estetika, tetapi juga fungsional dan berkelanjutan.
                </p>
                <p>
                  Kami menyediakan layanan komprehensif mulai dari desain lanskap, pengembangan taman, konsultasi lingkungan, hingga perencanaan dan perizinan bangunan. Tim ahli kami terdiri dari arsitek, insinyur, dan konsultan berpengalaman yang berdedikasi untuk memberikan solusi terbaik.
                </p>
              </div>
              
              <div className="mt-8 space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-slate-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="right" className="relative">
              <div className="relative">
                <div className="absolute -inset-4 gradient-brand rounded-3xl opacity-20 blur-xl" />
                <img
                  src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Our team at work"
                  className="relative rounded-3xl shadow-2xl aspect-[4/3] object-cover w-full"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Visi Misi Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-responsive">
          <AnimatedSection className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              Visi Misi
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Nilai-nilai yang membimbing setiap aspek pekerjaan kami
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatedCard index={0}>
              <Card className="card-primary h-full">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 gradient-brand rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900">Visi</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 text-center text-lg leading-relaxed">
                    Menjadi perusahaan konsultan terdepan dalam pengembangan lingkungan dan bangunan yang berkelanjutan, 
                    menciptakan ruang yang harmonis antara manusia dan alam.
                  </CardDescription>
                </CardContent>
              </Card>
            </AnimatedCard>
            
            <AnimatedCard index={1}>
              <Card className="card-primary h-full">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900">Misi</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 text-lg leading-relaxed">
                    <ul className="space-y-2">
                      <li>• Memberikan solusi inovatif dalam desain dan konsultasi</li>
                      <li>• Mengutamakan kualitas dan kepuasan klien</li>
                      <li>• Menerapkan prinsip keberlanjutan dalam setiap proyek</li>
                      <li>• Mengembangkan SDM yang profesional dan kompeten</li>
                    </ul>
                  </CardDescription>
                </CardContent>
              </Card>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-responsive">
          <AnimatedSection className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              Our Values
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Nilai-nilai yang membimbing setiap aspek pekerjaan kami
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedCard key={index} index={index}>
                <Card className="text-center card-primary h-full card-hover">
                  <CardHeader className="pb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-slate-900">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team Section - Dynamic Content */}
      <section className="section-padding bg-slate-50">
        <div className="container-responsive">
          <AnimatedSection className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              Meet the Team
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Meet the skilled professionals who make our projects successful
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <AnimatedCard key={member.id} index={index}>
                <Card className="card-primary card-hover h-full group">
                  {/* Image Container */}
                  <div className="relative aspect-square overflow-hidden rounded-t-xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Content */}
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-bold text-slate-800">
                      {member.name}
                    </CardTitle>
                    <CardDescription className="text-blue-600 font-semibold text-sm">
                      {member.position}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <p className="text-slate-600 text-sm mb-4 leading-relaxed line-clamp-3">
                      {member.bio}
                    </p>
                    
                    {/* Expertise Tags */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-slate-800 text-xs uppercase tracking-wide">
                        Expertise:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {member.expertise.slice(0, 2).map((skill, skillIndex) => (
                          <Badge 
                            key={skillIndex}
                            variant="secondary" 
                            className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-full"
                          >
                            {skill}
                          </Badge>
                        ))}
                        {member.expertise.length > 2 && (
                          <Badge 
                            variant="secondary" 
                            className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-full"
                          >
                            +{member.expertise.length - 2}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-white">
        <div className="container-responsive">
          <AnimatedSection className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Milestones that define our growth and commitment to excellence
            </p>
          </AnimatedSection>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <AnimatedCard key={index} index={index}>
                  <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <Card className="card-primary card-hover">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <Badge className="bg-blue-100 text-blue-700 border-blue-200 px-3 py-1">
                              {milestone.year}
                            </Badge>
                          </div>
                          <CardTitle className="text-lg font-semibold text-slate-900">
                            {milestone.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-slate-600">
                            {milestone.description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="relative z-10 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg" />
                    <div className="w-1/2"></div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding gradient-brand text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 30% 70%, rgba(255, 255, 255, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.2) 0%, transparent 50%)',
        }} />
        
        <div className="container-responsive relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <AnimatedSection>
              <div className="text-5xl font-bold mb-2">100+</div>
              <div className="text-blue-100 text-lg">Projects Completed</div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-blue-100 text-lg">Happy Clients</div>
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-blue-100 text-lg">Years Experience</div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;