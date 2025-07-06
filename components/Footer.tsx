'use client';

import React from 'react';
import Link from 'next/link';
import { Building2, Phone, Mail, MapPin, Linkedin, Instagram, Facebook, Heart } from 'lucide-react';
import { companyInfo } from '@/lib/data';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(239, 68, 68, 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
        }} />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg hover:rotate-12 transition-transform duration-300">
                <Building2 className="h-7 w-7 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-red-400 to-red-300 bg-clip-text text-transparent">
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
                <div key={index} className="transform hover:scale-125 hover:-translate-y-1 transition-all duration-300">
                  <Link 
                    href={social.href} 
                    className={`text-gray-400 ${social.color} transition-colors duration-300 p-2 rounded-lg hover:bg-white/10`}
                  >
                    <social.icon className="h-5 w-5" />
                  </Link>
                </div>
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
                <li key={link.href} className="transform hover:translate-x-2 transition-transform duration-300">
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-red-400 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                  className="text-gray-400 text-sm flex items-center group transform hover:translate-x-2 transition-transform duration-300"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                  className="flex items-start space-x-3 transform hover:translate-x-2 transition-transform duration-300"
                >
                  <contact.icon className={`h-5 w-5 ${contact.color} mt-0.5 flex-shrink-0`} />
                  <span className="text-gray-400 text-sm leading-relaxed">{contact.text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 transform hover:scale-105 transition-transform duration-300">
              <Link 
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white text-sm font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Free Quote
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm flex items-center">
            © {new Date().getFullYear()} CV Reswara Praptama. Made with 
            <span className="mx-1 animate-pulse">
              <Heart className="h-4 w-4 text-red-500 fill-current" />
            </span>
            in Indonesia
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