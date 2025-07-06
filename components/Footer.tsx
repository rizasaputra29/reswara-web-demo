'use client';

import React from 'react';
import Link from 'next/link';
import { Building2, Phone, Mail, MapPin, Linkedin, Instagram, Facebook, ArrowRight } from 'lucide-react';
import { companyInfo } from '@/lib/data';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(220, 38, 38, 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
        }} />
      </div>

      <div className="relative container mx-auto container-padding section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center shadow-lg">
                <Building2 className="h-7 w-7 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">
                  CV Reswara Praptama
                </span>
                <div className="text-xs text-gray-400 font-medium">Landscape & Building</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {companyInfo.description}
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Linkedin, href: companyInfo.socialMedia.linkedin, color: 'hover:text-blue-400' },
                { icon: Instagram, href: companyInfo.socialMedia.instagram, color: 'hover:text-pink-400' },
                { icon: Facebook, href: companyInfo.socialMedia.facebook, color: 'hover:text-blue-500' }
              ].map((social, index) => (
                <Link 
                  key={index}
                  href={social.href} 
                  className={`text-gray-400 ${social.color} transition-all duration-300 p-2 rounded-lg hover:bg-white/10 hover:scale-110`}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: '/about', label: 'About Us' },
                { href: '/services', label: 'Services' },
                { href: '/portfolio', label: 'Portfolio' },
                { href: '/team', label: 'Team' },
                { href: '/contact', label: 'Contact' }
              ].map((link, index) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-red-400 transition-all duration-300 text-sm flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              {[
                'Landscape Design',
                'Garden Development',
                'Architectural Design',
                'Building Permits',
                'Environmental Consulting'
              ].map((service, index) => (
                <li 
                  key={service}
                  className="text-gray-400 text-sm flex items-center group"
                >
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Info</h3>
            <div className="space-y-4">
              {[
                { icon: MapPin, text: companyInfo.address, color: 'text-red-400' },
                { icon: Phone, text: companyInfo.phone, color: 'text-blue-400' },
                { icon: Mail, text: companyInfo.email, color: 'text-green-400' }
              ].map((contact, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-3 group"
                >
                  <contact.icon className={`h-5 w-5 ${contact.color} mt-0.5 flex-shrink-0`} />
                  <span className="text-gray-400 text-sm leading-relaxed">{contact.text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Link 
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} CV Reswara Praptama. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;