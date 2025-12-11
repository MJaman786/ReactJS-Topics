import React from 'react';
// Using lucide-react for social media icons
import { Facebook, Twitter, Instagram, Linkedin, Rss } from 'lucide-react'; 

// --- Mock Data ---
const footerData = {
  brand: {
    name: 'Your Logo',
    description: 'Simplifying modern web solutions.',
    copyright: `© ${new Date().getFullYear()} Your Company Name. All rights reserved.`,
  },
  sections: [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '#' },
        { name: 'Pricing', href: '#' },
        { name: 'Documentation', href: '#' },
        { name: 'API Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Press', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Help Center', href: '#' },
        { name: 'Partners', href: '#' },
        { name: 'Newsletter', href: '#' },
        { name: 'Terms & Conditions', href: '#' },
      ],
    },
  ],
  social: [
    { icon: Facebook, href: '#facebook', name: 'Facebook' },
    { icon: Twitter, href: '#twitter', name: 'Twitter' },
    { icon: Instagram, href: '#instagram', name: 'Instagram' },
    { icon: Linkedin, href: '#linkedin', name: 'LinkedIn' },
    { icon: Rss, href: '#rss', name: 'RSS' },
  ],
};

const Footer = () => {
  const { brand, sections, social } = footerData;

  return (
    <footer className="bg-gray-900 mt-10">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        
        {/* --- Main Content Grid --- */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          
          {/* Column 1: Brand/Logo Section (Takes 2 columns on medium screens) */}
          <div className="col-span-2 md:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold text-white">{brand.name}</h3>
            <p className="text-gray-400 text-sm max-w-xs">{brand.description}</p>
          </div>

          {/* Columns 2, 3, 4: Navigation Sections */}
          {sections.map((section, index) => (
            <div key={index} className="col-span-1">
              <h4 className="text-base font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition duration-150 ease-in-out text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
        </div>
        
        {/* --- Separator and Copyright/Social Section --- */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          
          {/* Copyright Text */}
          <p className="text-sm text-gray-500 text-center md:text-left">
            {brand.copyright}
          </p>
          
          {/* Social Icons */}
          <div className="flex space-x-6">
            {social.map((item, index) => (
              <a 
                key={index} 
                href={item.href} 
                className="text-gray-400 hover:text-white transition duration-150 ease-in-out"
                aria-label={item.name}
              >
                <item.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;