import React from 'react';

const LoadingSpinner = () => {
  return (
    // Full screen overlay with a dark, semi-transparent background
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-900 bg-opacity-90 backdrop-blur-sm transition-opacity duration-300">
      
      <div className="flex flex-col items-center">
        
        {/* The Spinner Animation */}
        <div className="relative">
          {/* Outer Ring - Base Color */}
          <div className="w-16 h-16 border-4 border-gray-700 rounded-full"></div>
          
          {/* Inner Ring - Animated Primary Color */}
          <div 
            className="absolute top-0 left-0 w-16 h-16 border-t-4 border-r-4 border-indigo-500 rounded-full animate-spin"
            // The `animate-spin` class is a built-in Tailwind animation.
            // If you need more complex animation, you can define it in your CSS.
          ></div>
        </div>

        {/* Loading Text */}
        <p className="mt-4 text-lg font-medium text-indigo-400 tracking-wider">
          Loading Content...
        </p>

        {/* Optional: Simple three-dot pulsing animation */}
        <div className="flex space-x-1 mt-2">
            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse delay-75"></div>
            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse delay-150"></div>
            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse delay-300"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;