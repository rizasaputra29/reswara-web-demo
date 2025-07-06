'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { companyInfo } from '@/lib/data';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedCard from '@/components/AnimatedCard';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
                Contact Us
              </Badge>
              <h1 className="heading-xl mb-6">
                Let's <span className="text-red-600">Connect</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Ready to transform your space? Get in touch with our expert team 
                for a free consultation and professional advice.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <AnimatedSection direction="left">
              <h2 className="heading-md mb-6">
                Get in Touch
              </h2>
              <p className="text-body mb-8">
                Hubungi kami untuk konsultasi gratis dan diskusi mengenai proyek Anda. Tim ahli kami siap membantu mewujudkan visi ruang impian Anda.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Phone, title: 'Phone', info: companyInfo.phone, color: 'blue' },
                  { icon: Mail, title: 'Email', info: companyInfo.email, color: 'green' },
                  { icon: MapPin, title: 'Address', info: companyInfo.address, color: 'red' },
                  { icon: Clock, title: 'Office Hours', info: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 9:00 AM - 2:00 PM', color: 'purple' }
                ].map((contact, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 bg-${contact.color}-100 rounded-xl flex items-center justify-center`}>
                        <contact.icon className={`h-6 w-6 text-${contact.color}-600`} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{contact.title}</h3>
                      <p className="text-gray-600 whitespace-pre-line">{contact.info}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection direction="right">
              <Card className="border-gray-200 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Send us a Message
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="w-full"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Your phone number"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          Company
                        </label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your company name"
                          className="w-full"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        <option value="landscape-design">Landscape Design</option>
                        <option value="garden-development">Garden Development</option>
                        <option value="green-space">Green Space Development</option>
                        <option value="environmental-consulting">Environmental Consulting</option>
                        <option value="architectural-design">Architectural Design</option>
                        <option value="permits">Building Permits</option>
                        <option value="testing">Testing & Inspection</option>
                        <option value="studies">Feasibility Studies</option>
                        <option value="soil-investigation">Soil Investigation</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project..."
                        rows={4}
                        className="w-full"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full btn-primary">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto container-padding">
          <AnimatedSection className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Common questions about our services and process
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'How long does a typical project take?',
                answer: 'Project duration varies depending on scope and complexity. Landscape design projects typically take 4-8 weeks, while building consulting can range from 2-6 months.'
              },
              {
                question: 'Do you provide free consultations?',
                answer: 'Yes! We offer free initial consultations to discuss your project requirements and provide preliminary recommendations.'
              },
              {
                question: 'What areas do you serve?',
                answer: 'We primarily serve the Jakarta metropolitan area and surrounding regions. For projects outside this area, please contact us to discuss feasibility.'
              },
              {
                question: 'Do you handle permit applications?',
                answer: 'Absolutely! We handle all types of building permits including environmental permits, building approvals, and safety certifications.'
              }
            ].map((faq, index) => (
              <AnimatedCard key={index} index={index}>
                <Card className="border-gray-200 h-full card-hover">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {faq.answer}
                    </CardDescription>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;