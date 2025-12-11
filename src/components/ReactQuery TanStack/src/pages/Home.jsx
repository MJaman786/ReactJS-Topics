import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Hero Headline */}
        <h1 className="text-6xl font-extralight tracking-tight text-gray-900 sm:text-7xl lg:text-8xl">
          <span className="block xl:inline">Launch Your Next</span>
          <span className="block text-indigo-600 xl:inline"> Big Idea.</span>
        </h1>
        
        {/* Subtext */}
        <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-8">
          Welcome to the heart of our application. Discover the tools and features designed to elevate your business and simplify your workflow.
        </p>
        
        {/* CTA Button */}
        <div className="mt-10 flex justify-center">
          <a
            href="#signup"
            className="w-full sm:w-auto px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 shadow-lg transition duration-150 ease-in-out transform hover:scale-105"
          >
            Get Started Free
          </a>
        </div>

      </div>
    </div>
  );
};

export default Home;