import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 border-t border-gray-700">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        
        {/* Navigation Links */}
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          {['About', 'Blog', 'Team', 'Privacy', 'Terms'].map((item) => (
            <div key={item} className="px-5 py-2">
              <a href={`#${item.toLowerCase()}`} className="text-base text-gray-400 hover:text-indigo-400 transition duration-150">
                {item}
              </a>
            </div>
          ))}
        </nav>
        
        {/* Social Media Icons (Simple placeholders) */}
        <div className="mt-8 flex justify-center space-x-6">
          {['Facebook', 'Instagram', 'Twitter', 'GitHub'].map((platform) => (
            <a key={platform} href="#" className="text-gray-400 hover:text-white transition duration-150">
              {/* Replace with actual SVG icons from Heroicons or similar */}
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="12" className="text-gray-700"/>
                <text x="12" y="15" fontSize="10" textAnchor="middle" fill="white">{platform[0]}</text>
              </svg>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="mt-8 text-center text-base text-gray-500">
          &copy; {currentYear} DarkTheme App. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;