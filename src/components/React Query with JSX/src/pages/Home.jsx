import React from 'react';

const Home = () => {
  return (
    <section id="home" className="bg-gray-800 min-h-[calc(100vh-4rem)] flex items-center justify-center py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtitle / Tag */}
        <p className="text-sm font-semibold text-indigo-400 uppercase tracking-widest mb-4">
          Revolutionize Your Workflow
        </p>
        
        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
          <span className="block">Unleash the Power of</span> 
          <span className="block text-indigo-400">Dark Theme Productivity.</span>
        </h1>
        
        {/* Description */}
        <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-3xl mx-auto">
          Our platform is meticulously crafted for developers and creatives who prefer a sleek, low-light environment without compromising clarity or performance.
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="w-full sm:w-auto px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 transition duration-150 ease-in-out transform hover:scale-105">
            Get Started Free
          </button>
          <button className="w-full sm:w-auto px-8 py-3 border-2 border-gray-600 text-base font-medium rounded-md text-gray-300 bg-transparent hover:bg-gray-700 transition duration-150 ease-in-out transform hover:scale-105">
            View Documentation
          </button>
        </div>

        {/* Small Trust/Sign-up text */}
        <p className="mt-8 text-sm text-gray-500">
          No credit card required. Join 50,000+ happy users today.
        </p>

      </div>
    </section>
  );
};

export default Home;