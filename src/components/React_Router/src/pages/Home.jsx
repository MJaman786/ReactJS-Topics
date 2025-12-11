import React from 'react';

const mockPartnerLogos = [
  { id: 1, name: 'Stripe', logo: 'Stripe Logo Placeholder' },
  { id: 2, name: 'Google', logo: 'Google Logo Placeholder' },
  { id: 3, name: 'Slack', logo: 'Slack Logo Placeholder' },
  { id: 4, name: 'Netflix', logo: 'Netflix Logo Placeholder' },
  { id: 5, name: 'Airbnb', logo: 'Airbnb Logo Placeholder' },
];

const Home = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 pt-12 pb-16 sm:px-6 lg:px-8 lg:pt-24 lg:pb-32">
        
        {/* --- 1. Hero Content & Image --- */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center">
          
          {/* Text Content (Col 1-6) */}
          <div className="lg:col-span-6 text-center lg:text-left">
            
            {/* Tagline */}
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">
              The Modern Solution
            </p>

            {/* Hero Headline */}
            <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              <span className="block xl:inline">Launch Your Next</span>
              <span className="block text-indigo-600 xl:inline"> Big Idea.</span>
            </h1>
            
            {/* Subtext */}
            <p className="mt-6 text-xl text-gray-500 max-w-xl mx-auto lg:mx-0">
              Welcome to the heart of our application. Discover the tools and features designed to elevate your business and simplify your workflow.
            </p>
            
            {/* CTA Button */}
            <div className="mt-10 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
              <a
                href="#signup"
                className="w-full sm:w-auto px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 shadow-lg transition duration-150 ease-in-out transform hover:scale-105"
              >
                Get Started Free
              </a>
              <a
                href="/features"
                className="w-full sm:w-auto px-8 py-3 border border-indigo-600 text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 md:py-4 md:text-lg md:px-10 transition duration-150 ease-in-out"
              >
                Learn More
              </a>
            </div>

          </div>

          {/* Image/Visual (Col 7-12) */}
          <div className="mt-12 lg:mt-0 lg:col-span-6">
            {/* Placeholder for a hero image or device mockup */}
            <div className="relative overflow-hidden rounded-xl shadow-2xl h-80 bg-gray-200 flex items-center justify-center border-4 border-gray-100">
              <p className="text-gray-500 text-lg font-medium">
                [Product Mockup or Illustration Placeholder]
              </p>
              
            </div>
          </div>
        </div>

        {/* --- 2. Social Proof/Logos --- */}
        <div className="mt-16 lg:mt-24">
          <p className="text-center text-sm font-semibold uppercase text-gray-400 tracking-wide">
            Trusted by innovators worldwide
          </p>
          <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5 items-center justify-center">
            {mockPartnerLogos.map((partner) => (
              <div key={partner.id} className="col-span-1 flex justify-center py-2 grayscale hover:grayscale-0 opacity-75 hover:opacity-100 transition duration-300">
                {/* You would replace this text with an <img /> component */}
                <span className="text-gray-400 font-bold text-lg">{partner.logo}</span>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Home;